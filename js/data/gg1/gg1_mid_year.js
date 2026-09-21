/**
 * Go Getter 1 - Mid-Year Test (Units 1–4)
 * Comprehensive Assessment: Vocabulary (15), Grammar (15), Listening (6), Communication (8), Reading (6)
 * Total Points: 50
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_MID_YEAR_DATA = {
  id: "mid_year",
  courseId: "gogetter1",
  number: "1-4",
  title: "Mid-Year Test (Units 1–4)",
  description: "Comprehensive mid-year assessment covering Units 1–4: Vocabulary, Grammar, Audio Listening (Track 10), Everyday Communication, and Reading.",
  points: 50,
  totalPoints: 50,
  audioTrack: "assets/audio/gg1_track_10_mid_year.mp3",

  variantA: {
    id: "variantA",
    title: "Mid-Year Test A — Units 1–4",
    totalPoints: 50,
    audioTrack: "assets/audio/gg1_track_10_mid_year.mp3",
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["at", "clever", "dark", "eyes", "France", "French"],
            example: "He isn't ⁰British.",
            usedInExample: ["British"],
            sentences: [
              { textBefore: "This is a photo of my friend Julien. He isn't British. He's from 1", gapId: "MY_A_1_1", label: "1", textAfter: "." },
              { textBefore: "Julien has got 2", gapId: "MY_A_1_2", label: "2", textAfter: "hair and big brown 3" },
              { textBefore: ". He's a 4", gapId: "MY_A_1_3", label: "3", textAfter: "" },
              { textBefore: "boy and he's good 5", gapId: "MY_A_1_4", label: "4", textAfter: "" },
              { textBefore: "Maths.", gapId: "MY_A_1_5", label: "5", textAfter: "" }
            ],
            answers: {
              "MY_A_1_1": { expected: ["France"], explanation: "Country: France." },
              "MY_A_1_2": { expected: ["dark"], explanation: "Dark hair." },
              "MY_A_1_3": { expected: ["eyes"], explanation: "Brown eyes." },
              "MY_A_1_4": { expected: ["clever"], explanation: "Clever boy." },
              "MY_A_1_5": { expected: ["at"], explanation: "Good at Maths." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture and complete the text with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            imageKey: "gg1_mid_year_room",
            wordBank: ["console", "front of", "in", "kitchen", "living", "mobile", "window"],
            example: "It's Saturday and my family are at ⁰home.",
            usedInExample: ["home"],
            sentences: [
              { textBefore: "My mum is in the 1", gapId: "MY_A_2_1", label: "1", textAfter: "and my dad is in the 2" },
              { textBefore: "room. He's on the sofa and he's got a 3", gapId: "MY_A_2_2", label: "2", textAfter: "" },
              { textBefore: "phone. My sister's dog is in 4", gapId: "MY_A_2_3", label: "3", textAfter: "" },
              { textBefore: "the television and my sister is next to the 5", gapId: "MY_A_2_4", label: "4", textAfter: "" },
              { textBefore: ".", gapId: "MY_A_2_5", label: "5", textAfter: "" }
            ],
            answers: {
              "MY_A_2_1": { expected: ["kitchen"], explanation: "Mum is in the kitchen." },
              "MY_A_2_2": { expected: ["living"], explanation: "In the living room." },
              "MY_A_2_3": { expected: ["mobile"], explanation: "Mobile phone." },
              "MY_A_2_4": { expected: ["front of"], explanation: "In front of the television." },
              "MY_A_2_5": { expected: ["window"], explanation: "Next to the window." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Purple / Oranges / Rubber is my favourite colour. (Purple)",
            items: [
              { id: "MY_A_3_1", label: "1", before: "The baby has got ten pink", after: ".", options: ["teeth", "foot", "toes"] },
              { id: "MY_A_3_2", label: "2", before: "Her blue", after: "is too small for her.", options: ["jeans", "tracksuit", "trousers"] },
              { id: "MY_A_3_3", label: "3", before: "My aunt's daughter is my", after: ".", options: ["cousin", "uncle", "sister"] },
              { id: "MY_A_3_4", label: "4", before: "These clothes aren't boring. They're", after: "!", options: ["cool", "long", "short"] },
              { id: "MY_A_3_5", label: "5", before: "The", after: "are on my feet.", options: ["hoodies", "caps", "shoes"] }
            ],
            answers: {
              "MY_A_3_1": { expected: ["toes"], explanation: "Ten pink toes on feet." },
              "MY_A_3_2": { expected: ["tracksuit"], explanation: "Tracksuit is singular (is too small)." },
              "MY_A_3_3": { expected: ["cousin"], explanation: "Aunt's daughter is my cousin." },
              "MY_A_3_4": { expected: ["cool"], explanation: "Opposite of boring: cool." },
              "MY_A_3_5": { expected: ["shoes"], explanation: "Shoes are worn on feet." }
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
            title: "Match the questions (1–5) to the answers (a–f).",
            points: 5,
            type: "circle-choice",
            example: "0 Is there a fridge in the kitchen? -> f (Yes, there is.)",
            items: [
              { id: "MY_A_4_1", label: "1", before: "Are there any armchairs in the living room?", after: "", options: ["a No, there aren't.", "b Yes, they are.", "c No, they aren't.", "d Yes, I have.", "e She's got a dog."] },
              { id: "MY_A_4_2", label: "2", before: "Are the students in the park?", after: "", options: ["a No, there aren't.", "b Yes, they are.", "c No, they aren't.", "d Yes, I have.", "e She's got a dog."] },
              { id: "MY_A_4_3", label: "3", before: "Have you got a brother?", after: "", options: ["a No, there aren't.", "b Yes, they are.", "c No, they aren't.", "d Yes, I have.", "e She's got a dog."] },
              { id: "MY_A_4_4", label: "4", before: "What has she got?", after: "", options: ["a No, there aren't.", "b Yes, they are.", "c No, they aren't.", "d Yes, I have.", "e She's got a dog."] },
              { id: "MY_A_4_5", label: "5", before: "Are those your T-shirts?", after: "", options: ["a No, there aren't.", "b Yes, they are.", "c No, they aren't.", "d Yes, I have.", "e She's got a dog."] }
            ],
            answers: {
              "MY_A_4_1": { expected: ["a No, there aren't."], explanation: "Are there -> No, there aren't." },
              "MY_A_4_2": { expected: ["b Yes, they are."], explanation: "Are the students -> Yes, they are." },
              "MY_A_4_3": { expected: ["d Yes, I have."], explanation: "Have you got -> Yes, I have." },
              "MY_A_4_4": { expected: ["e She's got a dog."], explanation: "What has she got -> She's got a dog." },
              "MY_A_4_5": { expected: ["c No, they aren't."], explanation: "Are those your T-shirts -> No, they aren't." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 She has / have got three cousins. (has)",
            items: [
              { id: "MY_A_5_1", label: "1", before: "Are there", after: "apples in the kitchen?", options: ["some", "any", "a"] },
              { id: "MY_A_5_2", label: "2", before: "The living room", after: "big, it's very small.", options: ["are", "isn't", "is"] },
              { id: "MY_A_5_3", label: "3", before: "Is it", after: "old computer?", options: ["a", "an", "the"] },
              { id: "MY_A_5_4", label: "4", before: "He", after: "got a skateboard.", options: ["hasn't", "haven't", "has"] },
              { id: "MY_A_5_5", label: "5", before: "", after: "is my desk.", options: ["This", "These", "Those"] }
            ],
            answers: {
              "MY_A_5_1": { expected: ["any"], explanation: "Questions with plural nouns: any." },
              "MY_A_5_2": { expected: ["isn't"], explanation: "The living room isn't big, it's very small." },
              "MY_A_5_3": { expected: ["an"], explanation: "An old computer (vowel sound)." },
              "MY_A_5_4": { expected: ["has", "hasn't"], explanation: "Subject he -> has / hasn't." },
              "MY_A_5_5": { expected: ["This"], explanation: "Singular near: This is." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the text with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["Her", "His", "Their", "they", "We"],
            example: "⁰You can see my dog, Sparky, in the photo too.",
            usedInExample: ["You"],
            sentences: [
              { textBefore: "Hi! I'm Carla and this is my family. You can see my dog, Sparky, in the photo too. 1", gapId: "MY_A_6_1", label: "1", textAfter: "ears are very long and he's cute! I've got a sister. 2" },
              { textBefore: "name is Kelly. Kelly and I have got a great bedroom. 3", gapId: "MY_A_6_2", label: "2", textAfter: "" },
              { textBefore: "bedroom is big and 4", gapId: "MY_A_6_3", label: "3", textAfter: "" },
              { textBefore: "have got posters of our favourite pop stars on the walls. 5", gapId: "MY_A_6_4", label: "4", textAfter: "" },
              { textBefore: "are happy in our house.", gapId: "MY_A_6_5", label: "5", textAfter: "" }
            ],
            answers: {
              "MY_A_6_1": { expected: ["His", "his", "Its", "its"], explanation: "Sparky (he) -> His ears." },
              "MY_A_6_2": { expected: ["Her", "her"], explanation: "Sister (she) -> Her name." },
              "MY_A_6_3": { expected: ["Our", "our", "Their", "their"], explanation: "Kelly and I -> Our bedroom." },
              "MY_A_6_4": { expected: ["we", "We", "they", "They"], explanation: "Subject: we have got." },
              "MY_A_6_5": { expected: ["We", "we"], explanation: "We are happy in our house." }
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
            title: "Listen and complete the table with Jack, Tom and Jenny's information. Use one word or a number.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/gg1_track_10_mid_year.mp3",
            audioTitle: "Go Getter 1 Track 10 — Mid-Year Test",
            audioDesc: "Listen to the description of Jack, Tom and Jenny (Track 10)",
            example: "Jack's hair: short, ⁰black",
            table: {
              headers: ["Name", "Hair", "Age"],
              rows: [
                {
                  name: "Jack",
                  hairHtml: "short, <em>⁰black</em>",
                  ageHtml: `<span class="gap-label">1</span> <input type="text" class="gap-input test-gap listening-gap-input" id="input-MY_A_7_1" data-qid="MY_A_7_1" data-task="task_7" placeholder="..." autocomplete="off">`
                },
                {
                  name: "Tom",
                  hairHtml: `<span class="gap-label">2</span> <input type="text" class="gap-input test-gap listening-gap-input" id="input-MY_A_7_2" data-qid="MY_A_7_2" data-task="task_7" placeholder="..." autocomplete="off">, spiky`,
                  ageHtml: `<span class="gap-label">3</span> <input type="text" class="gap-input test-gap listening-gap-input" id="input-MY_A_7_3" data-qid="MY_A_7_3" data-task="task_7" placeholder="..." autocomplete="off">`
                },
                {
                  name: "Jenny",
                  hairHtml: `<span class="gap-label">4</span> <input type="text" class="gap-input test-gap listening-gap-input" id="input-MY_A_7_4" data-qid="MY_A_7_4" data-task="task_7" placeholder="..." autocomplete="off">, wavy, <span class="gap-label">5</span> <input type="text" class="gap-input test-gap listening-gap-input" id="input-MY_A_7_5" data-qid="MY_A_7_5" data-task="task_7" placeholder="..." autocomplete="off">`,
                  ageHtml: `<span class="gap-label">6</span> <input type="text" class="gap-input test-gap listening-gap-input" id="input-MY_A_7_6" data-qid="MY_A_7_6" data-task="task_7" placeholder="..." autocomplete="off">`
                }
              ]
            },
            items: [
              { id: "MY_A_7_1", label: "1", before: "Jack's age:", after: "" },
              { id: "MY_A_7_2", label: "2", before: "Tom's hair:", after: "spiky" },
              { id: "MY_A_7_3", label: "3", before: "Tom's age:", after: "" },
              { id: "MY_A_7_4", label: "4", before: "Jenny's hair length:", after: "wavy" },
              { id: "MY_A_7_5", label: "5", before: "Jenny's hair colour:", after: "" },
              { id: "MY_A_7_6", label: "6", before: "Jenny's age:", after: "" }
            ],
            answers: {
              "MY_A_7_1": { expected: ["14", "fourteen"], explanation: "Jack is 14 years old." },
              "MY_A_7_2": { expected: ["dark"], explanation: "Tom has dark spiky hair." },
              "MY_A_7_3": { expected: ["6", "six"], explanation: "Tom is 6 years old." },
              "MY_A_7_4": { expected: ["long"], explanation: "Jenny has long wavy brown hair." },
              "MY_A_7_5": { expected: ["brown"], explanation: "Brown hair." },
              "MY_A_7_6": { expected: ["11", "eleven"], explanation: "Jenny is 11 years old." }
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
            title: "Match the phrases or questions to the correct responses.",
            points: 8,
            type: "circle-choice",
            example: "0 How do you spell 'sharpener'? -> S-H-A-R-P-E-N-E-R",
            items: [
              { id: "MY_A_8_1", label: "1", before: "What's 'lustro' in English?", after: "", options: ["Mirror.", "Yes, of course.", "Madrid, in Spain.", "Ryan Gosling."] },
              { id: "MY_A_8_2", label: "2", before: "Hello, Kevin. Nice to meet you.", after: "", options: ["Nice to meet you too.", "No problem.", "It's upstairs.", "No, thank you."] },
              { id: "MY_A_8_3", label: "3", before: "Where are you from?", after: "", options: ["Madrid, in Spain.", "Mirror.", "Yes, of course.", "Ryan Gosling."] },
              { id: "MY_A_8_4", label: "4", before: "Where's the bathroom, please?", after: "", options: ["It's upstairs.", "Nice to meet you too.", "No problem.", "No, thank you."] },
              { id: "MY_A_8_5", label: "5", before: "Sorry, my mistake.", after: "", options: ["No problem.", "Nice to meet you too.", "It's upstairs.", "No, thank you."] },
              { id: "MY_A_8_6", label: "6", before: "Can you help me, please?", after: "", options: ["Yes, of course.", "Mirror.", "Madrid, in Spain.", "Ryan Gosling."] },
              { id: "MY_A_8_7", label: "7", before: "Would you like a sweet?", after: "", options: ["No, thank you.", "Nice to meet you too.", "It's upstairs.", "No problem."] },
              { id: "MY_A_8_8", label: "8", before: "Who's your favourite actor?", after: "", options: ["Ryan Gosling.", "Mirror.", "Madrid, in Spain.", "Yes, of course."] }
            ],
            answers: {
              "MY_A_8_1": { expected: ["Mirror."], explanation: "Lustro in English is mirror." },
              "MY_A_8_2": { expected: ["Nice to meet you too."], explanation: "Polite response to meeting someone." },
              "MY_A_8_3": { expected: ["Madrid, in Spain."], explanation: "Origin: Madrid, in Spain." },
              "MY_A_8_4": { expected: ["It's upstairs."], explanation: "Directions: It's upstairs." },
              "MY_A_8_5": { expected: ["No problem."], explanation: "Accepting an apology: No problem." },
              "MY_A_8_6": { expected: ["Yes, of course."], explanation: "Agreeing to help: Yes, of course." },
              "MY_A_8_7": { expected: ["No, thank you."], explanation: "Declining politely: No, thank you." },
              "MY_A_8_8": { expected: ["Ryan Gosling."], explanation: "Favourite actor: Ryan Gosling." }
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
            title: "Read the text and answer the questions.",
            points: 6,
            type: "reading-qa",
            imageKey: "gg1_mid_year_italy",
            passage: "Hi! I'm Rosanna and I'm on holiday in Italy. My grandparents are Italian and they live here. They've got a big house near the sea.<br><br>In front of the house there is a beautiful garden with big trees and colourful flowers. Next to the house there is a garage. My grandad has got two cars!<br><br>Inside the house there are three bedrooms, a kitchen and a living room. The bathroom is small, but there is a shower and a big bath. In the kitchen there's a big table, six chairs and a television! We have dinner and watch TV there in the evening.",
            example: "0 Where are Rosanna's grandparents? -> They're in Italy.",
            items: [
              { id: "MY_A_9_1", label: "1", question: "What is in front of the house?" },
              { id: "MY_A_9_2", label: "2", question: "Where is the garage?" },
              { id: "MY_A_9_3", label: "3", question: "Has Rosanna's grandad got two cars?" },
              { id: "MY_A_9_4", label: "4", question: "How many bedrooms are there in the house?" },
              { id: "MY_A_9_5", label: "5", question: "Is the bathroom big?" },
              { id: "MY_A_9_6", label: "6", question: "Where is the television?" }
            ],
            answers: {
              "MY_A_9_1": { expected: ["A garden.", "A beautiful garden.", "The garden.", "A garden with trees and flowers."], explanation: "In front of the house there is a beautiful garden." },
              "MY_A_9_2": { expected: ["Next to the house.", "It's next to the house."], explanation: "Next to the house there is a garage." },
              "MY_A_9_3": { expected: ["Yes, he has.", "Yes."], explanation: "Yes, he has." },
              "MY_A_9_4": { expected: ["Three.", "3", "Three bedrooms.", "There are three bedrooms."], explanation: "There are three bedrooms." },
              "MY_A_9_5": { expected: ["No, it isn't.", "No, it's small.", "No."], explanation: "The bathroom is small." },
              "MY_A_9_6": { expected: ["In the kitchen.", "It's in the kitchen."], explanation: "In the kitchen there's a television." }
            }
          }
        ]
      }
    }
  },
  get variantB() {
    return this.variantA;
  }
};
