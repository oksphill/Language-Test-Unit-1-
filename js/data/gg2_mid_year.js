/**
 * Go Getter 2 - Mid-Year Test (Units 1–4)
 * Comprehensive Assessment: Vocabulary (15), Grammar (15), Listening (6), Communication (8), Reading (6)
 * Total Points: 50
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_MID_YEAR_DATA = {
  id: "mid_year",
  courseId: "gogetter2",
  number: "1-4",
  title: "Mid-Year Test (Units 1–4)",
  description: "Comprehensive mid-year assessment covering Units 1–4: Vocabulary, Grammar, Audio Listening (Track 10), Everyday Communication, and Reading.",
  points: 50,
  totalPoints: 50,
  audioTrack: "assets/audio/gg2_track_10_mid_year.mp3",

  variantA: {
    id: "variantA",
    title: "Mid-Year Test A — Units 1–4",
    totalPoints: 50,
    audioTrack: "assets/audio/gg2_track_10_mid_year.mp3",
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
            example: "0 Geography / Science / P.E. / March (March)",
            items: [
              { id: "MY_A_1_1", label: "1", options: ["calculator", "coat", "scissors", "map"] },
              { id: "MY_A_1_2", label: "2", options: ["gym", "canteen", "shower", "playground"] },
              { id: "MY_A_1_3", label: "3", options: ["carton", "cereal", "sugar", "pasta"] },
              { id: "MY_A_1_4", label: "4", options: ["flour", "can", "jar", "bottle"] },
              { id: "MY_A_1_5", label: "5", options: ["desert", "volcano", "city", "river"] }
            ],
            answers: {
              "MY_A_1_1": { expected: ["coat"], explanation: "Coat is clothing; the others are school items." },
              "MY_A_1_2": { expected: ["shower"], explanation: "Shower is in a bathroom; the others are school places." },
              "MY_A_1_3": { expected: ["carton"], explanation: "Carton is a container; the others are foods." },
              "MY_A_1_4": { expected: ["flour"], explanation: "Flour is food; the others are containers." },
              "MY_A_1_5": { expected: ["city"], explanation: "City is man-made; the others are natural features." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 I am drawing / riding / cooking lunch in the kitchen. (cooking)",
            items: [
              { id: "MY_A_2_1", label: "1", before: "Jake plays the", after: "in a band at the weekend.", options: ["drums", "basketball", "tennis"] },
              { id: "MY_A_2_2", label: "2", before: "The girls", after: "ballet every Monday and Wednesday after school.", options: ["play", "make", "do"] },
              { id: "MY_A_2_3", label: "3", before: "Dad is wearing his new", after: "and he is listening to music.", options: ["speakers", "headphones", "keyboards"] },
              { id: "MY_A_2_4", label: "4", before: "Young people don't usually buy CDs. They", after: "songs from the Internet.", options: ["take", "download", "text"] },
              { id: "MY_A_2_5", label: "5", before: "I'm very excited", after: "our holiday!", options: ["about", "in", "at"] }
            ],
            answers: {
              "MY_A_2_1": { expected: ["drums"], explanation: "Play the drums in a band." },
              "MY_A_2_2": { expected: ["do"], explanation: "Do ballet." },
              "MY_A_2_3": { expected: ["headphones"], explanation: "Wear headphones to listen to music." },
              "MY_A_2_4": { expected: ["download"], explanation: "Download songs from the Internet." },
              "MY_A_2_5": { expected: ["about"], explanation: "Excited about something." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the texts with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["angry", "expensive", "kind", "pretty", "scared", "tired"],
            example: "Jess: It's ⁰beautiful! I love it!",
            usedInExample: ["beautiful"],
            sentences: [
              { textBefore: "Ann: I want to buy this dress for Diana's party on Saturday.<br>Jess: It's beautiful! I love it!<br>Ann: Yes, but it's £49.99! That's too", gapId: "MY_A_3_1", label: "1", textAfter: "!" },
              { textBefore: "Jess: What about those dresses? They're cheap.<br>Ann: I don't like them. They've got pink rabbits on them but they aren't", gapId: "MY_A_3_2", label: "2", textAfter: "! They look silly." },
              { textBefore: "Ann: My sister's got a cool dress but she gets", gapId: "MY_A_3_3", label: "3", textAfter: "when I take her clothes." },
              { textBefore: "Jess: Ask your brother for money! He's", gapId: "MY_A_3_4", label: "4", textAfter: "and he always helps you. Ask him now." },
              { textBefore: "Ann: I can't. He's", gapId: "MY_A_3_5", label: "5", textAfter: "and he's sleeping.<br>Jess: Ask him later." }
            ],
            answers: {
              "MY_A_3_1": { expected: ["expensive"], explanation: "£49.99 is too expensive." },
              "MY_A_3_2": { expected: ["pretty"], explanation: "They aren't pretty; they look silly." },
              "MY_A_3_3": { expected: ["angry"], explanation: "Gets angry when clothes are taken." },
              "MY_A_3_4": { expected: ["kind"], explanation: "He's kind and always helps." },
              "MY_A_3_5": { expected: ["tired"], explanation: "Tired and sleeping." }
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
            title: "Complete the text with the Present Simple form of the verbs.",
            points: 5,
            type: "grammar-gap",
            context: "My life (by Geoff Craven, 2nd July)",
            example: "My family and I ⁰are always (always / be) at home on Sunday evening.",
            items: [
              { id: "MY_A_4_1", label: "1", textBefore: "My brother", verb: "not like", textAfter: "watching TV so he" },
              { id: "MY_A_4_2", label: "2", textBefore: "", verb: "usually / listen", textAfter: "to music. My sister and I" },
              { id: "MY_A_4_3", label: "3", textBefore: "", verb: "do", textAfter: "our homework. We" },
              { id: "MY_A_4_4", label: "4", textBefore: "", verb: "not go", textAfter: "to bed late because we have school on Monday morning. How" },
              { id: "MY_A_4_5", label: "5", textBefore: "", verb: "you / spend", textAfter: "your Sunday evenings?" }
            ],
            answers: {
              "MY_A_4_1": { expected: ["doesn't like", "does not like"], explanation: "Present Simple negative for brother (he): doesn't like." },
              "MY_A_4_2": { expected: ["usually listens"], explanation: "Adverb before main verb: usually listens." },
              "MY_A_4_3": { expected: ["do"], explanation: "Present Simple for My sister and I (we): do." },
              "MY_A_4_4": { expected: ["don't go", "do not go"], explanation: "Present Simple negative for we: don't go." },
              "MY_A_4_5": { expected: ["do you spend"], explanation: "Question form: do you spend." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the Present Continuous form of the verbs in the box.",
            points: 5,
            type: "grammar-gap",
            context: "My life (by Geoff Craven, 8th July)",
            example: "I ⁰'m sitting (sit) under an umbrella.",
            items: [
              { id: "MY_A_5_1", label: "1", textBefore: "Today I'm at the beach with my friends. I'm sitting under an umbrella. We", verb: "not swim", textAfter: "because the water is too cold. Kevin and Sue" },
              { id: "MY_A_5_2", label: "2", textBefore: "", verb: "take", textAfter: "selfies. Jonathan" },
              { id: "MY_A_5_3", label: "3", textBefore: "", verb: "run", textAfter: "on the beach with Mr Smith, his dog. He" },
              { id: "MY_A_5_4", label: "4", textBefore: "", verb: "not wear", textAfter: "shoes! But what" },
              { id: "MY_A_5_5", label: "5", textBefore: "", verb: "Mabel and Darren / do", textAfter: "? They've got some chocolate ice cream!" }
            ],
            answers: {
              "MY_A_5_1": { expected: ["aren't swimming", "are not swimming"], explanation: "Present Continuous negative: aren't swimming." },
              "MY_A_5_2": { expected: ["are taking"], explanation: "Kevin and Sue are taking." },
              "MY_A_5_3": { expected: ["is running"], explanation: "Jonathan is running (double n)." },
              "MY_A_5_4": { expected: ["isn't wearing", "is not wearing"], explanation: "He isn't wearing." },
              "MY_A_5_5": { expected: ["are Mabel and Darren doing"], explanation: "Question form: are Mabel and Darren doing." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the sentences. Use one word in each gap.",
            points: 5,
            type: "grammar-gap",
            example: "0 There is a lot of water in the river this summer.",
            items: [
              { id: "MY_A_6_1", label: "1", textBefore: "Are there", textAfter: "biscuits in the packet?" },
              { id: "MY_A_6_2", label: "2", textBefore: "The elephant is big but the blue whale is", textAfter: "!" },
              { id: "MY_A_6_3", label: "3", textBefore: "Rabbits are faster", textAfter: "tortoises!" },
              { id: "MY_A_6_4", label: "4", textBefore: "How", textAfter: "butter do we need to make a cake?" },
              { id: "MY_A_6_5", label: "5", textBefore: "I think Majorca is the", textAfter: "beautiful island in the world." }
            ],
            answers: {
              "MY_A_6_1": { expected: ["any"], explanation: "Any in questions with plural countable nouns." },
              "MY_A_6_2": { expected: ["bigger"], explanation: "Comparative: bigger." },
              "MY_A_6_3": { expected: ["than"], explanation: "Comparative marker: faster than." },
              "MY_A_6_4": { expected: ["much"], explanation: "How much butter (uncountable)." },
              "MY_A_6_5": { expected: ["most"], explanation: "Superlative: the most beautiful." }
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
            title: "Listen and complete the notes. Write one word or number in each gap.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/gg2_track_10_mid_year.mp3",
            audioTitle: "Track 10: Mid-Year Test (Units 1–4)",
            audioDesc: "Listen to an interview with actor Brandon Murphy.",
            example: "How old? ⁰25 years old",
            items: [
              { id: "MY_A_7_1", label: "1", before: "Favourite sport: football, windsurfing and", after: "" },
              { id: "MY_A_7_2", label: "2", before: "Favourite food: fish and", after: "" },
              { id: "MY_A_7_3", label: "3", before: "Doesn't like:", after: "and sausages" },
              { id: "MY_A_7_4", label: "4", before: "Hobbies: likes reading books about History and", after: "" },
              { id: "MY_A_7_5", label: "5", before: "likes playing", after: "" },
              { id: "MY_A_7_6", label: "6", before: "Favourite thing: his", after: "and phone" }
            ],
            answers: {
              "MY_A_7_1": { expected: ["karate"], explanation: "The best sport is karate." },
              "MY_A_7_2": { expected: ["salad"], explanation: "Fish with salad." },
              "MY_A_7_3": { expected: ["ham"], explanation: "Ham and sausages." },
              "MY_A_7_4": { expected: ["Science", "science"], explanation: "Books about History and Science." },
              "MY_A_7_5": { expected: ["chess"], explanation: "Likes playing chess." },
              "MY_A_7_6": { expected: ["tablet"], explanation: "My tablet and my mobile phone." }
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
            title: "Match questions 1–8 with answers a–i. There is one extra answer.",
            points: 8,
            type: "matching-dialogue",
            example: "0 How do you spell your name? -> j: B-A-T-H-S-H-E-B-A.",
            optionsList: [
              { key: "a", text: "A glass of water, please." },
              { key: "b", text: "No, thanks." },
              { key: "c", text: "bathshebaeverdene@fftmc.com" },
              { key: "d", text: "In New York." },
              { key: "e", text: "See you later." },
              { key: "f", text: "In my opinion, they're great!" },
              { key: "g", text: "The Fellowship of the Ring. I love it!" },
              { key: "h", text: "I like them but cupcakes are nicer." },
              { key: "i", text: "Just a moment." }
            ],
            items: [
              { id: "MY_A_8_1", label: "1", prompt: "What's your email address?" },
              { id: "MY_A_8_2", label: "2", prompt: "What would you like to drink?" },
              { id: "MY_A_8_3", label: "3", prompt: "Can I speak to Manuel, please?" },
              { id: "MY_A_8_4", label: "4", prompt: "What do you think of action films?" },
              { id: "MY_A_8_5", label: "5", prompt: "Anything else?" },
              { id: "MY_A_8_6", label: "6", prompt: "What's your favourite film?" },
              { id: "MY_A_8_7", label: "7", prompt: "I love pancakes. What about you?" },
              { id: "MY_A_8_8", label: "8", prompt: "Where do you live?" }
            ],
            answers: {
              "MY_A_8_1": { expected: ["c"], explanation: "Email address." },
              "MY_A_8_2": { expected: ["a"], explanation: "Drink request: A glass of water, please." },
              "MY_A_8_3": { expected: ["i"], explanation: "Phone reply: Just a moment." },
              "MY_A_8_4": { expected: ["f"], explanation: "Opinion on films: In my opinion, they're great!" },
              "MY_A_8_5": { expected: ["b"], explanation: "Decline additional items: No, thanks." },
              "MY_A_8_6": { expected: ["g"], explanation: "Favourite film: The Fellowship of the Ring." },
              "MY_A_8_7": { expected: ["h"], explanation: "Food opinion: I like them but cupcakes are nicer." },
              "MY_A_8_8": { expected: ["d"], explanation: "Location: In New York." }
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
            passageTitle: "The van Buren family",
            passage: "Mr and Mrs van Buren travel a lot for their work and their children, Jackie and Miles, travel with them. The children have lessons every day, but not in a classroom. They learn at home, and 'home' is a different country every month.\n\nThis month the van Buren family are in Austria. Today, Jackie and Miles are visiting the Kunzhistorisches Museum in Vienna. Jackie is interested in history, so she is looking at some old things and writing an essay about Egyptian history. Miles is interested in art and he is studying some famous paintings.\n\nThe easiest subject for the children is Geography. They learn about it from real life: they visit a lot of countries and they see real rivers, lakes, islands, mountains and other geographical features. Mrs van Buren teaches them Maths and her husband teaches them Science. The children also use the Internet a lot. They send their homework to their parents' laptops and their parents talk about it with them.\n\nThey also chat with their friends in the UK.",
            items: [
              { id: "MY_A_9_1", label: "1", statement: "The van Buren family are in Vienna today.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_2", label: "2", statement: "Jackie is writing about Egyptian paintings.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_3", label: "3", statement: "Miles doesn't like History.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_4", label: "4", statement: "Geography isn't a difficult subject for Jackie and Miles.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_5", label: "5", statement: "Mr van Buren teaches Jackie and Miles Maths and Science.", options: ["T", "F", "DS"] },
              { id: "MY_A_9_6", label: "6", statement: "The children haven't got any friends in Austria.", options: ["T", "F", "DS"] }
            ],
            answers: {
              "MY_A_9_1": { expected: ["T"], explanation: "True: visiting the Kunzhistorisches Museum in Vienna." },
              "MY_A_9_2": { expected: ["F"], explanation: "False: writing an essay about Egyptian history (Miles is studying paintings)." },
              "MY_A_9_3": { expected: ["DS"], explanation: "Doesn't say: we know Miles is interested in art, but text doesn't state if he likes/dislikes History." },
              "MY_A_9_4": { expected: ["T"], explanation: "True: The easiest subject for the children is Geography." },
              "MY_A_9_5": { expected: ["F"], explanation: "False: Mrs van Buren teaches Maths, husband teaches Science." },
              "MY_A_9_6": { expected: ["DS"], explanation: "Doesn't say: text says they chat with friends in the UK, doesn't say about friends in Austria." }
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
    audioTrack: "assets/audio/gg2_track_10_mid_year.mp3",
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
            example: "0 Geography / Science / P.E. / March (March)",
            items: [
              { id: "MY_B_1_1", label: "1", options: ["fridge", "dictionary", "scissors", "ruler"] },
              { id: "MY_B_1_2", label: "2", options: ["hall", "gym", "playground", "shirt"] },
              { id: "MY_B_1_3", label: "3", options: ["cereal", "jar", "sugar", "jam"] },
              { id: "MY_B_1_4", label: "4", options: ["packet", "can", "butter", "bottle"] },
              { id: "MY_B_1_5", label: "5", options: ["volcano", "lake", "town", "forest"] }
            ],
            answers: {
              "MY_B_1_1": { expected: ["fridge"], explanation: "Fridge is in a kitchen; the others are school supplies." },
              "MY_B_1_2": { expected: ["shirt"], explanation: "Shirt is clothing; the others are places in a school." },
              "MY_B_1_3": { expected: ["jar"], explanation: "Jar is a container; the others are foods." },
              "MY_B_1_4": { expected: ["butter"], explanation: "Butter is food; the others are containers." },
              "MY_B_1_5": { expected: ["town"], explanation: "Town is human settlement; the others are natural features." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 I am drawing / riding / cooking lunch in the kitchen. (cooking)",
            items: [
              { id: "MY_B_2_1", label: "1", before: "Kay plays", after: "in a band on Mondays and Wednesdays.", options: ["guitar", "tennis", "the drums"] },
              { id: "MY_B_2_2", label: "2", before: "The students", after: "pottery. It's their hobby.", options: ["play", "take", "do"] },
              { id: "MY_B_2_3", label: "3", before: "Mum has got new", after: "because she loves listening to music.", options: ["speakers", "printers", "screens"] },
              { id: "MY_B_2_4", label: "4", before: "I never buy CDs. I always", after: "songs from the Internet.", options: ["download", "go", "surf"] },
              { id: "MY_B_2_5", label: "5", before: "Rock climbing isn't a safe sport. It's", after: ".", options: ["high", "dangerous", "strong"] }
            ],
            answers: {
              "MY_B_2_1": { expected: ["the drums"], explanation: "Plays the drums." },
              "MY_B_2_2": { expected: ["do"], explanation: "Do pottery." },
              "MY_B_2_3": { expected: ["speakers"], explanation: "Speakers for listening to music." },
              "MY_B_2_4": { expected: ["download"], explanation: "Download songs from the Internet." },
              "MY_B_2_5": { expected: ["dangerous"], explanation: "Not safe: dangerous." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the texts with the words in the box. There is one extra word.",
            points: 5,
            type: "word-bank",
            wordBank: ["angry", "cheaper", "expensive", "pretty", "scared", "tired"],
            example: "Ann: I want to buy a dress for Donna's party but I don't like these dresses. They're ⁰boring.",
            usedInExample: ["boring"],
            sentences: [
              { textBefore: "Jess: But that black dress is", gapId: "MY_B_3_1", label: "1", textAfter: "!" },
              { textBefore: "Ann: Yes, I love it! But it's £64.99! It's too", gapId: "MY_B_3_2", label: "2", textAfter: "!" },
              { textBefore: "Jess: What about a top? Tops are", gapId: "MY_B_3_3", label: "3", textAfter: ". You can buy a jumper for £15.<br>Ann: It's too warm for a jumper.<br>Jess: Go to another shop." },
              { textBefore: "Ann: No, I'm", gapId: "MY_B_3_4", label: "4", textAfter: ". I want to go home.<br>Jess: Your sister's got a cool dress. Why don't you wear that?" },
              { textBefore: "Ann: I can't. She gets", gapId: "MY_B_3_5", label: "5", textAfter: "when I take her clothes." }
            ],
            answers: {
              "MY_B_3_1": { expected: ["pretty"], explanation: "That black dress is pretty." },
              "MY_B_3_2": { expected: ["expensive"], explanation: "£64.99 is too expensive." },
              "MY_B_3_3": { expected: ["cheaper"], explanation: "Tops are cheaper." },
              "MY_B_3_4": { expected: ["tired"], explanation: "I'm tired. I want to go home." },
              "MY_B_3_5": { expected: ["angry"], explanation: "Gets angry when taking clothes." }
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
            title: "Complete the text with the Present Simple form of the verbs.",
            points: 5,
            type: "grammar-gap",
            context: "My life (by Becky Taylor, 2nd July)",
            example: "My family and I ⁰are always (always / be) at home on Sunday evening.",
            items: [
              { id: "MY_B_4_1", label: "1", textBefore: "My sister", verb: "usually / play", textAfter: "computer games because she" },
              { id: "MY_B_4_2", label: "2", textBefore: "", verb: "not like", textAfter: "watching TV. My brother and I" },
              { id: "MY_B_4_3", label: "3", textBefore: "", verb: "do", textAfter: "our homework. We" },
              { id: "MY_B_4_4", label: "4", textBefore: "", verb: "not have", textAfter: "a big dinner. What" },
              { id: "MY_B_4_5", label: "5", textBefore: "", verb: "you / do", textAfter: "on Sunday evenings?" }
            ],
            answers: {
              "MY_B_4_1": { expected: ["usually plays"], explanation: "Usually plays." },
              "MY_B_4_2": { expected: ["doesn't like", "does not like"], explanation: "Present Simple negative for she: doesn't like." },
              "MY_B_4_3": { expected: ["do"], explanation: "Present Simple for we: do." },
              "MY_B_4_4": { expected: ["don't have", "do not have"], explanation: "Present Simple negative for we: don't have." },
              "MY_B_4_5": { expected: ["do you do"], explanation: "Question form: do you do." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the Present Continuous form of the verbs in the box.",
            points: 5,
            type: "grammar-gap",
            context: "My life (by Becky Taylor, 8th July)",
            example: "I ⁰'m sitting (sit) under an umbrella.",
            items: [
              { id: "MY_B_5_1", label: "1", textBefore: "Today I'm at the beach with my friends. I'm sitting under an umbrella. Ruby and George", verb: "take", textAfter: "photos. Clara" },
              { id: "MY_B_5_2", label: "2", textBefore: "", verb: "not look", textAfter: "at the sea. She" },
              { id: "MY_B_5_3", label: "3", textBefore: "", verb: "read", textAfter: "a magazine. We" },
              { id: "MY_B_5_4", label: "4", textBefore: "", verb: "not swim", textAfter: "because the water is too cold. But where" },
              { id: "MY_B_5_5", label: "5", textBefore: "", verb: "Lacey and Joe / go", textAfter: "? To the ice cream shop!" }
            ],
            answers: {
              "MY_B_5_1": { expected: ["are taking"], explanation: "Ruby and George are taking." },
              "MY_B_5_2": { expected: ["isn't looking", "is not looking"], explanation: "Clara isn't looking." },
              "MY_B_5_3": { expected: ["is reading"], explanation: "She is reading." },
              "MY_B_5_4": { expected: ["aren't swimming", "are not swimming"], explanation: "We aren't swimming." },
              "MY_B_5_5": { expected: ["are Lacey and Joe going"], explanation: "Question form: are Lacey and Joe going." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the sentences. Use one word in each gap.",
            points: 5,
            type: "grammar-gap",
            example: "0 There is a lot of water in the river this summer.",
            items: [
              { id: "MY_B_6_1", label: "1", textBefore: "Blue whales are bigger", textAfter: "elephants!" },
              { id: "MY_B_6_2", label: "2", textBefore: "I think football is the", textAfter: "exciting sport in the world." },
              { id: "MY_B_6_3", label: "3", textBefore: "Is there", textAfter: "flour in the kitchen?" },
              { id: "MY_B_6_4", label: "4", textBefore: "How", textAfter: "eggs do we need to make a cake?" },
              { id: "MY_B_6_5", label: "5", textBefore: "Strawberry ice cream is good but chocolate ice cream is", textAfter: "." }
            ],
            answers: {
              "MY_B_6_1": { expected: ["than"], explanation: "Bigger than." },
              "MY_B_6_2": { expected: ["most"], explanation: "The most exciting." },
              "MY_B_6_3": { expected: ["any"], explanation: "Any in question with uncountable (flour)." },
              "MY_B_6_4": { expected: ["many"], explanation: "How many eggs (countable plural)." },
              "MY_B_6_5": { expected: ["better"], explanation: "Comparative of good: better." }
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
            title: "Listen and complete the notes. Write one word or number in each gap.",
            points: 6,
            type: "listening-gap",
            audioTrack: "assets/audio/gg2_track_10_mid_year.mp3",
            audioTitle: "Track 10: Mid-Year Test (Units 1–4)",
            audioDesc: "Listen to an interview with actor Brandon Murphy.",
            example: "How old? ⁰25 years old",
            items: [
              { id: "MY_B_7_1", label: "1", before: "Favourite sport: football,", after: "and karate" },
              { id: "MY_B_7_2", label: "2", before: "Favourite food:", after: "and salad" },
              { id: "MY_B_7_3", label: "3", before: "Doesn't like: ham and", after: "" },
              { id: "MY_B_7_4", label: "4", before: "Hobbies: likes reading books about", after: "and Science" },
              { id: "MY_B_7_5", label: "5", before: "likes playing", after: "" },
              { id: "MY_B_7_6", label: "6", before: "Favourite thing: his tablet and", after: "" }
            ],
            answers: {
              "MY_B_7_1": { expected: ["windsurfing"], explanation: "Windsurfing." },
              "MY_B_7_2": { expected: ["fish"], explanation: "Fish and salad." },
              "MY_B_7_3": { expected: ["sausages"], explanation: "Sausages." },
              "MY_B_7_4": { expected: ["History", "history"], explanation: "Books about History." },
              "MY_B_7_5": { expected: ["chess"], explanation: "Likes playing chess." },
              "MY_B_7_6": { expected: ["phone", "mobile phone"], explanation: "His tablet and phone." }
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
            title: "Match questions 1–8 with answers a–i. There is one extra answer.",
            points: 8,
            type: "matching-dialogue",
            example: "0 How do you spell your name? -> j: G-A-B-R-I-E-L.",
            optionsList: [
              { key: "a", text: "Hang on." },
              { key: "b", text: "Toy Story 2." },
              { key: "c", text: "gabrieloak@fftmc.com" },
              { key: "d", text: "See you soon." },
              { key: "e", text: "I like them but I think tomatoes are the best." },
              { key: "f", text: "In Canada." },
              { key: "g", text: "No, thanks." },
              { key: "h", text: "A ham and cheese sandwich, please." },
              { key: "i", text: "In my opinion, they're great!" }
            ],
            items: [
              { id: "MY_B_8_1", label: "1", prompt: "What would you like to eat?" },
              { id: "MY_B_8_2", label: "2", prompt: "What do you think of action films?" },
              { id: "MY_B_8_3", label: "3", prompt: "Where does your cousin live?" },
              { id: "MY_B_8_4", label: "4", prompt: "What's your email address?" },
              { id: "MY_B_8_5", label: "5", prompt: "Can I speak to Hannah, please?" },
              { id: "MY_B_8_6", label: "6", prompt: "My favourite vegetables are potatoes. What about you?" },
              { id: "MY_B_8_7", label: "7", prompt: "What's your favourite film?" },
              { id: "MY_B_8_8", label: "8", prompt: "Anything else?" }
            ],
            answers: {
              "MY_B_8_1": { expected: ["h"], explanation: "Food request: A ham and cheese sandwich, please." },
              "MY_B_8_2": { expected: ["i"], explanation: "Opinion on films: In my opinion, they're great!" },
              "MY_B_8_3": { expected: ["f"], explanation: "Location: In Canada." },
              "MY_B_8_4": { expected: ["c"], explanation: "Email address." },
              "MY_B_8_5": { expected: ["a"], explanation: "Phone reply: Hang on." },
              "MY_B_8_6": { expected: ["e"], explanation: "Vegetable opinion: I like them but I think tomatoes are the best." },
              "MY_B_8_7": { expected: ["b"], explanation: "Film title: Toy Story 2." },
              "MY_B_8_8": { expected: ["g"], explanation: "Decline additional items: No, thanks." }
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
            passageTitle: "The van Buren family",
            passage: "Mr and Mrs van Buren travel a lot for their work and their children, Jackie and Miles, travel with them. The children have lessons every day, but not in a classroom. They learn at home, and 'home' is a different country every month.\n\nThis month the van Buren family are in Austria. Today, Jackie and Miles are visiting the Kunzhistorisches Museum in Vienna. Jackie is interested in history, so she is looking at some old things and writing an essay about Egyptian history. Miles is interested in art and he is studying some famous paintings.\n\nThe easiest subject for the children is Geography. They learn about it from real life: they visit a lot of countries and they see real rivers, lakes, islands, mountains and other geographical features. Mrs van Buren teaches them Maths and her husband teaches them Science. The children also use the Internet a lot. They send their homework to their parents' laptops and their parents talk about it with them.\n\nThey also chat with their friends in the UK.",
            items: [
              { id: "MY_B_9_1", label: "1", statement: "The family are in Austria this month.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_2", label: "2", statement: "Jackie is writing an essay about paintings.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_3", label: "3", statement: "Miles loves History.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_4", label: "4", statement: "Jackie and Miles think Geography is an easy subject.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_5", label: "5", statement: "The children's father teaches them Maths.", options: ["T", "F", "DS"] },
              { id: "MY_B_9_6", label: "6", statement: "The children have got a lot of friends in Austria.", options: ["T", "F", "DS"] }
            ],
            answers: {
              "MY_B_9_1": { expected: ["T"], explanation: "True: This month the van Buren family are in Austria." },
              "MY_B_9_2": { expected: ["F"], explanation: "False: writing an essay about Egyptian history." },
              "MY_B_9_3": { expected: ["DS"], explanation: "Doesn't say: text says Miles is interested in art, doesn't mention his feeling about History." },
              "MY_B_9_4": { expected: ["T"], explanation: "True: The easiest subject for the children is Geography." },
              "MY_B_9_5": { expected: ["F"], explanation: "False: Father teaches them Science (mother teaches Maths)." },
              "MY_B_9_6": { expected: ["DS"], explanation: "Doesn't say: text mentions friends in UK, not Austria." }
            }
          }
        ]
      }
    }
  }
};
