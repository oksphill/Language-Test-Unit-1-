/**
 * Go Getter 3 - Mid-Year Test (Units 1–4)
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 * Total Points: 50 (Vocabulary: 15, Grammar: 15, Listening: 6, Communication: 8, Reading: 6)
 */

window.GG3_MID_YEAR_DATA = {
  id: "mid_year",
  courseId: "gogetter3",
  number: "1-4",
  title: "Mid-Year Test (Units 1–4)",
  description: "Comprehensive mid-year assessment covering Units 1–4: Vocabulary, Grammar, Audio Listening (Track 10), Everyday Communication, and Reading.",
  points: 50,

  variantA: {
    id: "variantA",
    title: "Mid-Year Test A — Units 1–4",
    totalPoints: 50,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            context: "Kids, please don't forget to do the chores!",
            example: "0 Load / Set the dishwasher after breakfast. -> Load",
            items: [
              { id: "MY_A_1_1", label: "1", before: "", options: ["Iron", "Hang out"], after: "the washing in the garden." },
              { id: "MY_A_1_2", label: "2", before: "We need some things from the supermarket. The shopping", options: ["list", "note"], after: "is on the table." },
              { id: "MY_A_1_3", label: "3", before: "", options: ["Check", "Pay"], after: "the prices before you buy things, and don't buy the most expensive ones!" },
              { id: "MY_A_1_4", label: "4", before: "Don't buy the bread from the supermarket. Go to the", options: ["chemist's", "baker's"], after: "." },
              { id: "MY_A_1_5", label: "5", before: "And go to the", options: ["greengrocer's", "newsagent's"], after: "for the potatoes and fruit." }
            ],
            answers: {
              "MY_A_1_1": { expected: ["Hang out"], explanation: "Collocation: 'Hang out the washing in the garden'." },
              "MY_A_1_2": { expected: ["list"], explanation: "Collocation: 'shopping list'." },
              "MY_A_1_3": { expected: ["Check"], explanation: "'Check the prices before you buy things'." },
              "MY_A_1_4": { expected: ["baker's"], explanation: "You buy bread at the baker's." },
              "MY_A_1_5": { expected: ["greengrocer's"], explanation: "You buy potatoes and fruit at the greengrocer's." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["boat", "bored", "get", "guided", "hiking", "messy"],
            example: "My parents love going on ⁰guided tours...",
            usedInExample: ["guided"],
            context: "Dear Angela, I have a problem. I don't like going on holiday with my family.",
            sentences: [
              { textBefore: "My parents love going on guided tours or", gapId: "MY_A_2_1", label: "1", textAfter: "in the mountains. I don't. We walk for hours and I" },
              { textBefore: "", gapId: "MY_A_2_2", label: "2", textAfter: "tired. My brother wants to do different things all the time because he gets" },
              { textBefore: "", gapId: "MY_A_2_3", label: "3", textAfter: "easily. He wants to do water sports, go on" },
              { textBefore: "", gapId: "MY_A_2_4", label: "4", textAfter: "trips, go cycling … I just want to sit on the beach quietly. My sister and I share a hotel room, but she's" },
              { textBefore: "", gapId: "MY_A_2_5", label: "5", textAfter: ". She leaves her clothes on the floor. It's terrible! What can I do? — Emma" }
            ],
            answers: {
              "MY_A_2_1": { expected: ["hiking"], explanation: "Walking in the mountains: 'hiking'." },
              "MY_A_2_2": { expected: ["get"], explanation: "Collocation: 'get tired'." },
              "MY_A_2_3": { expected: ["bored"], explanation: "Collocation: 'gets bored easily'." },
              "MY_A_2_4": { expected: ["boat"], explanation: "Compound noun: 'boat trips'." },
              "MY_A_2_5": { expected: ["messy"], explanation: "Leaving clothes on the floor: 'she's messy'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the text.",
            points: 5,
            type: "letter-hint",
            example: "0 I tu rn it on when I get up...",
            items: [
              { id: "MY_A_3_1", label: "1", textBefore: "I've got lots of useful", displayHint: "a _ _ s", placeholder: "apps", prefix: "a", textAfter: "on it and I download new ones every month. I change the" },
              { id: "MY_A_3_2", label: "2", textBefore: "", displayHint: "r _ _ _ _ _ _ e", placeholder: "ringtone", prefix: "r", textAfter: "of my phone every week. I always carry my portable" },
              { id: "MY_A_3_3", label: "3", textBefore: "", displayHint: "c _ _ _ _ _ r", placeholder: "charger", prefix: "c", textAfter: "with me because I don't want the battery to die. Another thing I like is the" },
              { id: "MY_A_3_4", label: "4", textBefore: "", displayHint: "r _ _ _ _ e", placeholder: "remote", prefix: "r", textAfter: "control for our smart TV. Once we lost it and it was terrible! And of course, I love my games" },
              { id: "MY_A_3_5", label: "5", textBefore: "", displayHint: "c _ _ _ _ _ e", placeholder: "console", prefix: "c", textAfter: ". I spend a lot of time playing computer games!" }
            ],
            answers: {
              "MY_A_3_1": { expected: ["apps"], explanation: "Applications downloaded on a smartphone: 'apps'." },
              "MY_A_3_2": { expected: ["ringtone"], explanation: "Sound a phone makes when someone calls: 'ringtone'." },
              "MY_A_3_3": { expected: ["charger"], explanation: "Device to recharge battery: 'portable charger'." },
              "MY_A_3_4": { expected: ["remote"], explanation: "Device to control TV: 'remote control'." },
              "MY_A_3_5": { expected: ["console"], explanation: "Machine for playing video games: 'games console'." }
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
            id: "task_4",
            number: 4,
            title: "Complete the text with the Present Simple or the Present Continuous form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 I go (go) to the shopping centre every Saturday.",
            items: [
              { id: "MY_A_4_1", label: "1", before: "Right now, I", verb: "look", after: "at some jeans in a clothes shop." },
              { id: "MY_A_4_2", label: "2", before: "I also", verb: "need", after: "a new jacket." },
              { id: "MY_A_4_3", label: "3", before: "My sister is at the shopping centre too. She", verb: "not like", after: "clothes shops," },
              { id: "MY_A_4_4", label: "4", before: "so at the moment she", verb: "wait", after: "for me at a café." },
              { id: "MY_A_4_5", label: "5", before: "What about you?", verb: "you / spend", after: "a lot of time in shops?" }
            ],
            answers: {
              "MY_A_4_1": { expected: ["am looking", "'m looking"], explanation: "'Right now' indicates an action in progress: am looking." },
              "MY_A_4_2": { expected: ["need"], explanation: "'Need' is a stative verb: Present Simple (need)." },
              "MY_A_4_3": { expected: ["doesn't like", "does not like"], explanation: "'Like' is a stative verb in the negative: doesn't like." },
              "MY_A_4_4": { expected: ["is waiting", "'s waiting"], explanation: "'At the moment' indicates an action happening right now: is waiting." },
              "MY_A_4_5": { expected: ["Do you spend", "do you spend"], explanation: "General question about habits: Do you spend." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the correct form of the adjective in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 A microwave oven is more useful (useful) than a blender.",
            items: [
              { id: "MY_A_5_1", label: "1", before: "I think this is", verb: "funny", after: "programme on TV." },
              { id: "MY_A_5_2", label: "2", before: "I'm not as", verb: "organised", after: "as him." },
              { id: "MY_A_5_3", label: "3", before: "This smartphone is", verb: "good", after: "than that one." },
              { id: "MY_A_5_4", label: "4", before: "I don't like this bag. It isn't", verb: "big", after: "enough." },
              { id: "MY_A_5_5", label: "5", before: "This is", verb: "stylish", after: "coat in the shop." }
            ],
            answers: {
              "MY_A_5_1": { expected: ["the funniest", "funniest"], explanation: "Superlative of funny: the funniest." },
              "MY_A_5_2": { expected: ["organised", "organized"], explanation: "As ... as structure takes the base adjective: as organised as." },
              "MY_A_5_3": { expected: ["better"], explanation: "Comparative of good: better than." },
              "MY_A_5_4": { expected: ["big"], explanation: "Adjective + enough: big enough." },
              "MY_A_5_5": { expected: ["the most stylish", "most stylish"], explanation: "Superlative of stylish: the most stylish." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Where was / were you yesterday at four o'clock? -> were",
            items: [
              { id: "MY_A_6_1", label: "1", before: "We", options: ["come", "came"], after: "home late last night." },
              { id: "MY_A_6_2", label: "2", before: "", options: ["Was", "Did"], after: "Bill finish his homework early yesterday?" },
              { id: "MY_A_6_3", label: "3", before: "What was John", options: ["do", "doing"], after: "last night at eight o'clock?" },
              { id: "MY_A_6_4", label: "4", before: "Mary", options: ["looked", "was looking"], after: "for a new dress when I saw her." },
              { id: "MY_A_6_5", label: "5", before: "The children", options: ["didn't have", "had"], after: "a good time at the beach because it was too hot." }
            ],
            answers: {
              "MY_A_6_1": { expected: ["came"], explanation: "Past Simple of come with 'last night': came." },
              "MY_A_6_2": { expected: ["Did"], explanation: "Past Simple question with base verb finish: Did Bill finish." },
              "MY_A_6_3": { expected: ["doing"], explanation: "Past Continuous question: was John doing." },
              "MY_A_6_4": { expected: ["was looking"], explanation: "Ongoing past action interrupted by 'when I saw her': was looking." },
              "MY_A_6_5": { expected: ["didn't have"], explanation: "Negative reason: didn't have a good time because it was too hot." }
            }
          }
        ]
      },

      listening: {
        id: "listening",
        title: "Listening",
        maxScore: 6,
        tasks: [
          {
            id: "task_7",
            number: 7,
            title: "Listen to Linda and her big brother Adam and complete the sentences. Use one or two words or a number.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/gg3_track_10_mid_year.mp3",
            audioTitle: "Track 10 • Mid-Year Test (Units 1–4) • Exercise 7",
            audioDesc: "Listen to Linda and her big brother Adam talking before going to town.",
            example: "0 Adam tells Linda to put away her clothes.",
            items: [
              { id: "MY_A_7_1", label: "1", before: "Linda thinks Adam is very", after: "." },
              { id: "MY_A_7_2", label: "2", before: "Linda didn't make", after: "yesterday." },
              { id: "MY_A_7_3", label: "3", before: "Linda lost her", after: "in Italy." },
              { id: "MY_A_7_4", label: "4", before: "USB sticks cost £", after: "this week." },
              { id: "MY_A_7_5", label: "5", before: "Linda can't pay", after: "because she doesn't have enough money." },
              { id: "MY_A_7_6", label: "6", before: "The newsagent's is next to the", after: "." }
            ],
            answers: {
              "MY_A_7_1": { expected: ["bossy"], explanation: "In recording: 'Stop telling me what to do, Adam. You're so bossy!'" },
              "MY_A_7_2": { expected: ["her bed", "bed"], explanation: "In recording: 'You didn't make your bed yesterday or the day before.'" },
              "MY_A_7_3": { expected: ["electric toothbrush", "toothbrush"], explanation: "In recording: 'it was your electric toothbrush. How can you lose a toothbrush?'" },
              "MY_A_7_4": { expected: ["4.99", "4,99"], explanation: "In recording: 'They were £6.99, but now they're £4.99.'" },
              "MY_A_7_5": { expected: ["in cash", "cash"], explanation: "In recording: 'I don't have enough money to pay in cash.'" },
              "MY_A_7_6": { expected: ["sports shop", "sport shop"], explanation: "In recording: 'the one next to the sports shop.'" }
            }
          }
        ]
      },

      communication: {
        id: "communication",
        title: "Communication",
        maxScore: 8,
        tasks: [
          {
            id: "task_8",
            number: 8,
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 8,
            type: "word-bank",
            wordBank: ["a shame", "busy", "can I", "could you", "here you are", "no problem", "that's fine", "upset", "what size"],
            example: "0 A: Can you open the door for me, please? B: No problem.",
            usedInExample: ["no problem"],
            sentences: [
              { textBefore: "1 A: Do you need any help with that box? It's very heavy!<br>B: No,", gapId: "MY_A_8_1", label: "1", textAfter: ", thank you." },
              { textBefore: "2 A:", gapId: "MY_A_8_2", label: "2", textAfter: "help you?<br>B: No, thanks, I'm just looking." },
              { textBefore: "3 A:", gapId: "MY_A_8_3", label: "3", textAfter: "are you?<br>B: Medium, I think." },
              { textBefore: "4 A: Do you have these shoes in black?<br>B: Yes, we do.", gapId: "MY_A_8_4", label: "4", textAfter: "." },
              { textBefore: "5 A:", gapId: "MY_A_8_5", label: "5", textAfter: "drive me to the park, please?<br>B: Not now, sorry. I'm", gapId2: "MY_A_8_6", label2: "6", textAfter2: "." },
              { textBefore: "6 A: You look", gapId: "MY_A_8_7", label: "7", textAfter: ". What happened?<br>B: I didn't pass my Maths test.<br>A: That's", gapId2: "MY_A_8_8", label2: "8", textAfter2: "." }
            ],
            answers: {
              "MY_A_8_1": { expected: ["that's fine", "thats fine"], explanation: "Polite declining: 'No, that's fine, thank you.'" },
              "MY_A_8_2": { expected: ["Can I", "can I"], explanation: "Shop assistant offer: 'Can I help you?'" },
              "MY_A_8_3": { expected: ["What size", "what size"], explanation: "Asking clothes size: 'What size are you?'" },
              "MY_A_8_4": { expected: ["Here you are", "here you are"], explanation: "Handing an item: 'Here you are.'" },
              "MY_A_8_5": { expected: ["Could you", "could you"], explanation: "Polite request: 'Could you drive me to the park, please?'" },
              "MY_A_8_6": { expected: ["busy"], explanation: "Refusing request because busy: 'Not now, sorry. I'm busy.'" },
              "MY_A_8_7": { expected: ["upset"], explanation: "Noticing sad emotion: 'You look upset.'" },
              "MY_A_8_8": { expected: ["a shame"], explanation: "Expressing sympathy: 'That's a shame.'" }
            }
          }
        ]
      },

      reading: {
        id: "reading",
        title: "Reading",
        maxScore: 6,
        tasks: [
          {
            id: "task_9",
            number: 9,
            title: "Read Matt's blog post about his holiday and circle T (true) or F (false).",
            points: 6,
            type: "reading-tf-ds",
            passageTitle: "Our holiday by Matt Atkinson",
            passage: `We didn't go on holiday last August because Dad had too much work. We stayed at home. We sometimes visited Granny and Grandad in the country at the weekend.

Then one evening, we were sitting near the fire. It was cold and dark. Suddenly, Dad said to Mum: 'We didn't have a summer holiday. Let's go to a warm country for ten days!' 'That's a wonderful idea!' said Mum. So we bought tickets to Jamaica!

We arrived there late on Saturday night and took a taxi to our hotel. It had a big swimming pool and the beach was a hundred metres away.

The next day, Mum and I went snorkelling. We were swimming in the warm water when we saw some dolphins. Dad and my sister stayed at the hotel. They swam in the pool and read books all day.

We did other things too. We went sightseeing, and in the evening we listened to reggae – that's Jamaican music. It was too hot to go hiking in the Blue Mountains, but we went on a boat trip on the Martha Brae River. Our guide was a friendly man and he told us about the animals and birds we saw.

It was the best holiday of my life!`,
            example: "0 Matt stayed at home last August because his dad had too much work. -> T",
            items: [
              { id: "MY_A_9_1", label: "1", statement: "He never visited his grandparents.", options: ["T", "F"] },
              { id: "MY_A_9_2", label: "2", statement: "Matt's grandparents live in the country.", options: ["T", "F"] },
              { id: "MY_A_9_3", label: "3", statement: "The holiday in a warm country was Mum's idea.", options: ["T", "F"] },
              { id: "MY_A_9_4", label: "4", statement: "Matt and his family arrived in Jamaica at the weekend.", options: ["T", "F"] },
              { id: "MY_A_9_5", label: "5", statement: "Matt and his mum saw dolphins one day.", options: ["T", "F"] },
              { id: "MY_A_9_6", label: "6", statement: "Matt and his family went hiking in Jamaica.", options: ["T", "F"] }
            ],
            answers: {
              "MY_A_9_1": { expected: ["F"], explanation: "False: 'We sometimes visited Granny and Grandad...'" },
              "MY_A_9_2": { expected: ["T"], explanation: "True: '...in the country at the weekend.'" },
              "MY_A_9_3": { expected: ["F"], explanation: "False: It was Dad's idea: 'Suddenly, Dad said to Mum: Let's go...'" },
              "MY_A_9_4": { expected: ["T"], explanation: "True: 'We arrived there late on Saturday night...'" },
              "MY_A_9_5": { expected: ["T"], explanation: "True: '...we were swimming in the warm water when we saw some dolphins.'" },
              "MY_A_9_6": { expected: ["F"], explanation: "False: 'It was too hot to go hiking in the Blue Mountains...'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Mid-Year Test B — Units 1–4",
    totalPoints: 50,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            context: "Kids, please don't forget to do the chores!",
            example: "0 Load / Set the dishwasher after breakfast. -> Load",
            items: [
              { id: "MY_B_1_1", label: "1", before: "", options: ["Hang", "Put away"], after: "the clean clothes in your rooms." },
              { id: "MY_B_1_2", label: "2", before: "We need some things from the supermarket. Take the big shopping", options: ["bag", "queue"], after: "with you." },
              { id: "MY_B_1_3", label: "3", before: "There's some money on the kitchen table. Don't forget to get a", options: ["cashier", "receipt"], after: "for the things." },
              { id: "MY_B_1_4", label: "4", before: "Don't buy the fruit from the supermarket. Go to the", options: ["greengrocer's", "chemist's"], after: "." },
              { id: "MY_B_1_5", label: "5", before: "And go to the", options: ["newsagent's", "baker's"], after: "for the bread." }
            ],
            answers: {
              "MY_B_1_1": { expected: ["Put away"], explanation: "Collocation: 'Put away the clean clothes in your rooms'." },
              "MY_B_1_2": { expected: ["bag"], explanation: "Collocation: 'shopping bag'." },
              "MY_B_1_3": { expected: ["receipt"], explanation: "Proof of purchase: 'receipt'." },
              "MY_B_1_4": { expected: ["greengrocer's"], explanation: "Buy fruit at the greengrocer's." },
              "MY_B_1_5": { expected: ["baker's"], explanation: "Buy bread at the baker's." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["bored", "explore", "get", "guided", "tidy", "trips"],
            example: "My sister and I share a hotel room, but she isn't ⁰tidy.",
            usedInExample: ["tidy"],
            context: "Dear Nina, I have a problem. I don't like going on holiday with my family.",
            sentences: [
              { textBefore: "My sister and I share a hotel room, but she isn't tidy. I hate it when she leaves her clothes on the floor. My brother gets", gapId: "MY_B_2_1", label: "1", textAfter: "easily, so he wants to do different things all the time. He wants to go on boat" },
              { textBefore: "", gapId: "MY_B_2_2", label: "2", textAfter: ", go cycling, go hiking … He wants to" },
              { textBefore: "", gapId: "MY_B_2_3", label: "3", textAfter: "the area, but I don't. I" },
              { textBefore: "", gapId: "MY_B_2_4", label: "4", textAfter: "lost easily. My parents love going on" },
              { textBefore: "", gapId: "MY_B_2_5", label: "5", textAfter: "tours and I want to relax on holiday. What can I do? — Tessa" }
            ],
            answers: {
              "MY_B_2_1": { expected: ["bored"], explanation: "Collocation: 'gets bored easily'." },
              "MY_B_2_2": { expected: ["trips"], explanation: "Compound noun: 'boat trips'." },
              "MY_B_2_3": { expected: ["explore"], explanation: "Verb: 'explore the area'." },
              "MY_B_2_4": { expected: ["get"], explanation: "Collocation: 'get lost easily'." },
              "MY_B_2_5": { expected: ["guided"], explanation: "Compound noun: 'guided tours'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the text.",
            points: 5,
            type: "letter-hint",
            example: "0 I tu rn it on when I get up...",
            items: [
              { id: "MY_B_3_1", label: "1", textBefore: "I always have my portable", displayHint: "c _ _ _ _ _ r", placeholder: "charger", prefix: "c", textAfter: "with me because I don't want the battery to die. I change the" },
              { id: "MY_B_3_2", label: "2", textBefore: "", displayHint: "r _ _ _ _ _ _ e", placeholder: "ringtone", prefix: "r", textAfter: "of my phone every week. I've got lots of useful" },
              { id: "MY_B_3_3", label: "3", textBefore: "", displayHint: "a _ _ s", placeholder: "apps", prefix: "a", textAfter: "on it and I download new ones every month. I also like my games" },
              { id: "MY_B_3_4", label: "4", textBefore: "", displayHint: "c _ _ _ _ _ e", placeholder: "console", prefix: "c", textAfter: ". I spend a lot of time playing computer games! Another thing I like is the" },
              { id: "MY_B_3_5", label: "5", textBefore: "", displayHint: "r _ _ _ _ e", placeholder: "remote", prefix: "r", textAfter: "control for our smart TV. Once we lost it and it was terrible!" }
            ],
            answers: {
              "MY_B_3_1": { expected: ["charger"], explanation: "Portable charger." },
              "MY_B_3_2": { expected: ["ringtone"], explanation: "Phone ringtone." },
              "MY_B_3_3": { expected: ["apps"], explanation: "Useful apps." },
              "MY_B_3_4": { expected: ["console"], explanation: "Games console." },
              "MY_B_3_5": { expected: ["remote"], explanation: "Remote control." }
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
            id: "task_4",
            number: 4,
            title: "Complete the text with the Present Simple or the Present Continuous form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 I go (go) to the shopping centre every Saturday.",
            items: [
              { id: "MY_B_4_1", label: "1", before: "I", verb: "want", after: "some new clothes for the summer, and right now I" },
              { id: "MY_B_4_2", label: "2", before: "", verb: "try", after: "on a pair of jeans in a clothes shop." },
              { id: "MY_B_4_3", label: "3", before: "My friend is at the shopping centre too. He", verb: "not need", after: "any new clothes," },
              { id: "MY_B_4_4", label: "4", before: "so at the moment he", verb: "wait", after: "for me at a café." },
              { id: "MY_B_4_5", label: "5", before: "What about you?", verb: "you / spend", after: "a lot of time in shops?" }
            ],
            answers: {
              "MY_B_4_1": { expected: ["want"], explanation: "'Want' is a stative verb: Present Simple (want)." },
              "MY_B_4_2": { expected: ["am trying", "'m trying"], explanation: "'Right now' indicates an action in progress: am trying." },
              "MY_B_4_3": { expected: ["doesn't need", "does not need"], explanation: "'Need' is a stative verb in the negative: doesn't need." },
              "MY_B_4_4": { expected: ["is waiting", "'s waiting"], explanation: "'At the moment' indicates an action in progress: is waiting." },
              "MY_B_4_5": { expected: ["Do you spend", "do you spend"], explanation: "General question about habits: Do you spend." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the correct form of the adjective in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 A microwave oven is more useful (useful) than a blender.",
            items: [
              { id: "MY_B_5_1", label: "1", before: "Your problem is", verb: "bad", after: "than my problem." },
              { id: "MY_B_5_2", label: "2", before: "Today is", verb: "happy", after: "day of my life." },
              { id: "MY_B_5_3", label: "3", before: "This is", verb: "stylish", after: "bag in the shop." },
              { id: "MY_B_5_4", label: "4", before: "He can't buy that hat. It isn't", verb: "big", after: "enough." },
              { id: "MY_B_5_5", label: "5", before: "They aren't as", verb: "patient", after: "as her." }
            ],
            answers: {
              "MY_B_5_1": { expected: ["worse"], explanation: "Comparative of bad: worse than." },
              "MY_B_5_2": { expected: ["the happiest", "happiest"], explanation: "Superlative of happy: the happiest." },
              "MY_B_5_3": { expected: ["the most stylish", "most stylish"], explanation: "Superlative of stylish: the most stylish." },
              "MY_B_5_4": { expected: ["big"], explanation: "Adjective + enough: big enough." },
              "MY_B_5_5": { expected: ["patient"], explanation: "As ... as structure: as patient as." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Where was / were you yesterday at four o'clock? -> were",
            items: [
              { id: "MY_B_6_1", label: "1", before: "We", options: ["get", "got"], after: "up very early yesterday morning." },
              { id: "MY_B_6_2", label: "2", before: "What was Jack", options: ["do", "doing"], after: "last night at seven o'clock?" },
              { id: "MY_B_6_3", label: "3", before: "", options: ["Was", "Did"], after: "Emma come home late last night?" },
              { id: "MY_B_6_4", label: "4", before: "The children", options: ["didn't play", "played"], after: "volleyball at the beach because it was too hot." },
              { id: "MY_B_6_5", label: "5", before: "Julia", options: ["bought", "was buying"], after: "a new coat when I saw her." }
            ],
            answers: {
              "MY_B_6_1": { expected: ["got"], explanation: "Past Simple of get: got up." },
              "MY_B_6_2": { expected: ["doing"], explanation: "Past Continuous question: was Jack doing." },
              "MY_B_6_3": { expected: ["Did"], explanation: "Past Simple question: Did Emma come." },
              "MY_B_6_4": { expected: ["didn't play"], explanation: "Negative statement: didn't play." },
              "MY_B_6_5": { expected: ["was buying"], explanation: "Past Continuous interrupted action: was buying." }
            }
          }
        ]
      },

      listening: {
        id: "listening",
        title: "Listening",
        maxScore: 6,
        tasks: [
          {
            id: "task_7",
            number: 7,
            title: "Listen to Linda and her big brother Adam and complete the sentences. Use one or two words or a number.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/gg3_track_10_mid_year.mp3",
            audioTitle: "Track 10 • Mid-Year Test (Units 1–4) • Exercise 7",
            audioDesc: "Listen to Linda and her big brother Adam talking before going to town.",
            example: "0 Adam tells Linda to put away her clothes.",
            items: [
              { id: "MY_B_7_1", label: "1", before: "Adam thinks Linda is very", after: "." },
              { id: "MY_B_7_2", label: "2", before: "Linda went", after: "with her class." },
              { id: "MY_B_7_3", label: "3", before: "Linda needs a new", after: "." },
              { id: "MY_B_7_4", label: "4", before: "USB sticks were £", after: ", but now they are on special offer." },
              { id: "MY_B_7_5", label: "5", before: "Linda can't pay", after: "because she doesn't know where it is." },
              { id: "MY_B_7_6", label: "6", before: "The newspaper is for", after: "." }
            ],
            answers: {
              "MY_B_7_1": { expected: ["messy", "the messiest"], explanation: "In recording: 'And you're the messiest person I know.'" },
              "MY_B_7_2": { expected: ["to Italy", "Italy"], explanation: "In recording: 'When you went to Italy with your class...'" },
              "MY_B_7_3": { expected: ["electric toothbrush", "toothbrush"], explanation: "In recording: 'Now I need to buy a new one.'" },
              "MY_B_7_4": { expected: ["6.99", "6,99"], explanation: "In recording: 'They were £6.99, but now they're £4.99.'" },
              "MY_B_7_5": { expected: ["by card", "card"], explanation: "In recording: 'I can't pay by card because well, I can't find it.'" },
              "MY_B_7_6": { expected: ["Mum", "her mum", "mom"], explanation: "In recording: 'Oh, and please buy a newspaper for Mum.'" }
            }
          }
        ]
      },

      communication: {
        id: "communication",
        title: "Communication",
        maxScore: 8,
        tasks: [
          {
            id: "task_8",
            number: 8,
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 8,
            type: "word-bank",
            wordBank: ["busy", "can I", "could you", "do you need", "here you are", "look", "no problem", "to hear that", "what size"],
            example: "0 A: Can you open the door for me, please? B: No problem.",
            usedInExample: ["no problem"],
            sentences: [
              { textBefore: "1 A:", gapId: "MY_B_8_1", label: "1", textAfter: "are you?<br>B: I think I'm a small." },
              { textBefore: "2 A:", gapId: "MY_B_8_2", label: "2", textAfter: "help me with my homework, please?<br>B: Not now, sorry. I'm", gapId2: "MY_B_8_3", label2: "3", textAfter2: "." },
              { textBefore: "3 A:", gapId: "MY_B_8_4", label: "4", textAfter: "any help with your chores?<br>B: Yes, please." },
              { textBefore: "4 A: What's wrong? You", gapId: "MY_B_8_5", label: "5", textAfter: "upset.<br>B: I lost my phone.<br>A: I'm sorry", gapId2: "MY_B_8_6", label2: "6", textAfter2: "." },
              { textBefore: "5 A:", gapId: "MY_B_8_7", label: "7", textAfter: "help you?<br>B: No, thanks, I'm just looking." },
              { textBefore: "6 A: Do you have this coat in brown?<br>B: Yes, we do.", gapId: "MY_B_8_8", label: "8", textAfter: "." }
            ],
            answers: {
              "MY_B_8_1": { expected: ["What size", "what size"], explanation: "'What size are you?'" },
              "MY_B_8_2": { expected: ["Could you", "could you"], explanation: "'Could you help me with my homework, please?'" },
              "MY_B_8_3": { expected: ["busy"], explanation: "'I'm busy.'" },
              "MY_B_8_4": { expected: ["Do you need", "do you need"], explanation: "'Do you need any help with your chores?'" },
              "MY_B_8_5": { expected: ["look"], explanation: "'You look upset.'" },
              "MY_B_8_6": { expected: ["to hear that"], explanation: "'I'm sorry to hear that.'" },
              "MY_B_8_7": { expected: ["Can I", "can I"], explanation: "'Can I help you?'" },
              "MY_B_8_8": { expected: ["Here you are", "here you are"], explanation: "'Yes, we do. Here you are.'" }
            }
          }
        ]
      },

      reading: {
        id: "reading",
        title: "Reading",
        maxScore: 6,
        tasks: [
          {
            id: "task_9",
            number: 9,
            title: "Read Matt's blog post about his holiday and circle T (true) or F (false).",
            points: 6,
            type: "reading-tf-ds",
            passageTitle: "Our holiday by Matt Atkinson",
            passage: `We didn't go on holiday last August because Dad had too much work. We stayed at home. We sometimes visited Granny and Grandad in the country at the weekend.

Then one evening, we were sitting near the fire. It was cold and dark. Suddenly, Dad said to Mum: 'We didn't have a summer holiday. Let's go to a warm country for ten days!' 'That's a wonderful idea!' said Mum. So we bought tickets to Jamaica!

We arrived there late on Saturday night and took a taxi to our hotel. It had a big swimming pool and the beach was a hundred metres away.

The next day, Mum and I went snorkelling. We were swimming in the warm water when we saw some dolphins. Dad and my sister stayed at the hotel. They swam in the pool and read books all day.

We did other things too. We went sightseeing and in the evening we listened to reggae – that's Jamaican music. It was too hot to go hiking, but we went on a boat trip on the Martha Brae River. Our guide was a friendly man and he told us about the animals and birds we saw.

It was the best holiday of my life!`,
            example: "0 Matt stayed at home last August because his dad had too much work. -> T",
            items: [
              { id: "MY_B_9_1", label: "1", statement: "He sometimes visited his grandparents.", options: ["T", "F"] },
              { id: "MY_B_9_2", label: "2", statement: "Matt's grandparents live in a town.", options: ["T", "F"] },
              { id: "MY_B_9_3", label: "3", statement: "Matt and his family went to Jamaica for two weeks.", options: ["T", "F"] },
              { id: "MY_B_9_4", label: "4", statement: "There was a big swimming pool in the hotel.", options: ["T", "F"] },
              { id: "MY_B_9_5", label: "5", statement: "Matt's dad and sister spent the second day on the beach.", options: ["T", "F"] },
              { id: "MY_B_9_6", label: "6", statement: "Matt and his family saw some wild animals and birds.", options: ["T", "F"] }
            ],
            answers: {
              "MY_B_9_1": { expected: ["T"], explanation: "True: 'We sometimes visited Granny and Grandad...'" },
              "MY_B_9_2": { expected: ["F"], explanation: "False: They live in the country, not in a town." },
              "MY_B_9_3": { expected: ["F"], explanation: "False: They went for ten days, not two weeks." },
              "MY_B_9_4": { expected: ["T"], explanation: "True: 'It had a big swimming pool...'" },
              "MY_B_9_5": { expected: ["F"], explanation: "False: They stayed at the hotel, swam in the pool and read books." },
              "MY_B_9_6": { expected: ["T"], explanation: "True: '...he told us about the animals and birds we saw.'" }
            }
          }
        ]
      }
    }
  }
};
