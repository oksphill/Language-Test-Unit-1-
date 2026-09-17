/**
 * Language Test Unit 8 - Feelings and Relationships
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.UNIT_8_DATA = {
  id: "unit8",
  number: 8,
  title: "Feelings and Relationships",
  description: "Vocabulary: Relationships, Feelings and emotions. Grammar: be allowed to vs let, Tenses review, Future review. Communication: Sympathising and encouraging.",

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 8",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 13,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the letter to a problem page with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["argue", "argues", "be", "get", "is", "says", "shouts"],
            example: "I would love to ⁰get on with my sister, but it's difficult.",
            usedInExample: ["get"],
            context: "Dear Maggie, I would love to get on with my sister, but it's difficult.",
            sentences: [
              { textBefore: "We", gapId: "A_1_1", label: "1", textAfter: "about everything!" },
              { textBefore: "When she", gapId: "A_1_2", label: "2", textAfter: "at me, I always forgive her." },
              { textBefore: "But she never", gapId: "A_1_3", label: "3", textAfter: "sorry." },
              { textBefore: "I", gapId: "A_1_4", label: "4", textAfter: "really angry about that!" },
              { textBefore: "I try to", gapId: "A_1_5", label: "5", textAfter: "nice to her but she", gapId2: "A_1_6", label2: "6", textAfter2: "usually in a bad mood. Please help me! Jason" }
            ],
            answers: {
              "A_1_1": { expected: ["argue", "argues"], explanation: "To disagree angrily: 'We argue about everything!'" },
              "A_1_2": { expected: ["shouts"], explanation: "To speak very loudly in anger: 'When she shouts at me...'" },
              "A_1_3": { expected: ["says"], explanation: "Collocation: 'says sorry' (apologises)." },
              "A_1_4": { expected: ["get"], explanation: "Collocation: 'get angry' (become angry)." },
              "A_1_5": { expected: ["be"], explanation: "Collocation: 'be nice to someone'." },
              "A_1_6": { expected: ["is"], explanation: "State of feeling: 'she is usually in a bad mood'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with adjectives for feelings.",
            points: 7,
            type: "letter-hint",
            example: "0 My cat is sick and I am very upset.",
            items: [
              { id: "A_2_1", label: "1", textBefore: "Her classmates laughed at her and she felt", displayHint: "e _ _ _ _ _ _ _ _ _ d", placeholder: "embarrassed", prefix: "e", textAfter: "." },
              { id: "A_2_2", label: "2", textBefore: "He needs to rest. He's", displayHint: "e _ _ _ _ _ _ _ d", placeholder: "exhausted", prefix: "e", textAfter: "." },
              { id: "A_2_3", label: "3", textBefore: "I was", displayHint: "t _ _ _ _ _ _ d", placeholder: "terrified", prefix: "t", textAfter: "when I saw the bear outside my tent." },
              { id: "A_2_4", label: "4", textBefore: "They didn't tell the truth and their mother was", displayHint: "f _ _ _ _ _ s", placeholder: "furious", prefix: "f", textAfter: "." },
              { id: "A_2_5", label: "5", textBefore: "Her friend got a part in the play, but she didn't. She was so", displayHint: "j _ _ _ _ _ s", placeholder: "jealous", prefix: "j", textAfter: "!" },
              { id: "A_2_6", label: "6", textBefore: "My brother broke my favourite mug. I'm", displayHint: "a _ _ _ _ _ d", placeholder: "annoyed", prefix: "a", textAfter: "." },
              { id: "A_2_7", label: "7", textBefore: "Dad was", displayHint: "d _ _ _ _ _ _ _ _ _ _ _ d", placeholder: "disappointed", prefix: "d", textAfter: "with the football match results. Our team played really badly!" }
            ],
            answers: {
              "A_2_1": { expected: ["embarrassed"], explanation: "Feeling self-conscious and uncomfortable: 'embarrassed'." },
              "A_2_2": { expected: ["exhausted"], explanation: "Extremely tired: 'exhausted'." },
              "A_2_3": { expected: ["terrified"], explanation: "Extremely frightened: 'terrified'." },
              "A_2_4": { expected: ["furious"], explanation: "Extremely angry: 'furious'." },
              "A_2_5": { expected: ["jealous"], explanation: "Envious of someone else's success: 'jealous'." },
              "A_2_6": { expected: ["annoyed"], explanation: "Slightly angry or irritated: 'annoyed'." },
              "A_2_7": { expected: ["disappointed", "disappointment"], explanation: "Sad because hopes were not fulfilled: 'disappointed'." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 17,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the correct form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 I am allowed to (be allowed to) stay up late at the weekend.",
            items: [
              { id: "A_3_1", label: "1", before: "", verb: "you / let", after: "your brother borrow your clothes?" },
              { id: "A_3_2", label: "2", before: "She", verb: "not be allowed to", after: "walk home alone." },
              { id: "A_3_3", label: "3", before: "Our parents", verb: "let", after: "us watch this TV programme." },
              { id: "A_3_4", label: "4", before: "", verb: "the children / be allowed to", after: "eat sweets?" },
              { id: "A_3_5", label: "5", before: "My teacher", verb: "not let", after: "us use a dictionary in tests." }
            ],
            answers: {
              "A_3_1": { expected: ["Do you let", "do you let"], explanation: "Present question with let: 'Do you let'." },
              "A_3_2": { expected: ["isn't allowed to", "is not allowed to"], explanation: "Negative permission with 3rd person singular: 'isn't allowed to'." },
              "A_3_3": { expected: ["let"], explanation: "Present Simple with plural parents: 'let'." },
              "A_3_4": { expected: ["Are the children allowed to", "are the children allowed to"], explanation: "Question with be allowed to: 'Are the children allowed to'." },
              "A_3_5": { expected: ["doesn't let", "does not let"], explanation: "Negative Present Simple with singular teacher: 'doesn't let'." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Circle the correct forms.",
            points: 7,
            type: "circle-choice",
            example: "0 I usually ⁰go out / am going out with my friends at the weekend.",
            items: [
              { id: "A_4_1", label: "1", before: "Sarah", options: ["had", "has had"], after: "dinner two hours ago." },
              { id: "A_4_2", label: "2", before: "While I", options: ["explored", "was exploring"], after: "the city, I got lost." },
              { id: "A_4_3", label: "3", before: "Gerry", options: ["doesn't get up", "isn't getting up"], after: "at the same time every day." },
              { id: "A_4_4", label: "4", before: "We", options: ["are", "have been"], after: "best friends for six years." },
              { id: "A_4_5", label: "5", before: "What", options: ["do the children watch", "are the children watching"], after: "at the moment?" },
              { id: "A_4_6", label: "6", before: "They", options: ["didn't take", "haven't taken"], after: "the bus to school yesterday." },
              { id: "A_4_7", label: "7", before: "I", options: ["visit", "am visiting"], after: "my grandparents tomorrow afternoon." }
            ],
            answers: {
              "A_4_1": { expected: ["had"], explanation: "Past Simple with finished past time 'two hours ago': 'had'." },
              "A_4_2": { expected: ["was exploring"], explanation: "Past Continuous after 'While': 'was exploring'." },
              "A_4_3": { expected: ["doesn't get up"], explanation: "Present Simple for a habit / routine ('every day'): 'doesn't get up'." },
              "A_4_4": { expected: ["have been"], explanation: "Present Perfect with 'for six years' continuing up to now: 'have been'." },
              "A_4_5": { expected: ["are the children watching"], explanation: "Present Continuous for action happening now ('at the moment'): 'are the children watching'." },
              "A_4_6": { expected: ["didn't take"], explanation: "Past Simple with 'yesterday': 'didn't take'." },
              "A_4_7": { expected: ["am visiting"], explanation: "Present Continuous for future fixed arrangement ('tomorrow afternoon'): 'am visiting'." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences. Use the correct form of going to or will and the words in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 I hope she will arrive (she / arrive) soon. (prediction)",
            items: [
              { id: "A_5_1", label: "1", before: "I'm sure", verb: "they / not enjoy", after: "the film. (prediction)" },
              { id: "A_5_2", label: "2", before: "", verb: "I / not travel", after: "to London by train. (plan)" },
              { id: "A_5_3", label: "3", before: "What", verb: "he / make", after: "for dinner? (plan)" },
              { id: "A_5_4", label: "4", before: "I think", verb: "it / rain", after: "tomorrow. (prediction)" },
              { id: "A_5_5", label: "5", before: "", verb: "you / call", after: "him tonight? (plan)" }
            ],
            answers: {
              "A_5_1": { expected: ["they won't enjoy", "they will not enjoy"], explanation: "Negative prediction with 'I'm sure': 'they won't enjoy'." },
              "A_5_2": { expected: ["I'm not going to travel", "I am not going to travel"], explanation: "Negative future plan with I: 'I'm not going to travel'." },
              "A_5_3": { expected: ["is he going to make"], explanation: "Question about future plan: 'is he going to make'." },
              "A_5_4": { expected: ["it will rain", "it'll rain"], explanation: "Prediction with 'I think': 'it will rain'." },
              "A_5_5": { expected: ["Are you going to call", "are you going to call"], explanation: "Question about plan tonight: 'Are you going to call'." }
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
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["a pity", "matter", "sorry", "that's disappointing", "up", "well done"],
            example: "0 A: Hi Jane. What's the ⁰matter? B: I failed my test.",
            usedInExample: ["matter"],
            dialogue: [
              {
                speaker: "A",
                parts: [
                  { before: "I'm so", gapId: "A_6_1", label: "1", after: "." }
                ]
              },
              { speaker: "A", text: "They haven't chosen me for the basketball team." },
              {
                speaker: "B",
                parts: [
                  { before: "Poor you!", gapId: "A_6_2", label: "2", after: "" }
                ]
              },
              {
                speaker: "A",
                parts: [
                  { before: "Hi Mark. What's", gapId: "A_6_3", label: "3", after: "?" }
                ]
              },
              { speaker: "B", text: "I can't come to your party." },
              {
                speaker: "A",
                parts: [
                  { before: "What", gapId: "A_6_4", label: "4", after: "!" }
                ]
              },
              { speaker: "A", text: "Guess what! I won first prize." },
              {
                speaker: "B",
                parts: [
                  { gapId: "A_6_5", label: "5", after: "!" }
                ]
              }
            ],
            answers: {
              "A_6_1": { expected: ["sorry"], explanation: "Sympathising: 'I'm so sorry.'" },
              "A_6_2": { expected: ["That's disappointing", "that's disappointing"], explanation: "Expressing sympathy: 'That's disappointing.'" },
              "A_6_3": { expected: ["up"], explanation: "Informal greeting inquiry: 'What's up?'" },
              "A_6_4": { expected: ["a pity"], explanation: "Expressing regret: 'What a pity!'" },
              "A_6_5": { expected: ["Well done", "well done"], explanation: "Congratulating on success: 'Well done!'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 8",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 13,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the letter to a problem page with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["argue", "argues", "get", "is", "rude", "says", "shouts"],
            example: "I would love to ⁰get on well with my brother Henry...",
            usedInExample: ["get"],
            context: "Dear Jenny, Please help me! I would love to get on well with my brother Henry, but it's difficult.",
            sentences: [
              { textBefore: "He", gapId: "B_1_1", label: "1", textAfter: "always in a bad mood." },
              { textBefore: "He", gapId: "B_1_2", label: "2", textAfter: "at people for no reason." },
              { textBefore: "He is often", gapId: "B_1_3", label: "3", textAfter: "to his friends and he never", gapId2: "B_1_4", label2: "4", textAfter2: "sorry to them." },
              { textBefore: "They", gapId: "B_1_5", label: "5", textAfter: "really angry about that!" },
              { textBefore: "He also", gapId: "B_1_6", label: "6", textAfter: "with me all the time. Alison" }
            ],
            answers: {
              "B_1_1": { expected: ["is"], explanation: "Present state: 'He is always in a bad mood.'" },
              "B_1_2": { expected: ["shouts"], explanation: "To yell loudly: 'He shouts at people...'" },
              "B_1_3": { expected: ["rude"], explanation: "Impolite to friends: 'rude to his friends'." },
              "B_1_4": { expected: ["says"], explanation: "Collocation: 'says sorry'." },
              "B_1_5": { expected: ["get"], explanation: "Collocation: 'get angry'." },
              "B_1_6": { expected: ["argues"], explanation: "To dispute angrily: 'He also argues with me...'" }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences with adjectives for feelings.",
            points: 7,
            type: "letter-hint",
            example: "0 My cat is sick and I am very upset.",
            items: [
              { id: "B_2_1", label: "1", textBefore: "She failed all her exams, so she feels", displayHint: "d _ _ _ _ _ _ _ d", placeholder: "depressed", prefix: "d", textAfter: "." },
              { id: "B_2_2", label: "2", textBefore: "Someone stole his bike last night. He was", displayHint: "f _ _ _ _ _ s", placeholder: "furious", prefix: "f", textAfter: "!" },
              { id: "B_2_3", label: "3", textBefore: "People laughed at me and I felt", displayHint: "e _ _ _ _ _ _ _ _ _ d", placeholder: "embarrassed", prefix: "e", textAfter: "." },
              { id: "B_2_4", label: "4", textBefore: "His brother got new trainers, but he didn't. He was", displayHint: "j _ _ _ _ _ s", placeholder: "jealous", prefix: "j", textAfter: "!" },
              { id: "B_2_5", label: "5", textBefore: "The film was scary and the children were", displayHint: "t _ _ _ _ _ _ d", placeholder: "terrified", prefix: "t", textAfter: "." },
              { id: "B_2_6", label: "6", textBefore: "I'm", displayHint: "e _ _ _ _ _ _ _ d", placeholder: "exhausted", prefix: "e", textAfter: "and I have to rest." },
              { id: "B_2_7", label: "7", textBefore: "Mum was really", displayHint: "a _ _ _ _ _ d", placeholder: "annoyed", prefix: "a", textAfter: "when she saw the mess in my bedroom." }
            ],
            answers: {
              "B_2_1": { expected: ["depressed"], explanation: "Deeply sad and dejected: 'depressed'." },
              "B_2_2": { expected: ["furious"], explanation: "Enraged: 'furious'." },
              "B_2_3": { expected: ["embarrassed"], explanation: "Awkward and self-conscious: 'embarrassed'." },
              "B_2_4": { expected: ["jealous"], explanation: "Envious: 'jealous'." },
              "B_2_5": { expected: ["terrified"], explanation: "Extremely scared: 'terrified'." },
              "B_2_6": { expected: ["exhausted"], explanation: "Worn out: 'exhausted'." },
              "B_2_7": { expected: ["annoyed"], explanation: "Irritated: 'annoyed'." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 17,
        tasks: [
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the correct form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "0 I am allowed to (be allowed to) stay up after midnight at the weekend.",
            items: [
              { id: "B_3_1", label: "1", before: "Mum", verb: "not let", after: "me cook on my own." },
              { id: "B_3_2", label: "2", before: "", verb: "you / be allowed to", after: "wear jeans to school?" },
              { id: "B_3_3", label: "3", before: "People", verb: "be allowed to", after: "take photos in the museum." },
              { id: "B_3_4", label: "4", before: "", verb: "you / let", after: "your brother use your laptop?" },
              { id: "B_3_5", label: "5", before: "He", verb: "not be allowed to", after: "eat in his bedroom." }
            ],
            answers: {
              "B_3_1": { expected: ["doesn't let", "does not let"], explanation: "Negative with singular Mum: 'doesn't let'." },
              "B_3_2": { expected: ["Are you allowed to", "are you allowed to"], explanation: "Question with be allowed to: 'Are you allowed to'." },
              "B_3_3": { expected: ["are allowed to"], explanation: "Plural people permission: 'are allowed to'." },
              "B_3_4": { expected: ["Do you let", "do you let"], explanation: "Question with let: 'Do you let'." },
              "B_3_5": { expected: ["isn't allowed to", "is not allowed to"], explanation: "Negative permission singular: 'isn't allowed to'." }
            }
          },
          {
            id: "task_4",
            number: 4,
            title: "Circle the correct forms.",
            points: 7,
            type: "circle-choice",
            example: "0 I usually ⁰go out / am going out with my friends at the weekend.",
            items: [
              { id: "B_4_1", label: "1", before: "We", options: ["know", "have known"], after: "them since 2016." },
              { id: "B_4_2", label: "2", before: "", options: ["Do the children have", "Are the children having"], after: "lunch at school every day?" },
              { id: "B_4_3", label: "3", before: "Karen", options: ["made", "has made"], after: "a chocolate cake two days ago." },
              { id: "B_4_4", label: "4", before: "We", options: ["swam", "were swimming"], after: "when we saw the dolphins." },
              { id: "B_4_5", label: "5", before: "He", options: ["didn't see", "hasn't seen"], after: "her yesterday." },
              { id: "B_4_6", label: "6", before: "She", options: ["already finished", "has already finished"], after: "her homework." },
              { id: "B_4_7", label: "7", before: "They", options: ["don't watch", "aren't watching"], after: "TV at the moment." }
            ],
            answers: {
              "B_4_1": { expected: ["have known"], explanation: "Present Perfect with 'since 2016': 'have known'." },
              "B_4_2": { expected: ["Do the children have", "do the children have"], explanation: "Present Simple habit with 'every day': 'Do the children have'." },
              "B_4_3": { expected: ["made"], explanation: "Past Simple with 'two days ago': 'made'." },
              "B_4_4": { expected: ["were swimming"], explanation: "Past Continuous background action interrupted by seeing dolphins: 'were swimming'." },
              "B_4_5": { expected: ["didn't see"], explanation: "Past Simple with 'yesterday': 'didn't see'." },
              "B_4_6": { expected: ["has already finished"], explanation: "Present Perfect with 'already': 'has already finished'." },
              "B_4_7": { expected: ["aren't watching"], explanation: "Present Continuous with 'at the moment': 'aren't watching'." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences. Use the correct form of going to or will and the words in brackets.",
            points: 5,
            type: "grammar-gap",
            example: "0 I hope she will arrive (she / arrive) soon. (prediction)",
            items: [
              { id: "B_5_1", label: "1", before: "Who", verb: "she / invite", after: "to her party? (plan)" },
              { id: "B_5_2", label: "2", before: "I think", verb: "he / be", after: "happy when he hears the good news. (prediction)" },
              { id: "B_5_3", label: "3", before: "", verb: "we / not travel", after: "to Spain by plane. (plan)" },
              { id: "B_5_4", label: "4", before: "I'm sure", verb: "it / not snow", after: "tomorrow. It's too warm. (prediction)" },
              { id: "B_5_5", label: "5", before: "", verb: "I / phone", after: "my friend later this evening. (plan)" }
            ],
            answers: {
              "B_5_1": { expected: ["is she going to invite"], explanation: "Question about plan: 'is she going to invite'." },
              "B_5_2": { expected: ["he will be", "he'll be"], explanation: "Prediction with 'I think': 'he will be'." },
              "B_5_3": { expected: ["We aren't going to travel", "we aren't going to travel", "We are not going to travel", "we are not going to travel"], explanation: "Negative plan: 'We aren't going to travel'." },
              "B_5_4": { expected: ["it won't snow", "it will not snow"], explanation: "Negative prediction: 'it won't snow'." },
              "B_5_5": { expected: ["I am going to phone", "I'm going to phone"], explanation: "Future plan with I: 'I am going to phone'." }
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
            title: "Complete the dialogues with the words and phrases in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["a shame", "cheer", "matter", "poor you", "that's disappointing", "well done", "wrong"],
            example: "0 A: Hi Jane. What's the ⁰matter? B: I failed my test.",
            usedInExample: ["matter"],
            dialogue: [
              {
                speaker: "A",
                parts: [
                  { gapId: "B_6_1", label: "1", after: "up. You'll pass next time." }
                ]
              },
              { speaker: "A", text: "Guess what! I won first prize." },
              {
                speaker: "B",
                parts: [
                  { gapId: "B_6_2", label: "2", after: "!" }
                ]
              },
              {
                speaker: "A",
                parts: [
                  { before: "Hi Alan. What's", gapId: "B_6_3", label: "3", after: "?" }
                ]
              },
              { speaker: "B", text: "I can't come to the cinema with you." },
              {
                speaker: "A",
                parts: [
                  { before: "That's", gapId: "B_6_4", label: "4", after: "!" }
                ]
              },
              { speaker: "A", text: "We aren't going to Florida next summer. We have to stay at home." },
              {
                speaker: "B",
                parts: [
                  { before: "Poor you!", gapId: "B_6_5", label: "5", after: "" }
                ]
              }
            ],
            answers: {
              "B_6_1": { expected: ["Cheer", "cheer"], explanation: "Encouragement idiom: 'Cheer up!'" },
              "B_6_2": { expected: ["Well done", "well done"], explanation: "Praising achievement: 'Well done!'" },
              "B_6_3": { expected: ["wrong"], explanation: "Inquiry about a problem: 'What's wrong?'" },
              "B_6_4": { expected: ["a shame"], explanation: "Sympathetic expression: 'That's a shame!'" },
              "B_6_5": { expected: ["That's disappointing", "that's disappointing"], explanation: "Sympathetic reaction: 'That's disappointing.'" }
            }
          }
        ]
      }
    }
  }
};
