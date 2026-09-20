/**
 * Go Getter 3 - Unit 4 Language Test
 * Technology & Gadgets / Past Continuous & Adverbs of Manner
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_4_DATA = {
  id: "unit4",
  courseId: "gogetter3",
  number: 4,
  title: "Technology & Gadgets",
  description: "Vocabulary: Household appliances & gadgets, Smartphone features. Grammar: Past Continuous, Past Simple vs Past Continuous with when, Adverbs of manner. Communication: Reacting to news and sympathy.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 4",
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
            title: "Complete the sentences.",
            points: 7,
            type: "letter-hint",
            example: "0 You use a DVD player to watch DVDs.",
            items: [
              { id: "A_1_1", label: "1", textBefore: "You use a", displayHint: "b _ _ _ _ _ _", placeholder: "blender", prefix: "b", textAfter: "to make smoothies with fruit and yoghurt." },
              { id: "A_1_2", label: "2", textBefore: "You put a USB", displayHint: "s _ _ _ _", placeholder: "stick", prefix: "s", textAfter: "into a port on your computer or laptop." },
              { id: "A_1_3", label: "3", textBefore: "You use a", displayHint: "r _ _ _ _ _", placeholder: "remote", prefix: "r", textAfter: "control to change the channels on your TV." },
              { id: "A_1_4", label: "4", textBefore: "You use an", displayHint: "e _ _ _ _ _ _ _", placeholder: "electric", prefix: "e", textAfter: "toothbrush to clean your teeth." },
              { id: "A_1_5", label: "5", textBefore: "You use a games", displayHint: "c _ _ _ _ _ _", placeholder: "console", prefix: "c", textAfter: "to play computer games." },
              { id: "A_1_6", label: "6", textBefore: "You use a", displayHint: "t _ _ _ _ _ _", placeholder: "toaster", prefix: "t", textAfter: "to make toast." },
              { id: "A_1_7", label: "7", textBefore: "You use a", displayHint: "m _ _ _ _ _ _ _ _", placeholder: "microwave", prefix: "m", textAfter: "oven to warm up food or cook it." }
            ],
            answers: {
              "A_1_1": { expected: ["blender"], explanation: "An appliance used for pureeing food and making smoothies is a blender." },
              "A_1_2": { expected: ["stick"], explanation: "A flash storage drive is a USB stick." },
              "A_1_3": { expected: ["remote"], explanation: "The device to change TV channels from a distance is a remote control." },
              "A_1_4": { expected: ["electric"], explanation: "A battery/power operated brush is an electric toothbrush." },
              "A_1_5": { expected: ["console"], explanation: "A dedicated machine for playing video games is a games console." },
              "A_1_6": { expected: ["toaster"], explanation: "An electrical device for toasting slices of bread is a toaster." },
              "A_1_7": { expected: ["microwave"], explanation: "An oven that heats food using electromagnetic radiation is a microwave oven." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the blog post with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["battery", "off", "on", "portable", "ringtone", "touch screen"],
            example: "I turn my phone ⁰on when I get up...",
            usedInExample: ["on"],
            context: "My favourite thing? My smartphone — I can't live without it!",
            sentences: [
              { textBefore: "I turn my phone on when I get up in the morning and I only turn it", gapId: "A_2_1", label: "1", textAfter: "when I go to bed." },
              { textBefore: "I take it everywhere! My phone's", gapId: "A_2_2", label: "2", textAfter: "is old and it doesn't last long, so I take my" },
              { textBefore: "", gapId: "A_2_3", label: "3", textAfter: "charger with me too. I clean the" },
              { textBefore: "", gapId: "A_2_4", label: "4", textAfter: "every day because it gets dirty. My phone has a great" },
              { textBefore: "", gapId: "A_2_5", label: "5", textAfter: ". It's Rhianna's new song. I love it!" }
            ],
            answers: {
              "A_2_1": { expected: ["off"], explanation: "Collocation: 'turn off' (switch off)." },
              "A_2_2": { expected: ["battery"], explanation: "The power storage unit in a smartphone is its battery." },
              "A_2_3": { expected: ["portable"], explanation: "A lightweight power bank you carry is a portable charger." },
              "A_2_4": { expected: ["touch screen", "touchscreen"], explanation: "The glass interface of a phone is a touch screen." },
              "A_2_5": { expected: ["ringtone"], explanation: "The sound a phone makes when someone calls is a ringtone." }
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
            title: "Complete the dialogue with the Past Continuous form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 Anne: What were you doing (you / do) last Saturday afternoon?",
            items: [
              { id: "A_3_1", label: "1", before: "Mike: I", verb: "read", after: "a book in the sun. My sister and brother" },
              { id: "A_3_2", label: "2", before: "", verb: "swim", after: "." },
              { id: "A_3_3", label: "3", before: "", verb: "you and Eva / enjoy", after: "the sunshine too?" },
              { id: "A_3_4", label: "4", before: "Anne: No, we", verb: "not have", after: "fun. We" },
              { id: "A_3_5", label: "5", before: "", verb: "do", after: "chores at home.<br>Mike: Poor you!" }
            ],
            answers: {
              "A_3_1": { expected: ["was reading"], explanation: "Past Continuous 1st person singular: was + reading." },
              "A_3_2": { expected: ["were swimming"], explanation: "Past Continuous plural subject (sister and brother): were + swimming (double 'm')." },
              "A_3_3": { expected: ["Were you and Eva enjoying"], explanation: "Past Continuous question plural: Were + you and Eva + enjoying?" },
              "A_3_4": { expected: ["weren't having", "were not having"], explanation: "Past Continuous negative plural: weren't + having." },
              "A_3_5": { expected: ["were doing"], explanation: "Past Continuous affirmative: were + doing." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 Dora cycled / was cycling to school when she saw you. -> was cycling",
            items: [
              { id: "A_4_1", label: "1", before: "We", options: ["slept", "were sleeping"], after: "when we heard a strange noise." },
              { id: "A_4_2", label: "2", before: "I was plugging in the TV when I", options: ["broke", "was breaking"], after: "it." },
              { id: "A_4_3", label: "3", before: "Paul was jogging in the park when it", options: ["started", "was starting"], after: "to rain." },
              { id: "A_4_4", label: "4", before: "I", options: ["dried", "was drying"], after: "my hair when I dropped the hairdryer." }
            ],
            answers: {
              "A_4_1": { expected: ["were sleeping"], explanation: "Ongoing background action interrupted by heard: were sleeping." },
              "A_4_2": { expected: ["broke"], explanation: "Short completed interrupting action in Past Simple: broke." },
              "A_4_3": { expected: ["started"], explanation: "Short event that interrupted jogging: started." },
              "A_4_4": { expected: ["was drying"], explanation: "Ongoing action interrupted when hairdryer was dropped: was drying." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with adverbs of manner formed from the adjectives in brackets.",
            points: 4,
            type: "grammar-gap",
            example: "0 I don't speak French well, but I'm good at English. (good)",
            items: [
              { id: "A_5_1", label: "1", before: "Our team played", verb: "bad", after: "and lost the match." },
              { id: "A_5_2", label: "2", before: "Please do your work", verb: "careful", after: "and don't make mistakes." },
              { id: "A_5_3", label: "3", before: "Joe ran very", verb: "fast", after: "because he wanted to catch the bus." },
              { id: "A_5_4", label: "4", before: "The man shouted", verb: "angry", after: "at the children when they broke his kitchen window." }
            ],
            answers: {
              "A_5_1": { expected: ["badly"], explanation: "Adverb of manner for bad: badly." },
              "A_5_2": { expected: ["carefully"], explanation: "Adverb of manner for careful: carefully." },
              "A_5_3": { expected: ["fast"], explanation: "Irregular adverb: fast remains fast (not fastly)." },
              "A_5_4": { expected: ["angrily"], explanation: "Adverb for angry (change 'y' to 'i'): angrily." }
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
            title: "Complete the dialogues with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["happened", "hear", "look", "shame", "what's", "worried"],
            example: "A: ⁰You look upset.",
            usedInExample: ["look"],
            sentences: [
              { textBefore: "A: You look upset. What", gapId: "A_6_1", label: "1", textAfter: "?<br>B: I got a bad mark in my English test." },
              { textBefore: "A: I'm sorry to", gapId: "A_6_2", label: "2", textAfter: "that!" },
              { textBefore: "A: You look", gapId: "A_6_3", label: "3", textAfter: ".<br>B: My dog is sick.<br>A: Oh, no!" },
              { textBefore: "A:", gapId: "A_6_4", label: "4", textAfter: "wrong?<br>B: I lost my smartphone.<br>A: That's a" },
              { textBefore: "", gapId: "A_6_5", label: "5", textAfter: "!" }
            ],
            answers: {
              "A_6_1": { expected: ["happened"], explanation: "Inquiring about past event: 'What happened?'" },
              "A_6_2": { expected: ["hear"], explanation: "Expressing sympathy: 'I'm sorry to hear that!'" },
              "A_6_3": { expected: ["worried"], explanation: "Describing concerned expression: 'You look worried.'" },
              "A_6_4": { expected: ["What's", "whats"], explanation: "Inquiring about a problem: 'What's wrong?'" },
              "A_6_5": { expected: ["shame"], explanation: "Sympathetic phrase: 'That's a shame!'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 4",
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
            title: "Complete the sentences.",
            points: 7,
            type: "letter-hint",
            example: "0 You use a DVD player to watch DVDs.",
            items: [
              { id: "B_1_1", label: "1", textBefore: "You use a", displayHint: "r _ _ _ _ _", placeholder: "remote", prefix: "r", textAfter: "control to change the channels on your TV." },
              { id: "B_1_2", label: "2", textBefore: "You use a games", displayHint: "c _ _ _ _ _ _", placeholder: "console", prefix: "c", textAfter: "to play computer games." },
              { id: "B_1_3", label: "3", textBefore: "You use a", displayHint: "m _ _ _ _ _ _ _ _", placeholder: "microwave", prefix: "m", textAfter: "oven to warm up food or cook it." },
              { id: "B_1_4", label: "4", textBefore: "You use a", displayHint: "b _ _ _ _ _ _", placeholder: "blender", prefix: "b", textAfter: "to make smoothies with fruit and yoghurt." },
              { id: "B_1_5", label: "5", textBefore: "You use a", displayHint: "t _ _ _ _ _ _", placeholder: "toaster", prefix: "t", textAfter: "to make toast." },
              { id: "B_1_6", label: "6", textBefore: "You put a USB", displayHint: "s _ _ _ _", placeholder: "stick", prefix: "s", textAfter: "into a port on your computer or laptop." },
              { id: "B_1_7", label: "7", textBefore: "You use an electric", displayHint: "t _ _ _ _ _ _ _ _ _", placeholder: "toothbrush", prefix: "t", textAfter: "to clean your teeth." }
            ],
            answers: {
              "B_1_1": { expected: ["remote"], explanation: "Remote control." },
              "B_1_2": { expected: ["console"], explanation: "Games console." },
              "B_1_3": { expected: ["microwave"], explanation: "Microwave oven." },
              "B_1_4": { expected: ["blender"], explanation: "Blender for fruit smoothies." },
              "B_1_5": { expected: ["toaster"], explanation: "Toaster for slices of bread." },
              "B_1_6": { expected: ["stick"], explanation: "USB stick." },
              "B_1_7": { expected: ["toothbrush"], explanation: "Electric toothbrush." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the blog post with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["battery", "off", "on", "portable", "ringtone", "touch screen"],
            example: "I only turn it ⁰off when I go to bed...",
            usedInExample: ["off"],
            context: "I can't live without my smartphone. It's my favourite thing.",
            sentences: [
              { textBefore: "I only turn it off when I go to bed and I turn it", gapId: "B_2_1", label: "1", textAfter: "in the morning." },
              { textBefore: "I always have it with me. I take my", gapId: "B_2_2", label: "2", textAfter: "charger too because my" },
              { textBefore: "", gapId: "B_2_3", label: "3", textAfter: "is old and it doesn't last long. I clean the" },
              { textBefore: "", gapId: "B_2_4", label: "4", textAfter: "every morning because it gets dirty. My phone has got a great" },
              { textBefore: "", gapId: "B_2_5", label: "5", textAfter: ", but Mum says it's too loud." }
            ],
            answers: {
              "B_2_1": { expected: ["on"], explanation: "Collocation: 'turn on' (switch on in the morning)." },
              "B_2_2": { expected: ["portable"], explanation: "A portable charger (external power bank)." },
              "B_2_3": { expected: ["battery"], explanation: "A phone's battery supplies electrical power." },
              "B_2_4": { expected: ["touch screen", "touchscreen"], explanation: "A phone touch screen gets smudged and dirty." },
              "B_2_5": { expected: ["ringtone"], explanation: "A ringtone is heard when incoming calls arrive." }
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
            title: "Complete the dialogue with the Past Continuous form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 Judy: What were you doing (you / do) on Friday afternoon?",
            items: [
              { id: "B_3_1", label: "1", before: "Pete: It was cold, so I", verb: "play", after: "computer games in my room. My brothers" },
              { id: "B_3_2", label: "2", before: "", verb: "watch", after: "TV." },
              { id: "B_3_3", label: "3", before: "", verb: "you and Brian / relax", after: "too?" },
              { id: "B_3_4", label: "4", before: "Judy: No, we", verb: "not have", after: "fun. We" },
              { id: "B_3_5", label: "5", before: "", verb: "study", after: "for a Maths test.<br>Pete: Poor you!" }
            ],
            answers: {
              "B_3_1": { expected: ["was playing"], explanation: "Past Continuous 1st person: was + playing." },
              "B_3_2": { expected: ["were watching"], explanation: "Past Continuous plural: were + watching." },
              "B_3_3": { expected: ["Were you and Brian relaxing"], explanation: "Past Continuous question plural: Were + you and Brian + relaxing?" },
              "B_3_4": { expected: ["weren't having", "were not having"], explanation: "Past Continuous negative: weren't + having." },
              "B_3_5": { expected: ["were studying"], explanation: "Past Continuous affirmative plural: were + studying." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 Dora cycled / was cycling to school when she saw you. -> was cycling",
            items: [
              { id: "B_4_1", label: "1", before: "Ron was running in the park when it", options: ["started", "was starting"], after: "to snow." },
              { id: "B_4_2", label: "2", before: "They were sleeping when they", options: ["heard", "were hearing"], after: "a strange noise." },
              { id: "B_4_3", label: "3", before: "I", options: ["had", "was having"], after: "a shower when the water stopped." },
              { id: "B_4_4", label: "4", before: "Were you unplugging the computer when you", options: ["broke", "were breaking"], after: "the screen?" }
            ],
            answers: {
              "B_4_1": { expected: ["started"], explanation: "Short event that interrupted running: started." },
              "B_4_2": { expected: ["heard"], explanation: "Short event that interrupted sleep: heard." },
              "B_4_3": { expected: ["was having"], explanation: "Ongoing background action: was having." },
              "B_4_4": { expected: ["broke"], explanation: "Single instant action breaking the screen: broke." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with adverbs of manner formed from the adjectives in brackets.",
            points: 4,
            type: "grammar-gap",
            example: "0 I don't speak French well, but I'm good at English. (good)",
            items: [
              { id: "B_5_1", label: "1", before: "Please don't drive too", verb: "fast", after: ". It's dangerous." },
              { id: "B_5_2", label: "2", before: "I did my homework", verb: "careful", after: "and I didn't make any mistakes." },
              { id: "B_5_3", label: "3", before: "The football team played", verb: "bad", after: "and lost the match." },
              { id: "B_5_4", label: "4", before: "The little girl laughed", verb: "happy", after: "when she saw her birthday present." }
            ],
            answers: {
              "B_5_1": { expected: ["fast"], explanation: "Fast remains fast as an adverb." },
              "B_5_2": { expected: ["carefully"], explanation: "Adverb of manner: carefully." },
              "B_5_3": { expected: ["badly"], explanation: "Adverb of manner: badly." },
              "B_5_4": { expected: ["happily"], explanation: "Adverb of manner (y -> ily): happily." }
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
            title: "Complete the dialogues with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["look", "shame", "terrible", "upset", "what", "wrong"],
            example: "A: ⁰You look worried.",
            usedInExample: ["look"],
            sentences: [
              { textBefore: "A: You look worried. What's", gapId: "B_6_1", label: "1", textAfter: "?<br>B: My cat is sick." },
              { textBefore: "A: Oh no! That's", gapId: "B_6_2", label: "2", textAfter: "!" },
              { textBefore: "A: You look", gapId: "B_6_3", label: "3", textAfter: ".<br>B: I got a bad mark in my History test.<br>A: That's a" },
              { textBefore: "", gapId: "B_6_4", label: "4", textAfter: "!" },
              { textBefore: "A:", gapId: "B_6_5", label: "5", textAfter: "happened?<br>B: I can't find my dog.<br>A: Oh, no!" }
            ],
            answers: {
              "B_6_1": { expected: ["wrong"], explanation: "'What's wrong?'" },
              "B_6_2": { expected: ["terrible"], explanation: "'That's terrible!'" },
              "B_6_3": { expected: ["upset"], explanation: "'You look upset.'" },
              "B_6_4": { expected: ["shame"], explanation: "'That's a shame!'" },
              "B_6_5": { expected: ["What", "what"], explanation: "'What happened?'" }
            }
          }
        ]
      }
    }
  }
};
