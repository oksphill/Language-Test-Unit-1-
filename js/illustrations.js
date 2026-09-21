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
      </div>
    `;
  },

  /**
   * General helper to create responsive image illustration markup
   */
  getImageMarkup(src, alt, badge, sub) {
    return `
      <div class="illustration-container" role="img" aria-label="${alt}">
        <img src="${src}" alt="${alt}" class="test-illustration-img" loading="eager">
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
      // Go Getter 1 Illustrations
      case "gg1_u1_family_tree_a":
        return this.getImageMarkup("assets/images/gg1_u1_family_tree_a.png", "Family Tree - Variant A", "Family Tree", "Lulu & Bobo's Family");
      case "gg1_u1_family_tree_b":
        return this.getImageMarkup("assets/images/gg1_u1_family_tree_b.png", "Family Tree - Variant B", "Family Tree", "Mimi & Goopy's Family");
      case "gg1_u2_room_a":
        return this.getImageMarkup("assets/images/gg1_u2_room_a.png", "The Baileys' Living Room", "Living Room", "Look at items F, S, Z, D, J");
      case "gg1_u2_room_b":
        return this.getImageMarkup("assets/images/gg1_u2_room_b.png", "The Greys' Living Room", "Living Room", "Look at items U, D, T, L, R");
      case "gg1_u3_room_a":
        return this.getImageMarkup("assets/images/gg1_u3_room_a.png", "Room & Cats - Variant A", "House & Furniture", "Furniture 0–6 & Cats A–E");
      case "gg1_u3_room_b":
        return this.getImageMarkup("assets/images/gg1_u3_room_b.png", "Room & Cats - Variant B", "House & Furniture", "Furniture 0–6 & Cats A–E");
      case "gg1_u4_monsters_a":
        return this.getImageMarkup("assets/images/gg1_u4_monsters_a.png", "Monsters - Martha, Harold & Albert", "Monsters", "Look at body parts 0–6");
      case "gg1_u4_monsters_b":
        return this.getImageMarkup("assets/images/gg1_u4_monsters_b.png", "Monsters - Martha, Harold & Albert", "Monsters", "Look at body parts 0–6");
      case "gg1_u5_park_a":
        return this.getImageMarkup("assets/images/gg1_u5_park_a.png", "Park Scene - Variant A", "At the Park", "Look at activities 0–6");
      case "gg1_u5_park_b":
        return this.getImageMarkup("assets/images/gg1_u5_park_b.png", "Park Scene - Variant B", "At the Park", "Look at activities 0–6");
      case "gg1_u7_animals_a":
        return this.getImageMarkup("assets/images/gg1_u7_animals_a.png", "Animals - Variant A", "Animals", "Parrot, Frog, Monkey, Spider, Rabbit");
      case "gg1_u7_animals_b":
        return this.getImageMarkup("assets/images/gg1_u7_animals_b.png", "Animals - Variant B", "Animals", "Parrot, Monkey, Rabbit, Frog, Spider");
      case "gg1_u8_weather_a":
        return this.getImageMarkup("assets/images/gg1_u8_weather_a.png", "Weather in Spain", "Weather Symbols", "Icons 0–5");
      case "gg1_u8_weather_b":
        return this.getImageMarkup("assets/images/gg1_u8_weather_b.png", "Weather in Italy", "Weather Symbols", "Icons 0–5");
      case "gg1_mid_year_room":
        return this.getImageMarkup("assets/images/gg1_mid_year_room.png", "Mid-Year Test - Living Room", "Living Room", "Look at the picture to complete the text");
      case "gg1_mid_year_italy":
        return this.getImageMarkup("assets/images/gg1_mid_year_italy.png", "Rosanna in Italy", "Grandparents' House", "Read the text and answer the questions");
      case "gg1_eoy_monkey":
        return this.getImageMarkup("assets/images/gg1_eoy_monkey.png", "Spider Monkey", "Spider Monkey", "Read the text and answer the questions");
      default:
        return "";
    }
  }
};

if (typeof window !== "undefined") {
  window.Illustrations = Illustrations;
}
