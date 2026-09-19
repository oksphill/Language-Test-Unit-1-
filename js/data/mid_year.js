/**
 * Mid-Year Test (Units 1–4) - Pearson English Photocopiable Tests
 * Total Points: 50 (Vocabulary: 15, Grammar: 15, Listening: 6, Reading: 6, Communication: 8)
 */

window.MID_YEAR_DATA = {
  id: "mid_year",
  number: "1-4",
  title: "Mid-Year Test (Units 1–4)",
  description: "Comprehensive mid-year assessment covering Vocabulary, Grammar, Audio Listening (Track 10), Reading, and Everyday Communication.",
  totalPoints: 50,

  variantA: {
    id: "variantA",
    title: "Mid-Year Test A — Units 1–4",
    totalPoints: 50,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["curly", "spotted", "generous", "secretary", "skirt", "tights"],
            example: "Jean Harris looks very smart today. She's wearing a plain ⁰skirt and a spotted top.",
            usedInExample: ["skirt"],
            sentences: [
              {
                textBefore: "Jean Harris looks very smart today. She's wearing a plain ⁰skirt and a",
                gapId: "MY_A_1_1",
                label: "1",
                textAfter: "top. She's also wearing"
              },
              {
                textBefore: "",
                gapId: "MY_A_1_2",
                label: "2",
                textAfter: "and a new pair of shoes. She has short,"
              },
              {
                textBefore: "",
                gapId: "MY_A_1_3",
                label: "3",
                textAfter: ", red hair and blue eyes. Jean is"
              },
              {
                textBefore: "",
                gapId: "MY_A_1_4",
                label: "4",
                textAfter: "and kind. She's a"
              },
              {
                textBefore: "",
                gapId: "MY_A_1_5",
                label: "5",
                textAfter: "and she works in an office in London. She loves her job."
              }
            ],
            answers: {
              "MY_A_1_1": { expected: ["spotted"], explanation: "A top with dots is a 'spotted' top." },
              "MY_A_1_2": { expected: ["tights"], explanation: "Tight garments covering the legs: 'tights'." },
              "MY_A_1_3": { expected: ["curly"], explanation: "Hair with curls/waves: 'curly'." },
              "MY_A_1_4": { expected: ["generous"], explanation: "Willing to give and share: 'generous'." },
              "MY_A_1_5": { expected: ["secretary"], explanation: "An office professional who manages correspondence: 'secretary'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "I'd love to (meet) / win a famous person.",
            items: [
              {
                id: "MY_A_2_1",
                label: "1",
                before: "Please make dinner, but don't",
                options: ["do", "make"],
                after: "a mess in the kitchen."
              },
              {
                id: "MY_A_2_2",
                label: "2",
                before: "Study hard and",
                options: ["hand", "put"],
                after: "in your homework on time."
              },
              {
                id: "MY_A_2_3",
                label: "3",
                before: "I was born in London but I",
                options: ["grew", "retired"],
                after: "up in Scotland."
              },
              {
                id: "MY_A_2_4",
                label: "4",
                before: "We always support our favourite football team when they",
                options: ["compete", "train"],
                after: "in matches."
              },
              {
                id: "MY_A_2_5",
                label: "5",
                before: "You have a bad cough and headache. I think you should",
                options: ["eat", "take"],
                after: "this medicine."
              }
            ],
            answers: {
              "MY_A_2_1": { expected: ["make"], explanation: "Collocation: make a mess." },
              "MY_A_2_2": { expected: ["hand"], explanation: "Phrasal verb: hand in homework (submit)." },
              "MY_A_2_3": { expected: ["grew"], explanation: "Phrasal verb: grow up (spend childhood)." },
              "MY_A_2_4": { expected: ["compete"], explanation: "compete in matches." },
              "MY_A_2_5": { expected: ["take"], explanation: "Collocation: take medicine." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences.",
            points: 5,
            type: "letter-hint",
            example: "Mark is a costume designer. He made the clothes for the actors in the film.",
            items: [
              {
                id: "MY_A_3_1",
                label: "1",
                before: "Sue works as a",
                displayHint: "M _ _ _ - E - U _",
                after: "artist in Hollywood and meets many famous people."
              },
              {
                id: "MY_A_3_2",
                label: "2",
                before: "Linda and Mike went",
                displayHint: "S _ _ _ A",
                after: "diving on their holiday in Australia."
              },
              {
                id: "MY_A_3_3",
                label: "3",
                before: "When Olivia Vickers was 60 years old, she wrote her",
                displayHint: "A _ _ _ _ _ _ _ _ _ _ Y",
                after: "."
              },
              {
                id: "MY_A_3_4",
                label: "4",
                before: "Joan and I went to the cinema to see the new Disney",
                displayHint: "A _ _ _ _ _ _ _ N",
                after: "last night."
              },
              {
                id: "MY_A_3_5",
                label: "5",
                before: "You need a tennis",
                displayHint: "R _ _ _ _ T",
                after: "and a tennis ball to play tennis."
              }
            ],
            answers: {
              "MY_A_3_1": { expected: ["make-up", "make up", "makeup"], explanation: "make-up artist." },
              "MY_A_3_2": { expected: ["scuba"], explanation: "scuba diving." },
              "MY_A_3_3": { expected: ["autobiography"], explanation: "autobiography (a life story written by oneself)." },
              "MY_A_3_4": { expected: ["animation"], explanation: "Disney animation (animated film)." },
              "MY_A_3_5": { expected: ["racket", "racquet"], explanation: "tennis racket." }
            }
          }
        ]
      },

      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 15,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the Past Simple or Past Continuous form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "I was busy all afternoon yesterday. I was tidying (tidy) my room.",
            items: [
              {
                id: "MY_A_4_1",
                label: "1",
                before: "While Dora",
                verb: "have",
                options: ["was having", "had"],
                after: "a snack in a café, she saw her favourite singer."
              },
              {
                id: "MY_A_4_2",
                label: "2",
                before: "I",
                verb: "wash",
                options: ["was washing", "washed"],
                after: "my hair when my mum came back home."
              },
              {
                id: "MY_A_4_3",
                label: "3",
                before: "Where",
                verb: "you / put",
                options: ["did you put", "were you putting"],
                after: "the keys? I can't find them."
              },
              {
                id: "MY_A_4_4",
                label: "4",
                before: "We were watching TV when we",
                verb: "hear",
                options: ["heard", "were hearing"],
                after: "a strange noise outside."
              },
              {
                id: "MY_A_4_5",
                label: "5",
                before: "My aunt",
                verb: "come",
                options: ["came", "was coming"],
                after: "to visit us yesterday."
              }
            ],
            answers: {
              "MY_A_4_1": { expected: ["was having"], explanation: "Past Continuous after 'While': was having." },
              "MY_A_4_2": { expected: ["was washing"], explanation: "Past Continuous ongoing action: was washing." },
              "MY_A_4_3": { expected: ["did you put"], explanation: "Past Simple question: Where did you put...?" },
              "MY_A_4_4": { expected: ["heard"], explanation: "Past Simple interrupting event: heard." },
              "MY_A_4_5": { expected: ["came"], explanation: "Past Simple completed action with yesterday: came." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["couldn't", "had", "has", "have", "must", "mustn't"],
            example: "Mum: Jack, you ⁰must feed the dogs this afternoon.",
            usedInExample: ["must"],
            dialogue: [
              {
                speaker: "Mum",
                text: "Kids, I'm leaving. Jack, you ⁰must feed the dogs this afternoon."
              },
              {
                speaker: "Mum",
                parts: [
                  { before: "And Mandy, you", gapId: "MY_A_5_1", label: "1", after: "forget to go to the supermarket. We need milk and oranges." }
                ]
              },
              {
                speaker: "Mandy",
                parts: [
                  { before: "Do I", gapId: "MY_A_5_2", label: "2", after: "to go? I've got a test tomorrow." }
                ]
              },
              {
                speaker: "Mum",
                parts: [
                  { before: "Yes, you do. I was busy yesterday. I", gapId: "MY_A_5_3", label: "3", after: "to work late at the office and I" },
                  { before: "", gapId: "MY_A_5_4", label: "4", after: "do the shopping." }
                ]
              },
              {
                speaker: "Mandy",
                text: "Can't Dad go this evening?"
              },
              {
                speaker: "Mum",
                parts: [
                  { before: "No, he", gapId: "MY_A_5_5", label: "5", after: "to work late tonight." }
                ]
              },
              {
                speaker: "Jack",
                text: "I can go. I don't mind."
              },
              {
                speaker: "Mandy",
                text: "OK. I'll go."
              }
            ],
            answers: {
              "MY_A_5_1": { expected: ["mustn't", "must not"], explanation: "Prohibition: you mustn't forget." },
              "MY_A_5_2": { expected: ["have"], explanation: "Do I have to go?" },
              "MY_A_5_3": { expected: ["had"], explanation: "Past obligation: I had to work late." },
              "MY_A_5_4": { expected: ["couldn't", "could not"], explanation: "Past inability: I couldn't do the shopping." },
              "MY_A_5_5": { expected: ["has"], explanation: "Present obligation (he): he has to work late." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the email with the Present Perfect or Past Simple form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            context: "Email from Dolly in Spain to Eva",
            example: "We ⁰'ve been (be) here for a week.",
            items: [
              {
                id: "MY_A_6_1",
                label: "1",
                before: "My cousin David",
                verb: "arrive",
                options: ["arrived", "has arrived"],
                after: "two days ago, so the house is full!"
              },
              {
                id: "MY_A_6_2",
                label: "2",
                before: "My sister and I",
                verb: "already / make",
                options: ["have already made", "already made"],
                after: "a lot of friends. Mum and Dad are having fun, too."
              },
              {
                id: "MY_A_6_3",
                label: "3",
                before: "They play golf every day. I",
                verb: "not try",
                options: ["haven't tried", "didn't try"],
                after: "playing it yet, but I'd like to."
              },
              {
                id: "MY_A_6_4",
                label: "4",
                before: "",
                verb: "you / ever / play",
                options: ["Have you ever played", "Did you ever play"],
                after: "it? My big brother"
              },
              {
                id: "MY_A_6_5",
                label: "5",
                before: "",
                verb: "leave",
                options: ["left", "has left"],
                after: "Spain yesterday because he's starting a new job on Monday."
              }
            ],
            answers: {
              "MY_A_6_1": { expected: ["arrived"], explanation: "Past Simple with two days ago: arrived." },
              "MY_A_6_2": { expected: ["have already made", "'ve already made", "already made"], explanation: "Present Perfect with already: have already made." },
              "MY_A_6_3": { expected: ["haven't tried", "have not tried"], explanation: "Present Perfect negative with yet: haven't tried." },
              "MY_A_6_4": { expected: ["have you ever played", "Have you ever played"], explanation: "Present Perfect question with ever: Have you ever played...?" },
              "MY_A_6_5": { expected: ["left"], explanation: "Past Simple with yesterday: left." }
            }
          }
        ]
      },

      listening: {
        id: "listening",
        title: "Listening",
        maxScore: 6,
        tasks: [
          {
            id: "task_7",
            number: 7,
            title: "Listen to Anne and Charlie and complete the sentences. Use one or two words or a number.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/track_10_mid_year.mp3",
            audioTitle: "Audio 10 • Mid-Year Test (Units 1–4) • Exercise 7",
            audioDesc: "Listen to Anne and Charlie talking about Uncle Jeff.",
            example: "Uncle Jeff is Charlie's mum's youngest brother.",
            items: [
              {
                id: "MY_A_7_1",
                label: "1",
                before: "In the photo Jeff is wearing a checked shirt and a",
                after: "."
              },
              {
                id: "MY_A_7_2",
                label: "2",
                before: "Charlie's hair is short and",
                after: "."
              },
              {
                id: "MY_A_7_3",
                label: "3",
                before: "Jeff",
                after: "his exams when he was at school."
              },
              {
                id: "MY_A_7_4",
                label: "4",
                before: "He changed when he was",
                after: "years old."
              },
              {
                id: "MY_A_7_5",
                label: "5",
                before: "One summer he worked in a",
                after: "."
              },
              {
                id: "MY_A_7_6",
                label: "6",
                before: "He became",
                after: "when he graduated."
              }
            ],
            answers: {
              "MY_A_7_1": { expected: ["striped scarf", "scarf", "a striped scarf"], explanation: "In the recording: 'Look at that striped scarf. Mum made it for him years ago.'" },
              "MY_A_7_2": { expected: ["spiky"], explanation: "In the recording: 'He's got short spiky hair, like you.'" },
              "MY_A_7_3": { expected: ["failed"], explanation: "In the recording: 'Mum says he failed his exams.'" },
              "MY_A_7_4": { expected: ["16", "sixteen"], explanation: "In the recording: 'Then, when he was 16 years old, he changed.'" },
              "MY_A_7_5": { expected: ["factory"], explanation: "In the recording: 'He got a job as a factory worker in the summer.'" },
              "MY_A_7_6": { expected: ["an engineer", "engineer"], explanation: "In the recording: 'he decided to be an engineer.'" }
            }
          }
        ]
      },

      reading: {
        id: "reading",
        title: "Reading",
        maxScore: 6,
        tasks: [
          {
            id: "task_9",
            number: 9,
            title: "Read the article about a young scriptwriter. Are the statements true (T), false (F) or the text doesn't say (DS)?",
            points: 6,
            type: "reading-tf-ds",
            passageTitle: "Ingrid Holt: From Computer Programmer to Scriptwriter",
            passage: `Ingrid Holt is a young British scriptwriter. Last week, I interviewed her at her new home in Los Angeles.

Ingrid was born in London and she grew up there too. When she graduated from university, she got a well-paid job as a computer programmer. People thought she was lucky, but Ingrid was bored. 'My job wasn't challenging enough. I wanted other things in my life,' she told me.

One evening, Ingrid was at the cinema with some friends. They were watching an action film, but Ingrid didn't like it. 'I can write a better film script than that,' she thought. That night, while she was getting ready to go to bed, she had an idea for a story.

In the beginning, Ingrid couldn't write well. Her first film script was terrible, but the next one was good. Ingrid decided to send it to a famous film director. 'I sent it as a joke!' she told me. 'But the director loved it and he invited me to Los Angeles for a meeting. A year later, he made the film and I moved to Los Angeles.'

The film, Max and Miss Jones, didn't win any prizes at film festivals, but lots of people liked it. Since then, Ingrid has written a few action films and a science fiction film. At the moment, she is writing a fantasy film. She hasn't finished it yet, but she hopes the film studio will like it. 'I love my job,' says Ingrid. 'One day, I want to direct a film as well. I'd love to do that!'`,
            example: "0 Ingrid Holt lives in Los Angeles. -> T",
            items: [
              { id: "MY_A_9_1", label: "1", statement: "She is from London.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_2", label: "2", statement: "She loved working as a computer programmer.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_3", label: "3", statement: "Ingrid's friends didn't like the action film.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_4", label: "4", statement: "Ingrid's second film script was better than her first.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_5", label: "5", statement: "Max and Miss Jones was quite popular.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_6", label: "6", statement: "Ingrid has directed some of her films.", options: ["T", "F", "DS"] }
            ],
            answers: {
              "MY_A_9_1": { expected: ["T"], explanation: "True: 'Ingrid was born in London and she grew up there too.'" },
              "MY_A_9_2": { expected: ["F"], explanation: "False: 'People thought she was lucky, but Ingrid was bored.'" },
              "MY_A_9_3": { expected: ["DS"], explanation: "Doesn't Say: The text does not mention whether her friends liked it." },
              "MY_A_9_4": { expected: ["T"], explanation: "True: 'Her first film script was terrible, but the next one was good.'" },
              "MY_A_9_5": { expected: ["T"], explanation: "True: 'lots of people liked it.'" },
              "MY_A_9_6": { expected: ["F"], explanation: "False: 'One day, I want to direct a film as well. I'd love to do that!'" }
            }
          }
        ]
      },

      communication: {
        id: "communication",
        title: "Communication",
        maxScore: 8,
        tasks: [
          {
            id: "task_8",
            number: 8,
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 8,
            type: "dialogue-box",
            wordBank: [
              "can I ask",
              "don't be mad",
              "how do I",
              "guess what happened",
              "it wasn't your fault",
              "no way",
              "so",
              "try not to",
              "why don't you"
            ],
            example: "0 A: Can I ask your advice? What should I wear? — B: What about wearing your jeans and a shirt?",
            usedInExample: ["can I ask"],
            dialogue: [
              {
                speaker: "1 A",
                parts: [{ before: "", gapId: "MY_A_8_1", label: "1", after: "last Friday!" }]
              },
              { speaker: "1 B", text: "Tell me all about it." },

              { speaker: "2 A", text: "Lucy lost all her money yesterday." },
              {
                speaker: "2 B",
                parts: [{ before: "", gapId: "MY_A_8_2", label: "2", after: "! What did she do?" }]
              },

              {
                speaker: "3 A",
                parts: [{ before: "", gapId: "MY_A_8_3", label: "3", after: "turn on the oven?" }]
              },
              { speaker: "3 B", text: "You press this button here." },

              { speaker: "4 A", text: "Oh dear, I'm really sorry I'm late." },
              {
                speaker: "4 B",
                parts: [{ before: "It's all right.", gapId: "MY_A_8_4", label: "4", after: "" }]
              },

              {
                speaker: "5 A",
                parts: [{ before: "", gapId: "MY_A_8_5", label: "5", after: "put on a tie?" }]
              },
              { speaker: "5 B", text: "That's not a good idea. I hate wearing ties." },

              { speaker: "6 A", text: "Freddie won £10,000 in a competition." },
              {
                speaker: "6 B",
                parts: [{ before: "", gapId: "MY_A_8_6", label: "6", after: "!" }]
              },

              {
                speaker: "7 A",
                parts: [{ before: "", gapId: "MY_A_8_7", label: "7", after: "break anything." }]
              },
              { speaker: "7 B", text: "Don't worry. I'm very careful." },

              {
                speaker: "8 A",
                parts: [{ before: "", gapId: "MY_A_8_8", label: "8", after: "at me. I didn't mean to lose your book." }]
              },
              { speaker: "8 B", text: "It doesn't matter. I can buy another one." }
            ],
            answers: {
              "MY_A_8_1": { expected: ["guess what happened", "Guess what happened"], explanation: "Starting story: 'Guess what happened last Friday!'" },
              "MY_A_8_2": { expected: ["no way", "No way", "so", "So"], explanation: "Disbelief: 'No way! What did she do?'" },
              "MY_A_8_3": { expected: ["how do I", "How do I"], explanation: "Asking instructions: 'How do I turn on the oven?'" },
              "MY_A_8_4": { expected: ["it wasn't your fault", "It wasn't your fault"], explanation: "Reassurance: 'It's all right. It wasn't your fault.'" },
              "MY_A_8_5": { expected: ["why don't you", "Why don't you"], explanation: "Suggestion: 'Why don't you put on a tie?'" },
              "MY_A_8_6": { expected: ["no way", "No way", "so", "So"], explanation: "Amazement: 'No way!'" },
              "MY_A_8_7": { expected: ["try not to", "Try not to"], explanation: "Warning: 'Try not to break anything.'" },
              "MY_A_8_8": { expected: ["don't be mad", "Don't be mad"], explanation: "Apology: 'Don't be mad at me.'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Mid-Year Test B — Units 1–4",
    totalPoints: 50,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["checked", "kind", "skirt", "tights", "tour guide", "wavy"],
            example: "Clare Taylor looks very smart today. She's wearing a plain ⁰skirt and a checked top.",
            usedInExample: ["skirt"],
            sentences: [
              {
                textBefore: "Clare Taylor looks very smart today. She's wearing a plain ⁰skirt and a",
                gapId: "MY_B_1_1",
                label: "1",
                textAfter: "top. She's also wearing black"
              },
              {
                textBefore: "",
                gapId: "MY_B_1_2",
                label: "2",
                textAfter: "and black boots. She has long,"
              },
              {
                textBefore: "",
                gapId: "MY_B_1_3",
                label: "3",
                textAfter: "brown hair and big brown eyes. Clare is very popular. She's"
              },
              {
                textBefore: "",
                gapId: "MY_B_1_4",
                label: "4",
                textAfter: "and generous. She's a"
              },
              {
                textBefore: "",
                gapId: "MY_B_1_5",
                label: "5",
                textAfter: "and she takes tourists around London."
              }
            ],
            answers: {
              "MY_B_1_1": { expected: ["checked"], explanation: "A pattern of squares is 'checked'." },
              "MY_B_1_2": { expected: ["tights"], explanation: "black tights and black boots." },
              "MY_B_1_3": { expected: ["wavy"], explanation: "long, wavy brown hair." },
              "MY_B_1_4": { expected: ["kind"], explanation: "kind and generous." },
              "MY_B_1_5": { expected: ["tour guide"], explanation: "a tour guide takes tourists around." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "I'd love to (meet) / win a famous person.",
            items: [
              {
                id: "MY_B_2_1",
                label: "1",
                before: "Please help your parents with the chores and",
                options: ["do", "make"],
                after: "the dishes."
              },
              {
                id: "MY_B_2_2",
                label: "2",
                before: "I can't go out tonight. I have to",
                options: ["complain", "revise"],
                after: "for a test."
              },
              {
                id: "MY_B_2_3",
                label: "3",
                before: "My family always",
                options: ["support", "train"],
                after: "me when I compete in a tennis match."
              },
              {
                id: "MY_B_2_4",
                label: "4",
                before: "When he was 70, he",
                options: ["graduated", "retired"],
                after: "and moved to a small village."
              },
              {
                id: "MY_B_2_5",
                label: "5",
                before: "He",
                options: ["got", "took"],
                after: "his exams and passed them all with a good mark."
              }
            ],
            answers: {
              "MY_B_2_1": { expected: ["do"], explanation: "Collocation: do the dishes." },
              "MY_B_2_2": { expected: ["revise"], explanation: "revise for a test." },
              "MY_B_2_3": { expected: ["support"], explanation: "support me in a match." },
              "MY_B_2_4": { expected: ["retired"], explanation: "retire from work at 70." },
              "MY_B_2_5": { expected: ["took"], explanation: "take an exam: took his exams." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences.",
            points: 5,
            type: "letter-hint",
            example: "Mark is a costume designer. He made the clothes for the actors in the film.",
            items: [
              {
                id: "MY_B_3_1",
                label: "1",
                before: "The children went to the cinema to see the new",
                displayHint: "F _ _ _ _ _ Y",
                after: "film about a princess and a dragon."
              },
              {
                id: "MY_B_3_2",
                label: "2",
                before: "There were hundreds of",
                displayHint: "E _ _ _ _ S",
                after: "in the historical film."
              },
              {
                id: "MY_B_3_3",
                label: "3",
                before: "You need a helmet, skates and a hockey",
                displayHint: "S _ _ _ K",
                after: "to play ice hockey."
              },
              {
                id: "MY_B_3_4",
                label: "4",
                before: "Kate and Mike did a",
                displayHint: "P _ _ _ _ _ _ _ E",
                after: "jump yesterday. It was very exciting."
              },
              {
                id: "MY_B_3_5",
                label: "5",
                before: "The famous chef wrote a",
                displayHint: "C _ _ _ _ _ K",
                after: "with a lot of delicious recipes."
              }
            ],
            answers: {
              "MY_B_3_1": { expected: ["fantasy"], explanation: "fantasy film." },
              "MY_B_3_2": { expected: ["extras"], explanation: "actors in crowd scenes: extras." },
              "MY_B_3_3": { expected: ["stick"], explanation: "ice hockey stick." },
              "MY_B_3_4": { expected: ["parachute"], explanation: "parachute jump." },
              "MY_B_3_5": { expected: ["cookbook"], explanation: "cookbook with recipes." }
            }
          }
        ]
      },

      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 15,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the Past Simple or Past Continuous form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "I was busy all afternoon yesterday. I was tidying (tidy) my room.",
            items: [
              {
                id: "MY_B_4_1",
                label: "1",
                before: "Vicky",
                verb: "make",
                options: ["was making", "made"],
                after: "some sandwiches when she heard the noise in the hall."
              },
              {
                id: "MY_B_4_2",
                label: "2",
                before: "The children were watching TV when their parents",
                verb: "come",
                options: ["came", "were coming"],
                after: "home."
              },
              {
                id: "MY_B_4_3",
                label: "3",
                before: "Dad",
                verb: "buy",
                options: ["bought", "was buying"],
                after: "a new car last week."
              },
              {
                id: "MY_B_4_4",
                label: "4",
                before: "While Joe",
                verb: "walk",
                options: ["was walking", "walked"],
                after: "on the beach, he saw a famous actor."
              },
              {
                id: "MY_B_4_5",
                label: "5",
                before: "I",
                verb: "not finish",
                options: ["didn't finish", "wasn't finishing"],
                after: "reading the book because it was boring."
              }
            ],
            answers: {
              "MY_B_4_1": { expected: ["was making"], explanation: "Past Continuous: Vicky was making sandwiches." },
              "MY_B_4_2": { expected: ["came"], explanation: "Past Simple interrupting action: came home." },
              "MY_B_4_3": { expected: ["bought"], explanation: "Past Simple: bought a new car last week." },
              "MY_B_4_4": { expected: ["was walking"], explanation: "Past Continuous after While: While Joe was walking." },
              "MY_B_4_5": { expected: ["didn't finish", "did not finish"], explanation: "Past Simple negative: didn't finish." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["couldn't", "do", "have to", "had", "must", "mustn't"],
            example: "Dad: Kids, I'm leaving! Billy, you ⁰must feed the dogs this afternoon.",
            usedInExample: ["must"],
            dialogue: [
              {
                speaker: "Dad",
                parts: [
                  { before: "Kids, I'm leaving! Billy, you ⁰must feed the dogs this afternoon, but you don't", gapId: "MY_B_5_1", label: "1", after: "water the garden. It rained last night." }
                ]
              },
              { speaker: "Billy", text: "OK, Dad." },
              {
                speaker: "Dad",
                parts: [
                  { before: "Barbara, you", gapId: "MY_B_5_2", label: "2", after: "play computer games all afternoon. Do your homework!" }
                ]
              },
              {
                speaker: "Barbara",
                parts: [
                  { before: "", gapId: "MY_B_5_3", label: "3", after: "I have to stay at home after I finish my homework?" }
                ]
              },
              { speaker: "Dad", text: "Yes, you do." },
              {
                speaker: "Barbara",
                parts: [
                  { before: "But Dad, I", gapId: "MY_B_5_4", label: "4", after: "to stay at home yesterday. I" },
                  { before: "", gapId: "MY_B_5_5", label: "5", after: "hang out with my friends!" }
                ]
              },
              { speaker: "Dad", text: "You can hang out with them tomorrow. Bye!" }
            ],
            answers: {
              "MY_B_5_1": { expected: ["have to"], explanation: "Lack of obligation: you don't have to water..." },
              "MY_B_5_2": { expected: ["mustn't", "must not"], explanation: "Prohibition: you mustn't play..." },
              "MY_B_5_3": { expected: ["do", "Do"], explanation: "Question: Do I have to stay...?" },
              "MY_B_5_4": { expected: ["had"], explanation: "Past obligation: I had to stay at home..." },
              "MY_B_5_5": { expected: ["couldn't", "could not"], explanation: "Past inability: I couldn't hang out..." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the email with the Present Perfect or Past Simple form of the verbs in brackets.",
            points: 5,
            type: "grammar-gap",
            context: "Email from Ricky in Spain to Mike",
            example: "We ⁰'ve been (be) here since Friday.",
            items: [
              {
                id: "MY_B_6_1",
                label: "1",
                before: "My brother and I",
                verb: "not make",
                options: ["haven't made", "didn't make"],
                after: "any friends yet. Luckily, our cousin Maria"
              },
              {
                id: "MY_B_6_2",
                label: "2",
                before: "",
                verb: "send",
                options: ["sent", "has sent"],
                after: "me a text an hour ago. She's coming tomorrow. Mum and Dad"
              },
              {
                id: "MY_B_6_3",
                label: "3",
                before: "",
                verb: "already / see",
                options: ["have already seen", "already saw"],
                after: "some nice places here. And yesterday they"
              },
              {
                id: "MY_B_6_4",
                label: "4",
                before: "",
                verb: "take",
                options: ["took", "have taken"],
                after: "a bus to Tarragona. I prefer the beach, but I also want to go windsurfing."
              },
              {
                id: "MY_B_6_5",
                label: "5",
                before: "",
                verb: "you / ever / do",
                options: ["Have you ever done", "Did you ever do"],
                after: "any water sports?"
              }
            ],
            answers: {
              "MY_B_6_1": { expected: ["haven't made", "have not made"], explanation: "Present Perfect negative with yet: haven't made." },
              "MY_B_6_2": { expected: ["sent"], explanation: "Past Simple with an hour ago: sent." },
              "MY_B_6_3": { expected: ["have already seen", "'ve already seen", "already saw"], explanation: "Present Perfect with already: have already seen." },
              "MY_B_6_4": { expected: ["took"], explanation: "Past Simple with yesterday: took." },
              "MY_B_6_5": { expected: ["have you ever done", "Have you ever done"], explanation: "Present Perfect question with ever: Have you ever done...?" }
            }
          }
        ]
      },

      listening: {
        id: "listening",
        title: "Listening",
        maxScore: 6,
        tasks: [
          {
            id: "task_7",
            number: 7,
            title: "Listen to Anne and Charlie and complete the sentences. Use one or two words or a number.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/track_10_mid_year.mp3",
            audioTitle: "Audio 10 • Mid-Year Test (Units 1–4) • Exercise 7",
            audioDesc: "Listen to Anne and Charlie talking about Uncle Jeff.",
            example: "Uncle Jeff is Charlie's mum's youngest brother.",
            items: [
              {
                id: "MY_B_7_1",
                label: "1",
                before: "Charlie's mum gave Jeff a",
                after: "for his birthday."
              },
              {
                id: "MY_B_7_2",
                label: "2",
                before: "Jeff had long",
                after: "hair when he was at school."
              },
              {
                id: "MY_B_7_3",
                label: "3",
                before: "Jeff was a",
                after: "student at school."
              },
              {
                id: "MY_B_7_4",
                label: "4",
                before: "When he was",
                after: ", he changed."
              },
              {
                id: "MY_B_7_5",
                label: "5",
                before: "He fixed machines in a",
                after: "one summer."
              },
              {
                id: "MY_B_7_6",
                label: "6",
                before: "Uncle Jeff went to Canada",
                after: "ago."
              }
            ],
            answers: {
              "MY_B_7_1": { expected: ["striped scarf", "scarf", "a striped scarf"], explanation: "In recording: 'Mum made it for him years ago. It was a birthday present.'" },
              "MY_B_7_2": { expected: ["straight", "and straight"], explanation: "In recording: 'when he was at school, it was long and straight.'" },
              "MY_B_7_3": { expected: ["lazy"], explanation: "In recording: 'And he was lazy at school.'" },
              "MY_B_7_4": { expected: ["16", "sixteen"], explanation: "In recording: 'Then, when he was 16 years old, he changed.'" },
              "MY_B_7_5": { expected: ["factory"], explanation: "In recording: 'He got a job as a factory worker in the summer. While he was working there, he learned to fix machines.'" },
              "MY_B_7_6": { expected: ["two years", "2 years"], explanation: "In recording: 'He's been there for two years.'" }
            }
          }
        ]
      },

      reading: {
        id: "reading",
        title: "Reading",
        maxScore: 6,
        tasks: [
          {
            id: "task_9",
            number: 9,
            title: "Read the article about a young scriptwriter. Are the statements true (T), false (F) or the text doesn't say (DS)?",
            points: 6,
            type: "reading-tf-ds",
            passageTitle: "Ingrid Holt: From Computer Programmer to Scriptwriter",
            passage: `Ingrid Holt is a young British scriptwriter. Last week, I interviewed her at her new home in Los Angeles.

Ingrid was born in London and she grew up there too. When she graduated from university, she got a well-paid job as a computer programmer. People thought she was lucky, but Ingrid was bored. 'My job wasn't challenging enough. I wanted other things in my life,' she told me.

One evening, Ingrid was at the cinema with some friends. They were watching an action film, but Ingrid didn't like it. 'I can write a better film script than that,' she thought. That night, while she was getting ready to go to bed, she had an idea for a story.

In the beginning, Ingrid couldn't write well. Her first film script was terrible, but the next one was good. Ingrid decided to send it to a famous film director. 'I sent it as a joke!' she told me. 'But the director loved it and he invited me to Los Angeles for a meeting. A year later, he made the film and I moved to Los Angeles.'

The film, Max and Miss Jones, didn't win any prizes at film festivals, but lots of people liked it. Since then, Ingrid has written a few action films and a science fiction film. At the moment, she is writing a fantasy film. She hasn't finished it yet, but she hopes the film studio will like it. 'I love my job,' says Ingrid. 'One day, I want to direct a film as well. I'd love to do that!'`,
            example: "0 Ingrid Holt is American. -> F",
            items: [
              { id: "MY_B_9_1", label: "1", statement: "She went to university in London.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_2", label: "2", statement: "She wanted her life to be different.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_3", label: "3", statement: "She had an idea for her first story while she was watching a film.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_4", label: "4", statement: "Ingrid's second film script was terrible.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_5", label: "5", statement: "Max and Miss Jones was an action film.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_6", label: "6", statement: "Ingrid has finished writing a script for a fantasy film.", options: ["T", "F", "DS"] }
            ],
            answers: {
              "MY_B_9_1": { expected: ["DS"], explanation: "Doesn't Say: Where she went to university is not mentioned." },
              "MY_B_9_2": { expected: ["T"], explanation: "True: 'I wanted other things in my life, she told me.'" },
              "MY_B_9_3": { expected: ["F"], explanation: "False: She had the idea while getting ready for bed, not while watching the film." },
              "MY_B_9_4": { expected: ["F"], explanation: "False: 'Her first film script was terrible, but the next one was good.'" },
              "MY_B_9_5": { expected: ["DS"], explanation: "Doesn't Say: The text doesn't say what genre Max and Miss Jones was." },
              "MY_B_9_6": { expected: ["F"], explanation: "False: 'She hasn't finished it yet.'" }
            }
          }
        ]
      },

      communication: {
        id: "communication",
        title: "Communication",
        maxScore: 8,
        tasks: [
          {
            id: "task_8",
            number: 8,
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 8,
            type: "dialogue-box",
            wordBank: [
              "can I ask",
              "it doesn't matter",
              "how do I",
              "guess what happened",
              "in my opinion",
              "lucky",
              "don't be mad",
              "no way",
              "why don't you"
            ],
            example: "0 A: Can I ask your advice? What should I wear? — B: What about wearing your jeans and a shirt?",
            usedInExample: ["can I ask"],
            dialogue: [
              { speaker: "1 A", text: "Dave passed all his exams with an A!" },
              {
                speaker: "1 B",
                parts: [{ before: "", gapId: "MY_B_8_1", label: "1", after: "! How did he do that?" }]
              },

              { speaker: "2 A", text: "The coach chose Anne for the basketball team." },
              {
                speaker: "2 B",
                parts: [{ before: "", gapId: "MY_B_8_2", label: "2", after: "her!" }]
              },

              { speaker: "3 A", text: "I broke your phone." },
              {
                speaker: "3 B",
                parts: [{ before: "Don't worry about it. It was very old.", gapId: "MY_B_8_3", label: "3", after: "" }]
              },

              {
                speaker: "4 A",
                parts: [{ before: "", gapId: "MY_B_8_4", label: "4", after: "on Friday!" }]
              },
              { speaker: "4 B", text: "Sit down and tell me all about it." },

              {
                speaker: "5 A",
                parts: [{ before: "", gapId: "MY_B_8_5", label: "5", after: "use this machine?" }]
              },
              { speaker: "5 B", text: "First, plug it in. Then press this button." },

              { speaker: "6 A", text: "I'm really sorry. I didn't mean to do that." },
              {
                speaker: "6 B",
                parts: [{ before: "", gapId: "MY_B_8_6", label: "6", after: "" }]
              },

              {
                speaker: "7 A",
                parts: [{ before: "", gapId: "MY_B_8_7", label: "7", after: "go to bed early tonight? You look tired." }]
              },
              { speaker: "7 B", text: "That's a good idea." },

              {
                speaker: "8 A",
                parts: [{ before: "", gapId: "MY_B_8_8", label: "8", after: ", you shouldn't borrow another person's laptop." }]
              },
              { speaker: "8 B", text: "You're right." }
            ],
            answers: {
              "MY_B_8_1": { expected: ["no way", "No way"], explanation: "Surprise: 'No way! How did he do that?'" },
              "MY_B_8_2": { expected: ["lucky", "Lucky"], explanation: "Happiness for someone: 'Lucky her!'" },
              "MY_B_8_3": { expected: ["it doesn't matter", "It doesn't matter"], explanation: "Forgiving: 'It doesn't matter.'" },
              "MY_B_8_4": { expected: ["guess what happened", "Guess what happened"], explanation: "Sharing news: 'Guess what happened on Friday!'" },
              "MY_B_8_5": { expected: ["how do I", "How do I"], explanation: "Instructions: 'How do I use this machine?'" },
              "MY_B_8_6": { expected: ["don't be mad", "Don't be mad"], explanation: "Reassurance: 'Don't be mad.'" },
              "MY_B_8_7": { expected: ["why don't you", "Why don't you"], explanation: "Suggestion: 'Why don't you go to bed early tonight?'" },
              "MY_B_8_8": { expected: ["in my opinion", "In my opinion"], explanation: "Expressing opinion: 'In my opinion, you shouldn't...'" }
            }
          }
        ]
      }
    }
  }
};
