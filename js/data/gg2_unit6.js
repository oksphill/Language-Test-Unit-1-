/**
 * Go Getter 2 - Unit 6 Language Test
 * Jobs & Past Simple (Regular & Irregular)
 * Pearson Education Limited 2017 Photocopiable Test Sheets
 */

window.GG2_UNIT_6_DATA = {
  id: "unit6",
  courseId: "gogetter2",
  number: 6,
  title: "Jobs & Past Simple Verbs",
  description: "Vocabulary: Jobs, collocations with everyday jobs, household chores. Grammar: Past Simple regular and irregular verbs (affirmative). Communication: Asking for, giving and refusing permission.",
  points: 30,

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 6",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 13,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Write the names of jobs. Use the pictures to help you.",
            points: 5,
            type: "grammar-gap",
            example: "0 This person works in a school. teacher",
            items: [
              { id: "A_1_1", label: "1", textBefore: "This person paints pictures. (6 letters)", textAfter: "" },
              { id: "A_1_2", label: "2", textBefore: "This person flies a plane. (5 letters)", textAfter: "" },
              { id: "A_1_3", label: "3", textBefore: "This person cooks food in a restaurant. (4 letters)", textAfter: "" },
              { id: "A_1_4", label: "4", textBefore: "This person makes houses and walls. (7 letters)", textAfter: "" },
              { id: "A_1_5", label: "5", textBefore: "This person works with ill pets. (3 letters)", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["artist"], explanation: "An artist paints pictures." },
              "A_1_2": { expected: ["pilot"], explanation: "A pilot flies a plane." },
              "A_1_3": { expected: ["chef", "cook"], explanation: "A chef or cook prepares food in a restaurant." },
              "A_1_4": { expected: ["builder"], explanation: "A builder makes houses and walls." },
              "A_1_5": { expected: ["vet"], explanation: "A vet treats ill animals." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences.",
            points: 4,
            type: "grammar-gap",
            example: "0 Marco drives a bus. He's a bus driver.",
            items: [
              { id: "A_2_1", label: "1", textBefore: "Marilyn sings in a musical. She's a s", textAfter: "." },
              { id: "A_2_2", label: "2", textBefore: "Suzette works in an office. She's an o", textAfter: "w        ." },
              { id: "A_2_3", label: "3", textBefore: "Brandon looks after ill people in a hospital. He's a n", textAfter: "." },
              { id: "A_2_4", label: "4", textBefore: "Lucille helps customers in a shop. She's a s", textAfter: "a        ." }
            ],
            answers: {
              "A_2_1": { expected: ["inger", "singer"], explanation: "A singer sings in musicals." },
              "A_2_2": { expected: ["ffice worker", "office worker"], explanation: "An office worker works in an office." },
              "A_2_3": { expected: ["urse", "nurse"], explanation: "A nurse looks after ill people." },
              "A_2_4": { expected: ["hop assistant", "shop assistant"], explanation: "A shop assistant helps customers in a shop." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Choose the correct answer.",
            points: 4,
            type: "circle-choice",
            context: "Good morning, kids! Please do these jobs before you go out. Jimmy, please do the shopping. The shopping list is on the fridge door.",
            items: [
              { id: "A_3_1", label: "1", before: "And", options: ["empty", "take", "try"], after: "the bin in the kitchen. It's full!" },
              { id: "A_3_2", label: "2", before: "Sonia, please", options: ["watch", "feel", "wash"], after: "the dishes" },
              { id: "A_3_3", label: "3", before: "— and", options: ["take", "walk", "go"], after: "the dog. He needs exercise!" },
              { id: "A_3_4", label: "4", before: "Finally, Jimmy AND Sonia:", options: ["do", "clean", "make"], after: "your beds and tidy your rooms! What a mess they are! Love, Mum" }
            ],
            answers: {
              "A_3_1": { expected: ["empty"], explanation: "Collocation: empty the bin." },
              "A_3_2": { expected: ["wash"], explanation: "Collocation: wash the dishes." },
              "A_3_3": { expected: ["walk"], explanation: "Collocation: walk the dog." },
              "A_3_4": { expected: ["make"], explanation: "Collocation: make your bed." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 12,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Write the Past Simple form of the verbs in the text.",
            points: 6,
            type: "fill-gaps",
            example: "0 visited (visit)",
            storyText: "Hi Bob,\nLet me tell you about yesterday. I visited my cousins Alex and Dan.",
            items: [
              { id: "A_4_1", label: "1", textBefore: "I", textAfter: "(arrive) at their house at ten o'clock." },
              { id: "A_4_2", label: "2", textBefore: "Alex and I", textAfter: "(play) chess for an hour." },
              { id: "A_4_3", label: "3", textBefore: "Then Dan", textAfter: "(make) some pancakes for lunch." },
              { id: "A_4_4", label: "4", textBefore: "We", textAfter: "(want) to go to the park in the afternoon but it was rainy." },
              { id: "A_4_5", label: "5", textBefore: "The rain", textAfter: "(stop) at five o'clock and then I" },
              { id: "A_4_6", label: "6", textBefore: "", textAfter: "(go) home.\nHow was your day? Lewis" }
            ],
            answers: {
              "A_4_1": { expected: ["arrived"], explanation: "Past Simple of arrive is arrived." },
              "A_4_2": { expected: ["played"], explanation: "Past Simple of play is played." },
              "A_4_3": { expected: ["made"], explanation: "Past Simple of make is made." },
              "A_4_4": { expected: ["wanted"], explanation: "Past Simple of want is wanted." },
              "A_4_5": { expected: ["stopped"], explanation: "Past Simple of stop is stopped (double p)." },
              "A_4_6": { expected: ["went"], explanation: "Past Simple of go is went." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Write the Past Simple form of the verbs in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["come", "have", "live", "meet", "take", "try"],
            example: "0 Yesterday I drank orange juice for breakfast. (drink)",
            usedInExample: ["drink", "drank"],
            sentences: [
              { id: "A_5_1", num: 1, before: "Henry", after: "some photos on his holiday." },
              { id: "A_5_2", num: 2, before: "We", after: "our friends at the shopping centre last Saturday." },
              { id: "A_5_3", num: 3, before: "I", after: "in Spain when I was six years old." },
              { id: "A_5_4", num: 4, before: "Maria", after: "to study for her test but she was too tired." },
              { id: "A_5_5", num: 5, before: "Granny and Grandad", after: "to our house for dinner yesterday." },
              { id: "A_5_6", num: 6, before: "I", after: "a long shower this morning." }
            ],
            answers: {
              "A_5_1": { expected: ["took"], explanation: "Past Simple of take: took." },
              "A_5_2": { expected: ["met"], explanation: "Past Simple of meet: met." },
              "A_5_3": { expected: ["lived"], explanation: "Past Simple of live: lived." },
              "A_5_4": { expected: ["tried"], explanation: "Past Simple of try: tried." },
              "A_5_5": { expected: ["came"], explanation: "Past Simple of come: came." },
              "A_5_6": { expected: ["had"], explanation: "Past Simple of have: had." }
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
            title: "Use one word in each gap in the dialogue.",
            points: 5,
            type: "grammar-gap",
            example: "0 Can I borrow your ruler?",
            items: [
              { id: "A_6_1", label: "1", textBefore: "A: Oh no! I can't find my ruler! Can I borrow your ruler?\nB: S", textAfter: ", no problem." },
              { id: "A_6_2", label: "2", textBefore: "A: Is it OK i", textAfter: "I use your mobile phone?" },
              { id: "A_6_3", label: "3", textBefore: "B: Yes, that's f", textAfter: "." },
              { id: "A_6_4", label: "4", textBefore: "A: Can I use your laptop, p", textAfter: "? I want to send an email." },
              { id: "A_6_5", label: "5", textBefore: "B: No, s", textAfter: ", you can't. I'm using it." }
            ],
            answers: {
              "A_6_1": { expected: ["ure", "Sure", "sure"], explanation: "Sure, no problem." },
              "A_6_2": { expected: ["f", "if"], explanation: "Is it OK if I use...?" },
              "A_6_3": { expected: ["ine", "fine"], explanation: "Yes, that's fine." },
              "A_6_4": { expected: ["lease", "please"], explanation: "Can I use..., please?" },
              "A_6_5": { expected: ["orry", "sorry"], explanation: "No, sorry, you can't." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 6",
    totalPoints: 30,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 13,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Write the names of jobs. Use the pictures to help you.",
            points: 5,
            type: "grammar-gap",
            example: "0 This person works in a school. teacher",
            items: [
              { id: "B_1_1", label: "1", textBefore: "This person cooks food in a restaurant. (4 letters)", textAfter: "" },
              { id: "B_1_2", label: "2", textBefore: "This person works with ill pets. (3 letters)", textAfter: "" },
              { id: "B_1_3", label: "3", textBefore: "This person makes houses and walls. (7 letters)", textAfter: "" },
              { id: "B_1_4", label: "4", textBefore: "This person flies a plane. (5 letters)", textAfter: "" },
              { id: "B_1_5", label: "5", textBefore: "This person paints pictures. (6 letters)", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["chef", "cook"], explanation: "A chef or cook prepares food in a restaurant." },
              "B_1_2": { expected: ["vet"], explanation: "A vet treats ill pets." },
              "B_1_3": { expected: ["builder"], explanation: "A builder makes houses and walls." },
              "B_1_4": { expected: ["pilot"], explanation: "A pilot flies a plane." },
              "B_1_5": { expected: ["artist"], explanation: "An artist paints pictures." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the sentences.",
            points: 4,
            type: "grammar-gap",
            example: "0 Marco drives a bus. He's a bus driver.",
            items: [
              { id: "B_2_1", label: "1", textBefore: "Nigel looks after ill people. He's a n", textAfter: "." },
              { id: "B_2_2", label: "2", textBefore: "Peggy sings in a theatre. She's a s", textAfter: "." },
              { id: "B_2_3", label: "3", textBefore: "Lucille helps customers in a shop. She's a s", textAfter: "a        ." },
              { id: "B_2_4", label: "4", textBefore: "Simon works in an office. He's an o", textAfter: "w        ." }
            ],
            answers: {
              "B_2_1": { expected: ["urse", "nurse"], explanation: "A nurse looks after ill people." },
              "B_2_2": { expected: ["inger", "singer"], explanation: "A singer sings in a theatre." },
              "B_2_3": { expected: ["hop assistant", "shop assistant"], explanation: "A shop assistant helps customers in a shop." },
              "B_2_4": { expected: ["ffice worker", "office worker"], explanation: "An office worker works in an office." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Choose the correct answer.",
            points: 4,
            type: "circle-choice",
            context: "Good morning, kids! Please do these jobs before you go out. Adam, please do the shopping. The shopping list is on the fridge door.",
            items: [
              { id: "B_3_1", label: "1", before: "And", options: ["see", "watch", "look"], after: "after your little brother!" },
              { id: "B_3_2", label: "2", before: "Gillian, please", options: ["take", "make", "empty"], after: "the bin in the kitchen. It's full!" },
              { id: "B_3_3", label: "3", before: "And", options: ["wash", "watch", "do"], after: "the car. It's very dirty." },
              { id: "B_3_4", label: "4", before: "Finally, Adam AND Gillian:", options: ["do", "tidy", "wash"], after: "your room and make your beds! What a mess they are! Love, Mum" }
            ],
            answers: {
              "B_3_1": { expected: ["look"], explanation: "Collocation: look after someone." },
              "B_3_2": { expected: ["empty"], explanation: "Collocation: empty the bin." },
              "B_3_3": { expected: ["wash"], explanation: "Collocation: wash the car." },
              "B_3_4": { expected: ["tidy"], explanation: "Collocation: tidy your room." }
            }
          }
        ]
      },
      grammar: {
        id: "grammar",
        title: "Grammar",
        maxScore: 12,
        tasks: [
          {
            id: "task_4",
            number: 4,
            title: "Write the Past Simple form of the verbs in the text.",
            points: 6,
            type: "fill-gaps",
            example: "0 visited (visit)",
            storyText: "Hi Kiki,\nLet me tell you about last week. I visited my cousins Vivian and Terry.",
            items: [
              { id: "B_4_1", label: "1", textBefore: "I", textAfter: "(go) to their house at eleven o'clock." },
              { id: "B_4_2", label: "2", textBefore: "Vivian and I", textAfter: "(listen) to music for an hour." },
              { id: "B_4_3", label: "3", textBefore: "Then Terry", textAfter: "(make) pizza for lunch." },
              { id: "B_4_4", label: "4", textBefore: "We", textAfter: "(want) to go to the swimming pool in the afternoon but it was rainy." },
              { id: "B_4_5", label: "5", textBefore: "The rain", textAfter: "(stop) at five o'clock and then I" },
              { id: "B_4_6", label: "6", textBefore: "", textAfter: "(walk) home.\nHow was your day? Alice" }
            ],
            answers: {
              "B_4_1": { expected: ["went"], explanation: "Past Simple of go is went." },
              "B_4_2": { expected: ["listened"], explanation: "Past Simple of listen is listened." },
              "B_4_3": { expected: ["made"], explanation: "Past Simple of make is made." },
              "B_4_4": { expected: ["wanted"], explanation: "Past Simple of want is wanted." },
              "B_4_5": { expected: ["stopped"], explanation: "Past Simple of stop is stopped." },
              "B_4_6": { expected: ["walked"], explanation: "Past Simple of walk is walked." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Write the Past Simple form of the verbs in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["ask", "come", "eat", "have", "take", "try"],
            example: "0 Yesterday I drank a glass of orange juice for breakfast. (drink)",
            usedInExample: ["drink", "drank"],
            sentences: [
              { id: "B_5_1", num: 1, before: "I", after: "Dad for some money yesterday." },
              { id: "B_5_2", num: 2, before: "We", after: "a cool Maths lesson last Wednesday." },
              { id: "B_5_3", num: 3, before: "The children", after: "ham and cheese sandwiches for lunch." },
              { id: "B_5_4", num: 4, before: "You", after: "a lot of photos on your holiday!" },
              { id: "B_5_5", num: 5, before: "My aunt", after: "to our house last Monday." },
              { id: "B_5_6", num: 6, before: "I", after: "to do my homework but it wasn't easy." }
            ],
            answers: {
              "B_5_1": { expected: ["asked"], explanation: "Past Simple of ask: asked." },
              "B_5_2": { expected: ["had"], explanation: "Past Simple of have: had." },
              "B_5_3": { expected: ["ate"], explanation: "Past Simple of eat: ate." },
              "B_5_4": { expected: ["took"], explanation: "Past Simple of take: took." },
              "B_5_5": { expected: ["came"], explanation: "Past Simple of come: came." },
              "B_5_6": { expected: ["tried"], explanation: "Past Simple of try: tried." }
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
            title: "Use one word in each gap in the dialogue.",
            points: 5,
            type: "grammar-gap",
            example: "0 Can I borrow your ruler?",
            items: [
              { id: "B_6_1", label: "1", textBefore: "A: Oh no! I can't find my ruler! Can I borrow your ruler?\nB: Oh, a", textAfter: "right." },
              { id: "B_6_2", label: "2", textBefore: "A: Is it OK i", textAfter: "I use your dictionary?" },
              { id: "B_6_3", label: "3", textBefore: "B: Sure, no p", textAfter: "." },
              { id: "B_6_4", label: "4", textBefore: "A: Can I use your tablet, p", textAfter: "? I want to surf the Internet." },
              { id: "B_6_5", label: "5", textBefore: "B: No, s", textAfter: ", you can't. I'm using it." }
            ],
            answers: {
              "B_6_1": { expected: ["ll", "all"], explanation: "Oh, all right." },
              "B_6_2": { expected: ["f", "if"], explanation: "Is it OK if I use...?" },
              "B_6_3": { expected: ["roblem", "problem"], explanation: "Sure, no problem." },
              "B_6_4": { expected: ["lease", "please"], explanation: "Can I use..., please?" },
              "B_6_5": { expected: ["orry", "sorry"], explanation: "No, sorry, you can't." }
            }
          }
        ]
      }
    }
  }
};
