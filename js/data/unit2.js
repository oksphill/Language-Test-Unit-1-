/**
 * Language Test Unit 2 - Jobs and School
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.UNIT_2_DATA = {
  id: "unit2",
  number: 2,
  title: "Jobs and Work",
  description: "Vocabulary: Jobs, Collocations with make/do/take, School life. Grammar: have to / had to, must / mustn't / don't have to / could. Communication: Giving advice.",

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 2",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 18,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the blog post with the words in the box.",
            points: 8,
            type: "word-bank",
            wordBank: ["architect", "challenging", "cleaner", "dangerous", "dentist", "engineer", "journalist", "tour guide", "well-paid"],
            example: "Would you like to do a(n) ⁰challenging job?",
            usedInExample: ["challenging"],
            textBefore: "What job do you want to do? Would you like to do a(n) challenging job?",
            sentences: [
              { textBefore: "Do you want to be a(n)", gapId: "A_1_1", label: "1", textAfter: "and fix people's teeth?" },
              { textBefore: "You can be a(n)", gapId: "A_1_2", label: "2", textAfter: "and build roads and bridges." },
              { textBefore: "Or you can be a(n)", gapId: "A_1_3", label: "3", textAfter: "and design and build beautiful homes for people." },
              { textBefore: "Some jobs are boring. A(n)", gapId: "A_1_4", label: "4", textAfter: "or factory worker does the same thing every day." },
              { textBefore: "Another problem is they aren't", gapId: "A_1_5", label: "5", textAfter: "jobs so you can't make much money." },
              { textBefore: "Of course, there are lots of other jobs you can do. Are you interested in the news? Can you write well? Then be a(n)", gapId: "A_1_6", label: "6", textAfter: "!" },
              { textBefore: "And if you love travelling and showing people interesting places, be a(n)", gapId: "A_1_7", label: "7", textAfter: "." },
              { textBefore: "But this week, I want to look at firefighters. Their job isn't safe – it's very", gapId: "A_1_8", label: "8", textAfter: "." }
            ],
            answers: {
              "A_1_1": { expected: ["dentist"], explanation: "A person whose job is treating people's teeth is a dentist." },
              "A_1_2": { expected: ["engineer"], explanation: "A professional who designs and builds bridges, roads, or machines is an engineer." },
              "A_1_3": { expected: ["architect"], explanation: "A person who designs buildings and homes is an architect." },
              "A_1_4": { expected: ["cleaner"], explanation: "Someone whose job is to clean rooms, floors and buildings is a cleaner." },
              "A_1_5": { expected: ["well-paid"], explanation: "Jobs that earn a lot of money are 'well-paid' (or aren't well-paid when earning little)." },
              "A_1_6": { expected: ["journalist"], explanation: "A person who writes news reports and articles is a journalist." },
              "A_1_7": { expected: ["tour guide"], explanation: "A person who shows tourists around historic sites and attractions is a tour guide." },
              "A_1_8": { expected: ["dangerous"], explanation: "Firefighting involves hazards like fire and smoke, so it is dangerous (the opposite of safe)." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with make, do or take.",
            points: 5,
            type: "collocations-choice",
            wordBank: ["make", "do", "take"],
            example: "0 We take the bus to school every day.",
            sentences: [
              { textBefore: "1 I usually", gapId: "A_2_1", label: "1", textAfter: "a mess when I cook." },
              { textBefore: "2 We", gapId: "A_2_2", label: "2", textAfter: "the shopping every Saturday." },
              { textBefore: "3 Do you get nervous when you", gapId: "A_2_3", label: "3", textAfter: "an exam?" },
              { textBefore: "4 The children always", gapId: "A_2_4", label: "4", textAfter: "their beds before breakfast." },
              { textBefore: "5 He should", gapId: "A_2_5", label: "5", textAfter: "some medicine. He's ill." }
            ],
            answers: {
              "A_2_1": { expected: ["make"], explanation: "We say 'make a mess' (collocation with make)." },
              "A_2_2": { expected: ["do"], explanation: "We say 'do the shopping' (collocation with do)." },
              "A_2_3": { expected: ["take"], explanation: "We say 'take an exam' (collocation with take)." },
              "A_2_4": { expected: ["make"], explanation: "We say 'make your bed' (collocation with make)." },
              "A_2_5": { expected: ["take"], explanation: "We say 'take medicine' (collocation with take)." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the correct words.",
            points: 5,
            type: "word-gap",
            example: "Learn to ⁰take good notes in class.",
            context: "Broadwood School — Advice for students",
            sentences: [
              { textBefore: "Don't", gapId: "A_3_1", label: "1", textAfter: "another student's work. Do your own work and ask your teacher for help." },
              { textBefore: "Hand", gapId: "A_3_2", label: "2", textAfter: "your homework on time." },
              { textBefore: "Students who", gapId: "A_3_3", label: "3", textAfter: "well in important exams usually", gapId2: "A_3_4", label2: "4", textAfter2: "for them weeks before." },
              { textBefore: "If you", gapId: "A_3_5", label: "5", textAfter: "an exam, you can try again!" }
            ],
            answers: {
              "A_3_1": { expected: ["copy"], explanation: "To reproduce or cheat by writing what another pupil wrote is to 'copy'." },
              "A_3_2": { expected: ["in"], explanation: "The phrasal verb 'hand in' means to give completed homework to the teacher." },
              "A_3_3": { expected: ["do"], explanation: "We say 'do well in exams' (perform successfully)." },
              "A_3_4": { expected: ["revise"], explanation: "To study material again before an exam is to 'revise'." },
              "A_3_5": { expected: ["fail"], explanation: "If you do not pass an examination, you 'fail' it." }
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
            title: "Complete the sentences with the correct form of have to or had to and the verbs in brackets.",
            points: 6,
            type: "grammar-gap",
            example: "0 Doctors often have to work (work) at night.",
            items: [
              { id: "A_4_1", label: "1", before: "Why", verb: "I / stay", after: "at home tonight? Why can't I go out with my friends?" },
              { id: "A_4_2", label: "2", before: "Yesterday Larry", verb: "help", after: "his mother in the shop because it was busy." },
              { id: "A_4_3", label: "3", before: "", verb: "you / walk", after: "to school when you were young, Grandad?" },
              { id: "A_4_4", label: "4", before: "I", verb: "leave", after: "now. It's getting late." },
              { id: "A_4_5", label: "5", before: "Mary", verb: "not / water", after: "the plants because it was raining." },
              { id: "A_4_6", label: "6", before: "", verb: "her secretary / work", after: "long hours?" }
            ],
            answers: {
              "A_4_1": { expected: ["do I have to stay"], explanation: "Present question with I: Why + do + I + have to + base verb ('do I have to stay')." },
              "A_4_2": { expected: ["had to help"], explanation: "Past obligation (yesterday): 'had to help'." },
              "A_4_3": { expected: ["Did you have to walk", "did you have to walk"], explanation: "Past question: Did + you + have to + base verb ('Did you have to walk')." },
              "A_4_4": { expected: ["have to leave"], explanation: "Present obligation now: 'have to leave'." },
              "A_4_5": { expected: ["didn't have to water", "did not have to water"], explanation: "Past negative obligation: didn't have to water." },
              "A_4_6": { expected: ["Does her secretary have to work", "does her secretary have to work"], explanation: "Present question with 3rd person singular (her secretary): Does + subject + have to work." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Circle the correct answer.",
            points: 6,
            type: "circle-choice",
            example: "0 Could Brenda / Does Brenda have to speak French when she was a little girl?",
            items: [
              {
                id: "A_5_1",
                label: "1",
                before: "I",
                options: ["must", "have"],
                after: "practise for my piano exam tomorrow."
              },
              {
                id: "A_5_2",
                label: "2",
                before: "Students",
                options: ["mustn't", "don't have to"],
                after: "eat in class."
              },
              {
                id: "A_5_3",
                label: "3",
                before: "Tom",
                options: ["couldn't", "doesn't have to"],
                after: "walk to work every day because he has a bike."
              },
              {
                id: "A_5_4",
                label: "4",
                before: "I",
                options: ["don't have to", "couldn't"],
                after: "walk because I had a broken leg."
              },
              {
                id: "A_5_5",
                label: "5",
                before: "I",
                options: ["don't have to", "must"],
                after: "do any homework tonight - tomorrow is Saturday!"
              },
              {
                id: "A_5_6",
                label: "6",
                before: "The boy was talented and he",
                options: ["had to", "could"],
                after: "sing very well."
              }
            ],
            answers: {
              "A_5_1": { expected: ["must"], explanation: "We use 'must' + bare infinitive ('must practise'); 'have' requires 'to'." },
              "A_5_2": { expected: ["mustn't"], explanation: "'mustn't' expresses prohibition: eating in class is forbidden." },
              "A_5_3": { expected: ["doesn't have to"], explanation: "'doesn't have to' expresses lack of necessity because he has a bike." },
              "A_5_4": { expected: ["couldn't"], explanation: "Past inability due to a physical impediment (a broken leg): 'couldn't'." },
              "A_5_5": { expected: ["don't have to"], explanation: "No obligation to do homework because tomorrow is Saturday: 'don't have to'." },
              "A_5_6": { expected: ["could"], explanation: "General ability in the past: 'could sing very well'." }
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
            title: "Complete the dialogue.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["I need", "opinion", "should I", "what about", "why don't you", "you should"],
            example: "Lee: Hi Jan. ⁰I need your advice. I've got a job interview tomorrow.",
            usedInExample: ["I need"],
            dialogue: [
              { speaker: "Lee", text: "Hi Jan. I need your advice. I've got a job interview tomorrow." },
              { speaker: "Jan", text: "What kind of job is it?" },
              {
                speaker: "Lee",
                parts: [
                  { before: "It's for a waiter. What", gapId: "A_6_1", label: "1", after: "wear?" }
                ]
              },
              {
                speaker: "Jan",
                parts: [
                  { before: "Well,", gapId: "A_6_2", label: "2", after: "wear smart clothes." }
                ]
              },
              { speaker: "Lee", text: "Hm … I've got some fantastic new trainers." },
              {
                speaker: "Jan",
                parts: [
                  { before: "In my", gapId: "A_6_3", label: "3", after: ", you shouldn't wear trainers." },
                  { gapId: "A_6_4", label: "4", after: "wearing your black shoes, a nice shirt and trousers?" }
                ]
              },
              { speaker: "Lee", text: "OK… Should I wear a jacket?" },
              {
                speaker: "Jan",
                parts: [
                  { before: "Yes, and", gapId: "A_6_5", label: "5", after: "put on a tie?" }
                ]
              },
              { speaker: "Lee", text: "Good idea." }
            ],
            answers: {
              "A_6_1": { expected: ["should I"], explanation: "Asking for advice: 'What should I wear?'" },
              "A_6_2": { expected: ["you should"], explanation: "Giving advice: 'Well, you should wear smart clothes.'" },
              "A_6_3": { expected: ["opinion"], explanation: "Fixed expression: 'In my opinion' to state a personal viewpoint." },
              "A_6_4": { expected: ["What about", "what about"], explanation: "Making a suggestion with gerund (-ing): 'What about wearing...?'" },
              "A_6_5": { expected: ["why don't you"], explanation: "Making a suggestion with base verb: '...why don't you put on a tie?'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 2",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 18,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the blog post with the words in the box.",
            points: 8,
            type: "word-bank",
            wordBank: ["architect", "challenging", "computer programmer", "dentist", "engineer", "firefighter", "hairdresser", "journalist", "safe"],
            example: "Would you like to do a(n) ⁰challenging job?",
            usedInExample: ["challenging"],
            textBefore: "What kind of job do you want to do when you leave school? Would you like to do a(n) challenging job?",
            sentences: [
              { textBefore: "Do you want to be a(n)", gapId: "B_1_1", label: "1", textAfter: "and design and build machines?" },
              { textBefore: "Do you want to be a(n)", gapId: "B_1_2", label: "2", textAfter: "and design homes and other buildings." },
              { textBefore: "Or a(n)", gapId: "B_1_3", label: "3", textAfter: "and fix people's teeth?" },
              { textBefore: "Some jobs are dangerous. A(n)", gapId: "B_1_4", label: "4", textAfter: "can get bad burns and police officers don't have", gapId2: "B_1_5", label2: "5", textAfter2: "jobs, either." },
              { textBefore: "Of course, there are lots of other jobs you can do. Do you love working with computers? Then be a(n)", gapId: "B_1_6", label: "6", textAfter: "!" },
              { textBefore: "Do you love the news? Can you write well? Then why not be a(n)", gapId: "B_1_7", label: "7", textAfter: "?" },
              { textBefore: "Do you like cutting hair? Then be a(n)", gapId: "B_1_8", label: "8", textAfter: ". It's a fantastic job." }
            ],
            answers: {
              "B_1_1": { expected: ["engineer"], explanation: "An engineer designs and builds machines, roads, and engines." },
              "B_1_2": { expected: ["architect"], explanation: "An architect designs buildings, houses, and offices." },
              "B_1_3": { expected: ["dentist"], explanation: "A dentist is a medical professional who cares for teeth." },
              "B_1_4": { expected: ["firefighter"], explanation: "A firefighter extinguishes fires and faces risks of severe burns." },
              "B_1_5": { expected: ["safe"], explanation: "Police officers face danger, so they do not have safe jobs." },
              "B_1_6": { expected: ["computer programmer"], explanation: "Someone who writes code and software for computers is a computer programmer." },
              "B_1_7": { expected: ["journalist"], explanation: "A journalist reports on the news and writes stories." },
              "B_1_8": { expected: ["hairdresser"], explanation: "A person whose job is cutting, washing and styling hair is a hairdresser." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with make, do or take.",
            points: 5,
            type: "collocations-choice",
            wordBank: ["make", "do", "take"],
            example: "0 We take the bus to school every day.",
            sentences: [
              { textBefore: "1 When do your parents usually", gapId: "B_2_1", label: "1", textAfter: "the shopping?" },
              { textBefore: "2 We never", gapId: "B_2_2", label: "2", textAfter: "a mess when we cook!" },
              { textBefore: "3 My grandparents don't", gapId: "B_2_3", label: "3", textAfter: "a lot of medicine." },
              { textBefore: "4 We try to", gapId: "B_2_4", label: "4", textAfter: "our best in exams." },
              { textBefore: "5 I always", gapId: "B_2_5", label: "5", textAfter: "my bed in the morning." }
            ],
            answers: {
              "B_2_1": { expected: ["do"], explanation: "Collocation: 'do the shopping'." },
              "B_2_2": { expected: ["make"], explanation: "Collocation: 'make a mess'." },
              "B_2_3": { expected: ["take"], explanation: "Collocation: 'take medicine'." },
              "B_2_4": { expected: ["do"], explanation: "Collocation: 'do your best'." },
              "B_2_5": { expected: ["make"], explanation: "Collocation: 'make your bed'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the correct words.",
            points: 5,
            type: "word-gap",
            example: "Learn to ⁰take good notes in class.",
            context: "Broadwood School Advice for students",
            sentences: [
              { textBefore: "It's important to", gapId: "B_3_1", label: "1", textAfter: "for your exams." },
              { textBefore: "You will", gapId: "B_3_2", label: "2", textAfter: "badly if you don't." },
              { textBefore: "Do your own work! Don't", gapId: "B_3_3", label: "3", textAfter: "another student's work." },
              { textBefore: "If you", gapId: "B_3_4", label: "4", textAfter: "an exam, you can take it again." },
              { textBefore: "", gapId: "B_3_5", label: "5", textAfter: "in your homework on time." }
            ],
            answers: {
              "B_3_1": { expected: ["revise"], explanation: "To study material again in preparation for exams is to 'revise'." },
              "B_3_2": { expected: ["do"], explanation: "We say 'do badly' (fail to achieve good marks)." },
              "B_3_3": { expected: ["copy"], explanation: "Cheating by writing down someone else's work is 'copying'." },
              "B_3_4": { expected: ["fail"], explanation: "If you get an unsatisfactory score on an exam, you 'fail' it." },
              "B_3_5": { expected: ["Hand", "hand"], explanation: "The imperative phrasal verb starting the sentence is 'Hand in' (submit)." }
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
            title: "Complete the sentences with the correct form of have to or had to and the verbs in brackets.",
            points: 6,
            type: "grammar-gap",
            example: "0 Mum is a doctor. She often has to work (work) at night.",
            items: [
              { id: "B_4_1", label: "1", before: "", verb: "you / take", after: "the bus to work yesterday?" },
              { id: "B_4_2", label: "2", before: "Katy", verb: "look", after: "after her little brother last night." },
              { id: "B_4_3", label: "3", before: "I", verb: "not / do", after: "any chores when I was five years old." },
              { id: "B_4_4", label: "4", before: "What time", verb: "you / get up", after: "tomorrow?" },
              { id: "B_4_5", label: "5", before: "We", verb: "tidy", after: "our rooms every weekend." },
              { id: "B_4_6", label: "6", before: "I", verb: "not / wear", after: "a uniform at school. I can wear casual clothes." }
            ],
            answers: {
              "B_4_1": { expected: ["Did you have to take", "did you have to take"], explanation: "Past question: Did + you + have to take." },
              "B_4_2": { expected: ["had to look"], explanation: "Past obligation last night: 'had to look'." },
              "B_4_3": { expected: ["didn't have to do", "did not have to do"], explanation: "Past negative obligation: didn't have to do." },
              "B_4_4": { expected: ["do you have to get up"], explanation: "Present question about scheduled time: What time do you have to get up?" },
              "B_4_5": { expected: ["have to tidy"], explanation: "Present regular obligation with 'we': 'have to tidy'." },
              "B_4_6": { expected: ["don't have to wear", "do not have to wear"], explanation: "Present negative obligation: don't have to wear." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Circle the correct answer.",
            points: 6,
            type: "circle-choice",
            example: "0 Could / Does Brenda have to speak French when she was a little girl?",
            items: [
              {
                id: "B_5_1",
                label: "1",
                before: "She",
                options: ["must", "mustn't"],
                after: "buy a new computer. Her laptop is very old."
              },
              {
                id: "B_5_2",
                label: "2",
                before: "I",
                options: ["don't have to", "couldn't"],
                after: "walk to school because Mum drives me."
              },
              {
                id: "B_5_3",
                label: "3",
                before: "They",
                options: ["don't have to", "must"],
                after: "leave now. It's early."
              },
              {
                id: "B_5_4",
                label: "4",
                before: "They",
                options: ["couldn't", "don't have to"],
                after: "swim because it was too cold."
              },
              {
                id: "B_5_5",
                label: "5",
                before: "Students",
                options: ["don't have to", "mustn't"],
                after: "talk in class."
              },
              {
                id: "B_5_6",
                label: "6",
                before: "",
                options: ["Have you", "Do you have to"],
                after: "study for your test?"
              }
            ],
            answers: {
              "B_5_1": { expected: ["must"], explanation: "Strong necessity/recommendation: she 'must' buy a new computer." },
              "B_5_2": { expected: ["don't have to"], explanation: "Lack of obligation: I 'don't have to' walk because Mum drives me." },
              "B_5_3": { expected: ["don't have to"], explanation: "It's early, so there is no need to leave: 'don't have to'." },
              "B_5_4": { expected: ["couldn't"], explanation: "Past inability due to cold water: 'couldn't'." },
              "B_5_5": { expected: ["mustn't"], explanation: "Prohibition during class: students 'mustn't' talk." },
              "B_5_6": { expected: ["Do you have to", "do you have to"], explanation: "Question form for obligation: 'Do you have to study...?'" }
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
            title: "Complete the dialogue.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["I need", "opinion", "should I", "what about", "why don't you", "you shouldn't"],
            example: "Jo: Hi Helen. ⁰I need your advice. Next week I've got an interview for a job.",
            usedInExample: ["I need"],
            dialogue: [
              { speaker: "Jo", text: "Hi Helen. I need your advice. Next week I've got an interview for a job." },
              {
                speaker: "Jo",
                parts: [
                  { before: "What", gapId: "B_6_1", label: "1", after: "wear?" }
                ]
              },
              {
                speaker: "Helen",
                parts: [
                  { before: "In my", gapId: "B_6_2", label: "2", after: ", you should look smart." }
                ]
              },
              { speaker: "Jo", text: "Hm… I've got some fantastic new jeans." },
              {
                speaker: "Helen",
                parts: [
                  { gapId: "B_6_3", label: "3", after: "wear jeans." },
                  { gapId: "B_6_4", label: "4", after: "wear your blue dress?" }
                ]
              },
              { speaker: "Jo", text: "OK… Should I wear sandals or shoes?" },
              {
                speaker: "Helen",
                parts: [
                  { before: "Shoes, and", gapId: "B_6_5", label: "5", after: "putting on some blue tights too?" }
                ]
              }
            ],
            answers: {
              "B_6_1": { expected: ["should I"], explanation: "Asking for advice: 'What should I wear?'" },
              "B_6_2": { expected: ["opinion"], explanation: "Fixed phrase: 'In my opinion' introduces a viewpoint." },
              "B_6_3": { expected: ["You shouldn't", "you shouldn't"], explanation: "Advising against something: 'You shouldn't wear jeans.'" },
              "B_6_4": { expected: ["Why don't you", "why don't you"], explanation: "Making a suggestion with base verb: 'Why don't you wear your blue dress?'" },
              "B_6_5": { expected: ["what about", "What about"], explanation: "Making a suggestion with -ing: '...what about putting on some blue tights too?'" }
            }
          }
        ]
      }
    }
  }
};
