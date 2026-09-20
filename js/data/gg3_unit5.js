/**
 * Go Getter 3 - Unit 5 Language Test
 * Health & The Body / have to, should & shouldn't
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_5_DATA = {
  id: "unit5",
  courseId: "gogetter3",
  number: 5,
  title: "Health & The Body",
  description: "Vocabulary: Illnesses & symptoms, Injuries, Human body organs. Grammar: have to / don't have to, should / shouldn't. Communication: Talking about health and giving advice.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 5",
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
            title: "Complete the flu poster.",
            points: 6,
            type: "letter-hint",
            example: "Have you got a high ⁰temperature?",
            context: "Have you got the flu? Check:",
            items: [
              { id: "A_1_1", label: "1", textBefore: "• Have you got a high temperature and a", displayHint: "h _ _ _ _ _ _ _", placeholder: "headache", prefix: "h", textAfter: "?" },
              { id: "A_1_2", label: "2", textBefore: "• Have you got a", displayHint: "s _ _ _", placeholder: "sore", prefix: "s", textAfter: "throat?" },
              { id: "A_1_3", label: "3", textBefore: "• Have you got a", displayHint: "r _ _ _ _", placeholder: "runny", prefix: "r", textAfter: "nose" },
              { id: "A_1_4", label: "4", textBefore: "or a", displayHint: "b _ _ _ _ _ _", placeholder: "blocked", prefix: "b", textAfter: "nose?" },
              { id: "A_1_5", label: "5", textBefore: "• Do you", displayHint: "s _ _ _ _ _", placeholder: "sneeze", prefix: "s", textAfter: "and" },
              { id: "A_1_6", label: "6", textBefore: "", displayHint: "c _ _ _ _", placeholder: "cough", prefix: "c", textAfter: "a lot?<br><em>What to do: Rest and visit your doctor!</em>" }
            ],
            answers: {
              "A_1_1": { expected: ["headache"], explanation: "Pain in your head is a headache." },
              "A_1_2": { expected: ["sore"], explanation: "A painful throat is a sore throat." },
              "A_1_3": { expected: ["runny"], explanation: "A nose producing mucus is a runny nose." },
              "A_1_4": { expected: ["blocked"], explanation: "A congested nose that makes breathing hard is a blocked nose." },
              "A_1_5": { expected: ["sneeze"], explanation: "Expelling air involuntarily through nose and mouth is sneeze." },
              "A_1_6": { expected: ["cough"], explanation: "Expelling air from lungs with a sudden sharp sound is cough." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the sentences with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["broken", "bruise", "burn", "cut", "bites"],
            example: "0 a broken leg",
            usedInExample: ["broken"],
            sentences: [
              { textBefore: "1 a", gapId: "A_2_1", label: "1", textAfter: "(injured skin with bleeding)" },
              { textBefore: "2 mosquito", gapId: "A_2_2", label: "2", textAfter: "(itchy red marks on skin)" },
              { textBefore: "3 a", gapId: "A_2_3", label: "3", textAfter: "(injury from heat/fire)" },
              { textBefore: "4 a", gapId: "A_2_4", label: "4", textAfter: "(purple mark on skin after a knock)" }
            ],
            answers: {
              "A_2_1": { expected: ["cut"], explanation: "An incision or opening on skin: a cut." },
              "A_2_2": { expected: ["bites"], explanation: "Insect marks: mosquito bites." },
              "A_2_3": { expected: ["burn"], explanation: "Thermal injury: a burn." },
              "A_2_4": { expected: ["bruise"], explanation: "Skin discoloration after impact: a bruise." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 When you exercise, your muscles become / blood becomes bigger and stronger. -> muscles become",
            items: [
              { id: "A_3_1", label: "1", before: "The", options: ["heart", "bone"], after: "is a big muscle and it beats about 100,000 times a day." },
              { id: "A_3_2", label: "2", before: "The", options: ["brain", "Blood"], after: "is red and it goes to all parts of the body." },
              { id: "A_3_3", label: "3", before: "The", options: ["hearts", "bones"], after: "in your legs and arms are the longest in your body." },
              { id: "A_3_4", label: "4", before: "Do intelligent animals have a big", options: ["brain", "blood"], after: "?" }
            ],
            answers: {
              "A_3_1": { expected: ["heart"], explanation: "The heart is the muscular organ pumping blood." },
              "A_3_2": { expected: ["Blood", "blood"], explanation: "Blood is the red fluid circulating in the body." },
              "A_3_3": { expected: ["bones"], explanation: "The femur and limb structures are bones." },
              "A_3_4": { expected: ["brain"], explanation: "Intelligence and cognition are associated with the brain." }
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
            title: "Write sentences with the correct form of have to.",
            points: 6,
            type: "sentence-order",
            example: "0 I / go / ✓ -> I have to go to bed early.",
            items: [
              { id: "A_4_1", label: "1", prompt: "we / water / ✗ the plants" },
              { id: "A_4_2", label: "2", prompt: "Dora / do / ? a lot of chores?" },
              { id: "A_4_3", label: "3", prompt: "Mum / work / ✓ on Saturdays" },
              { id: "A_4_4", label: "4", prompt: "they / study / ? for a test?" },
              { id: "A_4_5", label: "5", prompt: "John / walk / ✗ to school" },
              { id: "A_4_6", label: "6", prompt: "where / you / go / ? today?" }
            ],
            answers: {
              "A_4_1": { expected: ["We don't have to water the plants", "We do not have to water the plants"], explanation: "Negative: We don't have to water the plants." },
              "A_4_2": { expected: ["Does Dora have to do a lot of chores", "Does Dora have to do a lot of chores?"], explanation: "Question 3rd person: Does Dora have to do a lot of chores?" },
              "A_4_3": { expected: ["Mum has to work on Saturdays"], explanation: "Affirmative 3rd person: Mum has to work on Saturdays." },
              "A_4_4": { expected: ["Do they have to study for a test", "Do they have to study for a test?"], explanation: "Question plural: Do they have to study for a test?" },
              "A_4_5": { expected: ["John doesn't have to walk to school", "John does not have to walk to school"], explanation: "Negative 3rd person: John doesn't have to walk to school." },
              "A_4_6": { expected: ["Where do you have to go today", "Where do you have to go today?"], explanation: "Wh- question: Where do you have to go today?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with should or shouldn't and the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 In tropical countries, you should sleep (sleep) under a mosquito net.",
            items: [
              { id: "A_5_1", label: "1", before: "You", verb: "drink", after: "a lot of water when it's hot." },
              { id: "A_5_2", label: "2", before: "You", verb: "go", after: "swimming in this river. The water is very dirty." },
              { id: "A_5_3", label: "3", before: "'", verb: "I / leave", after: "the rubbish here?'" },
              { id: "A_5_4", label: "", before: "'No, you", verb: "", after: ".'" },
              { id: "A_5_5", label: "4", before: "You", verb: "put", after: "up your tent in a safe place." }
            ],
            answers: {
              "A_5_1": { expected: ["should drink"], explanation: "Advice for hot weather: should drink." },
              "A_5_2": { expected: ["shouldn't go", "should not go"], explanation: "Negative advice for dirty water: shouldn't go." },
              "A_5_3": { expected: ["Should I leave"], explanation: "Asking advice: Should I leave the rubbish here?" },
              "A_5_4": { expected: ["shouldn't", "should not"], explanation: "Short refusal/advice: No, you shouldn't." },
              "A_5_5": { expected: ["should put"], explanation: "Safety advice: should put up your tent." }
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
            title: "Match 1–5 with a–e.",
            points: 5,
            type: "matching-dialogue",
            example: "0 A: I feel ill and I've got a temperature. B: f (I think you should see a doctor.)",
            optionsList: [
              { key: "a", text: "I have a terrible headache." },
              { key: "b", text: "Put some cream on it." },
              { key: "c", text: "That's a good idea." },
              { key: "d", text: "You should drink some mint tea." },
              { key: "e", text: "Why don't you lie down?" }
            ],
            items: [
              { id: "A_6_1", label: "1", prompt: "A: You should go to bed." },
              { id: "A_6_2", label: "2", prompt: "A: I've got a stomachache." },
              { id: "A_6_3", label: "3", prompt: "A: What's the matter?" },
              { id: "A_6_4", label: "4", prompt: "A: I've got a burn on my hand." },
              { id: "A_6_5", label: "5", prompt: "A: I've got a headache." }
            ],
            answers: {
              "A_6_1": { expected: ["c"], explanation: "Accepting advice: 'That's a good idea.'" },
              "A_6_2": { expected: ["d"], explanation: "Remedy for stomachache: 'You should drink some mint tea.'" },
              "A_6_3": { expected: ["a"], explanation: "Explaining problem: 'I have a terrible headache.'" },
              "A_6_4": { expected: ["b"], explanation: "Treatment for a burn: 'Put some cream on it.'" },
              "A_6_5": { expected: ["e"], explanation: "Advice for headache: 'Why don't you lie down?'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 5",
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
            title: "Complete the flu poster.",
            points: 6,
            type: "letter-hint",
            example: "Have you got a high ⁰temperature?",
            context: "Have you got the flu? Check:",
            items: [
              { id: "B_1_1", label: "1", textBefore: "• Have you got a high temperature and a", displayHint: "h _ _ _ _ _ _ _", placeholder: "headache", prefix: "h", textAfter: "?" },
              { id: "B_1_2", label: "2", textBefore: "• Do you", displayHint: "c _ _ _ _", placeholder: "cough", prefix: "c", textAfter: "and" },
              { id: "B_1_3", label: "3", textBefore: "", displayHint: "s _ _ _ _ _", placeholder: "sneeze", prefix: "s", textAfter: "a lot?" },
              { id: "B_1_4", label: "4", textBefore: "• Have you got a", displayHint: "s _ _ _", placeholder: "sore", prefix: "s", textAfter: "throat?" },
              { id: "B_1_5", label: "5", textBefore: "• Have you have a", displayHint: "r _ _ _ _", placeholder: "runny", prefix: "r", textAfter: "nose or" },
              { id: "B_1_6", label: "6", textBefore: "a", displayHint: "b _ _ _ _ _ _", placeholder: "blocked", prefix: "b", textAfter: "nose?<br><em>What to do: Rest and visit your doctor!</em>" }
            ],
            answers: {
              "B_1_1": { expected: ["headache"], explanation: "Headache." },
              "B_1_2": { expected: ["cough"], explanation: "Cough." },
              "B_1_3": { expected: ["sneeze"], explanation: "Sneeze." },
              "B_1_4": { expected: ["sore"], explanation: "Sore throat." },
              "B_1_5": { expected: ["runny"], explanation: "Runny nose." },
              "B_1_6": { expected: ["blocked"], explanation: "Blocked nose." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the sentences with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["broken", "bruise", "burn", "cut", "bites"],
            example: "0 a broken leg",
            usedInExample: ["broken"],
            sentences: [
              { textBefore: "1 a", gapId: "B_2_1", label: "1", textAfter: "(injury on hand/finger)" },
              { textBefore: "2 a", gapId: "B_2_2", label: "2", textAfter: "(injury from heat/hot water)" },
              { textBefore: "3 a", gapId: "B_2_3", label: "3", textAfter: "(dark mark from impact)" },
              { textBefore: "4 mosquito", gapId: "B_2_4", label: "4", textAfter: "(itchy spots)" }
            ],
            answers: {
              "B_2_1": { expected: ["cut"], explanation: "Cut on skin." },
              "B_2_2": { expected: ["burn"], explanation: "Heat burn." },
              "B_2_3": { expected: ["bruise"], explanation: "Contusion or bruise." },
              "B_2_4": { expected: ["bites"], explanation: "Insect bites." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Circle the correct answer.",
            points: 4,
            type: "circle-choice",
            example: "0 When you exercise, your muscles become / blood becomes bigger and stronger. -> muscles become",
            items: [
              { id: "B_3_1", label: "1", before: "The", options: ["hearts", "bones"], after: "in your legs and arms are the longest in your body." },
              { id: "B_3_2", label: "2", before: "The", options: ["bone", "heart"], after: "is a big muscle and it beats about 100,000 times a day." },
              { id: "B_3_3", label: "3", before: "Do intelligent animals have a big", options: ["brain", "blood"], after: "?" },
              { id: "B_3_4", label: "4", before: "", options: ["Blood", "Bone"], after: "is red and it goes to all parts of the body." }
            ],
            answers: {
              "B_3_1": { expected: ["bones"], explanation: "Bones in limbs." },
              "B_3_2": { expected: ["heart"], explanation: "Heart muscle." },
              "B_3_3": { expected: ["brain"], explanation: "Brain." },
              "B_3_4": { expected: ["Blood", "blood"], explanation: "Blood is red." }
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
            title: "Write sentences with the correct form of have to.",
            points: 6,
            type: "sentence-order",
            example: "0 I / go / ✓ -> I have to go to bed early.",
            items: [
              { id: "B_4_1", label: "1", prompt: "you / water / ✗ the plants" },
              { id: "B_4_2", label: "2", prompt: "Phil / help / ? his mum at home?" },
              { id: "B_4_3", label: "3", prompt: "Dad / make / ✓ dinner tonight" },
              { id: "B_4_4", label: "4", prompt: "we / study / ? for a test?" },
              { id: "B_4_5", label: "5", prompt: "Celia / take / ✗ the bus to school" },
              { id: "B_4_6", label: "6", prompt: "what / you / do / ? this evening?" }
            ],
            answers: {
              "B_4_1": { expected: ["You don't have to water the plants", "You do not have to water the plants"], explanation: "Negative: You don't have to water the plants." },
              "B_4_2": { expected: ["Does Phil have to help his mum at home", "Does Phil have to help his mum at home?"], explanation: "Question 3rd person: Does Phil have to help his mum at home?" },
              "B_4_3": { expected: ["Dad has to make dinner tonight"], explanation: "Affirmative 3rd person: Dad has to make dinner tonight." },
              "B_4_4": { expected: ["Do we have to study for a test", "Do we have to study for a test?"], explanation: "Question plural: Do we have to study for a test?" },
              "B_4_5": { expected: ["Celia doesn't have to take the bus to school", "Celia does not have to take the bus to school"], explanation: "Negative 3rd person: Celia doesn't have to take the bus to school." },
              "B_4_6": { expected: ["What do you have to do this evening", "What do you have to do this evening?"], explanation: "Wh- question: What do you have to do this evening?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with should or shouldn't and the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 In tropical countries, you should sleep (sleep) under a mosquito net.",
            items: [
              { id: "B_5_1", label: "1", before: "'", verb: "we / put", after: "up our tent here?'" },
              { id: "B_5_2", label: "", before: "'Yes, you", verb: "", after: ".'" },
              { id: "B_5_3", label: "2", before: "You", verb: "swim", after: "in this lake. The water is very dirty." },
              { id: "B_5_4", label: "3", before: "You", verb: "drink", after: "a lot of water when it's hot and you" },
              { id: "B_5_5", label: "", before: "", verb: "sit", after: "in the sun." }
            ],
            answers: {
              "B_5_1": { expected: ["Should we put"], explanation: "Advice question: Should we put up our tent here?" },
              "B_5_2": { expected: ["should"], explanation: "Affirmative advice: Yes, you should." },
              "B_5_3": { expected: ["shouldn't swim", "should not swim"], explanation: "Negative advice: shouldn't swim." },
              "B_5_4": { expected: ["should drink"], explanation: "Affirmative advice: should drink." },
              "B_5_5": { expected: ["shouldn't sit", "should not sit"], explanation: "Negative advice: shouldn't sit in the sun." }
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
            title: "Match 1–5 with a–e.",
            points: 5,
            type: "matching-dialogue",
            example: "0 A: I feel ill and I've got a temperature. B: f (You should see a doctor.)",
            optionsList: [
              { key: "a", text: "I have earache." },
              { key: "b", text: "I think you should see the dentist." },
              { key: "c", text: "Put a plaster on it." },
              { key: "d", text: "That's a good idea." },
              { key: "e", text: "Why don't you lie down?" }
            ],
            items: [
              { id: "B_6_1", label: "1", prompt: "A: What's the matter?" },
              { id: "B_6_2", label: "2", prompt: "A: I've got a bad headache." },
              { id: "B_6_3", label: "3", prompt: "A: You should go to bed." },
              { id: "B_6_4", label: "4", prompt: "A: I've got toothache." },
              { id: "B_6_5", label: "5", prompt: "A: I've got a cut on my finger." }
            ],
            answers: {
              "B_6_1": { expected: ["a"], explanation: "Stating problem: 'I have earache.'" },
              "B_6_2": { expected: ["e"], explanation: "Advice for headache: 'Why don't you lie down?'" },
              "B_6_3": { expected: ["d"], explanation: "Accepting advice: 'That's a good idea.'" },
              "B_6_4": { expected: ["b"], explanation: "Advice for toothache: 'I think you should see the dentist.'" },
              "B_6_5": { expected: ["c"], explanation: "First aid for a cut: 'Put a plaster on it.'" }
            }
          }
        ]
      }
    }
  }
};
