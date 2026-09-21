/**
 * Go Getter 1 - Unit 5 Language Test
 * Action Verbs & Can / Can't
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_5_DATA = {
  id: "unit5",
  courseId: "gogetter1",
  number: 5,
  title: "Abilities & Free Time",
  description: "Vocabulary: Action verbs, outdoor activities. Grammar: Can / can't for ability (all forms), Questions and short answers. Communication: Making suggestions and agreeing / disagreeing.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 5",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 11,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Look at the picture and complete the text.",
            points: 6,
            type: "letter-hint",
            imageKey: "gg1_u5_park_a",
            example: "Those birds can ⁰fly (f l y).",
            items: [
              { id: "A_1_1", label: "1", textBefore: "and these birds can", displayHint: "s _ _ _", prefix: "s", textAfter: "." },
              { id: "A_1_2", label: "2", textBefore: "The cat can", displayHint: "c _ _ _ _", prefix: "c", textAfter: "the tree." },
              { id: "A_1_3", label: "3", textBefore: "The children can", displayHint: "s _ _ _", prefix: "s", textAfter: "." },
              { id: "A_1_4", label: "4", textBefore: "The girl can", displayHint: "d _ _ _", prefix: "d", textAfter: "." },
              { id: "A_1_5", label: "5", textBefore: "The man can", displayHint: "c _ _ _", prefix: "c", textAfter: "well." },
              { id: "A_1_6", label: "6", textBefore: "The girl can", displayHint: "j _ _ _", prefix: "j", textAfter: "." }
            ],
            answers: {
              "A_1_1": { expected: ["sing"], explanation: "Birds can sing." },
              "A_1_2": { expected: ["climb"], explanation: "Cats can climb trees." },
              "A_1_3": { expected: ["swim"], explanation: "Children can swim." },
              "A_1_4": { expected: ["dive"], explanation: "Diving into water." },
              "A_1_5": { expected: ["cook"], explanation: "The man can cook." },
              "A_1_6": { expected: ["jump"], explanation: "Jumping over the rope." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["draw", "fix", "play", "play", "read", "ride"],
            example: "Dad can't ⁰make cupcakes.",
            usedInExample: ["make"],
            sentences: [
              { textBefore: "Dad can't make cupcakes but he can 1", gapId: "A_2_1", label: "1", textAfter: "cars and bikes." },
              { textBefore: "Mum can 2", gapId: "A_2_2", label: "2", textAfter: "great pictures and she can 3" },
              { textBefore: "the guitar. I can't 4", gapId: "A_2_3", label: "3", textAfter: "" },
              { textBefore: "a horse but I can 5", gapId: "A_2_4", label: "4", textAfter: "" },
              { textBefore: "football.", gapId: "A_2_5", label: "5", textAfter: "" }
            ],
            answers: {
              "A_2_1": { expected: ["fix"], explanation: "Fix cars and bikes." },
              "A_2_2": { expected: ["draw"], explanation: "Draw pictures." },
              "A_2_3": { expected: ["play"], explanation: "Play the guitar." },
              "A_2_4": { expected: ["ride"], explanation: "Ride a horse." },
              "A_2_5": { expected: ["play"], explanation: "Play football." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 14,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Write sentences with can and can't.",
            points: 4,
            type: "sentence-order",
            example: "0 flamingoes / fly -> Flamingoes can fly.",
            items: [
              { id: "A_3_1", label: "1", prompt: "elephants / jump" },
              { id: "A_3_2", label: "2", prompt: "cats / sing songs" },
              { id: "A_3_3", label: "3", prompt: "zebras / run fast" },
              { id: "A_3_4", label: "4", prompt: "dogs / climb trees" }
            ],
            answers: {
              "A_3_1": { expected: ["Elephants can't jump.", "Elephants cannot jump."], explanation: "Elephants can't jump." },
              "A_3_2": { expected: ["Cats can't sing songs.", "Cats cannot sing songs."], explanation: "Cats can't sing songs." },
              "A_3_3": { expected: ["Zebras can run fast."], explanation: "Zebras can run fast." },
              "A_3_4": { expected: ["Dogs can't climb trees.", "Dogs cannot climb trees."], explanation: "Dogs can't climb trees." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write questions.",
            points: 4,
            type: "sentence-order",
            example: "0 camera / fix / you / can / this / ? -> Can you fix this camera?",
            items: [
              { id: "A_4_1", label: "1", prompt: "here / Freddie / skateboard / can / ?" },
              { id: "A_4_2", label: "2", prompt: "tennis / Marcus / can / play / ?" },
              { id: "A_4_3", label: "3", prompt: "Dave / cook / can / what / ?" },
              { id: "A_4_4", label: "4", prompt: "two / Amy / can / boats / see / ?" }
            ],
            answers: {
              "A_4_1": { expected: ["Can Freddie skateboard here?"], explanation: "Can + subject + verb + place: Can Freddie skateboard here?" },
              "A_4_2": { expected: ["Can Marcus play tennis?"], explanation: "Can + subject + verb + object: Can Marcus play tennis?" },
              "A_4_3": { expected: ["What can Dave cook?"], explanation: "Wh-word + can + subject + verb: What can Dave cook?" },
              "A_4_4": { expected: ["Can Amy see two boats?"], explanation: "Can + subject + verb + object: Can Amy see two boats?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue. Use can, can't, what, she.",
            points: 6,
            type: "word-bank",
            example: "A: I ⁰can't make pizzas.",
            sentences: [
              { textBefore: "A: 1", gapId: "A_5_1", label: "1", textAfter: "you help me?<br>B: No, I 2" },
              { textBefore: ". I'm sorry.<br>A: 3", gapId: "A_5_2", label: "2", textAfter: "" },
              { textBefore: "your little sister draw?<br>B: Yes, 4", gapId: "A_5_3", label: "3", textAfter: "" },
              { textBefore: "5", gapId: "A_5_4", label: "4", textAfter: "" },
              { textBefore: ", but she can't write well.<br>A: 6", gapId: "A_5_5", label: "5", textAfter: "" },
              { textBefore: "can your parents play?<br>B: They can play golf.", gapId: "A_5_6", label: "6", textAfter: "" }
            ],
            answers: {
              "A_5_1": { expected: ["Can", "can"], explanation: "Can you help me?" },
              "A_5_2": { expected: ["can't", "cannot"], explanation: "No, I can't." },
              "A_5_3": { expected: ["Can", "can"], explanation: "Can your little sister draw?" },
              "A_5_4": { expected: ["she"], explanation: "Subject pronoun: she." },
              "A_5_5": { expected: ["can"], explanation: "Yes, she can." },
              "A_5_6": { expected: ["What", "what"], explanation: "What can your parents play?" }
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
            title: "Complete the dialogue. Use one word in each gap.",
            points: 5,
            type: "letter-hint",
            example: "A: Let's ⁰do something fun!",
            items: [
              { id: "A_6_1", label: "1", textBefore: "B: I", displayHint: "a _ _ _ _", prefix: "a", textAfter: ". Any ideas?" },
              { id: "A_6_2", label: "2", textBefore: "A: Let's go", displayHint: "s _ _ _ _ _ _ _", prefix: "s", textAfter: "!" },
              { id: "A_6_3", label: "3", textBefore: "B: It's not a good", displayHint: "i _ _ _", prefix: "i", textAfter: ". I can't swim." },
              { id: "A_6_4", label: "4", textBefore: "A: We", displayHint: "c _ _", prefix: "c", textAfter: "go to the park." },
              { id: "A_6_5", label: "5", textBefore: "B: Yes, let's do", displayHint: "t _ _ _", prefix: "t", textAfter: "!" }
            ],
            answers: {
              "A_6_1": { expected: ["agree"], explanation: "I agree." },
              "A_6_2": { expected: ["swimming"], explanation: "Let's go swimming." },
              "A_6_3": { expected: ["idea"], explanation: "It's not a good idea." },
              "A_6_4": { expected: ["can"], explanation: "We can go to the park." },
              "A_6_5": { expected: ["that"], explanation: "Let's do that!" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 5",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 11,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Look at the picture and complete the text.",
            points: 6,
            type: "letter-hint",
            imageKey: "gg1_u5_park_b",
            example: "The birds can ⁰fly (f l y).",
            items: [
              { id: "B_1_1", label: "1", textBefore: "The children can", displayHint: "s _ _ _", prefix: "s", textAfter: "." },
              { id: "B_1_2", label: "2", textBefore: "This girl can", displayHint: "d _ _ _", prefix: "d", textAfter: "" },
              { id: "B_1_3", label: "3", textBefore: "and that girl can", displayHint: "j _ _ _", prefix: "j", textAfter: "." },
              { id: "B_1_4", label: "4", textBefore: "The cat can", displayHint: "c _ _ _ _", prefix: "c", textAfter: "the tree." },
              { id: "B_1_5", label: "5", textBefore: "The boys can", displayHint: "s _ _ _ _ _ _ _ _ _", prefix: "s", textAfter: "." },
              { id: "B_1_6", label: "6", textBefore: "Those birds can", displayHint: "s _ _ _", prefix: "s", textAfter: "." }
            ],
            answers: {
              "B_1_1": { expected: ["swim"], explanation: "Children can swim." },
              "B_1_2": { expected: ["dive"], explanation: "Diving into water." },
              "B_1_3": { expected: ["jump"], explanation: "Jumping over the rope." },
              "B_1_4": { expected: ["climb"], explanation: "Climb the tree." },
              "B_1_5": { expected: ["skateboard", "skate"], explanation: "Boys can skateboard." },
              "B_1_6": { expected: ["sing"], explanation: "Birds can sing." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["draw", "fix", "play", "play", "read", "ride"],
            example: "Dad can't ⁰make cupcakes.",
            usedInExample: ["make"],
            sentences: [
              { textBefore: "Dad can't make cupcakes but he can 1", gapId: "B_2_1", label: "1", textAfter: "great pictures." },
              { textBefore: "Mum can't 2", gapId: "B_2_2", label: "2", textAfter: "computers but she can 3" },
              { textBefore: "the piano. I can't 4", gapId: "B_2_3", label: "3", textAfter: "" },
              { textBefore: "a bike but I can 5", gapId: "B_2_4", label: "4", textAfter: "" },
              { textBefore: "tennis.", gapId: "B_2_5", label: "5", textAfter: "" }
            ],
            answers: {
              "B_2_1": { expected: ["draw"], explanation: "Draw great pictures." },
              "B_2_2": { expected: ["fix"], explanation: "Fix computers." },
              "B_2_3": { expected: ["play"], explanation: "Play the piano." },
              "B_2_4": { expected: ["ride"], explanation: "Ride a bike." },
              "B_2_5": { expected: ["play"], explanation: "Play tennis." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 14,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Write sentences with can and can't.",
            points: 4,
            type: "sentence-order",
            example: "0 flamingoes / fly -> Flamingoes can fly.",
            items: [
              { id: "B_3_1", label: "1", prompt: "cats / climb trees" },
              { id: "B_3_2", label: "2", prompt: "elephants / dive" },
              { id: "B_3_3", label: "3", prompt: "dogs / sing songs" },
              { id: "B_3_4", label: "4", prompt: "zebras / run fast" }
            ],
            answers: {
              "B_3_1": { expected: ["Cats can climb trees."], explanation: "Cats can climb trees." },
              "B_3_2": { expected: ["Elephants can't dive.", "Elephants cannot dive."], explanation: "Elephants can't dive." },
              "B_3_3": { expected: ["Dogs can't sing songs.", "Dogs cannot sing songs."], explanation: "Dogs can't sing songs." },
              "B_3_4": { expected: ["Zebras can run fast."], explanation: "Zebras can run fast." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write questions.",
            points: 4,
            type: "sentence-order",
            example: "0 camera / fix / you / can / this / ? -> Can you fix this camera?",
            items: [
              { id: "B_4_1", label: "1", prompt: "play / Freddie / tennis / can / ?" },
              { id: "B_4_2", label: "2", prompt: "write / Marcus / what / can / ?" },
              { id: "B_4_3", label: "3", prompt: "posters / Sam / can / make / ?" },
              { id: "B_4_4", label: "4", prompt: "Barbara / Evan / play / can / and / football?" }
            ],
            answers: {
              "B_4_1": { expected: ["Can Freddie play tennis?"], explanation: "Can + subject + verb + object: Can Freddie play tennis?" },
              "B_4_2": { expected: ["What can Marcus write?"], explanation: "Wh-word + can + subject + verb: What can Marcus write?" },
              "B_4_3": { expected: ["Can Sam make posters?"], explanation: "Can + subject + verb + object: Can Sam make posters?" },
              "B_4_4": { expected: ["Can Barbara and Evan play football?", "Can Evan and Barbara play football?"], explanation: "Can Barbara and Evan play football?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue. Use can, can't, what, he.",
            points: 6,
            type: "word-bank",
            example: "A: I ⁰can't make cupcakes.",
            sentences: [
              { textBefore: "A: 1", gapId: "B_5_1", label: "1", textAfter: "you and Henry help me?<br>B: No, we 2" },
              { textBefore: ". Sorry.<br>A: 3", gapId: "B_5_2", label: "2", textAfter: "" },
              { textBefore: "can your friends play?<br>B: They can play tennis.<br>A: 4", gapId: "B_5_3", label: "3", textAfter: "" },
              { textBefore: "your little brother draw?<br>B: Yes, 5", gapId: "B_5_4", label: "4", textAfter: "" },
              { textBefore: "6", gapId: "B_5_5", label: "5", textAfter: "" },
              { textBefore: ", but he can't write well.", gapId: "B_5_6", label: "6", textAfter: "" }
            ],
            answers: {
              "B_5_1": { expected: ["Can", "can"], explanation: "Can you and Henry help me?" },
              "B_5_2": { expected: ["can't", "cannot"], explanation: "No, we can't." },
              "B_5_3": { expected: ["What", "what"], explanation: "What can your friends play?" },
              "B_5_4": { expected: ["Can", "can"], explanation: "Can your little brother draw?" },
              "B_5_5": { expected: ["he"], explanation: "Subject pronoun: he." },
              "B_5_6": { expected: ["can"], explanation: "Yes, he can." }
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
            title: "Complete the dialogue. Use one word in each gap.",
            points: 5,
            type: "letter-hint",
            example: "A: Let's ⁰do something fun!",
            items: [
              { id: "B_6_1", label: "1", textBefore: "B: I agree.", displayHint: "A _ _", prefix: "A", textAfter: "ideas?" },
              { id: "B_6_2", label: "2", textBefore: "A: Let's go", displayHint: "s _ _ _ _ _ _ _ _ _ _ _", prefix: "s", textAfter: "!" },
              { id: "B_6_3", label: "3", textBefore: "B: It's not a good", displayHint: "i _ _ _", prefix: "i", textAfter: ". I can't skateboard." },
              { id: "B_6_4", label: "4", textBefore: "A: We", displayHint: "c _ _", prefix: "c", textAfter: "go to the zoo." },
              { id: "B_6_5", label: "5", textBefore: "B: Yes, let's", displayHint: "d _", prefix: "d", textAfter: "that!" }
            ],
            answers: {
              "B_6_1": { expected: ["Any", "any"], explanation: "Any ideas?" },
              "B_6_2": { expected: ["skateboarding"], explanation: "Let's go skateboarding!" },
              "B_6_3": { expected: ["idea"], explanation: "It's not a good idea." },
              "B_6_4": { expected: ["can"], explanation: "We can go to the zoo." },
              "B_6_5": { expected: ["do"], explanation: "Let's do that!" }
            }
          }
        ]
      }
    }
  }
};
