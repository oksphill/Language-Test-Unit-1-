/**
 * Go Getter 2 - Unit 3 Language Test
 * Technology & Activities / Present Continuous
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_3_DATA = {
  id: "unit3",
  courseId: "gogetter2",
  number: 3,
  title: "Technology & Activities",
  description: "Vocabulary: Technology devices, adjectives of feeling. Grammar: Present Continuous (affirmative, negative, questions, short answers, question words). Communication: Talking on the phone.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 3",
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
            title: "Complete the text with missing words.",
            points: 7,
            type: "letter-hint",
            example: "We love taking ⁰selfies with our mobile phones.",
            items: [
              { id: "A_1_1", label: "1", textBefore: "We", displayHint: "t _ _ k", prefix: "t", textAfter: "on the phone a lot too." },
              { id: "A_1_2", label: "2", textBefore: "My friends and I have a computer at home: some people have got a laptop too, and other people have got a", displayHint: "t _ _ l _ _", prefix: "t", textAfter: "." },
              { id: "A_1_3", label: "3", textBefore: "We never buy CDs. We always", displayHint: "d _ _ _ l _ _ _", prefix: "d", textAfter: "songs and we use our" },
              { id: "A_1_4", label: "4", textBefore: "", displayHint: "h _ _ _ p _ _ _ _ e", prefix: "h", textAfter: "to listen to music." },
              { id: "A_1_5", label: "5", textBefore: "We sometimes", displayHint: "s _ n _", prefix: "s", textAfter: "emails but we usually" },
              { id: "A_1_6", label: "6", textBefore: "", displayHint: "t _ _ t", prefix: "t", textAfter: "our friends or we chat" },
              { id: "A_1_7", label: "7", textBefore: "", displayHint: "o _ _ i _ _", prefix: "o", textAfter: ". What's your favourite item of technology?" }
            ],
            answers: {
              "A_1_1": { expected: ["talk"], explanation: "Talk on the phone." },
              "A_1_2": { expected: ["tablet"], explanation: "A tablet computer." },
              "A_1_3": { expected: ["download"], explanation: "Download songs from the internet." },
              "A_1_4": { expected: ["headphones"], explanation: "Listen to music with headphones." },
              "A_1_5": { expected: ["send"], explanation: "Send emails." },
              "A_1_6": { expected: ["text"], explanation: "Text friends." },
              "A_1_7": { expected: ["online"], explanation: "Chat online." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "0 I've got a new laptop! I'm happy / scared / tired. (happy)",
            items: [
              { id: "A_2_1", label: "1", before: "I'm not", after: "at fixing things, but my brother is fantastic.", options: ["interested", "scared", "good"] },
              { id: "A_2_2", label: "2", before: "Are you", after: "in technology?", options: ["bad", "bored", "interested"] },
              { id: "A_2_3", label: "3", before: "Angela is", after: "of big dogs.", options: ["excited", "scared", "angry"] },
              { id: "A_2_4", label: "4", before: "Lee works all day so he feels", after: "in the evening.", options: ["tired", "excited", "interested"] },
              { id: "A_2_5", label: "5", before: "The children are", after: "about their mum. She looks sad.", options: ["scared", "interested", "worried"] }
            ],
            answers: {
              "A_2_1": { expected: ["good"], explanation: "Good at fixing things." },
              "A_2_2": { expected: ["interested"], explanation: "Interested in technology." },
              "A_2_3": { expected: ["scared"], explanation: "Scared of big dogs." },
              "A_2_4": { expected: ["tired"], explanation: "Feels tired in the evening." },
              "A_2_5": { expected: ["worried"], explanation: "Worried about their mum." }
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
            title: "Use the Present Continuous form of the verbs. Write short forms when you can.",
            points: 5,
            type: "grammar-gap",
            context: "Hi, Granny! ... Yes, we're all fine. ... I'm sitting (sit) in the garden.",
            example: "⁰I'm sitting (sit) in the garden.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "Mum and Dad are in the living room. ... No, they", verb: "not watch", textAfter: "TV. Dad" },
              { id: "A_3_2", label: "2", textBefore: "", verb: "write", textAfter: "emails and Mum" },
              { id: "A_3_3", label: "3", textBefore: "", verb: "listen", textAfter: "to music. ... What" },
              { id: "A_3_4", label: "4", textBefore: "", verb: "I / do", textAfter: "? I" },
              { id: "A_3_5", label: "5", textBefore: "", verb: "surf", textAfter: "the Internet. What about you?" }
            ],
            answers: {
              "A_3_1": { expected: ["aren't watching", "are not watching"], explanation: "Present Continuous negative: aren't watching." },
              "A_3_2": { expected: ["'s writing", "is writing"], explanation: "Present Continuous short form: 's writing." },
              "A_3_3": { expected: ["'s listening", "is listening"], explanation: "Present Continuous short form: 's listening." },
              "A_3_4": { expected: ["am I doing"], explanation: "Present Continuous question: am I doing." },
              "A_3_5": { expected: ["'m surfing", "am surfing"], explanation: "Present Continuous short form: 'm surfing." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogues.",
            points: 4,
            type: "grammar-gap",
            example: "0 A: Are Billy and Marcus chatting with their friends? B: Yes, they are.",
            items: [
              { id: "A_4_1", label: "1", textBefore: "A: Are you playing a good computer game?<br>B: No,", textAfter: "." },
              { id: "A_4_2", label: "2", textBefore: "A: Is your teacher standing in front of the board?<br>B: Yes,", textAfter: "." },
              { id: "A_4_3", label: "3", textBefore: "A: Are you and your sister having lunch?<br>B: No,", textAfter: "." },
              { id: "A_4_4", label: "4", textBefore: "A: Are the students going to the canteen?<br>B: Yes,", textAfter: "." }
            ],
            answers: {
              "A_4_1": { expected: ["I'm not", "I am not"], explanation: "Negative short answer for you: No, I'm not." },
              "A_4_2": { expected: ["he is", "she is", "he/she is"], explanation: "Affirmative short answer: Yes, he is / she is." },
              "A_4_3": { expected: ["we aren't", "we're not", "we are not"], explanation: "Negative short answer for you and your sister: No, we aren't." },
              "A_4_4": { expected: ["they are"], explanation: "Affirmative short answer for students: Yes, they are." }
            }
          },
          {
            id: "task_5",
            number: 4,
            title: "Complete the questions.",
            points: 4,
            type: "sentence-order",
            example: "0 A: Where is your dad going? B: My dad is going to work.",
            items: [
              { id: "A_5_1", label: "1", prompt: "What is Roxanne driving? (B: Roxanne is driving a lorry.)" },
              { id: "A_5_2", label: "2", prompt: "Why are you going to bed? (B: I am going to bed because it's late.)" },
              { id: "A_5_3", label: "3", prompt: "Are the cats sleeping on the carpet? (B: Yes, the cats are sleeping on the carpet.)" },
              { id: "A_5_4", label: "4", prompt: "What are the students reading? (B: The students are reading their books.)" }
            ],
            answers: {
              "A_5_1": { expected: ["What is Roxanne driving?", "What is Roxanne driving"], explanation: "Question asking about object." },
              "A_5_2": { expected: ["Why are you going to bed?", "Why are you going to bed"], explanation: "Question asking about reason." },
              "A_5_3": { expected: ["Are the cats sleeping on the carpet?", "Are the cats sleeping on the carpet"], explanation: "Yes/No question in Present Continuous." },
              "A_5_4": { expected: ["What are the students reading?", "What are the students reading"], explanation: "Question asking about what the students read." }
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
            title: "Complete the dialogue with one word in each gap.",
            points: 5,
            type: "letter-hint",
            example: "Seth: Hello, Mrs Carter. It's Seth ⁰here.",
            items: [
              { id: "A_6_1", label: "1", textBefore: "Mrs Carter: Oh, hello, Seth. How are you?<br>Seth:", displayHint: "F _ _ e", prefix: "f", textAfter: ", thanks. Can I" },
              { id: "A_6_2", label: "2", textBefore: "", displayHint: "s _ _ _ k", prefix: "s", textAfter: "to Ollie," },
              { id: "A_6_3", label: "3", textBefore: "", displayHint: "p _ _ _ _ e", prefix: "p", textAfter: "?<br>Mrs Carter:" },
              { id: "A_6_4", label: "4", textBefore: "", displayHint: "H _ _ g", prefix: "h", textAfter: "on, please. Ollie! Ollie! It's Seth for you.<br>Ollie: Hi, Seth.<br>Seth: Hi, Ollie. Do you want to come to my house and watch a DVD?<br>Ollie: Great idea. See you" },
              { id: "A_6_5", label: "5", textBefore: "", displayHint: "s _ _ n", prefix: "s", textAfter: "." }
            ],
            answers: {
              "A_6_1": { expected: ["Fine"], explanation: "Fine, thanks." },
              "A_6_2": { expected: ["speak"], explanation: "Can I speak to Ollie...?" },
              "A_6_3": { expected: ["please"], explanation: "...please?" },
              "A_6_4": { expected: ["Hang"], explanation: "Hang on, please." },
              "A_6_5": { expected: ["soon"], explanation: "See you soon." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 3",
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
            title: "Complete the text with missing words.",
            points: 7,
            type: "letter-hint",
            example: "We love taking ⁰selfies with our mobile phones.",
            items: [
              { id: "B_1_1", label: "1", textBefore: "We", displayHint: "s _ _ f", prefix: "s", textAfter: "the Internet a lot too. My friends and I have a computer at home: some people have got a tablet too, and other people have got a" },
              { id: "B_1_2", label: "2", textBefore: "", displayHint: "l _ _ t _ _", prefix: "l", textAfter: "." },
              { id: "B_1_3", label: "3", textBefore: "We usually", displayHint: "d _ _ _ l _ _ _", prefix: "d", textAfter: "songs and we use our" },
              { id: "B_1_4", label: "4", textBefore: "", displayHint: "h _ _ _ p _ _ _ _ e", prefix: "h", textAfter: "to listen to music. We sometimes" },
              { id: "B_1_5", label: "5", textBefore: "", displayHint: "s _ n _", prefix: "s", textAfter: "emails but we usually" },
              { id: "B_1_6", label: "6", textBefore: "", displayHint: "t _ _ t", prefix: "t", textAfter: "our friends or we" },
              { id: "B_1_7", label: "7", textBefore: "", displayHint: "c _ _ t", prefix: "c", textAfter: "online." }
            ],
            answers: {
              "B_1_1": { expected: ["surf"], explanation: "Surf the Internet." },
              "B_1_2": { expected: ["laptop"], explanation: "A laptop computer." },
              "B_1_3": { expected: ["download"], explanation: "Download songs." },
              "B_1_4": { expected: ["headphones"], explanation: "Headphones to listen to music." },
              "B_1_5": { expected: ["send"], explanation: "Send emails." },
              "B_1_6": { expected: ["text"], explanation: "Text our friends." },
              "B_1_7": { expected: ["chat"], explanation: "Chat online." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "0 I've got a new laptop! I'm happy / scared / tired. (happy)",
            items: [
              { id: "B_2_1", label: "1", before: "Barry is", after: "of big dogs!", options: ["angry", "excited", "scared"] },
              { id: "B_2_2", label: "2", before: "I am", after: "about my friend. He looks sad.", options: ["interested", "worried", "scared"] },
              { id: "B_2_3", label: "3", before: "Are you", after: "in Science and Technology?", options: ["interested", "bad", "bored"] },
              { id: "B_2_4", label: "4", before: "Sandra isn't", after: "at playing chess, but her brother is fantastic.", options: ["interested", "scared", "good"] },
              { id: "B_2_5", label: "5", before: "Paul works all week so he feels", after: "at the weekend.", options: ["excited", "tired", "interested"] }
            ],
            answers: {
              "B_2_1": { expected: ["scared"], explanation: "Scared of big dogs." },
              "B_2_2": { expected: ["worried"], explanation: "Worried about my friend." },
              "B_2_3": { expected: ["interested"], explanation: "Interested in Science and Technology." },
              "B_2_4": { expected: ["good"], explanation: "Good at playing chess." },
              "B_2_5": { expected: ["tired"], explanation: "Feels tired at the weekend." }
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
            title: "Use the Present Continuous form of the verbs. Write short forms when you can.",
            points: 5,
            type: "grammar-gap",
            context: "Hi, Granny! ... Yes, we're all fine. ... I'm sitting (sit) in the garden. ... Bert? Oh, Bert",
            example: "⁰I'm sitting (sit) in the garden.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "Bert", verb: "do", textAfter: "his homework in his bedroom. And Mum, Uncle Darren and Aunt Vicky are in the living room. They" },
              { id: "B_3_2", label: "2", textBefore: "", verb: "talk", textAfter: ". ... No, Dad" },
              { id: "B_3_3", label: "3", textBefore: "", verb: "not watch", textAfter: "TV. He" },
              { id: "B_3_4", label: "4", textBefore: "", verb: "sing", textAfter: "in the shower. I can hear him! What" },
              { id: "B_3_5", label: "5", textBefore: "", verb: "you / do", textAfter: "?" }
            ],
            answers: {
              "B_3_1": { expected: ["'s doing", "is doing"], explanation: "Present Continuous: 's doing." },
              "B_3_2": { expected: ["'re talking", "are talking"], explanation: "Present Continuous: 're talking." },
              "B_3_3": { expected: ["isn't watching", "is not watching"], explanation: "Present Continuous negative: isn't watching." },
              "B_3_4": { expected: ["'s singing", "is singing"], explanation: "Present Continuous: 's singing." },
              "B_3_5": { expected: ["are you doing"], explanation: "Present Continuous question: are you doing." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Complete the dialogues.",
            points: 4,
            type: "grammar-gap",
            example: "0 A: Are Billy and Marcus chatting with their friends? B: Yes, they are.",
            items: [
              { id: "B_4_1", label: "1", textBefore: "A: Is Jenny going to the library?<br>B: No,", textAfter: "." },
              { id: "B_4_2", label: "2", textBefore: "A: Are you and your family having dinner?<br>B: Yes,", textAfter: "." },
              { id: "B_4_3", label: "3", textBefore: "A: Is the boy listening to music?<br>B: Yes,", textAfter: "." },
              { id: "B_4_4", label: "4", textBefore: "A: Are Ian and Vanessa studying for a test?<br>B: No,", textAfter: "." }
            ],
            answers: {
              "B_4_1": { expected: ["she isn't", "she's not", "she is not"], explanation: "Negative short answer for Jenny: No, she isn't." },
              "B_4_2": { expected: ["we are"], explanation: "Affirmative short answer for you and your family: Yes, we are." },
              "B_4_3": { expected: ["he is"], explanation: "Affirmative short answer for the boy: Yes, he is." },
              "B_4_4": { expected: ["they aren't", "they're not", "they are not"], explanation: "Negative short answer: No, they aren't." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the questions.",
            points: 4,
            type: "sentence-order",
            example: "0 A: Where is your dad going? B: My dad is going to work.",
            items: [
              { id: "B_5_1", label: "1", prompt: "Are the teachers sitting in the staff room? (B: No, the teachers aren't sitting in the staff room.)" },
              { id: "B_5_2", label: "2", prompt: "What is Louisa drinking? (B: Louisa is drinking orange juice.)" },
              { id: "B_5_3", label: "3", prompt: "Why are Kate and you going home? (B: Kate and I are going home because it's late.)" },
              { id: "B_5_4", label: "4", prompt: "Where are the little girls playing? (B: The little girls are playing in the garden.)" }
            ],
            answers: {
              "B_5_1": { expected: ["Are the teachers sitting in the staff room?", "Are the teachers sitting in the staff room"], explanation: "Yes/No question in Present Continuous." },
              "B_5_2": { expected: ["What is Louisa drinking?", "What is Louisa drinking"], explanation: "Question asking about drink." },
              "B_5_3": { expected: ["Why are Kate and you going home?", "Why are you and Kate going home?", "Why are you and Kate going home", "Why are Kate and you going home"], explanation: "Question asking for reason." },
              "B_5_4": { expected: ["Where are the little girls playing?", "Where are the little girls playing"], explanation: "Question asking for place." }
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
            title: "Complete the dialogue with one word in each gap.",
            points: 5,
            type: "letter-hint",
            example: "Simon: Hello, Mrs Winters. It's Simon ⁰here.",
            items: [
              { id: "B_6_1", label: "1", textBefore: "Mrs Winters: Hello, Simon. How are you?<br>Simon: I'm", displayHint: "f _ _ e", prefix: "f", textAfter: ", thanks. Can I" },
              { id: "B_6_2", label: "2", textBefore: "", displayHint: "s _ _ _ k", prefix: "s", textAfter: "to Gabriella," },
              { id: "B_6_3", label: "3", textBefore: "", displayHint: "p _ _ _ _ e", prefix: "p", textAfter: "?<br>Mrs Winters:" },
              { id: "B_6_4", label: "4", textBefore: "", displayHint: "J _ _ t", prefix: "j", textAfter: "a minute. Gabriella! It's Simon for you.<br>Gabriella: Hi, Simon.<br>Simon: Hi, Gabriella. Do you want to go skateboarding with me?<br>Gabriella: That's a good idea. See you" },
              { id: "B_6_5", label: "5", textBefore: "", displayHint: "l _ _ _ r", prefix: "l", textAfter: "." }
            ],
            answers: {
              "B_6_1": { expected: ["fine"], explanation: "I'm fine, thanks." },
              "B_6_2": { expected: ["speak"], explanation: "Can I speak to Gabriella...?" },
              "B_6_3": { expected: ["please"], explanation: "...please?" },
              "B_6_4": { expected: ["Just"], explanation: "Just a minute." },
              "B_6_5": { expected: ["later"], explanation: "See you later." }
            }
          }
        ]
      }
    }
  }
};
