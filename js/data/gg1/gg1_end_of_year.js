/**
 * Go Getter 1 - End-of-Year Test (Units 1–8)
 * Comprehensive Assessment: Vocabulary (15), Grammar (15), Listening (6), Communication (8), Reading (6)
 * Total Points: 50
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_END_OF_YEAR_DATA = {
  id: "end_of_year",
  courseId: "gogetter1",
  number: "1-8",
  title: "End-of-Year Test (Units 1–8)",
  description: "Comprehensive end-of-year assessment covering Units 1–8: Vocabulary, Grammar, Audio Listening (Track 11), Everyday Communication, and Reading.",
  points: 50,
  totalPoints: 50,
  audioTrack: "assets/audio/gg1_track_11_end_of_year.mp3",

  variantA: {
    id: "variantA",
    title: "End-of-Year Test A — Units 1–8",
    totalPoints: 50,
    audioTrack: "assets/audio/gg1_track_11_end_of_year.mp3",
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
            example: "0 orange / green / grey / lemon (lemon)",
            items: [
              { id: "EOY_A_1_1", label: "1", options: ["bird", "snake", "butterfly", "parrot"] },
              { id: "EOY_A_1_2", label: "2", options: ["Monday", "May", "June", "July"] },
              { id: "EOY_A_1_3", label: "3", options: ["badminton", "tennis", "sailing", "volleyball"] },
              { id: "EOY_A_1_4", label: "4", options: ["bedroom", "garden", "kitchen", "living room"] },
              { id: "EOY_A_1_5", label: "5", options: ["neck", "arms", "hands", "fingers"] }
            ],
            answers: {
              "EOY_A_1_1": { expected: ["snake"], explanation: "Snake cannot fly; bird, butterfly and parrot have wings." },
              "EOY_A_1_2": { expected: ["Monday"], explanation: "Monday is a day of the week; May, June, July are months." },
              "EOY_A_1_3": { expected: ["sailing"], explanation: "Sailing is a water sport without a ball or racket." },
              "EOY_A_1_4": { expected: ["garden"], explanation: "Garden is outside; the others are rooms inside a house." },
              "EOY_A_1_5": { expected: ["neck"], explanation: "Arms, hands, fingers are parts of the arm/hand; neck is not." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text. Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 She's from USA / the USA (the USA)",
            items: [
              { id: "EOY_A_2_1", label: "1", before: "Donna is", after: ". She plays basketball and she does taekwondo.", options: ["slow", "sporty"] },
              { id: "EOY_A_2_2", label: "2", before: "She plays basketball and she", after: "taekwondo.", options: ["goes", "does"] },
              { id: "EOY_A_2_3", label: "3", before: "She's got lots of film posters on the", after: "in her bedroom.", options: ["walls", "floors"] },
              { id: "EOY_A_2_4", label: "4", before: "Donna has got a pet", after: ". His name is Bugs and he's got long ears.", options: ["rabbit", "whale"] },
              { id: "EOY_A_2_5", label: "5", before: "Bugs is cute and he's", after: "too.", options: ["wavy", "fast"] }
            ],
            answers: {
              "EOY_A_2_1": { expected: ["sporty"], explanation: "She plays basketball -> sporty." },
              "EOY_A_2_2": { expected: ["does"], explanation: "Collocation: does taekwondo." },
              "EOY_A_2_3": { expected: ["walls"], explanation: "Posters are put on walls." },
              "EOY_A_2_4": { expected: ["rabbit"], explanation: "Pet with long ears and pink nose named Bugs: rabbit." },
              "EOY_A_2_5": { expected: ["fast"], explanation: "Rabbit is fast." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the email with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["drink", "early", "football", "guitar", "on", "out"],
            example: "I'm not at ⁰home.",
            usedInExample: ["home"],
            sentences: [
              { textBefore: "Hi Jamie!<br>How are you? I'm not at home. I'm 1", gapId: "EOY_A_3_1", label: "1", textAfter: "holiday with Mum and Dad in Italy." },
              { textBefore: "My Mum's family live in Sicily. Here, we don't go to bed 2", gapId: "EOY_A_3_2", label: "2", textAfter: ". It's too hot!" },
              { textBefore: "We go swimming in the sea every day and we 3", gapId: "EOY_A_3_3", label: "3", textAfter: "a lot of water." },
              { textBefore: "We eat a lot of fruit and vegetables too. In the evening, we hang 4", gapId: "EOY_A_3_4", label: "4", textAfter: "with all the family." },
              { textBefore: "Uncle Enzo and Aunt Susanna play the 5", gapId: "EOY_A_3_5", label: "5", textAfter: "and we sing old Italian songs. It's great!<br>Lucia" }
            ],
            answers: {
              "EOY_A_3_1": { expected: ["on"], explanation: "On holiday." },
              "EOY_A_3_2": { expected: ["early"], explanation: "Go to bed early." },
              "EOY_A_3_3": { expected: ["drink"], explanation: "Drink a lot of water." },
              "EOY_A_3_4": { expected: ["out"], explanation: "Hang out with family." },
              "EOY_A_3_5": { expected: ["guitar"], explanation: "Play the guitar." }
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
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "0 I'm Ann and me / my / you brother's name is Tim. (my)",
            items: [
              { id: "EOY_A_4_1", label: "1", before: "My family and I are Chinese but", after: "home is in Canada.", options: ["your", "our", "us"] },
              { id: "EOY_A_4_2", label: "2", before: "Spiders are ugly and I hate", after: "!", options: ["they", "it", "them"] },
              { id: "EOY_A_4_3", label: "3", before: "This cat is brown but", after: "cats are white.", options: ["that", "those"] },
              { id: "EOY_A_4_4", label: "4", before: "", after: "eyes are blue, not brown.", options: ["Ewa", "Ewa's"] },
              { id: "EOY_A_4_5", label: "5", before: "Are there", after: "lions in India?", options: ["a", "any"] }
            ],
            answers: {
              "EOY_A_4_1": { expected: ["our"], explanation: "Possessive pronoun for we: our home." },
              "EOY_A_4_2": { expected: ["them"], explanation: "Object pronoun for spiders: them." },
              "EOY_A_4_3": { expected: ["those"], explanation: "Demonstrative plural: those cats." },
              "EOY_A_4_4": { expected: ["Ewa's"], explanation: "Possessive 's: Ewa's eyes." },
              "EOY_A_4_5": { expected: ["any"], explanation: "Questions with plural nouns: any lions." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Use the correct form of the verbs in the text.",
            points: 5,
            type: "grammar-gap",
            example: "I ⁰often go (go / often) to the beach.",
            items: [
              { id: "EOY_A_5_1", label: "1", textBefore: "Tilly", verb: "go / never", textAfter: "there." },
              { id: "EOY_A_5_2", label: "2", textBefore: "She hates", verb: "sit", textAfter: "in the sun." },
              { id: "EOY_A_5_3", label: "3", textBefore: "Henry", verb: "not like", textAfter: "cycling –" },
              { id: "EOY_A_5_4", label: "4", textBefore: "he", verb: "not have got", textAfter: "a bike." },
              { id: "EOY_A_5_5", label: "5", textBefore: "He likes", verb: "walk", textAfter: "." }
            ],
            answers: {
              "EOY_A_5_1": { expected: ["never goes"], explanation: "Tilly (she): never goes." },
              "EOY_A_5_2": { expected: ["sitting"], explanation: "Hate + -ing: sitting." },
              "EOY_A_5_3": { expected: ["doesn't like", "does not like"], explanation: "Henry (he): doesn't like." },
              "EOY_A_5_4": { expected: ["hasn't got", "has not got"], explanation: "Negative have got: hasn't got." },
              "EOY_A_5_5": { expected: ["walking"], explanation: "Like + -ing: walking." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Write the questions.",
            points: 5,
            type: "sentence-order",
            example: "0 A: Have you got a new car? B: No, we haven't got a new car.",
            items: [
              { id: "EOY_A_6_1", label: "1", prompt: "A: _______ a rat under the table? B: Yes, there is a rat under the table!" },
              { id: "EOY_A_6_2", label: "2", prompt: "A: _______ your mum _______ for the family? B: No, my mum doesn't cook for the family, but my dad cooks well." },
              { id: "EOY_A_6_3", label: "3", prompt: "A: Where _______ live? B: Her grandparents live in Warsaw." },
              { id: "EOY_A_6_4", label: "4", prompt: "A: Whose _______ it? B: It's Mike's mountain bike." },
              { id: "EOY_A_6_5", label: "5", prompt: "A: _______ golf? B: No, I can't play golf. I don't like sports." }
            ],
            answers: {
              "EOY_A_6_1": { expected: ["Is there a rat under the table?", "Is there"], explanation: "Is there a rat under the table?" },
              "EOY_A_6_2": { expected: ["Does your mum cook for the family?", "Does your mum cook", "Does ... cook"], explanation: "Does your mum cook for the family?" },
              "EOY_A_6_3": { expected: ["do her grandparents live?", "do her grandparents live"], explanation: "Where do her grandparents live?" },
              "EOY_A_6_4": { expected: ["mountain bike is it?", "mountain bike is", "bike is"], explanation: "Whose mountain bike is it?" },
              "EOY_A_6_5": { expected: ["Can you play golf?", "Can you play"], explanation: "Can you play golf?" }
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
            title: "Read the questions. Then listen and complete the notes about Henry and Rosie. Use one, two or three words.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/gg1_track_11_end_of_year.mp3",
            audioTitle: "Go Getter 1 Track 11 — End-of-Year Test",
            audioDesc: "Listen to the recording about Henry and Rosie (Track 11)",
            example: "0 Does Henry like getting up early? -> Yes, he does.",
            sentences: [
              { textBefore: "<strong>Henry</strong><br>1 What time does Henry get up? At", gapId: "EOY_A_7_1", label: "1", textAfter: "o'clock." },
              { textBefore: "<br>2 Is he sporty?", gapId: "EOY_A_7_2", label: "2", textAfter: "" },
              { textBefore: "<br>3 What sports does he play? Football and", gapId: "EOY_A_7_3", label: "3", textAfter: "" },
              { textBefore: "<br><br><strong>Rosie</strong><br>4 Does Rosie hate getting up early?", gapId: "EOY_A_7_4", label: "4", textAfter: "" },
              { textBefore: "<br>5 What can she draw?", gapId: "EOY_A_7_5", label: "5", textAfter: "" },
              { textBefore: "<br>6 What can't she do? She", gapId: "EOY_A_7_6", label: "6", textAfter: "" }
            ],
            answers: {
              "EOY_A_7_1": { expected: ["6", "six"], explanation: "He gets up at 6 o'clock." },
              "EOY_A_7_2": { expected: ["Yes, he is.", "Yes.", "Yes, he is"], explanation: "He's sporty." },
              "EOY_A_7_3": { expected: ["hockey", "hockey too"], explanation: "Football and hockey." },
              "EOY_A_7_4": { expected: ["Yes, she does.", "Yes.", "Yes, she does"], explanation: "Rosie hates getting up early." },
              "EOY_A_7_5": { expected: ["animals", "Animals"], explanation: "She can draw animals." },
              "EOY_A_7_6": { expected: ["can't sing.", "cannot sing.", "can't sing", "sing"], explanation: "She can't sing." }
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
            example: "0 A: What's / Who's your favourite sport? (What's)",
            items: [
              { id: "EOY_A_8_1", label: "1", before: "A: Hello. Please", after: "in. B: Thank you.", options: ["walk", "come"] },
              { id: "EOY_A_8_2", label: "2", before: "A: Erin,", after: "is my aunt. B: Hello, Erin.", options: ["it", "this"] },
              { id: "EOY_A_8_3", label: "3", before: "A: Nice to meet you. B: Nice to meet you", after: ".", options: ["too", "please"] },
              { id: "EOY_A_8_4", label: "4", before: "A: Where's the bathroom, please? B:", after: "me show you.", options: ["Let", "Like"] },
              { id: "EOY_A_8_5", label: "5", before: "A: Sorry", after: "that! B: That's all right.", options: ["at", "about"] },
              { id: "EOY_A_8_6", label: "6", before: "A:", after: "you like a sandwich? B: No, thank you.", options: ["Do", "Would"] },
              { id: "EOY_A_8_7", label: "7", before: "A:", after: "go rock climbing! B: I'm not sure.", options: ["Can", "Let's"] },
              { id: "EOY_A_8_8", label: "8", before: "A: What's the weather", after: "? B: It's warm.", options: ["likes", "like"] }
            ],
            answers: {
              "EOY_A_8_1": { expected: ["come"], explanation: "Please come in." },
              "EOY_A_8_2": { expected: ["this"], explanation: "This is my aunt." },
              "EOY_A_8_3": { expected: ["too"], explanation: "Nice to meet you too." },
              "EOY_A_8_4": { expected: ["Let"], explanation: "Let me show you." },
              "EOY_A_8_5": { expected: ["about"], explanation: "Sorry about that!" },
              "EOY_A_8_6": { expected: ["Would"], explanation: "Would you like a sandwich?" },
              "EOY_A_8_7": { expected: ["Let's"], explanation: "Let's go rock climbing!" },
              "EOY_A_8_8": { expected: ["like"], explanation: "What's the weather like?" }
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
            title: "Read the blog. Then read the sentences and write T (true), F (false) or DS (doesn't say).",
            points: 6,
            type: "reading-tf-ds",
            imageKey: "gg1_eoy_monkey",
            passage: "My favourite animals are spider monkeys. They've got a small head, long arms and long legs. Their hair is black or brown. They've got four long fingers on their hands, but there are five toes on their feet. They've also got a long tail.<br><br>They live in trees in Brazil and Mexico and they can jump from tree to tree. They're fast! They play in the trees and sleep there too. They sometimes come down from the trees and walk on the ground. There are usually thirty spider monkeys in a family.<br><br>Spider monkeys are clever. They're cute too, and I love them.<br><br>What are your favourite animals?",
            example: "0 Spider monkeys have got a long head. [F]",
            items: [
              { id: "EOY_A_9_1", label: "1", text: "Spider monkeys have got black or brown hair." },
              { id: "EOY_A_9_2", label: "2", text: "Spider monkeys haven't got five fingers on their hands." },
              { id: "EOY_A_9_3", label: "3", text: "They live and sleep in trees." },
              { id: "EOY_A_9_4", label: "4", text: "They never walk on the ground." },
              { id: "EOY_A_9_5", label: "5", text: "They can't swim." },
              { id: "EOY_A_9_6", label: "6", text: "They have got small families." }
            ],
            answers: {
              "EOY_A_9_1": { expected: ["T", "True", "true"], explanation: "Text: 'Their hair is black or brown.' -> True" },
              "EOY_A_9_2": { expected: ["T", "True", "true"], explanation: "Text: 'They've got four long fingers on their hands' -> True (they don't have five)." },
              "EOY_A_9_3": { expected: ["T", "True", "true"], explanation: "Text: 'They live in trees... and sleep there too.' -> True" },
              "EOY_A_9_4": { expected: ["F", "False", "false"], explanation: "Text: 'They sometimes come down from the trees and walk on the ground.' -> False" },
              "EOY_A_9_5": { expected: ["DS", "Doesn't say", "doesn't say"], explanation: "The text does not mention swimming -> Doesn't say" },
              "EOY_A_9_6": { expected: ["F", "False", "false"], explanation: "Text: 'There are usually thirty spider monkeys in a family.' -> False" }
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
