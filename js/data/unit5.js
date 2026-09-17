/**
 * Language Test Unit 5 - Music and Talent
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.UNIT_5_DATA = {
  id: "unit5",
  number: 5,
  title: "Music and Talent",
  description: "Vocabulary: Music styles, Instruments, Crime & Investigation. Grammar: Future with will vs be going to, Relative pronouns (who, which, where). Communication: Weekend plans.",

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 5",
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
            title: "Complete the blog entry with words for music styles and musical instruments.",
            points: 7,
            type: "letter-hint",
            example: "0 techno",
            items: [
              { id: "A_1_1", label: "1", textBefore: "My favourite kinds of music are", displayHint: "j _ _ z", placeholder: "jazz", prefix: "j", textAfter: "and" },
              { id: "A_1_2", label: "2", textBefore: "", displayHint: "c _ _ _ _ _ _ _ l", placeholder: "classical", prefix: "c", textAfter: "music." },
              { id: "A_1_3", label: "3", textBefore: "I play the", displayHint: "p _ _ _ o", placeholder: "piano", prefix: "p", textAfter: "and I'd like to play the" },
              { id: "A_1_4", label: "4", textBefore: "", displayHint: "t _ _ _ _ _ t", placeholder: "trumpet", prefix: "t", textAfter: "too one day." },
              { id: "A_1_5", label: "5", textBefore: "My friend Henry plays the", displayHint: "v _ _ _ _ n", placeholder: "violin", prefix: "v", textAfter: "and my friend Sheila plays the" },
              { id: "A_1_6", label: "6", textBefore: "", displayHint: "c _ _ _ o", placeholder: "cello", prefix: "c", textAfter: "." },
              { id: "A_1_7", label: "7", textBefore: "My friends and I also like", displayHint: "L _ _ _ n", placeholder: "Latin", prefix: "L", textAfter: "because we like dancing to it." }
            ],
            answers: {
              "A_1_1": { expected: ["jazz"], explanation: "A music style originating in African American communities: 'jazz'." },
              "A_1_2": { expected: ["classical"], explanation: "Traditional Western European orchestral music: 'classical music'." },
              "A_1_3": { expected: ["piano"], explanation: "A large keyboard musical instrument: 'piano'." },
              "A_1_4": { expected: ["trumpet"], explanation: "A brass musical instrument with three valves: 'trumpet'." },
              "A_1_5": { expected: ["violin"], explanation: "A four-stringed instrument played with a bow: 'violin'." },
              "A_1_6": { expected: ["cello"], explanation: "A large bass violin held between the knees: 'cello'." },
              "A_1_7": { expected: ["Latin", "latin"], explanation: "Rhythmic dance music originating from Latin America: 'Latin music'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "The Silver Foxes ⁰gave / took a fantastic concert in the park last night",
            items: [
              { id: "A_2_1", label: "1", before: "and", options: ["wrote", "signed"], after: "hundreds of autographs for their fans afterwards." },
              { id: "A_2_2", label: "2", before: "They are very", options: ["talent", "talented"], after: "." },
              { id: "A_2_3", label: "3", before: "Martina Cooper, the lead singer, also has good looks and great", options: ["confidence", "confident"], after: "on stage." },
              { id: "A_2_4", label: "4", before: "Brad Williams, their drummer,", options: ["composes", "makes"], after: "all their songs." },
              { id: "A_2_5", label: "5", before: "'We have already", options: ["joined", "recorded"], after: "two albums and we hope there will be another one soon,' he told me." }
            ],
            answers: {
              "A_2_1": { expected: ["signed"], explanation: "Collocation: 'sign autographs' for fans." },
              "A_2_2": { expected: ["talented"], explanation: "Adjective form needed: 'very talented'." },
              "A_2_3": { expected: ["confidence"], explanation: "Noun form needed after adjective 'great': 'great confidence'." },
              "A_2_4": { expected: ["composes"], explanation: "A person who creates music 'composes songs'." },
              "A_2_5": { expected: ["recorded"], explanation: "To capture music in a studio onto an album is to 'record' it." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the short article with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["criminals", "detective", "fingerprints", "footprints", "robberies", "thief", "witness"],
            example: "One ⁰witness said: 'The door of the newsagent's was locked...'",
            usedInExample: ["witness"],
            context: "More crime in our town!",
            sentences: [
              { textBefore: "...but the", gapId: "A_3_1", label: "1", textAfter: "opened it easily. A minute later, he ran out again." },
              { textBefore: "The police didn't find any", gapId: "A_3_2", label: "2", textAfter: "in the newsagent's because the man wore gloves." },
              { textBefore: "But they found some large", gapId: "A_3_3", label: "3", textAfter: "from size 18 trainers." },
              { textBefore: "A", gapId: "A_3_4", label: "4", textAfter: "told our reporter: 'There are lots of", gapId2: "A_3_5", label2: "5", textAfter2: "in this town, but this one is a very tall man." },
              { textBefore: "We're going to catch him and stop any more", gapId: "A_3_6", label: "6", textAfter: "!'" }
            ],
            answers: {
              "A_3_1": { expected: ["thief"], explanation: "A person who steals goods or money: 'thief'." },
              "A_3_2": { expected: ["fingerprints"], explanation: "Marks left by finger ridges: 'fingerprints'." },
              "A_3_3": { expected: ["footprints"], explanation: "Impressions left by shoes/trainers: 'footprints'." },
              "A_3_4": { expected: ["detective"], explanation: "A police investigator: 'detective'." },
              "A_3_5": { expected: ["criminals"], explanation: "People who commit unlawful acts: 'criminals'." },
              "A_3_6": { expected: ["robberies"], explanation: "Acts of stealing from places: 'stop any more robberies'." }
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
            title: "Complete the sentences about plans and predictions. Use the correct form of will and going to.",
            points: 6,
            type: "grammar-gap",
            example: "0 I'm sure he won't win (not win) the competition. (prediction)",
            items: [
              { id: "A_4_1", label: "1", before: "I", verb: "listen", after: "to music tonight. (plan)" },
              { id: "A_4_2", label: "2", before: "", verb: "she / play", after: "well on Sunday? (prediction)" },
              { id: "A_4_3", label: "3", before: "I think they", verb: "enjoy", after: "the concert. (prediction)" },
              { id: "A_4_4", label: "4", before: "They", verb: "not sign", after: "autographs tonight. (plan)" },
              { id: "A_4_5", label: "5", before: "What kind of musical instrument", verb: "she / learn", after: "to play? (plan)" },
              { id: "A_4_6", label: "6", before: "He", verb: "be", after: "a great singer one day. (prediction)" }
            ],
            answers: {
              "A_4_1": { expected: ["'m going to listen", "am going to listen"], explanation: "Future plan with I: 'am / 'm going to listen'." },
              "A_4_2": { expected: ["Will she play", "will she play"], explanation: "Future prediction question with will: 'Will she play'." },
              "A_4_3": { expected: ["will enjoy", "'ll enjoy"], explanation: "Prediction with 'I think': 'will enjoy'." },
              "A_4_4": { expected: ["aren't going to sign", "are not going to sign"], explanation: "Negative future plan with they: 'aren't going to sign'." },
              "A_4_5": { expected: ["is she going to learn"], explanation: "Question about future plan: 'is she going to learn'." },
              "A_4_6": { expected: ["will be", "'ll be"], explanation: "Future prediction with one day: 'will / 'll be'." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with who, which or where.",
            points: 6,
            type: "relative-pronouns-gap",
            example: "0 I liked the singer who won the competition.",
            items: [
              { id: "A_5_1", label: "1", before: "That's the place", options: ["where", "which", "who"], after: "I took a selfie with my favourite actor." },
              { id: "A_5_2", label: "2", before: "The instrument", options: ["which", "where", "who"], after: "he plays was very expensive." },
              { id: "A_5_3", label: "3", before: "The town", options: ["where", "which", "who"], after: "they were born is in Scotland." },
              { id: "A_5_4", label: "4", before: "The girl", options: ["who", "which", "where"], after: "plays the guitar is my cousin." },
              { id: "A_5_5", label: "5", before: "I must correct all the mistakes", options: ["which", "who", "where"], after: "I made." },
              { id: "A_5_6", label: "6", before: "Diana is the girl", options: ["who", "which", "where"], after: "wrote the words of the song." }
            ],
            answers: {
              "A_5_1": { expected: ["where"], explanation: "Relative pronoun for a place: 'where'." },
              "A_5_2": { expected: ["which"], explanation: "Relative pronoun for objects/things: 'which'." },
              "A_5_3": { expected: ["where"], explanation: "Relative pronoun for a town/location: 'where'." },
              "A_5_4": { expected: ["who"], explanation: "Relative pronoun for a person (the girl): 'who'." },
              "A_5_5": { expected: ["which"], explanation: "Relative pronoun for things (mistakes): 'which'." },
              "A_5_6": { expected: ["who"], explanation: "Relative pronoun for a person (Diana): 'who'." }
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
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["any plans", "forward", "lucky", "sounds like", "up to", "your plans"],
            example: "Tessa: Hi, Charlie. What are you ⁰up to this weekend?",
            usedInExample: ["up to"],
            dialogue: [
              { speaker: "Tessa", text: "Hi, Charlie. What are you up to this weekend?" },
              { speaker: "Charlie", text: "Hi, Tessa. I'm going to London with my sister." },
              {
                speaker: "Tessa",
                parts: [
                  { before: "That", gapId: "A_6_1", label: "1", after: "fun! What are" },
                  { gapId: "A_6_2", label: "2", after: "for Saturday?" }
                ]
              },
              {
                speaker: "Charlie",
                parts: [
                  { before: "We're going to a hip hop concert. I'm really looking", gapId: "A_6_3", label: "3", after: "to it!" }
                ]
              },
              {
                speaker: "Tessa",
                parts: [
                  { before: "Have you got", gapId: "A_6_4", label: "4", after: "for Sunday?" }
                ]
              },
              { speaker: "Charlie", text: "Yes. We're going to the theatre." },
              {
                speaker: "Tessa",
                parts: [
                  { gapId: "A_6_5", label: "5", after: "you!" }
                ]
              }
            ],
            answers: {
              "A_6_1": { expected: ["sounds like"], explanation: "Reaction: 'That sounds like fun!'" },
              "A_6_2": { expected: ["your plans"], explanation: "Inquiry: 'What are your plans for Saturday?'" },
              "A_6_3": { expected: ["forward"], explanation: "Phrasal verb: 'look forward to'." },
              "A_6_4": { expected: ["any plans"], explanation: "Question about availability: 'Have you got any plans for Sunday?'" },
              "A_6_5": { expected: ["Lucky", "lucky"], explanation: "Expression of envy/good fortune: 'Lucky you!'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 5",
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
            title: "Complete the blog entry with words for music styles and musical instruments.",
            points: 7,
            type: "letter-hint",
            example: "0 techno",
            items: [
              { id: "B_1_1", label: "1", textBefore: "My favourite kinds of music are", displayHint: "r _ _ k", placeholder: "rock", prefix: "r", textAfter: "and" },
              { id: "B_1_2", label: "2", textBefore: "", displayHint: "L _ _ _ n", placeholder: "Latin", prefix: "L", textAfter: "." },
              { id: "B_1_3", label: "3", textBefore: "I play the", displayHint: "d _ _ _ s", placeholder: "drums", prefix: "d", textAfter: "and I'd like to play the" },
              { id: "B_1_4", label: "4", textBefore: "", displayHint: "s _ _ _ _ _ _ _ e", placeholder: "saxophone", prefix: "s", textAfter: "one day." },
              { id: "B_1_5", label: "5", textBefore: "My friend Rob plays the electric", displayHint: "g _ _ _ _ r", placeholder: "guitar", prefix: "g", textAfter: "and my friend Wanda plays the" },
              { id: "B_1_6", label: "6", textBefore: "", displayHint: "k _ _ _ _ _ _ _ s", placeholder: "keyboards", prefix: "k", textAfter: "." },
              { id: "B_1_7", label: "7", textBefore: "My friends and I also like", displayHint: "h _ _ _ y  m _ _ _ l", placeholder: "heavy metal", prefix: "h", textAfter: "because it's exciting." }
            ],
            answers: {
              "B_1_1": { expected: ["rock"], explanation: "Music genre based on electric guitars: 'rock'." },
              "B_1_2": { expected: ["Latin", "latin"], explanation: "Music style from Latin America: 'Latin'." },
              "B_1_3": { expected: ["drums"], explanation: "Percussion instruments played with sticks: 'drums'." },
              "B_1_4": { expected: ["saxophone"], explanation: "Woodwind brass instrument common in jazz: 'saxophone'." },
              "B_1_5": { expected: ["guitar"], explanation: "Stringed instrument: electric 'guitar'." },
              "B_1_6": { expected: ["keyboards", "keyboard"], explanation: "Electronic keyboard instruments: 'keyboards'." },
              "B_1_7": { expected: ["heavy metal"], explanation: "Aggressive, powerful genre of rock music: 'heavy metal'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 5,
            type: "circle-choice",
            example: "The Half-Notes ⁰gave / took a great concert last Saturday",
            items: [
              { id: "B_2_1", label: "1", before: "and they", options: ["signed", "joined"], after: "autographs for their fans afterwards." },
              { id: "B_2_2", label: "2", before: "The singer, Ross Donovan, is very", options: ["good looks", "good-looking"], after: "." },
              { id: "B_2_3", label: "3", before: "He is", options: ["determined", "determination"], after: "to make the band successful." },
              { id: "B_2_4", label: "4", before: "'We want to", options: ["write", "record"], after: "an album next year." },
              { id: "B_2_5", label: "5", before: "Lucinda, our piano player, is", options: ["making", "composing"], after: "some new songs,' he told me." }
            ],
            answers: {
              "B_2_1": { expected: ["signed"], explanation: "Collocation: 'sign autographs'." },
              "B_2_2": { expected: ["good-looking"], explanation: "Adjective for attractive appearance: 'good-looking'." },
              "B_2_3": { expected: ["determined"], explanation: "Adjective describing resolute focus: 'determined to make the band successful'." },
              "B_2_4": { expected: ["record"], explanation: "Collocation: 'record an album'." },
              "B_2_5": { expected: ["composing"], explanation: "To write music: 'composing some new songs'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the short article with the words in the box.",
            points: 6,
            type: "word-bank",
            wordBank: ["criminals", "detective", "fingerprints", "footprints", "robbery", "thief", "witness"],
            example: "Last night, there was a ⁰robbery on Lord Roberts Road...",
            usedInExample: ["robbery"],
            context: "More crime in our town!",
            sentences: [
              { textBefore: "A", gapId: "B_3_1", label: "1", textAfter: "stole £711 from the Corner Café." },
              { textBefore: "A", gapId: "B_3_2", label: "2", textAfter: "saw him from her flat and phoned the police." },
              { textBefore: "The man wasn't wearing gloves so the police found his", gapId: "B_3_3", label: "3", textAfter: "in the café." },
              { textBefore: "They also found large", gapId: "B_3_4", label: "4", textAfter: "from his trainers." },
              { textBefore: "A", gapId: "B_3_5", label: "5", textAfter: "said: 'The thief was a very tall man. Not many", gapId2: "B_3_6", label2: "6", textAfter2: "wear size 18 trainers! We're going to find him!'" }
            ],
            answers: {
              "B_3_1": { expected: ["thief"], explanation: "A person who steals: 'thief'." },
              "B_3_2": { expected: ["witness"], explanation: "A person who sees a crime: 'witness'." },
              "B_3_3": { expected: ["fingerprints"], explanation: "Marks from bare fingers: 'fingerprints'." },
              "B_3_4": { expected: ["footprints"], explanation: "Marks from shoe soles: 'footprints'." },
              "B_3_5": { expected: ["detective"], explanation: "An investigating police officer: 'detective'." },
              "B_3_6": { expected: ["criminals"], explanation: "People who commit crime: 'criminals'." }
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
            title: "Complete the sentences about plans and predictions. Use the correct form of will and going to.",
            points: 6,
            type: "grammar-gap",
            example: "0 I'm sure he won't win (not win) the competition. (prediction)",
            items: [
              { id: "B_4_1", label: "1", before: "I think they", verb: "buy", after: "the cheapest tickets. (prediction)" },
              { id: "B_4_2", label: "2", before: "", verb: "you / ask", after: "for an autograph? (plan)" },
              { id: "B_4_3", label: "3", before: "I", verb: "not practise", after: "the piano this afternoon. (plan)" },
              { id: "B_4_4", label: "4", before: "What kind of music", verb: "he / play", after: "at the party? (prediction)" },
              { id: "B_4_5", label: "5", before: "They", verb: "go", after: "to the concert next month. (plan)" },
              { id: "B_4_6", label: "6", before: "She", verb: "not make", after: "any mistakes. She's very careful. (prediction)" }
            ],
            answers: {
              "B_4_1": { expected: ["will buy", "'ll buy"], explanation: "Prediction with 'I think': 'will buy'." },
              "B_4_2": { expected: ["Are you going to ask", "are you going to ask"], explanation: "Question about future plan: 'Are you going to ask'." },
              "B_4_3": { expected: ["am not going to sign", "'m not going to sign", "am not going to practise", "'m not going to practise", "am not going to practice", "'m not going to practice"], explanation: "Negative future plan with I: 'am / 'm not going to practise / sign'." },
              "B_4_4": { expected: ["will he play"], explanation: "Prediction question with will: 'will he play'." },
              "B_4_5": { expected: ["are going to go", "'re going to go"], explanation: "Future plan with they: 'are going to go'." },
              "B_4_6": { expected: ["won't make", "will not make"], explanation: "Negative prediction: 'won't make'." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the sentences with who, which or where.",
            points: 6,
            type: "relative-pronouns-gap",
            example: "0 I liked the singer who won the competition.",
            items: [
              { id: "B_5_1", label: "1", before: "The village", options: ["where", "which", "who"], after: "Granny lives is in the mountains." },
              { id: "B_5_2", label: "2", before: "I liked all the songs", options: ["which", "where", "who"], after: "she sang." },
              { id: "B_5_3", label: "3", before: "The woman", options: ["who", "which", "where"], after: "is standing there is my music teacher." },
              { id: "B_5_4", label: "4", before: "Is this the place", options: ["where", "which", "who"], after: "you stayed last summer?" },
              { id: "B_5_5", label: "5", before: "The violin", options: ["which", "who", "where"], after: "she plays is very expensive." },
              { id: "B_5_6", label: "6", before: "People", options: ["who", "which", "where"], after: "design buildings are architects." }
            ],
            answers: {
              "B_5_1": { expected: ["where"], explanation: "Relative pronoun for a village / place: 'where'." },
              "B_5_2": { expected: ["which"], explanation: "Relative pronoun for songs / things: 'which'." },
              "B_5_3": { expected: ["who"], explanation: "Relative pronoun for a woman / person: 'who'." },
              "B_5_4": { expected: ["where"], explanation: "Relative pronoun for the place / location: 'where'." },
              "B_5_5": { expected: ["which"], explanation: "Relative pronoun for an instrument / thing: 'which'." },
              "B_5_6": { expected: ["who"], explanation: "Relative pronoun for people: 'who'." }
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
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["any plans", "forward", "lucky", "sounds", "sounds like", "up to", "your plans"],
            example: "Isabel: Hi, Greg. What are you ⁰up to this weekend?",
            usedInExample: ["up to"],
            dialogue: [
              { speaker: "Isabel", text: "Hi, Greg. What are you up to this weekend?" },
              { speaker: "Greg", text: "Hi, Isabel. We're going to Manchester with our cousins." },
              {
                speaker: "Isabel",
                parts: [
                  { gapId: "B_6_1", label: "1", after: "you! I've never been to Manchester. Have you got" },
                  { gapId: "B_6_2", label: "2", after: "for Saturday?" }
                ]
              },
              { speaker: "Greg", text: "We're going to a football match and then to a party." },
              {
                speaker: "Isabel",
                parts: [
                  { before: "That", gapId: "B_6_3", label: "3", after: "great! And what are" },
                  { gapId: "B_6_4", label: "4", after: "for Sunday?" }
                ]
              },
              {
                speaker: "Greg",
                parts: [
                  { before: "We're going to see Granny and Grandad. I'm really looking", gapId: "B_6_5", label: "5", after: "to it!" }
                ]
              }
            ],
            answers: {
              "B_6_1": { expected: ["Lucky", "lucky"], explanation: "Congratulating on good fortune: 'Lucky you!'" },
              "B_6_2": { expected: ["any plans"], explanation: "Inquiring about plans: 'Have you got any plans...?'" },
              "B_6_3": { expected: ["sounds", "sounds like"], explanation: "Reacting to plans: 'That sounds great!'" },
              "B_6_4": { expected: ["your plans"], explanation: "Asking about Sunday plans: 'And what are your plans for Sunday?'" },
              "B_6_5": { expected: ["forward"], explanation: "Phrasal verb: 'looking forward to it!'" }
            }
          }
        ]
      }
    }
  }
};
