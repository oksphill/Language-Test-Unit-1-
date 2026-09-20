/**
 * Go Getter 2 - Unit 2 Language Test
 * Food & Drink / Countable & Uncountable Nouns, Quantifiers
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_2_DATA = {
  id: "unit2",
  courseId: "gogetter2",
  number: 2,
  title: "Food & Drink",
  description: "Vocabulary: Food types, food from plants/animals/sea, containers. Grammar: Countable and uncountable nouns, a/an, some/any, much/many/a lot of. Communication: Ordering food and drink in a restaurant.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 2",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 14,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Find the odd one out.",
            points: 4,
            type: "circle-choice",
            example: "0 Vegetables: tomatoes / potatoes / toast (toast)",
            items: [
              { id: "A_1_1", label: "1", before: "Fruit:", options: ["apples", "oranges", "pancakes"] },
              { id: "A_1_2", label: "2", before: "Food from plants:", options: ["cereal", "milk", "bread"] },
              { id: "A_1_3", label: "3", before: "Food from animals:", options: ["pasta", "ham", "meat"] },
              { id: "A_1_4", label: "4", before: "Food from the sea:", options: ["fish", "tuna", "yoghurt"] }
            ],
            answers: {
              "A_1_1": { expected: ["pancakes"], explanation: "Pancakes are not fruit." },
              "A_1_2": { expected: ["milk"], explanation: "Milk comes from animals, not plants." },
              "A_1_3": { expected: ["pasta"], explanation: "Pasta is made from wheat (plant), not animals." },
              "A_1_4": { expected: ["yoghurt"], explanation: "Yoghurt is a dairy product, not seafood." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the dialogue.",
            points: 6,
            type: "letter-hint",
            example: "The ⁰chicken and vegetables look yummy.",
            items: [
              { id: "A_2_1", label: "1", textBefore: "Owen: Let's look at the menu ... The chicken and vegetables look yummy. And I want to try the Chinese", displayHint: "r _ _ _", prefix: "r", textAfter: ". What do you want?" },
              { id: "A_2_2", label: "2", textBefore: "Megan: Hmm. I like chicken, but these", displayHint: "s _ _ _ _ _ _ s", prefix: "s", textAfter: "look good." },
              { id: "A_2_3", label: "3", textBefore: "Mimi: Can I have fish and", displayHint: "c _ _ _ s", prefix: "c", textAfter: "?<br>Megan: Yes, of course!<br>25 minutes later ..." },
              { id: "A_2_4", label: "4", textBefore: "Owen: Are you still hungry?<br>Mimi: No, but can I have some", displayHint: "s _ _ _ _ _ _ _ _ _ _ s", prefix: "s", textAfter: "?<br>Owen: Good idea!" },
              { id: "A_2_5", label: "5", textBefore: "Megan: I don't want fruit. I want some", displayHint: "c _ _ _ _ e", prefix: "c", textAfter: "and biscuits." },
              { id: "A_2_6", label: "6", textBefore: "Owen: And I want some tea with", displayHint: "s _ _ _ r", prefix: "s", textAfter: "." }
            ],
            answers: {
              "A_2_1": { expected: ["rice"], explanation: "Picture 1 shows rice." },
              "A_2_2": { expected: ["sausages"], explanation: "Picture 2 shows sausages." },
              "A_2_3": { expected: ["chips"], explanation: "Picture 3 shows chips (french fries)." },
              "A_2_4": { expected: ["strawberries"], explanation: "Picture 4 shows strawberries." },
              "A_2_5": { expected: ["cheese"], explanation: "Picture 5 shows cheese." },
              "A_2_6": { expected: ["sugar"], explanation: "Picture 6 shows sugar." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Write the words for containers in the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 Let's buy a packet of biscuits for tea.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "Please buy six", displayHint: "c _ _ s", prefix: "c", textAfter: "of cola from the supermarket." },
              { id: "A_3_2", label: "2", textBefore: "There's a", displayHint: "b _ _ _ _ e", prefix: "b", textAfter: "of water in the fridge." },
              { id: "A_3_3", label: "3", textBefore: "Is there a", displayHint: "j _ r", prefix: "j", textAfter: "of strawberry jam in the cupboard?" },
              { id: "A_3_4", label: "4", textBefore: "There isn't any juice in the", displayHint: "c _ _ _ _ n", prefix: "c", textAfter: "." }
            ],
            answers: {
              "A_3_1": { expected: ["cans"], explanation: "Cans of cola." },
              "A_3_2": { expected: ["bottle"], explanation: "A bottle of water." },
              "A_3_3": { expected: ["jar"], explanation: "A jar of jam." },
              "A_3_4": { expected: ["carton"], explanation: "A carton of juice." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 11,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the text with a/an or - (type - for no article).",
            points: 5,
            type: "circle-choice",
            example: "My recipe for chocolate mousse is great! You need ⁰- milk",
            items: [
              { id: "A_4_1", label: "1", before: "You need", after: "chocolate,", options: ["a", "an", "-"] },
              { id: "A_4_2", label: "2", before: "", after: "egg,", options: ["a", "an", "-"] },
              { id: "A_4_3", label: "3", before: "", after: "flour", options: ["a", "an", "-"] },
              { id: "A_4_4", label: "4", before: "and", after: "sugar.", options: ["a", "an", "-"] },
              { id: "A_4_5", label: "5", before: "You need", after: "lemon for the topping too.", options: ["a", "an", "-"] }
            ],
            answers: {
              "A_4_1": { expected: ["-"], explanation: "Chocolate is uncountable: no article (-)." },
              "A_4_2": { expected: ["an"], explanation: "Egg starts with a vowel sound: an egg." },
              "A_4_3": { expected: ["-"], explanation: "Flour is uncountable: no article (-)." },
              "A_4_4": { expected: ["-"], explanation: "Sugar is uncountable: no article (-)." },
              "A_4_5": { expected: ["a"], explanation: "Lemon is a countable noun starting with consonant: a lemon." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            wordBank: ["a", "a lot", "any", "many", "much", "some"],
            example: "Andy: There are ⁰some biscuits in the cupboard.",
            usedInExample: ["some"],
            sentences: [
              { textBefore: "Izzie: I'm hungry!<br>Andy: There are some biscuits in the cupboard.<br>Izzie: How", gapId: "A_5_1", label: "1", textAfter: "biscuits are there?<br>Andy: Four." },
              { textBefore: "Izzie: Is there", gapId: "A_5_2", label: "2", textAfter: "carton of apple juice?<br>Andy: No, there isn't." },
              { textBefore: "Izzie: Is there", gapId: "A_5_3", label: "3", textAfter: "yoghurt?<br>Andy: No, there isn't, but there's" },
              { textBefore: "", gapId: "A_5_4", label: "4", textAfter: "milk." },
              { textBefore: "Izzie: How", gapId: "A_5_5", label: "5", textAfter: "milk is there?<br>Andy: There's" },
              { textBefore: "", gapId: "A_5_6", label: "6", textAfter: "of milk! We can make milkshakes!" }
            ],
            answers: {
              "A_5_1": { expected: ["many"], explanation: "How many with countable plural (biscuits)." },
              "A_5_2": { expected: ["a"], explanation: "A carton of apple juice." },
              "A_5_3": { expected: ["any"], explanation: "Any in questions with uncountable nouns." },
              "A_5_4": { expected: ["some"], explanation: "Some in affirmative with uncountable noun (milk)." },
              "A_5_5": { expected: ["much"], explanation: "How much with uncountable noun (milk)." },
              "A_5_6": { expected: ["a lot"], explanation: "A lot of milk." }
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
            title: "Put the dialogue in the correct order (1–6).",
            points: 5,
            type: "matching-dialogue",
            example: "1: Are you ready to order? What would you like?",
            optionsList: [
              { key: "1", text: "Are you ready to order? What would you like?" },
              { key: "2", text: "Can I have the pancakes, please?" },
              { key: "3", text: "And would you like anything to drink?" },
              { key: "4", text: "Yes, please. I'd like a glass of cola, please." },
              { key: "5", text: "Anything else?" },
              { key: "6", text: "No, thank you." }
            ],
            items: [
              { id: "A_6_1", label: "Line 2", prompt: "First customer reply (food choice):" },
              { id: "A_6_2", label: "Line 3", prompt: "Waiter question about drinks:" },
              { id: "A_6_3", label: "Line 4", prompt: "Customer reply about drink:" },
              { id: "A_6_4", label: "Line 5", prompt: "Waiter closing question:" },
              { id: "A_6_5", label: "Line 6", prompt: "Customer final response:" }
            ],
            answers: {
              "A_6_1": { expected: ["2", "Can I have the pancakes, please?"], explanation: "Step 2: Order food." },
              "A_6_2": { expected: ["3", "And would you like anything to drink?"], explanation: "Step 3: Offer drinks." },
              "A_6_3": { expected: ["4", "Yes, please. I'd like a glass of cola, please."], explanation: "Step 4: Choose drink." },
              "A_6_4": { expected: ["5", "Anything else?"], explanation: "Step 5: Ask if anything else." },
              "A_6_5": { expected: ["6", "No, thank you."], explanation: "Step 6: Decline further items." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 2",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 14,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Find the odd one out.",
            points: 4,
            type: "circle-choice",
            example: "0 Vegetables: tomatoes / potatoes / toast (toast)",
            items: [
              { id: "B_1_1", label: "1", before: "Food from animals:", options: ["ham", "pasta", "meat"] },
              { id: "B_1_2", label: "2", before: "Fruit:", options: ["pancakes", "apples", "oranges"] },
              { id: "B_1_3", label: "3", before: "Food from the sea:", options: ["tuna", "fish", "yoghurt"] },
              { id: "B_1_4", label: "4", before: "Food from plants:", options: ["bread", "cereal", "milk"] }
            ],
            answers: {
              "B_1_1": { expected: ["pasta"], explanation: "Pasta is made from wheat, not animals." },
              "B_1_2": { expected: ["pancakes"], explanation: "Pancakes are not fruit." },
              "B_1_3": { expected: ["yoghurt"], explanation: "Yoghurt is dairy, not seafood." },
              "B_1_4": { expected: ["milk"], explanation: "Milk comes from animals, not plants." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the dialogue.",
            points: 6,
            type: "letter-hint",
            example: "The ⁰chicken and vegetables look yummy.",
            items: [
              { id: "B_2_1", label: "1", textBefore: "Max: Let's look at the menu ... The chicken and vegetables look yummy. And I want some", displayHint: "c _ _ _ s", prefix: "c", textAfter: "too. What do you want?" },
              { id: "B_2_2", label: "2", textBefore: "Tanya: Hmm. I like chicken, but I want to try the Chinese", displayHint: "r _ _ _", prefix: "r", textAfter: "." },
              { id: "B_2_3", label: "3", textBefore: "Sonia: Can I have the", displayHint: "s _ _ _ _ _ _ s", prefix: "s", textAfter: "?<br>Tanya: Yes, of course!<br>25 minutes later ..." },
              { id: "B_2_4", label: "4", textBefore: "Max: Are you still hungry?<br>Sonia: Yes, I am! Can I have some", displayHint: "c _ _ _ _ e", prefix: "c", textAfter: "and biscuits now?<br>Max: Good idea!" },
              { id: "B_2_5", label: "5", textBefore: "Tanya: I want some", displayHint: "s _ _ _ _ _ _ _ _ _ _ s", prefix: "s", textAfter: "and cream." },
              { id: "B_2_6", label: "6", textBefore: "Max: And I want some coffee with", displayHint: "s _ _ _ r", prefix: "s", textAfter: "." }
            ],
            answers: {
              "B_2_1": { expected: ["chips"], explanation: "Picture 1 shows chips." },
              "B_2_2": { expected: ["rice"], explanation: "Picture 2 shows rice." },
              "B_2_3": { expected: ["sausages"], explanation: "Picture 3 shows sausages." },
              "B_2_4": { expected: ["cheese"], explanation: "Picture 4 shows cheese." },
              "B_2_5": { expected: ["strawberries"], explanation: "Picture 5 shows strawberries." },
              "B_2_6": { expected: ["sugar"], explanation: "Picture 6 shows sugar." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Write the words for containers in the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 Let's buy a packet of biscuits for tea.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "I'd like that", displayHint: "b _ r", prefix: "b", textAfter: "of chocolate, please." },
              { id: "B_3_2", label: "2", textBefore: "Let's buy a", displayHint: "j _ r", prefix: "j", textAfter: "of jam from the supermarket." },
              { id: "B_3_3", label: "3", textBefore: "There's a", displayHint: "b _ _ _ _ e", prefix: "b", textAfter: "of water in the kitchen." },
              { id: "B_3_4", label: "4", textBefore: "There are four", displayHint: "c _ _ s", prefix: "c", textAfter: "of cola in the fridge." }
            ],
            answers: {
              "B_3_1": { expected: ["bar"], explanation: "A bar of chocolate." },
              "B_3_2": { expected: ["jar"], explanation: "A jar of jam." },
              "B_3_3": { expected: ["bottle"], explanation: "A bottle of water." },
              "B_3_4": { expected: ["cans"], explanation: "Cans of cola." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 11,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the text with a/an or - (type - for no article).",
            points: 5,
            type: "circle-choice",
            example: "My recipe for chocolate mousse is great! You need ⁰- milk",
            items: [
              { id: "B_4_1", label: "1", before: "You need", after: "egg,", options: ["a", "an", "-"] },
              { id: "B_4_2", label: "2", before: "", after: "chocolate,", options: ["a", "an", "-"] },
              { id: "B_4_3", label: "3", before: "", after: "flour", options: ["a", "an", "-"] },
              { id: "B_4_4", label: "4", before: "and", after: "sugar.", options: ["a", "an", "-"] },
              { id: "B_4_5", label: "5", before: "You need", after: "lemon for the topping too.", options: ["a", "an", "-"] }
            ],
            answers: {
              "B_4_1": { expected: ["an"], explanation: "Egg starts with vowel: an egg." },
              "B_4_2": { expected: ["-"], explanation: "Chocolate is uncountable: no article (-)." },
              "B_4_3": { expected: ["-"], explanation: "Flour is uncountable: no article (-)." },
              "B_4_4": { expected: ["-"], explanation: "Sugar is uncountable: no article (-)." },
              "B_4_5": { expected: ["a"], explanation: "Countable noun: a lemon." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            wordBank: ["a lot", "an", "any", "many", "much", "some"],
            example: "Nigel: There's ⁰some bread in the kitchen.",
            usedInExample: ["some"],
            sentences: [
              { textBefore: "Lilian: I'm hungry!<br>Nigel: There's some bread in the kitchen.<br>Lilian: How", gapId: "B_5_1", label: "1", textAfter: "bread is there?<br>Nigel: There's" },
              { textBefore: "", gapId: "B_5_2", label: "2", textAfter: "of bread." },
              { textBefore: "Lilian: Good! We can make", gapId: "B_5_3", label: "3", textAfter: "sandwiches.<br>Nigel: Is there" },
              { textBefore: "", gapId: "B_5_4", label: "4", textAfter: "butter?<br>Andy: No, there isn't, so we can't make" },
              { textBefore: "", gapId: "B_5_5", label: "5", textAfter: "sandwiches. But look! Biscuits!" },
              { textBefore: "Lilian: How", gapId: "B_5_6", label: "6", textAfter: "biscuits are there?<br>Nigel: One, two, three, ... nine!<br>Lilian: Let's eat!" }
            ],
            answers: {
              "B_5_1": { expected: ["much"], explanation: "How much with uncountable (bread)." },
              "B_5_2": { expected: ["a lot"], explanation: "A lot of bread." },
              "B_5_3": { expected: ["some"], explanation: "Some in affirmative sentence." },
              "B_5_4": { expected: ["any"], explanation: "Any in question." },
              "B_5_5": { expected: ["any"], explanation: "Any in negative sentence." },
              "B_5_6": { expected: ["many"], explanation: "How many with countable plural (biscuits)." }
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
            title: "Put the dialogue in the correct order (1–6).",
            points: 5,
            type: "matching-dialogue",
            example: "1: Are you ready to order? What would you like?",
            optionsList: [
              { key: "1", text: "Are you ready to order? What would you like?" },
              { key: "2", text: "Can I have a pizza, please?" },
              { key: "3", text: "And would you like anything to drink?" },
              { key: "4", text: "Yes, please. I'd like a glass of juice, please." },
              { key: "5", text: "Anything else?" },
              { key: "6", text: "No, thank you." }
            ],
            items: [
              { id: "B_6_1", label: "Line 2", prompt: "First customer reply (food choice):" },
              { id: "B_6_2", label: "Line 3", prompt: "Waiter question about drinks:" },
              { id: "B_6_3", label: "Line 4", prompt: "Customer reply about drink:" },
              { id: "B_6_4", label: "Line 5", prompt: "Waiter closing question:" },
              { id: "B_6_5", label: "Line 6", prompt: "Customer final response:" }
            ],
            answers: {
              "B_6_1": { expected: ["2", "Can I have a pizza, please?"], explanation: "Step 2: Order food." },
              "B_6_2": { expected: ["3", "And would you like anything to drink?"], explanation: "Step 3: Offer drinks." },
              "B_6_3": { expected: ["4", "Yes, please. I'd like a glass of juice, please."], explanation: "Step 4: Choose drink." },
              "B_6_4": { expected: ["5", "Anything else?"], explanation: "Step 5: Ask if anything else." },
              "B_6_5": { expected: ["6", "No, thank you."], explanation: "Step 6: Decline further items." }
            }
          }
        ]
      }
    }
  }
};
