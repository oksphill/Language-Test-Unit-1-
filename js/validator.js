/**
 * Language Test Units 1-8 - Validator & Scoring Engine
 */

const Validator = {
  /**
   * Normalizes text by removing redundant punctuation, extra whitespace,
   * standardizing quotes, and lowercasing.
   */
  normalize(str) {
    if (!str || typeof str !== "string") return "";
    let clean = str
      .trim()
      .replace(/[\u2018\u2019\u0060\u00B4]/g, "'") // Normalize smart apostrophes
      .replace(/[\u201C\u201D]/g, '"')             // Normalize smart quotes
      .replace(/\s+/g, " ")                         // Collapse whitespace
      .toLowerCase();

    // Strip trailing punctuation like dot, comma or exclamation/question mark
    clean = clean.replace(/[.!?]+$/, "").trim();
    return clean;
  },

  /**
   * Generates alternative valid equivalents (contractions, spacings).
   */
  getEquivalents(text) {
    const base = this.normalize(text);
    const equivalents = new Set([base]);

    const contractionPairs = [
      ["did not", "didn't"],
      ["was not", "wasn't"],
      ["were not", "weren't"],
      ["do not", "don't"],
      ["does not", "doesn't"],
      ["is not", "isn't"],
      ["are not", "aren't"],
      ["cannot", "can't"],
      ["can not", "can't"],
      ["will not", "won't"],
      ["have not", "haven't"],
      ["has not", "hasn't"],
      ["could not", "couldn't"],
      ["must not", "mustn't"],
      ["i am", "i'm"],
      ["we are", "we're"],
      ["they are", "they're"],
      ["you are", "you're"],
      ["it is", "it's"],
      ["he is", "he's"],
      ["she is", "she's"],
      ["i will", "i'll"],
      ["we will", "we'll"],
      ["they will", "they'll"],
      ["he will", "he'll"],
      ["she will", "she'll"],
      ["it will", "it'll"],
      ["i have", "i've"],
      ["we have", "we've"],
      ["they have", "they've"]
    ];

    contractionPairs.forEach(([full, short]) => {
      if (base.includes(full)) {
        equivalents.add(base.replace(new RegExp(full, "g"), short));
      }
      if (base.includes(short)) {
        equivalents.add(base.replace(new RegExp(short, "g"), full));
      }
    });

    return Array.from(equivalents);
  },

  /**
   * Evaluates a student answer against a list of expected answers.
   */
  checkAnswer(userAnswer, expectedList) {
    if (!userAnswer || typeof userAnswer !== "string") return false;
    const userEquivalents = this.getEquivalents(userAnswer);

    for (const exp of expectedList) {
      const expEquivalents = this.getEquivalents(exp);
      for (const uEq of userEquivalents) {
        if (expEquivalents.includes(uEq)) {
          return true;
        }
      }
    }
    return false;
  },

  /**
   * Evaluates all student answers for a given variant and computes scores.
   * @param {string} variantKey - 'variantA' or 'variantB'
   * @param {Object} userAnswers - Key-value map of question ID to user input
   * @param {string} [unitKey] - Optional unit key like 'unit1', 'unit2', ...
   * @param {string} [courseId] - Optional course id like 'gogetter3' or 'gogetter4'
   */
  evaluateTest(variantKey, userAnswers = {}, unitKey = null, courseId = null) {
    const activeCourse = courseId || (window.TEST_DATA && window.TEST_DATA.currentCourse ? window.TEST_DATA.currentCourse : "gogetter3");
    const activeUnit = unitKey || (window.TEST_DATA && window.TEST_DATA.currentUnit ? window.TEST_DATA.currentUnit : "unit1");
    let variant;
    if (window.TEST_DATA && window.TEST_DATA.getTest) {
      variant = window.TEST_DATA.getTest(activeUnit, variantKey, activeCourse);
    } else if (window.TEST_DATA && window.TEST_DATA[activeUnit] && window.TEST_DATA[activeUnit][variantKey]) {
      variant = window.TEST_DATA[activeUnit][variantKey];
    } else if (window.TEST_DATA && window.TEST_DATA[variantKey]) {
      variant = window.TEST_DATA[variantKey];
    }

    if (!variant) throw new Error("Invalid test variant: " + activeUnit + " / " + variantKey);

    const results = {
      courseId: activeCourse,
      unitKey: activeUnit,
      variantKey,
      variantTitle: variant.title,
      totalMax: variant.totalPoints,
      totalScore: 0,
      totalAnswered: 0,
      totalQuestions: 0,
      sections: {},
      tasks: {},
      questions: {},
      mistakes: []
    };

    // Iterate through sections (vocabulary, grammar, communication)
    for (const [sectionKey, section] of Object.entries(variant.sections)) {
      results.sections[sectionKey] = {
        title: section.title,
        maxScore: section.maxScore,
        score: 0
      };

      for (const task of section.tasks) {
        results.tasks[task.id] = {
          taskNumber: task.number,
          title: task.title,
          maxScore: task.points,
          score: 0,
          totalQuestions: Object.keys(task.answers).length
        };

        for (const [qId, ansObj] of Object.entries(task.answers)) {
          results.totalQuestions++;
          const userVal = (userAnswers[qId] || "").trim();
          const hasAnswered = userVal.length > 0;
          if (hasAnswered) results.totalAnswered++;

          const isCorrect = this.checkAnswer(userVal, ansObj.expected);
          const pointsEarned = isCorrect ? 1 : 0;

          results.sections[sectionKey].score += pointsEarned;
          results.tasks[task.id].score += pointsEarned;
          results.totalScore += pointsEarned;

          const questionResult = {
            id: qId,
            taskId: task.id,
            taskNumber: task.number,
            sectionKey,
            userAnswer: userVal,
            expected: ansObj.expected[0],
            allExpected: ansObj.expected,
            isCorrect,
            explanation: ansObj.explanation
          };

          results.questions[qId] = questionResult;

          if (!isCorrect) {
            results.mistakes.push(questionResult);
          }
        }
      }
    }

    results.percentage = Math.round((results.totalScore / results.totalMax) * 100);
    results.gradeTier = this.getGradeTier(results.percentage);

    return results;
  },

  /**
   * Returns a friendly motivational status and badge based on percentage.
   */
  getGradeTier(percentage) {
    if (percentage >= 90) {
      return {
        badge: "Outstanding! 🌟",
        title: "English Champion!",
        message: "Fantastic achievement! You mastered this unit brilliantly!",
        color: "emerald"
      };
    } else if (percentage >= 75) {
      return {
        badge: "Great Job! 🎉",
        title: "Well Done!",
        message: "You have a solid understanding of this unit. Keep up the high standard!",
        color: "indigo"
      };
    } else if (percentage >= 60) {
      return {
        badge: "Good Effort! 👍",
        title: "Nice Progress!",
        message: "Good work! Review your mistakes to get even closer to top marks.",
        color: "amber"
      };
    } else if (percentage >= 40) {
      return {
        badge: "Keep Practicing! 💪",
        title: "Getting There!",
        message: "Check the explanations below and give it another try soon.",
        color: "orange"
      };
    } else {
      return {
        badge: "Don't Give Up! 🌱",
        title: "Keep Learning!",
        message: "Read through the grammar notes and vocabulary to boost your score.",
        color: "rose"
      };
    }
  }
};

window.Validator = Validator;
