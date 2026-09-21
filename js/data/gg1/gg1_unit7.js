/**
 * Go Getter 1 - Unit 7 Language Test
 * Animals & Pets / Present Simple Negative, Questions & Buying Tickets
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_7_DATA = {
  id: "unit7",
  courseId: "gogetter1",
  number: 7,
  title: "Animals & Pets",
  description: "Vocabulary: Wild animals, pets, animal characteristics. Grammar: Present Simple (negatives: don't / doesn't), Questions (Do / Does) and question words (What / When / Where). Communication: Buying tickets.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 7",
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
            wordBank: ["crocodiles", "cute", "dangerous", "flies", "lions", "slow", "snakes", "tortoises", "ugly"],
            example: "Elephants are big and ⁰strong.",
            usedInExample: ["strong"],
            sentences: [
              { textBefore: "1", gapId: "A_1_1", label: "1", textAfter: "have got four legs, a big and long mouth and a lot of big teeth. They're 2" },
              { textBefore: ".<br>3", gapId: "A_1_2", label: "2", textAfter: "" },
              { textBefore: "have got four legs. They can't run. They're 4", gapId: "A_1_3", label: "3", textAfter: "" },
              { textBefore: ".<br>5", gapId: "A_1_4", label: "4", textAfter: "" },
              { textBefore: "have got six legs, two wings and big eyes. They're 6", gapId: "A_1_5", label: "5", textAfter: "" },
              { textBefore: ".<br>Baby 7", gapId: "A_1_6", label: "6", textAfter: "" },
              { textBefore: "are 8", gapId: "A_1_7", label: "7", textAfter: "" },
              { textBefore: ". They've got yellow eyes and big feet.", gapId: "A_1_8", label: "8", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["Crocodiles", "crocodiles"], explanation: "Crocodiles have four legs and sharp teeth." },
              "A_1_2": { expected: ["dangerous"], explanation: "They're dangerous." },
              "A_1_3": { expected: ["Tortoises", "tortoises"], explanation: "Tortoises have four legs and can't run." },
              "A_1_4": { expected: ["slow"], explanation: "They're slow." },
              "A_1_5": { expected: ["Flies", "flies"], explanation: "Flies have six legs and two wings." },
              "A_1_6": { expected: ["ugly"], explanation: "Flies are ugly." },
              "A_1_7": { expected: ["lions"], explanation: "Baby lions." },
              "A_1_8": { expected: ["cute"], explanation: "Baby lions are cute." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the sentences with the names of the animals.",
            points: 4,
            type: "word-bank",
            imageKey: "gg1_u7_animals_a",
            example: "0 It can fly but it can't talk. It's a parrot.",
            sentences: [
              { textBefore: "1 It can swim and jump. It's a", gapId: "A_2_1", label: "1", textAfter: "." },
              { textBefore: "2 It can climb trees and it's got four legs. It's a", gapId: "A_2_2", label: "2", textAfter: "." },
              { textBefore: "3 It's got eight legs. It's small but it can run fast. It's a", gapId: "A_2_3", label: "3", textAfter: "." },
              { textBefore: "4 It's a good pet and it's got long ears. It's a", gapId: "A_2_4", label: "4", textAfter: "." }
            ],
            answers: {
              "A_2_1": { expected: ["frog"], explanation: "A frog can swim and jump." },
              "A_2_2": { expected: ["monkey"], explanation: "A monkey can climb trees." },
              "A_2_3": { expected: ["spider"], explanation: "A spider has eight legs." },
              "A_2_4": { expected: ["rabbit"], explanation: "A rabbit has long ears." }
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
            title: "Complete the sentences with the negative form of the Present Simple.",
            points: 4,
            type: "grammar-gap",
            example: "0 I don't like snakes and spiders. (like)",
            items: [
              { id: "A_3_1", label: "1", textBefore: "Small dogs", verb: "eat", textAfter: "a lot." },
              { id: "A_3_2", label: "2", textBefore: "Diana", verb: "go", textAfter: "to school. She's nineteen years old." },
              { id: "A_3_3", label: "3", textBefore: "Jake", verb: "do", textAfter: "his homework on Saturdays. He does it on Sundays." },
              { id: "A_3_4", label: "4", textBefore: "Linda and Gordon", verb: "watch", textAfter: "TV in the evening." }
            ],
            answers: {
              "A_3_1": { expected: ["don't eat", "do not eat"], explanation: "Plural: don't eat." },
              "A_3_2": { expected: ["doesn't go", "does not go"], explanation: "Diana (she): doesn't go." },
              "A_3_3": { expected: ["doesn't do", "does not do"], explanation: "Jake (he): doesn't do." },
              "A_3_4": { expected: ["don't watch", "do not watch"], explanation: "Linda and Gordon (they): don't watch." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write the questions.",
            points: 4,
            type: "sentence-order",
            example: "0 A: Do you want a dog? B: Yes, I want a dog. / 0 A: What do you like? B: I like animals.",
            items: [
              { id: "A_4_1", label: "1", prompt: "A: _______ early in the morning? B: No, my sister doesn't get up early in the morning." },
              { id: "A_4_2", label: "2", prompt: "A: _______ in the afternoon? B: Yes, the children have lessons in the afternoon." },
              { id: "A_4_3", label: "3", prompt: "A: _______ in the evening? B: I watch TV in the evening." },
              { id: "A_4_4", label: "4", prompt: "A: What _______ draw? B: He draws pictures of animals." }
            ],
            answers: {
              "A_4_1": { expected: ["Does your sister get up early in the morning?", "Does your sister get up", "Does she get up early in the morning?"], explanation: "Does your sister get up early in the morning?" },
              "A_4_2": { expected: ["Do the children have lessons in the afternoon?", "Do the children have lessons"], explanation: "Do the children have lessons in the afternoon?" },
              "A_4_3": { expected: ["What do you do in the evening?", "What do you do"], explanation: "What do you do in the evening?" },
              "A_4_4": { expected: ["does he draw", "does he"], explanation: "What does he draw?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the correct form of the Present Simple.",
            points: 5,
            type: "grammar-gap",
            example: "Kim: ⁰Do you get up (you / get up) early?",
            items: [
              { id: "A_5_1", label: "1", textBefore: "Gerry: Yes, I", verb: "get up", textAfter: "and I make breakfast for the family." },
              { id: "A_5_2", label: "2", textBefore: "Gerry: Martha", verb: "not cook", textAfter: "but she helps Dad in the garden." },
              { id: "A_5_3", label: "3", textBefore: "I", verb: "not help", textAfter: "Dad but I help Mum in the house." },
              { id: "A_5_4", label: "4", textBefore: "Kim: What", verb: "you / do", textAfter: "to relax?" },
              { id: "A_5_5", label: "5", textBefore: "Kim:", verb: "Martha / play", textAfter: "tennis too?<br>Martha: No, she doesn't. She plays football." }
            ],
            answers: {
              "A_5_1": { expected: ["get up"], explanation: "I get up." },
              "A_5_2": { expected: ["doesn't cook", "does not cook"], explanation: "Martha (she): doesn't cook." },
              "A_5_3": { expected: ["don't help", "do not help"], explanation: "I: don't help." },
              "A_5_4": { expected: ["do you do"], explanation: "What do you do?" },
              "A_5_5": { expected: ["Does Martha play", "does Martha play"], explanation: "Does Martha play tennis too?" }
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
            title: "Circle the correct answers.",
            points: 5,
            type: "circle-choice",
            example: "A: ⁰Get / Got your ticket, Petra. (Get)",
            items: [
              { id: "A_6_1", label: "1", before: "B:", after: "I help you?", options: ["Do", "Can"] },
              { id: "A_6_2", label: "2", before: "C: Can I", after: "one ticket to the museum, please?", options: ["have", "take"] },
              { id: "A_6_3", label: "3", before: "B:", after: "four pounds, please.", options: ["They're", "That's"] },
              { id: "A_6_4", label: "4", before: "C: Here", after: "are.", options: ["we", "you"] },
              { id: "A_6_5", label: "5", before: "B: And", after: "your ticket. C: Thanks.", options: ["here's", "it's"] }
            ],
            answers: {
              "A_6_1": { expected: ["Can"], explanation: "Can I help you?" },
              "A_6_2": { expected: ["have"], explanation: "Can I have one ticket...?" },
              "A_6_3": { expected: ["That's"], explanation: "That's four pounds, please." },
              "A_6_4": { expected: ["you"], explanation: "Here you are." },
              "A_6_5": { expected: ["here's"], explanation: "And here's your ticket." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 7",
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
            wordBank: ["crocodiles", "cute", "dangerous", "flies", "lions", "slow", "snakes", "tortoises", "ugly"],
            example: "Elephants are big and ⁰strong.",
            usedInExample: ["strong"],
            sentences: [
              { textBefore: "1", gapId: "B_1_1", label: "1", textAfter: "can walk but they can't run. They're 2" },
              { textBefore: ".<br>3", gapId: "B_1_2", label: "2", textAfter: "" },
              { textBefore: "have got four legs, a big and long mouth and a lot of big teeth. They're 4", gapId: "B_1_3", label: "3", textAfter: "" },
              { textBefore: ".<br>Baby 5", gapId: "B_1_4", label: "4", textAfter: "" },
              { textBefore: "have got yellow eyes and big feet. They're 6", gapId: "B_1_5", label: "5", textAfter: "" },
              { textBefore: ".<br>7", gapId: "B_1_6", label: "6", textAfter: "" },
              { textBefore: "have got six legs, two wings and big eyes. They're 8", gapId: "B_1_7", label: "7", textAfter: "" },
              { textBefore: ".", gapId: "B_1_8", label: "8", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["Tortoises", "tortoises"], explanation: "Tortoises can walk but can't run." },
              "B_1_2": { expected: ["slow"], explanation: "They're slow." },
              "B_1_3": { expected: ["Crocodiles", "crocodiles"], explanation: "Crocodiles have big mouth and teeth." },
              "B_1_4": { expected: ["dangerous"], explanation: "They're dangerous." },
              "B_1_5": { expected: ["lions"], explanation: "Baby lions." },
              "B_1_6": { expected: ["cute"], explanation: "Baby lions are cute." },
              "B_1_7": { expected: ["Flies", "flies"], explanation: "Flies have six legs and two wings." },
              "B_1_8": { expected: ["ugly"], explanation: "They're ugly." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the sentences with the names of the animals.",
            points: 4,
            type: "word-bank",
            imageKey: "gg1_u7_animals_b",
            example: "0 It can fly but it can't talk. It's a parrot.",
            sentences: [
              { textBefore: "1 It can climb trees and it's got four legs. It's a", gapId: "B_2_1", label: "1", textAfter: "." },
              { textBefore: "2 It's a good pet and it's got long ears. It's a", gapId: "B_2_2", label: "2", textAfter: "." },
              { textBefore: "3 It can swim and jump. It's a", gapId: "B_2_3", label: "3", textAfter: "." },
              { textBefore: "4 It's got eight legs. It's small but it can run fast. It's a", gapId: "B_2_4", label: "4", textAfter: "." }
            ],
            answers: {
              "B_2_1": { expected: ["monkey"], explanation: "A monkey can climb trees." },
              "B_2_2": { expected: ["rabbit"], explanation: "A rabbit has long ears." },
              "B_2_3": { expected: ["frog"], explanation: "A frog can swim and jump." },
              "B_2_4": { expected: ["spider"], explanation: "A spider has eight legs." }
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
            title: "Complete the sentences with the negative form of the Present Simple.",
            points: 4,
            type: "grammar-gap",
            example: "0 I don't like snakes and spiders. (like)",
            items: [
              { id: "B_3_1", label: "1", textBefore: "Thomas", verb: "go", textAfter: "to school on Saturdays." },
              { id: "B_3_2", label: "2", textBefore: "Steve and Gloria", verb: "listen", textAfter: "to music in the evening." },
              { id: "B_3_3", label: "3", textBefore: "Emma", verb: "ride", textAfter: "a bike to school. She walks." },
              { id: "B_3_4", label: "4", textBefore: "Cats", verb: "eat", textAfter: "a lot." }
            ],
            answers: {
              "B_3_1": { expected: ["doesn't go", "does not go"], explanation: "Thomas (he): doesn't go." },
              "B_3_2": { expected: ["don't listen", "do not listen"], explanation: "Steve and Gloria (they): don't listen." },
              "B_3_3": { expected: ["doesn't ride", "does not ride"], explanation: "Emma (she): doesn't ride." },
              "B_3_4": { expected: ["don't eat", "do not eat"], explanation: "Cats (they): don't eat." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write the questions.",
            points: 4,
            type: "sentence-order",
            example: "0 A: Do you want a dog? B: Yes, I want a dog. / 0 A: What do you like? B: I like animals.",
            items: [
              { id: "B_4_1", label: "1", prompt: "A: _______ at twelve o'clock? B: No, the students don't have lunch at twelve o'clock." },
              { id: "B_4_2", label: "2", prompt: "A: _______ early on Sundays? B: Yes, Lucy goes to bed early on Sundays." },
              { id: "B_4_3", label: "3", prompt: "A: What _______ draw? B: I draw pictures of flowers." },
              { id: "B_4_4", label: "4", prompt: "A: _______ in the evening? B: She watches TV in the evening." }
            ],
            answers: {
              "B_4_1": { expected: ["Do the students have lunch at twelve o'clock?", "Do the students have lunch"], explanation: "Do the students have lunch at twelve o'clock?" },
              "B_4_2": { expected: ["Does Lucy go to bed early on Sundays?", "Does Lucy go to bed", "Does she go to bed early on Sundays?"], explanation: "Does Lucy go to bed early on Sundays?" },
              "B_4_3": { expected: ["do you draw", "do you"], explanation: "What do you draw?" },
              "B_4_4": { expected: ["What does she do in the evening?", "What does she do"], explanation: "What does she do in the evening?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the correct form of the Present Simple.",
            points: 5,
            type: "grammar-gap",
            example: "Rob: ⁰Do you get up (you / get up) early?",
            items: [
              { id: "B_5_1", label: "1", textBefore: "Ewa: No, I", verb: "not get up", textAfter: "but I make lunch for the family." },
              { id: "B_5_2", label: "2", textBefore: "Ewa: Zac", verb: "not cook", textAfter: "but he helps Dad in the garden." },
              { id: "B_5_3", label: "3", textBefore: "I", verb: "not help", textAfter: "Dad but I help Mum in the house." },
              { id: "B_5_4", label: "4", textBefore: "Rob: What", verb: "you / do", textAfter: "to relax?" },
              { id: "B_5_5", label: "5", textBefore: "Rob:", verb: "Zac / play", textAfter: "computer games too?<br>Martha: Yes, he does." }
            ],
            answers: {
              "B_5_1": { expected: ["don't get up", "do not get up"], explanation: "I don't get up." },
              "B_5_2": { expected: ["doesn't cook", "does not cook"], explanation: "Zac (he): doesn't cook." },
              "B_5_3": { expected: ["don't help", "do not help"], explanation: "I don't help." },
              "B_5_4": { expected: ["do you do"], explanation: "What do you do to relax?" },
              "B_5_5": { expected: ["Does Zac play", "does Zac play"], explanation: "Does Zac play computer games too?" }
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
            title: "Circle the correct answers.",
            points: 5,
            type: "circle-choice",
            example: "A: ⁰Get / Got your ticket, Petra. (Get)",
            items: [
              { id: "B_6_1", label: "1", before: "B:", after: "I help you?", options: ["Can", "Do"] },
              { id: "B_6_2", label: "2", before: "C: Can I", after: "one ticket to the museum, please?", options: ["take", "have"] },
              { id: "B_6_3", label: "3", before: "B:", after: "four pounds, please.", options: ["That's", "They're"] },
              { id: "B_6_4", label: "4", before: "C: Here", after: "are.", options: ["you", "we"] },
              { id: "B_6_5", label: "5", before: "B: And", after: "your ticket. C: Thanks.", options: ["it's", "here's"] }
            ],
            answers: {
              "B_6_1": { expected: ["Can"], explanation: "Can I help you?" },
              "B_6_2": { expected: ["have"], explanation: "Can I have one ticket...?" },
              "B_6_3": { expected: ["That's"], explanation: "That's four pounds, please." },
              "B_6_4": { expected: ["you"], explanation: "Here you are." },
              "B_6_5": { expected: ["here's"], explanation: "And here's your ticket." }
            }
          }
        ]
      }
    }
  }
};
