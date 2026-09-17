/**
 * Language Test Unit 6 - Nature and Animals
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.UNIT_6_DATA = {
  id: "unit6",
  number: 6,
  title: "Nature and Animals",
  description: "Vocabulary: Wild animals, Protecting the environment, Natural disasters. Grammar: First Conditional, Verbs + to-infinitive / -ing. Communication: Persuading and reaching agreements.",

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 6",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 17,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the correct word.",
            points: 6,
            type: "circle-choice",
            example: "Foxes / ⁰Polar bears are large animals. They have white fur.",
            items: [
              { id: "A_1_1", label: "1", before: "", options: ["Penguins", "Rhinos"], after: "are birds. They can't fly, but they can swim. They eat fish." },
              { id: "A_1_2", label: "2", before: "", options: ["Lizards", "Gorillas"], after: "have short black fur. They are tall." },
              { id: "A_1_3", label: "3", before: "", options: ["Turtles", "Pandas"], after: "are sea animals. They don't have fur. Their babies come out of eggs." },
              { id: "A_1_4", label: "4", before: "", options: ["Leopards", "Lizards"], after: "haven't got fur. They have four legs. They are often green or brown, but some are lots of different colours." },
              { id: "A_1_5", label: "5", before: "", options: ["Eagles", "Penguins"], after: "can fly very well. They hunt small animals." },
              { id: "A_1_6", label: "6", before: "", options: ["Leopards", "Turtles"], after: "are large cats. They have black spots on their fur." }
            ],
            answers: {
              "A_1_1": { expected: ["Penguins"], explanation: "Flightless aquatic birds that eat fish: 'Penguins'." },
              "A_1_2": { expected: ["Gorillas"], explanation: "Tall apes with short black fur: 'Gorillas'." },
              "A_1_3": { expected: ["Turtles"], explanation: "Marine reptiles whose young hatch from eggs: 'Turtles'." },
              "A_1_4": { expected: ["Lizards"], explanation: "Four-legged reptiles that are often green or brown: 'Lizards'." },
              "A_1_5": { expected: ["Eagles"], explanation: "Birds of prey that fly very well and hunt small animals: 'Eagles'." },
              "A_1_6": { expected: ["Leopards"], explanation: "Large spotted feline cats: 'Leopards'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["cut", "hunt", "pollute", "protect", "recycle", "save", "throw"],
            example: "⁰Save our planet now!",
            usedInExample: ["save"],
            context: "Our environment is in trouble!",
            sentences: [
              { textBefore: "We", gapId: "A_2_1", label: "1", textAfter: "the water and the air." },
              { textBefore: "We", gapId: "A_2_2", label: "2", textAfter: "away things like paper, plastic, old clothes and toys." },
              { textBefore: "We", gapId: "A_2_3", label: "3", textAfter: "down trees and animals lose their homes." },
              { textBefore: "We", gapId: "A_2_4", label: "4", textAfter: "animals for their fur and body parts." },
              { textBefore: "This has to stop! We must plant more trees. We must reuse or", gapId: "A_2_5", label: "5", textAfter: "our rubbish." },
              { textBefore: "We must", gapId: "A_2_6", label: "6", textAfter: "wild animals and the environment." }
            ],
            answers: {
              "A_2_1": { expected: ["pollute"], explanation: "To contaminate air and water with waste: 'pollute'." },
              "A_2_2": { expected: ["throw"], explanation: "Collocation: 'throw away' items into waste." },
              "A_2_3": { expected: ["cut"], explanation: "Collocation: 'cut down trees'." },
              "A_2_4": { expected: ["hunt"], explanation: "To chase and kill wild animals: 'hunt animals'." },
              "A_2_5": { expected: ["recycle"], explanation: "To process used materials so they can be reused: 'recycle our rubbish'." },
              "A_2_6": { expected: ["protect"], explanation: "To keep safe from harm: 'protect wild animals'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with words for natural events.",
            points: 5,
            type: "letter-hint",
            example: "0 The forest fire burnt hundreds of thousands of trees.",
            items: [
              { id: "A_3_1", label: "1", textBefore: "There was a", displayHint: "t _ _ _ _ _ _ _ _ _ _ m", placeholder: "thunderstorm", prefix: "t", textAfter: "last night with rain, thunder and lightning." },
              { id: "A_3_2", label: "2", textBefore: "Many buildings fell down in the", displayHint: "e _ _ _ _ _ _ _ _ e", placeholder: "earthquake", prefix: "e", textAfter: "in Japan." },
              { id: "A_3_3", label: "3", textBefore: "The", displayHint: "d _ _ _ _ _ t", placeholder: "drought", prefix: "d", textAfter: "lasted for years and there was no water in the rivers and lakes." },
              { id: "A_3_4", label: "4", textBefore: "The lava from the", displayHint: "v _ _ _ _ _ _ c  e _ _ _ _ _ _ n", placeholder: "volcanic eruption", prefix: "v", textAfter: "came down the mountain." },
              { id: "A_3_5", label: "5", textBefore: "It rained so heavily that water from the rivers caused a", displayHint: "f _ _ _ d", placeholder: "flood", prefix: "f", textAfter: "." }
            ],
            answers: {
              "A_3_1": { expected: ["thunderstorm"], explanation: "A storm accompanied by thunder and lightning: 'thunderstorm'." },
              "A_3_2": { expected: ["earthquake"], explanation: "A sudden violent shaking of the ground: 'earthquake'." },
              "A_3_3": { expected: ["drought"], explanation: "A prolonged period of abnormally low rainfall: 'drought'." },
              "A_3_4": { expected: ["volcanic eruption", "volcano"], explanation: "Discharge of lava from a volcano: 'volcanic eruption'." },
              "A_3_5": { expected: ["flood"], explanation: "An overflow of a large amount of water: 'flood'." }
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
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the correct form of the verbs.",
            points: 8,
            type: "grammar-gap",
            example: "0 If you leave (leave) plastic bags on the beach, wild birds will die (die).",
            items: [
              { id: "A_4_1", label: "1", before: "If I", verb: "get up", after: "late, I", gapId2: "A_4_2", label2: "2", verb2: "not join", after2: "the forest clean-up." },
              { id: "A_4_3", label: "3", before: "If she", verb: "see", after: "rubbish in the street, she", gapId2: "A_4_4", label2: "4", verb2: "put", after2: "it in the bin." },
              { id: "A_4_5", label: "5", before: "If they", verb: "not help", after: "us, we", gapId2: "A_4_6", label2: "6", verb2: "not finish", after2: "the job." },
              { id: "A_4_7", label: "7", before: "If it", verb: "not be", after: "hot tomorrow, he", gapId2: "A_4_8", label2: "8", verb2: "stay", after2: "at home." }
            ],
            answers: {
              "A_4_1": { expected: ["get up"], explanation: "First Conditional If-clause uses Present Simple: 'get up'." },
              "A_4_2": { expected: ["won't join", "will not join"], explanation: "First Conditional main clause uses will/won't: 'won't join'." },
              "A_4_3": { expected: ["sees"], explanation: "If-clause 3rd person singular Present Simple: 'sees'." },
              "A_4_4": { expected: ["will put", "'ll put"], explanation: "Main clause future prediction: 'will put'." },
              "A_4_5": { expected: ["don't help", "do not help"], explanation: "Negative Present Simple in If-clause: 'don't help'." },
              "A_4_6": { expected: ["won't finish", "will not finish"], explanation: "Negative future result in main clause: 'won't finish'." },
              "A_4_7": { expected: ["isn't", "is not"], explanation: "Present Simple negative of 'be' with it: 'isn't'." },
              "A_4_8": { expected: ["will stay", "'ll stay"], explanation: "Main clause future result: 'will stay'." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the correct form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "When John was young, he hated ⁰staying (stay) indoors.",
            items: [
              { id: "A_5_1", label: "1", before: "He loved", verb: "watch", after: "the wild animals in the forest." },
              { id: "A_5_2", label: "2", before: "His ambition was to be a scientist and study animals in danger, but first, he needed", verb: "graduate", after: "from university." },
              { id: "A_5_3", label: "3", before: "He also decided", verb: "learn", after: "some foreign languages." },
              { id: "A_5_4", label: "4", before: "They are important for people who want", verb: "work", after: "abroad." },
              { id: "A_5_5", label: "5", before: "Today, John is a scientist and he is looking forward to", verb: "travel", after: "to India to study tigers." }
            ],
            answers: {
              "A_5_1": { expected: ["watching"], explanation: "'love' can be followed by the -ing gerund: 'watching'." },
              "A_5_2": { expected: ["to graduate"], explanation: "'need' is followed by the to-infinitive: 'to graduate'." },
              "A_5_3": { expected: ["to learn"], explanation: "'decide' is followed by the to-infinitive: 'to learn'." },
              "A_5_4": { expected: ["to work"], explanation: "'want' is followed by the to-infinitive: 'to work'." },
              "A_5_5": { expected: ["travelling", "traveling"], explanation: "The preposition 'to' in 'look forward to' requires a gerund: 'travelling'." }
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
            title: "Complete the dialogues with the phrases in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["a deal", "come on", "suppose so", "think about", "won't regret", "you really"],
            example: "0 A: You really should come. B: I'm not sure.",
            usedInExample: ["you really"],
            dialogue: [
              {
                speaker: "A",
                parts: [
                  { before: "Please come to Spain with us. You", gapId: "A_6_1", label: "1", after: "it." }
                ]
              },
              {
                speaker: "B",
                parts: [
                  { before: "I'll", gapId: "A_6_2", label: "2", after: "it." }
                ]
              },
              {
                speaker: "A",
                parts: [
                  { before: "We're all going to the beach clean-up.", gapId: "A_6_3", label: "3", after: ". It's important." }
                ]
              },
              {
                speaker: "B",
                parts: [
                  { before: "I", gapId: "A_6_4", label: "4", after: "." }
                ]
              },
              { speaker: "A", text: "If you come with me, I'll buy you dinner this evening." },
              {
                speaker: "B",
                parts: [
                  { before: "It's", gapId: "A_6_5", label: "5", after: "." }
                ]
              }
            ],
            answers: {
              "A_6_1": { expected: ["won't regret"], explanation: "Reassurance: 'You won't regret it.'" },
              "A_6_2": { expected: ["think about"], explanation: "Hesitation: 'I'll think about it.'" },
              "A_6_3": { expected: ["Come on", "come on"], explanation: "Encouraging / persuading: 'Come on. It's important.'" },
              "A_6_4": { expected: ["suppose so"], explanation: "Reluctant agreement: 'I suppose so.'" },
              "A_6_5": { expected: ["a deal"], explanation: "Agreeing to a compromise / offer: 'It's a deal.'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 6",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 17,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the correct word.",
            points: 6,
            type: "circle-choice",
            example: "Foxes / ⁰Polar bears are large animals. They have white fur.",
            items: [
              { id: "B_1_1", label: "1", before: "", options: ["Pandas", "Leopards"], after: "are large animals. They are white and black. They eat bamboo." },
              { id: "B_1_2", label: "2", before: "", options: ["Rhinos", "Pandas"], after: "live in Africa. People kill them for a part of their body." },
              { id: "B_1_3", label: "3", before: "", options: ["Penguins", "Foxes"], after: "aren't very big. They usually have red fur and a big tail." },
              { id: "B_1_4", label: "4", before: "", options: ["Lizards", "Gorillas"], after: "have short black fur and they are tall." },
              { id: "B_1_5", label: "5", before: "", options: ["Rhinos", "Eagles"], after: "are big birds. They can fly very well. They hunt small animals." },
              { id: "B_1_6", label: "6", before: "", options: ["Turtles", "Leopards"], after: "are sea animals. They haven't got fur. Their babies come out of eggs." }
            ],
            answers: {
              "B_1_1": { expected: ["Pandas"], explanation: "Black and white mammals that eat bamboo: 'Pandas'." },
              "B_1_2": { expected: ["Rhinos"], explanation: "Large African mammals hunted for their horns: 'Rhinos'." },
              "B_1_3": { expected: ["Foxes"], explanation: "Canines with red fur and bushy tails: 'Foxes'." },
              "B_1_4": { expected: ["Gorillas"], explanation: "Tall apes with short black fur: 'Gorillas'." },
              "B_1_5": { expected: ["Eagles"], explanation: "Large birds of prey: 'Eagles'." },
              "B_1_6": { expected: ["Turtles"], explanation: "Sea reptiles hatching from eggs: 'Turtles'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the text with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["cut", "hunt", "pollute", "protect", "recycle", "save", "throw"],
            example: "⁰Save wild animals now!",
            usedInExample: ["save"],
            context: "Wild animals are in trouble!",
            sentences: [
              { textBefore: "When we", gapId: "B_2_1", label: "1", textAfter: "down trees, animals lose their homes." },
              { textBefore: "We", gapId: "B_2_2", label: "2", textAfter: "them for body parts and their fur." },
              { textBefore: "We", gapId: "B_2_3", label: "3", textAfter: "the air and water." },
              { textBefore: "We", gapId: "B_2_4", label: "4", textAfter: "away plastic, which wild animals eat and die." },
              { textBefore: "This has to stop! We must", gapId: "B_2_5", label: "5", textAfter: "wild animals and the environment." },
              { textBefore: "We must reuse or", gapId: "B_2_6", label: "6", textAfter: "our rubbish." }
            ],
            answers: {
              "B_2_1": { expected: ["cut"], explanation: "Collocation: 'cut down trees'." },
              "B_2_2": { expected: ["hunt"], explanation: "To chase and kill: 'hunt them for body parts'." },
              "B_2_3": { expected: ["pollute"], explanation: "To contaminate nature: 'pollute the air and water'." },
              "B_2_4": { expected: ["throw"], explanation: "Phrasal verb: 'throw away plastic'." },
              "B_2_5": { expected: ["protect"], explanation: "To preserve and defend: 'protect wild animals'." },
              "B_2_6": { expected: ["recycle"], explanation: "To process waste into reusable material: 'recycle our rubbish'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with words for natural events.",
            points: 5,
            type: "letter-hint",
            example: "0 The forest fire burnt hundreds of thousands of trees.",
            items: [
              { id: "B_3_1", label: "1", textBefore: "There was a", displayHint: "t _ _ _ _ _ o", placeholder: "tornado", prefix: "t", textAfter: "with winds of 280 km/h. It damaged thousands of homes." },
              { id: "B_3_2", label: "2", textBefore: "The", displayHint: "d _ _ _ _ _ t", placeholder: "drought", prefix: "d", textAfter: "lasted for two years and there was no water in the rivers and lakes." },
              { id: "B_3_3", label: "3", textBefore: "People who lived near the sea were afraid of a", displayHint: "t _ _ _ _ _ i", placeholder: "tsunami", prefix: "t", textAfter: "after the earthquake." },
              { id: "B_3_4", label: "4", textBefore: "There was a", displayHint: "t _ _ _ _ _ _ _ _ _ _ m", placeholder: "thunderstorm", prefix: "t", textAfter: "last night with heavy rain, thunder and lightning." },
              { id: "B_3_5", label: "5", textBefore: "The lava from the", displayHint: "v _ _ _ _ _ _ c  e _ _ _ _ _ _ n", placeholder: "volcanic eruption", prefix: "v", textAfter: "came down the mountain." }
            ],
            answers: {
              "B_3_1": { expected: ["tornado"], explanation: "Violently rotating column of air: 'tornado'." },
              "B_3_2": { expected: ["drought"], explanation: "Prolonged dry period without rain: 'drought'." },
              "B_3_3": { expected: ["tsunami"], explanation: "Giant ocean wave caused by an underwater earthquake: 'tsunami'." },
              "B_3_4": { expected: ["thunderstorm"], explanation: "Storm with thunder, lightning and heavy rain: 'thunderstorm'." },
              "B_3_5": { expected: ["volcanic eruption", "volcano"], explanation: "Eruption emitting hot molten lava: 'volcanic eruption'." }
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
            id: "task_4",
            number: 4,
            title: "Complete the sentences with the correct form of the verbs.",
            points: 8,
            type: "grammar-gap",
            example: "0 If you leave (leave) plastic bags on the beach, wild birds will die (die).",
            items: [
              { id: "B_4_1", label: "1", before: "If an animal", verb: "eat", after: "chewing gum, it", gapId2: "B_4_2", label2: "2", verb2: "get", after2: "ill." },
              { id: "B_4_3", label: "3", before: "If I", verb: "not see", after: "him, I", gapId2: "B_4_4", label2: "4", verb2: "phone", after2: "him." },
              { id: "B_4_5", label: "5", before: "If they", verb: "arrive", after: "late, they", gapId2: "B_4_6", label2: "6", verb2: "not catch", after2: "the last train home." },
              { id: "B_4_7", label: "7", before: "If she", verb: "not come", after: "with us, we", gapId2: "B_4_8", label2: "8", verb2: "be", after2: "sad." }
            ],
            answers: {
              "B_4_1": { expected: ["eats"], explanation: "Present Simple 3rd person singular in If-clause: 'eats'." },
              "B_4_2": { expected: ["will get", "'ll get"], explanation: "Main clause future outcome: 'will get'." },
              "B_4_3": { expected: ["don't see", "do not see"], explanation: "Negative Present Simple in If-clause: 'don't see'." },
              "B_4_4": { expected: ["will phone", "'ll phone"], explanation: "Main clause future outcome: 'will phone'." },
              "B_4_5": { expected: ["arrive"], explanation: "Present Simple with plural they: 'arrive'." },
              "B_4_6": { expected: ["won't catch", "will not catch"], explanation: "Negative future result in main clause: 'won't catch'." },
              "B_4_7": { expected: ["doesn't come", "does not come"], explanation: "Negative Present Simple 3rd person singular: 'doesn't come'." },
              "B_4_8": { expected: ["will be", "'ll be"], explanation: "Main clause future outcome: 'will be'." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the text with the correct form of the verbs.",
            points: 5,
            type: "grammar-gap",
            example: "When Katie was a little girl, she hated ⁰being (be) indoors",
            items: [
              { id: "B_5_1", label: "1", before: "...but she loved", verb: "spend", after: "time in the forest." },
              { id: "B_5_2", label: "2", before: "Her ambition was to be a scientist and work with animals in danger. She decided", verb: "study", after: "science at the University of Leeds." },
              { id: "B_5_3", label: "3", before: "She also needed", verb: "learn", after: "some foreign languages." },
              { id: "B_5_4", label: "4", before: "They are important for people who want", verb: "live", after: "abroad." },
              { id: "B_5_5", label: "5", before: "Today, Katie is looking forward to", verb: "start", after: "a great job with lions in Africa." }
            ],
            answers: {
              "B_5_1": { expected: ["spending"], explanation: "The verb 'love' takes the -ing gerund form: 'spending'." },
              "B_5_2": { expected: ["to study"], explanation: "'decide' takes the to-infinitive: 'to study'." },
              "B_5_3": { expected: ["to learn"], explanation: "'need' takes the to-infinitive: 'to learn'." },
              "B_5_4": { expected: ["to live"], explanation: "'want' takes the to-infinitive: 'to live'." },
              "B_5_5": { expected: ["starting"], explanation: "'look forward to' is followed by a gerund: 'starting'." }
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
            title: "Complete the dialogues with the phrases in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["come on", "I suppose", "I'll think", "it's a deal", "you really", "you won't"],
            example: "0 A: You really should come. B: I'm not sure.",
            usedInExample: ["you really"],
            dialogue: [
              { speaker: "A", text: "If you come with us today, we'll go with you tomorrow." },
              {
                speaker: "B",
                parts: [
                  { gapId: "B_6_1", label: "1", after: "." }
                ]
              },
              {
                speaker: "A",
                parts: [
                  { before: "You should join us at the clean-up on Saturday.", gapId: "B_6_2", label: "2", after: ". It's important." }
                ]
              },
              {
                speaker: "B",
                parts: [
                  { gapId: "B_6_3", label: "3", after: ", so." }
                ]
              },
              {
                speaker: "A",
                parts: [
                  { before: "Come to France with us.", gapId: "B_6_4", label: "4", after: "regret it." }
                ]
              },
              {
                speaker: "B",
                parts: [
                  { gapId: "B_6_5", label: "5", after: "about it." }
                ]
              }
            ],
            answers: {
              "B_6_1": { expected: ["It's a deal", "it's a deal"], explanation: "Agreement: 'It's a deal.'" },
              "B_6_2": { expected: ["Come on", "come on"], explanation: "Persuading: 'Come on. It's important.'" },
              "B_6_3": { expected: ["I suppose", "I suppose so"], explanation: "Hesitant agreement: 'I suppose, so.'" },
              "B_6_4": { expected: ["You won't", "you won't"], explanation: "Reassuring: 'You won't regret it.'" },
              "B_6_5": { expected: ["I'll think"], explanation: "Considering: 'I'll think about it.'" }
            }
          }
        ]
      }
    }
  }
};
