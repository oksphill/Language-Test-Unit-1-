/**
 * Language Tests Central Aggregator & Multi-Course Engine
 * Supports Go Getter 3 (Level A2) & Go Getter 4 (Level A2+/B1)
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

const TEST_DATA = {
  currentCourse: "gogetter4",
  currentUnit: "unit1",

  courses: {
    gogetter3: {
      id: "gogetter3",
      name: "Go Getter 3",
      level: "A2",
      title: "Go Getter 3 (Level A2)",
      desc: "Pre-Intermediate • 8 Units + 2 Exams • 30–50 pts",
      units: {
        get unit1() { return window.GG3_UNIT_1_DATA; },
        get unit2() { return window.GG3_UNIT_2_DATA; },
        get unit3() { return window.GG3_UNIT_3_DATA; },
        get unit4() { return window.GG3_UNIT_4_DATA; },
        get mid_year() { return window.GG3_MID_YEAR_DATA; },
        get unit5() { return window.GG3_UNIT_5_DATA; },
        get unit6() { return window.GG3_UNIT_6_DATA; },
        get unit7() { return window.GG3_UNIT_7_DATA; },
        get unit8() { return window.GG3_UNIT_8_DATA; },
        get end_of_year() { return window.GG3_END_OF_YEAR_DATA; }
      },
      getUnitsList() {
        return [
          { id: "unit1", number: 1, title: "Chores & Personality", icon: "🧹", points: 30, desc: "Household chores, Personality adjectives, Present Continuous & Simple" },
          { id: "unit2", number: 2, title: "Shopping & Shops", icon: "🛒", points: 30, desc: "Shopping dialogue, Shops, Comparatives (-er / more / better), too / enough / as" },
          { id: "unit3", number: 3, title: "Holidays & Travel", icon: "🏕️", points: 30, desc: "Holiday activities, Past Simple regular & irregular, Did questions, requests" },
          { id: "unit4", number: 4, title: "Technology & Gadgets", icon: "📱", points: 30, desc: "Household appliances, Smartphones, Past Continuous, when, adverbs of manner" },
          { id: "mid_year", number: "1-4", title: "Mid-Year Test", icon: "⭐", points: 50, desc: "Units 1–4 Review: Vocab, Grammar, Audio Listening (Track 10), Comm, Reading" },
          { id: "unit5", number: 5, title: "Health & The Body", icon: "🩺", points: 30, desc: "Flu symptoms, Injuries, Body parts, have to, should / shouldn't" },
          { id: "unit6", number: 6, title: "Food & Cooking", icon: "🍳", points: 30, desc: "Butter biscuits recipe, Kitchen utensils, Flavours, Present Perfect (ever / never)" },
          { id: "unit7", number: 7, title: "Houses & Homes", icon: "🏡", points: 30, desc: "Types of houses & rooms, Phrasal verbs, Present Continuous for future, must / can" },
          { id: "unit8", number: 8, title: "Life Plans & Friends", icon: "🌟", points: 31, desc: "Life plans, Manners & gestures, Future with will, Complex questions, agree/disagree" },
          { id: "end_of_year", number: "1-8", title: "End-of-Year Test", icon: "🏆", points: 50, desc: "Units 1–8 Full Review: Vocab, Grammar, Audio Listening (Track 11), Comm matching, Reading" }
        ];
      }
    },

    gogetter4: {
      id: "gogetter4",
      name: "Go Getter 4",
      level: "A2+ / B1",
      title: "Go Getter 4 (Level A2+ / B1)",
      desc: "Intermediate • 8 Units + 2 Exams • 35/50 pts",
      units: {
        get unit1() { return window.UNIT_1_DATA; },
        get unit2() { return window.UNIT_2_DATA; },
        get unit3() { return window.UNIT_3_DATA; },
        get unit4() { return window.UNIT_4_DATA; },
        get unit5() { return window.UNIT_5_DATA; },
        get unit6() { return window.UNIT_6_DATA; },
        get unit7() { return window.UNIT_7_DATA; },
        get unit8() { return window.UNIT_8_DATA; },
        get mid_year() { return window.MID_YEAR_DATA; },
        get end_of_year() { return window.END_OF_YEAR_DATA; }
      },
      getUnitsList() {
        return [
          { id: "unit1", number: 1, title: "Clothes & Appearance", icon: "👔", points: 35, desc: "Clothes, Patterns, Past Simple & Continuous, Reacting to news" },
          { id: "unit2", number: 2, title: "Jobs & Work", icon: "💼", points: 35, desc: "Jobs, Work collocations, Present Perfect & Past Simple, Workplace dialogues" },
          { id: "unit3", number: 3, title: "Experiences & Sports", icon: "🏅", points: 35, desc: "Sports equipment, Adjectives, Present Perfect with just/already/yet, Talking about experiences" },
          { id: "unit4", number: 4, title: "Books & Films", icon: "🎬", points: 35, desc: "Films & Books genres, Relative pronouns (who/which/where), Film reviews" },
          { id: "mid_year", number: "1–4", title: "Mid-Year Test", icon: "🎧", points: 50, desc: "Mid-Year exam: Vocabulary, Grammar, Audio Listening (Track 10), Reading, and Everyday Communication" },
          { id: "unit5", number: 5, title: "Music & Talent", icon: "🎵", points: 35, desc: "Musical instruments, Past ability (could/had to), Making suggestions" },
          { id: "unit6", number: 6, title: "Nature & Animals", icon: "🌿", points: 35, desc: "Nature, Animals, First Conditional, Asking for & giving advice" },
          { id: "unit7", number: 7, title: "Technology & Inventions", icon: "💡", points: 35, desc: "Technology, Passive voice (Present & Past), Giving instructions" },
          { id: "unit8", number: 8, title: "Feelings & Relationships", icon: "🤝", points: 35, desc: "Feelings, Relationships, Reported speech, Expressing feelings" },
          { id: "end_of_year", number: "1–8", title: "End-of-Year Test", icon: "🏆", points: 50, desc: "Final exam: Comprehensive Vocabulary, Grammar, Audio Listening (Track 11), Reading, and Communication" }
        ];
      }
    }
  },

  // Backward compatibility getters for active course unit access
  get unit1() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit1) || window.GG3_UNIT_1_DATA || window.UNIT_1_DATA;
  },
  get unit2() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit2) || window.GG3_UNIT_2_DATA || window.UNIT_2_DATA;
  },
  get unit3() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit3) || window.GG3_UNIT_3_DATA || window.UNIT_3_DATA;
  },
  get unit4() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit4) || window.GG3_UNIT_4_DATA || window.UNIT_4_DATA;
  },
  get unit5() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit5) || window.GG3_UNIT_5_DATA || window.UNIT_5_DATA;
  },
  get unit6() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit6) || window.GG3_UNIT_6_DATA || window.UNIT_6_DATA;
  },
  get unit7() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit7) || window.GG3_UNIT_7_DATA || window.UNIT_7_DATA;
  },
  get unit8() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter3;
    return (c.units && c.units.unit8) || window.GG3_UNIT_8_DATA || window.UNIT_8_DATA;
  },
  get mid_year() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter4;
    return (c.units && c.units.mid_year) || window.GG3_MID_YEAR_DATA || window.MID_YEAR_DATA;
  },
  get end_of_year() {
    const c = this.courses[this.currentCourse] || this.courses.gogetter4;
    return (c.units && c.units.end_of_year) || window.GG3_END_OF_YEAR_DATA || window.END_OF_YEAR_DATA;
  },

  get variantA() {
    const u = this[this.currentUnit] || this.unit1;
    return u.variantA;
  },

  get variantB() {
    const u = this[this.currentUnit] || this.unit1;
    return u.variantB;
  },

  getCourse(courseId) {
    return this.courses[courseId] || this.courses[this.currentCourse] || this.courses.gogetter3;
  },

  getTest(unitKey, variantKey, courseId) {
    const c = this.getCourse(courseId);
    const u = (c.units && c.units[unitKey]) || (this.courses.gogetter4.units && this.courses.gogetter4.units[unitKey]) || this[unitKey] || this.unit1;
    return u[variantKey] || u.variantA;
  },

  getUnitsList(courseId) {
    const c = this.getCourse(courseId);
    return c.getUnitsList();
  },

  getCoursesList() {
    return [
      { id: "gogetter3", name: "Go Getter 3", level: "A2", icon: "📘", title: "Go Getter 3", badge: "Level A2", desc: "Pre-Intermediate • 8 Units + 2 Exams (30–50 pts)" },
      { id: "gogetter4", name: "Go Getter 4", level: "A2+ / B1", icon: "📙", title: "Go Getter 4", badge: "Level A2+ / B1", desc: "Intermediate • 8 Units + 2 Exams (35–50 pts)" }
    ];
  }
};

window.TEST_DATA = TEST_DATA;
