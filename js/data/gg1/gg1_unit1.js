/**
 * Go Getter 1 - Unit 1 Language Test
 * Family & Friends / To Be & Possessives
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_1_DATA = {
  id: "unit1",
  courseId: "gogetter1",
  number: 1,
  title: "Family & Friends",
  description: "Vocabulary: Family members, countries and nationalities. Grammar: To be (positive/negative), possessive adjectives (my, your, his, her), possessive 's. Communication: Introductions.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 1",
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
            title: "Look at the family tree and complete the sentences.",
            points: 5,
            type: "word-bank",
            imageKey: "gg1_u1_family_tree_a",
            example: "0 Lulu is Gus's grandmother.",
            sentences: [
              { textBefore: "1 Mitzi is Fifi's", gapId: "A_1_1", label: "1", textAfter: "." },
              { textBefore: "2 Gizmo is Kiki's", gapId: "A_1_2", label: "2", textAfter: "." },
              { textBefore: "3 Polo is Stumpy's", gapId: "A_1_3", label: "3", textAfter: "." },
              { textBefore: "4 Mitzi is Bobo's", gapId: "A_1_4", label: "4", textAfter: "." },
              { textBefore: "5 Gus is Dido's", gapId: "A_1_5", label: "5", textAfter: "." }
            ],
            answers: {
              "A_1_1": { expected: ["mother", "mum", "mom"], explanation: "Mitzi is Fifi's mother/mum." },
              "A_1_2": { expected: ["uncle"], explanation: "Gizmo is the brother of Kiki's parent, so he is Kiki's uncle." },
              "A_1_3": { expected: ["brother"], explanation: "Polo and Stumpy are brothers." },
              "A_1_4": { expected: ["daughter"], explanation: "Mitzi is Bobo and Lulu's daughter." },
              "A_1_5": { expected: ["son"], explanation: "Gus is Dido's son." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            wordBank: ["American", "on", "park", "Poland", "Polish", "school", "UK"],
            example: "Wu and Chen are from ⁰China. They're Chinese.",
            usedInExample: ["China"],
            sentences: [
              { textBefore: "They're in the", gapId: "A_2_1", label: "1", textAfter: "." },
              { textBefore: "Jane is British. She's from the", gapId: "A_2_2", label: "2", textAfter: "." },
              { textBefore: "She's", gapId: "A_2_3", label: "3", textAfter: "holiday." },
              { textBefore: "Mark is from the USA. He's", gapId: "A_2_4", label: "4", textAfter: "." },
              { textBefore: "He's at", gapId: "A_2_5", label: "5", textAfter: "." },
              { textBefore: "Dorota is from", gapId: "A_2_6", label: "6", textAfter: ". She's in the garden." }
            ],
            answers: {
              "A_2_1": { expected: ["park"], explanation: "In the park." },
              "A_2_2": { expected: ["UK", "the UK"], explanation: "British nationality comes from the UK." },
              "A_2_3": { expected: ["on"], explanation: "Preposition: on holiday." },
              "A_2_4": { expected: ["American"], explanation: "From the USA -> American." },
              "A_2_5": { expected: ["school"], explanation: "At school." },
              "A_2_6": { expected: ["Poland"], explanation: "From Poland." }
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
            title: "Complete the sentences. Write the correct positive [✓] or negative [✗] form of to be.",
            points: 6,
            type: "grammar-gap",
            example: "0 My best friend isn't Spanish. [✗] / 0 My best friend is from Poland. [✓]",
            items: [
              { id: "A_3_1", label: "1", textBefore: "I", prompt: "✗", textAfter: "eleven years old." },
              { id: "A_3_2", label: "2", textBefore: "The man in the photo", prompt: "✓", textAfter: "my dad." },
              { id: "A_3_3", label: "3", textBefore: "You and your family", prompt: "✗", textAfter: "British." },
              { id: "A_3_4", label: "4", textBefore: "Enzo and Maria", prompt: "✓", textAfter: "Italian." },
              { id: "A_3_5", label: "5", textBefore: "His mum", prompt: "✗", textAfter: "a teacher." },
              { id: "A_3_6", label: "6", textBefore: "You and I", prompt: "✓", textAfter: "American." }
            ],
            answers: {
              "A_3_1": { expected: ["am not", "'m not"], explanation: "Negative form for I: am not / 'm not." },
              "A_3_2": { expected: ["is", "'s"], explanation: "Positive form for singular subject: is." },
              "A_3_3": { expected: ["aren't", "are not"], explanation: "Negative form for plural: aren't / are not." },
              "A_3_4": { expected: ["are", "'re"], explanation: "Positive form for plural: are." },
              "A_3_5": { expected: ["isn't", "is not"], explanation: "Negative form for singular: isn't / is not." },
              "A_3_6": { expected: ["are", "'re"], explanation: "You and I = we -> are." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with my, your, his or her.",
            points: 4,
            type: "grammar-gap",
            example: "0 Stella is a student. Her mum is a teacher.",
            items: [
              { id: "A_4_1", label: "1", textBefore: "I'm Italian.", prompt: "possessive", textAfter: "parents are Italian too." },
              { id: "A_4_2", label: "2", textBefore: "My grandfather is 70 years old.", prompt: "possessive", textAfter: "name is Alfie." },
              { id: "A_4_3", label: "3", textBefore: "It's", prompt: "possessive", textAfter: "birthday today. Happy birthday!" },
              { id: "A_4_4", label: "4", textBefore: "The girl isn't British.", prompt: "possessive", textAfter: "nationality is Spanish." }
            ],
            answers: {
              "A_4_1": { expected: ["My", "my"], explanation: "I -> My." },
              "A_4_2": { expected: ["His", "his"], explanation: "Grandfather (he) -> His." },
              "A_4_3": { expected: ["your", "Your"], explanation: "Happy birthday to you -> your birthday." },
              "A_4_4": { expected: ["Her", "her"], explanation: "The girl (she) -> Her." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Look at the family tree in Exercise 1. Write sentences with possessive 's.",
            points: 4,
            type: "sentence-writing",
            imageKey: "gg1_u1_family_tree_a",
            example: "0 Bobo / Fritzi dad -> Bobo is Fritzi's dad.",
            items: [
              { id: "A_5_1", label: "1", prompt: "Gus mum / Dido" },
              { id: "A_5_2", label: "2", prompt: "Fifi / Kiki sister" },
              { id: "A_5_3", label: "3", prompt: "Fifi cousins / Stumpy and Polo" },
              { id: "A_5_4", label: "4", prompt: "Gizmo and Mitzi / Polo parents" }
            ],
            answers: {
              "A_5_1": { expected: ["Dido is Gus's mum.", "Dido is Gus' mum.", "Dido is Gus's mother.", "Dido is Gus' mother."], explanation: "Dido is Gus's mum." },
              "A_5_2": { expected: ["Fifi isn't Kiki's sister.", "Fifi is not Kiki's sister.", "Kiki isn't Fifi's sister.", "Kiki is not Fifi's sister.", "Fifi is Kiki's cousin."], explanation: "Fifi and Kiki are cousins, not sisters." },
              "A_5_3": { expected: ["Stumpy and Polo aren't Fifi's cousins.", "Stumpy and Polo are not Fifi's cousins.", "Stumpy and Polo are Fifi's brothers.", "Stumpy and Polo aren't cousins of Fifi."], explanation: "Stumpy and Polo are Fifi's brothers, not her cousins." },
              "A_5_4": { expected: ["Gizmo and Mitzi are Polo's parents.", "Mitzi and Gizmo are Polo's parents."], explanation: "Gizmo and Mitzi are Polo's parents." }
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
            title: "Number the sentences (2–6) to make a dialogue.",
            points: 5,
            type: "matching-dialogue",
            dialogueContext: "Making introductions: Dad and Gordon",
            items: [
              { id: "A_6_1", label: "1", text: "Dad, this is Gordon.", fixedOrder: 1 },
              { id: "A_6_2", label: "2", text: "Nice to meet you too." },
              { id: "A_6_3", label: "3", text: "He's my classmate." },
              { id: "A_6_4", label: "4", text: "Nice to meet you." },
              { id: "A_6_5", label: "5", text: "Gordon, this is my dad." },
              { id: "A_6_6", label: "6", text: "Hello, Gordon." }
            ],
            answers: {
              "A_6_2": { expected: ["6"], explanation: "Final polite reply: Nice to meet you too." },
              "A_6_3": { expected: ["3"], explanation: "Adding information: He's my classmate." },
              "A_6_4": { expected: ["5"], explanation: "Gordon's greeting: Nice to meet you." },
              "A_6_5": { expected: ["2"], explanation: "Introducing Dad: Gordon, this is my dad." },
              "A_6_6": { expected: ["4"], explanation: "Dad greets Gordon: Hello, Gordon." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 1",
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
            title: "Look at the family tree and complete the sentences.",
            points: 5,
            type: "word-bank",
            imageKey: "gg1_u1_family_tree_b",
            example: "0 Mimi is Pico's grandmother.",
            sentences: [
              { textBefore: "1 Hippy is Petunia's", gapId: "B_1_1", label: "1", textAfter: "." },
              { textBefore: "2 Oscar is Tiberius's", gapId: "B_1_2", label: "2", textAfter: "." },
              { textBefore: "3 Buzz is Hippy's", gapId: "B_1_3", label: "3", textAfter: "." },
              { textBefore: "4 Petunia is Ritzy's", gapId: "B_1_4", label: "4", textAfter: "." },
              { textBefore: "5 Lino is Oscar's", gapId: "B_1_5", label: "5", textAfter: "." }
            ],
            answers: {
              "B_1_1": { expected: ["aunt"], explanation: "Hippy is Petunia's aunt." },
              "B_1_2": { expected: ["uncle"], explanation: "Oscar is Tiberius's uncle." },
              "B_1_3": { expected: ["brother"], explanation: "Buzz is Hippy's brother." },
              "B_1_4": { expected: ["daughter"], explanation: "Petunia is Ritzy's daughter." },
              "B_1_5": { expected: ["son"], explanation: "Lino is Oscar's son." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            wordBank: ["American", "British", "France", "French", "home", "in", "on"],
            example: "Li and Chen are from ⁰China. They're Chinese.",
            usedInExample: ["China"],
            sentences: [
              { textBefore: "They're at", gapId: "B_2_1", label: "1", textAfter: "." },
              { textBefore: "Hank and Carlos are from the USA. They're", gapId: "B_2_2", label: "2", textAfter: "." },
              { textBefore: "They're", gapId: "B_2_3", label: "3", textAfter: "holiday." },
              { textBefore: "Sharon is", gapId: "B_2_4", label: "4", textAfter: ". She's from the UK." },
              { textBefore: "She's", gapId: "B_2_5", label: "5", textAfter: "the garden." },
              { textBefore: "Celine is from", gapId: "B_2_6", label: "6", textAfter: ". She's in the park." }
            ],
            answers: {
              "B_2_1": { expected: ["home"], explanation: "At home." },
              "B_2_2": { expected: ["American"], explanation: "From the USA -> American." },
              "B_2_3": { expected: ["on"], explanation: "Preposition: on holiday." },
              "B_2_4": { expected: ["British"], explanation: "From the UK -> British." },
              "B_2_5": { expected: ["in"], explanation: "In the garden." },
              "B_2_6": { expected: ["France"], explanation: "Country: France." }
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
            title: "Complete the sentences. Write the correct positive [✓] or negative [✗] form of to be.",
            points: 6,
            type: "grammar-gap",
            example: "0 My best friend isn't Spanish. [✗] / 0 My best friend is from Poland. [✓]",
            items: [
              { id: "B_3_1", label: "1", textBefore: "You and your friends", prompt: "✗", textAfter: "Polish." },
              { id: "B_3_2", label: "2", textBefore: "The superhero in the photo", prompt: "✓", textAfter: "Dug." },
              { id: "B_3_3", label: "3", textBefore: "My sister and I", prompt: "✓", textAfter: "at school." },
              { id: "B_3_4", label: "4", textBefore: "I", prompt: "✗", textAfter: "from Italy." },
              { id: "B_3_5", label: "5", textBefore: "Her dad", prompt: "✗", textAfter: "a teacher." },
              { id: "B_3_6", label: "6", textBefore: "Juan and Dolores", prompt: "✓", textAfter: "Spanish." }
            ],
            answers: {
              "B_3_1": { expected: ["aren't", "are not"], explanation: "Negative plural: aren't / are not." },
              "B_3_2": { expected: ["is", "'s"], explanation: "Positive singular: is." },
              "B_3_3": { expected: ["are", "'re"], explanation: "My sister and I = we -> are." },
              "B_3_4": { expected: ["am not", "'m not"], explanation: "Negative I: am not / 'm not." },
              "B_3_5": { expected: ["isn't", "is not"], explanation: "Negative singular: isn't / is not." },
              "B_3_6": { expected: ["are", "'re"], explanation: "Juan and Dolores = they -> are." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with my, your, his or her.",
            points: 4,
            type: "grammar-gap",
            example: "0 Stella is a student. Her mum is a teacher.",
            items: [
              { id: "B_4_1", label: "1", textBefore: "Hi, Jane! It's", prompt: "possessive", textAfter: "birthday today. Happy birthday!" },
              { id: "B_4_2", label: "2", textBefore: "I'm Polish.", prompt: "possessive", textAfter: "friends are Polish too." },
              { id: "B_4_3", label: "3", textBefore: "The boy isn't American.", prompt: "possessive", textAfter: "nationality is Italian." },
              { id: "B_4_4", label: "4", textBefore: "My granny is 67 years old.", prompt: "possessive", textAfter: "name is Annabella." }
            ],
            answers: {
              "B_4_1": { expected: ["your", "Your"], explanation: "Happy birthday to you -> your birthday." },
              "B_4_2": { expected: ["My", "my"], explanation: "I -> My friends." },
              "B_4_3": { expected: ["His", "his"], explanation: "The boy -> His nationality." },
              "B_4_4": { expected: ["Her", "her"], explanation: "Granny (she) -> Her name." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Look at the family tree in Exercise 1. Write sentences with possessive 's.",
            points: 4,
            type: "sentence-writing",
            imageKey: "gg1_u1_family_tree_b",
            example: "0 Goopy / Buzz dad -> Goopy is Buzz's dad.",
            items: [
              { id: "B_5_1", label: "1", prompt: "Lino mum / Hippy" },
              { id: "B_5_2", label: "2", prompt: "Dalia / Petunia sister" },
              { id: "B_5_3", label: "3", prompt: "Pico cousins / Dalia, Petunia and Tiberius" },
              { id: "B_5_4", label: "4", prompt: "Oscar and Hippy / Lino parents" }
            ],
            answers: {
              "B_5_1": { expected: ["Hippy is Lino's mum.", "Hippy is Lino's mother."], explanation: "Hippy is Lino's mum." },
              "B_5_2": { expected: ["Dalia isn't Petunia's sister.", "Dalia is not Petunia's sister.", "Dalia is Petunia's cousin."], explanation: "Dalia is Petunia's cousin, not her sister." },
              "B_5_3": { expected: ["Petunia and Tiberius are Pico's cousins.", "Dalia, Petunia and Tiberius aren't Pico's cousins."], explanation: "Petunia and Tiberius are Pico's cousins (Dalia is his sister)." },
              "B_5_4": { expected: ["Oscar and Hippy are Lino's parents.", "Hippy and Oscar are Lino's parents."], explanation: "Oscar and Hippy are Lino's parents." }
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
            title: "Number the sentences (2–6) to make a dialogue.",
            points: 5,
            type: "matching-dialogue",
            dialogueContext: "Making introductions: Mum and Ivy",
            items: [
              { id: "B_6_1", label: "1", text: "Mum, this is Ivy.", fixedOrder: 1 },
              { id: "B_6_2", label: "2", text: "Hello, Ivy." },
              { id: "B_6_3", label: "3", text: "Nice to meet you too." },
              { id: "B_6_4", label: "4", text: "Nice to meet you." },
              { id: "B_6_5", label: "5", text: "Ivy, this is my mum." },
              { id: "B_6_6", label: "6", text: "She's my friend." }
            ],
            answers: {
              "B_6_2": { expected: ["4"], explanation: "Mum greets Ivy: Hello, Ivy." },
              "B_6_3": { expected: ["6"], explanation: "Final polite reply: Nice to meet you too." },
              "B_6_4": { expected: ["5"], explanation: "Ivy's polite greeting: Nice to meet you." },
              "B_6_5": { expected: ["3"], explanation: "Introducing Mum: Ivy, this is my mum." },
              "B_6_6": { expected: ["2"], explanation: "Adding information: She's my friend." }
            }
          }
        ]
      }
    }
  }
};
