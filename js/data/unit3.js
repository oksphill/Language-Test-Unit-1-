/**
 * Language Test Unit 3 - Experiences and Sports
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.UNIT_3_DATA = {
  id: "unit3",
  number: 3,
  title: "Experiences and Sports",
  description: "Vocabulary: Sports, Equipment & Venues. Grammar: Present Perfect (just/already/yet, ever/never). Communication: Giving instructions.",

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 3",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 13,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "What would you like to do? Complete the sentences with the correct words.",
            points: 5,
            type: "letter-hint",
            example: "0 I'd love to learn to ski! Then I can join my friends in the mountains this winter.",
            items: [
              { id: "A_1_1", label: "1", textBefore: "I want to", displayHint: "h _ _ e", placeholder: "have", prefix: "h", textAfter: "a party on the beach." },
              { id: "A_1_2", label: "2", textBefore: "I want to go to Egypt, see the pyramids and", displayHint: "r _ _ e", placeholder: "ride", prefix: "r", textAfter: "a camel." },
              { id: "A_1_3", label: "3", textBefore: "I'd love to do a", displayHint: "p _ _ _ _ _ _ _ _ e", placeholder: "parachute", prefix: "p", textAfter: "jump. I think it's the most exciting experience in the world!" },
              { id: "A_1_4", label: "4", textBefore: "I want to go", displayHint: "s _ _ _ a", placeholder: "scuba", prefix: "s", textAfter: "diving in the sea and see the fish." },
              { id: "A_1_5", label: "5", textBefore: "I'd like to", displayHint: "s _ _ _ e", placeholder: "score", prefix: "s", textAfter: "a few goals for my team in the football match tomorrow." }
            ],
            answers: {
              "A_1_1": { expected: ["have"], explanation: "Collocation: 'have a party' (host or organise a celebration)." },
              "A_1_2": { expected: ["ride"], explanation: "Collocation: 'ride a camel / horse / bike'." },
              "A_1_3": { expected: ["parachute"], explanation: "An extreme jump from an aircraft: 'parachute jump'." },
              "A_1_4": { expected: ["scuba"], explanation: "Underwater diving with air tanks: 'scuba diving'." },
              "A_1_5": { expected: ["score"], explanation: "Collocation: 'score a goal' in football." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the words in the box.",
            points: 8,
            type: "word-bank",
            wordBank: ["compete", "goggles", "playground", "pool", "rink", "snorkel", "support", "ticket", "win"],
            example: "0 You need a snorkel mask to go snorkelling.",
            usedInExample: ["snorkel"],
            sentences: [
              { textBefore: "1 Do you often", gapId: "A_2_1", label: "1", textAfter: "in chess competitions?" },
              { textBefore: "2 You must have a bus", gapId: "A_2_2", label: "2", textAfter: "to travel on a bus." },
              { textBefore: "3 Did Joe's team", gapId: "A_2_3", label: "3", textAfter: "the match?" },
              { textBefore: "4 This hotel has a lovely swimming", gapId: "A_2_4", label: "4", textAfter: "." },
              { textBefore: "5 The children love going into the school", gapId: "A_2_5", label: "5", textAfter: "when they have a break." },
              { textBefore: "6 We go ice-skating at the ice", gapId: "A_2_6", label: "6", textAfter: "." },
              { textBefore: "7 We always", gapId: "A_2_7", label: "7", textAfter: "our local football team." },
              { textBefore: "8 You must wear", gapId: "A_2_8", label: "8", textAfter: "to protect your eyes when you go swimming." }
            ],
            answers: {
              "A_2_1": { expected: ["compete"], explanation: "To participate in a tournament: 'compete in chess competitions'." },
              "A_2_2": { expected: ["ticket"], explanation: "A document showing payment for transport: 'bus ticket'." },
              "A_2_3": { expected: ["win"], explanation: "To be successful in a sports contest: 'win the match'." },
              "A_2_4": { expected: ["pool"], explanation: "A place for swimming: 'swimming pool'." },
              "A_2_5": { expected: ["playground"], explanation: "An outdoor recreation area for school children: 'school playground'." },
              "A_2_6": { expected: ["rink"], explanation: "A prepared surface of ice for skating: 'ice rink'." },
              "A_2_7": { expected: ["support"], explanation: "To cheer for and encourage a team: 'support our local football team'." },
              "A_2_8": { expected: ["goggles"], explanation: "Protective eyewear for swimming: 'goggles'." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 17,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the Present Perfect form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 Look! She has just crashed (just / crash) her car!",
            items: [
              { id: "A_3_1", label: "1", before: "", verb: "they / do", after: "homework yet?" },
              { id: "A_3_2", label: "2", before: "My friend and I", verb: "have / already", after: "our lunch." },
              { id: "A_3_3", label: "3", before: "I", verb: "just / lose", after: "my glasses." },
              { id: "A_3_4", label: "4", before: "My sister", verb: "already / clean", after: "her bedroom." },
              { id: "A_3_5", label: "5", before: "The teacher", verb: "not / check", after: "our tests yet." }
            ],
            answers: {
              "A_3_1": { expected: ["Have they done", "have they done"], explanation: "Present Perfect question with they: 'Have they done'." },
              "A_3_2": { expected: ["have already had", "'ve already had"], explanation: "Present Perfect with already: 'have already had'." },
              "A_3_3": { expected: ["have just lost", "'ve just lost"], explanation: "Present Perfect with just: 'have just lost'." },
              "A_3_4": { expected: ["has already cleaned", "'s already cleaned"], explanation: "Present Perfect 3rd person singular: 'has already cleaned'." },
              "A_3_5": { expected: ["hasn't checked", "has not checked"], explanation: "Present Perfect negative with yet: 'hasn't checked'." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the Present Perfect form of the verbs in brackets.",
            points: 7,
            type: "grammar-gap",
            example: "0 Have you ever met (you / ever meet) a famous person?",
            items: [
              { id: "A_4_1", label: "1", before: "", verb: "they / ever eat", after: "Mexican food?" },
              { id: "A_4_2", label: "2", before: "", verb: "your dad / ever make", after: "a cake?" },
              { id: "A_4_3", label: "3", before: "I", verb: "never / sleep", after: "in a tent." },
              { id: "A_4_4", label: "4", before: "", verb: "Emma / ever have", after: "a holiday in Spain?" },
              { id: "A_4_5", label: "5", before: "I", verb: "never / break", after: "an arm." },
              { id: "A_4_6", label: "6", before: "Rina", verb: "never / be", after: "to China." },
              { id: "A_4_7", label: "7", before: "", verb: "she / ever visit", after: "Madrid?" }
            ],
            answers: {
              "A_4_1": { expected: ["Have they ever eaten", "have they ever eaten"], explanation: "Present Perfect question: Have they ever eaten (eat - ate - eaten)." },
              "A_4_2": { expected: ["Has your dad ever made", "has your dad ever made"], explanation: "Present Perfect question with singular dad: Has your dad ever made." },
              "A_4_3": { expected: ["have never slept", "'ve never slept"], explanation: "Present Perfect with never: have never slept (sleep - slept - slept)." },
              "A_4_4": { expected: ["Has Emma ever had", "has Emma ever had"], explanation: "Present Perfect question with Emma: Has Emma ever had." },
              "A_4_5": { expected: ["have never broken", "'ve never broken"], explanation: "Present Perfect with never: have never broken (break - broke - broken)." },
              "A_4_6": { expected: ["has never been", "'s never been"], explanation: "Present Perfect with never for experiences: has never been." },
              "A_4_7": { expected: ["Has she ever visited", "has she ever visited"], explanation: "Present Perfect question: Has she ever visited." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the Present Perfect form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 He isn't here. He has just left (just / leave) the office.",
            items: [
              { id: "A_5_1", label: "1", before: "We", verb: "not finish", after: "our homework yet." },
              { id: "A_5_2", label: "2", before: "It's only seven o'clock, but they", verb: "already / go", after: "to work." },
              { id: "A_5_3", label: "3", before: "I", verb: "just / come", after: "home and I'm tired." },
              { id: "A_5_4", label: "4", before: "Anna", verb: "already / pack", after: "her suitcase for her holiday next week." },
              { id: "A_5_5", label: "5", before: "I", verb: "not / eat", after: "my breakfast yet." }
            ],
            answers: {
              "A_5_1": { expected: ["haven't finished", "have not finished"], explanation: "Present Perfect negative with yet: haven't finished." },
              "A_5_2": { expected: ["have already gone", "'ve already gone"], explanation: "Present Perfect with already: have already gone." },
              "A_5_3": { expected: ["have just come", "'ve just come"], explanation: "Present Perfect with just: have just come." },
              "A_5_4": { expected: ["has already packed", "'s already packed"], explanation: "Present Perfect with already: has already packed." },
              "A_5_5": { expected: ["haven't eaten", "have not eaten"], explanation: "Present Perfect negative: haven't eaten (eat - ate - eaten)." }
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
            title: "Complete the dialogue with the phrases in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["finally", "first, read", "how do I", "then", "what do I", "what's the next"],
            example: "Clare: Great. ⁰How do I start?",
            usedInExample: ["how do I"],
            dialogue: [
              { speaker: "Brian", text: "Hey, what's that?" },
              { speaker: "Clare", text: "It's a box with a model plane. I want to make the plane, but there are so many pieces and it looks difficult." },
              { speaker: "Brian", text: "I can help you." },
              { speaker: "Clare", text: "Great. How do I start?" },
              {
                speaker: "Brian",
                parts: [
                  { gapId: "A_6_1", label: "1", after: "the instructions." }
                ]
              },
              {
                speaker: "Clare",
                parts: [
                  { before: "I've done that.", gapId: "A_6_2", label: "2", after: "step?" }
                ]
              },
              {
                speaker: "Brian",
                parts: [
                  { gapId: "A_6_3", label: "3", after: ", take all the pieces out of the box, but don't lose any pieces." }
                ]
              },
              {
                speaker: "Clare",
                parts: [
                  { gapId: "A_6_4", label: "4", after: "have to do now?" }
                ]
              },
              {
                speaker: "Brian",
                parts: [
                  { before: "Next, paint these pieces.", gapId: "A_6_5", label: "5", after: "you put them all together with glue. Easy!" }
                ]
              }
            ],
            answers: {
              "A_6_1": { expected: ["First, read", "first, read"], explanation: "Starting instructions: 'First, read the instructions.'" },
              "A_6_2": { expected: ["What's the next", "what's the next"], explanation: "Asking for the subsequent step: 'What's the next step?'" },
              "A_6_3": { expected: ["Then", "then"], explanation: "Sequencing word for the next step: 'Then, take all the pieces...'" },
              "A_6_4": { expected: ["What do I", "what do I"], explanation: "Asking what action to take: 'What do I have to do now?'" },
              "A_6_5": { expected: ["Finally", "finally"], explanation: "Concluding instruction step: 'Finally you put them all together with glue.'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 3",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 13,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "What would you like to do? Complete the sentences with the correct words.",
            points: 5,
            type: "letter-hint",
            example: "0 I'd love to learn lots of languages and travel round the world.",
            items: [
              { id: "B_1_1", label: "1", textBefore: "I want to go to Spain and", displayHint: "s _ _ y", placeholder: "stay", prefix: "s", textAfter: "in a fantastic hotel." },
              { id: "B_1_2", label: "2", textBefore: "I want to go to Eurodisney and", displayHint: "r _ _ e", placeholder: "ride", prefix: "r", textAfter: "a roller coaster." },
              { id: "B_1_3", label: "3", textBefore: "I'd love to", displayHint: "g _", placeholder: "go", prefix: "g", textAfter: "snowboarding. Winter sports are the best!" },
              { id: "B_1_4", label: "4", textBefore: "I love hockey, so I want to play for my team and", displayHint: "s _ _ _ e", placeholder: "score", prefix: "s", textAfter: "lots of goals!" },
              { id: "B_1_5", label: "5", textBefore: "I'd love to do a", displayHint: "p _ _ _ _ _ _ _ _ e", placeholder: "parachute", prefix: "p", textAfter: "jump. It must be really exciting!" }
            ],
            answers: {
              "B_1_1": { expected: ["stay"], explanation: "Collocation: 'stay in a hotel'." },
              "B_1_2": { expected: ["ride"], explanation: "Collocation: 'ride a roller coaster'." },
              "B_1_3": { expected: ["go"], explanation: "Collocation: 'go snowboarding / skiing'." },
              "B_1_4": { expected: ["score"], explanation: "Collocation: 'score lots of goals'." },
              "B_1_5": { expected: ["parachute"], explanation: "Extreme sport: 'parachute jump'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the words in the box.",
            points: 8,
            type: "word-bank",
            wordBank: ["helmet", "lose", "racket", "skates", "snorkel", "stick", "swimsuit", "ticket", "train"],
            example: "0 You need a snorkel mask to go snorkelling.",
            usedInExample: ["snorkel"],
            sentences: [
              { textBefore: "1 Get your", gapId: "B_2_1", label: "1", textAfter: "and let's go swimming!" },
              { textBefore: "2 You must wear a", gapId: "B_2_2", label: "2", textAfter: "to protect your head when you go cycling." },
              { textBefore: "3 We need a bus", gapId: "B_2_3", label: "3", textAfter: "to travel on a bus." },
              { textBefore: "4 You play hockey with a hockey", gapId: "B_2_4", label: "4", textAfter: "." },
              { textBefore: "5 When you play tennis, you hit the ball with a tennis", gapId: "B_2_5", label: "5", textAfter: "." },
              { textBefore: "6 Olympic athletes", gapId: "B_2_6", label: "6", textAfter: "for hours every day." },
              { textBefore: "7 The players feel sad when they", gapId: "B_2_7", label: "7", textAfter: "a match." },
              { textBefore: "8 I can't go ice-skating because I haven't got any ice", gapId: "B_2_8", label: "8", textAfter: "." }
            ],
            answers: {
              "B_2_1": { expected: ["swimsuit"], explanation: "Clothing worn for swimming: 'swimsuit'." },
              "B_2_2": { expected: ["helmet"], explanation: "Protective headgear: 'helmet'." },
              "B_2_3": { expected: ["ticket"], explanation: "Document needed to travel: 'bus ticket'." },
              "B_2_4": { expected: ["stick"], explanation: "Sports equipment used in hockey: 'hockey stick'." },
              "B_2_5": { expected: ["racket"], explanation: "Sports equipment used to hit a tennis ball: 'tennis racket'." },
              "B_2_6": { expected: ["train"], explanation: "To practice and prepare physically: 'athletes train for hours'." },
              "B_2_7": { expected: ["lose"], explanation: "The opposite of win: 'lose a match'." },
              "B_2_8": { expected: ["skates"], explanation: "Footwear with blades for ice: 'ice skates'." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 17,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the Present Perfect form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 Look! She has just crashed (crash) her car again!",
            items: [
              { id: "B_3_1", label: "1", before: "I", verb: "already / do", after: "the dishes so the kitchen looks tidy." },
              { id: "B_3_2", label: "2", before: "My grandparents", verb: "not find", after: "their keys yet." },
              { id: "B_3_3", label: "3", before: "", verb: "they / take", after: "their English exam yet?" },
              { id: "B_3_4", label: "4", before: "My sister", verb: "already / see", after: "the film. She liked it." },
              { id: "B_3_5", label: "5", before: "We", verb: "just / have", after: "breakfast and we're ready for school." }
            ],
            answers: {
              "B_3_1": { expected: ["have already done", "'ve already done"], explanation: "Present Perfect with already: 'have already done'." },
              "B_3_2": { expected: ["haven't found", "have not found"], explanation: "Present Perfect negative with yet: 'haven't found'." },
              "B_3_3": { expected: ["Have they taken", "have they taken"], explanation: "Present Perfect question with yet: 'Have they taken'." },
              "B_3_4": { expected: ["has already seen", "'s already seen"], explanation: "Present Perfect with already: 'has already seen'." },
              "B_3_5": { expected: ["have just had", "'ve just had"], explanation: "Present Perfect with just: 'have just had'." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the Present Perfect form of the verbs in brackets.",
            points: 7,
            type: "grammar-gap",
            example: "0 Have you ever met (you / ever meet) a famous person?",
            items: [
              { id: "B_4_1", label: "1", before: "I", verb: "never / eat", after: "Japanese food." },
              { id: "B_4_2", label: "2", before: "", verb: "Isabel / ever drive", after: "her mum's car?" },
              { id: "B_4_3", label: "3", before: "", verb: "they / ever have", after: "a holiday in the USA?" },
              { id: "B_4_4", label: "4", before: "", verb: "you / ever cook", after: "for your family?" },
              { id: "B_4_5", label: "5", before: "Colin", verb: "never / be", after: "camping." },
              { id: "B_4_6", label: "6", before: "", verb: "your grandparents / ever try", after: "sushi?" },
              { id: "B_4_7", label: "7", before: "My teacher", verb: "never / call", after: "my parents." }
            ],
            answers: {
              "B_4_1": { expected: ["have never eaten", "'ve never eaten"], explanation: "Present Perfect with never: have never eaten." },
              "B_4_2": { expected: ["Has Isabel ever driven", "has Isabel ever driven"], explanation: "Present Perfect question: Has Isabel ever driven." },
              "B_4_3": { expected: ["Have they ever had", "have they ever had"], explanation: "Present Perfect question: Have they ever had." },
              "B_4_4": { expected: ["Have you ever cooked", "have you ever cooked"], explanation: "Present Perfect question: Have you ever cooked." },
              "B_4_5": { expected: ["has never been", "'s never been"], explanation: "Present Perfect with never: has never been." },
              "B_4_6": { expected: ["Have your grandparents ever tried", "have your grandparents ever tried"], explanation: "Present Perfect question with plural grandparents: Have your grandparents ever tried." },
              "B_4_7": { expected: ["has never called", "'s never called"], explanation: "Present Perfect with 3rd person singular: has never called." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the Present Perfect form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 He isn't here. He has just left (just / leave) the office.",
            items: [
              { id: "B_5_1", label: "1", before: "I", verb: "not check", after: "the train timetable yet." },
              { id: "B_5_2", label: "2", before: "We", verb: "already / pack", after: "our suitcase for our holiday." },
              { id: "B_5_3", label: "3", before: "My parents", verb: "just / buy", after: "a new car, Look at it!" },
              { id: "B_5_4", label: "4", before: "She", verb: "not put", after: "the chicken in the oven yet." },
              { id: "B_5_5", label: "5", before: "It's only 7.30, but the children", verb: "already / go", after: "to school." }
            ],
            answers: {
              "B_5_1": { expected: ["haven't checked", "have not checked"], explanation: "Present Perfect negative with yet: haven't checked." },
              "B_5_2": { expected: ["have already packed", "'ve already packed"], explanation: "Present Perfect with already: have already packed." },
              "B_5_3": { expected: ["have just bought", "'ve just bought"], explanation: "Present Perfect with just: have just bought." },
              "B_5_4": { expected: ["hasn't put", "has not put"], explanation: "Present Perfect negative with singular she: hasn't put." },
              "B_5_5": { expected: ["have already gone", "'ve already gone"], explanation: "Present Perfect with plural children: have already gone." }
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
            title: "Complete the dialogue with the phrases in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["be careful", "finally", "first", "how do I", "next", "what's the next"],
            example: "Freddie: Great. ⁰How do I start?",
            usedInExample: ["how do I"],
            dialogue: [
              { speaker: "Yvonne", text: "Hi Freddie. What's that?" },
              { speaker: "Freddie", text: "It's my birthday present - a model ship. I want to make the ship, but it looks difficult. There are so many pieces!" },
              { speaker: "Yvonne", text: "I can help you." },
              { speaker: "Freddie", text: "Great. How do I start?" },
              {
                speaker: "Yvonne",
                parts: [
                  { gapId: "B_6_1", label: "1", after: ", look at the pictures on the instructions." },
                  { gapId: "B_6_2", label: "2", after: "take all the pieces out of the box, but" },
                  { gapId: "B_6_3", label: "3", after: "and don't break any pieces." }
                ]
              },
              {
                speaker: "Freddie",
                parts: [
                  { before: "OK. Now", gapId: "B_6_4", label: "4", after: "step?" }
                ]
              },
              {
                speaker: "Yvonne",
                parts: [
                  { before: "Paint the pieces.", gapId: "B_6_5", label: "5", after: "you put them all together with glue. Easy!" }
                ]
              }
            ],
            answers: {
              "B_6_1": { expected: ["First", "first"], explanation: "First step: 'First, look at the pictures...'" },
              "B_6_2": { expected: ["Next", "next"], explanation: "Following step: 'Next take all the pieces...'" },
              "B_6_3": { expected: ["be careful", "Be careful"], explanation: "Warning advice: '...but be careful and don't break any pieces.'" },
              "B_6_4": { expected: ["what's the next", "What's the next"], explanation: "Asking for next step: 'Now what's the next step?'" },
              "B_6_5": { expected: ["Finally", "finally"], explanation: "Last step: 'Finally you put them all together...'" }
            }
          }
        ]
      }
    }
  }
};
