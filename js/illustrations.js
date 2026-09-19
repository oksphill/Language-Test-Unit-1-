/**
 * Language Test Unit 1 - 3D Animated Illustrations for Tasks 1 & 2
 * High quality 3D Pixar/Disney style animated artwork for Mrs Cook, Mrs Smith, Gregory Cook, and Lee
 */

const Illustrations = {
  /**
   * Returns markup for Mrs Cook (Variant A, Task 1)
   */
  getMrsCookSvg() {
    return `
      <div class="illustration-container" role="img" aria-label="Illustration for Task 1: Mrs Cook and her accessories">
        <img src="assets/images/mrs_cook.jpg" alt="Mrs Cook and accessories in boutique" class="test-illustration-img" loading="eager">
        <div class="illustration-caption">
          <span class="caption-badge">Mrs Cook (Variant A)</span>
          <span class="caption-sub">✨ Accessories & Style</span>
        </div>
      </div>
    `;
  },

  /**
   * Returns markup for Mrs Smith (Variant B, Task 1)
   */
  getMrsSmithSvg() {
    return `
      <div class="illustration-container" role="img" aria-label="Illustration for Task 1: Mrs Smith and her accessories">
        <img src="assets/images/mrs_smith.jpg" alt="Mrs Smith and accessories in boutique" class="test-illustration-img" loading="eager">
        <div class="illustration-caption">
          <span class="caption-badge">Mrs Smith (Variant B)</span>
          <span class="caption-sub">✨ Accessories & Style</span>
        </div>
      </div>
    `;
  },

  /**
   * Returns markup for Gregory Cook (Variant A, Task 2)
   */
  getGregoryCookSvg() {
    return `
      <div class="illustration-container" role="img" aria-label="Illustration for Task 2: Gregory Cook at work vs casual">
        <img src="assets/images/gregory_cook.jpg" alt="Gregory Cook - Work clothes vs Casual style" class="test-illustration-img" loading="eager">
        <div class="illustration-caption">
          <span class="caption-badge">Gregory Cook (Variant A)</span>
          <span class="caption-sub">💼 Smart at work vs. 🏠 Casual at home</span>
        </div>
      </div>
    `;
  },

  /**
   * Returns markup for Lee (Variant B, Task 2)
   */
  getLeeSvg() {
    return `
      <div class="illustration-container" role="img" aria-label="Illustration for Task 2: Lee at work vs casual">
        <img src="assets/images/lee.jpg" alt="Lee - Work clothes vs Casual style" class="test-illustration-img" loading="eager">
        <div class="illustration-caption">
          <span class="caption-badge">Lee (Variant B)</span>
          <span class="caption-sub">👔 Smart at work vs. 🛹 Casual at home</span>
        </div>
      </div>
    `;
  },

  /**
   * Renders the corresponding illustration by key
   */
  renderIllustration(key) {
    switch (key) {
      case "mrs_cook":
        return this.getMrsCookSvg();
      case "mrs_smith":
        return this.getMrsSmithSvg();
      case "gregory_cook":
        return this.getGregoryCookSvg();
      case "lee":
        return this.getLeeSvg();
      default:
        return "";
    }
  }
};
