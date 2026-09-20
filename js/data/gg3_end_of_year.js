/**
 * Go Getter 3 - End-of-Year Test (Units 1–8)
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 * Total Points: 50 (Vocabulary: 15, Grammar: 15, Listening: 6, Communication: 8, Reading: 6)
 */

window.GG3_END_OF_YEAR_DATA = {
  id: "end_of_year",
  courseId: "gogetter3",
  number: "1-8",
  title: "End-of-Year Test (Units 1–8)",
  description: "Comprehensive end-of-year assessment covering Units 1–8: Vocabulary, Grammar, Audio Listening (Track 11), Everyday Communication matching, and Reading.",
  points: 50,

  variantA: {
    id: "variantA",
    title: "End-of-Year Test A — Units 1–8",
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
            title: "Complete the text with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["business", "cottage", "out", "shake", "village", "water"],
            example: "My family and I live in a ⁰cottage...",
            usedInExample: ["cottage"],
            passageTitle: "HOME SWEET HOME by Helen Todd",
            sentences: [
              { textBefore: "My family and I live in a cottage in a small", gapId: "EY_A_1_1", label: "1", textAfter: "in Yorkshire. My parents have their own" },
              { textBefore: "", gapId: "EY_A_1_2", label: "2", textAfter: "here and my brother and I go to the local school. People here are very friendly. They smile, say good morning and" },
              { textBefore: "", gapId: "EY_A_1_3", label: "3", textAfter: "hands when they meet in the street. They chat to their neighbours when they" },
              { textBefore: "", gapId: "EY_A_1_4", label: "4", textAfter: "the plants in the garden or take" },
              { textBefore: "", gapId: "EY_A_1_5", label: "5", textAfter: "the rubbish. It's a great place to live." }
            ],
            answers: {
              "EY_A_1_1": { expected: ["village"], explanation: "A small settlement in the countryside: 'village'." },
              "EY_A_1_2": { expected: ["business"], explanation: "Commercial enterprise: 'own business'." },
              "EY_A_1_3": { expected: ["shake"], explanation: "Greeting gesture: 'shake hands'." },
              "EY_A_1_4": { expected: ["water"], explanation: "Caring for plants: 'water the plants'." },
              "EY_A_1_5": { expected: ["out"], explanation: "Phrasal verb: 'take out the rubbish'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            context: "The best baker's in town is The Pie Shop.",
            example: "The best 0 baker's / newsagent's in town is The Pie Shop. -> baker's",
            items: [
              { id: "EY_A_2_1", label: "1", before: "People stand in a", options: ["queue", "cashier"], after: "to buy bread and apple pies from there." },
              { id: "EY_A_2_2", label: "2", before: "Tourists come to", options: ["check", "try"], after: "the local food – our area is famous for apple pies!" },
              { id: "EY_A_2_3", label: "3", before: "Mrs Taylor, the owner, makes the bread and pies. When they come out of the", options: ["pot", "oven"], after: ", they smell delicious!" },
              { id: "EY_A_2_4", label: "4", before: "Mrs Taylor's son and daughter also work at The Pie Shop. They", options: ["peel", "beat"], after: "and chop the apples, serve the customers" },
              { id: "EY_A_2_5", label: "5", before: "and clean", options: ["away", "up"], after: "the kitchen every evening." }
            ],
            answers: {
              "EY_A_2_1": { expected: ["queue"], explanation: "Waiting in line: 'stand in a queue'." },
              "EY_A_2_2": { expected: ["try"], explanation: "Taste local food: 'try the local food'." },
              "EY_A_2_3": { expected: ["oven"], explanation: "Baking equipment: 'come out of the oven'." },
              "EY_A_2_4": { expected: ["peel"], explanation: "Food preparation: 'peel and chop the apples'." },
              "EY_A_2_5": { expected: ["up"], explanation: "Phrasal verb: 'clean up the kitchen'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences.",
            points: 5,
            type: "letter-hint",
            example: "0 When it gets da r k, we turn on the lights. -> dark",
            items: [
              { id: "EY_A_3_1", label: "1", textBefore: "I plugged in the", displayHint: "b _ _ _ _ _ r", placeholder: "blender", prefix: "b", textAfter: "and made a smoothie with yoghurt and fruit." },
              { id: "EY_A_3_2", label: "2", textBefore: "Please put the dirty plates, knives,", displayHint: "f _ _ _ s", placeholder: "forks", prefix: "f", textAfter: "and spoons in the dishwasher." },
              { id: "EY_A_3_3", label: "3", textBefore: "I washed the bowl in the kitchen", displayHint: "s _ _ k", placeholder: "sink", prefix: "s", textAfter: "." },
              { id: "EY_A_3_4", label: "4", textBefore: "Listen! That's your phone. My phone has a different", displayHint: "r _ _ _ _ _ _ e", placeholder: "ringtone", prefix: "r", textAfter: "." },
              { id: "EY_A_3_5", label: "5", textBefore: "He put his clean socks away in a", displayHint: "d _ _ _ _ r", placeholder: "drawer", prefix: "d", textAfter: "." }
            ],
            answers: {
              "EY_A_3_1": { expected: ["blender"], explanation: "Kitchen appliance for smoothies: 'blender'." },
              "EY_A_3_2": { expected: ["forks"], explanation: "Cutlery: 'forks'." },
              "EY_A_3_3": { expected: ["sink"], explanation: "Kitchen basin: 'sink'." },
              "EY_A_3_4": { expected: ["ringtone"], explanation: "Phone melody: 'ringtone'." },
              "EY_A_3_5": { expected: ["drawer"], explanation: "Furniture compartment for clothes: 'drawer'." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 What time does Jim get / is Jim getting up every morning? -> does Jim get",
            items: [
              { id: "EY_A_4_1", label: "1", before: "Dad", options: ["leaves", "left"], after: "the office a few minutes ago." },
              { id: "EY_A_4_2", label: "2", before: "", options: ["I try", "I’m trying"], after: "to do this exercise, but I don't understand it." },
              { id: "EY_A_4_3", label: "3", before: "I can't come with you tomorrow.", options: ["I play", "I’m playing"], after: "tennis with Paula." },
              { id: "EY_A_4_4", label: "4", before: "She", options: ["didn’t water", "doesn’t water"], after: "the plants yesterday, so please water them now." },
              { id: "EY_A_4_5", label: "5", before: "We", options: ["were exploring", "explored"], after: "the old town when we got lost." }
            ],
            answers: {
              "EY_A_4_1": { expected: ["left"], explanation: "Past Simple with 'a few minutes ago': left." },
              "EY_A_4_2": { expected: ["I’m trying", "I'm trying"], explanation: "Action happening right now: I'm trying." },
              "EY_A_4_3": { expected: ["I’m playing", "I'm playing"], explanation: "Fixed future arrangement with tomorrow: I'm playing." },
              "EY_A_4_4": { expected: ["didn’t water", "didn't water"], explanation: "Past Simple negative with 'yesterday': didn't water." },
              "EY_A_4_5": { expected: ["were exploring"], explanation: "Past Continuous interrupted by 'when we got lost': were exploring." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the correct form of the verbs. Use will or the Present Perfect.",
            points: 5,
            type: "grammar-gap",
            example: "0 I'm hungry because I haven't had (not have) breakfast.",
            items: [
              { id: "EY_A_5_1", label: "1", before: "'", verb: "you / ever / stay", after: "in a hotel?' 'No, I haven't.'" },
              { id: "EY_A_5_2", label: "2", before: "Max loves animals. I think he", verb: "be", after: "a vet one day." },
              { id: "EY_A_5_3", label: "3", before: "Oh, no! I", verb: "break", after: "my favorite mug." },
              { id: "EY_A_5_4", label: "4", before: "Jim", verb: "make", after: "spaghetti. Try it, it's delicious." },
              { id: "EY_A_5_5", label: "5", before: "What", verb: "you / do", after: "in the future?" }
            ],
            answers: {
              "EY_A_5_1": { expected: ["Have you ever stayed", "have you ever stayed"], explanation: "Present Perfect question with ever: Have you ever stayed." },
              "EY_A_5_2": { expected: ["will be", "'ll be"], explanation: "Future prediction with 'I think': will be." },
              "EY_A_5_3": { expected: ["have broken", "'ve broken"], explanation: "Present Perfect recent event with present result: have broken." },
              "EY_A_5_4": { expected: ["has made", "'s made"], explanation: "Present Perfect recent action: has made." },
              "EY_A_5_5": { expected: ["will you do", "Will you do"], explanation: "Future question with 'in the future': will you do." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Dad is 40 and Mum is two years younger / the youngest than him. -> younger",
            items: [
              { id: "EY_A_6_1", label: "1", before: "I can't play basketball. I'm not", options: ["tall enough", "too tall"], after: "." },
              { id: "EY_A_6_2", label: "2", before: "He always listens", options: ["careful", "carefully"], after: "to his teachers." },
              { id: "EY_A_6_3", label: "3", before: "Do we", options: ["have to", "should"], after: "ask for permission?" },
              { id: "EY_A_6_4", label: "4", before: "I", options: ["can", "mustn’t"], after: "be late! Mum will be angry." },
              { id: "EY_A_6_5", label: "5", before: "That's the", options: ["worse", "worst"], after: "programme on TV." }
            ],
            answers: {
              "EY_A_6_1": { expected: ["tall enough"], explanation: "Adjective + enough: not tall enough." },
              "EY_A_6_2": { expected: ["carefully"], explanation: "Adverb modifying listens: carefully." },
              "EY_A_6_3": { expected: ["have to"], explanation: "Question with auxiliary Do: Do we have to ask." },
              "EY_A_6_4": { expected: ["mustn’t", "mustn't"], explanation: "Obligation / prohibition: mustn't be late." },
              "EY_A_6_5": { expected: ["worst"], explanation: "Superlative with the: the worst." }
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
            title: "Listen to five people talking about health problems. Circle T (true) or F (false).",
            points: 6,
            type: "reading-tf-ds",
            audioTrack: "assets/audio/gg3_track_11_end_of_year.mp3",
            audioTitle: "Track 11 • End-of-Year Test (Units 1–8) • Exercise 7",
            audioDesc: "Listen to Ben, Molly, Duncan, Olivia, and Stuart talking about health problems.",
            example: "0 Ben always goes to see the doctor when he gets earache. -> F",
            items: [
              { id: "EY_A_7_1", label: "1", statement: "Ben doesn't want to stop snorkelling.", options: ["T", "F"] },
              { id: "EY_A_7_2", label: "2", statement: "Molly got headaches, because her eyes got tired.", options: ["T", "F"] },
              { id: "EY_A_7_3", label: "3", statement: "Molly wears glasses now.", options: ["T", "F"] },
              { id: "EY_A_7_4", label: "4", statement: "Duncan got the flu eight months ago.", options: ["T", "F"] },
              { id: "EY_A_7_5", label: "5", statement: "Olivia's dad put cold tea on her mosquito bites.", options: ["T", "F"] },
              { id: "EY_A_7_6", label: "6", statement: "Spicy food is bad for Stuart's stomach.", options: ["T", "F"] }
            ],
            answers: {
              "EY_A_7_1": { expected: ["T"], explanation: "True: 'But I can't stop snorkelling. I love it!'" },
              "EY_A_7_2": { expected: ["T"], explanation: "True: '...and my eyes got tired.'" },
              "EY_A_7_3": { expected: ["T"], explanation: "True: '...and started wearing glasses.'" },
              "EY_A_7_4": { expected: ["F"], explanation: "False: 'I had the flu six months ago' (not eight months)." },
              "EY_A_7_5": { expected: ["F"], explanation: "False: Mum put lemon juice on the bites; Dad only said cold tea is good." },
              "EY_A_7_6": { expected: ["T"], explanation: "True: 'Spicy food also gives me a stomachache sometimes.'" }
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
            title: "Complete the dialogues. Match 1–8 with a–h.",
            points: 8,
            type: "matching-dialogue",
            optionsList: [
              { key: "a", text: "I agree with you." },
              { key: "b", text: "I don't mind. You choose." },
              { key: "c", text: "I fell and that's why I've got all these bruises." },
              { key: "d", text: "Yes, you're right. I really don't feel well." },
              { key: "e", text: "No, thanks, I'm just looking." },
              { key: "f", text: "Sorry, we don't." },
              { key: "g", text: "Sorry, you can't. I'm online right now." },
              { key: "h", text: "That sounds fun. Thank you." },
              { key: "i", text: "No problem. (example)" }
            ],
            example: "0 A: Can you help me with the cooking, please? -> B: i (No problem.)",
            items: [
              { id: "EY_A_8_1", label: "1", prompt: "A: Would you like to watch a DVD or listen to music?" },
              { id: "EY_A_8_2", label: "2", prompt: "A: Can I use the tablet?" },
              { id: "EY_A_8_3", label: "3", prompt: "A: Do you have this in red?" },
              { id: "EY_A_8_4", label: "4", prompt: "A: Are you free on Saturday afternoon? Would you like to hang out?" },
              { id: "EY_A_8_5", label: "5", prompt: "A: I think this singer is great. What do you think?" },
              { id: "EY_A_8_6", label: "6", prompt: "A: Can I help you?" },
              { id: "EY_A_8_7", label: "7", prompt: "A: I think you should lie down." },
              { id: "EY_A_8_8", label: "8", prompt: "A: What happened?" }
            ],
            answers: {
              "EY_A_8_1": { expected: ["b"], explanation: "b: 'I don't mind. You choose.'" },
              "EY_A_8_2": { expected: ["g"], explanation: "g: 'Sorry, you can't. I'm online right now.'" },
              "EY_A_8_3": { expected: ["f"], explanation: "f: 'Sorry, we don't.'" },
              "EY_A_8_4": { expected: ["h"], explanation: "h: 'That sounds fun. Thank you.'" },
              "EY_A_8_5": { expected: ["a"], explanation: "a: 'I agree with you.'" },
              "EY_A_8_6": { expected: ["e"], explanation: "e: 'No, thanks, I'm just looking.'" },
              "EY_A_8_7": { expected: ["d"], explanation: "d: 'Yes, you're right. I really don't feel well.'" },
              "EY_A_8_8": { expected: ["c"], explanation: "c: 'I fell and that's why I've got all these bruises.'" }
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
            title: "Read the article and complete the sentences with one word.",
            points: 6,
            type: "reading-qa",
            passageTitle: "Make the world a better place",
            passage: `Small actions can make the world better.

Start with your family
• Do some chores: hang out the washing or take out the rubbish. Your mum and dad will be happy.
• Give your parents a big hug and say you love them to make them feel good.

Do something nice for other people
• Invite new neighbours to your home. Make them feel welcome.
• Collect money and food for charity that helps poor people.

Do something for your neighbourhood too
• Clean up the streets with your friends so your neighbourhood can look nice.
• Plant trees and flowers in the park to make it more beautiful.`,
            example: "0 Small actions can make the world better. -> better",
            items: [
              { id: "EY_A_9_1", label: "1", question: "Your parents will be happy when you do some", placeholder: "one word..." },
              { id: "EY_A_9_2", label: "2", question: "Your parents will feel good when you give them a big", placeholder: "one word..." },
              { id: "EY_A_9_3", label: "3", question: "Make new neighbours feel welcome –", placeholder: "one word...", after: "them to your home." },
              { id: "EY_A_9_4", label: "4", question: "You can collect food and", placeholder: "one word...", after: "to help poor people." },
              { id: "EY_A_9_5", label: "5", question: "Your", placeholder: "one word...", after: "can be nice when you clean up the streets." },
              { id: "EY_A_9_6", label: "6", question: "More flowers and trees can make the", placeholder: "one word...", after: "beautiful." }
            ],
            answers: {
              "EY_A_9_1": { expected: ["chores"], explanation: "'Do some chores: hang out the washing or take out the rubbish.'" },
              "EY_A_9_2": { expected: ["hug"], explanation: "'Give your parents a big hug...'" },
              "EY_A_9_3": { expected: ["invite", "Invite"], explanation: "'Invite new neighbours to your home.'" },
              "EY_A_9_4": { expected: ["money"], explanation: "'Collect money and food for charity...'" },
              "EY_A_9_5": { expected: ["neighbourhood", "neighborhood"], explanation: "'...so your neighbourhood can look nice.'" },
              "EY_A_9_6": { expected: ["park"], explanation: "'Plant trees and flowers in the park...'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "End-of-Year Test B — Units 1–8",
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
            title: "Complete the text with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["cottage", "hang", "own", "rubbish", "shake", "village"],
            example: "My family and I live in a ⁰cottage...",
            usedInExample: ["cottage"],
            passageTitle: "HOME SWEET HOME by Nigel Barnes",
            sentences: [
              { textBefore: "My family and I live in a cottage in a small", gapId: "EY_B_1_1", label: "1", textAfter: "in Yorkshire. My parents have their" },
              { textBefore: "", gapId: "EY_B_1_2", label: "2", textAfter: "business here and my brother and I go to the local school. People here are very friendly. They chat to their neighbours when they" },
              { textBefore: "", gapId: "EY_B_1_3", label: "3", textAfter: "out the washing in the garden or take out the" },
              { textBefore: "", gapId: "EY_B_1_4", label: "4", textAfter: ". They smile, say good morning and" },
              { textBefore: "", gapId: "EY_B_1_5", label: "5", textAfter: "hands when they meet in the street. It's a great place to live." }
            ],
            answers: {
              "EY_B_1_1": { expected: ["village"], explanation: "'in a small village in Yorkshire'." },
              "EY_B_1_2": { expected: ["own"], explanation: "'their own business here'." },
              "EY_B_1_3": { expected: ["hang"], explanation: "'hang out the washing'." },
              "EY_B_1_4": { expected: ["rubbish"], explanation: "'take out the rubbish'." },
              "EY_B_1_5": { expected: ["shake"], explanation: "'shake hands when they meet'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            context: "The best baker's in town is The Pie Shop.",
            example: "The best 0 baker's / newsagent's in town is The Pie Shop. -> baker's",
            items: [
              { id: "EY_B_2_1", label: "1", before: "Mr Henley, the owner, makes the bread and pies. When they come out of the", options: ["oven", "pot"], after: ", they smell delicious!" },
              { id: "EY_B_2_2", label: "2", before: "Mr Henley's daughters help him at the shop. They", options: ["beat", "peel"], after: "and chop the apples for the pies and serve the customers." },
              { id: "EY_B_2_3", label: "3", before: "They also clean", options: ["up", "away"], after: "the kitchen every evening." },
              { id: "EY_B_2_4", label: "4", before: "People stand in a", options: ["cashier", "queue"], after: "to buy bread from The Pie Shop." },
              { id: "EY_B_2_5", label: "5", before: "Tourists come to", options: ["try", "check"], after: "the local food – our area is famous for apple pies!" }
            ],
            answers: {
              "EY_B_2_1": { expected: ["oven"], explanation: "'come out of the oven'." },
              "EY_B_2_2": { expected: ["peel"], explanation: "'peel and chop the apples'." },
              "EY_B_2_3": { expected: ["up"], explanation: "'clean up the kitchen'." },
              "EY_B_2_4": { expected: ["queue"], explanation: "'stand in a queue'." },
              "EY_B_2_5": { expected: ["try"], explanation: "'try the local food'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences.",
            points: 5,
            type: "letter-hint",
            example: "0 When it gets da r k, we turn on the lights. -> dark",
            items: [
              { id: "EY_B_3_1", label: "1", textBefore: "He looked at his face in the", displayHint: "m _ _ _ _ r", placeholder: "mirror", prefix: "m", textAfter: "before he went out." },
              { id: "EY_B_3_2", label: "2", textBefore: "Please put your clean T-shirts away in a", displayHint: "d _ _ _ _ r", placeholder: "drawer", prefix: "d", textAfter: "." },
              { id: "EY_B_3_3", label: "3", textBefore: "I put the dirty plates, knives,", displayHint: "s _ _ _ _ s", placeholder: "spoons", prefix: "s", textAfter: "and forks in the dishwasher." },
              { id: "EY_B_3_4", label: "4", textBefore: "You can make a smoothie in the", displayHint: "b _ _ _ _ _ r", placeholder: "blender", prefix: "b", textAfter: "with fruit and milk." },
              { id: "EY_B_3_5", label: "5", textBefore: "I must charge my phone. The", displayHint: "b _ _ _ _ _ y", placeholder: "battery", prefix: "b", textAfter: "is 2%." }
            ],
            answers: {
              "EY_B_3_1": { expected: ["mirror"], explanation: "'mirror'." },
              "EY_B_3_2": { expected: ["drawer"], explanation: "'drawer'." },
              "EY_B_3_3": { expected: ["spoons"], explanation: "'spoons'." },
              "EY_B_3_4": { expected: ["blender"], explanation: "'blender'." },
              "EY_B_3_5": { expected: ["battery"], explanation: "'battery'." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 What time does Jim get / is Jim getting up every morning? -> does Jim get",
            items: [
              { id: "EY_B_4_1", label: "1", before: "We", options: ["meet", "We’re meeting"], after: "our friends at three o'clock tomorrow." },
              { id: "EY_B_4_2", label: "2", before: "Ann", options: ["was waiting", "waited"], after: "for a bus when I saw her." },
              { id: "EY_B_4_3", label: "3", before: "Mum", options: ["goes", "went"], after: "to France two years ago." },
              { id: "EY_B_4_4", label: "4", before: "I", options: ["don’t tidy", "didn’t tidy"], after: "my room last weekend, so I'm doing it now." },
              { id: "EY_B_4_5", label: "5", before: "They", options: ["try", "They’re trying"], after: "to do the exercise, but they don't understand it." }
            ],
            answers: {
              "EY_B_4_1": { expected: ["We’re meeting", "We're meeting"], explanation: "Future arrangement: We're meeting." },
              "EY_B_4_2": { expected: ["was waiting"], explanation: "Ongoing past action: was waiting." },
              "EY_B_4_3": { expected: ["went"], explanation: "Past Simple with two years ago: went." },
              "EY_B_4_4": { expected: ["didn’t tidy", "didn't tidy"], explanation: "Past Simple negative with last weekend: didn't tidy." },
              "EY_B_4_5": { expected: ["They’re trying", "They're trying"], explanation: "Action in progress now: They're trying." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the correct form of the verbs. Use will or the Present Perfect.",
            points: 5,
            type: "grammar-gap",
            example: "0 I'm hungry because I haven't had (not have) breakfast.",
            items: [
              { id: "EY_B_5_1", label: "1", before: "'", verb: "you / ever / visit", after: "London?' 'No, I haven't.'" },
              { id: "EY_B_5_2", label: "2", before: "Oh, no! I", verb: "break", after: "my favorite mug." },
              { id: "EY_B_5_3", label: "3", before: "Amy loves painting. I think she", verb: "be", after: "an artist one day." },
              { id: "EY_B_5_4", label: "4", before: "Where", verb: "you / live", after: "in the future?" },
              { id: "EY_B_5_5", label: "5", before: "Max", verb: "bake", after: "a cake. Try it, it's delicious." }
            ],
            answers: {
              "EY_B_5_1": { expected: ["Have you ever visited", "have you ever visited"], explanation: "Present Perfect question: Have you ever visited." },
              "EY_B_5_2": { expected: ["have broken", "'ve broken"], explanation: "Present Perfect: have broken." },
              "EY_B_5_3": { expected: ["will be", "'ll be"], explanation: "Prediction with 'I think': will be." },
              "EY_B_5_4": { expected: ["will you live", "Will you live"], explanation: "Future question: will you live." },
              "EY_B_5_5": { expected: ["has baked", "'s baked"], explanation: "Present Perfect: has baked." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Dad is 40 and Mum is two years younger / the youngest than him. -> younger",
            items: [
              { id: "EY_B_6_1", label: "1", before: "We", options: ["don’t should", "have to"], after: "go to school tomorrow." },
              { id: "EY_B_6_2", label: "2", before: "That's the", options: ["funnier", "funniest"], after: "programme on TV." },
              { id: "EY_B_6_3", label: "3", before: "I can't carry that. I'm not", options: ["strong enough", "too strong"], after: "." },
              { id: "EY_B_6_4", label: "4", before: "She can sing very", options: ["good", "well"], after: "." },
              { id: "EY_B_6_5", label: "5", before: "Yes, you", options: ["can", "mustn’t"], after: "borrow my tablet. No problem." }
            ],
            answers: {
              "EY_B_6_1": { expected: ["have to"], explanation: "'We have to go to school tomorrow'." },
              "EY_B_6_2": { expected: ["funniest"], explanation: "Superlative: 'the funniest'." },
              "EY_B_6_3": { expected: ["strong enough"], explanation: "Adjective + enough: 'not strong enough'." },
              "EY_B_6_4": { expected: ["well"], explanation: "Adverb modifying sing: 'very well'." },
              "EY_B_6_5": { expected: ["can"], explanation: "Giving permission: 'you can borrow'." }
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
            title: "Listen to five people talking about health problems. Circle T (true) or F (false).",
            points: 6,
            type: "reading-tf-ds",
            audioTrack: "assets/audio/gg3_track_11_end_of_year.mp3",
            audioTitle: "Track 11 • End-of-Year Test (Units 1–8) • Exercise 7",
            audioDesc: "Listen to Ben, Molly, Duncan, Olivia, and Stuart talking about health problems.",
            example: "0 Ben always goes to see the doctor when he gets earache. -> F",
            items: [
              { id: "EY_B_7_1", label: "1", statement: "Ben has stopped snorkelling.", options: ["T", "F"] },
              { id: "EY_B_7_2", label: "2", statement: "Molly doesn't get headaches now.", options: ["T", "F"] },
              { id: "EY_B_7_3", label: "3", statement: "Duncan was ill for six days.", options: ["T", "F"] },
              { id: "EY_B_7_4", label: "4", statement: "Duncan had to stay in bed.", options: ["T", "F"] },
              { id: "EY_B_7_5", label: "5", statement: "Olivia's mum put lemon juice on her mosquito bites.", options: ["T", "F"] },
              { id: "EY_B_7_6", label: "6", statement: "Stuart's granny thinks rice is good for a stomachache.", options: ["T", "F"] }
            ],
            answers: {
              "EY_B_7_1": { expected: ["F"], explanation: "False: 'But I can't stop snorkelling. I love it!'" },
              "EY_B_7_2": { expected: ["T"], explanation: "True: 'My headaches stopped when I went to the eye doctor...'" },
              "EY_B_7_3": { expected: ["F"], explanation: "False: 'I was ill for eight days' (not six)." },
              "EY_B_7_4": { expected: ["T"], explanation: "True: '...she said stay in bed, drink a lot of warm tea and rest.'" },
              "EY_B_7_5": { expected: ["T"], explanation: "True: 'Mum put lemon juice on the bites, and they felt better.'" },
              "EY_B_7_6": { expected: ["T"], explanation: "True: 'Granny says bananas, rice, or toast are also good...'" }
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
            title: "Complete the dialogues. Match 1–8 with a–h.",
            points: 8,
            type: "matching-dialogue",
            optionsList: [
              { key: "a", text: "I disagree with you." },
              { key: "b", text: "No, thanks, I'm just looking." },
              { key: "c", text: "Not now, sorry. I'm using it at the moment." },
              { key: "d", text: "Yes, you're right. I really don't feel well." },
              { key: "e", text: "Yes, I'd love to, thanks." },
              { key: "f", text: "I fell off my bike and broke my arm." },
              { key: "g", text: "Yes, we do. Here you are." },
              { key: "h", text: "You choose. I don't mind." },
              { key: "i", text: "No problem. (example)" }
            ],
            example: "0 A: Can you help me with the cooking, please? -> B: i (No problem.)",
            items: [
              { id: "EY_B_8_1", label: "1", prompt: "A: Do you have these in a medium?" },
              { id: "EY_B_8_2", label: "2", prompt: "A: This is a very funny programme. What do you think?" },
              { id: "EY_B_8_3", label: "3", prompt: "A: I think you should lie down." },
              { id: "EY_B_8_4", label: "4", prompt: "A: Would you like to go cycling or swimming?" },
              { id: "EY_B_8_5", label: "5", prompt: "A: What happened?" },
              { id: "EY_B_8_6", label: "6", prompt: "A: Would you like to hang out on Friday?" },
              { id: "EY_B_8_7", label: "7", prompt: "A: Could I borrow your phone?" },
              { id: "EY_B_8_8", label: "8", prompt: "A: Can I help you?" }
            ],
            answers: {
              "EY_B_8_1": { expected: ["g"], explanation: "g: 'Yes, we do. Here you are.'" },
              "EY_B_8_2": { expected: ["a"], explanation: "a: 'I disagree with you.'" },
              "EY_B_8_3": { expected: ["d"], explanation: "d: 'Yes, you're right. I really don't feel well.'" },
              "EY_B_8_4": { expected: ["h"], explanation: "h: 'You choose. I don't mind.'" },
              "EY_B_8_5": { expected: ["f"], explanation: "f: 'I fell off my bike and broke my arm.'" },
              "EY_B_8_6": { expected: ["e"], explanation: "e: 'Yes, I'd love to, thanks.'" },
              "EY_B_8_7": { expected: ["c"], explanation: "c: 'Not now, sorry. I'm using it at the moment.'" },
              "EY_B_8_8": { expected: ["b"], explanation: "b: 'No, thanks, I'm just looking.'" }
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
            title: "Read the article and complete the sentences with one word.",
            points: 6,
            type: "reading-qa",
            passageTitle: "Make the world a better place",
            passage: `Small actions can make the world better.

Start with your family
• Do some chores: hang out the washing or take out the rubbish. Your mum and dad will be happy.
• Give your parents a big hug and say you love them to make them feel good.

Do something nice for other people
• Invite new neighbours to your home. Make them feel welcome.
• Collect money and food for charity that helps poor people.

Do something for your neighbourhood too
• Clean up the streets with your friends so your neighbourhood can look nice.
• Plant trees and flowers in the park to make it more beautiful.`,
            example: "0 Small actions can make the world better. -> better",
            items: [
              { id: "EY_B_9_1", label: "1", question: "Your parents will be", placeholder: "one word...", after: "when you do some chores." },
              { id: "EY_B_9_2", label: "2", question: "Tell your parents you love them and give them a big", placeholder: "one word...", after: "." },
              { id: "EY_B_9_3", label: "3", question: "Make new", placeholder: "one word...", after: "feel welcome – invite them to your home." },
              { id: "EY_B_9_4", label: "4", question: "You can collect", placeholder: "one word...", after: "and money to help poor people." },
              { id: "EY_B_9_5", label: "5", question: "Your neighbourhood can look nice when you clean up the", placeholder: "one word...", after: "." },
              { id: "EY_B_9_6", label: "6", question: "More flowers and", placeholder: "one word...", after: "can make the park beautiful." }
            ],
            answers: {
              "EY_B_9_1": { expected: ["happy"], explanation: "'Your mum and dad will be happy.'" },
              "EY_B_9_2": { expected: ["hug"], explanation: "'...give them a big hug...'" },
              "EY_B_9_3": { expected: ["neighbours", "neighbors"], explanation: "'Make new neighbours feel welcome...'" },
              "EY_B_9_4": { expected: ["food"], explanation: "'Collect money and food for charity...'" },
              "EY_B_9_5": { expected: ["streets"], explanation: "'Clean up the streets with your friends...'" },
              "EY_B_9_6": { expected: ["trees"], explanation: "'Plant trees and flowers in the park...'" }
            }
          }
        ]
      }
    }
  }
};
