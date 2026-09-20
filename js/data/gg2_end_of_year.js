/**
 * Go Getter 2 - End-of-Year Test (Units 1-8)
 * Comprehensive Revision Test with Audio Track 11
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_END_OF_YEAR_DATA = {
  id: "end_of_year",
  courseId: "gogetter2",
  number: 10,
  title: "End-of-Year Test (Units 1–8)",
  description: "Comprehensive end-of-year assessment covering Units 1–8: Vocabulary (food, transport, places, technology, jobs, activities), Grammar (comparatives/superlatives, Past Simple, be going to, some/any, much/many), Listening (Track 11), Communication & Reading comprehension.",
  points: 50,
  audioTrack: "assets/audio/gg2_track_11_end_of_year.mp3",

  variantA: {
    id: "variantA",
    title: "End-of-Year Test A — Units 1–8",
    totalPoints: 50,
    audioTrack: "assets/audio/gg2_track_11_end_of_year.mp3",
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the odd one out.",
            points: 5,
            type: "circle-choice",
            example: "0 China / Turkey / Italian / France -> Italian",
            items: [
              { id: "A_1_1", label: "1", before: "Odd one out:", options: ["milk", "biscuits", "pancakes", "rice"], after: "" },
              { id: "A_1_2", label: "2", before: "Odd one out:", options: ["speakers", "maps", "headphones", "screens"], after: "" },
              { id: "A_1_3", label: "3", before: "Odd one out:", options: ["vet", "doctor", "nurse", "builder"], after: "" },
              { id: "A_1_4", label: "4", before: "Odd one out:", options: ["plane", "tram", "underground", "torch"], after: "" },
              { id: "A_1_5", label: "5", before: "Odd one out:", options: ["canteen", "museum", "playground", "gym"], after: "" }
            ],
            answers: {
              "A_1_1": { expected: ["milk"], explanation: "Milk is a drink, the others are solid food." },
              "A_1_2": { expected: ["maps"], explanation: "Maps are paper items, the others are computer devices." },
              "A_1_3": { expected: ["builder"], explanation: "Builder is not a healthcare job." },
              "A_1_4": { expected: ["torch"], explanation: "Torch is equipment, not transport." },
              "A_1_5": { expected: ["museum"], explanation: "Museum is not a school facility." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 You need a tent / souvenir / bin and a sleeping bag when you go camping. -> tent",
            items: [
              { id: "A_2_1", label: "1", before: "Dave", options: ["makes", "has", "does"], after: "the shopping at the supermarket every Saturday." },
              { id: "A_2_2", label: "2", before: "The train", options: ["takes", "gets", "leaves"], after: "the station at five to seven and arrives in London at twenty past ten." },
              { id: "A_2_3", label: "3", before: "She is going to be a police", options: ["worker", "officer", "assistant"], after: "when she finishes school." },
              { id: "A_2_4", label: "4", before: "Are you going to look", options: ["for", "after", "about"], after: "your little sister this evening?" },
              { id: "A_2_5", label: "5", before: "I washed the", options: ["dirty", "quiet", "low"], after: "clothes yesterday so they're clean now." }
            ],
            answers: {
              "A_2_1": { expected: ["does"], explanation: "Collocation: does the shopping." },
              "A_2_2": { expected: ["leaves"], explanation: "Leaves the station." },
              "A_2_3": { expected: ["officer"], explanation: "A police officer." },
              "A_2_4": { expected: ["after"], explanation: "Look after someone." },
              "A_2_5": { expected: ["dirty"], explanation: "Washed dirty clothes." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the blog with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["concerts", "desert", "easy", "spend", "surf", "visit"],
            example: "0 beautiful",
            usedInExample: ["beautiful"],
            storyText: "Life in Australia by Bruce McIntyre\nHi! I'm Bruce and this blog is about my life on a sheep farm in Australia. Australians are friendly and Australia is a beautiful country.",
            sentences: [
              { id: "A_3_1", num: 1, before: "My family and I live far from town, near the", after: ". It's hot here and there aren't any rivers or trees." },
              { id: "A_3_2", num: 2, before: "We don't often eat in restaurants,", after: "museums or go to" },
              { id: "A_3_3", num: 3, before: "", after: ". We use computers to chat with our friends online" },
              { id: "A_3_4", num: 4, before: "and to", after: "the Internet." },
              { id: "A_3_5", num: 5, before: "Life isn't", after: "here. It's difficult but we love it." }
            ],
            answers: {
              "A_3_1": { expected: ["desert"], explanation: "Near the desert." },
              "A_3_2": { expected: ["visit"], explanation: "Visit museums." },
              "A_3_3": { expected: ["concerts"], explanation: "Go to concerts." },
              "A_3_4": { expected: ["surf"], explanation: "Surf the Internet." },
              "A_3_5": { expected: ["easy"], explanation: "Life isn't easy." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Those / This animals are very dangerous! -> Those",
            items: [
              { id: "A_4_1", label: "1", before: "How", options: ["much", "many"], after: "eggs are there in the fridge?" },
              { id: "A_4_2", label: "2", before: "I think the pink flowers are", options: ["prettier", "prettiest"], after: "than the white flowers." },
              { id: "A_4_3", label: "3", before: "Geraldine sent me an email", options: ["last", "tomorrow"], after: "night." },
              { id: "A_4_4", label: "4", before: "In my opinion, 'Planet Earth II' is the", options: ["more", "most"], after: "exciting programme on TV." },
              { id: "A_4_5", label: "5", before: "There weren't", options: ["some", "any"], after: "cafés here in 2001." }
            ],
            answers: {
              "A_4_1": { expected: ["many"], explanation: "How many eggs (countable)." },
              "A_4_2": { expected: ["prettier"], explanation: "Prettier than (comparative)." },
              "A_4_3": { expected: ["last"], explanation: "Last night (past)." },
              "A_4_4": { expected: ["most"], explanation: "The most exciting (superlative)." },
              "A_4_5": { expected: ["any"], explanation: "There weren't any (negative)." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the correct form of the verbs in the box.",
            points: 5,
            type: "fill-gaps",
            example: "0 'm having (have)",
            storyText: "Hi Natalie!\nI 'm having a lovely time at the moment in Spain.",
            items: [
              { id: "A_5_1", label: "1", textBefore: "Mum and Dad", textAfter: "(enjoy) the holiday too." },
              { id: "A_5_2", label: "2", textBefore: "And Dad", textAfter: "(go) swimming before breakfast every day!" },
              { id: "A_5_3", label: "3", textBefore: "Yesterday morning we", textAfter: "(have) a picnic in the mountains. It was fun." },
              { id: "A_5_4", label: "4", textBefore: "Then in the afternoon we", textAfter: "(eat) some typical Spanish food, paella, in a restaurant." },
              { id: "A_5_5", label: "5", textBefore: "Tomorrow we", textAfter: "(not do) anything exciting.\nSee you soon! Zoe" }
            ],
            answers: {
              "A_5_1": { expected: ["are enjoying"], explanation: "Present Continuous: are enjoying." },
              "A_5_2": { expected: ["goes"], explanation: "Present Simple habit: goes." },
              "A_5_3": { expected: ["had"], explanation: "Past Simple: had." },
              "A_5_4": { expected: ["ate"], explanation: "Past Simple: ate." },
              "A_5_5": { expected: ["aren't going to do", "are not going to do"], explanation: "Future: aren't going to do." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the questions.",
            points: 5,
            type: "fill-gaps",
            example: "V: Hi, Ellie. What are you doing? / E: Hi Victor. I'm tidying my room. And Ricky is cooking pasta for lunch.",
            items: [
              { id: "A_6_1", label: "1", textBefore: "V:", textAfter: "lunch every day?\nE: No, he doesn't cook lunch every day." },
              { id: "A_6_2", label: "2", textBefore: "V: Where", textAfter: "yesterday?\nE: I was at the football stadium yesterday. There was a football match." },
              { id: "A_6_3", label: "3", textBefore: "V:", textAfter: "the match?\nE: No, my team didn't win the match. The score was 1–0." },
              { id: "A_6_4", label: "4", textBefore: "V: What", textAfter: "on TV last night?\nE: I watched a programme about wild animals." },
              { id: "A_6_5", label: "5", textBefore: "V:", textAfter: "for the English test tomorrow?\nE: No, I'm not going to study for the English test tomorrow." }
            ],
            answers: {
              "A_6_1": { expected: ["Does Ricky cook", "Does he cook"], explanation: "Does Ricky/he cook lunch every day?" },
              "A_6_2": { expected: ["were you"], explanation: "Where were you yesterday?" },
              "A_6_3": { expected: ["Did your team win", "Did they win", "Did you win"], explanation: "Did your team win the match?" },
              "A_6_4": { expected: ["did you watch"], explanation: "What did you watch on TV last night?" },
              "A_6_5": { expected: ["Are you going to study"], explanation: "Are you going to study for the English test tomorrow?" }
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
            title: "Listen and answer the questions. Write short answers. (Track 11)",
            points: 6,
            type: "fill-gaps",
            audioTrack: "assets/audio/gg2_track_11_end_of_year.mp3",
            example: "0 What day did Maria call Jules? — last Friday",
            items: [
              { id: "A_7_1", label: "1", textBefore: "What time did Maria call Jules?", textAfter: "" },
              { id: "A_7_2", label: "2", textBefore: "What sport does Jules do every Friday?", textAfter: "" },
              { id: "A_7_3", label: "3", textBefore: "How many hours was Jules at Bobby's house?", textAfter: "" },
              { id: "A_7_4", label: "4", textBefore: "What was Jules worried about?", textAfter: "" },
              { id: "A_7_5", label: "5", textBefore: "How did Jules go home from Bobby's house?", textAfter: "" },
              { id: "A_7_6", label: "6", textBefore: "What date is the party?", textAfter: "" }
            ],
            answers: {
              "A_7_1": { expected: ["at three o'clock", "three o'clock", "3 o'clock", "at three", "3:00"], explanation: "I think I called at three o'clock." },
              "A_7_2": { expected: ["karate"], explanation: "I go there every Friday and I do karate." },
              "A_7_3": { expected: ["four", "4", "four hours", "4 hours"], explanation: "I was there from four to eight o'clock." },
              "A_7_4": { expected: ["his Science exam", "his science exam", "Science exam", "science exam", "his exam"], explanation: "I was worried about my Science exam." },
              "A_7_5": { expected: ["by car", "Bobby's mum took him in the car", "Bobby's mum took him", "in a car"], explanation: "Bobby's mum took me in her car." },
              "A_7_6": { expected: ["22nd February", "the twenty-second of February", "twenty-second of February", "22 February", "the 22nd of February"], explanation: "On the twenty-second of February." }
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
            title: "Circle the correct answer.",
            points: 8,
            type: "circle-choice",
            example: "0 Would you like anything to drink? -> b Yes, please.",
            items: [
              { id: "A_8_1", label: "1", before: "A: Hello, it's Tom here. Can I speak to Cleo, please?\nB:", options: ["I'm afraid she's out.", "You can speak."], after: "" },
              { id: "A_8_2", label: "2", before: "A: What do you think of jazz?\nB:", options: ["I like listening to music.", "In my opinion, it's the best music."], after: "" },
              { id: "A_8_3", label: "3", before: "A: Excuse me, how can I get to the library?\nB:", options: ["You can get on the train.", "Go straight on and turn left."], after: "" },
              { id: "A_8_4", label: "4", before: "A: Can I borrow your calculator, please?\nB:", options: ["Sure, no problem.", "Yes, I can."], after: "" },
              { id: "A_8_5", label: "5", before: "A: I'd like a ticket to the zoo, please.\nB:", options: ["They're here.", "It's six pounds, please."], after: "" },
              { id: "A_8_6", label: "6", before: "A: What time does the bus leave?\nB:", options: ["At ten to six.", "It's seven o'clock."], after: "" },
              { id: "A_8_7", label: "7", before: "A: Are you busy next Friday afternoon? I've got tickets for a concert.\nB:", options: ["No, I can't.", "That sounds great."], after: "" },
              { id: "A_8_8", label: "8", before: "A: Where shall we meet?\nB:", options: ["Let's meet at eight o'clock.", "Let's meet outside the bank."], after: "" }
            ],
            answers: {
              "A_8_1": { expected: ["I'm afraid she's out.", "I'm afraid she's out", "a"], explanation: "I'm afraid she's out." },
              "A_8_2": { expected: ["In my opinion, it's the best music.", "In my opinion, it's the best music", "b"], explanation: "In my opinion, it's the best music." },
              "A_8_3": { expected: ["Go straight on and turn left.", "Go straight on and turn left", "b"], explanation: "Go straight on and turn left." },
              "A_8_4": { expected: ["Sure, no problem.", "Sure, no problem", "a"], explanation: "Sure, no problem." },
              "A_8_5": { expected: ["It's six pounds, please.", "It's six pounds, please", "b"], explanation: "It's six pounds, please." },
              "A_8_6": { expected: ["At ten to six.", "At ten to six", "a"], explanation: "At ten to six." },
              "A_8_7": { expected: ["That sounds great.", "That sounds great", "b"], explanation: "That sounds great." },
              "A_8_8": { expected: ["Let's meet outside the bank.", "Let's meet outside the bank", "b"], explanation: "Let's meet outside the bank." }
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
            title: "Read the text and write T (true), F (false) or DS (doesn't say).",
            points: 6,
            type: "reading-tf-ds",
            passageTitle: "My Family by Lucilla Nucci",
            passage: "New York is an exciting city and people come here from all over the world. This is nothing new. In the past people came from Ireland, Germany, Sweden, Ukraine, Russia, Poland and a lot of other countries.\n\nMy grandfather's parents came to New York from Italy in 1923. Grandad's father, Giuseppe, didn't have any money and he didn't know any people in the USA. He was a builder and he worked very hard. At the weekend he painted people's houses. Grandad's mother, Francesca, didn't work but she looked after their children.\n\nRoberto became a doctor. Cecilia was a fantastic singer and she also played the piano. Daniella had a restaurant and it was famous in New York. People loved her food. Antonio didn't like working indoors. He wanted to be a farmer so he left the city and went to California. He bought a farm there with fruit trees.\n\nMy mother and father work on the farm today. My sister and I love this place. But next month we are going to fly to New York. We still have family there and we are going to spend the summer with them.",
            example: "0 People went to New York from six countries. -> F",
            items: [
              { id: "A_9_1", label: "1", statement: "Lucilla's grandfather came to New York in 1923.", options: ["T", "F", "DS"] },
              { id: "A_9_2", label: "2", statement: "Giuseppe and Francesca had four children.", options: ["T", "F", "DS"] },
              { id: "A_9_3", label: "3", statement: "Roberto was Giuseppe and Francesca's oldest child.", options: ["T", "F", "DS"] },
              { id: "A_9_4", label: "4", statement: "Daniella's restaurant was very good.", options: ["T", "F", "DS"] },
              { id: "A_9_5", label: "5", statement: "Antonio's farm had orange trees.", options: ["T", "F", "DS"] },
              { id: "A_9_6", label: "6", statement: "Lucilla and her sister live in New York.", options: ["T", "F", "DS"] }
            ],
            answers: {
              "A_9_1": { expected: ["F"], explanation: "His parents came to New York in 1923." },
              "A_9_2": { expected: ["T"], explanation: "Roberto, Cecilia, Daniella, and Antonio = four children." },
              "A_9_3": { expected: ["DS"], explanation: "The text does not mention who was oldest." },
              "A_9_4": { expected: ["T"], explanation: "It was famous and people loved her food." },
              "A_9_5": { expected: ["DS"], explanation: "The text only says 'fruit trees'." },
              "A_9_6": { expected: ["F"], explanation: "They live on the farm in California." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "End-of-Year Test B — Units 1–8",
    totalPoints: 50,
    audioTrack: "assets/audio/gg2_track_11_end_of_year.mp3",
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the odd one out.",
            points: 5,
            type: "circle-choice",
            example: "0 China / Turkey / Italian / France -> Italian",
            items: [
              { id: "B_1_1", label: "1", before: "Odd one out:", options: ["cereal", "water", "pasta", "flour"], after: "" },
              { id: "B_1_2", label: "2", before: "Odd one out:", options: ["scissors", "printers", "keyboards", "screens"], after: "" },
              { id: "B_1_3", label: "3", before: "Odd one out:", options: ["nurse", "doctor", "pilot", "vet"], after: "" },
              { id: "B_1_4", label: "4", before: "Odd one out:", options: ["rock", "reggae", "rap", "tram"], after: "" },
              { id: "B_1_5", label: "5", before: "Odd one out:", options: ["hall", "hotel", "gym", "playground"], after: "" }
            ],
            answers: {
              "B_1_1": { expected: ["water"], explanation: "Water is a liquid, the others are dry foods." },
              "B_1_2": { expected: ["scissors"], explanation: "Scissors are stationery, the others are computer accessories." },
              "B_1_3": { expected: ["pilot"], explanation: "Pilot is not a healthcare job." },
              "B_1_4": { expected: ["tram"], explanation: "Tram is transport, the others are music." },
              "B_1_5": { expected: ["hotel"], explanation: "Hotel is holiday accommodation, not school facilities." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 You need a tent / souvenir / bin and a sleeping bag when you go camping. -> tent",
            items: [
              { id: "B_2_1", label: "1", before: "Mandy is a shop", options: ["officer", "worker", "assistant"], after: "in an expensive clothes shop." },
              { id: "B_2_2", label: "2", before: "I washed the dirty dishes this morning so they're", options: ["clean", "low", "quiet"], after: "now." },
              { id: "B_2_3", label: "3", before: "Kate always", options: ["has", "makes", "does"], after: "the beds in the morning." },
              { id: "B_2_4", label: "4", before: "The train", options: ["gets", "leaves", "takes"], after: "the station at half past and arrives here at nine." },
              { id: "B_2_5", label: "5", before: "I am going to look", options: ["in", "about", "after"], after: "my little brother this evening." }
            ],
            answers: {
              "B_2_1": { expected: ["assistant"], explanation: "A shop assistant." },
              "B_2_2": { expected: ["clean"], explanation: "Dishes are clean." },
              "B_2_3": { expected: ["makes"], explanation: "Makes the beds." },
              "B_2_4": { expected: ["leaves"], explanation: "Leaves the station." },
              "B_2_5": { expected: ["after"], explanation: "Look after someone." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the blog with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["difficult", "forest", "hotels", "online", "plays", "visit"],
            example: "0 beautiful",
            usedInExample: ["beautiful"],
            storyText: "Life in Australia by Steve Loach\nHi! I'm Steve and this blog is about my life on a sheep farm in Australia. Australians are friendly and Australia is a beautiful country.",
            sentences: [
              { id: "B_3_1", num: 1, before: "My family and I live far from town, near a", after: ". There's a river near our farm and a lot of trees." },
              { id: "B_3_2", num: 2, before: "We don't often eat in restaurants, go to see", after: "at the theatre" },
              { id: "B_3_3", num: 3, before: "or", after: "museums. We use computers to chat with our friends" },
              { id: "B_3_4", num: 4, before: "", after: "and to surf the Internet." },
              { id: "B_3_5", num: 5, before: "Life isn't easy here. It's", after: "but we love it." }
            ],
            answers: {
              "B_3_1": { expected: ["forest"], explanation: "Near a forest." },
              "B_3_2": { expected: ["plays"], explanation: "See plays at the theatre." },
              "B_3_3": { expected: ["visit"], explanation: "Visit museums." },
              "B_3_4": { expected: ["online"], explanation: "Chat online." },
              "B_3_5": { expected: ["difficult"], explanation: "It's difficult." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Those / This animals are very dangerous! -> Those",
            items: [
              { id: "B_4_1", label: "1", before: "I think 'Planet Earth II' is the", options: ["more", "most"], after: "interesting programme on TV." },
              { id: "B_4_2", label: "2", before: "Howard wrote a lot of emails", options: ["last", "tomorrow"], after: "night." },
              { id: "B_4_3", label: "3", before: "There is", options: ["some", "any"], after: "cheese in the fridge so we can make sandwiches." },
              { id: "B_4_4", label: "4", before: "How", options: ["much", "many"], after: "milk is there in the kitchen?" },
              { id: "B_4_5", label: "5", before: "Mount Everest is", options: ["higher", "highest"], after: "than Mont Blanc." }
            ],
            answers: {
              "B_4_1": { expected: ["most"], explanation: "The most interesting (superlative)." },
              "B_4_2": { expected: ["last"], explanation: "Last night (past)." },
              "B_4_3": { expected: ["some"], explanation: "Some cheese (affirmative)." },
              "B_4_4": { expected: ["much"], explanation: "How much milk (uncountable)." },
              "B_4_5": { expected: ["higher"], explanation: "Higher than (comparative)." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the correct form of the verbs in the box.",
            points: 5,
            type: "fill-gaps",
            example: "0 'm having (have)",
            storyText: "Hi Bruce!\nI 'm having a fantastic time at the moment in Croatia.",
            items: [
              { id: "B_5_1", label: "1", textBefore: "Mum and Dad", textAfter: "(enjoy) the holiday too." },
              { id: "B_5_2", label: "2", textBefore: "And Mum", textAfter: "(go) running before breakfast every day!" },
              { id: "B_5_3", label: "3", textBefore: "Yesterday we", textAfter: "(meet) some friends in Dubrovnik. We went sightseeing" },
              { id: "B_5_4", label: "4", textBefore: "and", textAfter: "(have) lots of fun together." },
              { id: "B_5_5", label: "5", textBefore: "Tomorrow we", textAfter: "(not do) anything exciting.\nSee you soon! Harry" }
            ],
            answers: {
              "B_5_1": { expected: ["are enjoying"], explanation: "Present Continuous: are enjoying." },
              "B_5_2": { expected: ["goes"], explanation: "Present Simple habit: goes." },
              "B_5_3": { expected: ["met"], explanation: "Past Simple: met." },
              "B_5_4": { expected: ["had"], explanation: "Past Simple: had." },
              "B_5_5": { expected: ["aren't going to do", "are not going to do"], explanation: "Future: aren't going to do." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the questions.",
            points: 5,
            type: "fill-gaps",
            example: "A: Hi, Damian. What are you doing? / D: Hi, Alicia. I'm tidying my room. And Priscilla is cooking pasta for dinner.",
            items: [
              { id: "B_6_1", label: "1", textBefore: "A:", textAfter: "dinner every evening?\nD: Yes, she cooks dinner every evening." },
              { id: "B_6_2", label: "2", textBefore: "A: What", textAfter: "on TV last night?\nD: We watched a programme about wild animals." },
              { id: "B_6_3", label: "3", textBefore: "A: Where", textAfter: "last Saturday?\nD: I was at the sports centre last Saturday. There was a basketball match." },
              { id: "B_6_4", label: "4", textBefore: "A:", textAfter: "the match?\nD: No, my team didn't win the match. The score was 78–69." },
              { id: "B_6_5", label: "5", textBefore: "A:", textAfter: "for the Maths test tomorrow?\nD: No, I'm not going to study for the Maths test tomorrow." }
            ],
            answers: {
              "B_6_1": { expected: ["Does Priscilla cook", "Does she cook"], explanation: "Does Priscilla/she cook dinner every evening?" },
              "B_6_2": { expected: ["did you watch"], explanation: "What did you watch on TV last night?" },
              "B_6_3": { expected: ["were you"], explanation: "Where were you last Saturday?" },
              "B_6_4": { expected: ["Did your team win", "Did they win", "Did you win"], explanation: "Did your team win the match?" },
              "B_6_5": { expected: ["Are you going to study"], explanation: "Are you going to study for the Maths test tomorrow?" }
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
            title: "Listen and answer the questions. Write short answers. (Track 11)",
            points: 6,
            type: "fill-gaps",
            audioTrack: "assets/audio/gg2_track_11_end_of_year.mp3",
            example: "0 What day did Maria call Jules? — last Friday",
            items: [
              { id: "B_7_1", label: "1", textBefore: "Where was Jules at three o'clock?", textAfter: "" },
              { id: "B_7_2", label: "2", textBefore: "What time did Jules go to Bobby's house?", textAfter: "" },
              { id: "B_7_3", label: "3", textBefore: "What was Jules worried about?", textAfter: "" },
              { id: "B_7_4", label: "4", textBefore: "Who took Jules home?", textAfter: "" },
              { id: "B_7_5", label: "5", textBefore: "What date is the party?", textAfter: "" },
              { id: "B_7_6", label: "6", textBefore: "When is Jules going to write the invitations?", textAfter: "" }
            ],
            answers: {
              "B_7_1": { expected: ["at the sports centre", "sports centre", "at sports centre", "the sports centre", "sports center", "at the sports center"], explanation: "I was at the sports centre." },
              "B_7_2": { expected: ["four o'clock", "4 o'clock", "at four o'clock", "4:00", "at four"], explanation: "I was there from four to eight o'clock." },
              "B_7_3": { expected: ["his Science exam", "his science exam", "Science exam", "science exam", "his exam"], explanation: "I was worried about my Science exam." },
              "B_7_4": { expected: ["Bobby's mum", "Bobby's mother", "Bobby's mom", "Bobby's mum (took him)", "Bobby's mum took him"], explanation: "Bobby's mum took me in her car." },
              "B_7_5": { expected: ["22nd February", "the twenty-second of February", "twenty-second of February", "22 February", "the 22nd of February"], explanation: "On the twenty-second of February." },
              "B_7_6": { expected: ["tonight", "this evening"], explanation: "I'm going to write the invitations tonight." }
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
            title: "Circle the correct answer.",
            points: 8,
            type: "circle-choice",
            example: "0 Would you like anything to drink? -> b Yes, please.",
            items: [
              { id: "B_8_1", label: "1", before: "A: Can I borrow your dictionary, please?\nB:", options: ["Yes, I can.", "Sure, no problem."], after: "" },
              { id: "B_8_2", label: "2", before: "A: Where shall we meet?\nB:", options: ["Let's meet at school.", "Let's meet at half past seven."], after: "" },
              { id: "B_8_3", label: "3", before: "A: What time does the train arrive?\nB:", options: ["At five to five.", "It's quarter to nine."], after: "" },
              { id: "B_8_4", label: "4", before: "A: Hi, it's Peter here. Can I speak to Nadia, please?\nB:", options: ["You can speak.", "I'm afraid she's out."], after: "" },
              { id: "B_8_5", label: "5", before: "A: Are you busy next Tuesday evening? I've got tickets for a concert.\nB:", options: ["That sounds great.", "No, I can't."], after: "" },
              { id: "B_8_6", label: "6", before: "A: What do you think of classical music?\nB:", options: ["I love listening.", "In my opinion, it's the best music."], after: "" },
              { id: "B_8_7", label: "7", before: "A: I'd like a ticket to the museum, please.\nB:", options: ["It's two pounds fifty, please.", "They're here."], after: "" },
              { id: "B_8_8", label: "8", before: "A: Excuse me, how can I get to the museum?\nB:", options: ["It's on the hotel.", "Go straight on and turn right."], after: "" }
            ],
            answers: {
              "B_8_1": { expected: ["Sure, no problem.", "Sure, no problem", "b"], explanation: "Sure, no problem." },
              "B_8_2": { expected: ["Let's meet at school.", "Let's meet at school", "a"], explanation: "Let's meet at school." },
              "B_8_3": { expected: ["At five to five.", "At five to five", "a"], explanation: "At five to five." },
              "B_8_4": { expected: ["I'm afraid she's out.", "I'm afraid she's out", "b"], explanation: "I'm afraid she's out." },
              "B_8_5": { expected: ["That sounds great.", "That sounds great", "a"], explanation: "That sounds great." },
              "B_8_6": { expected: ["In my opinion, it's the best music.", "In my opinion, it's the best music", "b"], explanation: "In my opinion, it's the best music." },
              "B_8_7": { expected: ["It's two pounds fifty, please.", "It's two pounds fifty, please", "a"], explanation: "It's two pounds fifty, please." },
              "B_8_8": { expected: ["Go straight on and turn right.", "Go straight on and turn right", "b"], explanation: "Go straight on and turn right." }
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
            title: "Read the text and write T (true), F (false) or DS (doesn't say).",
            points: 6,
            type: "reading-tf-ds",
            passageTitle: "My Family by Lucilla Nucci",
            passage: "New York is an exciting city and people come here from all over the world. This is nothing new. In the past people came from Ireland, Germany, Sweden, Ukraine, Russia, Poland and a lot of other countries.\n\nMy grandfather's parents came to New York from Italy in 1923. Grandad's father, Giuseppe, didn't have any money and he didn't know any people in the USA. He was a builder and he worked very hard. At the weekend he painted people's houses. Grandad's mother, Francesca, didn't work but she looked after their children.\n\nRoberto became a doctor. Cecilia was a fantastic singer and she also played the piano. Daniella had a restaurant and it was famous in New York. People loved her food. Antonio didn't like working indoors. He wanted to be a farmer so he left the city and went to California. He bought a farm there with fruit trees.\n\nMy mother and father work on the farm today. My sister and I love this place. But next month we are going to fly to New York. We still have family there and we are going to spend the summer with them.",
            example: "0 People went to New York from six countries. -> F",
            items: [
              { id: "B_9_1", label: "1", statement: "Lucilla's parents came to New York in 1923.", options: ["T", "F", "DS"] },
              { id: "B_9_2", label: "2", statement: "Giuseppe was an artist.", options: ["T", "F", "DS"] },
              { id: "B_9_3", label: "3", statement: "Cecilia was older than Daniella.", options: ["T", "F", "DS"] },
              { id: "B_9_4", label: "4", statement: "Daniella had a good restaurant.", options: ["T", "F", "DS"] },
              { id: "B_9_5", label: "5", statement: "There were apple trees on Antonio's farm.", options: ["T", "F", "DS"] },
              { id: "B_9_6", label: "6", statement: "Lucilla and her sister want to visit New York.", options: ["T", "F", "DS"] }
            ],
            answers: {
              "B_9_1": { expected: ["F"], explanation: "Grandfather's parents came, not Lucilla's parents." },
              "B_9_2": { expected: ["F"], explanation: "Giuseppe was a builder." },
              "B_9_3": { expected: ["DS"], explanation: "The text does not specify birth order." },
              "B_9_4": { expected: ["T"], explanation: "Famous and people loved her food." },
              "B_9_5": { expected: ["DS"], explanation: "The text only says 'fruit trees'." },
              "B_9_6": { expected: ["T"], explanation: "They want to visit family in New York." }
            }
          }
        ]
      }
    }
  }
};
