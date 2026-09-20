/**
 * Go Getter 2 - Unit 7 Language Test
 * Transport & Travel / Past Simple (Negative & Questions)
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_7_DATA = {
  id: "unit7",
  courseId: "gogetter2",
  number: 7,
  title: "Transport & Travel",
  description: "Vocabulary: Transport words, travel equipment, holiday collocations. Grammar: Past Simple negative (didn't + verb), Past Simple questions and short answers (Did...?), Wh- questions. Communication: Buying a train ticket / at the station.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 7",
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
            title: "Complete the text with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["arrive", "leaves", "motorbike", "on", "takes", "underground"],
            example: "0 bike",
            usedInExample: ["bike"],
            sentences: [
              { id: "A_1_1", num: 1, before: "I love cycling and I go to school by bike. My best friend goes", after: "foot." },
              { id: "A_1_2", num: 2, before: "I usually", after: "at school before he does." },
              { id: "A_1_3", num: 3, before: "Mum", after: "a bus to work." },
              { id: "A_1_4", num: 4, before: "She", after: "home ten past eight in the morning." },
              { id: "A_1_5", num: 5, before: "Dad travels to work by", after: ". He likes it because he can read his newspaper then." },
              { id: "A_1_6", num: 6, before: "My big sister goes everywhere by", after: ". She loves riding it!" }
            ],
            answers: {
              "A_1_1": { expected: ["on"], explanation: "Go on foot." },
              "A_1_2": { expected: ["arrive"], explanation: "Arrive at school." },
              "A_1_3": { expected: ["takes"], explanation: "Takes a bus." },
              "A_1_4": { expected: ["leaves"], explanation: "Leaves home at ten past eight." },
              "A_1_5": { expected: ["underground"], explanation: "Travels by underground (metro/tube)." },
              "A_1_6": { expected: ["motorbike"], explanation: "Rides a motorbike." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the text.",
            points: 6,
            type: "grammar-gap",
            example: "0 guidebook",
            storyText: "Hi Felicity,\nGuess what! We're back home! We had a FANTASTIC holiday in Australia! Dad bought a guidebook and we went",
            items: [
              { id: "A_2_1", label: "1", textBefore: "s", textAfter: "in Sydney." },
              { id: "A_2_2", label: "2", textBefore: "We stayed in a great h", textAfter: "." },
              { id: "A_2_3", label: "3", textBefore: "I bought s", textAfter: "— it was very sunny!" },
              { id: "A_2_4", label: "4", textBefore: "Then we went camping in the Blue Mountains, so we took our s", textAfter: "b        ." },
              { id: "A_2_5", label: "5", textBefore: "My s", textAfter: "was heavy when we came back because" },
              { id: "A_2_6", label: "6", textBefore: "I bought a lot of s", textAfter: ". The toy kangaroo is for you! And I've got a lot of photos to show you!!\nSee you soon. Cassandra" }
            ],
            answers: {
              "A_2_1": { expected: ["ightseeing", "sightseeing"], explanation: "Go sightseeing." },
              "A_2_2": { expected: ["otel", "hotel"], explanation: "Stay in a hotel." },
              "A_2_3": { expected: ["unglasses", "sunglasses"], explanation: "Sunglasses for sunny weather." },
              "A_2_4": { expected: ["leeping bags", "leeping bag", "sleeping bags", "sleeping bag"], explanation: "Sleeping bags for camping." },
              "A_2_5": { expected: ["uitcase", "suitcase"], explanation: "Suitcase was heavy with luggage." },
              "A_2_6": { expected: ["ouvenirs", "souvenirs"], explanation: "Souvenirs bought on holiday." }
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
            title: "Use the Past Simple form of the verbs in the text.",
            points: 5,
            type: "fill-gaps",
            example: "0 didn't have (not have)",
            storyText: "Dad and Aunt Cindy didn't have holidays like us when they were children.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "They", textAfter: "(not take) a lot of photos." },
              { id: "A_3_2", label: "2", textBefore: "Dad", textAfter: "(not watch) TV and Aunt Cindy" },
              { id: "A_3_3", label: "3", textBefore: "", textAfter: "(not surf) the Internet. Dad says:" },
              { id: "A_3_4", label: "4", textBefore: "'We", textAfter: "(not use) technology but we" },
              { id: "A_3_5", label: "5", textBefore: "", textAfter: "(have) a lot of fun.'" }
            ],
            answers: {
              "A_3_1": { expected: ["didn't take", "did not take"], explanation: "Past Simple negative: didn't take." },
              "A_3_2": { expected: ["didn't watch", "did not watch"], explanation: "Past Simple negative: didn't watch." },
              "A_3_3": { expected: ["didn't surf", "did not surf"], explanation: "Past Simple negative: didn't surf." },
              "A_3_4": { expected: ["didn't use", "did not use"], explanation: "Past Simple negative: didn't use." },
              "A_3_5": { expected: ["had"], explanation: "Past Simple of have: had." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write questions and short answers.",
            points: 4,
            type: "fill-gaps",
            example: "0 Did you buy a dress? / No, I didn't. I bought a hoodie.",
            items: [
              { id: "A_4_1", label: "1", textBefore: "A: Thomas ate lunch at this café yesterday.\nB:", textAfter: "(he / eat) a sandwich?" },
              { id: "A_4_2", label: "2", textBefore: "B: Yes,", textAfter: "." },
              { id: "A_4_3", label: "3", textBefore: "A: Mum and Dad cooked dinner last night.\nB:", textAfter: "(they / cook) pasta?" },
              { id: "A_4_4", label: "4", textBefore: "A: No,", textAfter: ". They cooked pizza." }
            ],
            answers: {
              "A_4_1": { expected: ["Did he eat", "did he eat"], explanation: "Past Simple question: Did he eat...?" },
              "A_4_2": { expected: ["he did"], explanation: "Affirmative short answer: Yes, he did." },
              "A_4_3": { expected: ["Did they cook", "did they cook"], explanation: "Past Simple question: Did they cook...?" },
              "A_4_4": { expected: ["they didn't", "they did not"], explanation: "Negative short answer: No, they didn't." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the questions.",
            points: 4,
            type: "fill-gaps",
            example: "0 Did you have fun on your holiday? — Yes, we had a lot of fun.",
            items: [
              { id: "A_5_1", label: "1", textBefore: "A: Where did", textAfter: "?\nB: We went to Spain." },
              { id: "A_5_2", label: "2", textBefore: "A: How did", textAfter: "there?\nB: We travelled there by plane." },
              { id: "A_5_3", label: "3", textBefore: "A: Did", textAfter: "Granada?\nB: No, we didn't see Granada." },
              { id: "A_5_4", label: "4", textBefore: "A: When did", textAfter: "home?\nB: I came home last Saturday." }
            ],
            answers: {
              "A_5_1": { expected: ["you go", "you travel"], explanation: "Where did you go? / Where did you travel?" },
              "A_5_2": { expected: ["you travel", "you go"], explanation: "How did you travel there? / How did you go there?" },
              "A_5_3": { expected: ["you see"], explanation: "Did you see Granada?" },
              "A_5_4": { expected: ["you come", "you get"], explanation: "When did you come home? / When did you get home?" }
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
            title: "Put the dialogue in the correct order (write numbers 2, 3, 4, 5, 6).",
            points: 5,
            type: "fill-gaps",
            example: "[1] I'd like a ticket to Manchester, please. ... [7] Thanks.",
            items: [
              { id: "A_6_1", label: "1", textBefore: "What time does the train leave? — Number:", textAfter: "" },
              { id: "A_6_2", label: "2", textBefore: "At ten minutes to eight. — Number:", textAfter: "" },
              { id: "A_6_3", label: "3", textBefore: "Here you are. — Number:", textAfter: "" },
              { id: "A_6_4", label: "4", textBefore: "How much is it? — Number:", textAfter: "" },
              { id: "A_6_5", label: "5", textBefore: "It's seventy-five pounds, please. — Number:", textAfter: "" }
            ],
            answers: {
              "A_6_1": { expected: ["5"], explanation: "Step 5: What time does the train leave?" },
              "A_6_2": { expected: ["6"], explanation: "Step 6: At ten minutes to eight." },
              "A_6_3": { expected: ["2"], explanation: "Step 2: Here you are." },
              "A_6_4": { expected: ["3"], explanation: "Step 3: How much is it?" },
              "A_6_5": { expected: ["4"], explanation: "Step 4: It's seventy-five pounds, please." }
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
        maxScore: 12,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["arrive", "bus", "leave", "motorbike", "on", "take"],
            example: "0 bike",
            usedInExample: ["bike"],
            sentences: [
              { id: "B_1_1", num: 1, before: "My best friend goes to school by bike. I don't like cycling, so I go there", after: "foot." },
              { id: "B_1_2", num: 2, before: "Mum and Dad", after: "the train to work." },
              { id: "B_1_3", num: 3, before: "They usually", after: "home at ten past eight" },
              { id: "B_1_4", num: 4, before: "and they go to the train station by", after: "." },
              { id: "B_1_5", num: 5, before: "They", after: "at work at ten to nine." },
              { id: "B_1_6", num: 6, before: "My big brother goes everywhere by", after: ". He loves riding it!" }
            ],
            answers: {
              "B_1_1": { expected: ["on"], explanation: "Go on foot." },
              "B_1_2": { expected: ["take"], explanation: "Take the train." },
              "B_1_3": { expected: ["leave"], explanation: "Leave home." },
              "B_1_4": { expected: ["bus"], explanation: "By bus." },
              "B_1_5": { expected: ["arrive"], explanation: "Arrive at work." },
              "B_1_6": { expected: ["motorbike"], explanation: "Rides a motorbike." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the pictures and complete the text.",
            points: 6,
            type: "grammar-gap",
            example: "0 guidebook",
            storyText: "Hi Matt,\nWe're back home! We had a FANTASTIC holiday in Australia! We bought a guidebook and we went",
            items: [
              { id: "B_2_1", label: "1", textBefore: "s", textAfter: "in Sydney." },
              { id: "B_2_2", label: "2", textBefore: "Then we went to the Blue Mountains. We didn't stay in a h", textAfter: "." },
              { id: "B_2_3", label: "3", textBefore: "We went camping so we took our s", textAfter: "b        ." },
              { id: "B_2_4", label: "4", textBefore: "I bought a lot of s", textAfter: "in Australia so" },
              { id: "B_2_5", label: "5", textBefore: "my s", textAfter: "was heavy. The toy koala is for you." },
              { id: "B_2_6", label: "6", textBefore: "I bought s", textAfter: "— it was sunny every day! And I've got a lot of photos to show you when I see you.\nBye for now. Nicky" }
            ],
            answers: {
              "B_2_1": { expected: ["ightseeing", "sightseeing"], explanation: "Go sightseeing." },
              "B_2_2": { expected: ["otel", "hotel"], explanation: "Stay in a hotel." },
              "B_2_3": { expected: ["leeping bags", "leeping bag", "sleeping bags", "sleeping bag"], explanation: "Sleeping bags for camping." },
              "B_2_4": { expected: ["ouvenirs", "souvenirs"], explanation: "Souvenirs bought on holiday." },
              "B_2_5": { expected: ["uitcase", "suitcase"], explanation: "Suitcase was heavy." },
              "B_2_6": { expected: ["unglasses", "sunglasses"], explanation: "Sunglasses for sunny weather." }
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
            title: "Use the Past Simple form of the verbs in the text.",
            points: 5,
            type: "fill-gaps",
            example: "0 didn't have (not have)",
            storyText: "Mum and Uncle Chris didn't have holidays like us when they were children.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "They", textAfter: "(not text) their friends." },
              { id: "B_3_2", label: "2", textBefore: "Mum", textAfter: "(not chat) with her friends online and Uncle Chris" },
              { id: "B_3_3", label: "3", textBefore: "", textAfter: "(not watch) DVDs on his tablet. Mum says:" },
              { id: "B_3_4", label: "4", textBefore: "'We", textAfter: "(not use) technology but we" },
              { id: "B_3_5", label: "5", textBefore: "", textAfter: "(have) a lot of fun.'" }
            ],
            answers: {
              "B_3_1": { expected: ["didn't text", "did not text"], explanation: "Past Simple negative: didn't text." },
              "B_3_2": { expected: ["didn't chat", "did not chat"], explanation: "Past Simple negative: didn't chat." },
              "B_3_3": { expected: ["didn't watch", "did not watch"], explanation: "Past Simple negative: didn't watch." },
              "B_3_4": { expected: ["didn't use", "did not use"], explanation: "Past Simple negative: didn't use." },
              "B_3_5": { expected: ["had"], explanation: "Past Simple of have: had." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write questions and short answers.",
            points: 4,
            type: "fill-gaps",
            example: "0 Did you buy a dress? / No, I didn't. I bought a hoodie.",
            items: [
              { id: "B_4_1", label: "1", textBefore: "A: Sharon tidied the house last Saturday.\nB:", textAfter: "(she / tidy) the kitchen?" },
              { id: "B_4_2", label: "2", textBefore: "A: Yes,", textAfter: "." },
              { id: "B_4_3", label: "3", textBefore: "A: Heather and Malcolm ate dinner at an Italian restaurant last week.\nB:", textAfter: "(they / eat) pasta?" },
              { id: "B_4_4", label: "4", textBefore: "A: No,", textAfter: ". They ate pizza." }
            ],
            answers: {
              "B_4_1": { expected: ["Did she tidy", "did she tidy"], explanation: "Past Simple question: Did she tidy...?" },
              "B_4_2": { expected: ["she did"], explanation: "Affirmative short answer: Yes, she did." },
              "B_4_3": { expected: ["Did they eat", "did they eat"], explanation: "Past Simple question: Did they eat...?" },
              "B_4_4": { expected: ["they didn't", "they did not"], explanation: "Negative short answer: No, they didn't." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the questions.",
            points: 4,
            type: "fill-gaps",
            example: "0 Did you have fun on your holiday? — Yes, we had a lot of fun.",
            items: [
              { id: "B_5_1", label: "1", textBefore: "A: Where did", textAfter: "?\nB: I travelled to Germany." },
              { id: "B_5_2", label: "2", textBefore: "A: How did", textAfter: "there?\nB: We went there by train." },
              { id: "B_5_3", label: "3", textBefore: "A: Did you", textAfter: "the Rhine?\nB: Yes, we saw the Rhine." },
              { id: "B_5_4", label: "4", textBefore: "A: When did", textAfter: "home?\nB: I came home yesterday." }
            ],
            answers: {
              "B_5_1": { expected: ["you travel", "you go"], explanation: "Where did you travel? / Where did you go?" },
              "B_5_2": { expected: ["you go", "you travel"], explanation: "How did you go there? / How did you travel there?" },
              "B_5_3": { expected: ["see"], explanation: "Did you see the Rhine?" },
              "B_5_4": { expected: ["you come", "you get"], explanation: "When did you come home? / When did you get home?" }
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
            title: "Put the dialogue in the correct order (write numbers 2, 3, 4, 5, 6).",
            points: 5,
            type: "fill-gaps",
            example: "[1] I'd like a ticket to Bristol, please. ... [7] Thanks.",
            items: [
              { id: "B_6_1", label: "1", textBefore: "It's thirty pounds fifty, please. — Number:", textAfter: "" },
              { id: "B_6_2", label: "2", textBefore: "What time does the train leave? — Number:", textAfter: "" },
              { id: "B_6_3", label: "3", textBefore: "Here you are. — Number:", textAfter: "" },
              { id: "B_6_4", label: "4", textBefore: "How much is it? — Number:", textAfter: "" },
              { id: "B_6_5", label: "5", textBefore: "At three minutes past five. — Number:", textAfter: "" }
            ],
            answers: {
              "B_6_1": { expected: ["4"], explanation: "Step 4: It's thirty pounds fifty, please." },
              "B_6_2": { expected: ["5"], explanation: "Step 5: What time does the train leave?" },
              "B_6_3": { expected: ["2"], explanation: "Step 2: Here you are." },
              "B_6_4": { expected: ["3"], explanation: "Step 3: How much is it?" },
              "B_6_5": { expected: ["6"], explanation: "Step 6: At three minutes past five." }
            }
          }
        ]
      }
    }
  }
};
