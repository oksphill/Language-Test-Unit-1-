/**
 * Go Getter 3 - Unit 3 Language Test
 * Holidays & Travel / Past Simple Regular & Irregular
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_3_DATA = {
  id: "unit3",
  courseId: "gogetter3",
  number: 3,
  title: "Holidays & Travel",
  description: "Vocabulary: Holiday activities, get + adjective. Grammar: Past Simple affirmative, negative & questions. Communication: Asking for permission and making requests.",
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
            title: "Complete the blog post with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["camping", "guided", "explore", "guidebook", "hiking", "trips", "try"],
            example: "We always read a ⁰guidebook before we go.",
            usedInExample: ["guidebook"],
            context: "My family and I like doing a lot of activities when we go on holiday.",
            sentences: [
              { textBefore: "In winter, we visit different cities. We always read a guidebook before we go. We", gapId: "A_1_1", label: "1", textAfter: "the area and we go on day" },
              { textBefore: "", gapId: "A_1_2", label: "2", textAfter: "to interesting places. Sometimes we go on" },
              { textBefore: "", gapId: "A_1_3", label: "3", textAfter: "tours. In the evening, we" },
              { textBefore: "", gapId: "A_1_4", label: "4", textAfter: "the local food. It's usually yummy." },
              { textBefore: "In summer, we always go", gapId: "A_1_5", label: "5", textAfter: "— I love sleeping in a tent! We go" },
              { textBefore: "", gapId: "A_1_6", label: "6", textAfter: "in the mountains every day — we walk for hours." }
            ],
            answers: {
              "A_1_1": { expected: ["explore"], explanation: "Collocation: 'explore the area' (discover and look around)." },
              "A_1_2": { expected: ["trips"], explanation: "Collocation: 'go on day trips'." },
              "A_1_3": { expected: ["guided"], explanation: "Collocation: 'guided tours' (tours led by an expert)." },
              "A_1_4": { expected: ["try"], explanation: "Collocation: 'try the local food' (taste traditional dishes)." },
              "A_1_5": { expected: ["camping"], explanation: "Collocation: 'go camping' (sleeping in a tent)." },
              "A_1_6": { expected: ["hiking"], explanation: "Collocation: 'go hiking' (long walks in the mountains)." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 It's raining and I'm getting wet.",
            items: [
              { id: "A_2_1", label: "1", textBefore: "We went for a long walk and we got very", displayHint: "t _ _ _ _", placeholder: "tired", prefix: "t", textAfter: "." },
              { id: "A_2_2", label: "2", textBefore: "I need a jacket. It's getting", displayHint: "c _ _ _", placeholder: "cold", prefix: "c", textAfter: "!" },
              { id: "A_2_3", label: "3", textBefore: "The film isn't interesting and I'm getting", displayHint: "b _ _ _ _", placeholder: "bored", prefix: "b", textAfter: "." },
              { id: "A_2_4", label: "4", textBefore: "She didn't have a map and she got", displayHint: "l _ _ _", placeholder: "lost", prefix: "l", textAfter: "in the old city." }
            ],
            answers: {
              "A_2_1": { expected: ["tired"], explanation: "Walking a long distance makes you feel tired." },
              "A_2_2": { expected: ["cold"], explanation: "Needing a jacket means the weather is getting cold." },
              "A_2_3": { expected: ["bored"], explanation: "An uninteresting film makes you get bored." },
              "A_2_4": { expected: ["lost"], explanation: "Without a map in a city, you get lost." }
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
            title: "Complete the text with the Past Simple form of the verbs.",
            points: 6,
            type: "grammar-gap",
            example: "0 Emily and Arthur Spencer went (go) on holiday...",
            items: [
              { id: "A_3_1", label: "1", before: "They", verb: "leave", after: "home early in the morning. They" },
              { id: "A_3_2", label: "2", before: "", verb: "meet", after: "their friends, Julia and Basil Clifford, at the train station. The train" },
              { id: "A_3_3", label: "3", before: "", verb: "be", after: "slow. When it" },
              { id: "A_3_4", label: "4", before: "", verb: "stop", after: "at the first station, Basil" },
              { id: "A_3_5", label: "5", before: "", verb: "buy", after: "a newspaper. 'Look at this!' he said. 'Something funny" },
              { id: "A_3_6", label: "6", before: "", verb: "happen", after: "at the Hotel Blanc last night!'" }
            ],
            answers: {
              "A_3_1": { expected: ["left"], explanation: "Past Simple irregular: leave -> left." },
              "A_3_2": { expected: ["met"], explanation: "Past Simple irregular: meet -> met." },
              "A_3_3": { expected: ["was"], explanation: "Past Simple of be (singular train): was." },
              "A_3_4": { expected: ["stopped"], explanation: "Past Simple regular (double 'p'): stopped." },
              "A_3_5": { expected: ["bought"], explanation: "Past Simple irregular: buy -> bought." },
              "A_3_6": { expected: ["happened"], explanation: "Past Simple regular: happen -> happened." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences. Use the negative form of the underlined verb.",
            points: 4,
            type: "grammar-gap",
            example: "0 He went to the beach. He didn't go sightseeing.",
            items: [
              { id: "A_4_1", label: "1", before: "They <u>ate</u> some fruit. They", verb: "", after: "any sandwiches." },
              { id: "A_4_2", label: "2", before: "I <u>swam</u> in the sea. I", verb: "", after: "in the pool." },
              { id: "A_4_3", label: "3", before: "The hotel <u>was</u> expensive. It", verb: "", after: "cheap." },
              { id: "A_4_4", label: "4", before: "She <u>saw</u> dolphins in the sea. She", verb: "", after: "whales." }
            ],
            answers: {
              "A_4_1": { expected: ["didn't eat", "did not eat"], explanation: "Past Simple negative: didn't + base verb (eat)." },
              "A_4_2": { expected: ["didn't swim", "did not swim"], explanation: "Past Simple negative: didn't + base verb (swim)." },
              "A_4_3": { expected: ["wasn't", "was not"], explanation: "Negative of was: wasn't / was not." },
              "A_4_4": { expected: ["didn't see", "did not see"], explanation: "Past Simple negative: didn't + base verb (see)." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the Past Simple of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 Della: Did you and Fred enjoy (you and Fred / enjoy) your holiday in Cornwall?",
            items: [
              { id: "A_5_1", label: "1", before: "Jim: Yes, we", verb: "", after: "." },
              { id: "A_5_2", label: "2", before: "Della:", verb: "Anna / go", after: "with you?" },
              { id: "A_5_3", label: "3", before: "Jim: No, she", verb: "", after: "." },
              { id: "A_5_4", label: "4", before: "Della: How many days", verb: "you / be", after: "there?" },
              { id: "A_5_5", label: "5", before: "Jim: Ten days.<br>Della: When", verb: "you / arrive", after: "back home?" }
            ],
            answers: {
              "A_5_1": { expected: ["did"], explanation: "Short answer affirmative: 'Yes, we did.'" },
              "A_5_2": { expected: ["Did Anna go", "did Anna go"], explanation: "Past Simple question: Did + subject + base verb." },
              "A_5_3": { expected: ["didn't", "did not"], explanation: "Short answer negative: 'No, she didn't.'" },
              "A_5_4": { expected: ["were you"], explanation: "Past Simple question with be: were + you." },
              "A_5_5": { expected: ["did you arrive"], explanation: "Past Simple Wh- question: When + did + you + arrive?" }
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
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["could I", "can't", "can you", "can I borrow", "no problem", "not now"],
            example: "A: ⁰Can you bring me my sunglasses? B: Yes, no problem.",
            usedInExample: ["can you"],
            sentences: [
              { textBefore: "A: Can you bring me my sunglasses?<br>B: Yes,", gapId: "A_6_1", label: "1", textAfter: "." },
              { textBefore: "A:", gapId: "A_6_2", label: "2", textAfter: "some money from you?<br>B: Sorry, you", gapId2: "A_6_3", label2: "3", textAfter2: ". I haven't got any money." },
              { textBefore: "A:", gapId: "A_6_4", label: "4", textAfter: "use the laptop, please?<br>B:", gapId2: "A_6_5", label2: "5", textAfter2: ", sorry. I'm using it." }
            ],
            answers: {
              "A_6_1": { expected: ["no problem"], explanation: "Agreeing to help: 'Yes, no problem.'" },
              "A_6_2": { expected: ["Can I borrow", "can I borrow"], explanation: "Asking to borrow: 'Can I borrow some money from you?'" },
              "A_6_3": { expected: ["can't", "cannot"], explanation: "Refusing permission: 'Sorry, you can't.'" },
              "A_6_4": { expected: ["Could I", "could I"], explanation: "Polite request: 'Could I use the laptop, please?'" },
              "A_6_5": { expected: ["Not now", "not now"], explanation: "Declining request for current moment: 'Not now, sorry.'" }
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
            title: "Complete the blog post with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["camping", "cycling", "explore", "guidebook", "guided", "hiking", "trips"],
            example: "We always read a ⁰guidebook before we go.",
            usedInExample: ["guidebook"],
            context: "My family and I like doing a lot of activities when we go on holiday.",
            sentences: [
              { textBefore: "In summer, we usually go", gapId: "B_1_1", label: "1", textAfter: "— I love sleeping in a tent! We go" },
              { textBefore: "", gapId: "B_1_2", label: "2", textAfter: "in the mountains every day — we walk for hours. We take our bikes, so we go" },
              { textBefore: "", gapId: "B_1_3", label: "3", textAfter: "too.<br>In winter, we visit different cities. We" },
              { textBefore: "", gapId: "B_1_4", label: "4", textAfter: "the area and we go on day" },
              { textBefore: "", gapId: "B_1_5", label: "5", textAfter: "to interesting places. Sometimes we go on" },
              { textBefore: "", gapId: "B_1_6", label: "6", textAfter: "tours." }
            ],
            answers: {
              "B_1_1": { expected: ["camping"], explanation: "Collocation: 'go camping' with a tent." },
              "B_1_2": { expected: ["hiking"], explanation: "Collocation: 'go hiking' in mountains." },
              "B_1_3": { expected: ["cycling"], explanation: "Riding bikes is 'go cycling'." },
              "B_1_4": { expected: ["explore"], explanation: "Collocation: 'explore the area'." },
              "B_1_5": { expected: ["trips"], explanation: "Collocation: 'go on day trips'." },
              "B_1_6": { expected: ["guided"], explanation: "Collocation: 'guided tours'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 It's raining and I'm getting wet.",
            items: [
              { id: "B_2_1", label: "1", textBefore: "It's late and it's getting", displayHint: "d _ _ _", placeholder: "dark", prefix: "d", textAfter: ". I can't see." },
              { id: "B_2_2", label: "2", textBefore: "The film isn't interesting and I'm getting", displayHint: "b _ _ _ _", placeholder: "bored", prefix: "b", textAfter: "." },
              { id: "B_2_3", label: "3", textBefore: "We didn't have a map and we got", displayHint: "l _ _ _", placeholder: "lost", prefix: "l", textAfter: "in the old town." },
              { id: "B_2_4", label: "4", textBefore: "He went for a long walk and he got", displayHint: "t _ _ _ _", placeholder: "tired", prefix: "t", textAfter: "." }
            ],
            answers: {
              "B_2_1": { expected: ["dark"], explanation: "Late at night when you cannot see: getting dark." },
              "B_2_2": { expected: ["bored"], explanation: "An uninteresting film causes boredom: getting bored." },
              "B_2_3": { expected: ["lost"], explanation: "Without a map in town: got lost." },
              "B_2_4": { expected: ["tired"], explanation: "After a long walk: got tired." }
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
            title: "Complete the text with the Past Simple form of the verbs.",
            points: 6,
            type: "grammar-gap",
            example: "0 Harold and Dorothy Lewis went (go) on holiday...",
            items: [
              { id: "B_3_1", label: "1", before: "They", verb: "meet", after: "their friend, Charles Williams, at the train station. The train" },
              { id: "B_3_2", label: "2", before: "", verb: "leave", after: "at five minutes past seven. It" },
              { id: "B_3_3", label: "3", before: "", verb: "be", after: "very slow. At the first stop, Charles" },
              { id: "B_3_4", label: "4", before: "", verb: "buy", after: "a newspaper and" },
              { id: "B_3_5", label: "5", before: "", verb: "read", after: "the news. 'Look at this!' he said. 'Something funny" },
              { id: "B_3_6", label: "6", before: "", verb: "happen", after: "at the Hotel Bellavista last night!'" }
            ],
            answers: {
              "B_3_1": { expected: ["met"], explanation: "Past Simple irregular: meet -> met." },
              "B_3_2": { expected: ["left"], explanation: "Past Simple irregular: leave -> left." },
              "B_3_3": { expected: ["was"], explanation: "Past Simple of be (singular): was." },
              "B_3_4": { expected: ["bought"], explanation: "Past Simple irregular: buy -> bought." },
              "B_3_5": { expected: ["read"], explanation: "Past Simple irregular: read -> read (pronounced 'red')." },
              "B_3_6": { expected: ["happened"], explanation: "Past Simple regular: happen -> happened." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences. Use the negative form of the underlined verb.",
            points: 4,
            type: "grammar-gap",
            example: "0 He went to the beach. He didn't go sightseeing.",
            items: [
              { id: "B_4_1", label: "1", before: "The souvenirs <u>were</u> cheap. They", verb: "", after: "expensive." },
              { id: "B_4_2", label: "2", before: "They <u>drank</u> some water. They", verb: "", after: "any orange juice." },
              { id: "B_4_3", label: "3", before: "I <u>saw</u> fish in the sea. I", verb: "", after: "dolphins." },
              { id: "B_4_4", label: "4", before: "She <u>swam</u> in the sea. She", verb: "", after: "in the pool." }
            ],
            answers: {
              "B_4_1": { expected: ["weren't", "were not"], explanation: "Negative of were: weren't / were not." },
              "B_4_2": { expected: ["didn't drink", "did not drink"], explanation: "Past Simple negative: didn't + drink." },
              "B_4_3": { expected: ["didn't see", "did not see"], explanation: "Past Simple negative: didn't + see." },
              "B_4_4": { expected: ["didn't swim", "did not swim"], explanation: "Past Simple negative: didn't + swim." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the Past Simple of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 Mike: Did you and Liz enjoy (you and Liz / enjoy) your holiday in London?",
            items: [
              { id: "B_5_1", label: "1", before: "Tina: Yes, we", verb: "", after: "." },
              { id: "B_5_2", label: "2", before: "Mike: How many days", verb: "you / be", after: "there?<br>Tina: A week." },
              { id: "B_5_3", label: "3", before: "Mike:", verb: "Liz / take", after: "a lot of photos?" },
              { id: "B_5_4", label: "4", before: "Tina: No, she", verb: "", after: "." },
              { id: "B_5_5", label: "5", before: "Mike: When", verb: "you / come", after: "back home?" }
            ],
            answers: {
              "B_5_1": { expected: ["did"], explanation: "Short answer: 'Yes, we did.'" },
              "B_5_2": { expected: ["were you"], explanation: "Question with be in Past Simple: were + you." },
              "B_5_3": { expected: ["Did Liz take", "did Liz take"], explanation: "Past Simple question: Did + Liz + take?" },
              "B_5_4": { expected: ["didn't", "did not"], explanation: "Short answer: 'No, she didn't.'" },
              "B_5_5": { expected: ["did you come"], explanation: "Wh- question: When + did + you + come?" }
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
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["can I borrow", "can you", "Could I", "of course", "you can't", "no"],
            example: "A: ⁰Can you bring me my sunglasses? B: Yes, of course.",
            usedInExample: ["can you"],
            sentences: [
              { textBefore: "A: Can you bring me my sunglasses?<br>B: Yes,", gapId: "B_6_1", label: "1", textAfter: "." },
              { textBefore: "A:", gapId: "B_6_2", label: "2", textAfter: "use your phone, please?<br>B: Yes,", gapId2: "B_6_3", label2: "3", textAfter2: "problem." },
              { textBefore: "A:", gapId: "B_6_4", label: "4", textAfter: "some money from you?<br>B: Sorry,", gapId2: "B_6_5", label2: "5", textAfter2: ", I haven't got any money." }
            ],
            answers: {
              "B_6_1": { expected: ["of course"], explanation: "Agreeing politely: 'Yes, of course.'" },
              "B_6_2": { expected: ["Could I", "could I"], explanation: "Polite request: 'Could I use your phone, please?'" },
              "B_6_3": { expected: ["no"], explanation: "Collocation: 'no problem'." },
              "B_6_4": { expected: ["Can I borrow", "can I borrow"], explanation: "Request: 'Can I borrow some money from you?'" },
              "B_6_5": { expected: ["you can't", "you cannot"], explanation: "Polite refusal: 'Sorry, you can't, I haven't got any money.'" }
            }
          }
        ]
      }
    }
  }
};
