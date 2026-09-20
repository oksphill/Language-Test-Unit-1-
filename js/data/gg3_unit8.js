/**
 * Go Getter 3 - Unit 8 Language Test
 * Life Plans & Friends / Future with will & Question Forms
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.GG3_UNIT_8_DATA = {
  id: "unit8",
  courseId: "gogetter3",
  number: 8,
  title: "Life Plans & Friends",
  description: "Vocabulary: Life plans, Social gestures, Good and bad manners. Grammar: Future with will, Complex question forms. Communication: Expressing agreement and disagreement.",
  points: 31,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 8",
    totalPoints: 31,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 14,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 When I was at school, I wanted to be / am a writer. -> be",
            items: [
              { id: "A_1_1", label: "1", before: "I wanted to", options: ["go", "have"], after: "an interesting job." },
              { id: "A_1_2", label: "2", before: "I decided to learn", options: ["foreign", "famous"], after: "languages because they are very useful when you travel." },
              { id: "A_1_3", label: "3", before: "When I was older, I went to live", options: ["abroad", "here"], after: "and wrote books." },
              { id: "A_1_4", label: "4", before: "I didn't want to live on my", options: ["own", "one"], after: "." },
              { id: "A_1_5", label: "5", before: "I wanted to", options: ["have", "be"], after: "a family. One day..." }
            ],
            answers: {
              "A_1_1": { expected: ["have"], explanation: "Collocation: 'have a job'." },
              "A_1_2": { expected: ["foreign"], explanation: "Collocation: 'learn foreign languages'." },
              "A_1_3": { expected: ["abroad"], explanation: "Collocation: 'live abroad' (in another country)." },
              "A_1_4": { expected: ["own"], explanation: "Idiom: 'on my own' (alone / independently)." },
              "A_1_5": { expected: ["have"], explanation: "Collocation: 'have a family' (have children/spouse)." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["hands", "hug", "invited", "kissed", "visiting"],
            example: "He ⁰invited me to his house...",
            usedInExample: ["invited"],
            context: "I made a new friend last week. His name is Charlie.",
            sentences: [
              { textBefore: "He invited me to his house and I met his family. They were very friendly. I shook", gapId: "A_2_1", label: "1", textAfter: "with his dad and his mum" },
              { textBefore: "", gapId: "A_2_2", label: "2", textAfter: "me. When I left, she gave me a" },
              { textBefore: "", gapId: "A_2_3", label: "3", textAfter: "and asked me to come again. Next weekend, Charlie is" },
              { textBefore: "", gapId: "A_2_4", label: "4", textAfter: "me and it will be his turn to meet my family." }
            ],
            answers: {
              "A_2_1": { expected: ["hands"], explanation: "Collocation: 'shook hands' (greeting gesture)." },
              "A_2_2": { expected: ["kissed"], explanation: "Friendly greeting: 'kissed me'." },
              "A_2_3": { expected: ["hug"], explanation: "Collocation: 'gave me a hug' (embrace)." },
              "A_2_4": { expected: ["visiting"], explanation: "Present Continuous for future: 'is visiting me'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the text.",
            points: 5,
            type: "letter-hint",
            example: "0 Nigel is a very annoying boy. He never arrives anywhere on time.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "He's always", displayHint: "l _ _ _", placeholder: "late", prefix: "l", textAfter: ". He borrows things and he never" },
              { id: "A_3_2", label: "2", textBefore: "", displayHint: "a _ _ _", placeholder: "asks", prefix: "a", textAfter: "for permission. He" },
              { id: "A_3_3", label: "3", textBefore: "", displayHint: "i _ _ _ _ _ _ _ _ _", placeholder: "interrupts", prefix: "i", textAfter: "people all the time when they are talking. He never" },
              { id: "A_3_4", label: "4", textBefore: "", displayHint: "w _ _ _ _", placeholder: "waits", prefix: "w", textAfter: "his turn to use the bathroom. Someone should tell him to be more" },
              { id: "A_3_5", label: "5", textBefore: "", displayHint: "p _ _ _ _ _ _", placeholder: "patient", prefix: "p", textAfter: "!" }
            ],
            answers: {
              "A_3_1": { expected: ["late"], explanation: "Not on time: late." },
              "A_3_2": { expected: ["asks"], explanation: "Collocation: 'asks for permission'." },
              "A_3_3": { expected: ["interrupts"], explanation: "Breaking into someone's conversation: interrupts." },
              "A_3_4": { expected: ["waits"], explanation: "Collocation: 'waits his turn'." },
              "A_3_5": { expected: ["patient"], explanation: "Willing to wait calmly: patient." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 12,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences. Use the correct form of will and the verbs in brackets.",
            points: 6,
            type: "grammar-gap",
            example: "0 I will have (have) my own business one day.",
            items: [
              { id: "A_4_1", label: "1", before: "Dad", verb: "not get", after: "to work on time." },
              { id: "A_4_2", label: "2", before: "", verb: "you / go", after: "to university when you're older?" },
              { id: "A_4_3", label: "3", before: "Max", verb: "not be", after: "a famous actor." },
              { id: "A_4_4", label: "4", before: "", verb: "they / win", after: "the match?" },
              { id: "A_4_5", label: "5", before: "I hope I", verb: "be", after: "happy in the future." },
              { id: "A_4_6", label: "6", before: "Where", verb: "you / live", after: "in the future?" }
            ],
            answers: {
              "A_4_1": { expected: ["won't get", "will not get"], explanation: "Future will negative: won't get." },
              "A_4_2": { expected: ["Will you go"], explanation: "Future will question: Will you go?" },
              "A_4_3": { expected: ["won't be", "will not be"], explanation: "Future will negative: won't be." },
              "A_4_4": { expected: ["Will they win"], explanation: "Future will question: Will they win?" },
              "A_4_5": { expected: ["will be", "'ll be"], explanation: "Hope + future will: will be." },
              "A_4_6": { expected: ["will you live"], explanation: "Wh- question: Where will you live?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue using the correct question words and verbs.",
            points: 6,
            type: "grammar-gap",
            example: "0 Olivia: How are you?",
            items: [
              { id: "A_5_1", label: "1", before: "Olivia: But we're on holiday!", verb: "", after: "you working?<br>Zoe: Because I want to post a new blog entry." },
              { id: "A_5_2", label: "2", before: "Olivia:", verb: "", after: "you write your blog?<br>Zoe: Every day if I can." },
              { id: "A_5_3", label: "3", before: "Olivia: I came back from London yesterday.<br>Zoe:", verb: "", after: "you doing there?<br>Olivia: I was visiting my friend Erica." },
              { id: "A_5_4", label: "4", before: "Zoe:", verb: "", after: "she take you?<br>Olivia: To the zoo, Madame Tussaud's..." },
              { id: "A_5_5", label: "5", before: "Zoe: Wow! That sounds great!", verb: "", after: "you visiting us again?<br>Olivia: I'm not sure. We've got visitors next week." },
              { id: "A_5_6", label: "6", before: "Zoe: Really?", verb: "", after: "coming?<br>Olivia: My cousin." }
            ],
            answers: {
              "A_5_1": { expected: ["Why are", "why are"], explanation: "Answering with 'Because': 'Why are you working?'" },
              "A_5_2": { expected: ["How often do", "how often do"], explanation: "Answering frequency 'Every day': 'How often do you write...?'" },
              "A_5_3": { expected: ["What were", "what were"], explanation: "Past Continuous question: 'What were you doing there?'" },
              "A_5_4": { expected: ["Where did", "where did"], explanation: "Asking place: 'Where did she take you?'" },
              "A_5_5": { expected: ["When are", "when are"], explanation: "Asking future time: 'When are you visiting us again?'" },
              "A_5_6": { expected: ["Who is", "who is", "Who's"], explanation: "Asking about a person: 'Who is coming?'" }
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
            wordBank: ["I agree", "I disagree", "I don't think", "that isn't", "that's true", "that's what"],
            example: "0 A: Vicky is a great singer. B: I agree with you. I love all her songs.",
            usedInExample: ["I agree"],
            sentences: [
              { textBefore: "1 A: Tokyo is smaller than London.<br>B:", gapId: "A_6_1", label: "1", textAfter: "right. Tokyo is bigger." },
              { textBefore: "2 A: Our computer is old and it's too slow.<br>B:", gapId: "A_6_2", label: "2", textAfter: ". We have to buy a new one." },
              { textBefore: "3 A: Maths is a very difficult subject.<br>B:", gapId: "A_6_3", label: "3", textAfter: "so. I think it's easy." },
              { textBefore: "4 A: Shopping for clothes is boring.<br>B:", gapId: "A_6_4", label: "4", textAfter: "I think too. I hate it." },
              { textBefore: "5 A: The film was better than the book.<br>B:", gapId: "A_6_5", label: "5", textAfter: "with you. The book was great!" }
            ],
            answers: {
              "A_6_1": { expected: ["That isn't", "that isn't"], explanation: "Disagreeing with fact: 'That isn't right.'" },
              "A_6_2": { expected: ["That's true", "thats true"], explanation: "Agreeing: 'That's true. We have to buy a new one.'" },
              "A_6_3": { expected: ["I don't think", "i dont think"], explanation: "Disagreeing with opinion: 'I don't think so.'" },
              "A_6_4": { expected: ["That's what", "thats what"], explanation: "Full agreement: 'That's what I think too.'" },
              "A_6_5": { expected: ["I disagree", "i disagree"], explanation: "Polite disagreement: 'I disagree with you.'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 8",
    totalPoints: 31,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 14,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 When I was at school, I wanted to go / have an interesting job. -> have",
            items: [
              { id: "B_1_1", label: "1", before: "I wanted to", options: ["be", "am"], after: "a writer and travel around the world," },
              { id: "B_1_2", label: "2", before: "so I decided to learn", options: ["famous", "foreign"], after: "languages." },
              { id: "B_1_3", label: "3", before: "When I was older, I lived", options: ["here", "abroad"], after: "and I wrote articles for magazines." },
              { id: "B_1_4", label: "4", before: "I didn't want to live on my", options: ["now", "own"], after: "." },
              { id: "B_1_5", label: "5", before: "I wanted to", options: ["have", "be"], after: "a family. One day..." }
            ],
            answers: {
              "B_1_1": { expected: ["be"], explanation: "'Wanted to be a writer'." },
              "B_1_2": { expected: ["foreign"], explanation: "'Foreign languages'." },
              "B_1_3": { expected: ["abroad"], explanation: "'Lived abroad'." },
              "B_1_4": { expected: ["own"], explanation: "'On my own'." },
              "B_1_5": { expected: ["have"], explanation: "'Have a family'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["hands", "hug", "invited", "kissed", "visiting"],
            example: "Last week, she ⁰invited me to her house...",
            usedInExample: ["invited"],
            context: "Mandy is my new friend. She's great!",
            sentences: [
              { textBefore: "Last week, she invited me to her house and I met her family. They were very friendly. Her mum", gapId: "B_2_1", label: "1", textAfter: "me and gave me a" },
              { textBefore: "", gapId: "B_2_2", label: "2", textAfter: ". I shook" },
              { textBefore: "", gapId: "B_2_3", label: "3", textAfter: "with her dad. When I left, her parents asked me to come again. Mandy is" },
              { textBefore: "", gapId: "B_2_4", label: "4", textAfter: "me next weekend and it will be her turn to meet my family." }
            ],
            answers: {
              "B_2_1": { expected: ["kissed"], explanation: "Kissed." },
              "B_2_2": { expected: ["hug"], explanation: "Gave me a hug." },
              "B_2_3": { expected: ["hands"], explanation: "Shook hands." },
              "B_2_4": { expected: ["visiting"], explanation: "Is visiting me." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the text.",
            points: 5,
            type: "letter-hint",
            example: "0 Arthur is a very annoying boy. He never arrives anywhere on time.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "He's always", displayHint: "l _ _ _", placeholder: "late", prefix: "l", textAfter: ". When people are talking, he" },
              { id: "B_3_2", label: "2", textBefore: "", displayHint: "i _ _ _ _ _ _ _ _ _", placeholder: "interrupts", prefix: "i", textAfter: "them all the time. He never" },
              { id: "B_3_3", label: "3", textBefore: "", displayHint: "a _ _ _", placeholder: "asks", prefix: "a", textAfter: "for permission when he borrows things. He never waits his" },
              { id: "B_3_4", label: "4", textBefore: "", displayHint: "t _ _ _", placeholder: "turn", prefix: "t", textAfter: "to use the bathroom. I think he should be more" },
              { id: "B_3_5", label: "5", textBefore: "", displayHint: "p _ _ _ _ _ _", placeholder: "patient", prefix: "p", textAfter: "!" }
            ],
            answers: {
              "B_3_1": { expected: ["late"], explanation: "Late." },
              "B_3_2": { expected: ["interrupts"], explanation: "Interrupts." },
              "B_3_3": { expected: ["asks"], explanation: "Asks for permission." },
              "B_3_4": { expected: ["turn"], explanation: "Waits his turn." },
              "B_3_5": { expected: ["patient"], explanation: "Patient." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 12,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences. Use the correct form of will and the verbs in brackets.",
            points: 6,
            type: "grammar-gap",
            example: "0 I will have (have) my own business one day.",
            items: [
              { id: "B_4_1", label: "1", before: "Lisa", verb: "not be", after: "a famous actor." },
              { id: "B_4_2", label: "2", before: "Where", verb: "you / live", after: "in the future?" },
              { id: "B_4_3", label: "3", before: "", verb: "you / buy", after: "a house on an island one day?" },
              { id: "B_4_4", label: "4", before: "Mum", verb: "not arrive", after: "at work on time." },
              { id: "B_4_5", label: "5", before: "", verb: "they / pass", after: "all their exams?" },
              { id: "B_4_6", label: "6", before: "I hope I", verb: "be", after: "happy in the future." }
            ],
            answers: {
              "B_4_1": { expected: ["won't be", "will not be"], explanation: "Negative: won't be." },
              "B_4_2": { expected: ["will you live"], explanation: "Question: Where will you live?" },
              "B_4_3": { expected: ["Will you buy"], explanation: "Question: Will you buy?" },
              "B_4_4": { expected: ["won't arrive", "will not arrive"], explanation: "Negative: won't arrive." },
              "B_4_5": { expected: ["Will they pass"], explanation: "Question: Will they pass?" },
              "B_4_6": { expected: ["will be", "'ll be"], explanation: "Affirmative: will be." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue using the correct question words and verbs.",
            points: 6,
            type: "grammar-gap",
            example: "0 Matt: How are you?",
            items: [
              { id: "B_5_1", label: "1", before: "Jack: Fine, thanks. I came back from London yesterday.<br>Matt:", verb: "", after: "you doing there?<br>Jack: My sister and I were visiting my uncle." },
              { id: "B_5_2", label: "2", before: "Matt:", verb: "", after: "you go?<br>Jack: We went to Madame Tussaud's and the zoo." },
              { id: "B_5_3", label: "3", before: "Jack: Do you want to hang out this afternoon?<br>Matt: Sorry, I can't. I'm busy.<br>Jack:", verb: "", after: "you busy?<br>Matt: Because we're fixing my dad's motorbike." },
              { id: "B_5_4", label: "4", before: "Jack: I didn't know he's got a motorbike.", verb: "", after: "he ride it?<br>Matt: He rides it every weekend." },
              { id: "B_5_5", label: "5", before: "Jack:", verb: "", after: "you having the barbecue?<br>Matt: This Saturday. I also invited some other people..." },
              { id: "B_5_6", label: "6", before: "Jack:", verb: "", after: "you invite?<br>Matt: I invited our new neighbours." }
            ],
            answers: {
              "B_5_1": { expected: ["What were", "what were"], explanation: "'What were you doing there?'" },
              "B_5_2": { expected: ["Where did", "where did"], explanation: "'Where did you go?'" },
              "B_5_3": { expected: ["Why are", "why are"], explanation: "'Why are you busy?'" },
              "B_5_4": { expected: ["How often does", "how often does"], explanation: "'How often does he ride it?'" },
              "B_5_5": { expected: ["When are", "when are"], explanation: "'When are you having the barbecue?'" },
              "B_5_6": { expected: ["Who did", "who did"], explanation: "'Who did you invite?'" }
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
            wordBank: ["I agree", "I disagree", "I don't think", "that isn't", "that's true", "that's what"],
            example: "0 A: Vicky is a great singer. B: I agree with you.",
            usedInExample: ["I agree"],
            sentences: [
              { textBefore: "1 A: The concert wasn't very good.<br>B:", gapId: "B_6_1", label: "1", textAfter: "with you. The singer was great!" },
              { textBefore: "2 A: History is a boring subject.<br>B:", gapId: "B_6_2", label: "2", textAfter: "so. I think it's interesting." },
              { textBefore: "3 A: Canada is the biggest country in the world.<br>B:", gapId: "B_6_3", label: "3", textAfter: "right. Russia is bigger." },
              { textBefore: "4 A: I can't fix this car. It's too old.<br>B:", gapId: "B_6_4", label: "4", textAfter: ". Maybe we can buy a new one." },
              { textBefore: "5 A: Dogs are the best pets.<br>B:", gapId: "B_6_5", label: "5", textAfter: "I think too. I love them." }
            ],
            answers: {
              "B_6_1": { expected: ["I disagree", "i disagree"], explanation: "'I disagree with you.'" },
              "B_6_2": { expected: ["I don't think", "i dont think"], explanation: "'I don't think so.'" },
              "B_6_3": { expected: ["That isn't", "that isn't"], explanation: "'That isn't right.'" },
              "B_6_4": { expected: ["That's true", "thats true"], explanation: "'That's true.'" },
              "B_6_5": { expected: ["That's what", "thats what"], explanation: "'That's what I think too.'" }
            }
          }
        ]
      }
    }
  }
};
