/**
 * Go Getter 2 - Unit 1 Language Test
 * School Life & Daily Routines / Present Simple & Adverbs of Frequency
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_1_DATA = {
  id: "unit1",
  courseId: "gogetter2",
  number: 1,
  title: "School Life & Routines",
  description: "Vocabulary: School subjects, places in a school. Grammar: Present Simple, Adverbs of frequency. Communication: Asking for personal information.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 1",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 11,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with missing words.",
            points: 7,
            type: "letter-hint",
            example: "Today is Wednesday. Every Wednesday at nine o'clock we have ⁰French.",
            items: [
              { id: "A_1_1", label: "1", textBefore: "Today is Wednesday. Every Wednesday at nine o'clock we have French. Our teacher comes into the classroom and we say 'Bonjour, Madame Du Bois'. I need my", displayHint: "d _ _ t _ _ n _ _ y", prefix: "d", textAfter: "for this lesson." },
              { id: "A_1_2", label: "2", textBefore: "At ten o'clock we have", displayHint: "G _ _ g _ _ p _ _", prefix: "g", textAfter: "." },
              { id: "A_1_3", label: "3", textBefore: "We learn about different countries and we look at", displayHint: "m _ _ s", prefix: "m", textAfter: "." },
              { id: "A_1_4", label: "4", textBefore: "At eleven we have Maths so I need my", displayHint: "c _ _ _ u _ _ _ o _", prefix: "c", textAfter: "." },
              { id: "A_1_5", label: "5", textBefore: "At twelve we have", displayHint: "S _ _ e _ _ c _", prefix: "s", textAfter: ", my favourite subject! We do a lot of interesting experiments." },
              { id: "A_1_6", label: "6", textBefore: "In the afternoon, I", displayHint: "p _ _ a _", prefix: "p", textAfter: "basketball." },
              { id: "A_1_7", label: "7", textBefore: "Some students", displayHint: "_ o", prefix: "d", textAfter: "judo." }
            ],
            answers: {
              "A_1_1": { expected: ["dictionary"], explanation: "A book that gives words and their meanings is a dictionary." },
              "A_1_2": { expected: ["Geography"], explanation: "The subject about countries and maps is Geography." },
              "A_1_3": { expected: ["maps"], explanation: "In Geography we look at maps." },
              "A_1_4": { expected: ["calculator"], explanation: "In Maths we use a calculator." },
              "A_1_5": { expected: ["Science"], explanation: "Experiments are done in Science." },
              "A_1_6": { expected: ["play"], explanation: "Collocation: play basketball." },
              "A_1_7": { expected: ["do"], explanation: "Collocation: do judo." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Write the names of places in a school.",
            points: 4,
            type: "letter-hint",
            example: "0 The students have Computer Studies in the computer room.",
            items: [
              { id: "A_2_1", label: "1", textBefore: "The teachers and students meet in the", displayHint: "h _ _ _", prefix: "h", textAfter: "every day before lessons start." },
              { id: "A_2_2", label: "2", textBefore: "Everyone has lunch in the school", displayHint: "c _ _ _ _ _ n", prefix: "c", textAfter: "." },
              { id: "A_2_3", label: "3", textBefore: "The", displayHint: "s _ _ _ _   r _ _ _", prefix: "s", textAfter: "is for teachers, not students." },
              { id: "A_2_4", label: "4", textBefore: "We do P.E. in the", displayHint: "g _ _", prefix: "g", textAfter: "." }
            ],
            answers: {
              "A_2_1": { expected: ["hall"], explanation: "Assembly and meetings take place in the hall." },
              "A_2_2": { expected: ["canteen"], explanation: "Lunch is eaten in the school canteen." },
              "A_2_3": { expected: ["staff room"], explanation: "The room for teachers is the staff room." },
              "A_2_4": { expected: ["gym"], explanation: "P.E. is done in the gym." }
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
            id: "task_3",
            number: 3,
            title: "Put the words in the correct order.",
            points: 4,
            type: "sentence-order",
            example: "0 always / get up / I / on / early / Monday morning -> I always get up early on Monday morning.",
            items: [
              { id: "A_3_1", label: "1", prompt: "lessons / are / for / late / we / never / Music" },
              { id: "A_3_2", label: "2", prompt: "walk / Lucille and Jon / sometimes / school / to" },
              { id: "A_3_3", label: "3", prompt: "lunch / you / at / have / home / usually" },
              { id: "A_3_4", label: "4", prompt: "with / hang out / often / my friends / I" }
            ],
            answers: {
              "A_3_1": { expected: ["We are never late for Music lessons.", "We are never late for music lessons."], explanation: "Word order: Subject + be + adverb + adjective + prepositional phrase." },
              "A_3_2": { expected: ["Lucille and Jon sometimes walk to school.", "Jon and Lucille sometimes walk to school."], explanation: "Word order: Subject + adverb + verb + direction." },
              "A_3_3": { expected: ["You usually have lunch at home."], explanation: "Word order: Subject + adverb + verb + object + place." },
              "A_3_4": { expected: ["I often hang out with my friends."], explanation: "Word order: Subject + adverb + verb phrase." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the text with the Present Simple form of the verbs.",
            points: 5,
            type: "grammar-gap",
            context: "My friend Larry",
            example: "Larry ⁰comes (come) home from school at half past three.",
            items: [
              { id: "A_4_1", label: "1", textBefore: "Larry comes home from school at half past three. He", verb: "have", textAfter: "lunch and then he" },
              { id: "A_4_2", label: "2", textBefore: "", verb: "do", textAfter: "his homework. He" },
              { id: "A_4_3", label: "3", textBefore: "", verb: "not watch", textAfter: "TV. Larry has got two sisters, Adele and Frances. Adele is twenty and Frances is nineteen. They" },
              { id: "A_4_4", label: "4", textBefore: "", verb: "not go", textAfter: "to school. They" },
              { id: "A_4_5", label: "5", textBefore: "", verb: "work", textAfter: "in a shop." }
            ],
            answers: {
              "A_4_1": { expected: ["has"], explanation: "He has (third person singular of have)." },
              "A_4_2": { expected: ["does"], explanation: "He does (third person singular of do)." },
              "A_4_3": { expected: ["doesn't watch", "does not watch"], explanation: "Present Simple negative for he: doesn't watch." },
              "A_4_4": { expected: ["don't go", "do not go"], explanation: "Present Simple negative for they: don't go." },
              "A_4_5": { expected: ["work"], explanation: "Present Simple for they: work." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogues with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["do", "does", "she", "they", "what", "yes"],
            example: "A: ⁰Do you have a History lesson on Tuesdays?",
            usedInExample: ["do"],
            sentences: [
              { textBefore: "A: Do you have a History lesson on Tuesdays?<br>B:", gapId: "A_5_1", label: "1", textAfter: ", I do." },
              { textBefore: "A:", gapId: "A_5_2", label: "2", textAfter: "Howard listen to music in the evening?<br>B: No, he plays computer games." },
              { textBefore: "A:", gapId: "A_5_3", label: "3", textAfter: "Lois and Matt ride their bikes to school?<br>B: Yes," },
              { textBefore: "", gapId: "A_5_4", label: "4", textAfter: "do." },
              { textBefore: "A:", gapId: "A_5_5", label: "5", textAfter: "does Samantha do in the evening?<br>B: She plays chess." }
            ],
            answers: {
              "A_5_1": { expected: ["Yes", "yes"], explanation: "Short answer: Yes, I do." },
              "A_5_2": { expected: ["Does", "does"], explanation: "Question for third person singular (Howard): Does." },
              "A_5_3": { expected: ["Do", "do"], explanation: "Question for third person plural (Lois and Matt): Do." },
              "A_5_4": { expected: ["they"], explanation: "Pronoun for Lois and Matt: they." },
              "A_5_5": { expected: ["What", "what"], explanation: "Question word asking about activity: What." }
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
            title: "Complete each dialogue with two words.",
            points: 5,
            type: "grammar-gap",
            example: "0 A: What's your name? B: Marina Chelsky.",
            items: [
              { id: "A_6_1", label: "1", textBefore: "A: How do you", textAfter: "?<br>B: M - A - R - I - N - A, C - H - E - L - S - K - Y." },
              { id: "A_6_2", label: "2", textBefore: "A: How old", textAfter: "?<br>B: Twelve." },
              { id: "A_6_3", label: "3", textBefore: "A: Where do", textAfter: "?<br>B: 34 Albany Road, Cambridge." },
              { id: "A_6_4", label: "4", textBefore: "A: What's your", textAfter: "?<br>B: It's marina190@ynet.com." },
              { id: "A_6_5", label: "5", textBefore: "A: What's your", textAfter: "?<br>B: 049123456." }
            ],
            answers: {
              "A_6_1": { expected: ["spell that", "spell it"], explanation: "Asking how to spell: spell that / spell it." },
              "A_6_2": { expected: ["are you"], explanation: "Asking age: How old are you?" },
              "A_6_3": { expected: ["you live"], explanation: "Asking address: Where do you live?" },
              "A_6_4": { expected: ["email address", "e-mail address"], explanation: "Email address." },
              "A_6_5": { expected: ["phone number", "telephone number"], explanation: "Telephone / phone number." }
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
        maxScore: 11,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with missing words.",
            points: 7,
            type: "letter-hint",
            example: "Today is Friday. Every Friday at nine o'clock we have ⁰French.",
            items: [
              { id: "B_1_1", label: "1", textBefore: "Today is Friday. Every Friday at nine o'clock we have French. Our teacher comes into the classroom and we say 'Bonjour, Madame Du Bois'. I use my", displayHint: "d _ _ t _ _ n _ _ y", prefix: "d", textAfter: "a lot in this lesson." },
              { id: "B_1_2", label: "2", textBefore: "At ten o'clock we have Maths, so I need my", displayHint: "c _ _ _ u _ _ _ o _", prefix: "c", textAfter: "." },
              { id: "B_1_3", label: "3", textBefore: "At eleven we have", displayHint: "H _ _ _ _ o _ _", prefix: "h", textAfter: ", my favourite subject, and we learn about the past." },
              { id: "B_1_4", label: "4", textBefore: "At twelve we have", displayHint: "G _ _ g _ _ p _ _", prefix: "g", textAfter: ". We learn about different countries and we look at" },
              { id: "B_1_5", label: "5", textBefore: "", displayHint: "m _ _ s", prefix: "m", textAfter: "." },
              { id: "B_1_6", label: "6", textBefore: "In the afternoon, I", displayHint: "_ o", prefix: "d", textAfter: "ballet but my friends" },
              { id: "B_1_7", label: "7", textBefore: "", displayHint: "p _ _ a _", prefix: "p", textAfter: "hockey or football." }
            ],
            answers: {
              "B_1_1": { expected: ["dictionary"], explanation: "A book that gives words and their meanings is a dictionary." },
              "B_1_2": { expected: ["calculator"], explanation: "In Maths we use a calculator." },
              "B_1_3": { expected: ["History"], explanation: "The subject about the past is History." },
              "B_1_4": { expected: ["Geography"], explanation: "The subject about different countries is Geography." },
              "B_1_5": { expected: ["maps"], explanation: "In Geography we look at maps." },
              "B_1_6": { expected: ["do"], explanation: "Collocation: do ballet." },
              "B_1_7": { expected: ["play"], explanation: "Collocation: play hockey or football." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Write the names for places in a school.",
            points: 4,
            type: "letter-hint",
            example: "0 The students have Computer Studies in the computer room.",
            items: [
              { id: "B_2_1", label: "1", textBefore: "The", displayHint: "s _ _ _ _   r _ _ _", prefix: "s", textAfter: "is only for teachers." },
              { id: "B_2_2", label: "2", textBefore: "The students love playing in the", displayHint: "p _ _ _ _ _ _ _ _ _", prefix: "p", textAfter: "." },
              { id: "B_2_3", label: "3", textBefore: "We often read and study in the", displayHint: "l _ _ _ _ _ y", prefix: "l", textAfter: "at school." },
              { id: "B_2_4", label: "4", textBefore: "Everyone has lunch in the school", displayHint: "c _ _ _ _ _ n", prefix: "c", textAfter: "." }
            ],
            answers: {
              "B_2_1": { expected: ["staff room"], explanation: "The room for teachers is the staff room." },
              "B_2_2": { expected: ["playground"], explanation: "Students play in the playground." },
              "B_2_3": { expected: ["library"], explanation: "Reading and studying at school is in the library." },
              "B_2_4": { expected: ["canteen"], explanation: "Lunch is eaten in the school canteen." }
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
            id: "task_3",
            number: 3,
            title: "Put the words in the correct order.",
            points: 4,
            type: "sentence-order",
            example: "0 always / get up / I / on / Monday / early / morning -> I always get up early on Monday morning.",
            items: [
              { id: "B_3_1", label: "1", prompt: "never / meets / in / his friends / Ken / the park" },
              { id: "B_3_2", label: "2", prompt: "the students / home / lunch / usually / at / have" },
              { id: "B_3_3", label: "3", prompt: "late / are / for / you / school / sometimes" },
              { id: "B_3_4", label: "4", prompt: "often / my friends / school / their bikes / ride / to" }
            ],
            answers: {
              "B_3_1": { expected: ["Ken never meets his friends in the park."], explanation: "Word order: Subject + adverb + verb + object + place." },
              "B_3_2": { expected: ["The students usually have lunch at home."], explanation: "Word order: Subject + adverb + verb + object + place." },
              "B_3_3": { expected: ["You are sometimes late for school."], explanation: "Word order: Subject + be + adverb + adjective + prepositional phrase." },
              "B_3_4": { expected: ["My friends often ride their bikes to school."], explanation: "Word order: Subject + adverb + verb + object + direction." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the text with the Present Simple form of the verbs.",
            points: 5,
            type: "grammar-gap",
            context: "My friend Sharon",
            example: "Sharon ⁰comes (come) home from school at four o'clock.",
            items: [
              { id: "B_4_1", label: "1", textBefore: "Sharon comes home from school at four o'clock. She", verb: "do", textAfter: "her homework and then she" },
              { id: "B_4_2", label: "2", textBefore: "", verb: "watch", textAfter: "TV. She" },
              { id: "B_4_3", label: "3", textBefore: "", verb: "not play", textAfter: "computer games. Sharon has got two brothers, Tony and Grant. Tony is nineteen and Grant is twenty. They" },
              { id: "B_4_4", label: "4", textBefore: "", verb: "work", textAfter: "in a shop. They" },
              { id: "B_4_5", label: "5", textBefore: "", verb: "not go", textAfter: "to school." }
            ],
            answers: {
              "B_4_1": { expected: ["does"], explanation: "She does (third person singular of do)." },
              "B_4_2": { expected: ["watches"], explanation: "She watches (third person singular of watch)." },
              "B_4_3": { expected: ["doesn't play", "does not play"], explanation: "Present Simple negative for she: doesn't play." },
              "B_4_4": { expected: ["work"], explanation: "Present Simple for they: work." },
              "B_4_5": { expected: ["don't go", "do not go"], explanation: "Present Simple negative for they: don't go." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogues with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["do", "does", "don't", "no", "we", "what"],
            example: "A: ⁰Do you have a Science lesson on Tuesday?",
            usedInExample: ["do"],
            sentences: [
              { textBefore: "A: Do you have a Science lesson on Tuesday?<br>B:", gapId: "B_5_1", label: "1", textAfter: ", I don't." },
              { textBefore: "A:", gapId: "B_5_2", label: "2", textAfter: "you and your friends walk to school?<br>B: Yes," },
              { textBefore: "", gapId: "B_5_3", label: "3", textAfter: "do." },
              { textBefore: "A:", gapId: "B_5_4", label: "4", textAfter: "does Miles do in the afternoon?<br>B: He goes skateboarding." },
              { textBefore: "A:", gapId: "B_5_5", label: "5", textAfter: "your mum cook dinner after work?<br>B: No, my father cooks dinner." }
            ],
            answers: {
              "B_5_1": { expected: ["No", "no"], explanation: "Negative short answer: No, I don't." },
              "B_5_2": { expected: ["Do", "do"], explanation: "Question for you and your friends (plural): Do." },
              "B_5_3": { expected: ["we"], explanation: "Pronoun for you and your friends in reply: we." },
              "B_5_4": { expected: ["What", "what"], explanation: "Question word asking about activity: What." },
              "B_5_5": { expected: ["Does", "does"], explanation: "Question for third person singular (your mum): Does." }
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
            title: "Complete each dialogue with two words.",
            points: 5,
            type: "grammar-gap",
            example: "0 A: What's your name? B: Oscar Fuentes.",
            items: [
              { id: "B_6_1", label: "1", textBefore: "A: How do you", textAfter: "?<br>B: O - S - C - A - R, F - U - E - N - T - E - S." },
              { id: "B_6_2", label: "2", textBefore: "A: How old", textAfter: "?<br>B: I'm thirteen years old." },
              { id: "B_6_3", label: "3", textBefore: "A: Where do", textAfter: "?<br>B: 19 Princess Alexandra Street, Cambridge." },
              { id: "B_6_4", label: "4", textBefore: "A: What's your", textAfter: "?<br>B: It's oscarxyz@ynet.com." },
              { id: "B_6_5", label: "5", textBefore: "A: What's your", textAfter: "?<br>B: 081765432." }
            ],
            answers: {
              "B_6_1": { expected: ["spell that", "spell it"], explanation: "Asking how to spell: spell that / spell it." },
              "B_6_2": { expected: ["are you"], explanation: "Asking age: How old are you?" },
              "B_6_3": { expected: ["you live"], explanation: "Asking address: Where do you live?" },
              "B_6_4": { expected: ["email address", "e-mail address"], explanation: "Email address." },
              "B_6_5": { expected: ["phone number", "telephone number"], explanation: "Telephone / phone number." }
            }
          }
        ]
      }
    }
  }
};
