/**
 * Go Getter 1 - Unit 6 Language Test
 * Daily Routines & Months / Present Simple & Telling the Time
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_6_DATA = {
  id: "unit6",
  courseId: "gogetter1",
  number: 6,
  title: "Daily Routine & Telling Time",
  description: "Vocabulary: Daily activities, days of the week, months of the year. Grammar: Present Simple (positive: he/she/it spelling rules), Adverbs of frequency. Communication: Telling the time.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 6",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 12,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 8,
            type: "word-bank",
            wordBank: ["dinner", "do", "get", "make", "out", "Saturdays", "shower", "to", "Wednesdays"],
            example: "On ⁰Mondays, Tuesdays...",
            usedInExample: ["Mondays"],
            sentences: [
              { textBefore: "On Mondays, Tuesdays, 1", gapId: "A_1_1", label: "1", textAfter: ", Thursdays and Fridays, I 2" },
              { textBefore: "up early and have a 3", gapId: "A_1_2", label: "2", textAfter: ". Then I have breakfast and I go to school. After school, I 4" },
              { textBefore: "my homework. In the evening, I have 5", gapId: "A_1_3", label: "3", textAfter: ". Then I watch TV or listen 6" },
              { textBefore: "music. I go to bed early. On 7", gapId: "A_1_4", label: "4", textAfter: "" },
              { textBefore: "and Sundays I hang 8", gapId: "A_1_5", label: "5", textAfter: "" },
              { textBefore: "with my friends.", gapId: "A_1_6", label: "6", textAfter: "" },
              { textBefore: "", gapId: "A_1_7", label: "7", textAfter: "" },
              { textBefore: "", gapId: "A_1_8", label: "8", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["Wednesdays"], explanation: "Day of week: Wednesdays." },
              "A_1_2": { expected: ["get"], explanation: "Get up early." },
              "A_1_3": { expected: ["shower"], explanation: "Have a shower." },
              "A_1_4": { expected: ["do"], explanation: "Do homework." },
              "A_1_5": { expected: ["dinner"], explanation: "Have dinner." },
              "A_1_6": { expected: ["to"], explanation: "Listen to music." },
              "A_1_7": { expected: ["Saturdays"], explanation: "On Saturdays and Sundays." },
              "A_1_8": { expected: ["out"], explanation: "Hang out with friends." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Write the missing months.",
            points: 4,
            type: "word-bank",
            example: "January -> ⁰February -> March",
            sentences: [
              { textBefore: "March -> 1", gapId: "A_2_1", label: "1", textAfter: "-> May -> 2" },
              { textBefore: "-> July -> 3", gapId: "A_2_2", label: "2", textAfter: "-> September -> October -> 4" },
              { textBefore: "-> December.", gapId: "A_2_3", label: "3", textAfter: "" },
              { textBefore: "", gapId: "A_2_4", label: "4", textAfter: "" }
            ],
            answers: {
              "A_2_1": { expected: ["April"], explanation: "Month: April." },
              "A_2_2": { expected: ["June"], explanation: "Month: June." },
              "A_2_3": { expected: ["August"], explanation: "Month: August." },
              "A_2_4": { expected: ["November"], explanation: "Month: November." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 13,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences. Use the Present Simple form of the verbs in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["climb", "dive", "draw", "play", "run", "write"],
            example: "0 We have great lessons at school.",
            usedInExample: ["have"],
            sentences: [
              { textBefore: "1 Sam", gapId: "A_3_1", label: "1", textAfter: "football after school." },
              { textBefore: "2 Her friends", gapId: "A_3_2", label: "2", textAfter: "great pictures." },
              { textBefore: "3 My sister", gapId: "A_3_3", label: "3", textAfter: "fast." },
              { textBefore: "4 You and your brother", gapId: "A_3_4", label: "4", textAfter: "stories." },
              { textBefore: "5 His cat", gapId: "A_3_5", label: "5", textAfter: "trees." }
            ],
            answers: {
              "A_3_1": { expected: ["plays"], explanation: "Sam (he) -> plays." },
              "A_3_2": { expected: ["draw"], explanation: "Her friends (they) -> draw." },
              "A_3_3": { expected: ["runs"], explanation: "My sister (she) -> runs." },
              "A_3_4": { expected: ["write"], explanation: "You and your brother (you plural) -> write." },
              "A_3_5": { expected: ["climbs"], explanation: "His cat (it) -> climbs." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write sentences. Change the subject from I to He / She.",
            points: 4,
            type: "sentence-order",
            example: "0 I do karate after school. -> He does karate after school.",
            items: [
              { id: "A_4_1", label: "1", prompt: "I have eggs for breakfast. -> She _______." },
              { id: "A_4_2", label: "2", prompt: "I tidy my bedroom every Saturday. -> He _______." },
              { id: "A_4_3", label: "3", prompt: "I watch TV in the evening. -> She _______." },
              { id: "A_4_4", label: "4", prompt: "I fix cars and bikes. -> He _______." }
            ],
            answers: {
              "A_4_1": { expected: ["She has eggs for breakfast.", "has eggs for breakfast"], explanation: "She has eggs for breakfast." },
              "A_4_2": { expected: ["He tidies his bedroom every Saturday.", "He tidies the bedroom every Saturday.", "tidies his bedroom every Saturday"], explanation: "He tidies his bedroom every Saturday." },
              "A_4_3": { expected: ["She watches TV in the evening.", "watches TV in the evening"], explanation: "She watches TV in the evening." },
              "A_4_4": { expected: ["He fixes cars and bikes.", "fixes cars and bikes"], explanation: "He fixes cars and bikes." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Make sentences. Add the correct adverb of frequency (always, usually, often, sometimes, never).",
            points: 4,
            type: "sentence-order",
            example: "0 I / my / bike / to / ride / school (**000) -> I often ride my bike to school.",
            items: [
              { id: "A_5_1", label: "1", prompt: "go / to / I / early / on / bed / Monday (****0)" },
              { id: "A_5_2", label: "2", prompt: "TV / I / in / watch / the evening (*0000)" },
              { id: "A_5_3", label: "3", prompt: "in / cook / breakfast / the morning / I (00000)" },
              { id: "A_5_4", label: "4", prompt: "read / in / I / a book / the evening (***00)" }
            ],
            answers: {
              "A_5_1": { expected: ["I always go to bed early on Monday."], explanation: "I always go to bed early on Monday." },
              "A_5_2": { expected: ["I sometimes watch TV in the evening."], explanation: "I sometimes watch TV in the evening." },
              "A_5_3": { expected: ["I never cook breakfast in the morning."], explanation: "I never cook breakfast in the morning." },
              "A_5_4": { expected: ["I usually read a book in the evening."], explanation: "I usually read a book in the evening." }
            }
          }
        ]
      },
      communication: {
        id: "communication",
        title: "Communication",
        maxScore: 5,
        tasks: [
          {
            id: "task_6",
            number: 6,
            title: "Look at the clocks and answer the questions.",
            points: 5,
            type: "sentence-order",
            example: "0 What time is the film? (06:10) -> It's at ten past six.",
            items: [
              { id: "A_6_1", label: "1", prompt: "What time is the match? (05:30)" },
              { id: "A_6_2", label: "2", prompt: "What time is our English lesson? (09:00)" },
              { id: "A_6_3", label: "3", prompt: "What time is breakfast? (07:55)" },
              { id: "A_6_4", label: "4", prompt: "What time is lunch? (12:45)" },
              { id: "A_6_5", label: "5", prompt: "What time is bedtime? (10:15)" }
            ],
            answers: {
              "A_6_1": { expected: ["It's at half past five.", "Half past five.", "At half past five."], explanation: "05:30 -> It's at half past five." },
              "A_6_2": { expected: ["It's at nine o'clock.", "Nine o'clock.", "At nine o'clock."], explanation: "09:00 -> It's at nine o'clock." },
              "A_6_3": { expected: ["It's at five to eight.", "Five to eight.", "At five to eight."], explanation: "07:55 -> It's at five to eight." },
              "A_6_4": { expected: ["It's at quarter to one.", "Quarter to one.", "At quarter to one."], explanation: "12:45 -> It's at quarter to one." },
              "A_6_5": { expected: ["It's at quarter past ten.", "Quarter past ten.", "At quarter past ten."], explanation: "10:15 -> It's at quarter past ten." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 6",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 12,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 8,
            type: "word-bank",
            wordBank: ["breakfast", "do", "in", "Saturdays", "shower", "Thursdays", "to", "up", "with"],
            example: "On ⁰Mondays, Tuesdays...",
            usedInExample: ["Mondays"],
            sentences: [
              { textBefore: "On Mondays, Tuesdays, Wednesdays, 1", gapId: "B_1_1", label: "1", textAfter: "and Fridays, I get 2" },
              { textBefore: "early and I have 3", gapId: "B_1_2", label: "2", textAfter: ". Then I go to school. After school, I 4" },
              { textBefore: "my homework. In the evening, I listen 5", gapId: "B_1_3", label: "3", textAfter: "music or watch TV. Then I have a 6" },
              { textBefore: ". I go to bed early. On 7", gapId: "B_1_4", label: "4", textAfter: "" },
              { textBefore: "and Sundays I hang out 8", gapId: "B_1_5", label: "5", textAfter: "" },
              { textBefore: "my friends.", gapId: "B_1_6", label: "6", textAfter: "" },
              { textBefore: "", gapId: "B_1_7", label: "7", textAfter: "" },
              { textBefore: "", gapId: "B_1_8", label: "8", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["Thursdays"], explanation: "Day of week: Thursdays." },
              "B_1_2": { expected: ["up"], explanation: "Get up early." },
              "B_1_3": { expected: ["breakfast"], explanation: "Have breakfast." },
              "B_1_4": { expected: ["do"], explanation: "Do homework." },
              "B_1_5": { expected: ["to"], explanation: "Listen to music." },
              "B_1_6": { expected: ["shower"], explanation: "Have a shower." },
              "B_1_7": { expected: ["Saturdays"], explanation: "On Saturdays and Sundays." },
              "B_1_8": { expected: ["with"], explanation: "Hang out with friends." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Write the missing months.",
            points: 4,
            type: "word-bank",
            example: "January -> ⁰February -> March",
            sentences: [
              { textBefore: "April -> 1", gapId: "B_2_1", label: "1", textAfter: "-> 2" },
              { textBefore: "-> 3", gapId: "B_2_2", label: "2", textAfter: "-> August -> September -> 4" },
              { textBefore: "-> November -> December.", gapId: "B_2_3", label: "3", textAfter: "" },
              { textBefore: "", gapId: "B_2_4", label: "4", textAfter: "" }
            ],
            answers: {
              "B_2_1": { expected: ["May"], explanation: "Month: May." },
              "B_2_2": { expected: ["June"], explanation: "Month: June." },
              "B_2_3": { expected: ["July"], explanation: "Month: July." },
              "B_2_4": { expected: ["October"], explanation: "Month: October." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 13,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences. Use the Present Simple form of the verbs in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["climb", "dive", "draw", "play", "run", "write"],
            example: "0 We have great lessons at school.",
            usedInExample: ["have"],
            sentences: [
              { textBefore: "1 You and your sister", gapId: "B_3_1", label: "1", textAfter: "great stories." },
              { textBefore: "2 Jack's friends", gapId: "B_3_2", label: "2", textAfter: "good pictures." },
              { textBefore: "3 Anna", gapId: "B_3_3", label: "3", textAfter: "tennis after school." },
              { textBefore: "4 My cat", gapId: "B_3_4", label: "4", textAfter: "trees." },
              { textBefore: "5 Her brother", gapId: "B_3_5", label: "5", textAfter: "fast." }
            ],
            answers: {
              "B_3_1": { expected: ["write"], explanation: "You and your sister (plural) -> write." },
              "B_3_2": { expected: ["draw"], explanation: "Friends (they) -> draw." },
              "B_3_3": { expected: ["plays"], explanation: "Anna (she) -> plays." },
              "B_3_4": { expected: ["climbs"], explanation: "Cat (it) -> climbs." },
              "B_3_5": { expected: ["runs"], explanation: "Brother (he) -> runs." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write sentences. Change the subject from I to He / She.",
            points: 4,
            type: "sentence-order",
            example: "0 I do karate after school. -> He does karate after school.",
            items: [
              { id: "B_4_1", label: "1", prompt: "I tidy the living room every Saturday. -> He _______." },
              { id: "B_4_2", label: "2", prompt: "I fix bikes and cars. -> She _______." },
              { id: "B_4_3", label: "3", prompt: "I have sandwiches for lunch. -> He _______." },
              { id: "B_4_4", label: "4", prompt: "I watch TV in the evening. -> She _______." }
            ],
            answers: {
              "B_4_1": { expected: ["He tidies the living room every Saturday.", "tidies the living room every Saturday"], explanation: "He tidies the living room every Saturday." },
              "B_4_2": { expected: ["She fixes bikes and cars.", "fixes bikes and cars"], explanation: "She fixes bikes and cars." },
              "B_4_3": { expected: ["He has sandwiches for lunch.", "has sandwiches for lunch"], explanation: "He has sandwiches for lunch." },
              "B_4_4": { expected: ["She watches TV in the evening.", "watches TV in the evening"], explanation: "She watches TV in the evening." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Make sentences. Add the correct adverb of frequency (always, usually, often, sometimes, never).",
            points: 4,
            type: "sentence-order",
            example: "0 I / my / bike / to / ride / school (**000) -> I often ride my bike to school.",
            items: [
              { id: "B_5_1", label: "1", prompt: "in / cook / dinner / the evening / I (00000)" },
              { id: "B_5_2", label: "2", prompt: "Sunday / go / to / I / late / on / bed (****0)" },
              { id: "B_5_3", label: "3", prompt: "in / read / I / a book / the evening (***00)" },
              { id: "B_5_4", label: "4", prompt: "after / TV / I / watch / school (*0000)" }
            ],
            answers: {
              "B_5_1": { expected: ["I never cook dinner in the evening."], explanation: "I never cook dinner in the evening." },
              "B_5_2": { expected: ["I always go to bed late on Sunday."], explanation: "I always go to bed late on Sunday." },
              "B_5_3": { expected: ["I usually read a book in the evening."], explanation: "I usually read a book in the evening." },
              "B_5_4": { expected: ["I sometimes watch TV after school."], explanation: "I sometimes watch TV after school." }
            }
          }
        ]
      },
      communication: {
        id: "communication",
        title: "Communication",
        maxScore: 5,
        tasks: [
          {
            id: "task_6",
            number: 6,
            title: "Look at the clocks and answer the questions.",
            points: 5,
            type: "sentence-order",
            example: "0 What time is the film? (06:10) -> It's at ten past six.",
            items: [
              { id: "B_6_1", label: "1", prompt: "What time is the match? (04:15)" },
              { id: "B_6_2", label: "2", prompt: "What time is bedtime? (11:30)" },
              { id: "B_6_3", label: "3", prompt: "What time is our French lesson? (09:55)" },
              { id: "B_6_4", label: "4", prompt: "What time is dinner? (05:45)" },
              { id: "B_6_5", label: "5", prompt: "What time is breakfast? (07:00)" }
            ],
            answers: {
              "B_6_1": { expected: ["It's at quarter past four.", "Quarter past four.", "At quarter past four."], explanation: "04:15 -> It's at quarter past four." },
              "B_6_2": { expected: ["It's at half past eleven.", "Half past eleven.", "At half past eleven."], explanation: "11:30 -> It's at half past eleven." },
              "B_6_3": { expected: ["It's at five to ten.", "Five to ten.", "At five to ten."], explanation: "09:55 -> It's at five to ten." },
              "B_6_4": { expected: ["It's at quarter to six.", "Quarter to six.", "At quarter to six."], explanation: "05:45 -> It's at quarter to six." },
              "B_6_5": { expected: ["It's at seven o'clock.", "Seven o'clock.", "At seven o'clock."], explanation: "07:00 -> It's at seven o'clock." }
            }
          }
        ]
      }
    }
  }
};
