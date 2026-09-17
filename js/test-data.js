/**
 * Language Tests 1-8 - Central Test Data Aggregator
 * Based on Pearson Education Limited 2019 Photocopiable Test Sheets
 */

const TEST_DATA = {
  currentUnit: "unit1",

  get unit1() { return window.UNIT_1_DATA; },
  get unit2() { return window.UNIT_2_DATA; },
  get unit3() { return window.UNIT_3_DATA; },
  get unit4() { return window.UNIT_4_DATA; },
  get unit5() { return window.UNIT_5_DATA; },
  get unit6() { return window.UNIT_6_DATA; },
  get unit7() { return window.UNIT_7_DATA; },
  get unit8() { return window.UNIT_8_DATA; },

  get variantA() {
    const u = this[this.currentUnit] || this.unit1;
    return u.variantA;
  },

  get variantB() {
    const u = this[this.currentUnit] || this.unit1;
    return u.variantB;
  },

  getTest(unitKey, variantKey) {
    const u = this[unitKey] || this[this.currentUnit] || this.unit1;
    return u[variantKey] || u.variantA;
  },

  getUnitsList() {
    return [
      { id: "unit1", number: 1, title: "Clothes & Appearance", icon: "👔", points: 35 },
      { id: "unit2", number: 2, title: "Jobs & Work", icon: "💼", points: 35 },
      { id: "unit3", number: 3, title: "Experiences & Sports", icon: "🏅", points: 35 },
      { id: "unit4", number: 4, title: "Books & Films", icon: "🎬", points: 35 },
      { id: "unit5", number: 5, title: "Music & Talent", icon: "🎵", points: 35 },
      { id: "unit6", number: 6, title: "Nature & Animals", icon: "🌿", points: 35 },
      { id: "unit7", number: 7, title: "Technology & Inventions", icon: "💡", points: 35 },
      { id: "unit8", number: 8, title: "Feelings & Relationships", icon: "🤝", points: 35 }
    ];
  }
};

window.TEST_DATA = TEST_DATA;
