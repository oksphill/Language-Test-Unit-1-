/**
 * Language Test Unit 7 - Technology and Inventions
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.UNIT_7_DATA = {
  id: "unit7",
  number: 7,
  title: "Technology and Inventions",
  description: "Vocabulary: Materials and properties, Inventions & Discoveries, Tech phrasal verbs. Grammar: Present Simple Passive, Past Simple Passive. Communication: Asking for repetition and clarification.",

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 7",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 18,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the sentences with words for materials and adjectives that describe the objects.",
            points: 8,
            type: "letter-hint",
            example: "0 These earrings are made of silver.",
            items: [
              { id: "A_1_1", label: "1", textBefore: "Books are made of", displayHint: "p _ _ _ r", placeholder: "paper", prefix: "p", textAfter: "." },
              { id: "A_1_2", label: "2", textBefore: "Cardigans and coats are often made of wool. They're", displayHint: "s _ _ t", placeholder: "soft", prefix: "s", textAfter: "and warm." },
              { id: "A_1_3", label: "3", textBefore: "Denim is a kind of", displayHint: "c _ _ _ _ n", placeholder: "cotton", prefix: "c", textAfter: "." },
              { id: "A_1_4", label: "4", textBefore: "We make jeans from denim because it's a very", displayHint: "s _ _ _ _ g", placeholder: "strong", prefix: "s", textAfter: "material." },
              { id: "A_1_5", label: "5", textBefore: "Those shoes and belts are made of", displayHint: "l _ _ _ _ _ r", placeholder: "leather", prefix: "l", textAfter: "." },
              { id: "A_1_6", label: "6", textBefore: "The goldfish bowl is made of glass. It's", displayHint: "t _ _ _ _ _ _ _ _ _ _ t", placeholder: "transparent", prefix: "t", textAfter: "." },
              { id: "A_1_7", label: "7", textBefore: "The garden table is made of", displayHint: "m _ _ _ l", placeholder: "metal", prefix: "m", textAfter: ", not wood." },
              { id: "A_1_8", label: "8", textBefore: "The box isn't light. It's", displayHint: "h _ _ _ y", placeholder: "heavy", prefix: "h", textAfter: "." }
            ],
            answers: {
              "A_1_1": { expected: ["paper"], explanation: "Material manufactured in sheets from wood pulp: 'paper'." },
              "A_1_2": { expected: ["soft"], explanation: "Pleasing to touch, not hard or rough: 'soft and warm'." },
              "A_1_3": { expected: ["cotton"], explanation: "Natural soft fibre from cotton plants: 'cotton'." },
              "A_1_4": { expected: ["strong"], explanation: "Durable and tough fabric: 'strong material'." },
              "A_1_5": { expected: ["leather"], explanation: "Material made from animal skin: 'leather shoes and belts'." },
              "A_1_6": { expected: ["transparent"], explanation: "Allowing light to pass through so objects can be seen clearly: 'transparent'." },
              "A_1_7": { expected: ["metal"], explanation: "Solid hard material like iron, steel, or aluminium: 'metal table'." },
              "A_1_8": { expected: ["heavy"], explanation: "Opposite of light; having great weight: 'heavy'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the questions with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["composed", "designed", "discovered", "invented", "painted", "produced"],
            example: "0 A: Who designed the White House? B: James Hoban.",
            usedInExample: ["designed"],
            sentences: [
              { textBefore: "1 A: Who", gapId: "A_2_1", label: "1", textAfter: "the ballpoint pen? B: László Bíró." },
              { textBefore: "2 A: Which famous musician", gapId: "A_2_2", label: "2", textAfter: "the opera Fidelio? B: Beethoven." },
              { textBefore: "3 A: Which famous artist", gapId: "A_2_3", label: "3", textAfter: "The Kiss? B: Gustav Klimt." },
              { textBefore: "4 A: Who", gapId: "A_2_4", label: "4", textAfter: "DNA? B: Friedrich Miescher." },
              { textBefore: "5 A: Which company", gapId: "A_2_5", label: "5", textAfter: "the first TVs? B: Telefunken." }
            ],
            answers: {
              "A_2_1": { expected: ["invented"], explanation: "To create or design a new device: 'invented the ballpoint pen'." },
              "A_2_2": { expected: ["composed"], explanation: "To write music: 'composed the opera Fidelio'." },
              "A_2_3": { expected: ["painted"], explanation: "To create an artwork with paint: 'painted The Kiss'." },
              "A_2_4": { expected: ["discovered"], explanation: "To find something that already existed in nature: 'discovered DNA'." },
              "A_2_5": { expected: ["produced"], explanation: "To manufacture commercially: 'produced the first TVs'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "0 Charge / Click the battery of your laptop when it is at 10%.",
            items: [
              { id: "A_3_1", label: "1", before: "", options: ["Switch on", "Turn off"], after: "the laptop. I'd like to use it." },
              { id: "A_3_2", label: "2", before: "We have WiFi, so you can", options: ["connect", "charge"], after: "to the internet." },
              { id: "A_3_3", label: "3", before: "Click", options: ["up", "on"], after: "the music app and choose some songs." },
              { id: "A_3_4", label: "4", before: "First pay for the songs you like and then", options: ["upload", "download"], after: "them." },
              { id: "A_3_5", label: "5", before: "When you go to bed,", options: ["switch off", "turn down"], after: "your laptop." }
            ],
            answers: {
              "A_3_1": { expected: ["Switch on"], explanation: "To start an electrical device: 'Switch on the laptop'." },
              "A_3_2": { expected: ["connect"], explanation: "To join a network: 'connect to the internet'." },
              "A_3_3": { expected: ["on"], explanation: "Preposition: 'click on the app'." },
              "A_3_4": { expected: ["download"], explanation: "To copy data from the internet to your device: 'download songs'." },
              "A_3_5": { expected: ["switch off"], explanation: "To power down: 'switch off your laptop'." }
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
            title: "Put the words in the correct order to make passive sentences.",
            points: 6,
            type: "sentence-order",
            example: "0 coffee / in Brazil / grown / is -> Coffee is grown in Brazil.",
            items: [
              { id: "A_4_1", label: "1", prompt: "used / strawberries / are / to make strawberry jam" },
              { id: "A_4_2", label: "2", prompt: "every day / isn't / the room / cleaned" },
              { id: "A_4_3", label: "3", prompt: "what / sold / in a newsagent's / is / ?" },
              { id: "A_4_4", label: "4", prompt: "aren't / found / in Australia / these animals" },
              { id: "A_4_5", label: "5", prompt: "kilts / worn / are / in which country / ?" },
              { id: "A_4_6", label: "6", prompt: "the money / kept / is / in a safe place" }
            ],
            answers: {
              "A_4_1": { expected: ["Strawberries are used to make strawberry jam", "Strawberries are used to make strawberry jam."], explanation: "Present Simple passive: Strawberries are used to make strawberry jam." },
              "A_4_2": { expected: ["The room isn't cleaned every day", "The room isn't cleaned every day.", "The room is not cleaned every day"], explanation: "Negative Present Simple passive: The room isn't cleaned every day." },
              "A_4_3": { expected: ["What is sold in a newsagent's", "What is sold in a newsagent's?", "What's sold in a newsagent's"], explanation: "Passive question: What is sold in a newsagent's?" },
              "A_4_4": { expected: ["These animals aren't found in Australia", "These animals aren't found in Australia.", "These animals are not found in Australia"], explanation: "Negative passive: These animals aren't found in Australia." },
              "A_4_5": { expected: ["In which country are kilts worn", "In which country are kilts worn?"], explanation: "Passive question with prepositional phrase: In which country are kilts worn?" },
              "A_4_6": { expected: ["The money is kept in a safe place", "The money is kept in a safe place."], explanation: "Passive statement: The money is kept in a safe place." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the Past Simple passive.",
            points: 6,
            type: "grammar-gap",
            example: "0 Mickey Mouse was created (create) by Walt Disney.",
            items: [
              { id: "A_5_1", label: "1", before: "Tutankhamun's treasure", verb: "find", after: "by Howard Carter in 1922." },
              { id: "A_5_2", label: "2", before: "The map", verb: "lose", after: "." },
              { id: "A_5_3", label: "3", before: "Those photos", verb: "take", after: "by Maria." },
              { id: "A_5_4", label: "4", before: "Some exotic vegetables", verb: "use", after: "to make the soup." },
              { id: "A_5_5", label: "5", before: "The walls of the palace", verb: "decorate", after: "by a famous artist." },
              { id: "A_5_6", label: "6", before: "ET", verb: "direct", after: "by Steven Spielberg." }
            ],
            answers: {
              "A_5_1": { expected: ["was found"], explanation: "Past Simple passive singular: 'was found'." },
              "A_5_2": { expected: ["was lost"], explanation: "Past Simple passive singular: 'was lost'." },
              "A_5_3": { expected: ["were taken"], explanation: "Past Simple passive plural: 'were taken'." },
              "A_5_4": { expected: ["were used"], explanation: "Past Simple passive plural: 'were used'." },
              "A_5_5": { expected: ["were decorated"], explanation: "Past Simple passive plural (walls): 'were decorated'." },
              "A_5_6": { expected: ["was directed"], explanation: "Past Simple passive singular (ET): 'was directed'." }
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
            wordBank: ["again", "are you following", "did you get", "do you mean", "repeat", "you explain"],
            example: "0 A: I live in Bibury. That's B-I-B-U-R-Y. B: Sorry, can you say that ⁰again?",
            usedInExample: ["again"],
            dialogue: [
              {
                speaker: "A",
                parts: [
                  { before: "You put this part here.", gapId: "A_6_1", label: "1", after: "me?" }
                ]
              },
              { speaker: "B", text: "Yes, I am." },
              { speaker: "A", text: "Did you understand the instructions?" },
              {
                speaker: "B",
                parts: [
                  { before: "No. Could you", gapId: "A_6_2", label: "2", after: "them, please?" }
                ]
              },
              { speaker: "A", text: "One has six and the other has half a dozen." },
              {
                speaker: "B",
                parts: [
                  { before: "I don't understand. Could", gapId: "A_6_3", label: "3", after: ", please?" }
                ]
              },
              {
                speaker: "A",
                parts: [
                  { before: "Her number is 020159954.", gapId: "A_6_4", label: "4", after: "that?" }
                ]
              },
              { speaker: "B", text: "Yes, thanks." },
              { speaker: "A", text: "You've broken my laptop!" },
              {
                speaker: "B",
                parts: [
                  { before: "What", gapId: "A_6_5", label: "5", after: "?" }
                ]
              }
            ],
            answers: {
              "A_6_1": { expected: ["Are you following", "are you following"], explanation: "Checking understanding: 'Are you following me?'" },
              "A_6_2": { expected: ["repeat"], explanation: "Asking someone to say something again: 'Could you repeat them, please?'" },
              "A_6_3": { expected: ["you explain"], explanation: "Asking for clarification: 'Could you explain, please?'" },
              "A_6_4": { expected: ["Did you get", "did you get"], explanation: "Checking if information was heard/noted: 'Did you get that?'" },
              "A_6_5": { expected: ["do you mean"], explanation: "Asking what someone implies: 'What do you mean?'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 7",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 18,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Complete the sentences with words for materials and adjectives that describe the objects.",
            points: 8,
            type: "letter-hint",
            example: "0 These earrings are made of silver.",
            items: [
              { id: "B_1_1", label: "1", textBefore: "The table and chairs are made of wood. They're very", displayHint: "h _ _ _ y", placeholder: "heavy", prefix: "h", textAfter: "." },
              { id: "B_1_2", label: "2", textBefore: "Denim is a kind of", displayHint: "c _ _ _ _ n", placeholder: "cotton", prefix: "c", textAfter: "." },
              { id: "B_1_3", label: "3", textBefore: "Denim trousers are very", displayHint: "s _ _ _ _ g", placeholder: "strong", prefix: "s", textAfter: "and people wear them for years." },
              { id: "B_1_4", label: "4", textBefore: "The bowl is made of plastic. It's very", displayHint: "l _ _ _ t", placeholder: "light", prefix: "l", textAfter: "." },
              { id: "B_1_5", label: "5", textBefore: "These jackets and cardigans are made of", displayHint: "w _ _ l", placeholder: "wool", prefix: "w", textAfter: "." },
              { id: "B_1_6", label: "6", textBefore: "The vases are made of glass. They're", displayHint: "t _ _ _ _ _ _ _ _ _ _ t", placeholder: "transparent", prefix: "t", textAfter: "." },
              { id: "B_1_7", label: "7", textBefore: "My bracelet is made of", displayHint: "g _ _ d", placeholder: "gold", prefix: "g", textAfter: "." },
              { id: "B_1_8", label: "8", textBefore: "Those boots are made of brown", displayHint: "l _ _ _ _ _ r", placeholder: "leather", prefix: "l", textAfter: "." }
            ],
            answers: {
              "B_1_1": { expected: ["heavy"], explanation: "Having considerable weight: 'very heavy'." },
              "B_1_2": { expected: ["cotton"], explanation: "Plant fabric: 'cotton'." },
              "B_1_3": { expected: ["strong"], explanation: "Durable: 'strong and people wear them for years'." },
              "B_1_4": { expected: ["light"], explanation: "Low in weight: 'very light'." },
              "B_1_5": { expected: ["wool"], explanation: "Fibre from sheep fleece: 'wool'." },
              "B_1_6": { expected: ["transparent"], explanation: "See-through: 'transparent'." },
              "B_1_7": { expected: ["gold"], explanation: "Precious yellow metal: 'gold'." },
              "B_1_8": { expected: ["leather"], explanation: "Animal hide material: 'brown leather boots'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the questions with the words in the box.",
            points: 5,
            type: "word-bank",
            wordBank: ["composed", "designed", "discovered", "invented", "painted", "produced"],
            example: "0 A: Who designed the White House? B: James Hoban.",
            usedInExample: ["designed"],
            sentences: [
              { textBefore: "1 A: Which artist", gapId: "B_2_1", label: "1", textAfter: "The Starry Night? B: Vincent van Gogh." },
              { textBefore: "2 A: Which company", gapId: "B_2_2", label: "2", textAfter: "the first mobile phones? B: Motorola." },
              { textBefore: "3 A: Who", gapId: "B_2_3", label: "3", textAfter: "the electric light bulb? B: Thomas Edison." },
              { textBefore: "4 A: Which musician", gapId: "B_2_4", label: "4", textAfter: "the opera Porgy and Bess? B: George Gershwin." },
              { textBefore: "5 A: Who", gapId: "B_2_5", label: "5", textAfter: "four moons of the planet Jupiter? B: Galileo Galilei." }
            ],
            answers: {
              "B_2_1": { expected: ["painted"], explanation: "Art creation: 'painted The Starry Night'." },
              "B_2_2": { expected: ["produced"], explanation: "Commercial production: 'produced mobile phones'." },
              "B_2_3": { expected: ["invented"], explanation: "Technological innovation: 'invented the light bulb'." },
              "B_2_4": { expected: ["composed"], explanation: "Musical creation: 'composed the opera'." },
              "B_2_5": { expected: ["discovered"], explanation: "Scientific finding: 'discovered four moons'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "0 Charge / Click the battery of your laptop when it is at 10%.",
            items: [
              { id: "B_3_1", label: "1", before: "When I want to talk to my friends, I click", options: ["on", "up"], after: "this social media app." },
              { id: "B_3_2", label: "2", before: "Please", options: ["turn up", "switch off"], after: "your computer before you go to bed." },
              { id: "B_3_3", label: "3", before: "We have WiFi, so we can", options: ["upload", "connect"], after: "to the internet." },
              { id: "B_3_4", label: "4", before: "I", options: ["downloaded", "uploaded"], after: "my photos to my blog." },
              { id: "B_3_5", label: "5", before: "Please", options: ["turn up", "switch off"], after: "the music. I can't hear it." }
            ],
            answers: {
              "B_3_1": { expected: ["on"], explanation: "Collocation: 'click on an app'." },
              "B_3_2": { expected: ["switch off"], explanation: "Power down: 'switch off your computer'." },
              "B_3_3": { expected: ["connect"], explanation: "Collocation: 'connect to the internet'." },
              "B_3_4": { expected: ["uploaded"], explanation: "Transferring files to the web: 'uploaded photos to my blog'." },
              "B_3_5": { expected: ["turn up"], explanation: "Increasing volume: 'turn up the music'." }
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
            title: "Put the words in the correct order to make passive sentences.",
            points: 6,
            type: "sentence-order",
            example: "0 coffee / in Brazil / grown / is -> Coffee is grown in Brazil.",
            items: [
              { id: "B_4_1", label: "1", prompt: "aren't / found / in Canada / penguins" },
              { id: "B_4_2", label: "2", prompt: "in Scotland / kilts / worn / are" },
              { id: "B_4_3", label: "3", prompt: "kept / the books / are / in that bookcase / ?" },
              { id: "B_4_4", label: "4", prompt: "are / of gold / made / necklaces and earrings" },
              { id: "B_4_5", label: "5", prompt: "the floor / every day / isn't / washed" },
              { id: "B_4_6", label: "6", prompt: "in a greengrocer's / what / is / sold / ?" }
            ],
            answers: {
              "B_4_1": { expected: ["Penguins aren't found in Canada", "Penguins aren't found in Canada.", "Penguins are not found in Canada"], explanation: "Passive sentence: Penguins aren't found in Canada." },
              "B_4_2": { expected: ["Kilts are worn in Scotland", "Kilts are worn in Scotland."], explanation: "Passive sentence: Kilts are worn in Scotland." },
              "B_4_3": { expected: ["Are the books kept in that bookcase", "Are the books kept in that bookcase?"], explanation: "Passive question: Are the books kept in that bookcase?" },
              "B_4_4": { expected: ["Necklaces and earrings are made of gold", "Necklaces and earrings are made of gold."], explanation: "Passive sentence: Necklaces and earrings are made of gold." },
              "B_4_5": { expected: ["The floor isn't washed every day", "The floor isn't washed every day.", "The floor is not washed every day"], explanation: "Negative passive: The floor isn't washed every day." },
              "B_4_6": { expected: ["What is sold in a greengrocer's", "What is sold in a greengrocer's?"], explanation: "Passive question: What is sold in a greengrocer's?" }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with the Past Simple passive.",
            points: 6,
            type: "grammar-gap",
            example: "0 Mickey Mouse was created (create) by Walt Disney.",
            items: [
              { id: "B_5_1", label: "1", before: "The keys", verb: "lose", after: "." },
              { id: "B_5_2", label: "2", before: "Hamlet", verb: "write", after: "by Shakespeare." },
              { id: "B_5_3", label: "3", before: "Plastic", verb: "use", after: "to make the boxes." },
              { id: "B_5_4", label: "4", before: "The ancient city", verb: "discover", after: "in 1911." },
              { id: "B_5_5", label: "5", before: "The films Raiders of the Lost Ark and ET", verb: "direct", after: "by Steven Spielberg." },
              { id: "B_5_6", label: "6", before: "The T-shirts", verb: "send", after: "back to the shop." }
            ],
            answers: {
              "B_5_1": { expected: ["were lost"], explanation: "Past Simple passive plural (keys): 'were lost'." },
              "B_5_2": { expected: ["was written"], explanation: "Past Simple passive singular (Hamlet): 'was written'." },
              "B_5_3": { expected: ["was used"], explanation: "Past Simple passive uncountable (plastic): 'was used'." },
              "B_5_4": { expected: ["was discovered"], explanation: "Past Simple passive singular: 'was discovered'." },
              "B_5_5": { expected: ["were directed"], explanation: "Past Simple passive plural (two films): 'were directed'." },
              "B_5_6": { expected: ["were sent"], explanation: "Past Simple passive plural (T-shirts): 'were sent'." }
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
            wordBank: ["again", "are you following", "did you get", "do you mean", "explain", "you repeat"],
            example: "0 A: I live in Bibury. That's B-I-B-U-R-Y. B: Sorry, can you say that ⁰again?",
            usedInExample: ["again"],
            dialogue: [
              {
                speaker: "A",
                parts: [
                  { before: "His surname is Tzelis.", gapId: "B_6_1", label: "1", after: "that?" }
                ]
              },
              { speaker: "B", text: "Yes, thanks." },
              { speaker: "A", text: "I can't send emails." },
              {
                speaker: "B",
                parts: [
                  { before: "What", gapId: "B_6_2", label: "2", after: "? It's easy to send emails!" }
                ]
              },
              {
                speaker: "A",
                parts: [
                  { before: "Open this thing here and that thing there ...", gapId: "B_6_3", label: "3", after: "me?" }
                ]
              },
              { speaker: "B", text: "Yes, I am." },
              { speaker: "A", text: "Did you hear what I said?" },
              {
                speaker: "B",
                parts: [
                  { before: "No, sorry. Could", gapId: "B_6_4", label: "4", after: "that, please?" }
                ]
              },
              { speaker: "A", text: "Do you know how a digital radio works?" },
              {
                speaker: "B",
                parts: [
                  { before: "No. Could you", gapId: "B_6_5", label: "5", after: ", please?" }
                ]
              }
            ],
            answers: {
              "B_6_1": { expected: ["Did you get", "did you get"], explanation: "Checking if noted down: 'Did you get that?'" },
              "B_6_2": { expected: ["do you mean"], explanation: "Asking for meaning: 'What do you mean?'" },
              "B_6_3": { expected: ["Are you following", "are you following"], explanation: "Checking attention: 'Are you following me?'" },
              "B_6_4": { expected: ["you repeat"], explanation: "Requesting repetition: 'Could you repeat that, please?'" },
              "B_6_5": { expected: ["explain"], explanation: "Requesting an explanation: 'Could you explain, please?'" }
            }
          }
        ]
      }
    }
  }
};
