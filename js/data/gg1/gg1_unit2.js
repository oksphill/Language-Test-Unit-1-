/**
 * Go Getter 1 - Unit 2 Language Test
 * Clothes, Possessions & 'To Be' Questions / Demonstratives
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG1_UNIT_2_DATA = {
  id: "unit2",
  courseId: "gogetter1",
  number: 2,
  title: "Clothes & Personal Possessions",
  description: "Vocabulary: Clothes, accessories, gadgets. Grammar: Demonstrative pronouns (this, that, these, those), To be: questions and short answers. Communication: Asking for personal information.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 2",
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
            title: "Look at the picture. Complete the words.",
            points: 7,
            type: "letter-hint",
            imageKey: "gg1_u2_room_a",
            example: "Mrs Bailey's ⁰top is black and white.",
            items: [
              { id: "A_1_1", label: "1", textBefore: "Her", displayHint: "s _ _ _ t", prefix: "s", textAfter: "and her coat are long, but they aren't too long." },
              { id: "A_1_2", label: "2", textBefore: "Kim's dress is blue. Her jacket is", displayHint: "s _ _ _ t", prefix: "s", textAfter: "." },
              { id: "A_1_3", label: "3", textBefore: "Mr Bailey's shoes,", displayHint: "j _ _ _ _ r", prefix: "j", textAfter: "and trousers aren't cool." },
              { id: "A_1_4", label: "4", textBefore: "They're", displayHint: "b _ _ _ _ g", prefix: "b", textAfter: "." },
              { id: "A_1_5", label: "5", textBefore: "Fiona's hoodie is", displayHint: "t _ o", prefix: "t", textAfter: "big. Her shoes are old and her jeans are too long." },
              { id: "A_1_6", label: "6", textBefore: "Ricky's cap is green. His", displayHint: "t _ _ _ _ _ _ _ t", prefix: "t", textAfter: "is brown, but it's too small." },
              { id: "A_1_7", label: "7", textBefore: "His trainers are", displayHint: "n _ w", prefix: "n", textAfter: "." }
            ],
            answers: {
              "A_1_1": { expected: ["skirt"], explanation: "A piece of clothing for women hanging from the waist is a skirt." },
              "A_1_2": { expected: ["short"], explanation: "Opposite of long is short." },
              "A_1_3": { expected: ["jumper"], explanation: "Knitted piece of clothing for the upper body is a jumper." },
              "A_1_4": { expected: ["boring"], explanation: "Not cool or interesting: boring." },
              "A_1_5": { expected: ["too"], explanation: "Too big means excessively big." },
              "A_1_6": { expected: ["tracksuit"], explanation: "A suit of trousers and jacket for sports is a tracksuit." },
              "A_1_7": { expected: ["new"], explanation: "Opposite of old is new." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture in Exercise 1. Write the words.",
            points: 4,
            type: "word-bank",
            example: "0 F is a laptop computer.",
            sentences: [
              { textBefore: "1 J is a", gapId: "A_2_1", label: "1", textAfter: "." },
              { textBefore: "2 D is a", gapId: "A_2_2", label: "2", textAfter: "." },
              { textBefore: "3 Z is a", gapId: "A_2_3", label: "3", textAfter: "." },
              { textBefore: "4 S is a", gapId: "A_2_4", label: "4", textAfter: "." }
            ],
            answers: {
              "A_2_1": { expected: ["games console", "console", "mobile phone"], explanation: "J is a games console (or mobile phone)." },
              "A_2_2": { expected: ["digital camera", "camera", "DVD player", "television", "TV"], explanation: "D is a digital camera / TV." },
              "A_2_3": { expected: ["skateboard"], explanation: "Z is a skateboard." },
              "A_2_4": { expected: ["bag", "schoolbag", "school bag", "backpack"], explanation: "S is a bag / schoolbag." }
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
            title: "Write this, that, these or those in the sentences.",
            points: 4,
            type: "circle-choice",
            example: "0 This is your T-shirt. (short arrow)",
            items: [
              { id: "A_3_1", label: "1", before: "", after: "are my hoodies. (near ⇨)", options: ["This", "That", "These", "Those"] },
              { id: "A_3_2", label: "2", before: "", after: "jeans aren't old. (far ⇨⇨)", options: ["This", "That", "These", "Those"] },
              { id: "A_3_3", label: "3", before: "", after: "cap isn't Andy's. (far ⇨⇨)", options: ["This", "That", "These", "Those"] },
              { id: "A_3_4", label: "4", before: "", after: "top is Mum's. (near ⇨)", options: ["This", "That", "These", "Those"] }
            ],
            answers: {
              "A_3_1": { expected: ["These"], explanation: "Near and plural: These." },
              "A_3_2": { expected: ["Those"], explanation: "Far and plural: Those." },
              "A_3_3": { expected: ["That"], explanation: "Far and singular: That." },
              "A_3_4": { expected: ["This"], explanation: "Near and singular: This." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write questions.",
            points: 5,
            type: "sentence-order",
            example: "0 is / old / it / too / ? -> Is it too old?",
            items: [
              { id: "A_4_1", label: "1", prompt: "they / best friends / are / ?" },
              { id: "A_4_2", label: "2", prompt: "cousin / he / Olivia's / is / ?" },
              { id: "A_4_3", label: "3", prompt: "for me / new / are / comic books / those / ?" },
              { id: "A_4_4", label: "4", prompt: "from / where / is / she / ?" },
              { id: "A_4_5", label: "5", prompt: "you / in the park / are / ?" }
            ],
            answers: {
              "A_4_1": { expected: ["Are they best friends?"], explanation: "Be + Subject + Complement: Are they best friends?" },
              "A_4_2": { expected: ["Is he Olivia's cousin?"], explanation: "Be + Subject + Complement: Is he Olivia's cousin?" },
              "A_4_3": { expected: ["Are those comic books new for me?", "Are those new comic books for me?"], explanation: "Question word order: Are those comic books new for me?" },
              "A_4_4": { expected: ["Where is she from?"], explanation: "Wh-word + be + subject + preposition: Where is she from?" },
              "A_4_5": { expected: ["Are you in the park?"], explanation: "Be + subject + prepositional phrase: Are you in the park?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Answer the questions with short answers.",
            points: 5,
            type: "grammar-gap",
            example: "A: Are those hoodies cool? B: Yes, they are. [✓] / No, they aren't. [✗]",
            items: [
              { id: "A_5_1", label: "1", textBefore: "A: Is Nicolas in the garden?<br>B:", prompt: "✗", textAfter: "" },
              { id: "A_5_2", label: "2", textBefore: "A: Is the suit too old?<br>B:", prompt: "✓", textAfter: "" },
              { id: "A_5_3", label: "3", textBefore: "A: Are you and your sister happy?<br>B:", prompt: "✗", textAfter: "" },
              { id: "A_5_4", label: "4", textBefore: "A: Are these trousers too long?<br>B:", prompt: "✓", textAfter: "" },
              { id: "A_5_5", label: "5", textBefore: "A: Is your mum Spanish?<br>B:", prompt: "✓", textAfter: "" }
            ],
            answers: {
              "A_5_1": { expected: ["No, he isn't.", "No, he's not.", "No, he is not."], explanation: "Negative short answer for Nicolas (he): No, he isn't." },
              "A_5_2": { expected: ["Yes, it is."], explanation: "Positive short answer for the suit (it): Yes, it is." },
              "A_5_3": { expected: ["No, we aren't.", "No, we're not.", "No, we are not."], explanation: "Negative short answer for you and your sister (we): No, we aren't." },
              "A_5_4": { expected: ["Yes, they are."], explanation: "Positive short answer for trousers (they): Yes, they are." },
              "A_5_5": { expected: ["Yes, she is."], explanation: "Positive short answer for your mum (she): Yes, she is." }
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
            type: "word-bank",
            example: "Harry: Hi. ⁰What's your name?",
            sentences: [
              { textBefore: "Mia: My name's Mia.<br>Harry: 1", gapId: "A_6_1", label: "1", textAfter: "are you from, Mia?" },
              { textBefore: "Mia: I'm from Rome. I'm Italian.<br>Harry: How 2", gapId: "A_6_2", label: "2", textAfter: "are you?" },
              { textBefore: "Mia: I'm eleven 3", gapId: "A_6_3", label: "3", textAfter: "old.<br>Harry: 4" },
              { textBefore: "'s your favourite actor?<br>Mia: Good question. Ryan Gosling.<br>Harry: And 5", gapId: "A_6_4", label: "4", textAfter: "" },
              { textBefore: "'s your favourite film?<br>Mia: The Jungle Book. It's fantastic.<br>Harry: It's my favourite film too.", gapId: "A_6_5", label: "5", textAfter: "" }
            ],
            answers: {
              "A_6_1": { expected: ["Where", "where"], explanation: "Where are you from?" },
              "A_6_2": { expected: ["old"], explanation: "How old are you?" },
              "A_6_3": { expected: ["years"], explanation: "I'm eleven years old." },
              "A_6_4": { expected: ["Who", "who"], explanation: "Who's your favourite actor?" },
              "A_6_5": { expected: ["what", "What", "which", "Which"], explanation: "What's your favourite film?" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 2",
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
            title: "Look at the picture. Complete the words.",
            points: 7,
            type: "letter-hint",
            imageKey: "gg1_u2_room_b",
            example: "Mr Grey's ⁰shoes, jumper and trousers are boring.",
            items: [
              { id: "B_1_1", label: "1", textBefore: "They aren't", displayHint: "c _ _ l", prefix: "c", textAfter: "." },
              { id: "B_1_2", label: "2", textBefore: "Judy's", displayHint: "h _ _ _ _ e", prefix: "h", textAfter: "is too big." },
              { id: "B_1_3", label: "3", textBefore: "Her shoes are too", displayHint: "o _ d", prefix: "o", textAfter: "and her jeans are too long." },
              { id: "B_1_4", label: "4", textBefore: "Eddie's cap is red. His tracksuit is blue, but it's", displayHint: "t _ o", prefix: "t", textAfter: "small." },
              { id: "B_1_5", label: "5", textBefore: "His", displayHint: "t _ _ _ _ _ _ s", prefix: "t", textAfter: "are new." },
              { id: "B_1_6", label: "6", textBefore: "Lily's dress is pink. Her short", displayHint: "j _ _ _ t", prefix: "j", textAfter: "is pink too." },
              { id: "B_1_7", label: "7", textBefore: "Mrs Grey's top is black and white. Her coat and her", displayHint: "s _ _ _ t", prefix: "s", textAfter: "are long, but they aren't too long." }
            ],
            answers: {
              "B_1_1": { expected: ["cool"], explanation: "Opposite of boring/uncool: cool." },
              "B_1_2": { expected: ["hoodie"], explanation: "A sweatshirt with a hood is a hoodie." },
              "B_1_3": { expected: ["old"], explanation: "Opposite of new: old." },
              "B_1_4": { expected: ["too"], explanation: "Excessively small: too small." },
              "B_1_5": { expected: ["trainers"], explanation: "Sports shoes: trainers." },
              "B_1_6": { expected: ["jacket"], explanation: "Short jacket." },
              "B_1_7": { expected: ["skirt"], explanation: "Woman's clothing item: skirt." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Look at the picture in Exercise 1. Write the words.",
            points: 4,
            type: "word-bank",
            example: "0 D is a laptop computer.",
            sentences: [
              { textBefore: "1 U is a", gapId: "B_2_1", label: "1", textAfter: "." },
              { textBefore: "2 T is a", gapId: "B_2_2", label: "2", textAfter: "." },
              { textBefore: "3 R is a", gapId: "B_2_3", label: "3", textAfter: "." },
              { textBefore: "4 L is a", gapId: "B_2_4", label: "4", textAfter: "." }
            ],
            answers: {
              "B_2_1": { expected: ["mountain bike", "bike", "bicycle"], explanation: "U is a mountain bike / bike." },
              "B_2_2": { expected: ["bag", "schoolbag", "school bag", "backpack"], explanation: "T is a bag / schoolbag." },
              "B_2_3": { expected: ["games console", "console", "mobile phone", "television", "TV"], explanation: "R is a games console / TV." },
              "B_2_4": { expected: ["skateboard"], explanation: "L is a skateboard." }
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
            title: "Write this, that, these or those in the sentences.",
            points: 4,
            type: "circle-choice",
            example: "0 This is your T-shirt. (short arrow)",
            items: [
              { id: "B_3_1", label: "1", before: "", after: "suit isn't John's. (far ⇨⇨)", options: ["This", "That", "These", "Those"] },
              { id: "B_3_2", label: "2", before: "", after: "are his trainers. (near ⇨)", options: ["This", "That", "These", "Those"] },
              { id: "B_3_3", label: "3", before: "", after: "trousers aren't old. (far ⇨⇨)", options: ["This", "That", "These", "Those"] },
              { id: "B_3_4", label: "4", before: "", after: "dress is Lucy's. (near ⇨)", options: ["This", "That", "These", "Those"] }
            ],
            answers: {
              "B_3_1": { expected: ["That"], explanation: "Far and singular: That." },
              "B_3_2": { expected: ["These"], explanation: "Near and plural: These." },
              "B_3_3": { expected: ["Those"], explanation: "Far and plural: Those." },
              "B_3_4": { expected: ["This"], explanation: "Near and singular: This." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Write questions.",
            points: 5,
            type: "sentence-order",
            example: "0 is / old / it / too / ? -> Is it too old?",
            items: [
              { id: "B_4_1", label: "1", prompt: "how / is / he / old / ?" },
              { id: "B_4_2", label: "2", prompt: "good / they / students / are / ?" },
              { id: "B_4_3", label: "3", prompt: "you / in the garden / are / ?" },
              { id: "B_4_4", label: "4", prompt: "these / for me / old / are / comic books / ?" },
              { id: "B_4_5", label: "5", prompt: "aunt / she / Joe's / is / ?" }
            ],
            answers: {
              "B_4_1": { expected: ["How old is he?"], explanation: "Wh-question: How old is he?" },
              "B_4_2": { expected: ["Are they good students?"], explanation: "Yes/No question: Are they good students?" },
              "B_4_3": { expected: ["Are you in the garden?"], explanation: "Yes/No question: Are you in the garden?" },
              "B_4_4": { expected: ["Are these old comic books for me?", "Are these comic books old for me?"], explanation: "Are these comic books old for me?" },
              "B_4_5": { expected: ["Is she Joe's aunt?"], explanation: "Yes/No question: Is she Joe's aunt?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Answer the questions with short answers.",
            points: 5,
            type: "grammar-gap",
            example: "A: Are those hoodies cool? B: Yes, they are. [✓] / No, they aren't. [✗]",
            items: [
              { id: "B_5_1", label: "1", textBefore: "A: Are you and your best friend on holiday?<br>B:", prompt: "✓", textAfter: "" },
              { id: "B_5_2", label: "2", textBefore: "A: Is her dad Italian?<br>B:", prompt: "✗", textAfter: "" },
              { id: "B_5_3", label: "3", textBefore: "A: Are those shoes too small for you?<br>B:", prompt: "✗", textAfter: "" },
              { id: "B_5_4", label: "4", textBefore: "A: Is Helen at home?<br>B:", prompt: "✓", textAfter: "" },
              { id: "B_5_5", label: "5", textBefore: "A: Is the jacket too long?<br>B:", prompt: "✗", textAfter: "" }
            ],
            answers: {
              "B_5_1": { expected: ["Yes, we are."], explanation: "Positive short answer for you and your friend (we): Yes, we are." },
              "B_5_2": { expected: ["No, he isn't.", "No, he's not.", "No, he is not."], explanation: "Negative short answer for her dad (he): No, he isn't." },
              "B_5_3": { expected: ["No, they aren't.", "No, they're not.", "No, they are not."], explanation: "Negative short answer for shoes (they): No, they aren't." },
              "B_5_4": { expected: ["Yes, she is."], explanation: "Positive short answer for Helen (she): Yes, she is." },
              "B_5_5": { expected: ["No, it isn't.", "No, it's not.", "No, it is not."], explanation: "Negative short answer for jacket (it): No, it isn't." }
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
            type: "word-bank",
            example: "Ann: Hi. ⁰What's your name?",
            sentences: [
              { textBefore: "Claude: Claude. Claude Dubois.<br>Ann: How 1", gapId: "B_6_1", label: "1", textAfter: "are you, Claude?" },
              { textBefore: "Claude: I'm twelve 2", gapId: "B_6_2", label: "2", textAfter: "old.<br>Ann: I'm eleven. Where are you 3" },
              { textBefore: "?<br>Claude: Paris. I'm French.<br>Ann: 4", gapId: "B_6_3", label: "3", textAfter: "are your favourite sports?" },
              { textBefore: "Claude: Football and tennis.<br>Ann: 5", gapId: "B_6_4", label: "4", textAfter: "'s your favourite sports person?" },
              { textBefore: "Claude: Roger Federer. He's fantastic!<br>Ann: High five! He's my favourite sports person too.", gapId: "B_6_5", label: "5", textAfter: "" }
            ],
            answers: {
              "B_6_1": { expected: ["old"], explanation: "How old are you?" },
              "B_6_2": { expected: ["years"], explanation: "I'm twelve years old." },
              "B_6_3": { expected: ["from"], explanation: "Where are you from?" },
              "B_6_4": { expected: ["What", "what", "Which", "which"], explanation: "What are your favourite sports?" },
              "B_6_5": { expected: ["Who", "who"], explanation: "Who's your favourite sports person?" }
            }
          }
        ]
      }
    }
  }
};
