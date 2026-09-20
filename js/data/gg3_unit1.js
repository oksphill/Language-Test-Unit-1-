/**
 * Go Getter 3 - Unit 1 Language Test
 * Chores & Personality / Present Simple & Present Continuous
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_1_DATA = {
  id: "unit1",
  courseId: "gogetter3",
  number: 1,
  title: "Chores & Personality",
  description: "Vocabulary: Chores, Personality adjectives. Grammar: Present Continuous, Present Simple vs Present Continuous. Communication: Asking for and offering help.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 1",
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
            title: "Complete the note with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["animals", "bed", "dishwasher", "living room", "plants", "table", "washing"],
            example: "Linda, be a good girl and feed the ⁰animals.",
            usedInExample: ["animals"],
            context: "Good morning, kids! Don't forget to do the chores!",
            sentences: [
              { textBefore: "Linda, be a good girl and feed the animals. Then water all the", gapId: "A_1_1", label: "1", textAfter: "." },
              { textBefore: "Sam, please clear the", gapId: "A_1_2", label: "2", textAfter: "after breakfast and load the", gapId2: "A_1_3", label2: "3", textAfter2: "." },
              { textBefore: "Then vacuum the", gapId: "A_1_4", label: "4", textAfter: "." },
              { textBefore: "Philip, please hang out the", gapId: "A_1_5", label: "5", textAfter: "in the garden." },
              { textBefore: "And don't forget to make your", gapId: "A_1_6", label: "6", textAfter: "! — Mum" }
            ],
            answers: {
              "A_1_1": { expected: ["plants"], explanation: "You water plants (indoor or garden flora)." },
              "A_1_2": { expected: ["table"], explanation: "Collocation: 'clear the table' after a meal." },
              "A_1_3": { expected: ["dishwasher"], explanation: "Collocation: 'load the dishwasher' with dirty plates." },
              "A_1_4": { expected: ["living room"], explanation: "You vacuum the carpet/floor in the living room." },
              "A_1_5": { expected: ["washing"], explanation: "Collocation: 'hang out the washing' to dry clothes." },
              "A_1_6": { expected: ["bed"], explanation: "Collocation: 'make your bed' in the morning." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Match 1–6 with a–f.",
            points: 6,
            type: "matching-dialogue",
            example: "0 Easy-going people — g (don't get upset easily.)",
            optionsList: [
              { key: "a", text: "don't talk a lot." },
              { key: "b", text: "tell everybody what to do." },
              { key: "c", text: "like planning everything." },
              { key: "d", text: "don't tidy their rooms and never know where their things are." },
              { key: "e", text: "can wait a long time." },
              { key: "f", text: "make a lot of noise." }
            ],
            items: [
              { id: "A_2_1", label: "1", prompt: "Messy people" },
              { id: "A_2_2", label: "2", prompt: "Organised people" },
              { id: "A_2_3", label: "3", prompt: "Patient people" },
              { id: "A_2_4", label: "4", prompt: "Bossy people" },
              { id: "A_2_5", label: "5", prompt: "Quiet people" },
              { id: "A_2_6", label: "6", prompt: "Loud people" }
            ],
            answers: {
              "A_2_1": { expected: ["d"], explanation: "Messy people don't tidy their rooms and never know where their things are." },
              "A_2_2": { expected: ["c"], explanation: "Organised people like planning everything." },
              "A_2_3": { expected: ["e"], explanation: "Patient people can wait a long time." },
              "A_2_4": { expected: ["b"], explanation: "Bossy people tell everybody what to do." },
              "A_2_5": { expected: ["a"], explanation: "Quiet people don't talk a lot." },
              "A_2_6": { expected: ["f"], explanation: "Loud people make a lot of noise." }
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
            title: "Write sentences using the Present Continuous.",
            points: 4,
            type: "sentence-order",
            example: "0 it / rain / at the moment? -> Is it raining at the moment?",
            items: [
              { id: "A_3_1", label: "1", prompt: "they / not / make / their beds" },
              { id: "A_3_2", label: "2", prompt: "she / set / the table / for dinner?" },
              { id: "A_3_3", label: "3", prompt: "I / tidy / my bedroom / right now" },
              { id: "A_3_4", label: "4", prompt: "what / you / cooking?" }
            ],
            answers: {
              "A_3_1": { expected: ["They aren't making their beds", "They are not making their beds"], explanation: "Negative Present Continuous: Subject + aren't / are not + verb-ing." },
              "A_3_2": { expected: ["Is she setting the table for dinner", "Is she setting the table for dinner?"], explanation: "Question Present Continuous: Is + subject + verb-ing (double 't' in setting)." },
              "A_3_3": { expected: ["I am tidying my bedroom right now", "I'm tidying my bedroom right now"], explanation: "Affirmative Present Continuous: I + am/'m + tidying." },
              "A_3_4": { expected: ["What are you cooking", "What are you cooking?"], explanation: "Wh- question Present Continuous: What + are + you + cooking?" }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the Present Simple or the Present Continuous.",
            points: 4,
            type: "grammar-gap",
            example: "0 I am listening (listen) to a French song right now. I don't understand (not understand) the words though.",
            items: [
              { id: "A_4_1", label: "1", before: "Tina", verb: "do", after: "a History quiz at the moment. She" },
              { id: "A_4_2", label: "", before: "", verb: "know", after: "the answers to all the questions!" },
              { id: "A_4_3", label: "2", before: "We", verb: "love", after: "sports. Right now we" },
              { id: "A_4_4", label: "", before: "", verb: "play", after: "tennis." }
            ],
            answers: {
              "A_4_1": { expected: ["is doing", "'s doing"], explanation: "At the moment indicates Present Continuous: is doing." },
              "A_4_2": { expected: ["knows"], explanation: "'Know' is a state verb and uses Present Simple: knows." },
              "A_4_3": { expected: ["love"], explanation: "'Love' is a state verb of emotion: love (Present Simple)." },
              "A_4_4": { expected: ["are playing", "'re playing"], explanation: "'Right now' indicates an action in progress: are playing." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the Present Simple or the Present Continuous.",
            points: 5,
            type: "grammar-gap",
            example: "0 Mr and Mrs Thomson don't cook (not cook) every evening...",
            context: "Mr and Mrs Thomson don't cook every evening...",
            items: [
              { id: "A_5_1", label: "1", before: "but tonight they", verb: "make", after: "spaghetti and tomato sauce." },
              { id: "A_5_2", label: "2", before: "Their son Jack usually", verb: "watch", after: "TV before dinner," },
              { id: "A_5_3", label: "3", before: "but today he", verb: "play", after: "chess with his sister Lucy." },
              { id: "A_5_4", label: "4", before: "Jack", verb: "not play", after: "with Lucy very often." },
              { id: "A_5_5", label: "5", before: "At the moment he", verb: "not win", after: ". He isn't happy about that!" }
            ],
            answers: {
              "A_5_1": { expected: ["are making", "'re making"], explanation: "'Tonight' specifies an ongoing activity: are making." },
              "A_5_2": { expected: ["watches"], explanation: "'Usually' indicates a routine: watches (Present Simple)." },
              "A_5_3": { expected: ["is playing", "'s playing"], explanation: "'Today' contrasts the routine with an action in progress: is playing." },
              "A_5_4": { expected: ["doesn't play", "does not play"], explanation: "'Not very often' indicates a general habit: doesn't play (Present Simple)." },
              "A_5_5": { expected: ["isn't winning", "is not winning"], explanation: "'At the moment' requires Present Continuous: isn't winning." }
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
            title: "Complete the dialogues with the phrases in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["can I help you", "thank you", "do you need", "I'm sorry", "of course", "can you help me"],
            example: "A: ⁰Can you help me with the chores, please? B: Yes, of course.",
            usedInExample: ["can you help me"],
            sentences: [
              { textBefore: "A: Can you help me with the chores, please? <br>B: Yes,", gapId: "A_6_1", label: "1", textAfter: ". What can I do?" },
              { textBefore: "A: Can you set the table for dinner, please? <br>B:", gapId: "A_6_2", label: "2", textAfter: ", I can't. I'm busy right now." },
              { textBefore: "A:", gapId: "A_6_3", label: "3", textAfter: "with that heavy suitcase? <br>B: No, that's fine,", gapId2: "A_6_4", label2: "4", textAfter2: "." },
              { textBefore: "A:", gapId: "A_6_5", label: "5", textAfter: "any help with the cooking? <br>B: Yes, please." }
            ],
            answers: {
              "A_6_1": { expected: ["of course"], explanation: "'Yes, of course. What can I do?'" },
              "A_6_2": { expected: ["I'm sorry", "im sorry"], explanation: "Polite refusal: 'I'm sorry, I can't. I'm busy right now.'" },
              "A_6_3": { expected: ["Can I help you", "can I help you"], explanation: "Offering assistance: 'Can I help you with that heavy suitcase?'" },
              "A_6_4": { expected: ["thank you", "thanks"], explanation: "Polite declining: 'No, that's fine, thank you.'" },
              "A_6_5": { expected: ["Do you need", "do you need"], explanation: "Asking if someone needs help: 'Do you need any help with the cooking?'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 1",
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
            title: "Complete the note with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["animals", "bed", "plants", "rooms", "table", "washing", "washing machine"],
            example: "Amy, please feed the ⁰animals...",
            usedInExample: ["animals"],
            context: "Good morning, kids! Don't forget to do the chores!",
            sentences: [
              { textBefore: "Amy, please feed the animals and clear the", gapId: "B_1_1", label: "1", textAfter: "after breakfast." },
              { textBefore: "Then vacuum the", gapId: "B_1_2", label: "2", textAfter: "." },
              { textBefore: "Joe, be a good boy and load the", gapId: "B_1_3", label: "3", textAfter: "." },
              { textBefore: "And don't forget to make your", gapId: "B_1_4", label: "4", textAfter: "!" },
              { textBefore: "Andy, please hang out the", gapId: "B_1_5", label: "5", textAfter: "and water all the", gapId2: "B_1_6", label2: "6", textAfter2: "in the garden. — Mum" }
            ],
            answers: {
              "B_1_1": { expected: ["table"], explanation: "Collocation: 'clear the table' after eating." },
              "B_1_2": { expected: ["rooms"], explanation: "Vacuum the rooms." },
              "B_1_3": { expected: ["washing machine"], explanation: "Collocation: 'load the washing machine' with clothes." },
              "B_1_4": { expected: ["bed"], explanation: "Collocation: 'make your bed'." },
              "B_1_5": { expected: ["washing"], explanation: "Collocation: 'hang out the washing' on the line." },
              "B_1_6": { expected: ["plants"], explanation: "Water the plants in the garden." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Match 1–6 with a–f.",
            points: 6,
            type: "matching-dialogue",
            example: "0 Easy-going people — g (don't get upset easily.)",
            optionsList: [
              { key: "a", text: "don't talk a lot." },
              { key: "b", text: "don't tidy their rooms and never know where their things are." },
              { key: "c", text: "like planning everything." },
              { key: "d", text: "tell everybody what to do." },
              { key: "e", text: "can wait a long time." },
              { key: "f", text: "make a lot of noise." }
            ],
            items: [
              { id: "B_2_1", label: "1", prompt: "Organised people" },
              { id: "B_2_2", label: "2", prompt: "Loud people" },
              { id: "B_2_3", label: "3", prompt: "Quiet people" },
              { id: "B_2_4", label: "4", prompt: "Bossy people" },
              { id: "B_2_5", label: "5", prompt: "Patient people" },
              { id: "B_2_6", label: "6", prompt: "Messy people" }
            ],
            answers: {
              "B_2_1": { expected: ["c"], explanation: "Organised people like planning everything." },
              "B_2_2": { expected: ["f"], explanation: "Loud people make a lot of noise." },
              "B_2_3": { expected: ["a"], explanation: "Quiet people don't talk a lot." },
              "B_2_4": { expected: ["d"], explanation: "Bossy people tell everybody what to do." },
              "B_2_5": { expected: ["e"], explanation: "Patient people can wait a long time." },
              "B_2_6": { expected: ["b"], explanation: "Messy people don't tidy their rooms and never know where their things are." }
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
            title: "Write sentences using the Present Continuous.",
            points: 4,
            type: "sentence-order",
            example: "0 it / rain / at the moment? -> Is it raining at the moment?",
            items: [
              { id: "B_3_1", label: "1", prompt: "I / play / a game / right now" },
              { id: "B_3_2", label: "2", prompt: "they / not set / the table" },
              { id: "B_3_3", label: "3", prompt: "he / make / lunch / for the family?" },
              { id: "B_3_4", label: "4", prompt: "what / you / watch?" }
            ],
            answers: {
              "B_3_1": { expected: ["I am playing a game right now", "I'm playing a game right now"], explanation: "Affirmative: I + am/'m + playing a game right now." },
              "B_3_2": { expected: ["They aren't setting the table", "They are not setting the table"], explanation: "Negative: They + aren't / are not + setting the table (double 't')." },
              "B_3_3": { expected: ["Is he making lunch for the family", "Is he making lunch for the family?"], explanation: "Question: Is + he + making lunch for the family?" },
              "B_3_4": { expected: ["What are you watching", "What are you watching?"], explanation: "Wh- question: What + are + you + watching?" }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the Present Simple or the Present Continuous.",
            points: 4,
            type: "grammar-gap",
            example: "0 I am listening (listen) ... I don't understand (not understand)",
            items: [
              { id: "B_4_1", label: "1", before: "We", verb: "do", after: "a Geography quiz at the moment. We" },
              { id: "B_4_2", label: "", before: "", verb: "know", after: "the answers to all the questions!" },
              { id: "B_4_3", label: "2", before: "Jack", verb: "play", after: "football right now. He" },
              { id: "B_4_4", label: "", before: "", verb: "love", after: "sports." }
            ],
            answers: {
              "B_4_1": { expected: ["are doing", "'re doing"], explanation: "'At the moment' requires Present Continuous: are doing." },
              "B_4_2": { expected: ["know"], explanation: "'Know' is a state verb: know (Present Simple)." },
              "B_4_3": { expected: ["is playing", "'s playing"], explanation: "'Right now' indicates action in progress: is playing." },
              "B_4_4": { expected: ["loves"], explanation: "'Love' is a state verb (3rd person singular): loves." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the Present Simple or the Present Continuous.",
            points: 5,
            type: "grammar-gap",
            example: "0 Mr and Mrs Robinson don't cook (not cook) every evening...",
            context: "Mr and Mrs Robinson don't cook every evening...",
            items: [
              { id: "B_5_1", label: "1", before: "but tonight they", verb: "make", after: "burgers and chips." },
              { id: "B_5_2", label: "2", before: "Their daughter Emma usually", verb: "do", after: "her homework before dinner," },
              { id: "B_5_3", label: "3", before: "but tonight she", verb: "not study", after: "." },
              { id: "B_5_4", label: "4", before: "She", verb: "watch", after: "a film on TV." },
              { id: "B_5_5", label: "5", before: "She", verb: "not do", after: "this very often, but her favourite actor is in the film." }
            ],
            answers: {
              "B_5_1": { expected: ["are making", "'re making"], explanation: "'Tonight' specifies an ongoing activity: are making." },
              "B_5_2": { expected: ["does"], explanation: "'Usually' indicates routine for 3rd person singular: does." },
              "B_5_3": { expected: ["isn't studying", "is not studying"], explanation: "Ongoing action tonight: isn't studying (note 'y' retained in studying)." },
              "B_5_4": { expected: ["is watching", "'s watching"], explanation: "Action in progress tonight: is watching." },
              "B_5_5": { expected: ["doesn't do", "does not do"], explanation: "'Not very often' indicates habitual action: doesn't do." }
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
            title: "Complete the dialogues with the phrases in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["can I help you", "that's fine", "do you need", "I'm sorry", "no problem", "can you help me"],
            example: "A: ⁰Can you help me with the chores, please? B: No problem. What can I do?",
            usedInExample: ["can you help me"],
            sentences: [
              { textBefore: "A: Can you help me with the chores, please? <br>B:", gapId: "B_6_1", label: "1", textAfter: ". What can I do?" },
              { textBefore: "A:", gapId: "B_6_2", label: "2", textAfter: "with your homework? <br>B: Yes, please." },
              { textBefore: "A:", gapId: "B_6_3", label: "3", textAfter: "any help with that sofa? <br>B: No,", gapId2: "B_6_4", label2: "4", textAfter2: ", thank you." },
              { textBefore: "A: Can you set the table for lunch, please? <br>B:", gapId: "B_6_5", label: "5", textAfter: ", I can't. I'm busy right now." }
            ],
            answers: {
              "B_6_1": { expected: ["No problem", "no problem"], explanation: "'No problem. What can I do?'" },
              "B_6_2": { expected: ["Can I help you", "can I help you"], explanation: "Offering help: 'Can I help you with your homework?'" },
              "B_6_3": { expected: ["Do you need", "do you need"], explanation: "Offering help: 'Do you need any help with that sofa?'" },
              "B_6_4": { expected: ["that's fine", "thats fine"], explanation: "'No, that's fine, thank you.'" },
              "B_6_5": { expected: ["I'm sorry", "im sorry"], explanation: "'I'm sorry, I can't. I'm busy right now.'" }
            }
          }
        ]
      }
    }
  }
};
