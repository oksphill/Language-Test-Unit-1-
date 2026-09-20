/**
 * Go Getter 3 - Unit 2 Language Test
 * Shopping & Shops / Comparatives & too, enough, as
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_2_DATA = {
  id: "unit2",
  courseId: "gogetter3",
  number: 2,
  title: "Shopping & Shops",
  description: "Vocabulary: Shopping vocabulary, Types of shops. Grammar: Comparative adjectives, too / enough / as... as, Superlatives. Communication: Clothes shopping dialogue.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 2",
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
            title: "Complete the dialogue with the words in the box.",
            points: 7,
            type: "word-bank",
            wordBank: ["card", "cash", "change", "check", "list", "offer", "queue", "trolley"],
            example: "Ben: Have you got the shopping ⁰list, Sue?",
            usedInExample: ["list"],
            sentences: [
              { textBefore: "Ben: Have you got the shopping list, Sue?<br>Sue: Yes, I have. We need some apples and oranges. Let's put them in the shopping", gapId: "A_1_1", label: "1", textAfter: "." },
              { textBefore: "Ben: Oh! Look at this chocolate. It's on special", gapId: "A_1_2", label: "2", textAfter: "." },
              { textBefore: "Sue: Let's buy a bar. And can you", gapId: "A_1_3", label: "3", textAfter: "the price of that tea?" },
              { textBefore: "Ben: It's quite expensive, but Mum loves it. I think we've got everything. Let's go and stand in the", gapId: "A_1_4", label: "4", textAfter: "." },
              { textBefore: "Sue: Are you going to pay by", gapId: "A_1_5", label: "5", textAfter: "?" },
              { textBefore: "Ben: No, I prefer to pay in", gapId: "A_1_6", label: "6", textAfter: "." },
              { textBefore: "Sue: Don't forget to get your", gapId: "A_1_7", label: "7", textAfter: "." }
            ],
            answers: {
              "A_1_1": { expected: ["trolley"], explanation: "A large wheeled container at a supermarket is a shopping trolley." },
              "A_1_2": { expected: ["offer"], explanation: "Collocation: 'on special offer' (discounted price)." },
              "A_1_3": { expected: ["check"], explanation: "Collocation: 'check the price' of an item." },
              "A_1_4": { expected: ["queue"], explanation: "Collocation: 'stand in the queue' at the checkout." },
              "A_1_5": { expected: ["card"], explanation: "Pay by card (credit/debit card)." },
              "A_1_6": { expected: ["cash"], explanation: "Pay in cash (paper notes and coins)." },
              "A_1_7": { expected: ["change"], explanation: "The money returned to you when you pay with cash is change." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Read the definitions and write the names of the shops.",
            points: 5,
            type: "grammar-gap",
            example: "0 toothpaste, vitamins and shampoo — chemist's",
            context: "This shop sells...",
            items: [
              { id: "A_2_1", label: "1", before: "shoes, boots and trainers:", verb: "", after: "" },
              { id: "A_2_2", label: "2", before: "fruit and vegetables:", verb: "", after: "" },
              { id: "A_2_3", label: "3", before: "magazines and newspapers:", verb: "", after: "" },
              { id: "A_2_4", label: "4", before: "bread and cakes:", verb: "", after: "" },
              { id: "A_2_5", label: "5", before: "dresses, tops and trousers:", verb: "", after: "" }
            ],
            answers: {
              "A_2_1": { expected: ["shoe shop", "a shoe shop", "shoe store"], explanation: "A shop selling footwear is a shoe shop." },
              "A_2_2": { expected: ["greengrocer's", "greengrocer", "a greengrocer's", "greengrocers"], explanation: "A shop selling fresh fruit and vegetables is a greengrocer's." },
              "A_2_3": { expected: ["newsagent's", "newsagent", "a newsagent's", "newsagents"], explanation: "A shop selling newspapers and periodicals is a newsagent's." },
              "A_2_4": { expected: ["baker's", "baker", "a baker's", "bakery"], explanation: "A shop selling baked goods is a baker's." },
              "A_2_5": { expected: ["clothes shop", "a clothes shop", "clothing shop"], explanation: "A shop selling apparel is a clothes shop." }
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
            title: "Write sentences. Use the comparative form of the adjectives.",
            points: 4,
            type: "sentence-order",
            example: "0 the supermarket / busy / the shoe shop -> The supermarket is busier than the shoe shop.",
            items: [
              { id: "A_3_1", label: "1", prompt: "this shop / big / that shop" },
              { id: "A_3_2", label: "2", prompt: "books / expensive / magazines" },
              { id: "A_3_3", label: "3", prompt: "these jeans / stylish / those trousers" },
              { id: "A_3_4", label: "4", prompt: "my coat / warm / your jacket" }
            ],
            answers: {
              "A_3_1": { expected: ["This shop is bigger than that shop"], explanation: "Comparative of big: bigger (double 'g') + than." },
              "A_3_2": { expected: ["Books are more expensive than magazines"], explanation: "Comparative of long adjective: more expensive than (plural: books are)." },
              "A_3_3": { expected: ["These jeans are more stylish than those trousers"], explanation: "Comparative of stylish: more stylish than (jeans are plural)." },
              "A_3_4": { expected: ["My coat is warmer than your jacket"], explanation: "Comparative of warm: warmer + than." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 A car is faster / the fastest than a bicycle. -> faster",
            items: [
              { id: "A_4_1", label: "1", before: "This dress is", options: ["longer", "the longest"], after: "than that dress." },
              { id: "A_4_2", label: "2", before: "Martina is", options: ["funnier", "the funniest"], after: "person in my class." },
              { id: "A_4_3", label: "3", before: "I'm", options: ["more organised", "the most organised"], after: "than my sister." },
              { id: "A_4_4", label: "4", before: "Are you", options: ["better", "the best"], after: "dancer in your family?" }
            ],
            answers: {
              "A_4_1": { expected: ["longer"], explanation: "Followed by 'than', so use comparative: longer." },
              "A_4_2": { expected: ["the funniest"], explanation: "Superlative for one among all class members: the funniest." },
              "A_4_3": { expected: ["more organised"], explanation: "Followed by 'than', so use comparative: more organised." },
              "A_4_4": { expected: ["the best"], explanation: "Superlative for the whole family: the best." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with too, enough or as.",
            points: 5,
            type: "grammar-gap",
            example: "0 I don't like this shop. It isn't modern enough.",
            items: [
              { id: "A_5_1", label: "1", before: "I can't wear these boots. They're", verb: "", after: "small for me." },
              { id: "A_5_2", label: "2", before: "Is Marty", verb: "", after: "friendly as his sister?" },
              { id: "A_5_3", label: "3", before: "The water isn't warm", verb: "", after: "for swimming." },
              { id: "A_5_4", label: "4", before: "The chocolate cake isn't as tasty", verb: "", after: "the apple pie." },
              { id: "A_5_5", label: "5", before: "You can't buy this dress. It's", verb: "", after: "expensive." }
            ],
            answers: {
              "A_5_1": { expected: ["too"], explanation: "'Too small' means more small than desired." },
              "A_5_2": { expected: ["as"], explanation: "Equative comparison structure: 'as + adjective + as'." },
              "A_5_3": { expected: ["enough"], explanation: "'Warm enough': enough comes after adjectives." },
              "A_5_4": { expected: ["as"], explanation: "Structure: 'as tasty as'." },
              "A_5_5": { expected: ["too"], explanation: "'Too expensive' means costs more than affordable." }
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
            title: "Complete the dialogue with phrases a–f.",
            points: 5,
            type: "matching-dialogue",
            example: "Shop assistant: Good morning. ⁰b (Can I help you?)",
            optionsList: [
              { key: "a", text: "Can I try it on?" },
              { key: "b", text: "Can I help you?" },
              { key: "c", text: "Here you are." },
              { key: "d", text: "I'm looking for a dress." },
              { key: "e", text: "The changing rooms are over there." },
              { key: "f", text: "Yes, we do." }
            ],
            items: [
              { id: "A_6_1", label: "1", prompt: "Customer: [ ... ] I like this one. Do you have it in blue?" },
              { id: "A_6_2", label: "2", prompt: "Shop assistant: [ ... ] What size are you? (Customer: 10.)" },
              { id: "A_6_3", label: "3", prompt: "Shop assistant: [ ... ] (Customer: Thank you.)" },
              { id: "A_6_4", label: "4", prompt: "Customer: Thank you. [ ... ]" },
              { id: "A_6_5", label: "5", prompt: "Shop assistant: Yes, of course. [ ... ]" }
            ],
            answers: {
              "A_6_1": { expected: ["d"], explanation: "Customer starts explaining what they want: 'I'm looking for a dress.'" },
              "A_6_2": { expected: ["f"], explanation: "Answering question 'Do you have it in blue?': 'Yes, we do.'" },
              "A_6_3": { expected: ["c"], explanation: "Handing the item to customer: 'Here you are.'" },
              "A_6_4": { expected: ["a"], explanation: "Asking permission to try clothes: 'Can I try it on?'" },
              "A_6_5": { expected: ["e"], explanation: "Pointing out where to try: 'The changing rooms are over there.'" }
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
        maxScore: 12,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the dialogue with the words in the box.",
            points: 7,
            type: "word-bank",
            wordBank: ["basket", "card", "cash", "list", "price", "receipt", "special", "stand"],
            example: "Ann: Have you got the shopping ⁰list, Jim?",
            usedInExample: ["list"],
            sentences: [
              { textBefore: "Ann: Have you got the shopping list, Jim?<br>Jim: Yes, I have. We need some oranges and bananas. Can you put them in the shopping", gapId: "B_1_1", label: "1", textAfter: ", please? And can you check the" },
              { textBefore: "", gapId: "B_1_2", label: "2", textAfter: "of that coffee?" },
              { textBefore: "Ann: OK ... Oh! Look at these biscuits. They're on", gapId: "B_1_3", label: "3", textAfter: "offer." },
              { textBefore: "Jim: Let's buy some – Dad loves them.<br>Ann: Well, we've got everything now. Let's go and", gapId: "B_1_4", label: "4", textAfter: "in the queue." },
              { textBefore: "Jim: Are you going to pay in", gapId: "B_1_5", label: "5", textAfter: "?" },
              { textBefore: "Ann: No, I prefer to pay by", gapId: "B_1_6", label: "6", textAfter: "." },
              { textBefore: "Jim: Don't forget to get the", gapId: "B_1_7", label: "7", textAfter: "." }
            ],
            answers: {
              "B_1_1": { expected: ["basket"], explanation: "A shopping basket carried in hands." },
              "B_1_2": { expected: ["price"], explanation: "Collocation: 'check the price'." },
              "B_1_3": { expected: ["special"], explanation: "Collocation: 'on special offer'." },
              "B_1_4": { expected: ["stand"], explanation: "Collocation: 'stand in the queue'." },
              "B_1_5": { expected: ["cash"], explanation: "Pay in cash." },
              "B_1_6": { expected: ["card"], explanation: "Pay by card." },
              "B_1_7": { expected: ["receipt"], explanation: "A printed proof of purchase is a receipt." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Read the definitions and write the names of the shops.",
            points: 5,
            type: "grammar-gap",
            example: "0 toothpaste, vitamins and shampoo — chemist's",
            context: "This shop sells...",
            items: [
              { id: "B_2_1", label: "1", before: "newspapers and magazines:", verb: "", after: "" },
              { id: "B_2_2", label: "2", before: "tops, dresses and coats:", verb: "", after: "" },
              { id: "B_2_3", label: "3", before: "boots, shoes and trainers:", verb: "", after: "" },
              { id: "B_2_4", label: "4", before: "fruit and vegetables:", verb: "", after: "" },
              { id: "B_2_5", label: "5", before: "bread and cakes:", verb: "", after: "" }
            ],
            answers: {
              "B_2_1": { expected: ["newsagent's", "newsagent", "a newsagent's", "newsagents"], explanation: "Shop selling periodicals: newsagent's." },
              "B_2_2": { expected: ["clothes shop", "a clothes shop", "clothing store"], explanation: "Shop selling tops, dresses, coats: clothes shop." },
              "B_2_3": { expected: ["shoe shop", "a shoe shop", "shoe store"], explanation: "Shop selling footwear: shoe shop." },
              "B_2_4": { expected: ["greengrocer's", "greengrocer", "a greengrocer's", "greengrocers"], explanation: "Shop selling vegetables and fruit: greengrocer's." },
              "B_2_5": { expected: ["baker's", "baker", "a baker's", "bakery"], explanation: "Shop selling bread and baked goods: baker's." }
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
            title: "Write sentences. Use the comparative form of the adjectives.",
            points: 4,
            type: "sentence-order",
            example: "0 the supermarket / busy / the shoe shop -> The supermarket is busier than the shoe shop.",
            items: [
              { id: "B_3_1", label: "1", prompt: "your jacket / warm / my hoodie" },
              { id: "B_3_2", label: "2", prompt: "that shop / big / this shop" },
              { id: "B_3_3", label: "3", prompt: "oranges / expensive / apples" },
              { id: "B_3_4", label: "4", prompt: "those boots / stylish / these shoes" }
            ],
            answers: {
              "B_3_1": { expected: ["Your jacket is warmer than my hoodie"], explanation: "Comparative of warm: warmer + than." },
              "B_3_2": { expected: ["That shop is bigger than this shop"], explanation: "Comparative of big: bigger (double 'g') + than." },
              "B_3_3": { expected: ["Oranges are more expensive than apples"], explanation: "Comparative of expensive: more expensive than." },
              "B_3_4": { expected: ["Those boots are more stylish than these shoes"], explanation: "Comparative of stylish: more stylish than." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 A car is faster / the fastest than a bicycle. -> faster",
            items: [
              { id: "B_4_1", label: "1", before: "James is", options: ["better", "the best"], after: "singer in the class." },
              { id: "B_4_2", label: "2", before: "I'm", options: ["messier", "the messiest"], after: "person in my family." },
              { id: "B_4_3", label: "3", before: "You are", options: ["more patient", "the most patient"], after: "than your brother." },
              { id: "B_4_4", label: "4", before: "These trousers are", options: ["shorter", "the shortest"], after: "than those jeans." }
            ],
            answers: {
              "B_4_1": { expected: ["the best"], explanation: "Superlative among all class students: the best." },
              "B_4_2": { expected: ["the messiest"], explanation: "Superlative across the whole family: the messiest." },
              "B_4_3": { expected: ["more patient"], explanation: "Followed by 'than', so comparative: more patient." },
              "B_4_4": { expected: ["shorter"], explanation: "Followed by 'than', so comparative: shorter." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with too, enough or as.",
            points: 5,
            type: "grammar-gap",
            example: "0 I don't like this shop. It isn't modern enough.",
            items: [
              { id: "B_5_1", label: "1", before: "You can't wear this jacket. It's", verb: "", after: "small for you." },
              { id: "B_5_2", label: "2", before: "The film isn't as funny", verb: "", after: "the book." },
              { id: "B_5_3", label: "3", before: "I can't buy these trainers. They're", verb: "", after: "expensive." },
              { id: "B_5_4", label: "4", before: "The water isn't warm", verb: "", after: "for swimming." },
              { id: "B_5_5", label: "5", before: "Is Luke", verb: "", after: "friendly as his brother?" }
            ],
            answers: {
              "B_5_1": { expected: ["too"], explanation: "'Too small' indicates excessively small." },
              "B_5_2": { expected: ["as"], explanation: "Comparison structure: 'as funny as'." },
              "B_5_3": { expected: ["too"], explanation: "'Too expensive' indicates costs more than can be paid." },
              "B_5_4": { expected: ["enough"], explanation: "'Warm enough': enough follows adjectives." },
              "B_5_5": { expected: ["as"], explanation: "Comparison structure: 'as friendly as'." }
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
            title: "Complete the dialogue with phrases a–f.",
            points: 5,
            type: "matching-dialogue",
            example: "Shop assistant: Good afternoon. ⁰b (Can I help you?)",
            optionsList: [
              { key: "a", text: "The changing rooms are over there." },
              { key: "b", text: "Can I help you?" },
              { key: "c", text: "What size are you?" },
              { key: "d", text: "Do you have it in green?" },
              { key: "e", text: "Here you are." },
              { key: "f", text: "Can I try it on?" }
            ],
            items: [
              { id: "B_6_1", label: "1", prompt: "Customer: I'm looking for a jumper. I like this one. [ ... ]" },
              { id: "B_6_2", label: "2", prompt: "Shop assistant: Yes, we do. [ ... ] (Customer: Medium.)" },
              { id: "B_6_3", label: "3", prompt: "Shop assistant: [ ... ] (Customer: Thank you.)" },
              { id: "B_6_4", label: "4", prompt: "Customer: Thank you. [ ... ]" },
              { id: "B_6_5", label: "5", prompt: "Shop assistant: Yes, of course. [ ... ]" }
            ],
            answers: {
              "B_6_1": { expected: ["d"], explanation: "Asking about item availability: 'Do you have it in green?'" },
              "B_6_2": { expected: ["c"], explanation: "Asking customer's size: 'What size are you?'" },
              "B_6_3": { expected: ["e"], explanation: "Giving the jumper: 'Here you are.'" },
              "B_6_4": { expected: ["f"], explanation: "Asking to try: 'Can I try it on?'" },
              "B_6_5": { expected: ["a"], explanation: "Directing to changing room: 'The changing rooms are over there.'" }
            }
          }
        ]
      }
    }
  }
};
