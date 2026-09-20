/**
 * Go Getter 3 - Unit 7 Language Test
 * Houses & Homes / Present Continuous for Future & Modals (must, mustn't, can)
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_7_DATA = {
  id: "unit7",
  courseId: "gogetter3",
  number: 7,
  title: "Houses & Homes",
  description: "Vocabulary: Types of houses & rooms, Furniture, Phrasal verbs. Grammar: Present Continuous for future arrangements, Modals: must / mustn't / can. Communication: Making and accepting invitations.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 7",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the texts with the words in the box.",
            points: 7,
            type: "word-bank",
            wordBank: ["attic", "balcony", "block", "cottage", "floor", "island", "stairs", "village"],
            example: "I love living on an ⁰island.",
            usedInExample: ["island"],
            sentences: [
              { textBefore: "I love living on an island. My home is a pretty", gapId: "A_1_1", label: "1", textAfter: "near the beach." },
              { textBefore: "I can see the sea from a window up in the", gapId: "A_1_2", label: "2", textAfter: ". I don't have any neighbours, but my best friend lives in a small" },
              { textBefore: "", gapId: "A_1_3", label: "3", textAfter: "about a kilometre away.<br><br>Our" },
              { textBefore: "", gapId: "A_1_4", label: "4", textAfter: "of flats is in a town. We live on the fourth" },
              { textBefore: "", gapId: "A_1_5", label: "5", textAfter: "and we usually walk up the" },
              { textBefore: "", gapId: "A_1_6", label: "6", textAfter: ". It's good exercise. We have a" },
              { textBefore: "", gapId: "A_1_7", label: "7", textAfter: "and we sit on it when the weather is good." }
            ],
            answers: {
              "A_1_1": { expected: ["cottage"], explanation: "A small, pretty house in the countryside: cottage." },
              "A_1_2": { expected: ["attic"], explanation: "A room just below the roof: attic." },
              "A_1_3": { expected: ["village"], explanation: "A small settlement in a rural area: village." },
              "A_1_4": { expected: ["block"], explanation: "A large residential building: block of flats." },
              "A_1_5": { expected: ["floor"], explanation: "A level in a building: fourth floor." },
              "A_1_6": { expected: ["stairs"], explanation: "Steps connecting floors: walk up the stairs." },
              "A_1_7": { expected: ["balcony"], explanation: "An outdoor platform on an upper floor: balcony." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 I found the book I wanted in the bookcase.",
            items: [
              { id: "A_2_1", label: "1", textBefore: "I put the dirty glasses in the kitchen", displayHint: "s _ _ _", placeholder: "sink", prefix: "s", textAfter: "." },
              { id: "A_2_2", label: "2", textBefore: "Look at your face in the", displayHint: "m _ _ _ _ _", placeholder: "mirror", prefix: "m", textAfter: "! It's dirty." },
              { id: "A_2_3", label: "3", textBefore: "I turned on the hot water", displayHint: "t _ _", placeholder: "tap", prefix: "t", textAfter: "because I wanted to have a bath." },
              { id: "A_2_4", label: "4", textBefore: "I keep the flour, sugar, salt and pasta in that", displayHint: "c _ _ b _ _ _ _", placeholder: "cupboard", prefix: "c", textAfter: "." }
            ],
            answers: {
              "A_2_1": { expected: ["sink"], explanation: "Basin for washing dishes: kitchen sink." },
              "A_2_2": { expected: ["mirror"], explanation: "Reflective glass: mirror." },
              "A_2_3": { expected: ["tap"], explanation: "Device for controlling flow of water: water tap." },
              "A_2_4": { expected: ["cupboard"], explanation: "Kitchen furniture with shelves and doors: cupboard." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 What time is Dad picking out / up the children? -> up",
            items: [
              { id: "A_3_1", label: "1", before: "Check", options: ["for", "out"], after: "this article. It's very interesting." },
              { id: "A_3_2", label: "2", before: "I made a cake and then cleaned", options: ["up", "in"], after: "the mess." },
              { id: "A_3_3", label: "3", before: "She was looking", options: ["for", "out"], after: "her cat but she didn't find him." },
              { id: "A_3_4", label: "4", before: "You should find", options: ["out", "for"], after: "about the history of your town." }
            ],
            answers: {
              "A_3_1": { expected: ["out"], explanation: "Phrasal verb: 'check out' (inspect or examine)." },
              "A_3_2": { expected: ["up"], explanation: "Phrasal verb: 'clean up' (make neat and tidy)." },
              "A_3_3": { expected: ["for"], explanation: "Phrasal verb: 'look for' (search for)." },
              "A_3_4": { expected: ["out"], explanation: "Phrasal verb: 'find out' (discover information)." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 10,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogues with the correct Present Continuous form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 A: Are you walking (you / walk) home after school?",
            items: [
              { id: "A_4_1", label: "1", before: "B: No, I'm not. I", verb: "go", after: "to town with Mandy." },
              { id: "A_4_2", label: "2", before: "A:", verb: "Joe / study", after: "this afternoon?" },
              { id: "A_4_3", label: "3", before: "B: No, he isn't. He", verb: "play", after: "chess with Sue." },
              { id: "A_4_4", label: "4", before: "A:", verb: "Amy and Fred / come", after: "to the party?" },
              { id: "A_4_5", label: "5", before: "B: No, they aren't. They", verb: "move", after: "house on Saturday." }
            ],
            answers: {
              "A_4_1": { expected: ["am going", "'m going"], explanation: "Present Continuous for future: am going." },
              "A_4_2": { expected: ["Is Joe studying"], explanation: "Question with 3rd person singular: Is + Joe + studying?" },
              "A_4_3": { expected: ["is playing", "'s playing"], explanation: "Affirmative: is playing." },
              "A_4_4": { expected: ["Are Amy and Fred coming"], explanation: "Question with plural subject: Are + Amy and Fred + coming?" },
              "A_4_5": { expected: ["are moving", "'re moving"], explanation: "Affirmative plural: are moving (drop 'e')." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 The children can / must watch TV, but not after ten o'clock. -> can",
            items: [
              { id: "A_5_1", label: "1", before: "You", options: ["must", "mustn't"], after: "play football in the street. It's very dangerous." },
              { id: "A_5_2", label: "2", before: "I", options: ["can", "must"], after: "phone my parents. It's important." },
              { id: "A_5_3", label: "3", before: "The students", options: ["must", "mustn't"], after: "study now. They have an exam tomorrow." },
              { id: "A_5_4", label: "4", before: "We", options: ["must", "mustn't"], after: "leave our rubbish on the beach." },
              { id: "A_5_5", label: "5", before: "", options: ["Can", "Must"], after: "I borrow your hairdryer? I haven't got one." }
            ],
            answers: {
              "A_5_1": { expected: ["mustn't"], explanation: "Prohibition: mustn't play in dangerous street." },
              "A_5_2": { expected: ["must"], explanation: "Obligation / necessity: must phone parents." },
              "A_5_3": { expected: ["must"], explanation: "Necessity before an exam: must study." },
              "A_5_4": { expected: ["mustn't"], explanation: "Prohibition: mustn't leave rubbish." },
              "A_5_5": { expected: ["Can"], explanation: "Asking permission politely: Can I borrow...?" }
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
            title: "Complete the dialogues with the phrases.",
            points: 5,
            type: "word-bank",
            wordBank: ["are you free", "can you come", "I can't", "do you want to", "I'd love to", "that sounds"],
            example: "A: ⁰Do you want to hang out on Sunday?",
            usedInExample: ["do you want to"],
            sentences: [
              { textBefore: "A: Do you want to hang out on Sunday?<br>B:", gapId: "A_6_1", label: "1", textAfter: "great." },
              { textBefore: "A:", gapId: "A_6_2", label: "2", textAfter: "on Friday evening? Would you like to hang out?<br>B: Yes," },
              { textBefore: "", gapId: "A_6_3", label: "3", textAfter: ", thanks." },
              { textBefore: "A: We're going to the zoo tomorrow.", gapId: "A_6_4", label: "4", textAfter: "?<br>B: Sorry," },
              { textBefore: "", gapId: "A_6_5", label: "5", textAfter: "." }
            ],
            answers: {
              "A_6_1": { expected: ["That sounds", "that sounds"], explanation: "Accepting: 'That sounds great.'" },
              "A_6_2": { expected: ["Are you free", "are you free"], explanation: "Inquiring about availability: 'Are you free on Friday evening?'" },
              "A_6_3": { expected: ["I'd love to", "id love to"], explanation: "Enthusiastic agreement: 'Yes, I'd love to, thanks.'" },
              "A_6_4": { expected: ["Can you come", "can you come"], explanation: "Inviting: 'Can you come?'" },
              "A_6_5": { expected: ["I can't", "i cant"], explanation: "Declining politely: 'Sorry, I can't.'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 7",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the texts with the words in the box.",
            points: 7,
            type: "word-bank",
            wordBank: ["attic", "basement", "city", "cottage", "detached", "ground", "island", "village"],
            example: "I love living on an ⁰island.",
            usedInExample: ["island"],
            sentences: [
              { textBefore: "I love living on an island. My home is a beautiful little", gapId: "B_1_1", label: "1", textAfter: "." },
              { textBefore: "I don't have any neighbours, but my best friend lives in a", gapId: "B_1_2", label: "2", textAfter: "about a kilometre away. The sea is near too. I can see the sea from a window in my" },
              { textBefore: "", gapId: "B_1_3", label: "3", textAfter: ".<br><br>We live in a" },
              { textBefore: "", gapId: "B_1_4", label: "4", textAfter: "house in a big" },
              { textBefore: "", gapId: "B_1_5", label: "5", textAfter: ". There's a kitchen, a dining room and a living room on the" },
              { textBefore: "", gapId: "B_1_6", label: "6", textAfter: "floor and four bedrooms and two bathrooms on the first floor. There's also a" },
              { textBefore: "", gapId: "B_1_7", label: "7", textAfter: "under the house." }
            ],
            answers: {
              "B_1_1": { expected: ["cottage"], explanation: "A country cottage." },
              "B_1_2": { expected: ["village"], explanation: "A rural village." },
              "B_1_3": { expected: ["attic"], explanation: "An attic under the roof." },
              "B_1_4": { expected: ["detached"], explanation: "A detached house (standing alone)." },
              "B_1_5": { expected: ["city"], explanation: "In a big city." },
              "B_1_6": { expected: ["ground"], explanation: "On the ground floor." },
              "B_1_7": { expected: ["basement"], explanation: "A basement floor under the house." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences.",
            points: 4,
            type: "letter-hint",
            example: "0 I found the book I wanted in the bookcase.",
            items: [
              { id: "B_2_1", label: "1", textBefore: "My mum keeps the cups, mugs and glasses in this", displayHint: "c _ _ b _ _ _ _", placeholder: "cupboard", prefix: "c", textAfter: "." },
              { id: "B_2_2", label: "2", textBefore: "I put the dirty glasses in the kitchen", displayHint: "s _ _ _", placeholder: "sink", prefix: "s", textAfter: "." },
              { id: "B_2_3", label: "3", textBefore: "His desk has a big", displayHint: "d _ _ _ _ _", placeholder: "drawer", prefix: "d", textAfter: ". There are pencils in there." },
              { id: "B_2_4", label: "4", textBefore: "She looked at her hair in the", displayHint: "m _ _ _ _ _", placeholder: "mirror", prefix: "m", textAfter: ". It was beautiful." }
            ],
            answers: {
              "B_2_1": { expected: ["cupboard"], explanation: "Cupboard for dishes." },
              "B_2_2": { expected: ["sink"], explanation: "Kitchen sink." },
              "B_2_3": { expected: ["drawer"], explanation: "Sliding compartment in a desk: drawer." },
              "B_2_4": { expected: ["mirror"], explanation: "Looking at reflection in a mirror." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 What time is Dad picking out / up the children? -> up",
            items: [
              { id: "B_3_1", label: "1", before: "What happened? Did you find", options: ["out", "for"], after: "?" },
              { id: "B_3_2", label: "2", before: "I go to bed very late, so I wake", options: ["in", "up"], after: "late too." },
              { id: "B_3_3", label: "3", before: "Please clean", options: ["in", "up"], after: "the mess on the floor before Mum sees it." },
              { id: "B_3_4", label: "4", before: "I'm looking", options: ["for", "in"], after: "my glasses. Can you see them?" }
            ],
            answers: {
              "B_3_1": { expected: ["out"], explanation: "Phrasal verb: 'find out'." },
              "B_3_2": { expected: ["up"], explanation: "Phrasal verb: 'wake up'." },
              "B_3_3": { expected: ["up"], explanation: "Phrasal verb: 'clean up'." },
              "B_3_4": { expected: ["for"], explanation: "Phrasal verb: 'look for'." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 10,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogues with the correct Present Continuous form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 A: Are you going (you / go) home after school?",
            items: [
              { id: "B_4_1", label: "1", before: "B: No, I'm not. I", verb: "take", after: "the bus to town with Luke." },
              { id: "B_4_2", label: "2", before: "A:", verb: "Tony / do", after: "his homework this afternoon?" },
              { id: "B_4_3", label: "3", before: "B: No, he isn't. He", verb: "meet", after: "Anne at the gym." },
              { id: "B_4_4", label: "4", before: "A:", verb: "Ben and Sally / study", after: "this evening?" },
              { id: "B_4_5", label: "5", before: "B: No, they aren't. They", verb: "visit", after: "their grandparents." }
            ],
            answers: {
              "B_4_1": { expected: ["am taking", "'m taking"], explanation: "Present Continuous future arrangement: am taking (drop 'e')." },
              "B_4_2": { expected: ["Is Tony doing"], explanation: "Question: Is + Tony + doing?" },
              "B_4_3": { expected: ["is meeting", "'s meeting"], explanation: "Affirmative: is meeting." },
              "B_4_4": { expected: ["Are Ben and Sally studying"], explanation: "Question plural: Are + Ben and Sally + studying?" },
              "B_4_5": { expected: ["are visiting", "'re visiting"], explanation: "Affirmative plural: are visiting." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 The children can / must watch TV, but not after ten o'clock. -> can",
            items: [
              { id: "B_5_1", label: "1", before: "You", options: ["mustn't", "can"], after: "tell your friends. It's a secret." },
              { id: "B_5_2", label: "2", before: "", options: ["Must", "Can"], after: "I use your phone? I need to call Mum." },
              { id: "B_5_3", label: "3", before: "We", options: ["must", "mustn't"], after: "make a noise. Dad is sleeping." },
              { id: "B_5_4", label: "4", before: "The students", options: ["must", "can"], after: "do their homework or the teacher gets angry." },
              { id: "B_5_5", label: "5", before: "You", options: ["mustn't", "can"], after: "use my laptop, no problem." }
            ],
            answers: {
              "B_5_1": { expected: ["mustn't"], explanation: "Prohibition: mustn't tell (it's a secret)." },
              "B_5_2": { expected: ["Can"], explanation: "Asking permission: Can I use your phone?" },
              "B_5_3": { expected: ["mustn't"], explanation: "Prohibition: mustn't make a noise." },
              "B_5_4": { expected: ["must"], explanation: "Obligation: must do their homework." },
              "B_5_5": { expected: ["can"], explanation: "Granting permission: can use my laptop." }
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
            title: "Complete the dialogues with the phrases.",
            points: 5,
            type: "word-bank",
            wordBank: ["would you like", "are you free", "do you want to", "I'd love to", "maybe next time", "that sounds"],
            example: "A: ⁰Do you want to hang out on Sunday?",
            usedInExample: ["do you want to"],
            sentences: [
              { textBefore: "A: Do you want to hang out on Sunday?<br>B:", gapId: "B_6_1", label: "1", textAfter: "great." },
              { textBefore: "A: We're going swimming tomorrow.", gapId: "B_6_2", label: "2", textAfter: "to come with us?<br>B: Sorry," },
              { textBefore: "", gapId: "B_6_3", label: "3", textAfter: "." },
              { textBefore: "A:", gapId: "B_6_4", label: "4", textAfter: "this weekend? Would you like to go camping?<br>B: Yes," },
              { textBefore: "", gapId: "B_6_5", label: "5", textAfter: ", thanks." }
            ],
            answers: {
              "B_6_1": { expected: ["That sounds", "that sounds"], explanation: "'That sounds great.'" },
              "B_6_2": { expected: ["Would you like", "would you like"], explanation: "Offering invitation: 'Would you like to come with us?'" },
              "B_6_3": { expected: ["maybe next time"], explanation: "Declining: 'Sorry, maybe next time.'" },
              "B_6_4": { expected: ["Are you free", "are you free"], explanation: "Asking availability: 'Are you free this weekend?'" },
              "B_6_5": { expected: ["I'd love to", "id love to"], explanation: "Accepting: 'Yes, I'd love to, thanks.'" }
            }
          }
        ]
      }
    }
  }
};
