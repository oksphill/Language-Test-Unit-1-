/**
 * Go Getter 2 - Unit 4 Language Test
 * Nature & Wildlife / Comparatives & Superlatives
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_4_DATA = {
  id: "unit4",
  courseId: "gogetter2",
  number: 4,
  title: "Nature & Wildlife",
  description: "Vocabulary: Geographical features, landscape, descriptive adjectives. Grammar: Comparative adjectives, Superlative adjectives, than / the / most. Communication: Asking for and giving opinions.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 4",
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
            title: "Write the names of places. Use the map to help you.",
            points: 7,
            type: "grammar-gap",
            example: "0 It is thousands of metres high. People sometimes climb it. mountain",
            items: [
              { id: "A_1_1", label: "1", textBefore: "It is big. There are thousands of houses and a lot of people live there.", textAfter: "" },
              { id: "A_1_2", label: "2", textBefore: "It has got thousands of trees.", textAfter: "" },
              { id: "A_1_3", label: "3", textBefore: "There aren't any trees here. It is very hot and it doesn't often rain.", textAfter: "" },
              { id: "A_1_4", label: "4", textBefore: "It is next to the sea. People sit on it under umbrellas.", textAfter: "" },
              { id: "A_1_5", label: "5", textBefore: "It is hundreds of kilometres long. It is full of water and fish live in it.", textAfter: "" },
              { id: "A_1_6", label: "6", textBefore: "You can come here in a boat. You can't walk or drive here.", textAfter: "" },
              { id: "A_1_7", label: "7", textBefore: "It is a kind of mountain. It is very dangerous.", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["city"], explanation: "A large town with many houses and people is a city." },
              "A_1_2": { expected: ["forest"], explanation: "A large area covered with trees is a forest." },
              "A_1_3": { expected: ["desert"], explanation: "A dry, sandy area without trees is a desert." },
              "A_1_4": { expected: ["beach"], explanation: "The sandy shore next to the sea is a beach." },
              "A_1_5": { expected: ["river"], explanation: "A flowing body of fresh water is a river." },
              "A_1_6": { expected: ["island"], explanation: "A piece of land surrounded by water is an island." },
              "A_1_7": { expected: ["volcano"], explanation: "A mountain with hot lava and ash is a volcano." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the adjectives in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["beautiful", "boring", "exciting", "expensive", "kind", "low"],
            example: "0 I can't do this exercise. It's too difficult.",
            usedInExample: ["difficult"],
            sentences: [
              { textBefore: "Look at the flowers! They are", gapId: "A_2_1", label: "1", textAfter: "." },
              { textBefore: "Nathan is a nice boy. He's", gapId: "A_2_2", label: "2", textAfter: "to people and he helps them." },
              { textBefore: "You can't buy this T-shirt. It's too", gapId: "A_2_3", label: "3", textAfter: "!" },
              { textBefore: "This film isn't interesting. It's", gapId: "A_2_4", label: "4", textAfter: "." },
              { textBefore: "The wall is only one metre high. It's a", gapId: "A_2_5", label: "5", textAfter: "wall." }
            ],
            answers: {
              "A_2_1": { expected: ["beautiful"], explanation: "Flowers are beautiful." },
              "A_2_2": { expected: ["kind"], explanation: "Kind to people." },
              "A_2_3": { expected: ["expensive"], explanation: "Costing a lot of money: expensive." },
              "A_2_4": { expected: ["boring"], explanation: "Not interesting: boring." },
              "A_2_5": { expected: ["low"], explanation: "Only one metre high: low." }
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
            title: "Use the comparative form of the adjectives.",
            points: 5,
            type: "grammar-gap",
            example: "0 cold cities: Moscow** / London* -> Moscow is colder than London.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "Mount Olympus** / Mount Rysy*<br>Mount Olympus", verb: "high", textAfter: "Mount Rysy." },
              { id: "A_3_2", label: "2", textBefore: "tigers** / cats*<br>Tigers", verb: "big", textAfter: "cats." },
              { id: "A_3_3", label: "3", textBefore: "The Lion King** / Madagascar*<br>The Lion King", verb: "good", textAfter: "Madagascar." },
              { id: "A_3_4", label: "4", textBefore: "sharks** / rats*<br>Sharks", verb: "dangerous", textAfter: "rats." },
              { id: "A_3_5", label: "5", textBefore: "question 2** / question 7*<br>Question 2", verb: "easy", textAfter: "question 7." }
            ],
            answers: {
              "A_3_1": { expected: ["is higher than"], explanation: "Comparative: is higher than." },
              "A_3_2": { expected: ["are bigger than"], explanation: "Comparative: are bigger than (double g)." },
              "A_3_3": { expected: ["is better than"], explanation: "Comparative of good: is better than." },
              "A_3_4": { expected: ["are more dangerous than"], explanation: "Comparative of dangerous: are more dangerous than." },
              "A_3_5": { expected: ["is easier than"], explanation: "Comparative of easy: is easier than (y -> ier)." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Use the superlative form of the adjectives.",
            points: 4,
            type: "grammar-gap",
            example: "0 The Pacific is the biggest (big) ocean in the world.",
            items: [
              { id: "A_4_1", label: "1", textBefore: "I've got", verb: "curly", textAfter: "hair in the class." },
              { id: "A_4_2", label: "2", textBefore: "Is the Sahara", verb: "hot", textAfter: "desert in the world?" },
              { id: "A_4_3", label: "3", textBefore: "Mr May is", verb: "good", textAfter: "teacher in the school." },
              { id: "A_4_4", label: "4", textBefore: "I think golf is", verb: "boring", textAfter: "sport in the world." }
            ],
            answers: {
              "A_4_1": { expected: ["the curliest"], explanation: "Superlative of curly: the curliest." },
              "A_4_2": { expected: ["the hottest"], explanation: "Superlative of hot: the hottest (double t)." },
              "A_4_3": { expected: ["the best"], explanation: "Superlative of good: the best." },
              "A_4_4": { expected: ["the most boring"], explanation: "Superlative of boring: the most boring." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Use one word in each gap in the sentences.",
            points: 4,
            type: "grammar-gap",
            example: "0 I think windsurfing is more exciting than sailing.",
            items: [
              { id: "A_5_1", label: "1", textBefore: "Who is", textAfter: "funniest actor in the world?" },
              { id: "A_5_2", label: "2", textBefore: "History is", textAfter: "interesting than Geography." },
              { id: "A_5_3", label: "3", textBefore: "What is the", textAfter: "beautiful bird in the world?" },
              { id: "A_5_4", label: "4", textBefore: "The pizza is nicer", textAfter: "the pasta." }
            ],
            answers: {
              "A_5_1": { expected: ["the"], explanation: "The funniest actor." },
              "A_5_2": { expected: ["more"], explanation: "More interesting than." },
              "A_5_3": { expected: ["most"], explanation: "The most beautiful bird." },
              "A_5_4": { expected: ["than"], explanation: "Nicer than." }
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
            title: "Use the words in the box in the dialogue. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["about", "of", "opinion", "right", "think", "wrong"],
            example: "A: ⁰What's your favourite subject at school?",
            usedInExample: ["what's"],
            sentences: [
              { textBefore: "A: What's your favourite subject at school?<br>B: Science. What", gapId: "A_6_1", label: "1", textAfter: "you?<br>A: I like Science, but my favourite subject is English." },
              { textBefore: "B: What do you think", gapId: "A_6_2", label: "2", textAfter: "Maths?" },
              { textBefore: "A: I", gapId: "A_6_3", label: "3", textAfter: "it's interesting but in my" },
              { textBefore: "", gapId: "A_6_4", label: "4", textAfter: ", it's too difficult sometimes." },
              { textBefore: "B: You're", gapId: "A_6_5", label: "5", textAfter: ". It is difficult." }
            ],
            answers: {
              "A_6_1": { expected: ["about"], explanation: "What about you?" },
              "A_6_2": { expected: ["of"], explanation: "What do you think of...?" },
              "A_6_3": { expected: ["think"], explanation: "I think it's interesting..." },
              "A_6_4": { expected: ["opinion"], explanation: "...in my opinion..." },
              "A_6_5": { expected: ["right"], explanation: "You're right." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 4",
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
            title: "Write the names of places. Use the map to help you.",
            points: 7,
            type: "grammar-gap",
            example: "0 It is thousands of metres high. People sometimes climb it. mountain",
            items: [
              { id: "B_1_1", label: "1", textBefore: "It is very hot here and it doesn't often rain. It hasn't got any trees.", textAfter: "" },
              { id: "B_1_2", label: "2", textBefore: "Fish live in it. It is hundreds of kilometres long.", textAfter: "" },
              { id: "B_1_3", label: "3", textBefore: "It is a very dangerous mountain.", textAfter: "" },
              { id: "B_1_4", label: "4", textBefore: "There are a lot of houses and streets in this place. A lot of people live here.", textAfter: "" },
              { id: "B_1_5", label: "5", textBefore: "People like sitting here in the summer. It is next to the sea.", textAfter: "" },
              { id: "B_1_6", label: "6", textBefore: "You can't walk or drive to get here but you can come here in a boat.", textAfter: "" },
              { id: "B_1_7", label: "7", textBefore: "There are thousands of trees here.", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["desert"], explanation: "A desert has no trees and little rain." },
              "B_1_2": { expected: ["river"], explanation: "A river has fish and is long." },
              "B_1_3": { expected: ["volcano"], explanation: "A dangerous mountain: volcano." },
              "B_1_4": { expected: ["city"], explanation: "A city has many houses and people." },
              "B_1_5": { expected: ["beach"], explanation: "A beach is next to the sea." },
              "B_1_6": { expected: ["island"], explanation: "An island is surrounded by water." },
              "B_1_7": { expected: ["forest"], explanation: "A forest has thousands of trees." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with the adjectives in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["beautiful", "boring", "cheap", "exciting", "kind", "low"],
            example: "0 I can't do this exercise. It's too difficult.",
            usedInExample: ["difficult"],
            sentences: [
              { textBefore: "The wall is", gapId: "B_2_1", label: "1", textAfter: ". It's only a metre high." },
              { textBefore: "The birds in the zoo are", gapId: "B_2_2", label: "2", textAfter: ". They've got fantastic colours!" },
              { textBefore: "Golf is a(n)", gapId: "B_2_3", label: "3", textAfter: "sport. We always watch it on TV." },
              { textBefore: "These jeans are £50! They aren't", gapId: "B_2_4", label: "4", textAfter: "!" },
              { textBefore: "Nancy is a friendly girl. She helps people and she's", gapId: "B_2_5", label: "5", textAfter: "to them." }
            ],
            answers: {
              "B_2_1": { expected: ["low"], explanation: "Only a metre high: low." },
              "B_2_2": { expected: ["beautiful"], explanation: "Fantastic colours: beautiful." },
              "B_2_3": { expected: ["exciting"], explanation: "Always watch it: exciting." },
              "B_2_4": { expected: ["cheap"], explanation: "£50 is not cheap." },
              "B_2_5": { expected: ["kind"], explanation: "Kind to people." }
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
            title: "Use the comparative form of the adjectives.",
            points: 5,
            type: "grammar-gap",
            example: "0 cold countries: Russia** / the UK* -> Russia is colder than the UK.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "Pete's Café** / The Ivy Café*<br>Pete's Café", verb: "bad", textAfter: "The Ivy Café." },
              { id: "B_3_2", label: "2", textBefore: "New York** / Budapest*<br>New York", verb: "expensive", textAfter: "Budapest." },
              { id: "B_3_3", label: "3", textBefore: "puppies** / parrots*<br>Puppies", verb: "cute", textAfter: "parrots." },
              { id: "B_3_4", label: "4", textBefore: "zebras** / cats*<br>Zebras", verb: "fast", textAfter: "cats." },
              { id: "B_3_5", label: "5", textBefore: "English** / Chinese*<br>English", verb: "easy", textAfter: "Chinese." }
            ],
            answers: {
              "B_3_1": { expected: ["is worse than"], explanation: "Comparative of bad: is worse than." },
              "B_3_2": { expected: ["is more expensive than"], explanation: "Comparative of expensive: is more expensive than." },
              "B_3_3": { expected: ["are cuter than"], explanation: "Comparative of cute: are cuter than." },
              "B_3_4": { expected: ["are faster than"], explanation: "Comparative of fast: are faster than." },
              "B_3_5": { expected: ["is easier than"], explanation: "Comparative of easy: is easier than." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Use the superlative form of the adjectives.",
            points: 4,
            type: "grammar-gap",
            example: "0 The Pacific is the biggest (big) ocean in the world.",
            items: [
              { id: "B_4_1", label: "1", textBefore: "I think football is", verb: "boring", textAfter: "sport." },
              { id: "B_4_2", label: "2", textBefore: "He's got", verb: "curly", textAfter: "hair in the class." },
              { id: "B_4_3", label: "3", textBefore: "Mrs Fry is", verb: "good", textAfter: "teacher in the school." },
              { id: "B_4_4", label: "4", textBefore: "Is the Gobi", verb: "hot", textAfter: "desert in the world?" }
            ],
            answers: {
              "B_4_1": { expected: ["the most boring"], explanation: "Superlative: the most boring." },
              "B_4_2": { expected: ["the curliest"], explanation: "Superlative: the curliest." },
              "B_4_3": { expected: ["the best"], explanation: "Superlative: the best." },
              "B_4_4": { expected: ["the hottest"], explanation: "Superlative: the hottest." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Use one word in each gap in the sentences.",
            points: 4,
            type: "grammar-gap",
            example: "0 I think windsurfing is more exciting than sailing.",
            items: [
              { id: "B_5_1", label: "1", textBefore: "This dress is prettier", textAfter: "that one." },
              { id: "B_5_2", label: "2", textBefore: "Who is", textAfter: "best actor in the world?" },
              { id: "B_5_3", label: "3", textBefore: "Anne is the", textAfter: "beautiful girl in my class." },
              { id: "B_5_4", label: "4", textBefore: "Music is", textAfter: "interesting than Science." }
            ],
            answers: {
              "B_5_1": { expected: ["than"], explanation: "Prettier than." },
              "B_5_2": { expected: ["the"], explanation: "The best actor." },
              "B_5_3": { expected: ["most"], explanation: "The most beautiful." },
              "B_5_4": { expected: ["more"], explanation: "More interesting than." }
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
            title: "Use the words in the box in the dialogue. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["favourite", "in", "right", "think", "wrong", "you"],
            example: "A: ⁰What's your favourite subject at school?",
            usedInExample: ["what's"],
            sentences: [
              { textBefore: "A: What's your favourite subject at school?<br>B: History. What about", gapId: "B_6_1", label: "1", textAfter: "?" },
              { textBefore: "A: I like History but my", gapId: "B_6_2", label: "2", textAfter: "subject is French." },
              { textBefore: "B: What do you", gapId: "B_6_3", label: "3", textAfter: "of Science?" },
              { textBefore: "A: It's great but", gapId: "B_6_4", label: "4", textAfter: "my opinion, it's too difficult." },
              { textBefore: "B: You're", gapId: "B_6_5", label: "5", textAfter: ". It is difficult." }
            ],
            answers: {
              "B_6_1": { expected: ["you"], explanation: "What about you?" },
              "B_6_2": { expected: ["favourite"], explanation: "My favourite subject." },
              "B_6_3": { expected: ["think"], explanation: "What do you think of...?" },
              "B_6_4": { expected: ["in"], explanation: "In my opinion." },
              "B_6_5": { expected: ["right"], explanation: "You're right." }
            }
          }
        ]
      }
    }
  }
};
