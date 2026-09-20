/**
 * Go Getter 2 - Unit 5 Language Test
 * Places in Town & Past Simple 'to be'
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_5_DATA = {
  id: "unit5",
  courseId: "gogetter2",
  number: 5,
  title: "Places in Town & Past Simple 'to be'",
  description: "Vocabulary: Places in a town, prepositions of place, city adjectives. Grammar: Past Simple form of 'be' (was / were, wasn't / weren't), There was / There were. Communication: Asking for and giving directions.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 5",
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
            title: "Write the names of places in a town.",
            points: 7,
            type: "grammar-gap",
            example: "0 Where can you watch a film? cinema",
            items: [
              { id: "A_1_1", label: "1", textBefore: "Where can you send a postcard or a letter? p", textAfter: "" },
              { id: "A_1_2", label: "2", textBefore: "Where can you stay when you are on holiday? h", textAfter: "" },
              { id: "A_1_3", label: "3", textBefore: "Where can you dive and swim? s", textAfter: "" },
              { id: "A_1_4", label: "4", textBefore: "Where can you get money? b", textAfter: "" },
              { id: "A_1_5", label: "5", textBefore: "Where do doctors work? h", textAfter: "" },
              { id: "A_1_6", label: "6", textBefore: "Where can you have dinner? r", textAfter: "" },
              { id: "A_1_7", label: "7", textBefore: "Where can you watch actors? t", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["ost office", "ost office", "post office"], explanation: "A post office is where you send letters and postcards." },
              "A_1_2": { expected: ["otel", "hotel"], explanation: "A hotel is where you stay on holiday." },
              "A_1_3": { expected: ["wimming pool", "swimming pool"], explanation: "A swimming pool is where you dive and swim." },
              "A_1_4": { expected: ["ank", "bank"], explanation: "A bank is where you get money." },
              "A_1_5": { expected: ["ospital", "hospital"], explanation: "Doctors work in a hospital." },
              "A_1_6": { expected: ["estaurant", "restaurant"], explanation: "A restaurant is where you have dinner." },
              "A_1_7": { expected: ["heatre", "heater", "theatre", "theater"], explanation: "A theatre is where you watch actors." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture and complete the text with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["behind", "between", "next to", "opposite"],
            example: "0 in front of the stadium",
            usedInExample: ["in front of"],
            storyText: "In my town, there's a great football stadium. There's a bus stop in front of the stadium. I often watch football matches there.",
            sentences: [
              { id: "A_2_1", num: 1, before: "There's a cool café", after: "the stadium." },
              { id: "A_2_2", num: 2, before: "The museum is", after: "the café and the library." },
              { id: "A_2_3", num: 3, before: "There's a small park", after: "the café." },
              { id: "A_2_4", num: 4, before: "", after: "the park there's a street with houses. I live there, at number 39." }
            ],
            answers: {
              "A_2_1": { expected: ["next to"], explanation: "The café is next to the stadium." },
              "A_2_2": { expected: ["between"], explanation: "The museum is between the café and the library." },
              "A_2_3": { expected: ["opposite"], explanation: "The small park is opposite the café." },
              "A_2_4": { expected: ["Behind", "behind"], explanation: "Behind the park there is a street with houses." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the text with adjectives.",
            points: 4,
            type: "grammar-gap",
            storyText: "My town by Vinnie Smith\nI don't live in a big city. I live in a small town.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "Big cities are dirty but my town is c", textAfter: "." },
              { id: "A_3_2", label: "2", textBefore: "The houses here aren't old. They're m", textAfter: "." },
              { id: "A_3_3", label: "3", textBefore: "The streets are busy in the morning and afternoon, but at night they're q", textAfter: "." },
              { id: "A_3_4", label: "4", textBefore: "Some people think my town is boring but they're wrong. You can do a lot of i", textAfter: "activities here." }
            ],
            answers: {
              "A_3_1": { expected: ["lean", "clean"], explanation: "clean: opposite of dirty." },
              "A_3_2": { expected: ["odern", "modern"], explanation: "modern: not old." },
              "A_3_3": { expected: ["uiet", "quiet"], explanation: "quiet: not noisy or busy." },
              "A_3_4": { expected: ["nteresting", "interesting"], explanation: "interesting activities: not boring." }
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
            title: "Use the correct Past Simple form of be: affirmative [✓] or negative [✗].",
            points: 5,
            type: "fill-gaps",
            example: "0 I am happy today but I was sad yesterday. ✓",
            items: [
              { id: "A_4_1", label: "1", textBefore: "Why", textAfter: "you at home last night? ✗" },
              { id: "A_4_2", label: "2", textBefore: "Martha", textAfter: "in London in 2015. ✓" },
              { id: "A_4_3", label: "3", textBefore: "There", textAfter: "some people in the park last night. ✓" },
              { id: "A_4_4", label: "4", textBefore: "The children", textAfter: "at school last week. ✗" },
              { id: "A_4_5", label: "5", textBefore: "There", textAfter: "any milk in the fridge yesterday. ✗" }
            ],
            answers: {
              "A_4_1": { expected: ["weren't", "were not"], explanation: "Negative Past Simple with 'you': weren't." },
              "A_4_2": { expected: ["was"], explanation: "Affirmative Past Simple with 'Martha' (she): was." },
              "A_4_3": { expected: ["were"], explanation: "Affirmative Past Simple with plural 'some people': were." },
              "A_4_4": { expected: ["weren't", "were not"], explanation: "Negative Past Simple with plural 'The children': weren't." },
              "A_4_5": { expected: ["wasn't", "was not"], explanation: "Negative Past Simple with uncountable 'milk': wasn't." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogues with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["no", "there", "was", "wasn't", "weren't", "yes"],
            example: "0 Was James there?",
            usedInExample: ["was"],
            storyText: "A: Tell me about the party yesterday. Was James there?",
            sentences: [
              { id: "A_5_1", num: 1, before: "B:", after: ", he was, but Doreen and Michael" },
              { id: "A_5_2", num: 2, before: "", after: "there. They're on holiday." },
              { id: "A_5_3", num: 3, before: "A: Were", after: "a lot of people?" },
              { id: "A_5_4", num: 4, before: "B: No, but it", after: "a good party. It" },
              { id: "A_5_5", num: 5, before: "", after: "very boring!" }
            ],
            answers: {
              "A_5_1": { expected: ["Yes", "yes"], explanation: "Yes, he was." },
              "A_5_2": { expected: ["weren't", "were not"], explanation: "Doreen and Michael weren't there." },
              "A_5_3": { expected: ["there"], explanation: "Were there a lot of people?" },
              "A_5_4": { expected: ["was"], explanation: "It was a good party." },
              "A_5_5": { expected: ["wasn't", "was not"], explanation: "It wasn't very boring." }
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
            title: "Use one word in each gap in the dialogue.",
            points: 5,
            type: "grammar-gap",
            example: "0 Excuse me. I'm looking for Newtown Bank.",
            items: [
              { id: "A_6_1", label: "1", textBefore: "A: Excuse me. I'm looking for Newtown Bank.\nB: Oh yes. I know where that is. It's o", textAfter: "Green Street." },
              { id: "A_6_2", label: "2", textBefore: "A: Where's Green Street? Is it f", textAfter: "?" },
              { id: "A_6_3", label: "3", textBefore: "B: No, it isn't. Go s", textAfter: "on, then turn left." },
              { id: "A_6_4", label: "4", textBefore: "Go p", textAfter: "the library and the bank is on the" },
              { id: "A_6_5", label: "5", textBefore: "r", textAfter: ".\nA: Thank you." }
            ],
            answers: {
              "A_6_1": { expected: ["n", "on"], explanation: "It's on Green Street." },
              "A_6_2": { expected: ["ar", "far"], explanation: "Is it far?" },
              "A_6_3": { expected: ["traight", "straight"], explanation: "Go straight on." },
              "A_6_4": { expected: ["ast", "past"], explanation: "Go past the library." },
              "A_6_5": { expected: ["ight", "right"], explanation: "On the right." }
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
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Write the names of places in a town.",
            points: 7,
            type: "grammar-gap",
            example: "0 Where can you watch a film? cinema",
            items: [
              { id: "B_1_1", label: "1", textBefore: "Where do doctors work? h", textAfter: "" },
              { id: "B_1_2", label: "2", textBefore: "Where can you get money? b", textAfter: "" },
              { id: "B_1_3", label: "3", textBefore: "Where can you go to read books and use a computer? l", textAfter: "" },
              { id: "B_1_4", label: "4", textBefore: "Where can you have dinner? r", textAfter: "" },
              { id: "B_1_5", label: "5", textBefore: "Where can you watch actors? t", textAfter: "" },
              { id: "B_1_6", label: "6", textBefore: "Where can you stay when you are on holiday? h", textAfter: "" },
              { id: "B_1_7", label: "7", textBefore: "Where can you send a postcard or a letter? p", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["ospital", "hospital"], explanation: "Doctors work in a hospital." },
              "B_1_2": { expected: ["ank", "bank"], explanation: "You can get money at a bank." },
              "B_1_3": { expected: ["ibrary", "library"], explanation: "You can read books in a library." },
              "B_1_4": { expected: ["estaurant", "restaurant"], explanation: "You can have dinner at a restaurant." },
              "B_1_5": { expected: ["heatre", "theater", "theatre", "theater"], explanation: "You can watch actors at a theatre." },
              "B_1_6": { expected: ["otel", "hotel"], explanation: "You can stay at a hotel when on holiday." },
              "B_1_7": { expected: ["ost office", "ost office", "post office"], explanation: "You can send postcards at a post office." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture and complete the text with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["behind", "between", "next to", "opposite"],
            example: "0 in front of the stadium",
            usedInExample: ["in front of"],
            storyText: "In my town, there's a great football stadium. There's a bus stop in front of the stadium. My family and I often watch football matches there. There's also a cool café.",
            sentences: [
              { id: "B_2_1", num: 1, before: "It's", after: "the stadium and the museum." },
              { id: "B_2_2", num: 2, before: "The town library is", after: "the museum." },
              { id: "B_2_3", num: 3, before: "There's a park", after: "the café and the stadium." },
              { id: "B_2_4", num: 4, before: "There's a street with houses", after: "the park. We live there, at number 35." }
            ],
            answers: {
              "B_2_1": { expected: ["between"], explanation: "It's between the stadium and the museum." },
              "B_2_2": { expected: ["next to"], explanation: "The library is next to the museum." },
              "B_2_3": { expected: ["opposite"], explanation: "There's a park opposite the café and stadium." },
              "B_2_4": { expected: ["Behind", "behind"], explanation: "Behind the park there is a street with houses." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the text with adjectives.",
            points: 4,
            type: "grammar-gap",
            storyText: "My town by Harriet Cameron\nI don't live in a small town. I live in a big city. Small towns are usually clean but cities are often",
            items: [
              { id: "B_3_1", label: "1", textBefore: "d", textAfter: ". The houses in my city aren't" },
              { id: "B_3_2", label: "2", textBefore: "m", textAfter: ". They're old. The streets are" },
              { id: "B_3_3", label: "3", textBefore: "b", textAfter: "in the morning, afternoon and evening. They're never quiet." },
              { id: "B_3_4", label: "4", textBefore: "The city has got a lot of problems but it's always interesting. It's never b", textAfter: "!" }
            ],
            answers: {
              "B_3_1": { expected: ["irty", "dirty"], explanation: "dirty: not clean." },
              "B_3_2": { expected: ["odern", "modern"], explanation: "modern: not old." },
              "B_3_3": { expected: ["usy", "busy"], explanation: "busy: full of activity, not quiet." },
              "B_3_4": { expected: ["oring", "boring"], explanation: "boring: opposite of interesting." }
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
            title: "Use the correct Past Simple form of be: affirmative [✓] or negative [✗].",
            points: 5,
            type: "fill-gaps",
            example: "0 I am happy today but I was sad yesterday. ✓",
            items: [
              { id: "B_4_1", label: "1", textBefore: "There", textAfter: "some people in the street last Friday. ✓" },
              { id: "B_4_2", label: "2", textBefore: "Morris", textAfter: "well last week. ✓" },
              { id: "B_4_3", label: "3", textBefore: "Anya and Otto", textAfter: "in Madrid in 2009. ✗" },
              { id: "B_4_4", label: "4", textBefore: "There", textAfter: "some eggs in the shop yesterday. ✓" },
              { id: "B_4_5", label: "5", textBefore: "Mum", textAfter: "at home last night. ✗" }
            ],
            answers: {
              "B_4_1": { expected: ["were"], explanation: "Plural affirmative: were." },
              "B_4_2": { expected: ["was"], explanation: "Singular affirmative: was." },
              "B_4_3": { expected: ["weren't", "were not"], explanation: "Plural negative: weren't." },
              "B_4_4": { expected: ["were"], explanation: "Plural affirmative: were." },
              "B_4_5": { expected: ["wasn't", "was not"], explanation: "Singular negative: wasn't." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogues with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["no", "there", "was", "wasn't", "were", "yes"],
            example: "0 Was Tim there?",
            usedInExample: ["was"],
            storyText: "A: Tell me about the party yesterday. Was Tim there?",
            sentences: [
              { id: "B_5_1", num: 1, before: "B:", after: ", he wasn't. He's on holiday but Haley and Steve" },
              { id: "B_5_2", num: 2, before: "", after: "there." },
              { id: "B_5_3", num: 3, before: "A: Were", after: "a lot of people?" },
              { id: "B_5_4", num: 4, before: "B: Yes, it", after: "a fantastic party! It" },
              { id: "B_5_5", num: 5, before: "", after: "boring!" }
            ],
            answers: {
              "B_5_1": { expected: ["No", "no"], explanation: "No, he wasn't." },
              "B_5_2": { expected: ["were"], explanation: "Haley and Steve were there." },
              "B_5_3": { expected: ["there"], explanation: "Were there a lot of people?" },
              "B_5_4": { expected: ["was"], explanation: "It was a fantastic party." },
              "B_5_5": { expected: ["wasn't", "was not"], explanation: "It wasn't boring." }
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
            title: "Use one word in each gap in the dialogue.",
            points: 5,
            type: "grammar-gap",
            example: "0 Excuse me. I'm looking for the library.",
            items: [
              { id: "B_6_1", label: "1", textBefore: "A: Excuse me. I'm looking for the library.\nB: Oh yes. I know where that is. It's o", textAfter: "Lord Roberts Street." },
              { id: "B_6_2", label: "2", textBefore: "A: Is it f", textAfter: "?" },
              { id: "B_6_3", label: "3", textBefore: "B: No, it isn't. Go s", textAfter: "on, then turn right." },
              { id: "B_6_4", label: "4", textBefore: "Go p", textAfter: "the cinema and the library is on the" },
              { id: "B_6_5", label: "5", textBefore: "l", textAfter: ".\nA: Thank you." }
            ],
            answers: {
              "B_6_1": { expected: ["n", "on"], explanation: "It's on Lord Roberts Street." },
              "B_6_2": { expected: ["ar", "far"], explanation: "Is it far?" },
              "B_6_3": { expected: ["traight", "straight"], explanation: "Go straight on." },
              "B_6_4": { expected: ["ast", "past"], explanation: "Go past the cinema." },
              "B_6_5": { expected: ["eft", "left"], explanation: "On the left." }
            }
          }
        ]
      }
    }
  }
};
