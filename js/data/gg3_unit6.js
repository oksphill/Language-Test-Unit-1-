/**
 * Go Getter 3 - Unit 6 Language Test
 * Food & Cooking / Present Perfect (ever / never)
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_6_DATA = {
  id: "unit6",
  courseId: "gogetter3",
  number: 6,
  title: "Food & Cooking",
  description: "Vocabulary: Cooking verbs & recipes, Kitchen utensils, Flavours & adjectives. Grammar: Present Perfect affirmative, negative & questions with ever. Communication: Expressing preferences and choosing food.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 6",
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
            title: "Circle the correct answer in the recipe.",
            points: 5,
            type: "circle-choice",
            example: "0 Boil / Beat the butter and sugar together -> Beat",
            context: "Butter biscuits (100g sugar, 200g butter, 300g flour)",
            items: [
              { id: "A_1_1", label: "1", before: "together in a big", options: ["oven", "bowl"], after: "." },
              { id: "A_1_2", label: "2", before: "", options: ["Add", "Slice"], after: "the flour and" },
              { id: "A_1_3", label: "3", before: "", options: ["mix", "fry"], after: "well. Make 15 small round biscuits." },
              { id: "A_1_4", label: "4", before: "", options: ["Roast", "Bake"], after: "them in the" },
              { id: "A_1_5", label: "5", before: "", options: ["pot", "oven"], after: "(160°C) for 15–20 minutes. The biscuits are ready when they are brown." }
            ],
            answers: {
              "A_1_1": { expected: ["bowl"], explanation: "Ingredients are combined in a mixing bowl." },
              "A_1_2": { expected: ["Add"], explanation: "You add flour to the mixture." },
              "A_1_3": { expected: ["mix"], explanation: "You mix ingredients together." },
              "A_1_4": { expected: ["Bake"], explanation: "Biscuits and cakes are baked." },
              "A_1_5": { expected: ["oven"], explanation: "Baking is done inside an oven." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["fork", "glass", "mug", "pan", "spoon", "tin"],
            example: "0 Can I have a glass of water, please?",
            usedInExample: ["glass"],
            sentences: [
              { textBefore: "1 You need a cake", gapId: "A_2_1", label: "1", textAfter: "to bake a cake." },
              { textBefore: "2 You can cook eggs in a frying", gapId: "A_2_2", label: "2", textAfter: "." },
              { textBefore: "3 I always drink hot chocolate from my favourite", gapId: "A_2_3", label: "3", textAfter: "." },
              { textBefore: "4 You eat soup with a", gapId: "A_2_4", label: "4", textAfter: ", not with a", gapId2: "A_2_5", label2: "5", textAfter2: "." }
            ],
            answers: {
              "A_2_1": { expected: ["tin"], explanation: "A metal container for baking cakes: cake tin." },
              "A_2_2": { expected: ["pan"], explanation: "A shallow vessel with handle: frying pan." },
              "A_2_3": { expected: ["mug"], explanation: "A large cup for hot drinks: mug." },
              "A_2_4": { expected: ["spoon"], explanation: "Soup is eaten with a spoon." },
              "A_2_5": { expected: ["fork"], explanation: "You do not eat liquid soup with a fork." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 Mum is a great cook. All her meals are delicious.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "I don't like lemons or other", displayHint: "s _ _ _", placeholder: "sour", prefix: "s", textAfter: "fruit." },
              { id: "A_3_2", label: "2", textBefore: "There's a lot of sugar in these biscuits. They're too", displayHint: "s _ _ _ _", placeholder: "sweet", prefix: "s", textAfter: "." },
              { id: "A_3_3", label: "3", textBefore: "The restaurant has a dirty kitchen and the food is", displayHint: "d _ _ _ _ _ _ _ _ _", placeholder: "disgusting", prefix: "d", textAfter: ". Don't eat it." },
              { id: "A_3_4", label: "4", textBefore: "The pasta has tomato sauce with chillies. It's very", displayHint: "s _ _ _ _", placeholder: "spicy", prefix: "s", textAfter: "!" }
            ],
            answers: {
              "A_3_1": { expected: ["sour"], explanation: "Acidic taste of lemons: sour." },
              "A_3_2": { expected: ["sweet"], explanation: "Taste with lots of sugar: sweet." },
              "A_3_3": { expected: ["disgusting"], explanation: "Extremely unpleasant and repulsive: disgusting." },
              "A_3_4": { expected: ["spicy"], explanation: "Food with hot peppers/chillies: spicy." }
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
            title: "Complete the note with the Present Perfect form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 Andy and I have had (have) breakfast.",
            context: "Hi Mum! Andy and I have had breakfast.",
            items: [
              { id: "A_4_1", label: "1", before: "We", verb: "not clean", after: "the kitchen, but" },
              { id: "A_4_2", label: "2", before: "I", verb: "put", after: "the food back in the fridge." },
              { id: "A_4_3", label: "3", before: "Andy", verb: "not load", after: "the dishwasher," },
              { id: "A_4_4", label: "4", before: "but he", verb: "make", after: "his bed." },
              { id: "A_4_5", label: "5", before: "Gran", verb: "leave", after: "a note for you.<br>See you this evening! Love you! Sarah" }
            ],
            answers: {
              "A_4_1": { expected: ["haven't cleaned", "have not cleaned"], explanation: "Present Perfect negative plural: haven't cleaned." },
              "A_4_2": { expected: ["have put", "'ve put"], explanation: "Present Perfect irregular (put -> put): have put." },
              "A_4_3": { expected: ["hasn't loaded", "has not loaded"], explanation: "Present Perfect 3rd person singular negative: hasn't loaded." },
              "A_4_4": { expected: ["has made", "'s made"], explanation: "Present Perfect 3rd person singular irregular: has made." },
              "A_4_5": { expected: ["has left", "'s left"], explanation: "Present Perfect 3rd person singular irregular: has left." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Write the Present Perfect questions and answers.",
            points: 6,
            type: "sentence-order",
            example: "0 he / wash / the dirty floor? (✓) -> A: Has he washed the dirty floor? B: Yes, he has.",
            items: [
              { id: "A_5_1", label: "1A", prompt: "they / ever / be / on TV? (Question)" },
              { id: "A_5_2", label: "1B", prompt: "Short answer (✓)" },
              { id: "A_5_3", label: "2A", prompt: "she / buy / the vegetables? (Question)" },
              { id: "A_5_4", label: "2B", prompt: "Short answer (✓)" },
              { id: "A_5_5", label: "3A", prompt: "you / ever / eat / Mexican food? (Question)" },
              { id: "A_5_6", label: "3B", prompt: "Short answer (✗)" }
            ],
            answers: {
              "A_5_1": { expected: ["Have they ever been on TV", "Have they ever been on TV?"], explanation: "Question: Have + subject + ever + past participle (been)?" },
              "A_5_2": { expected: ["Yes, they have", "Yes they have"], explanation: "Short answer affirmative: Yes, they have." },
              "A_5_3": { expected: ["Has she bought the vegetables", "Has she bought the vegetables?"], explanation: "Question: Has + she + past participle (bought)?" },
              "A_5_4": { expected: ["Yes, she has", "Yes she has"], explanation: "Short answer affirmative: Yes, she has." },
              "A_5_5": { expected: ["Have you ever eaten Mexican food", "Have you ever eaten Mexican food?"], explanation: "Question: Have + you + ever + past participle (eaten)?" },
              "A_5_6": { expected: ["No, I haven't", "No I haven't", "No, I have not"], explanation: "Short answer negative: No, I haven't." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Would you like to / like go to the cinema? -> like to",
            items: [
              { id: "A_6_1", label: "1", before: "A: Would you like to go to the cinema or watch a DVD?<br>B: You", options: ["prefer", "choose"], after: "." },
              { id: "A_6_2", label: "2", before: "A: Pizza with mushrooms or pizza with ham?<br>B: I", options: ["like", "don't mind"], after: "." },
              { id: "A_6_3", label: "3", before: "A:", options: ["I'd like to", "I'd like"], after: "go home now.<br>B: Me too." },
              { id: "A_6_4", label: "4", before: "A: Would you", options: ["like", "mind"], after: "a salad or fruit?" },
              { id: "A_6_5", label: "5", before: "B:", options: ["I'm", "I'd prefer"], after: "fruit." }
            ],
            answers: {
              "A_6_1": { expected: ["choose"], explanation: "'You choose' lets the other person decide." },
              "A_6_2": { expected: ["don't mind"], explanation: "'I don't mind' means either option is fine." },
              "A_6_3": { expected: ["I'd like to"], explanation: "'I'd like to' is followed by a verb (go)." },
              "A_6_4": { expected: ["like"], explanation: "'Would you like a salad or fruit?' offers options." },
              "A_6_5": { expected: ["I'd prefer"], explanation: "'I'd prefer fruit' expresses preference." }
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
        maxScore: 14,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the correct answer in the recipe.",
            points: 5,
            type: "circle-choice",
            example: "0 Boil / Beat the butter and sugar together -> Beat",
            context: "Butter biscuits (100g sugar, 200g butter, 300g flour)",
            items: [
              { id: "B_1_1", label: "1", before: "together in a big", options: ["oven", "bowl"], after: "." },
              { id: "B_1_2", label: "2", before: "", options: ["Slice", "Add"], after: "the flour and" },
              { id: "B_1_3", label: "3", before: "", options: ["roast", "mix"], after: "well. Make 12 small round biscuits." },
              { id: "B_1_4", label: "4", before: "", options: ["Bake", "Fry"], after: "them in the" },
              { id: "B_1_5", label: "5", before: "", options: ["pot", "oven"], after: "(160°C) for 15–20 minutes. The biscuits are ready when they are brown." }
            ],
            answers: {
              "B_1_1": { expected: ["bowl"], explanation: "Mixing bowl." },
              "B_1_2": { expected: ["Add"], explanation: "Add flour." },
              "B_1_3": { expected: ["mix"], explanation: "Mix well." },
              "B_1_4": { expected: ["Bake"], explanation: "Bake biscuits." },
              "B_1_5": { expected: ["oven"], explanation: "Bake in the oven." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["cup", "glass", "knife", "pot", "spoon", "tin"],
            example: "0 He always drinks coffee in this cup.",
            usedInExample: ["cup"],
            sentences: [
              { textBefore: "1 Make some chicken soup in a big", gapId: "B_2_1", label: "1", textAfter: "." },
              { textBefore: "2 You need a sharp", gapId: "B_2_2", label: "2", textAfter: "to cut meat." },
              { textBefore: "3 You eat ice cream with a", gapId: "B_2_3", label: "3", textAfter: "." },
              { textBefore: "4 You need a cake", gapId: "B_2_4", label: "4", textAfter: "to bake a cake." },
              { textBefore: "5 I always have a", gapId: "B_2_5", label: "5", textAfter: "of orange juice for breakfast." }
            ],
            answers: {
              "B_2_1": { expected: ["pot"], explanation: "Large cooking container for soup: pot." },
              "B_2_2": { expected: ["knife"], explanation: "Utensil for cutting: sharp knife." },
              "B_2_3": { expected: ["spoon"], explanation: "You eat ice cream with a spoon." },
              "B_2_4": { expected: ["tin"], explanation: "A cake tin for baking." },
              "B_2_5": { expected: ["glass"], explanation: "A glass of orange juice." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 Mum is a great cook. All her meals are delicious.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "Put some salt on this popcorn. It isn't", displayHint: "s _ _ _ _", placeholder: "salty", prefix: "s", textAfter: "enough." },
              { id: "B_3_2", label: "2", textBefore: "The pizza has chillies on it. It's too", displayHint: "s _ _ _ _", placeholder: "spicy", prefix: "s", textAfter: "for me." },
              { id: "B_3_3", label: "3", textBefore: "The fish smells really bad. It's", displayHint: "d _ _ _ _ _ _ _ _ _", placeholder: "disgusting", prefix: "d", textAfter: "." },
              { id: "B_3_4", label: "4", textBefore: "Green apples, and lemons are", displayHint: "s _ _ _", placeholder: "sour", prefix: "s", textAfter: "." }
            ],
            answers: {
              "B_3_1": { expected: ["salty"], explanation: "Taste of salt: salty." },
              "B_3_2": { expected: ["spicy"], explanation: "Taste of chillies: spicy." },
              "B_3_3": { expected: ["disgusting"], explanation: "Smelling awful: disgusting." },
              "B_3_4": { expected: ["sour"], explanation: "Taste of lemons: sour." }
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
            title: "Complete the note with the Present Perfect form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 Cindy and I have had (have) our breakfast.",
            context: "Hi Mum! Cindy and I have had our breakfast.",
            items: [
              { id: "B_4_1", label: "1", before: "Cindy", verb: "make", after: "a pie for you and Dad. She" },
              { id: "B_4_2", label: "2", before: "", verb: "not put", after: "in the fridge, she" },
              { id: "B_4_3", label: "3", before: "", verb: "leave", after: "it in the oven. We" },
              { id: "B_4_4", label: "4", before: "", verb: "not clean", after: "the kitchen but I" },
              { id: "B_4_5", label: "5", before: "", verb: "load", after: "the dishwasher.<br>See you later! Love you! Jack" }
            ],
            answers: {
              "B_4_1": { expected: ["has made", "'s made"], explanation: "Present Perfect 3rd person singular: has made." },
              "B_4_2": { expected: ["hasn't put", "has not put"], explanation: "Present Perfect negative: hasn't put (put -> put)." },
              "B_4_3": { expected: ["has left", "'s left"], explanation: "Present Perfect: has left (leave -> left)." },
              "B_4_4": { expected: ["haven't cleaned", "have not cleaned"], explanation: "Present Perfect plural negative: haven't cleaned." },
              "B_4_5": { expected: ["have loaded", "'ve loaded"], explanation: "Present Perfect 1st person singular: have loaded." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Write the Present Perfect questions and answers.",
            points: 6,
            type: "sentence-order",
            example: "0 he / wash / the dirty floor? (✓) -> A: Has he washed the dirty floor? B: Yes, he has.",
            items: [
              { id: "B_5_1", label: "1A", prompt: "you / ever / be / on TV? (Question)" },
              { id: "B_5_2", label: "1B", prompt: "Short answer (✗)" },
              { id: "B_5_3", label: "2A", prompt: "they / ever / eat / pasta with pesto? (Question)" },
              { id: "B_5_4", label: "2B", prompt: "Short answer (✗)" },
              { id: "B_5_5", label: "3A", prompt: "she / buy / the fruit? (Question)" },
              { id: "B_5_6", label: "3B", prompt: "Short answer (✓)" }
            ],
            answers: {
              "B_5_1": { expected: ["Have you ever been on TV", "Have you ever been on TV?"], explanation: "Question: Have you ever been on TV?" },
              "B_5_2": { expected: ["No, I haven't", "No I haven't", "No, I have not"], explanation: "Negative answer: No, I haven't." },
              "B_5_3": { expected: ["Have they ever eaten pasta with pesto", "Have they ever eaten pasta with pesto?"], explanation: "Question: Have they ever eaten pasta with pesto?" },
              "B_5_4": { expected: ["No, they haven't", "No they haven't", "No, they have not"], explanation: "Negative answer: No, they haven't." },
              "B_5_5": { expected: ["Has she bought the fruit", "Has she bought the fruit?"], explanation: "Question: Has she bought the fruit?" },
              "B_5_6": { expected: ["Yes, she has", "Yes she has"], explanation: "Affirmative answer: Yes, she has." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Would you like to / like go to the cinema? -> like to",
            items: [
              { id: "B_6_1", label: "1", before: "A: Would you like to go to the cinema or watch a DVD?<br>B: I", options: ["don't mind", "choose"], after: "." },
              { id: "B_6_2", label: "2", before: "A: Would you", options: ["like", "like to"], after: "fish or meat?" },
              { id: "B_6_3", label: "3", before: "B:", options: ["I'm", "I'd prefer"], after: "fish, please." },
              { id: "B_6_4", label: "4", before: "A: Eggs with ham or tomatoes?<br>B: You", options: ["choose", "like"], after: "." },
              { id: "B_6_5", label: "5", before: "A:", options: ["I prefer", "I'd like to"], after: "have lunch now.<br>B: Me too." }
            ],
            answers: {
              "B_6_1": { expected: ["don't mind"], explanation: "'I don't mind' indicates both options are acceptable." },
              "B_6_2": { expected: ["like"], explanation: "'Would you like noun or noun?' (fish or meat)." },
              "B_6_3": { expected: ["I'd prefer"], explanation: "'I'd prefer fish, please.'" },
              "B_6_4": { expected: ["choose"], explanation: "'You choose' lets the speaker pick." },
              "B_6_5": { expected: ["I'd like to"], explanation: "'I'd like to have lunch now.'" }
            }
          }
        ]
      }
    }
  }
};
