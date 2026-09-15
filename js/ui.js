/**
 * Language Test Unit 1 - UI Rendering and View Controller
 */

const UI = {
  activeScreen: "start",
  activeSection: "vocabulary",
  currentVariant: "variantA",
  student: null,
  answers: {},
  focusedInputId: null,

  init() {
    this.bindEvents();
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
   * Check if an in-progress session exists in LocalStorage.
   */
  checkForResume() {
    const saved = Storage.getSession();
    const resumeContainer = document.getElementById("resume-session-prompt");
    const studentName = saved?.student ? (saved.student.fullName || saved.student.firstName || "") : "";
    if (saved && saved.student && studentName && resumeContainer) {
      resumeContainer.innerHTML = `
        <div class="resume-banner">
          <div class="resume-banner-text">
            <strong>Welcome back, ${studentName}!</strong>
            <span>You have an unfinished test (${saved.student.variant === "variantA" ? "Variant A" : "Variant B"}).</span>
          </div>
          <div style="display:flex; gap: 0.5rem;">
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
    }
  },

  /**
   * Resumes a previously saved session.
   */
  resumeSession(saved) {
    this.student = saved.student;
    this.currentVariant = saved.student.variant || "variantA";
    this.answers = saved.answers || {};
    this.activeSection = saved.currentSection || "vocabulary";

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
    const variantRadio = document.querySelector('input[name="test-variant"]:checked');
    const variant = variantRadio ? variantRadio.value : "variantA";

    if (!fullName) {
      alert("Please enter your name.");
      return;
    }

    const parts = fullName.split(/\s+/);
    const firstName = parts[0] || fullName;
    const lastName = parts.slice(1).join(" ") || "";

    this.student = { fullName, firstName, lastName, studentClass: "", variant };
    this.currentVariant = variant;
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

    // Update Header student badge
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

    // Toggle Floating Help button visibility
    const helpBtn = document.getElementById("floating-help-btn");
    if (helpBtn) {
      helpBtn.style.display = screenName === "start" ? "none" : "flex";
    }
  },

  /**
   * Switches section between 'vocabulary', 'grammar', 'communication'
   */
  switchSection(sectionKey) {
    this.activeSection = sectionKey;
    document.querySelectorAll(".section-tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-section") === sectionKey);
    });

    document.querySelectorAll(".test-section-panel").forEach((panel) => {
      panel.style.display = panel.id === `section-panel-${sectionKey}` ? "block" : "none";
    });

    // Update Next/Prev navigation buttons
    const sections = ["vocabulary", "grammar", "communication"];
    const idx = sections.indexOf(sectionKey);
    const prevBtn = document.getElementById("btn-prev-section");
    const nextBtn = document.getElementById("btn-next-section");
    const submitBtn = document.getElementById("btn-submit-test");

    if (prevBtn) prevBtn.style.visibility = idx === 0 ? "hidden" : "visible";
    if (nextBtn) {
      nextBtn.style.display = idx === sections.length - 1 ? "none" : "inline-flex";
    }
    if (submitBtn) {
      submitBtn.style.display = idx === sections.length - 1 ? "inline-flex" : "none";
    }

    window.scrollTo({ top: 120, behavior: "smooth" });
  },

  navigateSection(direction) {
    const sections = ["vocabulary", "grammar", "communication"];
    const idx = sections.indexOf(this.activeSection);
    const newIdx = idx + direction;
    if (newIdx >= 0 && newIdx < sections.length) {
      this.switchSection(sections[newIdx]);
    }
  },

  /**
   * Renders the complete test questions according to the active variant.
   */
  renderTestUI() {
    const variant = TEST_DATA[this.currentVariant];
    if (!variant) return;

    // Header badge
    const badge = document.getElementById("active-variant-badge");
    if (badge) badge.textContent = variant.title;

    // Render Section 1: Vocabulary
    this.renderVocabularySection(variant.sections.vocabulary);

    // Render Section 2: Grammar
    this.renderGrammarSection(variant.sections.grammar);

    // Render Section 3: Communication
    this.renderCommunicationSection(variant.sections.communication);

    // Restore saved answers into inputs
    this.populateSavedAnswers();
  },

  /**
   * Vocabulary Section: Task 1 (Word Bank + Picture), Task 2 (Letter-hint + Picture), Task 3 (Personality)
   */
  renderVocabularySection(section) {
    const container = document.getElementById("section-panel-vocabulary");
    if (!container) return;

    let html = "";
    for (const task of section.tasks) {
      if (task.id === "task_1") {
        html += this.renderTask1(task);
      } else if (task.id === "task_2") {
        html += this.renderTask2(task);
      } else if (task.id === "task_3") {
        html += this.renderTask3(task);
      }
    }
    container.innerHTML = html;
    this.bindTaskInputs(container);
  },

  /**
   * Task 1: Word Bank & Gap Filling with Character Illustration
   */
  renderTask1(task) {
    const illSvg = Illustrations.renderIllustration(task.imageKey);

    // Word Bank chips
    const wordBankHtml = task.wordBank
      .map((w) => {
        const isExample = task.usedInExample && task.usedInExample.includes(w);
        return `<button type="button" class="word-chip ${isExample ? 'used' : ''}" data-word="${w}" data-task="${task.id}">${w}</button>`;
      })
      .join("");

    // Sentences with gaps
    let sentencesHtml = "";
    for (const s of task.sentences) {
      let line = `<p style="margin-bottom:0.75rem;">${s.textBefore || ""} `;
      if (s.gapId) {
        line += `
          <span class="gap-inline-wrapper">
            <span class="gap-label">${s.label}</span>
            <input type="text" class="gap-input test-gap" id="input-${s.gapId}" data-qid="${s.gapId}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="type or click word">
          </span>
        `;
      }
      line += `${s.textAfter || ""} `;
      if (s.gapId2) {
        line += `
          <span class="gap-inline-wrapper">
            <span class="gap-label">${s.label2}</span>
            <input type="text" class="gap-input test-gap" id="input-${s.gapId2}" data-qid="${s.gapId2}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="type or click word">
          </span>
        `;
      }
      line += `${s.textAfter2 || ""}</p>`;
      sentencesHtml += line;
    }

    return `
      <div class="task-card" id="card-${task.id}">
        <div class="task-header">
          <div class="task-title-group">
            <div class="task-number-badge">${task.number}</div>
            <div class="task-instructions">${task.title}</div>
          </div>
          <div class="task-points-badge">${task.points} points</div>
        </div>

        <div class="task-example-banner">
          <strong>Example:</strong> ${task.example}
        </div>

        <div class="illustration-wrapper">
          ${illSvg}
        </div>

        <div class="word-bank-container" data-task="${task.id}">
          <div class="word-bank-header">
            <span>📦 Word Bank (Click a word to fill the active blank):</span>
          </div>
          <div class="word-bank-chips">
            ${wordBankHtml}
          </div>
        </div>

        <div class="story-text-flow">
          ${sentencesHtml}
        </div>
      </div>
    `;
  },

  /**
   * Task 2: Clothes and Appearance with Letter-Hints & Illustration
   */
  renderTask2(task) {
    const illSvg = Illustrations.renderIllustration(task.imageKey);

    const rowsHtml = task.items
      .map((it) => {
        return `
          <div class="letter-hint-row">
            <span class="gap-label">${it.label}</span>
            <span>${it.textBefore}</span>
            <span class="hint-capsule">${it.displayHint}</span>
            <input type="text" class="hint-input test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="type word...">
            <span>${it.textAfter}</span>
          </div>
        `;
      })
      .join("");

    return `
      <div class="task-card" id="card-${task.id}">
        <div class="task-header">
          <div class="task-title-group">
            <div class="task-number-badge">${task.number}</div>
            <div class="task-instructions">${task.title}</div>
          </div>
          <div class="task-points-badge">${task.points} points</div>
        </div>

        <div class="task-example-banner">
          <strong>Example:</strong> ${task.example}
        </div>

        <div class="illustration-wrapper">
          ${illSvg}
        </div>

        <div class="letter-hint-list">
          ${rowsHtml}
        </div>
      </div>
    `;
  },

  /**
   * Task 3: Personality Adjectives
   */
  renderTask3(task) {
    const itemsHtml = task.items
      .map((it) => {
        return `
          <div class="personality-item">
            <div class="personality-prompt">${it.sentence}</div>
            <div class="personality-input-wrap">
              <span class="personality-prefix">${it.prefix.toUpperCase()}</span>
              <input type="text" class="form-control test-gap" id="input-${it.id}" data-qid="${it.id}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="type adjective here...">
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <div class="task-card" id="card-${task.id}">
        <div class="task-header">
          <div class="task-title-group">
            <div class="task-number-badge">${task.number}</div>
            <div class="task-instructions">${task.title}</div>
          </div>
          <div class="task-points-badge">${task.points} points</div>
        </div>

        <div class="task-example-banner">
          <strong>Example:</strong> ${task.example}
        </div>

        <div class="personality-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  },

  /**
   * Grammar Section: Task 4 (Past Simple) & Task 5 (Past Simple vs Past Continuous)
   */
  renderGrammarSection(section) {
    const container = document.getElementById("section-panel-grammar");
    if (!container) return;

    let html = "";
    for (const task of section.tasks) {
      if (task.id === "task_4") {
        html += this.renderTask4(task);
      } else if (task.id === "task_5") {
        html += this.renderTask5(task);
      }
    }
    container.innerHTML = html;
    this.bindTaskInputs(container);
  },

  /**
   * Task 4: Past Simple Dialogue
   */
  renderTask4(task) {
    let linesHtml = "";
    for (const line of task.dialogue) {
      const isA = line.speaker === "Jack" || line.speaker === "Fiona";
      const speakerClass = isA ? "speaker-A" : "speaker-B";

      if (line.text) {
        linesHtml += `
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
              <input type="text" class="gap-input test-gap" id="input-${pt.gapId}" data-qid="${pt.gapId}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="verb form">
            </span>
            <span class="verb-prompt">(${pt.verb})</span>
          `;
          if (pt.after) partsContent += ` ${pt.after} `;
        }
        linesHtml += `
          <div class="dialogue-line">
            <div class="speaker-badge ${speakerClass}">${line.speaker}:</div>
            <div class="dialogue-content">${partsContent}</div>
          </div>
        `;
      }
    }

    return `
      <div class="task-card" id="card-${task.id}">
        <div class="task-header">
          <div class="task-title-group">
            <div class="task-number-badge">${task.number}</div>
            <div class="task-instructions">${task.title}</div>
          </div>
          <div class="task-points-badge">${task.points} points</div>
        </div>

        <div class="task-example-banner">
          <strong>Example:</strong> ${task.example}
        </div>

        <div class="dialogue-thread">
          ${linesHtml}
        </div>
      </div>
    `;
  },

  /**
   * Task 5: Past Simple vs. Past Continuous
   */
  renderTask5(task) {
    const itemsHtml = task.items
      .map((it) => {
        let content = `<span style="font-weight:700; margin-right:0.35rem;">${it.itemNum}</span> `;
        for (const pt of it.parts) {
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
              <span class="verb-prompt">(${pt.verb})</span>
            `;
          } else {
            content += `
              <span class="gap-inline-wrapper">
                <span class="gap-label">${pt.label}</span>
                <input type="text" class="gap-input test-gap" id="input-${pt.gapId}" data-qid="${pt.gapId}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="was/were doing or did">
              </span>
              <span class="verb-prompt">(${pt.verb})</span>
            `;
          }
          if (pt.after) content += ` ${pt.after} `;
        }
        return `<div class="grammar-item-row">${content}</div>`;
      })
      .join("");

    return `
      <div class="task-card" id="card-${task.id}">
        <div class="task-header">
          <div class="task-title-group">
            <div class="task-number-badge">${task.number}</div>
            <div class="task-instructions">${task.title}</div>
          </div>
          <div class="task-points-badge">${task.points} points</div>
        </div>

        <div class="task-example-banner">
          <strong>Example:</strong> ${task.example}
        </div>

        <div class="grammar-items-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  },

  /**
   * Communication Section: Task 6
   */
  renderCommunicationSection(section) {
    const container = document.getElementById("section-panel-communication");
    if (!container) return;

    const task = section.tasks[0];
    const wordBankHtml = task.wordBank
      .map((w) => {
        const isExample = task.usedInExample && task.usedInExample.includes(w);
        return `<button type="button" class="word-chip ${isExample ? 'used' : ''}" data-word="${w}" data-task="${task.id}">${w}</button>`;
      })
      .join("");

    let dialogueHtml = "";
    for (const line of task.dialogue) {
      const isA = line.speaker === "Anne" || line.speaker === "Kevin";
      const speakerClass = isA ? "speaker-A" : "speaker-B";

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
              <input type="text" class="gap-input test-gap" id="input-${pt.gapId}" data-qid="${pt.gapId}" data-task="${task.id}" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="choose phrase">
            </span>
          `;
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

    container.innerHTML = `
      <div class="task-card" id="card-${task.id}">
        <div class="task-header">
          <div class="task-title-group">
            <div class="task-number-badge">${task.number}</div>
            <div class="task-instructions">${task.title}</div>
          </div>
          <div class="task-points-badge">${task.points} points</div>
        </div>

        <div class="task-example-banner">
          <strong>Example:</strong> ${task.example}
        </div>

        <div class="word-bank-container" data-task="${task.id}">
          <div class="word-bank-header">
            <span>📦 Word Bank (Click a phrase to insert):</span>
          </div>
          <div class="word-bank-chips">
            ${wordBankHtml}
          </div>
        </div>

        <div class="dialogue-thread">
          ${dialogueHtml}
        </div>
      </div>
    `;

    this.bindTaskInputs(container);
  },

  /**
   * Binds input event listeners, word bank chips, and auto-save.
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
        if (chip.classList.contains("used")) return;
        const word = chip.getAttribute("data-word");
        const taskId = chip.getAttribute("data-task");
        this.insertWordIntoGap(taskId, word);
      });
    });
  },

  /**
   * Inserts a selected word from the word bank into the currently focused or next empty gap.
   */
  insertWordIntoGap(taskId, word) {
    let targetInput = null;

    // If focused input belongs to this task
    if (this.focusedInputId) {
      const el = document.getElementById(this.focusedInputId);
      if (el && el.getAttribute("data-task") === taskId) {
        targetInput = el;
      }
    }

    // Otherwise find first empty input in this task
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
        const curIdx = allInp.indexOf(targetInput);
        if (curIdx >= 0 && curIdx < allInp.length - 1) {
          allInp[curIdx + 1].focus();
        }
      }
    }
  },

  /**
   * Updates strikethrough status of words in Word Banks when typed/used.
   */
  updateWordBankUsedState() {
    const currentValues = Object.values(this.answers).map((v) =>
      v ? v.trim().toLowerCase() : ""
    );

    document.querySelectorAll(".word-bank-container").forEach((bank) => {
      const taskId = bank.getAttribute("data-task");
      const chips = bank.querySelectorAll(".word-chip");

      chips.forEach((chip) => {
        const word = chip.getAttribute("data-word").toLowerCase();
        // Check if word is used in this task
        const isUsed = currentValues.includes(word);
        // Do not unmark default examples
        const isExample = chip.closest(".task-card")?.querySelector(".task-example-banner")?.textContent.toLowerCase().includes(word);

        if (isExample) {
          chip.classList.add("used");
        } else {
          chip.classList.toggle("used", isUsed);
        }
      });
    });
  },

  /**
   * Populates input fields from saved answers.
   */
  populateSavedAnswers() {
    for (const [qid, val] of Object.entries(this.answers)) {
      const inp = document.getElementById(`input-${qid}`);
      if (inp) {
        inp.value = val;
        inp.classList.toggle("has-value", val.trim().length > 0);
      }
    }
    this.updateWordBankUsedState();
  },

  /**
   * Updates the progress bar and answered counters across sections.
   */
  updateProgress() {
    const variant = TEST_DATA[this.currentVariant];
    if (!variant) return;

    let totalQ = 0;
    let answeredQ = 0;
    const secCounts = { vocabulary: 0, grammar: 0, communication: 0 };
    const secMax = { vocabulary: 16, grammar: 14, communication: 5 };

    for (const [secKey, section] of Object.entries(variant.sections)) {
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
    for (const secKey of ["vocabulary", "grammar", "communication"]) {
      const badge = document.getElementById(`badge-count-${secKey}`);
      if (badge) {
        badge.textContent = `${secCounts[secKey]} / ${secMax[secKey]}`;
      }
    }
  },

  /**
   * Debounced AutoSave to LocalStorage
   */
  saveTimer: null,
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
      student: this.student,
      answers: this.answers,
      currentSection: this.activeSection
    });
  },

  /**
   * Submit Confirmation Modal
   */
  showSubmitConfirmation() {
    const variant = TEST_DATA[this.currentVariant];
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
      const taskCard = input.closest(".task-card");
      const sectionPanel = input.closest(".test-section-panel");
      if (sectionPanel) {
        const sec = sectionPanel.id.replace("section-panel-", "");
        this.switchSection(sec);
      }
      setTimeout(() => {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
        input.focus();
        input.classList.add("highlight-pulse");
        setTimeout(() => input.classList.remove("highlight-pulse"), 1500);
      }, 200);
    }
  },

  /**
   * Final Submission & Grading Execution
   */
  async performFinalSubmission() {
    // 1. Grade the test
    const evaluation = Validator.evaluateTest(this.currentVariant, this.answers);

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
          👤 <strong>${this.student.fullName || `${this.student.firstName} ${this.student.lastName}`.trim()}</strong>${this.student.studentClass ? ` • 🏫 Class: ${this.student.studentClass}` : ''} • 📑 ${evaluation.variantTitle}
        </div>

        <div class="section-scores-grid">
          <div class="section-score-card">
            <div class="section-score-name">Vocabulary</div>
            <div class="section-score-val">${evaluation.sections.vocabulary.score} / ${evaluation.sections.vocabulary.maxScore}</div>
          </div>
          <div class="section-score-card">
            <div class="section-score-name">Grammar</div>
            <div class="section-score-val">${evaluation.sections.grammar.score} / ${evaluation.sections.grammar.maxScore}</div>
          </div>
          <div class="section-score-card">
            <div class="section-score-name">Communication</div>
            <div class="section-score-val">${evaluation.sections.communication.score} / ${evaluation.sections.communication.maxScore}</div>
          </div>
        </div>

        <div style="margin-top:1.5rem; display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="window.print()">
            🖨️ Print / Save PDF
          </button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-retake-test">
            🔄 Retake or Switch Variant
          </button>
        </div>
      </div>

      <div style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
        <h3 style="font-size:1.3rem; font-weight:800;">Detailed Answer Review</h3>
        <span style="font-size:0.9rem; color:var(--text-muted);">
          ${evaluation.mistakes.length === 0 ? "🎉 Zero mistakes!" : `${evaluation.mistakes.length} mistakes to review`}
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
            <button type="button" class="btn btn-secondary btn-sm ask-teacher-mini-btn" data-qid="${qid}" data-task="Task ${qRes.taskNumber} (Question ${qid})">
              🙋 Ask Teacher
            </button>
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
        if (confirm("Are you sure you want to exit to the start screen?")) {
          this.switchScreen("start");
          this.checkForResume();
        }
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

      const variant = TEST_DATA[this.currentVariant];
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

    // Render Archive table
    this.renderSubmissionsArchive();

    // Test Sheets button
    document.getElementById("btn-test-sheets").onclick = async () => {
      testResultBox.innerHTML = "<em>Testing Google Sheets webhook...</em>";
      const res = await TeacherService.testSheetsWebhook(sheetsInput.value);
      testResultBox.innerHTML = res.ok
        ? `<span style="color:#059669">✅ ${res.message}</span>`
        : `<span style="color:#DC2626">❌ ${res.message}</span>`;
    };

    // Test Telegram button
    document.getElementById("btn-test-telegram").onclick = async () => {
      testResultBox.innerHTML = "<em>Sending test message to Telegram...</em>";
      const res = await TeacherService.testTelegramBot(tgTokenInput.value, tgChatIdInput.value);
      testResultBox.innerHTML = res.ok
        ? `<span style="color:#059669">✅ ${res.message}</span>`
        : `<span style="color:#DC2626">❌ ${res.message}</span>`;
    };

    // Save Settings button
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

    // Clear archive button
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

  /**
   * Lightweight HTML5 Canvas Confetti animation
   */
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
        p.vy += 0.4; // gravity
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
