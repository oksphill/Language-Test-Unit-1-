/**
 * Go Getter 1 - Unit 4 Language Test
 * Appearance & Parts of the Body / Have got & Possessive Adjectives
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_4_DATA = {
  id: "unit4",
  courseId: "gogetter1",
  number: 4,
  title: "Appearance & Body Parts",
  description: "Vocabulary: Parts of the body, personality and appearance adjectives. Grammar: Have got (all forms), Possessive adjectives (its, our, your, their). Communication: Apologising and responding.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 4",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 10,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Look at the picture and complete the text with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            imageKey: "gg1_u4_monsters_a",
            wordBank: ["ears", "feet", "fingers", "hands", "legs", "neck", "toes"],
            example: "Martha's ⁰head is big.",
            usedInExample: ["head"],
            sentences: [
              { textBefore: "Martha's head is big and her 1", gapId: "A_1_1", label: "1", textAfter: "is long." },
              { textBefore: "Her body is small and her 2", gapId: "A_1_2", label: "2", textAfter: "are short." },
              { textBefore: "There are twelve 3", gapId: "A_1_3", label: "3", textAfter: "on her" },
              { textBefore: "4", gapId: "A_1_4", label: "4", textAfter: "and there are six 5" },
              { textBefore: "on her 6", gapId: "A_1_5", label: "5", textAfter: "" },
              { textBefore: ".", gapId: "A_1_6", label: "6", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["neck"], explanation: "Her neck is long." },
              "A_1_2": { expected: ["legs"], explanation: "Her legs are short." },
              "A_1_3": { expected: ["fingers"], explanation: "Twelve fingers on hands." },
              "A_1_4": { expected: ["hands"], explanation: "On her hands." },
              "A_1_5": { expected: ["toes"], explanation: "Six toes on feet." },
              "A_1_6": { expected: ["feet"], explanation: "On her feet." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the words in the sentences with the groups of letters in the box. There is one extra group.",
            points: 4,
            type: "word-bank",
            wordBank: ["ce", "ly", "ny", "ty", "ver"],
            example: "0 She's helpful and she helps her friend with her homework.",
            usedInExample: ["ful"],
            sentences: [
              { textBefore: "1 He likes tennis and taekwondo. He's spor", gapId: "A_2_1", label: "1", textAfter: "." },
              { textBefore: "2 She's very ni", gapId: "A_2_2", label: "2", textAfter: ". She's got a cool present for her dad." },
              { textBefore: "3 He's a good student. He's cle", gapId: "A_2_3", label: "3", textAfter: "." },
              { textBefore: "4 She's fun", gapId: "A_2_4", label: "4", textAfter: "and she tells great jokes." }
            ],
            answers: {
              "A_2_1": { expected: ["ty"], explanation: "sporty" },
              "A_2_2": { expected: ["ce"], explanation: "nice" },
              "A_2_3": { expected: ["ver"], explanation: "clever" },
              "A_2_4": { expected: ["ny"], explanation: "funny" }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 15,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Look at the picture in Exercise 1. Complete the sentences with has got, hasn't got, have got, haven't got.",
            points: 4,
            type: "grammar-gap",
            example: "0 Martha has got big brown eyes.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "Albert and Martha", prompt: "have got", textAfter: "long legs." },
              { id: "A_3_2", label: "2", textBefore: "Albert", prompt: "have got", textAfter: "dark spiky hair." },
              { id: "A_3_3", label: "3", textBefore: "Martha", prompt: "have got", textAfter: "long curly hair." },
              { id: "A_3_4", label: "4", textBefore: "Harold and Albert", prompt: "have got", textAfter: "blond hair." }
            ],
            answers: {
              "A_3_1": { expected: ["haven't got", "have not got"], explanation: "Albert and Martha have short legs, so they haven't got long legs." },
              "A_3_2": { expected: ["has got", "'s got"], explanation: "Albert has got dark spiky hair." },
              "A_3_3": { expected: ["has got", "'s got"], explanation: "Martha has got long curly hair." },
              "A_3_4": { expected: ["haven't got", "have not got"], explanation: "Harold and Albert have dark/brown hair, so they haven't got blond hair." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogue. Use has, hasn't, have, haven't, got, they.",
            points: 7,
            type: "word-bank",
            example: "A: ⁰Have you got a new robot?",
            sentences: [
              { textBefore: "B: Yes, I 1", gapId: "A_4_1", label: "1", textAfter: ".<br>A: 2" },
              { textBefore: "your brother got a robot too?<br>B: Yes, he has, but his robot 3", gapId: "A_4_2", label: "2", textAfter: "" },
              { textBefore: "got a battery.<br>A: Have your parents 4", gapId: "A_4_3", label: "3", textAfter: "" },
              { textBefore: "a robot?<br>B: No, 5", gapId: "A_4_4", label: "4", textAfter: "" },
              { textBefore: "haven't.<br>A: And your friends? What 6", gapId: "A_4_5", label: "5", textAfter: "" },
              { textBefore: "they got?<br>B: They 7", gapId: "A_4_6", label: "6", textAfter: "" },
              { textBefore: "got robots, but they've got super suits.", gapId: "A_4_7", label: "7", textAfter: "" }
            ],
            answers: {
              "A_4_1": { expected: ["have"], explanation: "Yes, I have." },
              "A_4_2": { expected: ["Has", "has"], explanation: "Has your brother got...?" },
              "A_4_3": { expected: ["hasn't", "has not"], explanation: "his robot hasn't got a battery." },
              "A_4_4": { expected: ["got"], explanation: "Have your parents got a robot?" },
              "A_4_5": { expected: ["they"], explanation: "No, they haven't." },
              "A_4_6": { expected: ["have"], explanation: "What have they got?" },
              "A_4_7": { expected: ["haven't", "have not"], explanation: "They haven't got robots." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete sentence B in each pair. Use its, their, your, our.",
            points: 4,
            type: "sentence-order",
            example: "0 A Mike and Veronica have got white teeth. -> B Their teeth are white.",
            items: [
              { id: "A_5_1", label: "1", prompt: "A: My sister and I have got dark blue eyes. -> B: _______ are dark blue." },
              { id: "A_5_2", label: "2", prompt: "A: The car has got a new battery. -> B: _______ is new." },
              { id: "A_5_3", label: "3", prompt: "A: You and your parents have got a cool house. -> B: _______ is cool." },
              { id: "A_5_4", label: "4", prompt: "A: The students have got a great teacher. -> B: _______ is great." }
            ],
            answers: {
              "A_5_1": { expected: ["Our eyes are dark blue.", "Our eyes"], explanation: "My sister and I -> Our eyes." },
              "A_5_2": { expected: ["Its battery is new.", "Its battery"], explanation: "The car (it) -> Its battery." },
              "A_5_3": { expected: ["Your house is cool.", "Your house"], explanation: "You and your parents -> Your house." },
              "A_5_4": { expected: ["Their teacher is great.", "Their teacher"], explanation: "The students (they) -> Their teacher." }
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
            title: "Circle the correct answer in the dialogues.",
            points: 5,
            type: "circle-choice",
            example: "A: Are you OK? B: ⁰I'm fine / no. (fine)",
            items: [
              { id: "A_6_1", label: "1", before: "A: I'm", after: "sorry. B: It's OK.", options: ["too", "so"] },
              { id: "A_6_2", label: "2", before: "A: Sorry", after: "that!", options: ["on", "about"] },
              { id: "A_6_3", label: "3", before: "B: That's", after: "right.", options: ["all", "so"] },
              { id: "A_6_4", label: "4", before: "A: Sorry, my", after: ".", options: ["wrong", "mistake"] },
              { id: "A_6_5", label: "5", before: "B:", after: "problem.", options: ["No", "Not"] }
            ],
            answers: {
              "A_6_1": { expected: ["so"], explanation: "I'm so sorry." },
              "A_6_2": { expected: ["about"], explanation: "Sorry about that!" },
              "A_6_3": { expected: ["all"], explanation: "That's all right." },
              "A_6_4": { expected: ["mistake"], explanation: "Sorry, my mistake." },
              "A_6_5": { expected: ["No"], explanation: "No problem." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 4",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 10,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Look at the picture and complete the text with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            imageKey: "gg1_u4_monsters_b",
            wordBank: ["body", "feet", "fingers", "hands", "mouth", "toes", "tooth"],
            example: "Harold's ⁰head is small.",
            usedInExample: ["head"],
            sentences: [
              { textBefore: "Harold's head is small. His 1", gapId: "B_1_1", label: "1", textAfter: "is big and his legs are long." },
              { textBefore: "His 2", gapId: "B_1_2", label: "2", textAfter: "is big and he's got one 3" },
              { textBefore: ". There are six 4", gapId: "B_1_3", label: "3", textAfter: "" },
              { textBefore: "on his feet and there are six 5", gapId: "B_1_4", label: "4", textAfter: "" },
              { textBefore: "on his 6", gapId: "B_1_5", label: "5", textAfter: "" },
              { textBefore: ".", gapId: "B_1_6", label: "6", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["body"], explanation: "His body is big." },
              "B_1_2": { expected: ["mouth"], explanation: "His mouth is big." },
              "B_1_3": { expected: ["tooth"], explanation: "One tooth." },
              "B_1_4": { expected: ["toes"], explanation: "Six toes on his feet." },
              "B_1_5": { expected: ["fingers"], explanation: "Six fingers on his hands." },
              "B_1_6": { expected: ["hands"], explanation: "On his hands." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the words in the sentences with the groups of letters in the box. There is one extra group.",
            points: 4,
            type: "word-bank",
            wordBank: ["ce", "ly", "ny", "ty", "ver"],
            example: "0 She's helpful and she helps her friend with her homework.",
            usedInExample: ["ful"],
            sentences: [
              { textBefore: "1 He tells great jokes. He's fun", gapId: "B_2_1", label: "1", textAfter: "." },
              { textBefore: "2 She's spor", gapId: "B_2_2", label: "2", textAfter: ". She likes taekwondo and tennis." },
              { textBefore: "3 He's got a great present for his friend. He's very ni", gapId: "B_2_3", label: "3", textAfter: "." },
              { textBefore: "4 She's friend", gapId: "B_2_4", label: "4", textAfter: ". She speaks to everyone." }
            ],
            answers: {
              "B_2_1": { expected: ["ny"], explanation: "funny" },
              "B_2_2": { expected: ["ty"], explanation: "sporty" },
              "B_2_3": { expected: ["ce"], explanation: "nice" },
              "B_2_4": { expected: ["ly"], explanation: "friendly" }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 15,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Look at the picture in Exercise 1. Complete the sentences with has got, hasn't got, have got, haven't got.",
            points: 4,
            type: "grammar-gap",
            example: "0 Martha has got big brown eyes.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "Albert", prompt: "have got", textAfter: "curly blond hair." },
              { id: "B_3_2", label: "2", textBefore: "Martha and Harold", prompt: "have got", textAfter: "small blue eyes." },
              { id: "B_3_3", label: "3", textBefore: "Albert and Harold", prompt: "have got", textAfter: "short hair." },
              { id: "B_3_4", label: "4", textBefore: "Martha", prompt: "have got", textAfter: "a big mouth." }
            ],
            answers: {
              "B_3_1": { expected: ["hasn't got", "has not got"], explanation: "Albert hasn't got curly blond hair." },
              "B_3_2": { expected: ["have got", "'ve got"], explanation: "Martha and Harold have got small blue eyes." },
              "B_3_3": { expected: ["have got", "'ve got"], explanation: "Albert and Harold have got short hair." },
              "B_3_4": { expected: ["has got", "'s got"], explanation: "Martha has got a big mouth." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogue. Use has, hasn't, have, haven't, got, they.",
            points: 7,
            type: "word-bank",
            example: "A: ⁰Have you got a new robot?",
            sentences: [
              { textBefore: "B: No, I 1", gapId: "B_4_1", label: "1", textAfter: ".<br>A: Have your parents 2" },
              { textBefore: "a robot?<br>B: Yes, 3", gapId: "B_4_2", label: "2", textAfter: "" },
              { textBefore: "have.<br>A: 4", gapId: "B_4_3", label: "3", textAfter: "" },
              { textBefore: "your sister got a robot too?<br>B: Yes, but her robot 5", gapId: "B_4_4", label: "4", textAfter: "" },
              { textBefore: "got a battery.<br>A: What 6", gapId: "B_4_5", label: "5", textAfter: "" },
              { textBefore: "your friends got?<br>B: They 7", gapId: "B_4_6", label: "6", textAfter: "" },
              { textBefore: "got robots and the robots have got batteries!", gapId: "B_4_7", label: "7", textAfter: "" }
            ],
            answers: {
              "B_4_1": { expected: ["haven't", "have not"], explanation: "No, I haven't." },
              "B_4_2": { expected: ["got"], explanation: "Have your parents got a robot?" },
              "B_4_3": { expected: ["they"], explanation: "Yes, they have." },
              "B_4_4": { expected: ["Has", "has"], explanation: "Has your sister got a robot too?" },
              "B_4_5": { expected: ["hasn't", "has not"], explanation: "her robot hasn't got a battery." },
              "B_4_6": { expected: ["have"], explanation: "What have your friends got?" },
              "B_4_7": { expected: ["have", "'ve"], explanation: "They have got robots." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete sentence B in each pair. Use its, their, your, our.",
            points: 4,
            type: "sentence-order",
            example: "0 A Mike and Veronica have got white teeth. -> B Their teeth are white.",
            items: [
              { id: "B_5_1", label: "1", prompt: "A: The house has got a big garden. -> B: _______ is big." },
              { id: "B_5_2", label: "2", prompt: "A: Rebecca and I have got brown eyes. -> B: _______ are brown." },
              { id: "B_5_3", label: "3", prompt: "A: The teachers have got great students. -> B: _______ are great." },
              { id: "B_5_4", label: "4", prompt: "A: You and your friends have got good marks. -> B: _______ are good." }
            ],
            answers: {
              "B_5_1": { expected: ["Its garden is big.", "Its garden"], explanation: "The house (it) -> Its garden." },
              "B_5_2": { expected: ["Our eyes are brown.", "Our eyes"], explanation: "Rebecca and I -> Our eyes." },
              "B_5_3": { expected: ["Their students are great.", "Their students"], explanation: "The teachers -> Their students." },
              "B_5_4": { expected: ["Your marks are good.", "Your marks"], explanation: "You and your friends -> Your marks." }
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
            title: "Circle the correct answer in the dialogues.",
            points: 5,
            type: "circle-choice",
            example: "A: Are you OK? B: ⁰I'm fine / no. (fine)",
            items: [
              { id: "B_6_1", label: "1", before: "A: Sorry, my", after: ".", options: ["mistake", "wrong"] },
              { id: "B_6_2", label: "2", before: "B:", after: "problem.", options: ["No", "Not"] },
              { id: "B_6_3", label: "3", before: "A: Sorry", after: "that!", options: ["about", "on"] },
              { id: "B_6_4", label: "4", before: "B: That's", after: "right.", options: ["all", "so"] },
              { id: "B_6_5", label: "5", before: "A: I'm", after: "sorry. B: It's OK.", options: ["so", "too"] }
            ],
            answers: {
              "B_6_1": { expected: ["mistake"], explanation: "Sorry, my mistake." },
              "B_6_2": { expected: ["No"], explanation: "No problem." },
              "B_6_3": { expected: ["about"], explanation: "Sorry about that!" },
              "B_6_4": { expected: ["all"], explanation: "That's all right." },
              "B_6_5": { expected: ["so"], explanation: "I'm so sorry." }
            }
          }
        ]
      }
    }
  }
};
