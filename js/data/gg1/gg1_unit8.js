/**
 * Go Getter 1 - Unit 8 Language Test
 * Sports, Health & Weather / Like + -ing, Object Pronouns & Wh- Questions
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_8_DATA = {
  id: "unit8",
  courseId: "gogetter1",
  number: 8,
  title: "Sports, Health & Weather",
  description: "Vocabulary: Sports, healthy habits, weather. Grammar: Like / love / hate + -ing, Object pronouns (me, you, him, her, it, us, them), Question words (who, what, where, when, whose, how many). Communication: Talking about the weather.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 8",
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
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            wordBank: ["cycling", "does", "goes", "hockey", "plays", "sailing", "skiing"],
            example: "We go ⁰swimming in the summer.",
            usedInExample: ["swimming"],
            sentences: [
              { textBefore: "We go swimming in the summer and we go 1", gapId: "A_1_1", label: "1", textAfter: "in the winter." },
              { textBefore: "I love outdoor sports and I play 2", gapId: "A_1_2", label: "2", textAfter: "and football." },
              { textBefore: "My sister likes indoor sports and she 3", gapId: "A_1_3", label: "3", textAfter: "taekwondo." },
              { textBefore: "My brother 4", gapId: "A_1_4", label: "4", textAfter: "tennis and he goes 5" },
              { textBefore: "on his mountain bike. My mum and dad go 6", gapId: "A_1_5", label: "5", textAfter: "" },
              { textBefore: "when the weather is good.", gapId: "A_1_6", label: "6", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["skiing"], explanation: "Go skiing in winter." },
              "A_1_2": { expected: ["hockey"], explanation: "Play hockey." },
              "A_1_3": { expected: ["does"], explanation: "Do taekwondo." },
              "A_1_4": { expected: ["plays"], explanation: "Play tennis." },
              "A_1_5": { expected: ["cycling"], explanation: "Go cycling on mountain bike." },
              "A_1_6": { expected: ["sailing"], explanation: "Go sailing." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Do you wash / brush your teeth after meals? (brush)",
            items: [
              { id: "A_2_1", label: "1", before: "Do you", after: "some exercise every day? It's good to be active.", options: ["have", "do"] },
              { id: "A_2_2", label: "2", before: "Do you", after: "a lot of water", options: ["dive", "drink"] },
              { id: "A_2_3", label: "3", before: "and", after: "fruit and vegetables?", options: ["eat", "make"] },
              { id: "A_2_4", label: "4", before: "Do you usually go", after: "bed early?", options: ["at", "to"] },
              { id: "A_2_5", label: "5", before: "Do you", after: "friends? It's good to hang out with people you love.", options: ["have", "do"] }
            ],
            answers: {
              "A_2_1": { expected: ["do"], explanation: "Do some exercise." },
              "A_2_2": { expected: ["drink"], explanation: "Drink a lot of water." },
              "A_2_3": { expected: ["eat"], explanation: "Eat fruit and vegetables." },
              "A_2_4": { expected: ["to"], explanation: "Go to bed early." },
              "A_2_5": { expected: ["have"], explanation: "Have friends." }
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
            title: "Complete the dialogue with the correct form of the verbs.",
            points: 4,
            type: "grammar-gap",
            example: "B: My brother and I like ⁰swimming (swim). We ⁰love (love) sailing too.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "My mum", verb: "not like", textAfter: "sitting on the beach." },
              { id: "A_3_2", label: "2", textBefore: "She likes", verb: "go", textAfter: "to museums." },
              { id: "A_3_3", label: "3", textBefore: "She", verb: "love", textAfter: "walking too." },
              { id: "A_3_4", label: "4", textBefore: "Dad hates the beach and he hates", verb: "get", textAfter: "wet!" }
            ],
            answers: {
              "A_3_1": { expected: ["doesn't like", "does not like"], explanation: "Mum (she): doesn't like." },
              "A_3_2": { expected: ["going"], explanation: "Like + -ing: going." },
              "A_3_3": { expected: ["loves"], explanation: "Present Simple: she loves." },
              "A_3_4": { expected: ["getting"], explanation: "Hate + -ing: getting." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with me, it, her, us, them.",
            points: 5,
            type: "grammar-gap",
            example: "0 You're my best friend and I love you.",
            items: [
              { id: "A_4_1", label: "1", textBefore: "That's a great mountain bike. I want", prompt: "object pronoun", textAfter: "!" },
              { id: "A_4_2", label: "2", textBefore: "Gina and Gino are good at dancing. Let's watch", prompt: "object pronoun", textAfter: "." },
              { id: "A_4_3", label: "3", textBefore: "Elaine is behind the door. I can't see", prompt: "object pronoun", textAfter: "." },
              { id: "A_4_4", label: "4", textBefore: "My sister and I love Mum and Dad and they love", prompt: "object pronoun", textAfter: "." },
              { id: "A_4_5", label: "5", textBefore: "I can sing. Listen to", prompt: "object pronoun", textAfter: "!" }
            ],
            answers: {
              "A_4_1": { expected: ["it"], explanation: "Mountain bike (thing) -> it." },
              "A_4_2": { expected: ["them"], explanation: "Gina and Gino (plural) -> them." },
              "A_4_3": { expected: ["her"], explanation: "Elaine (female) -> her." },
              "A_4_4": { expected: ["us"], explanation: "My sister and I (we) -> us." },
              "A_4_5": { expected: ["me"], explanation: "I -> me." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Write the questions. Use the question words in the box (what, when, where, who, whose).",
            points: 5,
            type: "sentence-order",
            example: "0 A: How many brothers have you got? B: I've got two brothers.",
            items: [
              { id: "A_5_1", label: "1", prompt: "A: _______ ? B: She has lunch at one o'clock." },
              { id: "A_5_2", label: "2", prompt: "A: _______ ? B: Henry wants to go to France." },
              { id: "A_5_3", label: "3", prompt: "A: _______ ? B: My favourite colour is green." },
              { id: "A_5_4", label: "4", prompt: "A: _______ ? B: I love my family and friends." },
              { id: "A_5_5", label: "5", prompt: "A: _______ ? B: It's Janice's horse." }
            ],
            answers: {
              "A_5_1": { expected: ["When does she have lunch?", "What time does she have lunch?"], explanation: "When does she have lunch?" },
              "A_5_2": { expected: ["Where does Henry want to go?"], explanation: "Where does Henry want to go?" },
              "A_5_3": { expected: ["What is your favourite colour?", "What's your favourite colour?"], explanation: "What is your favourite colour?" },
              "A_5_4": { expected: ["Who do you love?"], explanation: "Who do you love?" },
              "A_5_5": { expected: ["Whose horse is it?", "Whose horse is this?", "Whose is it?"], explanation: "Whose horse is it?" }
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
            title: "Look at the pictures and complete the text.",
            points: 5,
            type: "word-bank",
            imageKey: "gg1_u8_weather_a",
            example: "It's ⁰hot and sunny in summer.",
            sentences: [
              { textBefore: "It's hot and 1", gapId: "A_6_1", label: "1", textAfter: "in summer. It's 2" },
              { textBefore: "and 3", gapId: "A_6_2", label: "2", textAfter: "in autumn. It's 4" },
              { textBefore: "and 5", gapId: "A_6_3", label: "3", textAfter: "" },
              { textBefore: "in winter. It's warm in spring.", gapId: "A_6_4", label: "4", textAfter: "" },
              { textBefore: "", gapId: "A_6_5", label: "5", textAfter: "" }
            ],
            answers: {
              "A_6_1": { expected: ["sunny"], explanation: "Sun symbol: sunny." },
              "A_6_2": { expected: ["raining", "cloudy", "rainy"], explanation: "Raincloud: raining." },
              "A_6_3": { expected: ["windy"], explanation: "Wind flag: windy." },
              "A_6_4": { expected: ["cold"], explanation: "Low thermometer: cold." },
              "A_6_5": { expected: ["snowing", "snowy"], explanation: "Snowcloud: snowing." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 8",
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
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 6,
            type: "word-bank",
            wordBank: ["cycling", "does", "goes", "hockey", "plays", "sailing", "skiing"],
            example: "We go ⁰swimming in the summer.",
            usedInExample: ["swimming"],
            sentences: [
              { textBefore: "We go swimming in the summer and we go 1", gapId: "B_1_1", label: "1", textAfter: "in the winter." },
              { textBefore: "My brother likes indoor sports and he 2", gapId: "B_1_2", label: "2", textAfter: "taekwondo." },
              { textBefore: "My sister goes 3", gapId: "B_1_3", label: "3", textAfter: "on her mountain bike and she 4" },
              { textBefore: "tennis. My mum and dad go 5", gapId: "B_1_4", label: "4", textAfter: "" },
              { textBefore: "when the weather is good. I love outdoor sports and I play 6", gapId: "B_1_5", label: "5", textAfter: "" },
              { textBefore: "and football.", gapId: "B_1_6", label: "6", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["skiing"], explanation: "Go skiing in winter." },
              "B_1_2": { expected: ["does"], explanation: "Do taekwondo." },
              "B_1_3": { expected: ["cycling"], explanation: "Go cycling on mountain bike." },
              "B_1_4": { expected: ["plays"], explanation: "Play tennis." },
              "B_1_5": { expected: ["sailing"], explanation: "Go sailing." },
              "B_1_6": { expected: ["hockey"], explanation: "Play hockey." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Do you wash / brush your teeth after meals? (brush)",
            items: [
              { id: "B_2_1", label: "1", before: "Do you usually go", after: "bed early?", options: ["to", "in"] },
              { id: "B_2_2", label: "2", before: "Do you", after: "fruit and vegetables", options: ["make", "eat"] },
              { id: "B_2_3", label: "3", before: "and", after: "a lot of water?", options: ["dive", "drink"] },
              { id: "B_2_4", label: "4", before: "Do you", after: "some exercise every day? It's good to be active.", options: ["do", "have"] },
              { id: "B_2_5", label: "5", before: "Do you", after: "friends? It's good to hang out with people you love.", options: ["have", "do"] }
            ],
            answers: {
              "B_2_1": { expected: ["to"], explanation: "Go to bed early." },
              "B_2_2": { expected: ["eat"], explanation: "Eat fruit and vegetables." },
              "B_2_3": { expected: ["drink"], explanation: "Drink water." },
              "B_2_4": { expected: ["do"], explanation: "Do some exercise." },
              "B_2_5": { expected: ["have"], explanation: "Have friends." }
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
            title: "Complete the dialogue with the correct form of the verbs.",
            points: 4,
            type: "grammar-gap",
            example: "B: Lisa and I love ⁰swimming (swim). We ⁰like (like) sailing too.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "My mum likes", verb: "go", textAfter: "to museums." },
              { id: "B_3_2", label: "2", textBefore: "She", verb: "love", textAfter: "walking too." },
              { id: "B_3_3", label: "3", textBefore: "She hates", verb: "sit", textAfter: "on the beach." },
              { id: "B_3_4", label: "4", textBefore: "Dad hates the beach and he", verb: "not like", textAfter: "getting wet!" }
            ],
            answers: {
              "B_3_1": { expected: ["going"], explanation: "Likes going." },
              "B_3_2": { expected: ["loves"], explanation: "Loves walking." },
              "B_3_3": { expected: ["sitting"], explanation: "Hates sitting." },
              "B_3_4": { expected: ["doesn't like", "does not like"], explanation: "Doesn't like getting wet." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with it, us, him, them, her.",
            points: 5,
            type: "grammar-gap",
            example: "0 You're my best friend and I love you.",
            items: [
              { id: "B_4_1", label: "1", textBefore: "Dave is behind the door. You can't see", prompt: "object pronoun", textAfter: "." },
              { id: "B_4_2", label: "2", textBefore: "Kate can play the guitar. Listen to", prompt: "object pronoun", textAfter: "." },
              { id: "B_4_3", label: "3", textBefore: "This hoodie is cool. Look at", prompt: "object pronoun", textAfter: "." },
              { id: "B_4_4", label: "4", textBefore: "The children love their parents and their parents love", prompt: "object pronoun", textAfter: "." },
              { id: "B_4_5", label: "5", textBefore: "We're good at acting. Watch", prompt: "object pronoun", textAfter: "!" }
            ],
            answers: {
              "B_4_1": { expected: ["him"], explanation: "Dave (male) -> him." },
              "B_4_2": { expected: ["her"], explanation: "Kate (female) -> her." },
              "B_4_3": { expected: ["it"], explanation: "Hoodie (thing) -> it." },
              "B_4_4": { expected: ["them"], explanation: "Children (plural) -> them." },
              "B_4_5": { expected: ["us"], explanation: "We -> us." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Write the questions. Use the question words in the box (what, when, where, who, whose).",
            points: 5,
            type: "sentence-order",
            example: "0 A: How many brothers have you got? B: I've got two brothers.",
            items: [
              { id: "B_5_1", label: "1", prompt: "A: _______ ? B: He loves his grandad and granny." },
              { id: "B_5_2", label: "2", prompt: "A: _______ ? B: Our favourite colour is yellow." },
              { id: "B_5_3", label: "3", prompt: "A: _______ ? B: They're Ursula's dogs." },
              { id: "B_5_4", label: "4", prompt: "A: _______ ? B: I live in Rome." },
              { id: "B_5_5", label: "5", prompt: "A: _______ ? B: They usually have breakfast at seven o'clock." }
            ],
            answers: {
              "B_5_1": { expected: ["Who does he love?"], explanation: "Who does he love?" },
              "B_5_2": { expected: ["What is your favourite colour?", "What's your favourite colour?"], explanation: "What is your favourite colour?" },
              "B_5_3": { expected: ["Whose dogs are they?", "Whose are they?", "Whose dogs are these?"], explanation: "Whose dogs are they?" },
              "B_5_4": { expected: ["Where do you live?"], explanation: "Where do you live?" },
              "B_5_5": { expected: ["When do they have breakfast?", "What time do they have breakfast?"], explanation: "When do they have breakfast?" }
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
            title: "Look at the pictures and complete the text.",
            points: 5,
            type: "word-bank",
            imageKey: "gg1_u8_weather_b",
            example: "It's ⁰cold and snowing in winter.",
            sentences: [
              { textBefore: "It's cold and 1", gapId: "B_6_1", label: "1", textAfter: "in winter. It's warm in spring. It's 2" },
              { textBefore: "and 3", gapId: "B_6_2", label: "2", textAfter: "in summer. It's 4" },
              { textBefore: "and 5", gapId: "B_6_3", label: "3", textAfter: "" },
              { textBefore: "in autumn.", gapId: "B_6_4", label: "4", textAfter: "" },
              { textBefore: "", gapId: "B_6_5", label: "5", textAfter: "" }
            ],
            answers: {
              "B_6_1": { expected: ["snowing", "snowy"], explanation: "Snowcloud: snowing." },
              "B_6_2": { expected: ["sunny"], explanation: "Sun symbol: sunny." },
              "B_6_3": { expected: ["hot"], explanation: "High thermometer: hot." },
              "B_6_4": { expected: ["windy"], explanation: "Wind flag: windy." },
              "B_6_5": { expected: ["raining", "rainy"], explanation: "Raincloud: raining." }
            }
          }
        ]
      }
    }
  }
};
