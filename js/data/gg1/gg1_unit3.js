/**
 * Go Getter 1 - Unit 3 Language Test
 * House & Home / There is, There are & Prepositions of place
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_3_DATA = {
  id: "unit3",
  courseId: "gogetter1",
  number: 3,
  title: "House & Home",
  description: "Vocabulary: Rooms, furniture, household objects. Grammar: There is / There are, Some / Any, Prepositions of place. Communication: Offering food and asking for things.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 3",
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
            title: "Look at the picture. Write the words.",
            points: 6,
            type: "letter-hint",
            imageKey: "gg1_u3_room_a",
            example: "0 b e d",
            items: [
              { id: "A_1_1", label: "1", textBefore: "1", displayHint: "s _ _ _", prefix: "s", textAfter: "" },
              { id: "A_1_2", label: "2", textBefore: "2", displayHint: "c _ _ _ _ _ _ s", prefix: "c", textAfter: "" },
              { id: "A_1_3", label: "3", textBefore: "3", displayHint: "a _ _ _ _ _ _ _", prefix: "a", textAfter: "" },
              { id: "A_1_4", label: "4", textBefore: "4", displayHint: "w _ _ _ _ _ _ _", prefix: "w", textAfter: "" },
              { id: "A_1_5", label: "5", textBefore: "5", displayHint: "c _ _ _ _ _ _ _", prefix: "c", textAfter: "" },
              { id: "A_1_6", label: "6", textBefore: "6", displayHint: "l _ _ _ s", prefix: "l", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["sofa"], explanation: "Living room sofa." },
              "A_1_2": { expected: ["cushions"], explanation: "Cushions on the sofa/bed." },
              "A_1_3": { expected: ["armchair"], explanation: "Comfortable chair with arms: armchair." },
              "A_1_4": { expected: ["wardrobe"], explanation: "Cupboard for clothes: wardrobe." },
              "A_1_5": { expected: ["cupboard", "chest of drawers"], explanation: "Cupboard or chest of drawers." },
              "A_1_6": { expected: ["lamps"], explanation: "Lights on tables: lamps." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture in Exercise 1. Complete the answers with prepositions of place.",
            points: 4,
            type: "word-bank",
            imageKey: "gg1_u3_room_a",
            example: "Where's Cat A? It's ⁰in the bedroom.",
            sentences: [
              { textBefore: "Where's Cat B? It's", gapId: "A_2_1", label: "1", textAfter: "the desk." },
              { textBefore: "Where's Cat C? It's", gapId: "A_2_2", label: "2", textAfter: "the chair." },
              { textBefore: "Where's Cat D? It's", gapId: "A_2_3", label: "3", textAfter: "to the table." },
              { textBefore: "Where's Cat E? It's", gapId: "A_2_4", label: "4", textAfter: "of the plant." }
            ],
            answers: {
              "A_2_1": { expected: ["under", "on"], explanation: "Cat B position relative to desk." },
              "A_2_2": { expected: ["behind", "on", "next to"], explanation: "Cat C position relative to chair." },
              "A_2_3": { expected: ["next"], explanation: "Preposition phrase: next to." },
              "A_2_4": { expected: ["in front"], explanation: "Preposition phrase: in front of." }
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
            title: "Complete the sentences. Use there is / there are in the positive [✓], negative [✗] or question [?] form.",
            points: 6,
            type: "grammar-gap",
            example: "0 There is a table in the kitchen. [✓] / 0 There isn't a table in the kitchen. [✗] / 0 Is there a table in the kitchen? [?]",
            items: [
              { id: "A_3_1", label: "1", textBefore: "", prompt: "✓", textAfter: "twenty chairs in the classroom." },
              { id: "A_3_2", label: "2", textBefore: "", prompt: "?", textAfter: "a phone on the table?" },
              { id: "A_3_3", label: "3", textBefore: "", prompt: "✗", textAfter: "two beds in the bedroom." },
              { id: "A_3_4", label: "4", textBefore: "", prompt: "✓", textAfter: "a desk in the bedroom." },
              { id: "A_3_5", label: "5", textBefore: "", prompt: "✗", textAfter: "a rat behind the door." },
              { id: "A_3_6", label: "6", textBefore: "", prompt: "?", textAfter: "four people at home?" }
            ],
            answers: {
              "A_3_1": { expected: ["There are"], explanation: "Positive plural: There are." },
              "A_3_2": { expected: ["Is there"], explanation: "Question singular: Is there." },
              "A_3_3": { expected: ["There aren't", "There are not"], explanation: "Negative plural: There aren't." },
              "A_3_4": { expected: ["There is", "There's"], explanation: "Positive singular: There is." },
              "A_3_5": { expected: ["There isn't", "There is not"], explanation: "Negative singular: There isn't." },
              "A_3_6": { expected: ["Are there"], explanation: "Question plural: Are there." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Make positive sentences, negative sentences or questions.",
            points: 4,
            type: "sentence-order",
            example: "0 there / is / the garage / a rat / in / ! -> There is a rat in the garage!",
            items: [
              { id: "A_4_1", label: "1", prompt: "on / isn't / a ruler / there / the table / ." },
              { id: "A_4_2", label: "2", prompt: "in / students / there / any / the classroom / are / ?" },
              { id: "A_4_3", label: "3", prompt: "bedroom / is / in / a television / there / your / ?" },
              { id: "A_4_4", label: "4", prompt: "there / the fridge / are / four / in / eggs / ." }
            ],
            answers: {
              "A_4_1": { expected: ["There isn't a ruler on the table.", "There is not a ruler on the table."], explanation: "There isn't a ruler on the table." },
              "A_4_2": { expected: ["Are there any students in the classroom?"], explanation: "Are there any students in the classroom?" },
              "A_4_3": { expected: ["Is there a television in your bedroom?", "Is there a TV in your bedroom?"], explanation: "Is there a television in your bedroom?" },
              "A_4_4": { expected: ["There are four eggs in the fridge."], explanation: "There are four eggs in the fridge." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue. Use there, isn't, a, any.",
            points: 5,
            type: "word-bank",
            example: "Sally: This is my new house. There's ⁰a big garden.",
            sentences: [
              { textBefore: "Marina: Are there 1", gapId: "A_5_1", label: "1", textAfter: "trees in the garden?" },
              { textBefore: "Sally: No, there aren't 2", gapId: "A_5_2", label: "2", textAfter: "trees. The garden is too small for trees. But the house is big.<br>Marina: Is your bedroom big?<br>Sally: Yes, it is. There's a bed, a desk and a chair. 3" },
              { textBefore: "are four posters on the wall too.<br>Marina: Is there 4", gapId: "A_5_3", label: "3", textAfter: "" },
              { textBefore: "games console?<br>Sally: No, there 5", gapId: "A_5_4", label: "4", textAfter: "" },
              { textBefore: ", but there's a computer!", gapId: "A_5_5", label: "5", textAfter: "" }
            ],
            answers: {
              "A_5_1": { expected: ["any"], explanation: "Questions with plural nouns: any." },
              "A_5_2": { expected: ["any"], explanation: "Negative with plural nouns: aren't any." },
              "A_5_3": { expected: ["There", "there"], explanation: "There are four posters." },
              "A_5_4": { expected: ["a"], explanation: "Singular countable noun: a games console." },
              "A_5_5": { expected: ["isn't", "is not"], explanation: "Negative short reply: No, there isn't." }
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
            title: "Complete the dialogue with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["let", "please", "upstairs", "what's", "where's", "would"],
            example: "A: Hello. Please ⁰come in.",
            usedInExample: ["come"],
            sentences: [
              { textBefore: "B: Thank you.<br>A: 1", gapId: "A_6_1", label: "1", textAfter: "you like a sandwich?" },
              { textBefore: "B: Yes, 2", gapId: "A_6_2", label: "2", textAfter: ". 3" },
              { textBefore: "the bathroom, please?<br>A: It's 4", gapId: "A_6_3", label: "3", textAfter: "" },
              { textBefore: ". It's next to Andrew's bedroom. 5", gapId: "A_6_4", label: "4", textAfter: "" },
              { textBefore: "me show you.<br>B: Thanks.", gapId: "A_6_5", label: "5", textAfter: "" }
            ],
            answers: {
              "A_6_1": { expected: ["Would", "would"], explanation: "Would you like...?" },
              "A_6_2": { expected: ["please"], explanation: "Yes, please." },
              "A_6_3": { expected: ["Where's", "where's", "Where is"], explanation: "Where's the bathroom?" },
              "A_6_4": { expected: ["upstairs"], explanation: "Location: upstairs." },
              "A_6_5": { expected: ["Let", "let"], explanation: "Let me show you." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 3",
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
            title: "Look at the picture. Write the words.",
            points: 6,
            type: "letter-hint",
            imageKey: "gg1_u3_room_b",
            example: "0 b e d",
            items: [
              { id: "B_1_1", label: "1", textBefore: "1", displayHint: "w _ _ _ _ _ _ _", prefix: "w", textAfter: "" },
              { id: "B_1_2", label: "2", textBefore: "2", displayHint: "f _ _ _ _ _", prefix: "f", textAfter: "" },
              { id: "B_1_3", label: "3", textBefore: "3", displayHint: "t _ _ _ _ s", prefix: "t", textAfter: "" },
              { id: "B_1_4", label: "4", textBefore: "4", displayHint: "l _ _ _ s", prefix: "l", textAfter: "" },
              { id: "B_1_5", label: "5", textBefore: "5", displayHint: "s _ _ _", prefix: "s", textAfter: "" },
              { id: "B_1_6", label: "6", textBefore: "6", displayHint: "a _ _ _ _ _ _ _", prefix: "a", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["wardrobe"], explanation: "Wardrobe for clothes." },
              "B_1_2": { expected: ["fridge", "floor"], explanation: "Fridge / floor." },
              "B_1_3": { expected: ["tables"], explanation: "Small bedside tables." },
              "B_1_4": { expected: ["lamps"], explanation: "Lamps." },
              "B_1_5": { expected: ["sofa"], explanation: "Sofa." },
              "B_1_6": { expected: ["armchair"], explanation: "Armchair." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture in Exercise 1. Complete the answers with prepositions of place.",
            points: 4,
            type: "word-bank",
            imageKey: "gg1_u3_room_b",
            example: "Where's Cat A? It's ⁰in the bedroom.",
            sentences: [
              { textBefore: "Where's Cat B? It's", gapId: "B_2_1", label: "1", textAfter: "to the table." },
              { textBefore: "Where's Cat C? It's", gapId: "B_2_2", label: "2", textAfter: "the bed." },
              { textBefore: "Where's Cat D? It's", gapId: "B_2_3", label: "3", textAfter: "the plant." },
              { textBefore: "Where's Cat E? It's", gapId: "B_2_4", label: "4", textAfter: "the bed." }
            ],
            answers: {
              "B_2_1": { expected: ["next"], explanation: "Next to the table." },
              "B_2_2": { expected: ["on", "under"], explanation: "On the bed." },
              "B_2_3": { expected: ["behind", "in front of", "next to"], explanation: "Relative to the plant." },
              "B_2_4": { expected: ["under", "on"], explanation: "Relative to the bed." }
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
            title: "Complete the sentences. Use there is / there are in the positive [✓], negative [✗] or question [?] form.",
            points: 6,
            type: "grammar-gap",
            example: "0 There is a table in the kitchen. [✓] / 0 There isn't a table in the kitchen. [✗] / 0 Is there a table in the kitchen? [?]",
            items: [
              { id: "B_3_1", label: "1", textBefore: "", prompt: "✗", textAfter: "a chair in the classroom." },
              { id: "B_3_2", label: "2", textBefore: "", prompt: "?", textAfter: "three girls in your family?" },
              { id: "B_3_3", label: "3", textBefore: "", prompt: "✗", textAfter: "ten computers in the classroom." },
              { id: "B_3_4", label: "4", textBefore: "", prompt: "✓", textAfter: "a carton of milk in the kitchen." },
              { id: "B_3_5", label: "5", textBefore: "", prompt: "?", textAfter: "a dog under the table?" },
              { id: "B_3_6", label: "6", textBefore: "", prompt: "✓", textAfter: "two wardrobes in the bedroom." }
            ],
            answers: {
              "B_3_1": { expected: ["There isn't", "There is not"], explanation: "Negative singular: There isn't." },
              "B_3_2": { expected: ["Are there"], explanation: "Question plural: Are there." },
              "B_3_3": { expected: ["There aren't", "There are not"], explanation: "Negative plural: There aren't." },
              "B_3_4": { expected: ["There is", "There's"], explanation: "Positive singular: There is." },
              "B_3_5": { expected: ["Is there"], explanation: "Question singular: Is there." },
              "B_3_6": { expected: ["There are"], explanation: "Positive plural: There are." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Make positive sentences, negative sentences or questions.",
            points: 4,
            type: "sentence-order",
            example: "0 there / is / the garage / a rat / in / ! -> There is a rat in the garage!",
            items: [
              { id: "B_4_1", label: "1", prompt: "in / isn't / a pencil / there / the pencil case / ." },
              { id: "B_4_2", label: "2", prompt: "the living room / is / in / a games console / there / ?" },
              { id: "B_4_3", label: "3", prompt: "there / the tree / aren't / any / on / apples / ." },
              { id: "B_4_4", label: "4", prompt: "in / oranges / there / any / the kitchen / are / ?" }
            ],
            answers: {
              "B_4_1": { expected: ["There isn't a pencil in the pencil case.", "There is not a pencil in the pencil case."], explanation: "There isn't a pencil in the pencil case." },
              "B_4_2": { expected: ["Is there a games console in the living room?"], explanation: "Is there a games console in the living room?" },
              "B_4_3": { expected: ["There aren't any apples on the tree.", "There are not any apples on the tree."], explanation: "There aren't any apples on the tree." },
              "B_4_4": { expected: ["Are there any oranges in the kitchen?"], explanation: "Are there any oranges in the kitchen?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue. Use there, are, a, any.",
            points: 5,
            type: "word-bank",
            example: "Lily: This is my new house. There's ⁰a big garden.",
            sentences: [
              { textBefore: "Kate: Are there 1", gapId: "B_5_1", label: "1", textAfter: "plants in the garden?" },
              { textBefore: "Lily: Yes, there 2", gapId: "B_5_2", label: "2", textAfter: ", but there isn't a table and there aren't 3" },
              { textBefore: "chairs.<br>Kate: Is your bedroom big?<br>Lily: Yes, it is. There's a bed, a desk and a chair, and 4", gapId: "B_5_3", label: "3", textAfter: "" },
              { textBefore: "are three posters on the wall.<br>Kate: Is there 5", gapId: "B_5_4", label: "4", textAfter: "" },
              { textBefore: "wardrobe?<br>Lily: Yes, there is and there's a carpet too.", gapId: "B_5_5", label: "5", textAfter: "" }
            ],
            answers: {
              "B_5_1": { expected: ["any"], explanation: "Questions with plural nouns: any." },
              "B_5_2": { expected: ["are"], explanation: "Short answer: Yes, there are." },
              "B_5_3": { expected: ["any"], explanation: "Negative plural: aren't any chairs." },
              "B_5_4": { expected: ["there", "There"], explanation: "and there are three posters." },
              "B_5_5": { expected: ["a"], explanation: "Singular noun: a wardrobe." }
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
            title: "Complete the dialogue with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["downstairs", "like", "show", "thank", "what's", "where's"],
            example: "A: Hello. ⁰Please come in.",
            usedInExample: ["please"],
            sentences: [
              { textBefore: "B: Thank you.<br>A: Would you 1", gapId: "B_6_1", label: "1", textAfter: "a sandwich?" },
              { textBefore: "B: No, 2", gapId: "B_6_2", label: "2", textAfter: "you. 3" },
              { textBefore: "the bathroom, please?<br>A: It's 4", gapId: "B_6_3", label: "3", textAfter: "" },
              { textBefore: ". It's next to my bedroom. Let me 5", gapId: "B_6_4", label: "4", textAfter: "" },
              { textBefore: "you.<br>B: Thanks.", gapId: "B_6_5", label: "5", textAfter: "" }
            ],
            answers: {
              "B_6_1": { expected: ["like"], explanation: "Would you like a sandwich?" },
              "B_6_2": { expected: ["thank"], explanation: "No, thank you." },
              "B_6_3": { expected: ["Where's", "where's", "Where is"], explanation: "Where's the bathroom?" },
              "B_6_4": { expected: ["downstairs"], explanation: "Location: downstairs." },
              "B_6_5": { expected: ["show"], explanation: "Let me show you." }
            }
          }
        ]
      }
    }
  }
};
