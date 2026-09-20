/**
 * Go Getter 2 - Unit 8 Language Test
 * Celebrations & Future with 'be going to'
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_8_DATA = {
  id: "unit8",
  courseId: "gogetter2",
  number: 8,
  title: "Celebrations & Future Plans",
  description: "Vocabulary: Events and celebrations, types of music, dates and ordinal numbers. Grammar: Future with 'be going to' (affirmative, negative, questions), review of question words. Communication: Making suggestions, buying tickets.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 8",
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
            title: "Write the names of events.",
            points: 6,
            type: "grammar-gap",
            example: "0 People celebrate a special day. a birthday party",
            items: [
              { id: "A_1_1", label: "1", textBefore: "Children go to a friend's house and sleep there. a s", textAfter: "" },
              { id: "A_1_2", label: "2", textBefore: "People act, sing or dance and the best person wins. a talent c", textAfter: "" },
              { id: "A_1_3", label: "3", textBefore: "People cook meat and sausages in the garden. a b", textAfter: "" },
              { id: "A_1_4", label: "4", textBefore: "People go to the theatre and watch actors act. a p", textAfter: "" },
              { id: "A_1_5", label: "5", textBefore: "People take food with them and have lunch in the park or on a beach. a p", textAfter: "" },
              { id: "A_1_6", label: "6", textBefore: "People wear a costume and have fun together. a f", textAfter: "d        party" }
            ],
            answers: {
              "A_1_1": { expected: ["leepover", "sleepover"], explanation: "A sleepover is when friends stay the night." },
              "A_1_2": { expected: ["ompetition", "competition"], explanation: "A talent competition." },
              "A_1_3": { expected: ["arbecue", "barbecue"], explanation: "A barbecue in the garden." },
              "A_1_4": { expected: ["lay", "play"], explanation: "A theatrical play." },
              "A_1_5": { expected: ["icnic", "picnic"], explanation: "A picnic in the park or beach." },
              "A_1_6": { expected: ["ancy dress", "ancy dress party", "fancy dress"], explanation: "A fancy dress party." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Write the types of music and dates.",
            points: 6,
            type: "grammar-gap",
            example: "0 rock concert / the third of April (3.04)",
            storyText: "A: There are great concerts in our town this year.\nB: Cool! I'd love to go to the rock concert. When is it?\nA: It's on the third of April. (3.04)",
            items: [
              { id: "A_2_1", label: "1", textBefore: "B: OK. When is the r", textAfter: "concert?" },
              { id: "A_2_2", label: "2", textBefore: "A: It's on", textAfter: ". (15.01)" },
              { id: "A_2_3", label: "3", textBefore: "B: Great! Hmm. There's a c", textAfter: "concert" },
              { id: "A_2_4", label: "4", textBefore: "on", textAfter: ". (27.08) Do you want to go?" },
              { id: "A_2_5", label: "5", textBefore: "A: Yes, please! I love Beethoven.\nB: And on", textAfter: "(31.10)" },
              { id: "A_2_6", label: "6", textBefore: "there's a j", textAfter: "concert.\nA: Tell Mum and Dad. They love that kind of music." }
            ],
            answers: {
              "A_2_1": { expected: ["eggae", "reggae"], explanation: "Reggae music." },
              "A_2_2": { expected: ["the fifteenth of January", "the 15th of January", "15th January", "15th of January"], explanation: "15.01: the fifteenth of January." },
              "A_2_3": { expected: ["lassical", "classical"], explanation: "Classical music." },
              "A_2_4": { expected: ["the twenty-seventh of August", "the 27th of August", "27th August", "27th of August"], explanation: "27.08: the twenty-seventh of August." },
              "A_2_5": { expected: ["the thirty-first of October", "the 31st of October", "31st October", "31st of October"], explanation: "31.10: the thirty-first of October." },
              "A_2_6": { expected: ["azz", "jazz"], explanation: "Jazz music." }
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
            title: "Complete the text with the correct form of be going to and the verbs in the box.",
            points: 4,
            type: "fill-gaps",
            example: "0 isn't going to play (not play)",
            storyText: "This weekend, my brother, Stuart, isn't going to play tennis.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "He and I", textAfter: "(get up) early and tidy our rooms." },
              { id: "A_3_2", label: "2", textBefore: "My big sister, Ruby,", textAfter: "(invite) her friends to watch a film on TV." },
              { id: "A_3_3", label: "3", textBefore: "My parents", textAfter: "(go) to the cinema in the evening." },
              { id: "A_3_4", label: "4", textBefore: "They", textAfter: "(not stay) at home. What about you?" }
            ],
            answers: {
              "A_3_1": { expected: ["are going to get up"], explanation: "He and I = we -> are going to get up." },
              "A_3_2": { expected: ["is going to invite"], explanation: "Ruby = she -> is going to invite." },
              "A_3_3": { expected: ["are going to go"], explanation: "My parents = they -> are going to go." },
              "A_3_4": { expected: ["aren't going to stay", "are not going to stay"], explanation: "Negative plural: aren't going to stay." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogues with the words in the box. There is one extra word.",
            points: 4,
            type: "word-bank",
            wordBank: ["are", "are", "going", "I'm", "is", "to"],
            example: "0 Are you going to watch the show on TV tonight?",
            usedInExample: ["are"],
            sentences: [
              { id: "A_4_1", num: 1, before: "B: No,", after: "not. It's boring." },
              { id: "A_4_2", num: 2, before: "A:", after: "your mum going" },
              { id: "A_4_3", num: 3, before: "", after: "buy a cake for the party?\nB: Yes, she is." },
              { id: "A_4_4", num: 4, before: "A: What", after: "you and your family going to do next weekend?\nB: I'm not sure." }
            ],
            answers: {
              "A_4_1": { expected: ["I'm", "I am"], explanation: "No, I'm not." },
              "A_4_2": { expected: ["Is", "is"], explanation: "Is your mum going to buy...?" },
              "A_4_3": { expected: ["to"], explanation: "going to buy." },
              "A_4_4": { expected: ["are"], explanation: "What are you and your family going to do...?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the questions.",
            points: 5,
            type: "fill-gaps",
            example: "0 Who can you see in front of the theatre? — I can see my favourite actor!",
            items: [
              { id: "A_5_1", label: "1", textBefore: "A: Have", textAfter: "an invitation to the party?\nB: Yes, I've got an invitation to the party. You?" },
              { id: "A_5_2", label: "2", textBefore: "A: When does", textAfter: "?\nB: The football match starts at six o'clock." },
              { id: "A_5_3", label: "3", textBefore: "A: Why are", textAfter: "?\nB: They're running because they're late for school." },
              { id: "A_5_4", label: "4", textBefore: "A: Where did", textAfter: "last summer?\nB: Joshua went to England last summer." },
              { id: "A_5_5", label: "5", textBefore: "A: How many new friends did", textAfter: "on holiday?\nB: I made five new friends on holiday!" }
            ],
            answers: {
              "A_5_1": { expected: ["you got"], explanation: "Have you got an invitation...?" },
              "A_5_2": { expected: ["the football match start", "the match start"], explanation: "When does the football match start?" },
              "A_5_3": { expected: ["they running"], explanation: "Why are they running?" },
              "A_5_4": { expected: ["Joshua go", "he go"], explanation: "Where did Joshua go last summer?" },
              "A_5_5": { expected: ["you make"], explanation: "How many new friends did you make on holiday?" }
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
            title: "Complete the dialogue with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["busy", "do", "let's", "meet", "sounds", "tickets", "would"],
            example: "0 Are you busy next Saturday?",
            usedInExample: ["busy"],
            storyText: "A: Are you busy next Saturday?\nB: No, I'm not.",
            sentences: [
              { id: "A_6_1", num: 1, before: "A: I've got", after: "for a pop concert." },
              { id: "A_6_2", num: 2, before: "", after: "you like to come?" },
              { id: "A_6_3", num: 3, before: "B: Thanks. That", after: "great." },
              { id: "A_6_4", num: 4, before: "A: What time is it?\nB: It starts at eight. Where shall we", after: "?" },
              { id: "A_6_5", num: 5, before: "A:", after: "meet at my house. We can go there together.\nB: Great. See you then." }
            ],
            answers: {
              "A_6_1": { expected: ["tickets"], explanation: "I've got tickets for a concert." },
              "A_6_2": { expected: ["Would", "would"], explanation: "Would you like to come?" },
              "A_6_3": { expected: ["sounds"], explanation: "That sounds great." },
              "A_6_4": { expected: ["meet"], explanation: "Where shall we meet?" },
              "A_6_5": { expected: ["Let's", "let's"], explanation: "Let's meet at my house." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 8",
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
            title: "Write the names of events.",
            points: 6,
            type: "grammar-gap",
            example: "0 We celebrate a special day. a birthday party",
            items: [
              { id: "B_1_1", label: "1", textBefore: "We cook sausages and meat in the garden. a b", textAfter: "" },
              { id: "B_1_2", label: "2", textBefore: "We go to the park or the beach and take food and drink with us. a p", textAfter: "" },
              { id: "B_1_3", label: "3", textBefore: "We watch actors in the theatre. a p", textAfter: "" },
              { id: "B_1_4", label: "4", textBefore: "We sing, dance or act in front of other people and the best person wins. a talent c", textAfter: "" },
              { id: "B_1_5", label: "5", textBefore: "We wear costumes and have a lot of fun. a f", textAfter: "d        party" },
              { id: "B_1_6", label: "6", textBefore: "We go to a friend's house and sleep there. a s", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["arbecue", "barbecue"], explanation: "A barbecue in the garden." },
              "B_1_2": { expected: ["icnic", "picnic"], explanation: "A picnic in the park or beach." },
              "B_1_3": { expected: ["lay", "play"], explanation: "A theatrical play." },
              "B_1_4": { expected: ["ompetition", "competition"], explanation: "A talent competition." },
              "B_1_5": { expected: ["ancy dress", "ancy dress party", "fancy dress"], explanation: "A fancy dress party." },
              "B_1_6": { expected: ["leepover", "sleepover"], explanation: "A sleepover at a friend's house." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Write the types of music and dates.",
            points: 6,
            type: "grammar-gap",
            example: "0 rock concert / the third of April (3.04)",
            storyText: "A: There are great concerts in our town this year.\nB: Cool! I'd love to go to the rock concert. When is it?\nA: It's on the third of April. (3.04)",
            items: [
              { id: "B_2_1", label: "1", textBefore: "B: When is the c", textAfter: "concert? I'd love to go." },
              { id: "B_2_2", label: "2", textBefore: "A: It's on", textAfter: ". (19.06)" },
              { id: "B_2_3", label: "3", textBefore: "B: And look! On", textAfter: "(13.09)" },
              { id: "B_2_4", label: "4", textBefore: "there's a j", textAfter: "concert. Do you want to go?" },
              { id: "B_2_5", label: "5", textBefore: "A: No, thanks! I don't like that kind of music.\nB: I love it. And I want to go to the r", textAfter: "concert" },
              { id: "B_2_6", label: "6", textBefore: "on", textAfter: ". (22.11)\nA: Me too." }
            ],
            answers: {
              "B_2_1": { expected: ["lassical", "classical"], explanation: "Classical music." },
              "B_2_2": { expected: ["the nineteenth of June", "the 19th of June", "19th June", "19th of June"], explanation: "19.06: the nineteenth of June." },
              "B_2_3": { expected: ["the thirteenth of September", "the 13th of September", "13th September", "13th of September"], explanation: "13.09: the thirteenth of September." },
              "B_2_4": { expected: ["azz", "jazz"], explanation: "Jazz music." },
              "B_2_5": { expected: ["eggae", "reggae"], explanation: "Reggae music." },
              "B_2_6": { expected: ["the twenty-second of November", "the 22nd of November", "22nd November", "22nd of November"], explanation: "22.11: the twenty-second of November." }
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
            title: "Complete the text with the correct form of be going to and the verbs in the box.",
            points: 4,
            type: "fill-gaps",
            example: "0 isn't going to play (not play)",
            storyText: "Next weekend, my sister Evelyn isn't going to play tennis.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "She and I", textAfter: "(do) some jobs around the house." },
              { id: "B_3_2", label: "2", textBefore: "My big brother Gilbert", textAfter: "(buy) a new motorbike! Exciting!" },
              { id: "B_3_3", label: "3", textBefore: "My mum and dad", textAfter: "(invite) their friends for dinner." },
              { id: "B_3_4", label: "4", textBefore: "They", textAfter: "(not go) to the cinema. What about you?" }
            ],
            answers: {
              "B_3_1": { expected: ["are going to do"], explanation: "She and I = we -> are going to do." },
              "B_3_2": { expected: ["is going to buy"], explanation: "Gilbert = he -> is going to buy." },
              "B_3_3": { expected: ["are going to invite"], explanation: "My mum and dad = they -> are going to invite." },
              "B_3_4": { expected: ["aren't going to go", "are not going to go"], explanation: "Negative plural: aren't going to go." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogues with the words in the box. There is one extra word.",
            points: 4,
            type: "word-bank",
            wordBank: ["am", "are", "are", "going", "is", "to"],
            example: "0 Are you going to watch the dance show on TV tonight?",
            usedInExample: ["are"],
            sentences: [
              { id: "B_4_1", num: 1, before: "B: Yes, I", after: ". I love that programme!" },
              { id: "B_4_2", num: 2, before: "A: Where", after: "your grandparents going to go this summer?\nB: I'm not sure." },
              { id: "B_4_3", num: 3, before: "A:", after: "Mrs Lewis" },
              { id: "B_4_4", num: 4, before: "", after: "to teach us History next year?\nB: No, she isn't." }
            ],
            answers: {
              "B_4_1": { expected: ["am"], explanation: "Yes, I am." },
              "B_4_2": { expected: ["are"], explanation: "Where are your grandparents...?" },
              "B_4_3": { expected: ["Is", "is"], explanation: "Is Mrs Lewis going to...?" },
              "B_4_4": { expected: ["going"], explanation: "going to teach us." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the questions.",
            points: 5,
            type: "fill-gaps",
            example: "0 Who can you see in front of the theatre? — I can see my favourite actor!",
            items: [
              { id: "B_5_1", label: "1", textBefore: "A: How does", textAfter: "to school?\nB: Jasper goes to school by bus." },
              { id: "B_5_2", label: "2", textBefore: "A: How many computer games have", textAfter: "?\nB: We've got six computer games." },
              { id: "B_5_3", label: "3", textBefore: "A: What did", textAfter: "yesterday?\nB: Melissa made a chocolate cake yesterday." },
              { id: "B_5_4", label: "4", textBefore: "A: Where are", textAfter: "?\nB: The children are playing on the beach." },
              { id: "B_5_5", label: "5", textBefore: "A: Why did", textAfter: "to bed early?\nB: I went to bed early because I was tired." }
            ],
            answers: {
              "B_5_1": { expected: ["Jasper go", "he go"], explanation: "How does Jasper go to school?" },
              "B_5_2": { expected: ["you got"], explanation: "How many computer games have you got?" },
              "B_5_3": { expected: ["Melissa make", "she make"], explanation: "What did Melissa make yesterday?" },
              "B_5_4": { expected: ["the children playing", "they playing"], explanation: "Where are the children playing?" },
              "B_5_5": { expected: ["you go"], explanation: "Why did you go to bed early?" }
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
            title: "Complete the dialogue with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["busy", "go", "I'd", "let's", "like", "shall", "sounds"],
            example: "0 Are you busy next Saturday?",
            usedInExample: ["busy"],
            storyText: "A: Are you busy next Saturday?\nB: No, I'm not.",
            sentences: [
              { id: "B_6_1", num: 1, before: "A: I've got tickets for a football match. Would you", after: "to come with me?" },
              { id: "B_6_2", num: 2, before: "B: That", after: "great." },
              { id: "B_6_3", num: 3, before: "", after: "love to come!" },
              { id: "B_6_4", num: 4, before: "A: What time is it?\nB: It starts at half past five. Where", after: "we meet?" },
              { id: "B_6_5", num: 5, before: "A:", after: "meet in front of the stadium.\nB: See you on Saturday!" }
            ],
            answers: {
              "B_6_1": { expected: ["like"], explanation: "Would you like to come with me?" },
              "B_6_2": { expected: ["sounds"], explanation: "That sounds great." },
              "B_6_3": { expected: ["I'd", "I would"], explanation: "I'd love to come!" },
              "B_6_4": { expected: ["shall"], explanation: "Where shall we meet?" },
              "B_6_5": { expected: ["Let's", "let's"], explanation: "Let's meet in front of the stadium." }
            }
          }
        ]
      }
    }
  }
};
