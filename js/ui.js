/**
 * Language Test Units 1 to 8 - UI Rendering and View Controller
 * Pure Vanilla JavaScript SPA controller
 */

const UI = {
  activeScreen: "start",
  activeSection: "vocabulary",
  currentCourse: "gogetter3",
  currentUnit: "unit1",
  currentVariant: "variantA",
  student: null,
  answers: {},
  focusedInputId: null,
  saveTimer: null,

  init() {
    // Check URL parameters for pre-selected course: ?course=gg1 / ?course=gg2 / ?course=gg3 / ?course=gg4
    try {
      if (typeof window !== "undefined" && window.location && window.location.search) {
        const p = new URLSearchParams(window.location.search);
        const c = p.get("course") || p.get("level");
        if (c) {
          if (c === "gg4" || c === "gogetter4" || c === "4") this.currentCourse = "gogetter4";
          else if (c === "gg3" || c === "gogetter3" || c === "3") this.currentCourse = "gogetter3";
          else if (c === "gg2" || c === "gogetter2" || c === "2") this.currentCourse = "gogetter2";
          else if (c === "gg1" || c === "gogetter1" || c === "1") this.currentCourse = "gogetter1";
        }
      }
    } catch (e) {}

    if (typeof TEST_DATA !== "undefined") {
      TEST_DATA.currentCourse = this.currentCourse;
    }

    this.bindEvents();
    this.initCourseSelector();
    this.renderUnitSelector(this.currentCourse);
    this.initUnitSelector();
    this.checkForResume();
  },

  bindEvents() {
    // Start Test Form submission
    const startForm = document.getElementById("start-test-form");
    if (startForm) {
      startForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleStartTest();
      });
    }

    // Student Name Input - dynamic validation & micro-interactions
    const studentNameInput = document.getElementById("student-name");
    if (studentNameInput) {
      const updateNameValidation = () => {
        const val = studentNameInput.value.trim();
        const validIndicator = document.getElementById("name-valid-indicator");
        const avatarBadge = document.getElementById("name-avatar-badge");
        const nameCard = document.getElementById("student-name-card");

        if (val.length >= 2) {
          if (validIndicator) validIndicator.classList.add("active");
          if (avatarBadge) avatarBadge.textContent = "🎓";
          if (nameCard) nameCard.classList.add("name-filled");
        } else {
          if (validIndicator) validIndicator.classList.remove("active");
          if (avatarBadge) avatarBadge.textContent = "👤";
          if (nameCard) nameCard.classList.remove("name-filled");
        }
      };

      studentNameInput.addEventListener("input", updateNameValidation);
      studentNameInput.addEventListener("change", updateNameValidation);
      // Run once on load in case of browser autofill
      updateNameValidation();
    }

    // Teacher Name Input - dynamic validation & micro-interactions (Optional)
    const teacherNameInput = document.getElementById("teacher-name");
    if (teacherNameInput) {
      const updateTeacherValidation = () => {
        const val = teacherNameInput.value.trim();
        const validIndicator = document.getElementById("teacher-valid-indicator");
        const teacherCard = document.getElementById("teacher-step-card");

        if (val.length >= 2) {
          if (validIndicator) validIndicator.classList.add("active");
          if (teacherCard) teacherCard.classList.add("teacher-filled");
        } else {
          if (validIndicator) validIndicator.classList.remove("active");
          if (teacherCard) teacherCard.classList.remove("teacher-filled");
        }
      };

      teacherNameInput.addEventListener("input", updateTeacherValidation);
      teacherNameInput.addEventListener("change", updateTeacherValidation);
      updateTeacherValidation();
    }

    // Section Tab Switching
    document.querySelectorAll(".section-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const sec = btn.getAttribute("data-section");
        if (sec) this.switchSection(sec);
      });
    });

    // Floating Help Button
    const helpBtn = document.getElementById("floating-help-btn");
    if (helpBtn) {
      helpBtn.addEventListener("click", () => this.openAskTeacherModal());
    }

    // Submit Test Button (Footer)
    const submitBtn = document.getElementById("btn-submit-test");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => this.showSubmitConfirmation());
    }

    // Teacher Settings Button (Header)
    const settingsBtn = document.getElementById("btn-teacher-settings");
    if (settingsBtn) {
      settingsBtn.addEventListener("click", () => this.openTeacherSettingsModal());
    }

    // Header "Change Unit" button
    const changeUnitBtn = document.getElementById("btn-header-change-unit");
    if (changeUnitBtn) {
      changeUnitBtn.addEventListener("click", () => {
        if (this.activeScreen === "test") {
          if (confirm("Switch Unit or Variant? Your current answers will be saved so you can resume later.")) {
            this.saveCurrentSession();
            this.switchScreen("start");
            this.checkForResume();
          }
        } else if (this.activeScreen === "review") {
          this.switchScreen("start");
          this.checkForResume();
        }
      });
    }

    // Next / Prev Section buttons
    const prevSecBtn = document.getElementById("btn-prev-section");
    if (prevSecBtn) {
      prevSecBtn.addEventListener("click", () => this.navigateSection(-1));
    }
    const nextSecBtn = document.getElementById("btn-next-section");
    if (nextSecBtn) {
      nextSecBtn.addEventListener("click", () => this.navigateSection(1));
    }
  },

  /**
   * Initializes Course / Level Radio Selector
   */
  initCourseSelector() {
    const courseRadios = document.querySelectorAll('input[name="test-course"]');
    courseRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (e.target.checked) {
          this.onSelectCourse(e.target.value);
        }
      });
    });

    // Sync radio with current active course
    const curRadio = document.querySelector(`input[name="test-course"][value="${this.currentCourse}"]`);
    if (curRadio) curRadio.checked = true;
    this.updateCourseBadge();
  },

  /**
   * Switches course between Go Getter 1, 2, 3 and 4
   */
  onSelectCourse(courseId) {
    this.currentCourse = courseId;
    if (typeof TEST_DATA !== "undefined") {
      TEST_DATA.currentCourse = courseId;
    }
    this.updateCourseBadge();
    this.renderUnitSelector(courseId);
    this.initUnitSelector();
    const unitsList = typeof TEST_DATA !== "undefined" ? TEST_DATA.getUnitsList(courseId) : [];
    if (unitsList && unitsList.length > 0) {
      const selected = unitsList.some(u => u.id === this.currentUnit) ? this.currentUnit : unitsList[0].id;
      this.onSelectUnit(selected);
    }
  },

  /**
   * Updates course badge text in header / start card
   */
  updateCourseBadge() {
    const badge = document.getElementById("selected-course-badge");
    if (badge) {
      if (this.currentCourse === "gogetter1") {
        badge.textContent = "Go Getter 1 • Level A1 (Beginner — Coming Soon)";
      } else if (this.currentCourse === "gogetter2") {
        badge.textContent = "Go Getter 2 • Level A1+ (Elementary)";
      } else if (this.currentCourse === "gogetter4") {
        badge.textContent = "Go Getter 4 • Level A2+ / B1 (Intermediate)";
      } else {
        badge.textContent = "Go Getter 3 • Level A2 (Pre-Intermediate)";
      }
    }
  },

  /**
   * Dynamically renders Unit Selector cards based on selected course
   */
  renderUnitSelector(courseId) {
    const grid = document.getElementById("unit-selector-grid");
    if (!grid || typeof TEST_DATA === "undefined") return;

    const unitsList = TEST_DATA.getUnitsList(courseId);
    if (!unitsList || unitsList.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2.25rem 1.5rem; text-align: center; background: #FFF5F7; border: 2px dashed #FDA4AF; border-radius: 16px; margin: 0.5rem 0;">
          <span style="font-size: 2.5rem; display: block; margin-bottom: 0.6rem;">🌸</span>
          <h3 style="color: #BE185D; margin-bottom: 0.4rem; font-size: 1.2rem;">Go Getter 1 (Level A1)</h3>
          <p style="color: #64748B; font-size: 0.95rem; max-width: 480px; margin: 0 auto 1.25rem; line-height: 1.5;">
            Tests for Go Getter 1 are coming soon! Please select <strong>Go Getter 2</strong>, <strong>Go Getter 3</strong>, or <strong>Go Getter 4</strong> to start testing.
          </p>
          <button type="button" class="btn btn-secondary" onclick="TEST_UI.onSelectCourse('gogetter2'); const r = document.querySelector('input[name=test-course][value=gogetter2]'); if (r) r.checked = true;" style="font-weight: 700;">
            Go to Go Getter 2 →
          </button>
        </div>
      `;
      return;
    }

    let html = "";
    unitsList.forEach((u, idx) => {
      const isChecked = u.id === this.currentUnit || (idx === 0 && !unitsList.some(x => x.id === this.currentUnit));
      if (isChecked) this.currentUnit = u.id;
      const numBadgeStyle = (u.id === "mid_year" || u.id === "end_of_year")
        ? ` style="background: ${u.id === 'mid_year' ? '#4F46E5' : '#D97706'};"`
        : "";
      const boxStyle = (u.id === "mid_year" || u.id === "end_of_year")
        ? ` style="border-color: ${u.id === 'mid_year' ? '#6366F1' : '#F59E0B'}; background: ${u.id === 'mid_year' ? '#F5F3FF' : '#FFFBEB'};"`
        : "";

      html += `
        <label class="unit-card-radio">
          <input type="radio" name="test-unit" id="unit-radio-${u.id}" value="${u.id}"${isChecked ? " checked" : ""}>
          <div class="unit-card-box"${boxStyle}>
            <div class="unit-card-top">
              <span class="unit-card-num-badge"${numBadgeStyle}>${u.number}</span>
              <span class="unit-card-icon">${u.icon || '📝'}</span>
            </div>
            <span class="unit-card-title">${u.title}</span>
            <span class="unit-card-pts">${u.points} pts</span>
          </div>
        </label>
      `;
    });
    grid.innerHTML = html;
  },

  /**
   * Initializes Unit Radio Selector on the start screen
   */
  initUnitSelector() {
    const unitRadios = document.querySelectorAll('input[name="test-unit"]');
    unitRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (e.target.checked) {
          this.onSelectUnit(e.target.value);
        }
      });
    });

    // Initialize with current unit
    this.onSelectUnit(this.currentUnit);
  },

  /**
   * Updates start screen UI when a unit card is chosen
   */
  onSelectUnit(unitKey) {
    this.currentUnit = unitKey;
    const unitsList = (typeof TEST_DATA !== "undefined" && TEST_DATA.getUnitsList) ? TEST_DATA.getUnitsList(this.currentCourse) : [];
    const info = unitsList.find((u) => u.id === unitKey) || {
      id: unitKey,
      number: unitKey.replace("unit", ""),
      title: unitKey === "mid_year" ? "Mid-Year Test" : (unitKey === "end_of_year" ? "End-of-Year Test" : `Unit ${unitKey.replace("unit", "")}`),
      points: (unitKey === "mid_year" || unitKey === "end_of_year") ? 50 : (this.currentCourse === "gogetter3" ? 30 : 35),
      desc: "Comprehensive English Language Assessment"
    };

    // Dynamic start screen subtitle based on test content
    const heroSubtitle = document.getElementById("start-hero-subtitle");
    if (heroSubtitle) {
      if (unitKey === "mid_year") {
        heroSubtitle.textContent = "Complete all 9 tasks to practice your Units 1–4 vocabulary, grammar, audio listening (Track 10), reading, and everyday communication skills.";
      } else if (unitKey === "end_of_year") {
        heroSubtitle.textContent = "Complete all 9 tasks to practice your Units 1–8 vocabulary, grammar, audio listening (Track 11), reading, and matching skills.";
      } else if (this.currentCourse === "gogetter3") {
        heroSubtitle.textContent = `Complete all tasks to practice ${info.title} (${info.desc || "Vocabulary, Grammar & Communication"}).`;
      } else {
        if (unitKey === "unit1") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your vocabulary on clothes, past tenses, and everyday communication skills.";
        } else if (unitKey === "unit2") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your vocabulary on jobs, present tenses, and workplace dialogues.";
        } else if (unitKey === "unit3") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your sports vocabulary, Present Perfect, and sharing experiences.";
        } else if (unitKey === "unit4") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your vocabulary on books and films, relative clauses, and movie reviews.";
        } else if (unitKey === "unit5") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your music styles, past modals (could/had to), and making suggestions.";
        } else if (unitKey === "unit6") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your nature & animals vocabulary, conditional sentences, and giving advice.";
        } else if (unitKey === "unit7") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your technology inventions, passive voice, and step-by-step instructions.";
        } else if (unitKey === "unit8") {
          heroSubtitle.textContent = "Complete all 6 tasks to practice your feelings & relationships, reported speech, and emotional reactions.";
        } else {
          heroSubtitle.textContent = `Complete all tasks to practice ${info.desc || "your English language skills"}.`;
        }
      }
    }

    const badge = document.getElementById("selected-unit-badge");
    if (badge) {
      if (unitKey === "mid_year") badge.textContent = "Mid-Year Test (Units 1–4) • 50 pts";
      else if (unitKey === "end_of_year") badge.textContent = "End-of-Year Test (Units 1–8) • 50 pts";
      else badge.textContent = `Unit ${info.number} • ${info.title} (${info.points || 30} pts)`;
    }

    const previewName = document.getElementById("preview-unit-name");
    if (previewName) {
      if (unitKey === "mid_year") previewName.textContent = "Mid-Year Test: Units 1–4";
      else if (unitKey === "end_of_year") previewName.textContent = "End-of-Year Test: Units 1–8";
      else previewName.textContent = `Unit ${info.number}: ${info.title}`;
    }

    const previewTopics = document.getElementById("preview-unit-topics");
    if (previewTopics) {
      previewTopics.textContent = `${info.desc || info.description || ""} • ${info.points || 30} pts total`;
    }

    const varADesc = document.getElementById("variant-a-desc");
    if (varADesc) {
      varADesc.textContent = `Photocopiable ${info.title} Variant A (${info.points || 30} pts)`;
    }

    const varBDesc = document.getElementById("variant-b-desc");
    if (varBDesc) {
      varBDesc.textContent = `Photocopiable ${info.title} Variant B (${info.points || 30} pts)`;
    }

    const headerLogoBadge = document.getElementById("app-logo-badge");
    if (headerLogoBadge && this.activeScreen === "start") {
      headerLogoBadge.textContent = unitKey === "mid_year" ? "1-4" : (unitKey === "end_of_year" ? "1-8" : info.number);
    }

    const headerTitle = document.getElementById("app-header-title");
    if (headerTitle && this.activeScreen === "start") {
      if (unitKey === "mid_year") headerTitle.textContent = "Language Test • Mid-Year (Units 1–4)";
      else if (unitKey === "end_of_year") headerTitle.textContent = "Language Test • End-of-Year (Units 1–8)";
      else headerTitle.textContent = `Language Test • Unit ${info.number}`;
    }

    const headerSubtitle = document.getElementById("app-header-subtitle");
    if (headerSubtitle && this.activeScreen === "start") {
      headerSubtitle.textContent = info.title;
    }
  },

  /**
   * Check if an in-progress session exists in LocalStorage.
   */
  checkForResume() {
    const saved = Storage.getSession();
    const resumeContainer = document.getElementById("resume-session-prompt");
    const studentName = saved?.student ? (saved.student.fullName || saved.student.firstName || "") : "";
    if (saved && saved.student && studentName && resumeContainer) {
      const savedUnit = saved.unit || saved.student.unit || "unit1";
      const unitNum = savedUnit.replace("unit", "");
      const variantName = saved.student.variant === "variantA" ? "Variant A" : "Variant B";

      resumeContainer.innerHTML = `
        <div class="resume-banner">
          <div class="resume-banner-text">
            <strong>Welcome back, ${studentName}!</strong>
            <span>You have an unfinished test (Unit ${unitNum}, ${variantName}).</span>
          </div>
          <div style="display:flex; gap: 0.5rem; flex-wrap:wrap;">
            <button type="button" class="btn btn-sm btn-primary" id="btn-resume-session">Resume Test</button>
            <button type="button" class="btn btn-sm btn-secondary" id="btn-discard-session">Start Fresh</button>
          </div>
        </div>
      `;
      resumeContainer.style.display = "block";

      document.getElementById("btn-resume-session").addEventListener("click", () => {
        this.resumeSession(saved);
      });
      document.getElementById("btn-discard-session").addEventListener("click", () => {
        Storage.clearSession();
        resumeContainer.style.display = "none";
      });
    } else if (resumeContainer) {
      resumeContainer.style.display = "none";
    }
  },

  /**
   * Resumes a previously saved session.
   */
  resumeSession(saved) {
    this.student = saved.student;
    if (saved.student) {
      const teacherInput = document.getElementById("teacher-name");
      if (teacherInput && saved.student.teacher) {
        teacherInput.value = saved.student.teacher;
        const validIndicator = document.getElementById("teacher-valid-indicator");
        const teacherCard = document.getElementById("teacher-step-card");
        if (validIndicator) validIndicator.classList.add("active");
        if (teacherCard) teacherCard.classList.add("teacher-filled");
      }
    }
    this.currentCourse = saved.course || (saved.student && saved.student.course) || "gogetter3";
    if (typeof TEST_DATA !== "undefined") {
      TEST_DATA.currentCourse = this.currentCourse;
    }
    const courseRadio = document.querySelector(`input[name="test-course"][value="${this.currentCourse}"]`);
    if (courseRadio) courseRadio.checked = true;
    this.updateCourseBadge();
    this.renderUnitSelector(this.currentCourse);
    this.initUnitSelector();

    this.currentUnit = saved.unit || saved.student.unit || "unit1";
    this.currentVariant = saved.student.variant || "variantA";
    this.answers = saved.answers || {};
    this.activeSection = saved.currentSection || "vocabulary";

    // Check the corresponding unit radio button
    const unitRadio = document.querySelector(`input[name="test-unit"][value="${this.currentUnit}"]`);
    if (unitRadio) unitRadio.checked = true;
    this.onSelectUnit(this.currentUnit);

    const variantRadio = document.querySelector(`input[name="test-variant"][value="${this.currentVariant}"]`);
    if (variantRadio) variantRadio.checked = true;

    this.renderTestUI();
    this.switchScreen("test");
    this.switchSection(this.activeSection);
    this.updateProgress();
  },

  /**
   * Handles user starting a new test.
   */
  handleStartTest() {
    const nameEl = document.getElementById("student-name");
    const fullName = nameEl ? nameEl.value.trim() : "";
    const teacherEl = document.getElementById("teacher-name");
    const teacher = teacherEl ? teacherEl.value.trim() : "";
    const courseRadio = document.querySelector('input[name="test-course"]:checked');
    const course = courseRadio ? courseRadio.value : this.currentCourse || "gogetter3";
    const unitRadio = document.querySelector('input[name="test-unit"]:checked');
    const unit = unitRadio ? unitRadio.value : "unit1";
    const variantRadio = document.querySelector('input[name="test-variant"]:checked');
    const variant = variantRadio ? variantRadio.value : "variantA";

    if (!fullName) {
      const nameCard = document.getElementById("student-name-card");
      if (nameCard) {
        nameCard.classList.remove("shake-attention");
        void nameCard.offsetWidth; // Force DOM reflow to re-trigger animation
        nameCard.classList.add("shake-attention");
      }
      if (nameEl) {
        nameEl.focus();
      }
      alert("Please enter your name.");
      return;
    }

    const parts = fullName.split(/\s+/);
    const firstName = parts[0] || fullName;
    const lastName = parts.slice(1).join(" ") || "";

    this.currentCourse = course;
    if (typeof TEST_DATA !== "undefined") {
      TEST_DATA.currentCourse = course;
    }
    this.currentUnit = unit;
    this.currentVariant = variant;
    this.student = { fullName, firstName, lastName, teacher, studentClass: "", variant, unit, course };
    this.answers = {};
    this.activeSection = "vocabulary";

    // Save initial session
    this.saveCurrentSession();

    // Render test
    this.renderTestUI();
    this.switchScreen("test");
    this.switchSection("vocabulary");
    this.updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  /**
   * Switches visible screen: 'start', 'test', 'review'
   */
  switchScreen(screenName) {
    this.activeScreen = screenName;
    document.querySelectorAll(".screen").forEach((sc) => sc.classList.remove("active"));
    const target = document.getElementById(`screen-${screenName}`);
    if (target) target.classList.add("active");

    // Header student tag
    const studentTag = document.getElementById("header-student-tag");
    if (this.student && screenName !== "start") {
      studentTag.style.display = "flex";
      const displayName = this.student.fullName || `${this.student.firstName} ${this.student.lastName}`.trim();
      document.getElementById("header-student-name").textContent = this.student.studentClass
        ? `${displayName} (${this.student.studentClass})`
        : displayName;
    } else if (studentTag) {
      studentTag.style.display = "none";
    }

    // Change Unit button in header
    const changeUnitBtn = document.getElementById("btn-header-change-unit");
    if (changeUnitBtn) {
      changeUnitBtn.style.display = screenName === "start" ? "none" : "inline-flex";
    }

    // Toggle Floating Help button visibility
    const helpBtn = document.getElementById("floating-help-btn");
    if (helpBtn) {
      helpBtn.style.display = screenName === "start" ? "none" : "flex";
    }
  },

  /**
   * Retrieves active section keys for current test variant
   */
  getSectionKeys() {
    const variant = (typeof TEST_DATA !== "undefined" && TEST_DATA.getTest)
      ? TEST_DATA.getTest(this.currentUnit, this.currentVariant, this.currentCourse)
      : null;
    if (variant && variant.sections) {
      return Object.keys(variant.sections);
    }
    return ["vocabulary", "grammar", "communication"];
  },

  /**
   * Switches section dynamically
   */
  switchSection(sectionKey) {
    this.activeSection = sectionKey;
    document.querySelectorAll(".section-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-section") === sectionKey);
    });

    const secKeys = this.getSectionKeys();
    document.querySelectorAll(".test-section-panel").forEach((panel) => {
      panel.style.display = panel.id === `section-panel-${sectionKey}` ? "block" : "none";
    });

    // Update Next/Prev navigation buttons
    const idx = secKeys.indexOf(sectionKey);
    const prevBtn = document.getElementById("btn-prev-section");
    const nextBtn = document.getElementById("btn-next-section");
    const submitBtn = document.getElementById("btn-submit-test");

    if (prevBtn) prevBtn.style.visibility = idx <= 0 ? "hidden" : "visible";
    if (nextBtn) {
      nextBtn.style.display = idx === secKeys.length - 1 ? "none" : "inline-flex";
    }
    if (submitBtn) {
      submitBtn.style.display = idx === secKeys.length - 1 ? "inline-flex" : "none";
    }

    window.scrollTo({ top: 120, behavior: "smooth" });
  },

  navigateSection(direction) {
    const secKeys = this.getSectionKeys();
    const idx = secKeys.indexOf(this.activeSection);
    const newIdx = idx + direction;
    if (newIdx >= 0 && newIdx < secKeys.length) {
      this.switchSection(secKeys[newIdx]);
    }
  },

  /**
   * Renders the complete test questions according to the active unit and variant.
   */
  renderTestUI() {
    const variant = TEST_DATA.getTest(this.currentUnit, this.currentVariant, this.currentCourse);
    if (!variant) return;

    // Header badge
    const badge = document.getElementById("active-variant-badge");
    if (badge) badge.textContent = variant.title;

    // Header logo badge and title
    const unitNum = this.currentUnit.replace("unit", "");
    const logoBadge = document.getElementById("app-logo-badge");
    if (logoBadge) {
      logoBadge.textContent = this.currentUnit === "mid_year" ? "1-4" : (this.currentUnit === "end_of_year" ? "1-8" : unitNum);
    }

    const headerTitle = document.getElementById("app-header-title");
    if (headerTitle) {
      if (this.currentUnit === "mid_year") headerTitle.textContent = "Language Test • Mid-Year (Units 1–4)";
      else if (this.currentUnit === "end_of_year") headerTitle.textContent = "Language Test • End-of-Year (Units 1–8)";
      else headerTitle.textContent = `Language Test • Unit ${unitNum}`;
    }

    const headerSubtitle = document.getElementById("app-header-subtitle");
    if (headerSubtitle) {
      const unitInfo = (typeof TEST_DATA !== "undefined" && TEST_DATA.getUnitsList) ? TEST_DATA.getUnitsList(this.currentCourse).find(u => u.id === this.currentUnit) : null;
      headerSubtitle.textContent = unitInfo ? unitInfo.title : variant.title;
    }

    // Dynamic Section Tabs Navigation
    const secKeys = this.getSectionKeys();
    const tabsContainer = document.querySelector(".section-tabs");
    if (tabsContainer) {
      let tabsHtml = "";
      secKeys.forEach((sKey, sIdx) => {
        const sec = variant.sections[sKey];
        if (!sec) return;
        const iconMap = {
          vocabulary: "📚",
          grammar: "✏️",
          listening: "🎧",
          reading: "📖",
          communication: "💬"
        };
        const icon = iconMap[sKey] || "📝";
        const activeCls = sKey === this.activeSection ? " active" : "";
        tabsHtml += `
          <button type="button" class="section-tab-btn${activeCls}" data-section="${sKey}">
            <span>${sIdx + 1}. ${sec.title} (${sec.maxScore} pts) ${icon}</span>
            <span class="section-tab-badge" id="badge-count-${sKey}">0 / ${sec.maxScore}</span>
          </button>
        `;
      });
      tabsContainer.innerHTML = tabsHtml;

      // Re-bind click events for newly rendered tabs
      tabsContainer.querySelectorAll(".section-tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.switchSection(btn.getAttribute("data-section"));
        });
      });
    }

    // Ensure active section exists in this test
    if (!secKeys.includes(this.activeSection)) {
      this.activeSection = secKeys[0] || "vocabulary";
    }

    // Render each section panel
    for (const sKey of secKeys) {
      this.renderSection(sKey, variant.sections[sKey]);
    }

    // Switch to active section and set visibility
    this.switchSection(this.activeSection);

    // Restore saved answers into inputs
    this.populateSavedAnswers();

    // Initialize interactive audio players
    this.initAudioPlayers();
  },

  /**
   * Generic Section Renderer
   */
  renderSection(sectionKey, sectionData) {
    const container = document.getElementById(`section-panel-${sectionKey}`);
    if (!container || !sectionData) return;

    let html = "";
    for (const task of sectionData.tasks) {
      html += this.renderTaskCard(task);
    }
    container.innerHTML = html;
    this.bindTaskInputs(container);
  },

  /**
   * Generic Task Card Generator
   */
  renderTaskCard(task) {
    let html = `
      <div class="task-card" id="card-${task.id}">
        <div class="task-header">
          <div class="task-title-group">
            <div class="task-number-badge">${task.number}</div>
            <div class="task-instructions">${task.title}</div>
          </div>
          <div class="task-points-badge">${task.points} points</div>
        </div>
    `;

    if (task.example) {
      html += `
        <div class="task-example-banner">
          <strong>Example:</strong> ${task.example}
        </div>
      `;
    }

    if (task.context) {
      html += `
        <div style="font-weight: 700; margin-bottom: 0.75rem; color: #1E293B; font-size: 0.95rem;">
          📖 ${task.context}
        </div>
      `;
    }

    // Illustration (Unit 1 and visual tasks)
    if (task.imageKey && typeof Illustrations !== "undefined") {
      const illSvg = Illustrations.renderIllustration(task.imageKey);
      if (illSvg) {
        html += `<div class="illustration-wrapper">${illSvg}</div>`;
      }
    }

    // Task Body by Type
    html += this.renderTaskBody(task);

    html += `</div>`;
    return html;
  },

  /**
   * Task Body Dispatcher
   */
  renderTaskBody(task) {
    // 0. Audio Listening Tasks (with embedded player)
    if (task.audioTrack || task.type === "listening-gap") {
      if (task.type === "circle-choice") {
        return this.renderAudioPlayer(task) + this.renderCircleChoiceTask(task);
      }
      return this.renderListeningGapTask(task);
    }

    // 0.1 Reading Tasks (Passage + T/F/DS or Open Questions)
    if (task.type === "reading-tf-ds" || task.type === "reading-qa" || task.passage) {
      return this.renderReadingTask(task);
    }

    // 0.2 Matching Dialogue Tasks (Options a–i + conversations)
    if (task.type === "matching-dialogue") {
      return this.renderMatchingDialogueTask(task);
    }

    // 1. Circle Choice (or Relative Pronouns with choices)
    if (task.type === "circle-choice" || task.type === "relative-pronouns-gap") {
      return this.renderCircleChoiceTask(task);
    }

    // 2. Sentence Order (Unit 7 passive unscramble)
    if (task.type === "sentence-order") {
      return this.renderSentenceOrderTask(task);
    }

    // 3. Letter hint
    if (task.type === "letter-hint") {
      return this.renderLetterHintTask(task);
    }

    // 4. Personality Adjectives (Unit 1 Task 3)
    if (task.type === "personality-adjectives") {
      return this.renderPersonalityTask(task);
    }

    // 5. Grammar Gap (Verb in brackets)
    if (task.type === "grammar-gap") {
      return this.renderGrammarGapTask(task);
    }

    // 6. Grammar Mix (Unit 1 Task 5)
    if (task.type === "grammar-mix") {
      return this.renderGrammarMixTask(task);
    }

    // 7. Dialogue Box or Dialogue Gap
    if (task.type === "dialogue-box" || task.type === "dialogue-gap") {
      if (task.dialogue) {
        return this.renderDialogueTask(task);
      } else if (task.items) {
        return this.renderGrammarGapTask(task);
      }
    }

    // 8. Word Bank / Collocations Choice / Word Gap (Default to text flow with gaps)
    return this.renderWordBankOrGapTask(task);
  },

  /**
   * Audio Player Component Markup
   */
  renderAudioPlayer(task) {
    return `
      <div class="audio-player-card" data-track="${task.audioTrack || ''}">
        <div class="audio-player-top">
          <div class="audio-player-badge">🎧 Audio Listening</div>
          <div class="audio-player-meta">
            <span class="audio-player-title">${task.audioTitle || "Listening Audio Track"}</span>
            <span class="audio-player-desc">${task.audioDesc || "Click play to listen to the recording"}</span>
          </div>
        </div>
        <audio class="audio-native" src="${task.audioTrack}" preload="metadata"></audio>
        <div class="audio-controls-row">
          <button type="button" class="audio-btn btn-audio-play" title="Play or pause audio">
            <span class="play-label">▶️ Play</span>
          </button>
          <button type="button" class="audio-btn btn-audio-skip-back" title="Rewind 5 seconds">⏪ -5s</button>
          <button type="button" class="audio-btn btn-audio-skip-fwd" title="Forward 5 seconds">+5s ⏩</button>
          <div class="audio-timeline">
            <span class="audio-time-cur">0:00</span>
            <input type="range" class="audio-seek-bar" min="0" max="100" value="0" step="0.1" aria-label="Audio scrubber">
            <span class="audio-time-dur">0:00</span>
          </div>
          <button type="button" class="audio-btn btn-audio-speed" title="Adjust playback speed">1.0x</button>
        </div>
      </div>
    `;
  },

  /**
   * Initializes event listeners for all embedded audio players
   */
  initAudioPlayers() {
    document.querySelectorAll(".audio-player-card").forEach((card) => {
      const audio = card.querySelector(".audio-native");
      if (!audio || card.dataset.audioInitialized) return;
      card.dataset.audioInitialized = "true";

      const playBtn = card.querySelector(".btn-audio-play");
      const playLabel = card.querySelector(".play-label");
      const skipBack = card.querySelector(".btn-audio-skip-back");
      const skipFwd = card.querySelector(".btn-audio-skip-fwd");
      const curTime = card.querySelector(".audio-time-cur");
      const durTime = card.querySelector(".audio-time-dur");
      const seekBar = card.querySelector(".audio-seek-bar");
      const speedBtn = card.querySelector(".btn-audio-speed");

      const formatTime = (sec) => {
        if (isNaN(sec) || sec < 0) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? "0" : ""}${s}`;
      };

      // Metadata loaded
      audio.addEventListener("loadedmetadata", () => {
        if (durTime) durTime.textContent = formatTime(audio.duration);
      });

      // Play / Pause toggle
      if (playBtn) {
        playBtn.addEventListener("click", () => {
          if (audio.paused) {
            document.querySelectorAll(".audio-native").forEach((other) => {
              if (other !== audio && !other.paused) {
                other.pause();
                const otherCard = other.closest(".audio-player-card");
                if (otherCard) {
                  const lbl = otherCard.querySelector(".play-label");
                  if (lbl) lbl.textContent = "▶️ Play";
                }
              }
            });
            audio.play();
            if (playLabel) playLabel.textContent = "⏸️ Pause";
          } else {
            audio.pause();
            if (playLabel) playLabel.textContent = "▶️ Play";
          }
        });
      }

      // Time update
      audio.addEventListener("timeupdate", () => {
        if (curTime) curTime.textContent = formatTime(audio.currentTime);
        if (seekBar && audio.duration) {
          seekBar.value = (audio.currentTime / audio.duration) * 100;
        }
      });

      // Audio ended
      audio.addEventListener("ended", () => {
        if (playLabel) playLabel.textContent = "▶️ Play again";
        if (seekBar) seekBar.value = 0;
      });

      // Seek / scrub
      if (seekBar) {
        seekBar.addEventListener("input", () => {
          if (audio.duration) {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
          }
        });
      }

      // Skip back 5s
      if (skipBack) {
        skipBack.addEventListener("click", () => {
          audio.currentTime = Math.max(0, audio.currentTime - 5);
        });
      }

      // Skip forward 5s
      if (skipFwd) {
        skipFwd.addEventListener("click", () => {
          const maxDur = audio.duration || 0;
          audio.currentTime = Math.min(maxDur, audio.currentTime + 5);
        });
      }

      // Playback speed cycle: 1.0x -> 0.85x -> 1.2x -> 1.0x
      if (speedBtn) {
        const speeds = [1.0, 0.85, 1.2];
        let sIdx = 0;
        speedBtn.addEventListener("click", () => {
          sIdx = (sIdx + 1) % speeds.length;
          const spd = speeds[sIdx];
          audio.playbackRate = spd;
          speedBtn.textContent = spd === 1 ? "1.0x" : `${spd}x`;
        });
      }
    });
  },

  /**
   * Renders Listening gap tasks with audio player
   */
  renderListeningGapTask(task) {
    let html = "";
    if (task.audioTrack) {
      html += this.renderAudioPlayer(task);
    }
    if (task.items && task.items.length > 0) {
      let rowsHtml = "";
      for (const it of task.items) {
        rowsHtml += `
          <div class="grammar-item-row">
            <span class="gap-label">${it.label}</span>
            ${it.before ? `<span>${it.before}</span> ` : ""}
            <span class="gap-inline-wrapper">
              <input type="text" class="gap-input test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
            </span>
            ${it.after ? ` <span>${it.after}</span>` : ""}
          </div>
        `;
      }
      html += `<div class="grammar-items-list">${rowsHtml}</div>`;
    }
    return html;
  },

  /**
   * Renders Reading tasks (passage with T/F/DS or open questions)
   */
  renderReadingTask(task) {
    let html = "";
    if (task.passage) {
      const paragraphs = task.passage
        .split("\n\n")
        .map((p) => `<p>${p.trim()}</p>`)
        .join("");
      html += `
        <div class="reading-passage-box">
          ${task.passageTitle ? `<div class="reading-passage-title">📖 ${task.passageTitle}</div>` : ""}
          <div class="reading-passage-text">${paragraphs}</div>
        </div>
      `;
    }

    if (task.type === "reading-tf-ds" && task.items) {
      let rowsHtml = "";
      for (const it of task.items) {
        html += `
          <div class="reading-tf-row">
            <div class="reading-tf-statement">
              <span class="gap-label">${it.label}</span>
              <span>${it.statement}</span>
            </div>
            <div class="choice-pills-group" data-qid="${it.id}">
              ${it.options.map((opt) => `<button type="button" class="choice-pill-btn" data-qid="${it.id}" data-value="${opt}">${opt}</button>`).join("")}
              <input type="hidden" class="test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" value="">
            </div>
          </div>
        `;
      }
    } else if (task.type === "reading-qa" && task.items) {
      let rowsHtml = "";
      for (const it of task.items) {
        rowsHtml += `
          <div class="reading-qa-item">
            <div class="reading-qa-question">
              <span class="gap-label">${it.label}</span>
              <span>${it.question}</span>
            </div>
            <input type="text" class="form-control test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
          </div>
        `;
      }
      html += `<div class="reading-qa-list">${rowsHtml}</div>`;
    }

    return html;
  },

  /**
   * Renders Matching Dialogue tasks (options bank a-i + dialogue lines)
   */
  renderMatchingDialogueTask(task) {
    let html = "";
    if (task.optionsList && task.optionsList.length > 0) {
      const chips = task.optionsList
        .map((opt) => `<div class="matching-opt-chip"><strong>${opt.key}</strong> ${opt.text}</div>`)
        .join("");
      html += `
        <div class="matching-options-bank">
          <div class="matching-options-header">💡 Match each conversation (1–8) to an answer (a–i):</div>
          <div class="matching-options-grid">${chips}</div>
        </div>
      `;
    }

    let rowsHtml = "";
    for (const it of task.items) {
      const optSelects = task.optionsList
        ? task.optionsList.map((o) => `<option value="${o.key}">${o.key}. ${o.text}</option>`).join("")
        : "";

      rowsHtml += `
        <div class="matching-item-row">
          <div class="matching-prompt">
            <span class="gap-label">${it.label}</span>
            <span>${it.prompt}</span>
          </div>
          <div>
            <select class="form-control test-gap matching-select" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}">
              <option value="">▼ Choose answer (a–i)...</option>
              ${optSelects}
            </select>
          </div>
        </div>
      `;
    }
    html += `<div class="matching-items-list">${rowsHtml}</div>`;
    return html;
  },

  /**
   * Renders circle-choice pills
   */
  renderCircleChoiceTask(task) {
    let html = `<div class="choice-items-list">`;
    for (const it of task.items) {
      html += `
        <div class="circle-choice-item">
          <span class="gap-label">${it.label}</span>
          ${it.before ? `<span>${it.before}</span> ` : ""}
          <span class="choice-pills-group" data-qid="${it.id}">
            ${it.options.map(opt => `<button type="button" class="choice-pill-btn" data-qid="${it.id}" data-value="${opt}">${opt}</button>`).join("")}
            <input type="hidden" class="test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" value="">
          </span>
          ${it.after ? ` <span>${it.after}</span>` : ""}
        </div>
      `;
    }
    html += `</div>`;
    return html;
  },

  /**
   * Renders sentence-order / sentence-writing tasks (Interactive draggable/tap word reordering)
   */
  renderSentenceOrderTask(task) {
    let html = `<div class="sentence-order-list">`;
    for (const it of task.items) {
      const rawPrompt = it.prompt || "";
      const isWordOrder = rawPrompt.includes("/") || rawPrompt.includes(" / ");
      
      if (isWordOrder) {
        const tokens = rawPrompt.split(/\s*\/\s*/).map(s => s.trim()).filter(Boolean);
        html += `
          <div class="sentence-order-item interactive-order-item" data-qid="${it.id}" data-task="${task.id}">
            <div class="sentence-order-header">
              <span class="gap-label">${it.label}</span>
              <div class="sentence-order-instruction">
                <span class="order-hint-text">Put the words in the correct order:</span>
              </div>
              <button type="button" class="btn-order-reset" data-qid="${it.id}" title="Reset word order">
                <span class="reset-icon">↺</span> Reset
              </button>
            </div>

            <!-- Target: Sentence Construction Area (Dropzone) -->
            <div class="sentence-dropzone" id="dropzone-${it.id}" data-qid="${it.id}" aria-label="Sentence area">
              <div class="dropzone-placeholder" id="placeholder-${it.id}">
                <span class="dropzone-icon">✋</span> Drag words here or tap them
              </div>
              <div class="sentence-chips-container" id="chips-container-${it.id}"></div>
            </div>

            <!-- Source: Word Bank Pool -->
            <div class="word-bank-pool" id="word-bank-${it.id}" data-qid="${it.id}">
              ${tokens.map((tok, idx) => `
                <div class="order-word-chip chip-in-bank" 
                     id="chip-${it.id}-${idx}" 
                     data-qid="${it.id}" 
                     data-chip-id="chip-${it.id}-${idx}" 
                     data-word="${tok.replace(/"/g, '&quot;')}" 
                     draggable="true">
                  ${tok}
                </div>
              `).join("")}
            </div>

            <!-- Synced text input for answers and fallback -->
            <div class="sentence-order-input-wrap">
              <input type="text" 
                     class="form-control test-gap sentence-order-input synced-order-input" 
                     id="input-${it.id}" 
                     data-qid="${it.id}" 
                     data-task="${task.id}" 
                     placeholder="" 
                     autocomplete="off" autocorrect="off" spellcheck="false">
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="sentence-order-item">
            <div class="sentence-order-prompt">
              <span class="gap-label">${it.label}</span>
              <span class="scrambled-words">${it.prompt}</span>
            </div>
            <div class="sentence-order-input-wrap">
              <input type="text" class="form-control test-gap sentence-order-input" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
            </div>
          </div>
        `;
      }
    }
    html += `</div>`;
    return html;
  },

  /**
   * Renders letter hint items
   */
  renderLetterHintTask(task) {
    let rowsHtml = "";
    for (const it of task.items) {
      const hintDisplay = it.displayHint || (it.prefix ? it.prefix.toUpperCase() + "..." : "");
      rowsHtml += `
        <div class="letter-hint-row">
          <span class="gap-label">${it.label}</span>
          <span>${it.textBefore || it.before || ""}</span>
          ${hintDisplay ? `<span class="hint-capsule">${hintDisplay}</span>` : ""}
          <input type="text" class="hint-input test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
          <span>${it.textAfter || it.after || ""}</span>
        </div>
      `;
    }
    return `<div class="letter-hint-list">${rowsHtml}</div>`;
  },

  /**
   * Renders Personality Adjectives task
   */
  renderPersonalityTask(task) {
    const itemsHtml = task.items
      .map((it) => {
        return `
          <div class="personality-item">
            <div class="personality-prompt">${it.sentence}</div>
            <div class="personality-input-wrap">
              <span class="personality-prefix">${it.prefix.toUpperCase()}</span>
              <input type="text" class="form-control test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
            </div>
          </div>
        `;
      })
      .join("");
    return `<div class="personality-list">${itemsHtml}</div>`;
  },

  /**
   * Renders Grammar Gap items (single or double verb gaps)
   */
  renderGrammarGapTask(task) {
    let html = `<div class="grammar-items-list">`;
    for (const it of task.items) {
      let line = `<div class="grammar-item-row"><span class="gap-label">${it.label || ""}</span> `;
      if (it.before) line += `<span>${it.before}</span> `;
      if (it.options && it.options.length > 0) {
        line += `
          <span class="choice-pills-group" data-qid="${it.id}">
            ${it.options.map(opt => `<button type="button" class="choice-pill-btn" data-qid="${it.id}" data-value="${opt}">${opt}</button>`).join("")}
            <input type="hidden" class="test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" value="">
          </span>
          ${it.verb ? `<span class="grammar-verb-prompt">(${it.verb})</span>` : ""}
        `;
      } else {
        line += `
          <span class="gap-inline-wrapper">
            <input type="text" class="gap-input test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
          </span>
          ${it.verb ? `<span class="grammar-verb-prompt">(${it.verb})</span>` : ""}
        `;
      }
      if (it.after) line += ` <span>${it.after}</span> `;

      if (it.gapId2) {
        if (it.options2 && it.options2.length > 0) {
          line += `
            <span class="choice-pills-group" data-qid="${it.gapId2}">
              ${it.options2.map(opt => `<button type="button" class="choice-pill-btn" data-qid="${it.gapId2}" data-value="${opt}">${opt}</button>`).join("")}
              <input type="hidden" class="test-gap" id="input-${it.gapId2}" data-qid="${it.gapId2}" data-task="${task.id}" value="">
            </span>
            ${it.verb2 ? `<span class="grammar-verb-prompt">(${it.verb2})</span>` : ""}
          `;
        } else {
          line += `
            <span class="gap-inline-wrapper">
              <span class="gap-label">${it.label2 || ""}</span>
              <input type="text" class="gap-input test-gap" id="input-${it.gapId2}" data-qid="${it.gapId2}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
            </span>
            ${it.verb2 ? `<span class="grammar-verb-prompt">(${it.verb2})</span>` : ""}
          `;
        }
        if (it.after2) line += ` <span>${it.after2}</span> `;
      }

      line += `</div>`;
      html += line;
    }
    html += `</div>`;
    return html;
  },

  /**
   * Renders Grammar Mix (Unit 1 Task 5)
   */
  renderGrammarMixTask(task) {
    if (!task.items || !task.items[0] || !task.items[0].parts) {
      return this.renderGrammarGapTask(task);
    }
    const itemsHtml = task.items
      .map((it) => {
        let content = `<span style="font-weight:700; margin-right:0.35rem;">${it.itemNum || it.label || ""}</span> `;
        for (const pt of (it.parts || [])) {
          if (pt.before) content += `${pt.before} `;
          if (pt.options && pt.options.length > 0) {
            const optionsHtml = pt.options
              .map(opt => `<option value="${opt.value}">${opt.label}</option>`)
              .join("");
            content += `
              <span class="gap-inline-wrapper">
                <span class="gap-label">${pt.label}</span>
                <select class="gap-select-btn test-gap" id="input-${pt.gapId}" data-qid="${pt.gapId}" data-task="${task.id}">
                  <option value="">▼ Choose answer...</option>
                  ${optionsHtml}
                </select>
              </span>
              <span class="grammar-verb-prompt">(${pt.verb})</span>
            `;
          } else {
            content += `
              <span class="gap-inline-wrapper">
                <span class="gap-label">${pt.label}</span>
                <input type="text" class="gap-input test-gap" id="input-${pt.gapId}" data-qid="${pt.gapId}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
              </span>
              <span class="grammar-verb-prompt">(${pt.verb})</span>
            `;
          }
          if (pt.after) content += ` ${pt.after} `;
        }
        return `<div class="grammar-item-row">${content}</div>`;
      })
      .join("");
    return `<div class="grammar-items-list">${itemsHtml}</div>`;
  },

  /**
   * Renders Dialogue with speaker badges and word bank
   */
  renderDialogueTask(task) {
    let html = "";
    if (task.wordBank && task.wordBank.length > 0) {
      const chips = task.wordBank
        .map(w => `<button type="button" class="word-chip" data-word="${w}" data-task="${task.id}">${w}</button>`)
        .join("");
      html += `
        <div class="word-bank-container" data-task="${task.id}">
          <div class="word-bank-header"><span>📦 Word Bank (Click a phrase to insert):</span></div>
          <div class="word-bank-chips">${chips}</div>
          <div class="word-bank-all-placed-msg">✅ All phrases from the box have been placed!</div>
        </div>
      `;
    }

    let dialogueHtml = "";
    for (const line of task.dialogue) {
      const speakerClass = (line.speaker === "Anne" || line.speaker === "Lee" || line.speaker === "Jack" || line.speaker === "Tom") ? "speaker-A" : "speaker-B";

      if (line.text) {
        dialogueHtml += `
          <div class="dialogue-line">
            <div class="speaker-badge ${speakerClass}">${line.speaker}:</div>
            <div class="dialogue-content">${line.text}</div>
          </div>
        `;
      } else if (line.parts) {
        let partsContent = "";
        for (const pt of line.parts) {
          if (pt.before) partsContent += `${pt.before} `;
          partsContent += `
            <span class="gap-inline-wrapper">
              <span class="gap-label">${pt.label}</span>
              <input type="text" class="gap-input test-gap" id="input-${pt.gapId}" data-qid="${pt.gapId}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false">
            </span>
          `;
          if (pt.verb) partsContent += ` <span class="grammar-verb-prompt">(${pt.verb})</span> `;
          if (pt.after) partsContent += ` ${pt.after} `;
        }
        dialogueHtml += `
          <div class="dialogue-line">
            <div class="speaker-badge ${speakerClass}">${line.speaker}:</div>
            <div class="dialogue-content">${partsContent}</div>
          </div>
        `;
      }
    }

    html += `<div class="dialogue-thread">${dialogueHtml}</div>`;
    return html;
  },

  /**
   * Renders Word Bank chips and Story / Sentences with gaps
   */
  renderWordBankOrGapTask(task) {
    let html = "";
    if (task.wordBank && task.wordBank.length > 0) {
      const chips = task.wordBank
        .map(w => `<button type="button" class="word-chip" data-word="${w}" data-task="${task.id}">${w}</button>`)
        .join("");
      html += `
        <div class="word-bank-container" data-task="${task.id}">
          <div class="word-bank-header"><span>📦 Word Bank (Click a word to fill the active blank):</span></div>
          <div class="word-bank-chips">${chips}</div>
          <div class="word-bank-all-placed-msg">✅ All words from the box have been placed!</div>
        </div>
      `;
    }

    if (task.sentences && task.sentences.length > 0) {
      let sentencesHtml = "";
      for (const s of task.sentences) {
        sentencesHtml += this.renderSentenceWithGaps(s, task.id);
      }
      html += `<div class="story-text-flow">${sentencesHtml}</div>`;
    }

    return html;
  },

  /**
   * Helper to render a sentence item with 1 or 2 gaps
   */
  renderSentenceWithGaps(s, taskId) {
    let line = `<p style="margin-bottom:0.75rem;">${s.textBefore || ""} `;
    if (s.gapId) {
      line += `
        <span class="gap-inline-wrapper">
          <span class="gap-label">${s.label}</span>
          <input type="text" class="gap-input test-gap" id="input-${s.gapId}" data-qid="${s.gapId}" data-task="${taskId}" autocomplete="off" autocorrect="off" spellcheck="false">
        </span>
      `;
    }
    line += `${s.textAfter || ""} `;
    if (s.gapId2) {
      line += `
        <span class="gap-inline-wrapper">
          <span class="gap-label">${s.label2}</span>
          <input type="text" class="gap-input test-gap" id="input-${s.gapId2}" data-qid="${s.gapId2}" data-task="${taskId}" autocomplete="off" autocorrect="off" spellcheck="false">
        </span>
      `;
    }
    line += `${s.textAfter2 || ""}</p>`;
    return line;
  },

  /**
   * Binds input event listeners, word bank chips, choice pills, and sentence order chips.
   */
  bindTaskInputs(container) {
    const inputs = container.querySelectorAll(".test-gap");
    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        this.focusedInputId = inp.id;
      });

      const handleValChange = () => {
        const qid = inp.getAttribute("data-qid");
        this.answers[qid] = inp.value;
        inp.classList.toggle("has-value", inp.value.trim().length > 0);
        this.updateWordBankUsedState();
        this.updateProgress();
        this.debouncedSaveSession();
      };

      inp.addEventListener("input", handleValChange);
      inp.addEventListener("change", handleValChange);
    });

    // Word Bank Chip Clicks
    const chips = container.querySelectorAll(".word-chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const word = chip.getAttribute("data-word");
        const taskId = chip.getAttribute("data-task");
        this.insertWordIntoGap(taskId, word);
      });
    });

    // Circle Choice Pill Clicks
    const pills = container.querySelectorAll(".choice-pill-btn");
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const qid = pill.getAttribute("data-qid");
        const val = pill.getAttribute("data-value");
        const group = pill.closest(".choice-pills-group");
        if (group) {
          group.querySelectorAll(".choice-pill-btn").forEach(b => b.classList.remove("selected"));
          pill.classList.add("selected");
        }
        const inp = document.getElementById(`input-${qid}`);
        if (inp) {
          inp.value = val;
          inp.dispatchEvent(new Event("input", { bubbles: true }));
          inp.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
    });

    // Initialize Interactive Word Order Movers (Drag & Drop + Click to Reorder)
    this.initWordOrderInteractive(container);
  },

  /**
   * Initializes Interactive Word Order Movers for sentence-order tasks.
   * Supports:
   * - Drag & Drop to arrange words from bank to sentence area
   * - Drag & Drop within sentence area to reorder words
   * - Click on bank words to instantly append to sentence
   * - Click on sentence words (or "x") to return them to bank
   * - Move left / Move right mini buttons on sentence chips for touch/mobile
   * - Reset button to return all words to initial bank state
   * - Real-time sync to the input field with proper punctuation and capitalization
   */
  initWordOrderInteractive(container) {
    const items = container.querySelectorAll(".interactive-order-item");
    if (!items || items.length === 0) return;

    this.wordOrderStates = this.wordOrderStates || {};

    items.forEach((itemEl) => {
      const qid = itemEl.getAttribute("data-qid");
      const dropzone = itemEl.querySelector(".sentence-dropzone");
      const chipsContainer = itemEl.querySelector(".sentence-chips-container");
      const wordBank = itemEl.querySelector(".word-bank-pool");
      const placeholder = itemEl.querySelector(".dropzone-placeholder");
      const input = itemEl.querySelector(".synced-order-input");
      const resetBtn = itemEl.querySelector(".btn-order-reset");

      if (!dropzone || !chipsContainer || !wordBank || !input) return;

      const bankChips = Array.from(wordBank.querySelectorAll(".order-word-chip"));
      const tokenMap = {};
      bankChips.forEach((c) => {
        const cId = c.getAttribute("data-chip-id");
        const word = c.getAttribute("data-word");
        tokenMap[cId] = { id: cId, word: word, el: c };
      });

      // Maintain state for this item
      const state = {
        available: bankChips.map((c) => c.getAttribute("data-chip-id")),
        ordered: []
      };
      this.wordOrderStates[qid] = state;

      // Helper to render the chips according to current state
      const renderState = () => {
        // 1. Update bank chips visibility
        bankChips.forEach((chip) => {
          const cId = chip.getAttribute("data-chip-id");
          const isUsed = state.ordered.includes(cId);
          chip.classList.toggle("chip-used", isUsed);
        });

        // 2. Render ordered chips in the sentence construction area
        chipsContainer.innerHTML = "";
        state.ordered.forEach((cId, idx) => {
          const info = tokenMap[cId];
          if (!info) return;

          const chipEl = document.createElement("div");
          chipEl.className = "order-word-chip chip-in-sentence";
          chipEl.setAttribute("draggable", "true");
          chipEl.setAttribute("data-chip-id", cId);
          chipEl.setAttribute("data-index", idx);

          chipEl.innerHTML = `
            ${idx > 0 ? `<span class="chip-move-btn move-left" data-dir="-1" title="Move left">‹</span>` : ""}
            <span class="chip-word-text">${info.word}</span>
            ${idx < state.ordered.length - 1 ? `<span class="chip-move-btn move-right" data-dir="1" title="Move right">›</span>` : ""}
            <span class="chip-remove-btn" title="Remove word">×</span>
          `;

          // Move left / right click handlers
          chipEl.querySelectorAll(".chip-move-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
              e.stopPropagation();
              const dir = parseInt(btn.getAttribute("data-dir"), 10);
              const curIdx = state.ordered.indexOf(cId);
              const newIdx = curIdx + dir;
              if (newIdx >= 0 && newIdx < state.ordered.length) {
                state.ordered.splice(curIdx, 1);
                state.ordered.splice(newIdx, 0, cId);
                renderState();
                syncInput();
              }
            });
          });

          // Click chip to remove back to bank
          chipEl.addEventListener("click", (e) => {
            if (e.target.closest(".chip-move-btn")) return;
            e.stopPropagation();
            removeChipFromSentence(cId);
          });

          // Drag to reorder within sentence
          chipEl.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", JSON.stringify({ type: "reorder", chipId: cId, qid }));
            e.dataTransfer.effectAllowed = "move";
            chipEl.classList.add("dragging");
            e.stopPropagation();
          });

          chipEl.addEventListener("dragend", () => {
            chipEl.classList.remove("dragging");
            clearDragOverStates();
          });

          chipEl.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = "move";
            chipEl.classList.add("drag-target");
          });

          chipEl.addEventListener("dragleave", () => {
            chipEl.classList.remove("drag-target");
          });

          chipEl.addEventListener("drop", (e) => {
            e.preventDefault();
            e.stopPropagation();
            chipEl.classList.remove("drag-target");
            try {
              const data = JSON.parse(e.dataTransfer.getData("text/plain"));
              if (data.qid !== qid) return;
              if (data.type === "reorder") {
                const fromIdx = state.ordered.indexOf(data.chipId);
                const toIdx = idx;
                if (fromIdx !== -1 && fromIdx !== toIdx) {
                  state.ordered.splice(fromIdx, 1);
                  state.ordered.splice(toIdx, 0, data.chipId);
                  renderState();
                  syncInput();
                }
              } else if (data.type === "bank") {
                const fromIdx = state.available.indexOf(data.chipId);
                if (fromIdx !== -1) {
                  state.available.splice(fromIdx, 1);
                  state.ordered.splice(idx, 0, data.chipId);
                  renderState();
                  syncInput();
                }
              }
            } catch (err) {}
          });

          chipsContainer.appendChild(chipEl);
        });

        // 3. Show/hide placeholder
        if (placeholder) {
          placeholder.style.display = state.ordered.length === 0 ? "flex" : "none";
        }
        dropzone.classList.toggle("has-chips", state.ordered.length > 0);
      };

      const clearDragOverStates = () => {
        dropzone.classList.remove("drag-over");
        wordBank.classList.remove("drag-over");
        itemEl.querySelectorAll(".order-word-chip").forEach((c) => c.classList.remove("drag-target", "dragging"));
      };

      const addChipToSentence = (cId, targetIndex = -1) => {
        const aIdx = state.available.indexOf(cId);
        if (aIdx !== -1) {
          state.available.splice(aIdx, 1);
          if (targetIndex >= 0 && targetIndex <= state.ordered.length) {
            state.ordered.splice(targetIndex, 0, cId);
          } else {
            state.ordered.push(cId);
          }
          renderState();
          syncInput();
        }
      };

      const removeChipFromSentence = (cId) => {
        const oIdx = state.ordered.indexOf(cId);
        if (oIdx !== -1) {
          state.ordered.splice(oIdx, 1);
          if (!state.available.includes(cId)) {
            state.available.push(cId);
          }
          renderState();
          syncInput();
        }
      };

      const syncInput = () => {
        if (state.ordered.length === 0) {
          input.value = "";
        } else {
          const words = state.ordered.map((cId) => (tokenMap[cId] ? tokenMap[cId].word : ""));
          let sentence = words.join(" ");
          // Fix spacing before punctuation like ? . ! ,
          sentence = sentence.replace(/\s+([?.!,:;])/g, "$1");
          // Capitalize first letter
          if (sentence.length > 0) {
            sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
          }
          input.value = sentence;
        }
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      };

      // Bank chips click and dragstart
      bankChips.forEach((bChip) => {
        const cId = bChip.getAttribute("data-chip-id");
        bChip.addEventListener("click", () => {
          if (!state.ordered.includes(cId)) {
            addChipToSentence(cId);
          }
        });

        bChip.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", JSON.stringify({ type: "bank", chipId: cId, qid }));
          e.dataTransfer.effectAllowed = "copyMove";
          bChip.classList.add("dragging");
        });

        bChip.addEventListener("dragend", () => {
          bChip.classList.remove("dragging");
          clearDragOverStates();
        });
      });

      // Sentence dropzone events
      dropzone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropzone.classList.add("drag-over");
      });

      dropzone.addEventListener("dragleave", (e) => {
        if (!dropzone.contains(e.relatedTarget)) {
          dropzone.classList.remove("drag-over");
        }
      });

      dropzone.addEventListener("drop", (e) => {
        e.preventDefault();
        clearDragOverStates();
        try {
          const data = JSON.parse(e.dataTransfer.getData("text/plain"));
          if (data.qid !== qid) return;
          if (data.type === "bank") {
            addChipToSentence(data.chipId);
          } else if (data.type === "reorder") {
            // Drop onto empty end of dropzone
            const fromIdx = state.ordered.indexOf(data.chipId);
            if (fromIdx !== -1) {
              state.ordered.splice(fromIdx, 1);
              state.ordered.push(data.chipId);
              renderState();
              syncInput();
            }
          }
        } catch (err) {}
      });

      // Word bank dropzone (drag from sentence back to bank)
      wordBank.addEventListener("dragover", (e) => {
        e.preventDefault();
        wordBank.classList.add("drag-over");
      });

      wordBank.addEventListener("dragleave", (e) => {
        if (!wordBank.contains(e.relatedTarget)) {
          wordBank.classList.remove("drag-over");
        }
      });

      wordBank.addEventListener("drop", (e) => {
        e.preventDefault();
        clearDragOverStates();
        try {
          const data = JSON.parse(e.dataTransfer.getData("text/plain"));
          if (data.qid !== qid) return;
          if (data.type === "reorder") {
            removeChipFromSentence(data.chipId);
          }
        } catch (err) {}
      });

      // Reset button
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.ordered = [];
          state.available = bankChips.map((c) => c.getAttribute("data-chip-id"));
          renderState();
          syncInput();
        });
      }

      // Populate if input already has text (e.g. from restored session)
      if (input.value && input.value.trim()) {
        const val = input.value.trim().toLowerCase().replace(/[.!?]+$/, "");
        const valWords = val.split(/\s+/).filter(Boolean);
        const matchedChips = [];
        const remainingAvail = [...state.available];

        valWords.forEach((w) => {
          const foundId = remainingAvail.find((cId) => {
            const chipWord = tokenMap[cId].word.toLowerCase().replace(/[.!?]+$/, "");
            return chipWord === w || chipWord.includes(w) || w.includes(chipWord);
          });
          if (foundId) {
            matchedChips.push(foundId);
            remainingAvail.splice(remainingAvail.indexOf(foundId), 1);
          }
        });

        if (matchedChips.length > 0) {
          state.ordered = matchedChips;
          state.available = remainingAvail;
        }
      }

      // Initial render
      renderState();
    });
  },

  /**
   * Inserts a selected word from the word bank into the currently focused or next empty gap.
   */
  insertWordIntoGap(taskId, word) {
    let targetInput = null;

    if (this.focusedInputId) {
      const el = document.getElementById(this.focusedInputId);
      if (el && el.getAttribute("data-task") === taskId) {
        targetInput = el;
      }
    }

    if (!targetInput) {
      const card = document.getElementById(`card-${taskId}`);
      if (card) {
        const empties = Array.from(card.querySelectorAll(".test-gap")).filter(
          (inp) => !inp.value.trim()
        );
        if (empties.length > 0) targetInput = empties[0];
      }
    }

    if (targetInput) {
      targetInput.value = word;
      const qid = targetInput.getAttribute("data-qid");
      this.answers[qid] = word;
      targetInput.classList.add("has-value");
      this.updateWordBankUsedState();
      this.updateProgress();
      this.debouncedSaveSession();

      // Shift focus to the next empty input if available
      const card = targetInput.closest(".task-card");
      if (card) {
        const allInp = Array.from(card.querySelectorAll(".test-gap"));
        const emptiesAfter = allInp.filter((inp) => !inp.value.trim());
        if (emptiesAfter.length > 0) {
          emptiesAfter[0].focus();
        }
      }
    }
  },

  /**
   * Word Bank chip state:
   * When a word is matched with a gap, it disappears from the Word Bank.
   * If a word is cleared or replaced in the gap, it returns to the Word Bank.
   */
  updateWordBankUsedState() {
    document.querySelectorAll(".task-card").forEach((card) => {
      const bankContainer = card.querySelector(".word-bank-container");
      if (!bankContainer) return;

      const chips = Array.from(bankContainer.querySelectorAll(".word-chip"));
      if (chips.length === 0) return;

      // Collect all words currently entered into gap inputs within this task card
      const inputs = Array.from(card.querySelectorAll(".test-gap"));
      const usedWords = inputs
        .map((inp) => (typeof Validator !== "undefined" ? Validator.normalize(inp.value) : inp.value.trim().toLowerCase()))
        .filter(Boolean);

      // Track remaining words to consume 1 chip per filled word
      const remainingPool = [...usedWords];

      let hiddenCount = 0;
      chips.forEach((chip) => {
        const rawWord = chip.getAttribute("data-word") || "";
        const normWord = typeof Validator !== "undefined" ? Validator.normalize(rawWord) : rawWord.trim().toLowerCase();

        const matchIdx = remainingPool.findIndex((w) => w === normWord);
        if (matchIdx !== -1) {
          // Word is matched to a gap: HIDE IT
          chip.classList.add("is-used");
          remainingPool.splice(matchIdx, 1);
          hiddenCount++;
        } else {
          // Word is NOT used in any gap: SHOW IT
          chip.classList.remove("is-used");
        }
      });

      // Show/hide all-placed notification
      bankContainer.classList.toggle("all-used", hiddenCount === chips.length && chips.length > 0);
    });
  },

  /**
   * Populates input fields and pills from saved answers.
   */
  populateSavedAnswers() {
    for (const [qid, val] of Object.entries(this.answers)) {
      const inp = document.getElementById(`input-${qid}`);
      if (inp) {
        inp.value = val;
        inp.classList.toggle("has-value", val.trim().length > 0);
      }

      // If choice pill
      if (val) {
        const pillGroup = document.querySelector(`.choice-pills-group[data-qid="${qid}"]`);
        if (pillGroup) {
          pillGroup.querySelectorAll(".choice-pill-btn").forEach((btn) => {
            btn.classList.toggle("selected", btn.getAttribute("data-value") === val);
          });
        }
      }
    }
    this.updateWordBankUsedState();
  },

  /**
   * Updates the progress bar and answered counters across sections dynamically.
   */
  updateProgress() {
    const variant = TEST_DATA.getTest(this.currentUnit, this.currentVariant, this.currentCourse);
    if (!variant) return;

    let totalQ = 0;
    let answeredQ = 0;
    const secCounts = {};
    const secMax = {};

    for (const [secKey, section] of Object.entries(variant.sections)) {
      secCounts[secKey] = 0;
      secMax[secKey] = section.maxScore || 0;
      for (const task of section.tasks) {
        for (const qid of Object.keys(task.answers)) {
          totalQ++;
          if (this.answers[qid] && this.answers[qid].trim().length > 0) {
            answeredQ++;
            secCounts[secKey] = (secCounts[secKey] || 0) + 1;
          }
        }
      }
    }

    const pct = totalQ > 0 ? Math.round((answeredQ / totalQ) * 100) : 0;
    const progressFill = document.getElementById("test-progress-fill");
    if (progressFill) progressFill.style.width = `${pct}%`;

    const progressCounter = document.getElementById("test-progress-counter");
    if (progressCounter) {
      progressCounter.textContent = `${answeredQ} / ${totalQ} answered (${pct}%)`;
    }

    // Section badges
    for (const secKey of Object.keys(variant.sections)) {
      const badge = document.getElementById(`badge-count-${secKey}`);
      if (badge) {
        badge.textContent = `${secCounts[secKey] || 0} / ${secMax[secKey] || 0}`;
      }
    }
  },

  /**
   * Debounced AutoSave to LocalStorage
   */
  debouncedSaveSession() {
    const ind = document.getElementById("save-indicator");
    if (ind) {
      ind.className = "save-indicator saving";
      ind.textContent = "Saving...";
    }

    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => {
      this.saveCurrentSession();
      if (ind) {
        ind.className = "save-indicator saved";
        ind.textContent = "Saved";
      }
    }, 400);
  },

  saveCurrentSession() {
    Storage.saveSession({
      course: this.currentCourse,
      unit: this.currentUnit,
      student: this.student,
      answers: this.answers,
      currentSection: this.activeSection
    });
  },

  /**
   * Submit Confirmation Modal
   */
  showSubmitConfirmation() {
    const variant = TEST_DATA.getTest(this.currentUnit, this.currentVariant, this.currentCourse);
    let totalQuestions = 0;
    let answeredQuestions = 0;
    const unansweredIds = [];

    for (const section of Object.values(variant.sections)) {
      for (const task of section.tasks) {
        for (const qid of Object.keys(task.answers)) {
          totalQuestions++;
          const val = (this.answers[qid] || "").trim();
          if (val.length > 0) {
            answeredQuestions++;
          } else {
            unansweredIds.push({ qid, taskNumber: task.number });
          }
        }
      }
    }

    const modal = document.getElementById("modal-submit-confirmation");
    const countDisplay = document.getElementById("submit-confirm-count");
    const warningBox = document.getElementById("submit-confirm-warning");
    const jumpBtn = document.getElementById("btn-jump-unanswered");

    if (countDisplay) {
      countDisplay.textContent = `You have answered ${answeredQuestions} out of ${totalQuestions} questions.`;
    }

    if (unansweredIds.length > 0) {
      warningBox.style.display = "block";
      warningBox.innerHTML = `
        <div style="background:#FFFBEB; border:1px solid #FCD34D; color:#92400E; padding:0.75rem; border-radius:8px; font-size:0.9rem;">
          ⚠️ <strong>${unansweredIds.length} question(s) are still blank!</strong>
          <br>We recommend checking them before submitting.
        </div>
      `;
      jumpBtn.style.display = "inline-flex";
      jumpBtn.onclick = () => {
        this.closeModal("modal-submit-confirmation");
        this.jumpToQuestion(unansweredIds[0].qid);
      };
    } else {
      warningBox.style.display = "none";
      jumpBtn.style.display = "none";
    }

    const confirmBtn = document.getElementById("btn-confirm-final-submit");
    confirmBtn.onclick = () => {
      this.closeModal("modal-submit-confirmation");
      this.performFinalSubmission();
    };

    this.openModal("modal-submit-confirmation");
  },

  jumpToQuestion(qid) {
    const input = document.getElementById(`input-${qid}`);
    if (input) {
      const sectionPanel = input.closest(".test-section-panel");
      if (sectionPanel) {
        const sec = sectionPanel.id.replace("section-panel-", "");
        this.switchSection(sec);
      }
      setTimeout(() => {
        const target = input.type === "hidden" ? (input.closest(".choice-pills-group") || input) : input;
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        if (input.type !== "hidden") input.focus();
        target.classList.add("highlight-pulse");
        setTimeout(() => target.classList.remove("highlight-pulse"), 1500);
      }, 200);
    }
  },

  /**
   * Final Submission & Grading Execution
   */
  async performFinalSubmission() {
    // 1. Grade the test
    const evaluation = Validator.evaluateTest(this.currentVariant, this.answers, this.currentUnit, this.currentCourse);

    // Prefix variantTitle with friendly course name for teacher reporting & student view
    const courseTitle = this.currentCourse === "gogetter4" ? "Go Getter 4" : "Go Getter 3";
    if (evaluation && evaluation.variantTitle && !evaluation.variantTitle.includes("Go Getter")) {
      evaluation.variantTitle = `${courseTitle} • ${evaluation.variantTitle}`;
    }

    // 2. Clear active in-progress session
    Storage.clearSession();

    // 3. Render Results Screen
    this.renderResultsScreen(evaluation);
    this.switchScreen("review");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 4. Trigger celebration confetti if score >= 70%
    if (evaluation.percentage >= 70) {
      this.launchConfetti();
    }

    // 5. Send results in background to Teacher (Google Sheets / Telegram)
    TeacherService.submitTestResults(this.student, evaluation);
  },

  /**
   * Renders the Results & Error Review Screen
   */
  renderResultsScreen(evaluation) {
    const container = document.getElementById("review-content-container");
    if (!container) return;

    // Header Hero
    const grade = evaluation.gradeTier;
    let html = `
      <div class="results-hero-card">
        <div class="score-circle-wrapper">
          <div class="score-circle-num">${evaluation.totalScore}</div>
          <div class="score-circle-max">out of ${evaluation.totalMax}</div>
        </div>
        <div class="grade-badge-display" style="background:var(--${grade.color}-light); color:var(--${grade.color}); border: 1.5px solid var(--${grade.color}-border);">
          ${grade.badge}
        </div>
        <h2>${grade.title}</h2>
        <p style="color:var(--text-muted); max-width:540px; margin:0 auto 1rem;">${grade.message}</p>
        <div class="student-meta">
          👤 <strong>${this.student.fullName || `${this.student.firstName} ${this.student.lastName}`.trim()}</strong>${this.student.studentClass ? ` • 🏫 Class: ${this.student.studentClass}` : ''}${this.student.teacher ? ` • 👩‍🏫 Teacher: ${this.student.teacher}` : ''} • 📑 ${evaluation.variantTitle}
        </div>

        <div class="section-scores-grid">
          ${Object.entries(evaluation.sections || {}).map(([sKey, sObj]) => `
            <div class="section-score-card">
              <div class="section-score-name">${sObj.title || (sKey.charAt(0).toUpperCase() + sKey.slice(1))}</div>
              <div class="section-score-val">${sObj.score} / ${sObj.maxScore}</div>
            </div>
          `).join("")}
        </div>

        <div style="margin-top:1.5rem; display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="window.print()">
            🖨️ Print / Save PDF
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-retake-test">
            🔄 Switch Unit / Retake
          </button>
        </div>
      </div>

      <div style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
        <h3 style="font-size:1.3rem; font-weight:800;">Detailed Answer Review</h3>
        <span style="font-size:0.9rem; color:var(--text-muted);">
          ${evaluation.mistakes.length === 0 ? "🎉 Zero mistakes! Perfect score!" : `${evaluation.mistakes.length} mistakes to review`}
        </span>
      </div>
    `;

    // Render Question-by-Question Review Cards
    for (const [qid, qRes] of Object.entries(evaluation.questions)) {
      const isCorrect = qRes.isCorrect;
      const statusIcon = isCorrect ? "✅ Correct (+1 pt)" : "❌ Incorrect (0 pts)";
      const cardClass = isCorrect ? "correct" : "incorrect";

      html += `
        <div class="review-card ${cardClass}" id="review-item-${qid}">
          <div class="review-card-header">
            <div class="review-status-indicator ${cardClass}">
              <span>${statusIcon}</span>
              <span style="color:var(--text-muted); font-size:0.85rem;">Task ${qRes.taskNumber} (Item ${qid})</span>
            </div>
          </div>

          <div class="review-diff-row">
            <div class="review-box user">
              <span style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Your Answer</span>
              <strong>${qRes.userAnswer || '<em style="color:#94A3B8">(no answer entered)</em>'}</strong>
            </div>
            <div class="review-box expected">
              <span style="display:block; font-size:0.75rem; font-weight:700; color:#047857; text-transform:uppercase;">Correct Answer</span>
              <strong>${qRes.expected}</strong>
            </div>
          </div>

          <div class="review-explanation">
            💡 <strong>Explanation:</strong> ${qRes.explanation}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;

    // Retake button
    const retakeBtn = document.getElementById("btn-retake-test");
    if (retakeBtn) {
      retakeBtn.addEventListener("click", () => {
        this.switchScreen("start");
        this.checkForResume();
      });
    }

    // Mini "Ask Teacher" buttons on review cards
    container.querySelectorAll(".ask-teacher-mini-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const taskInfo = btn.getAttribute("data-task");
        this.openAskTeacherModal(taskInfo);
      });
    });
  },

  /**
   * Ask Teacher Modal
   */
  openAskTeacherModal(prefillTask = "") {
    const studentNameField = document.getElementById("ask-teacher-student-name");
    const taskInfoField = document.getElementById("ask-teacher-task-info");
    const questionTextField = document.getElementById("ask-teacher-question-text");
    const statusMsg = document.getElementById("ask-teacher-status");

    if (studentNameField && this.student) {
      studentNameField.value = `${this.student.firstName} ${this.student.lastName} (${this.student.studentClass || 'Class'})`;
    }
    if (taskInfoField) {
      taskInfoField.value = prefillTask || (this.focusedInputId ? `Item #${this.focusedInputId}` : "General Question");
    }
    if (questionTextField) questionTextField.value = "";
    if (statusMsg) statusMsg.innerHTML = "";

    const sendBtn = document.getElementById("btn-send-question");
    sendBtn.onclick = async () => {
      const qText = questionTextField.value.trim();
      if (!qText) {
        alert("Please write your question first.");
        return;
      }

      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";
      if (statusMsg) statusMsg.innerHTML = `<span style="color:var(--text-muted)">Sending question to teacher...</span>`;

      const variant = TEST_DATA.getTest(this.currentUnit, this.currentVariant, this.currentCourse);
      const res = await TeacherService.sendStudentQuestion({
        student: this.student || { firstName: "Student", lastName: "", studentClass: "" },
        variantTitle: variant ? variant.title : "English Test",
        taskInfo: taskInfoField.value,
        questionText: qText
      });

      sendBtn.disabled = false;
      sendBtn.textContent = "Send Question";

      if (statusMsg) {
        statusMsg.innerHTML = `
          <div style="background:#ECFDF5; border:1px solid #6EE7B7; color:#065F46; padding:0.65rem; border-radius:8px; font-size:0.9rem; margin-top:0.75rem;">
            ✅ <strong>Question sent!</strong> Your teacher has received your question.
          </div>
        `;
      }
      setTimeout(() => this.closeModal("modal-ask-teacher"), 2200);
    };

    this.openModal("modal-ask-teacher");
  },

  /**
   * Teacher Settings Modal & Submissions Archive
   */
  openTeacherSettingsModal() {
    const config = Storage.getTeacherConfig();
    const sheetsInput = document.getElementById("settings-sheets-url");
    const tgTokenInput = document.getElementById("settings-telegram-token");
    const tgChatIdInput = document.getElementById("settings-telegram-chatid");
    const testResultBox = document.getElementById("settings-test-results");

    if (sheetsInput) sheetsInput.value = config.sheetsWebhookUrl || "";
    if (tgTokenInput) tgTokenInput.value = config.telegramBotToken || "";
    if (tgChatIdInput) tgChatIdInput.value = config.telegramChatId || "";
    if (testResultBox) testResultBox.innerHTML = "";

    this.renderSubmissionsArchive();

    document.getElementById("btn-test-sheets").onclick = async () => {
      testResultBox.innerHTML = "<em>Testing Google Sheets webhook...</em>";
      const res = await TeacherService.testSheetsWebhook(sheetsInput.value);
      testResultBox.innerHTML = res.ok
        ? `<span style="color:#059669">✅ ${res.message}</span>`
        : `<span style="color:#DC2626">❌ ${res.message}</span>`;
    };

    document.getElementById("btn-test-telegram").onclick = async () => {
      testResultBox.innerHTML = "<em>Sending test message to Telegram...</em>";
      const res = await TeacherService.testTelegramBot(tgTokenInput.value, tgChatIdInput.value);
      testResultBox.innerHTML = res.ok
        ? `<span style="color:#059669">✅ ${res.message}</span>`
        : `<span style="color:#DC2626">❌ ${res.message}</span>`;
    };

    document.getElementById("btn-save-teacher-settings").onclick = () => {
      Storage.saveTeacherConfig({
        sheetsWebhookUrl: sheetsInput.value.trim(),
        telegramBotToken: tgTokenInput.value.trim(),
        telegramChatId: tgChatIdInput.value.trim()
      });
      alert("Settings saved successfully!");
      this.closeModal("modal-teacher-settings");
    };

    this.openModal("modal-teacher-settings");
  },

  renderSubmissionsArchive() {
    const archiveList = Storage.getSubmissionsArchive();
    const container = document.getElementById("archive-table-body");
    if (!container) return;

    if (archiveList.length === 0) {
      container.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:1rem; color:#94A3B8;">No student submissions stored yet.</td></tr>`;
      return;
    }

    container.innerHTML = archiveList
      .map((item) => {
        return `
          <tr style="border-bottom:1px solid #F1F5F9;">
            <td style="padding:0.6rem 0.4rem; font-size:0.85rem;">${new Date(item.timestamp).toLocaleTimeString()}</td>
            <td style="padding:0.6rem 0.4rem; font-weight:600; font-size:0.85rem;">${item.payload.studentName} (${item.payload.studentClass})</td>
            <td style="padding:0.6rem 0.4rem; font-size:0.85rem;">${item.payload.variant}</td>
            <td style="padding:0.6rem 0.4rem; font-weight:700; color:#4F46E5; font-size:0.85rem;">${item.payload.totalScore} (${item.payload.percentage})</td>
            <td style="padding:0.6rem 0.4rem; font-size:0.8rem; color:#DC2626;">${item.payload.mistakesCount} mistakes</td>
          </tr>
        `;
      })
      .join("");

    const clearBtn = document.getElementById("btn-clear-archive");
    if (clearBtn) {
      clearBtn.onclick = () => {
        if (confirm("Are you sure you want to clear the local submission history?")) {
          Storage.clearArchive();
          this.renderSubmissionsArchive();
        }
      };
    }
  },

  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add("open");
  },

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove("open");
  },

  launchConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#8B5CF6"];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.4,
        vx: (Math.random() - 0.5) * 16,
        vy: Math.random() * -14 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4;
        p.rotation += p.rSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 180) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(animate);
  }
};
