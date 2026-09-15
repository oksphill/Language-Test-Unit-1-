/**
 * Language Test Unit 1 - Test Data (Variant A & Variant B)
 * Based on Pearson Education Limited 2019 Photocopiable Test Sheets
 */

const TEST_DATA = {
  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 1",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 16,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Look at the picture and complete the description.",
            points: 5,
            type: "word-bank",
            imageKey: "mrs_cook",
            wordBank: ["bracelets", "earrings", "floral", "handbag", "rings", "tie"],
            example: "Mrs Cook loves nice accessories. She is wearing gold ⁰earrings in her ears.",
            usedInExample: ["earrings"],
            sentences: [
              {
                textBefore: "She has three",
                gapId: "A_1_1",
                label: "1",
                textAfter: "on her arm and three",
                gapId2: "A_1_2",
                label2: "2",
                textAfter2: "on her fingers."
              },
              {
                textBefore: "She's wearing a",
                gapId: "A_1_3",
                label: "3",
                textAfter: "scarf around her neck."
              },
              {
                textBefore: "She wants to buy a spotted",
                gapId: "A_1_4",
                label: "4",
                textAfter: "for her son."
              },
              {
                textBefore: "Her money is in her",
                gapId: "A_1_5",
                label: "5",
                textAfter: "."
              }
            ],
            answers: {
              "A_1_1": {
                expected: ["bracelets"],
                explanation: "She is wearing three pieces of jewelry around her wrist/arm: 'bracelets'."
              },
              "A_1_2": {
                expected: ["rings"],
                explanation: "She is wearing three pieces of jewelry on her fingers: 'rings'."
              },
              "A_1_3": {
                expected: ["floral"],
                explanation: "A scarf with a pattern of flowers is called 'floral'."
              },
              "A_1_4": {
                expected: ["tie"],
                explanation: "A men's clothing accessory worn around the neck with a shirt is a 'tie'."
              },
              "A_1_5": {
                expected: ["handbag"],
                explanation: "A bag used by women to carry money, phone and personal items is a 'handbag'."
              }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture and complete the description.",
            points: 6,
            type: "letter-hint",
            imageKey: "gregory_cook",
            example: "Gregory Cook wears ⁰smart clothes at work: ",
            items: [
              {
                id: "A_2_1",
                label: "1",
                textBefore: "a plain white",
                displayHint: "s _ _ _ t",
                placeholder: "shirt",
                letters: 5,
                prefix: "s",
                suffix: "t",
                textAfter: ","
              },
              {
                id: "A_2_2",
                label: "2",
                textBefore: "a",
                displayHint: "c _ _ _ _ _ d",
                placeholder: "checked",
                letters: 7,
                prefix: "c",
                suffix: "d",
                textAfter: "jacket and trousers."
              },
              {
                id: "A_2_3",
                label: "3",
                textBefore: "But Gregory is happier in his",
                displayHint: "b _ _ _ y",
                placeholder: "baggy",
                letters: 5,
                prefix: "b",
                suffix: "y",
                textAfter: "jeans"
              },
              {
                id: "A_2_4",
                label: "4",
                textBefore: "and a",
                displayHint: "h _ _ d _ _",
                placeholder: "hoodie",
                letters: 6,
                prefix: "h",
                suffix: "",
                textAfter: "."
              },
              {
                id: "A_2_5",
                label: "5",
                textBefore: "He has short",
                displayHint: "s _ _ _ _ _ _ t",
                placeholder: "straight",
                letters: 8,
                prefix: "s",
                suffix: "t",
                textAfter: "dark hair, a beard and"
              },
              {
                id: "A_2_6",
                label: "6",
                textBefore: "a",
                displayHint: "m _ _ _ _ _ _ _ e",
                placeholder: "moustache",
                letters: 9,
                prefix: "m",
                suffix: "e",
                textAfter: "."
              }
            ],
            answers: {
              "A_2_1": {
                expected: ["shirt"],
                explanation: "A formal white piece of clothing with buttons and a collar is a 'shirt'."
              },
              "A_2_2": {
                expected: ["checked"],
                explanation: "A pattern consisting of crossing horizontal and vertical lines is 'checked'."
              },
              "A_2_3": {
                expected: ["baggy"],
                explanation: "Wide, loose-fitting trousers or jeans are called 'baggy'."
              },
              "A_2_4": {
                expected: ["hoodie"],
                explanation: "A comfortable casual hooded sweatshirt is a 'hoodie'."
              },
              "A_2_5": {
                expected: ["straight"],
                explanation: "Hair without waves or curls is 'straight'."
              },
              "A_2_6": {
                expected: ["moustache", "mustache"],
                explanation: "Hair growing on the upper lip of a man is a 'moustache'."
              }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with personality adjectives.",
            points: 5,
            type: "personality-adjectives",
            example: "0 Clare chats to everybody! She's friendly and talkative.",
            items: [
              {
                id: "A_3_1",
                label: "1",
                sentence: "Danny never thinks about other people, only himself. He's s______.",
                prefix: "s"
              },
              {
                id: "A_3_2",
                label: "2",
                sentence: "Don't be so i______! Wait for me.",
                prefix: "i"
              },
              {
                id: "A_3_3",
                label: "3",
                sentence: "He never tells the truth. He's d______.",
                prefix: "d"
              },
              {
                id: "A_3_4",
                label: "4",
                sentence: "Granny is g______ . She gives us fantastic presents.",
                prefix: "g"
              },
              {
                id: "A_3_5",
                label: "5",
                sentence: "Those children have bad manners. They aren't p______.",
                prefix: "p"
              }
            ],
            answers: {
              "A_3_1": {
                expected: ["selfish"],
                explanation: "'Selfish' describes someone who cares only about themselves and not others."
              },
              "A_3_2": {
                expected: ["impatient"],
                explanation: "'Impatient' means not wanting to wait or becoming annoyed with delays."
              },
              "A_3_3": {
                expected: ["dishonest"],
                explanation: "'Dishonest' describes someone who tells lies or cheats (the opposite of honest)."
              },
              "A_3_4": {
                expected: ["generous"],
                explanation: "'Generous' means happy to give money, help or presents to people."
              },
              "A_3_5": {
                expected: ["polite"],
                explanation: "'Polite' means having good manners and showing respect to others."
              }
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
            id: "task_4",
            number: 4,
            title: "Complete the sentences. Use the Past Simple.",
            points: 7,
            type: "dialogue-gap",
            example: "Sophie: I ⁰lost (lose) my keys yesterday and I can't find them!",
            dialogue: [
              { speaker: "Jack", text: "What's wrong?" },
              { speaker: "Sophie", text: "I lost (lose) my keys yesterday and I can't find them!" },
              {
                speaker: "Jack",
                parts: [
                  { gapId: "A_4_1", label: "1", verb: "you / have", after: "them yesterday afternoon?" }
                ]
              },
              {
                speaker: "Sophie",
                parts: [
                  { before: "Yes, I did. I", gapId: "A_4_2", label: "2", verb: "take", after: "them out of my school bag and I" },
                  { gapId: "A_4_3", label: "3", verb: "put", after: "them on the kitchen table." }
                ]
              },
              {
                speaker: "Jack",
                parts: [
                  { gapId: "A_4_4", label: "4", verb: "you / drop", after: "them in your bedroom? I" },
                  { gapId: "A_4_5", label: "5", verb: "do", after: "that two days ago." }
                ]
              },
              {
                speaker: "Sophie",
                parts: [
                  { before: "No, I didn't. Let's look in the kitchen again. Last week my dad", gapId: "A_4_6", label: "6", verb: "forget", after: "where his keys were. We finally" },
                  { gapId: "A_4_7", label: "7", verb: "find", after: "them in the fridge!" }
                ]
              }
            ],
            answers: {
              "A_4_1": {
                expected: ["Did you have", "did you have"],
                explanation: "Past Simple question form: Did + subject + base form of verb ('Did you have')."
              },
              "A_4_2": {
                expected: ["took"],
                explanation: "'take' is an irregular verb: Past Simple is 'took'."
              },
              "A_4_3": {
                expected: ["put"],
                explanation: "'put' has the same form in the Past Simple: 'put'."
              },
              "A_4_4": {
                expected: ["Did you drop", "did you drop"],
                explanation: "Past Simple question form: Did + subject + base verb ('Did you drop')."
              },
              "A_4_5": {
                expected: ["did"],
                explanation: "'do' is an irregular verb: Past Simple is 'did'."
              },
              "A_4_6": {
                expected: ["forgot"],
                explanation: "'forget' is an irregular verb: Past Simple is 'forgot'."
              },
              "A_4_7": {
                expected: ["found"],
                explanation: "'find' is an irregular verb: Past Simple is 'found'."
              }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the Past Simple or Past Continuous form of the verbs in brackets.",
            points: 7,
            type: "grammar-mix",
            example: "0 Last Saturday afternoon at three o'clock, Peter was sitting (sit) at a café.",
            items: [
              {
                id: "A_5_item_1",
                itemNum: "1",
                parts: [
                  {
                    before: "While Sue",
                    gapId: "A_5_1",
                    label: "1",
                    verb: "wait",
                    options: [
                      { value: "was waiting", label: "was waiting (Past Continuous)" },
                      { value: "waited", label: "waited (Past Simple)" }
                    ],
                    after: "for her best friend, dad"
                  },
                  {
                    gapId: "A_5_2",
                    label: "2",
                    verb: "call",
                    options: [
                      { value: "called", label: "called (Past Simple)" },
                      { value: "was calling", label: "was calling (Past Continuous)" }
                    ],
                    after: "her."
                  }
                ]
              },
              {
                id: "A_5_item_2",
                itemNum: "2",
                parts: [
                  {
                    before: "I",
                    gapId: "A_5_3",
                    label: "3",
                    verb: "cycle",
                    options: [
                      { value: "was cycling", label: "was cycling (Past Continuous)" },
                      { value: "cycled", label: "cycled (Past Simple)" }
                    ],
                    after: "to school when I"
                  },
                  {
                    gapId: "A_5_4",
                    label: "4",
                    verb: "meet",
                    options: [
                      { value: "met", label: "met (Past Simple)" },
                      { value: "was meeting", label: "was meeting (Past Continuous)" }
                    ],
                    after: "our History teacher."
                  }
                ]
              },
              {
                id: "A_5_item_3",
                itemNum: "3",
                parts: [
                  {
                    before: "What",
                    gapId: "A_5_5",
                    label: "5",
                    verb: "you / do",
                    options: [
                      { value: "were you doing", label: "were you doing (Past Continuous)" },
                      { value: "did you do", label: "did you do (Past Simple)" }
                    ],
                    after: "yesterday evening at 7 o'clock?"
                  }
                ]
              },
              {
                id: "A_5_item_4",
                itemNum: "4",
                parts: [
                  {
                    before: "While my parents",
                    gapId: "A_5_6",
                    label: "6",
                    verb: "sleep",
                    options: [
                      { value: "were sleeping", label: "were sleeping (Past Continuous)" },
                      { value: "slept", label: "slept (Past Simple)" }
                    ],
                    after: ", they"
                  },
                  {
                    gapId: "A_5_7",
                    label: "7",
                    verb: "get",
                    options: [
                      { value: "got", label: "got (Past Simple)" },
                      { value: "were getting", label: "were getting (Past Continuous)" }
                    ],
                    after: "a text message."
                  }
                ]
              }
            ],
            answers: {
              "A_5_1": {
                expected: ["was waiting"],
                explanation: "We use Past Continuous ('was waiting') after 'While' for a continuous background action."
              },
              "A_5_2": {
                expected: ["called"],
                explanation: "We use Past Simple ('called') for a shorter action that interrupts or happens during a longer one."
              },
              "A_5_3": {
                expected: ["was cycling"],
                explanation: "Past Continuous ('was cycling') indicates a long ongoing journey in progress."
              },
              "A_5_4": {
                expected: ["met"],
                explanation: "Past Simple ('met') describes a single momentary event interrupting the ride."
              },
              "A_5_5": {
                expected: ["were you doing"],
                explanation: "Past Continuous question ('were you doing') asks about an activity in progress at a specific past time (7 o'clock)."
              },
              "A_5_6": {
                expected: ["were sleeping"],
                explanation: "After 'While' with plural subject 'parents', we use Past Continuous ('were sleeping')."
              },
              "A_5_7": {
                expected: ["got"],
                explanation: "Past Simple ('got') describes the completed event that occurred during their sleep."
              }
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
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["first", "what happened", "how fantastic", "lucky her", "poor you", "no way"],
            example: "Anne: ⁰How fantastic! Tell me about it.",
            usedInExample: ["how fantastic"],
            dialogue: [
              { speaker: "Anne", text: "Hi Ben. Did you have a nice holiday?" },
              { speaker: "Ben", text: "Yes. We went to California to visit my aunt." },
              { speaker: "Anne", text: "⁰How fantastic! Tell me about it." },
              {
                speaker: "Ben",
                parts: [
                  { gapId: "A_6_1", label: "1", after: ", we travelled to Los Angeles. My aunt has a shop there with accessories." }
                ]
              },
              {
                speaker: "Anne",
                parts: [
                  { gapId: "A_6_2", label: "2", after: "!" }
                ]
              },
              {
                speaker: "Ben",
                parts: [
                  { before: "And guess", gapId: "A_6_3", label: "3", after: "on our second day! We saw Ryan Gosling in my aunt's shop." }
                ]
              },
              {
                speaker: "Anne",
                parts: [
                  { gapId: "A_6_4", label: "4", after: "! So what happened next?" }
                ]
              },
              { speaker: "Ben", text: "I asked him for a selfie ... He said yes, but my phone battery was dead!" },
              {
                speaker: "Anne",
                parts: [
                  { before: "Oh no!", gapId: "A_6_5", label: "5", after: "!" }
                ]
              }
            ],
            answers: {
              "A_6_1": {
                expected: ["First", "first"],
                explanation: "'First' indicates the starting point of chronological events in a story."
              },
              "A_6_2": {
                expected: ["Lucky her", "lucky her"],
                explanation: "'Lucky her!' is used to say that someone (Ben's aunt) is very fortunate."
              },
              "A_6_3": {
                expected: ["what happened"],
                explanation: "'Guess what happened' is a very common phrase to introduce exciting news."
              },
              "A_6_4": {
                expected: ["No way", "no way"],
                explanation: "'No way!' expresses astonishment and disbelief that they saw a famous movie star."
              },
              "A_6_5": {
                expected: ["Poor you", "poor you"],
                explanation: "'Poor you!' expresses sympathy when someone suffers misfortune (dead phone battery)."
              }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 1",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 16,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Look at the picture and complete the description.",
            points: 5,
            type: "word-bank",
            imageKey: "mrs_smith",
            wordBank: ["bracelets", "earrings", "handbag", "rings", "scarf", "spotted"],
            example: "Mrs Smith loves nice accessories. She is wearing gold ⁰earrings in her ears and a floral ",
            usedInExample: ["earrings"],
            sentences: [
              {
                textBefore: "Mrs Smith loves nice accessories. She is wearing gold ⁰earrings in her ears and a floral",
                gapId: "B_1_1",
                label: "1",
                textAfter: "around her neck."
              },
              {
                textBefore: "She has two",
                gapId: "B_1_2",
                label: "2",
                textAfter: "on her arm and three",
                gapId2: "B_1_3",
                label2: "3",
                textAfter2: "on her fingers."
              },
              {
                textBefore: "Her money is in her",
                gapId: "B_1_4",
                label: "4",
                textAfter: "."
              },
              {
                textBefore: "She wants to buy a",
                gapId: "B_1_5",
                label: "5",
                textAfter: "tie for her son."
              }
            ],
            answers: {
              "B_1_1": {
                expected: ["scarf"],
                explanation: "An item of clothing worn around the neck for warmth or fashion is a 'scarf'."
              },
              "B_1_2": {
                expected: ["bracelets"],
                explanation: "She is wearing two pieces of jewelry on her arm: 'bracelets'."
              },
              "B_1_3": {
                expected: ["rings"],
                explanation: "She is wearing three pieces of jewelry on her fingers: 'rings'."
              },
              "B_1_4": {
                expected: ["handbag"],
                explanation: "Her money and wallet are kept in her 'handbag'."
              },
              "B_1_5": {
                expected: ["spotted"],
                explanation: "A pattern with round dots or spots is called 'spotted'."
              }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture and complete the description.",
            points: 6,
            type: "letter-hint",
            imageKey: "lee",
            example: "Lee always wears ⁰smart clothes at work: ",
            items: [
              {
                id: "B_2_1",
                label: "1",
                textBefore: "a",
                displayHint: "c _ _ _ _ _ d",
                placeholder: "checked",
                letters: 7,
                prefix: "c",
                suffix: "d",
                textAfter: "jacket, trousers"
              },
              {
                id: "B_2_2",
                label: "2",
                textBefore: "and a white",
                displayHint: "s _ _ _ t",
                placeholder: "shirt",
                letters: 5,
                prefix: "s",
                suffix: "t",
                textAfter: "."
              },
              {
                id: "B_2_3",
                label: "3",
                textBefore: "But Lee is happier in a",
                displayHint: "h _ _ _ ie",
                placeholder: "hoodie",
                letters: 6,
                prefix: "h",
                suffix: "ie",
                textAfter: ""
              },
              {
                id: "B_2_4",
                label: "4",
                textBefore: "and",
                displayHint: "b _ _ _ y",
                placeholder: "baggy",
                letters: 5,
                prefix: "b",
                suffix: "y",
                textAfter: "jeans."
              },
              {
                id: "B_2_5",
                label: "5",
                textBefore: "He has a",
                displayHint: "b _ _ _ d",
                placeholder: "beard",
                letters: 5,
                prefix: "b",
                suffix: "d",
                textAfter: "and a moustache."
              },
              {
                id: "B_2_6",
                label: "6",
                textBefore: "His hair is",
                displayHint: "s _ _ _ _ _ _ t",
                placeholder: "straight",
                letters: 8,
                prefix: "s",
                suffix: "t",
                textAfter: "and dark."
              }
            ],
            answers: {
              "B_2_1": {
                expected: ["checked"],
                explanation: "A square pattern of crossed lines is 'checked'."
              },
              "B_2_2": {
                expected: ["shirt"],
                explanation: "A formal white garment with a collar is a 'shirt'."
              },
              "B_2_3": {
                expected: ["hoodie"],
                explanation: "A casual hooded sweater is a 'hoodie'."
              },
              "B_2_4": {
                expected: ["baggy"],
                explanation: "Loose, wide denim pants are 'baggy jeans'."
              },
              "B_2_5": {
                expected: ["beard"],
                explanation: "Hair growing on the chin and lower cheeks is a 'beard'."
              },
              "B_2_6": {
                expected: ["straight"],
                explanation: "Hair that is smooth without waves or curls is 'straight'."
              }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with personality adjectives.",
            points: 5,
            type: "personality-adjectives",
            example: "0 Clare chats to everybody! She's friendly and talkative.",
            items: [
              {
                id: "B_3_1",
                label: "1",
                sentence: "He never does any work. He's l______",
                prefix: "l"
              },
              {
                id: "B_3_2",
                label: "2",
                sentence: "That child is i______ . She has bad manners.",
                prefix: "i"
              },
              {
                id: "B_3_3",
                label: "3",
                sentence: "Uncle Bob is g______ . He always pays when we go out for dinner.",
                prefix: "g"
              },
              {
                id: "B_3_4",
                label: "4",
                sentence: "Wait for us! Don't be i______!",
                prefix: "i"
              },
              {
                id: "B_3_5",
                label: "5",
                sentence: "Sheila doesn't make jokes. She's s______",
                prefix: "s"
              }
            ],
            answers: {
              "B_3_1": {
                expected: ["lazy"],
                explanation: "'Lazy' describes someone who does not want to work or use effort."
              },
              "B_3_2": {
                expected: ["impolite"],
                explanation: "'Impolite' means not having good manners; rude (opposite of polite)."
              },
              "B_3_3": {
                expected: ["generous"],
                explanation: "'Generous' means willing to give money or treat others."
              },
              "B_3_4": {
                expected: ["impatient"],
                explanation: "'Impatient' means unwilling to wait calmly."
              },
              "B_3_5": {
                expected: ["serious"],
                explanation: "'Serious' describes someone who doesn't laugh much or make jokes."
              }
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
            id: "task_4",
            number: 4,
            title: "Complete the sentences. Use the Past Simple.",
            points: 7,
            type: "dialogue-gap",
            example: "Rob: I ⁰lost (lose) my keys yesterday and I can't find them!",
            dialogue: [
              { speaker: "Fiona", text: "What's wrong?" },
              { speaker: "Rob", text: "I lost (lose) my keys yesterday and I can't find them!" },
              {
                speaker: "Fiona",
                parts: [
                  { gapId: "B_4_1", label: "1", verb: "you / use", after: "them yesterday afternoon?" }
                ]
              },
              {
                speaker: "Rob",
                parts: [
                  { before: "Yes, I did. I", gapId: "B_4_2", label: "2", verb: "come", after: "home and I" },
                  { gapId: "B_4_3", label: "3", verb: "open", after: "the door." }
                ]
              },
              {
                speaker: "Fiona",
                parts: [
                  { gapId: "B_4_4", label: "4", verb: "you / put", after: "them in the kitchen?" }
                ]
              },
              {
                speaker: "Rob",
                parts: [
                  { before: "No, I didn't. I", gapId: "B_4_5", label: "5", verb: "go", after: "straight to my bedroom." }
                ]
              },
              {
                speaker: "Fiona",
                parts: [
                  { before: "Let's look in your room again. Last week Dad's keys", gapId: "B_4_6", label: "6", verb: "fall", after: "out of his pocket and I" },
                  { gapId: "B_4_7", label: "7", verb: "find", after: "them under the sofa!" }
                ]
              }
            ],
            answers: {
              "B_4_1": {
                expected: ["Did you use", "did you use"],
                explanation: "Past Simple question form: Did + subject + base form of verb ('Did you use')."
              },
              "B_4_2": {
                expected: ["came"],
                explanation: "'come' is irregular: Past Simple is 'came'."
              },
              "B_4_3": {
                expected: ["opened"],
                explanation: "'open' is regular: add -ed -> 'opened'."
              },
              "B_4_4": {
                expected: ["Did you put", "did you put"],
                explanation: "Past Simple question: Did + subject + base verb ('Did you put')."
              },
              "B_4_5": {
                expected: ["went"],
                explanation: "'go' is irregular: Past Simple is 'went'."
              },
              "B_4_6": {
                expected: ["fell"],
                explanation: "'fall' is irregular: Past Simple is 'fell'."
              },
              "B_4_7": {
                expected: ["found"],
                explanation: "'find' is irregular: Past Simple is 'found'."
              }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the Past Simple or Past Continuous form of the verbs in brackets.",
            points: 7,
            type: "grammar-mix",
            example: "0 Last Saturday afternoon at three o'clock, Peter was sitting (sit) at a café.",
            items: [
              {
                id: "B_5_item_1",
                itemNum: "1",
                parts: [
                  {
                    before: "While I",
                    gapId: "B_5_1",
                    label: "1",
                    verb: "get",
                    options: [
                      { value: "was getting", label: "was getting (Past Continuous)" },
                      { value: "got", label: "got (Past Simple)" }
                    ],
                    after: "ready for school, I"
                  },
                  {
                    gapId: "B_5_2",
                    label: "2",
                    verb: "get",
                    options: [
                      { value: "got", label: "got (Past Simple)" },
                      { value: "was getting", label: "was getting (Past Continuous)" }
                    ],
                    after: "a text message."
                  }
                ]
              },
              {
                id: "B_5_item_2",
                itemNum: "2",
                parts: [
                  {
                    before: "Dad",
                    gapId: "B_5_3",
                    label: "3",
                    verb: "make",
                    options: [
                      { value: "was making", label: "was making (Past Continuous)" },
                      { value: "made", label: "made (Past Simple)" }
                    ],
                    after: "breakfast when he"
                  },
                  {
                    gapId: "B_5_4",
                    label: "4",
                    verb: "drop",
                    options: [
                      { value: "dropped", label: "dropped (Past Simple)" },
                      { value: "was dropping", label: "was dropping (Past Continuous)" }
                    ],
                    after: "a bowl."
                  }
                ]
              },
              {
                id: "B_5_item_3",
                itemNum: "3",
                parts: [
                  {
                    before: "We",
                    gapId: "B_5_5",
                    label: "5",
                    verb: "laugh",
                    options: [
                      { value: "were laughing", label: "were laughing (Past Continuous)" },
                      { value: "laughed", label: "laughed (Past Simple)" }
                    ],
                    after: "when the teacher"
                  },
                  {
                    gapId: "B_5_6",
                    label: "6",
                    verb: "come",
                    options: [
                      { value: "came", label: "came (Past Simple)" },
                      { value: "was coming", label: "was coming (Past Continuous)" }
                    ],
                    after: "into the classroom."
                  }
                ]
              },
              {
                id: "B_5_item_4",
                itemNum: "4",
                parts: [
                  {
                    before: "What",
                    gapId: "B_5_7",
                    label: "7",
                    verb: "he / do",
                    options: [
                      { value: "was he doing", label: "was he doing (Past Continuous)" },
                      { value: "did he do", label: "did he do (Past Simple)" }
                    ],
                    after: "at 9 a.m.?"
                  }
                ]
              }
            ],
            answers: {
              "B_5_1": {
                expected: ["was getting"],
                explanation: "After 'While' we use Past Continuous ('was getting', double 't') for the longer preparation action."
              },
              "B_5_2": {
                expected: ["got"],
                explanation: "We use Past Simple ('got') for the single interrupting event of receiving a text."
              },
              "B_5_3": {
                expected: ["was making"],
                explanation: "Past Continuous ('was making') expresses the ongoing activity of preparing breakfast."
              },
              "B_5_4": {
                expected: ["dropped"],
                explanation: "Past Simple ('dropped', double 'p') for the sudden accident that happened while making breakfast."
              },
              "B_5_5": {
                expected: ["were laughing"],
                explanation: "Past Continuous ('were laughing') indicates an ongoing reaction when someone entered."
              },
              "B_5_6": {
                expected: ["came"],
                explanation: "Past Simple ('came') for the teacher's entrance."
              },
              "B_5_7": {
                expected: ["was he doing"],
                explanation: "Past Continuous question ('was he doing') for what he was doing at that specific moment (9 a.m.)."
              }
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
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["guess what", "how fantastic", "lucky him", "no way", "poor you", "then"],
            example: "Kevin: ⁰How fantastic! Tell me about it.",
            usedInExample: ["how fantastic"],
            dialogue: [
              { speaker: "Kevin", text: "Hi Olive. Did you have a nice holiday?" },
              { speaker: "Olive", text: "Yes. We went to Jamaica to visit my uncle." },
              { speaker: "Kevin", text: "⁰How fantastic! Tell me about it." },
              {
                speaker: "Olive",
                parts: [
                  { before: "First, we flew to Kingston, the capital.", gapId: "B_6_1", label: "1", after: ", we took a taxi to my uncle's house. It's near the beach." }
                ]
              },
              {
                speaker: "Kevin",
                parts: [
                  { gapId: "B_6_2", label: "2", after: "!" }
                ]
              },
              {
                speaker: "Olive",
                parts: [
                  { before: "And", gapId: "B_6_3", label: "3", after: "happened one day! We saw some dolphins!" }
                ]
              },
              {
                speaker: "Kevin",
                parts: [
                  { gapId: "B_6_4", label: "4", after: "! So what did you do?" }
                ]
              },
              { speaker: "Olive", text: "I tried to take a photo, but the battery of my phone was dead." },
              {
                speaker: "Kevin",
                parts: [
                  { gapId: "B_6_5", label: "5", after: "!" }
                ]
              }
            ],
            answers: {
              "B_6_1": {
                expected: ["Then", "then"],
                explanation: "'Then' expresses what happened next in the sequence of actions after 'First'."
              },
              "B_6_2": {
                expected: ["Lucky him", "lucky him"],
                explanation: "'Lucky him!' expresses that Olive's uncle is lucky to have a house near the beach."
              },
              "B_6_3": {
                expected: ["guess what"],
                explanation: "'And guess what happened one day!' is an expression to introduce surprising news."
              },
              "B_6_4": {
                expected: ["No way", "no way"],
                explanation: "'No way!' expresses excitement and disbelief about seeing dolphins."
              },
              "B_6_5": {
                expected: ["Poor you", "poor you"],
                explanation: "'Poor you!' expresses sympathy for missing the photo opportunity due to a dead battery."
              }
            }
          }
        ]
      }
    }
  }
};
