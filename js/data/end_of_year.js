/**
 * End-of-Year Test (Units 1–8) - Pearson English Photocopiable Tests
 * Total Points: 50 (Vocabulary: 15, Grammar: 15, Listening: 6, Reading: 6, Communication: 8)
 */

window.END_OF_YEAR_DATA = {
  id: "end_of_year",
  number: "1-8",
  title: "End-of-Year Test (Units 1–8)",
  description: "Comprehensive end-of-year assessment covering Units 1–8: Vocabulary, Grammar, Audio Listening (Track 11), Reading, and Communication.",
  totalPoints: 50,

  variantA: {
    id: "variantA",
    title: "End-of-Year Test A — Units 1–8",
    totalPoints: 50,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the one out.",
            points: 5,
            type: "circle-choice",
            example: "0 belt / bracelet / tights / (striped)",
            items: [
              { id: "EY_A_1_1", label: "1", before: "", options: ["honest", "polite", "lazy", "kind"], after: "" },
              { id: "EY_A_1_2", label: "2", before: "", options: ["witness", "engineer", "firefighter", "journalist"], after: "" },
              { id: "EY_A_1_3", label: "3", before: "", options: ["helmet", "gloves", "hockey stick", "ice rink"], after: "" },
              { id: "EY_A_1_4", label: "4", before: "", options: ["baggy", "scarf", "casual", "floral"], after: "" },
              { id: "EY_A_1_5", label: "5", before: "", options: ["drought", "lizard", "flood", "tornado"], after: "" }
            ],
            answers: {
              "EY_A_1_1": { expected: ["lazy"], explanation: "lazy is negative, while honest, polite, kind are positive." },
              "EY_A_1_2": { expected: ["witness"], explanation: "witness is not a profession, while the others are jobs." },
              "EY_A_1_3": { expected: ["ice rink"], explanation: "ice rink is a venue/place, while the others are pieces of equipment." },
              "EY_A_1_4": { expected: ["scarf"], explanation: "scarf is a noun/garment, while baggy, casual, floral are adjectives." },
              "EY_A_1_5": { expected: ["lizard"], explanation: "lizard is an animal, while the others are natural disasters." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the note.",
            points: 5,
            type: "letter-hint",
            context: "Becky, please don't forget to do these things!",
            example: "⁰Do the dishes when you come home.",
            items: [
              {
                id: "EY_A_2_1",
                label: "1",
                before: "Your dinner is in the fridge.",
                displayHint: "W _ _ _",
                after: "it up in the microwave oven."
              },
              {
                id: "EY_A_2_2",
                label: "2",
                before: "Your little brother must",
                displayHint: "T _ _ _",
                after: "his medicine at five."
              },
              {
                id: "EY_A_2_3",
                label: "3",
                before: "",
                displayHint: "R _ _ _ _ _ E",
                after: "for your French test! Your marks weren't good last time."
              },
              {
                id: "EY_A_2_4",
                label: "4",
                before: "If you can,",
                displayHint: "D _ _ _ _ _ _ _ D",
                after: "the songs that Dad likes to his phone."
              },
              {
                id: "EY_A_2_5",
                label: "5",
                before: "And please",
                displayHint: "C _ _ _ _ E",
                after: "my tablet. The battery is dead. Love, Mum"
              }
            ],
            answers: {
              "EY_A_2_1": { expected: ["warm", "Warm"], explanation: "Warm it up in the microwave." },
              "EY_A_2_2": { expected: ["take", "Take"], explanation: "take medicine." },
              "EY_A_2_3": { expected: ["revise", "Revise"], explanation: "Revise for your test." },
              "EY_A_2_4": { expected: ["download", "Download"], explanation: "download the songs." },
              "EY_A_2_5": { expected: ["charge", "Charge"], explanation: "charge my tablet." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["director", "disappointed", "fall", "forgive", "novel", "romance"],
            example: "Carol: Oh, you're reading The Last Queen. Is it a good ⁰novel?",
            usedInExample: ["novel"],
            dialogue: [
              { speaker: "Carol", text: "Oh, you're reading The Last Queen. Is it a good ⁰novel?" },
              {
                speaker: "Jo",
                parts: [
                  { before: "It's OK, but it isn't great. I'm", gapId: "EY_A_3_1", label: "1", after: ", I thought it was a historical novel, but it isn't." }
                ]
              },
              { speaker: "Carol", text: "What is it, then?" },
              {
                speaker: "Jo",
                parts: [
                  { before: "It's a", gapId: "EY_A_3_2", label: "2", after: ", a love story." }
                ]
              },
              {
                speaker: "Carol",
                parts: [
                  { before: "Oh. I suppose two people", gapId: "EY_A_3_3", label: "3", after: "in love. Right?" }
                ]
              },
              {
                speaker: "Jo",
                parts: [
                  { before: "Yes. A beautiful young actor meets a film", gapId: "EY_A_3_4", label: "4", after: ", but they argue all the time. Then she does something bad, and he can't" },
                  { before: "", gapId: "EY_A_3_5", label: "5", after: "her. It's a sad story." }
                ]
              }
            ],
            answers: {
              "EY_A_3_1": { expected: ["disappointed"], explanation: "feeling let down: disappointed." },
              "EY_A_3_2": { expected: ["romance"], explanation: "a romance, a love story." },
              "EY_A_3_3": { expected: ["fall"], explanation: "fall in love." },
              "EY_A_3_4": { expected: ["director"], explanation: "film director." },
              "EY_A_3_5": { expected: ["forgive"], explanation: "can't forgive her." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            context: "Letter from Paul in Italy to Alec",
            example: "We ⁰(travelled) / were travelling here by plane last week.",
            items: [
              { id: "EY_A_4_1", label: "1", before: "We", options: ["didn't come", "weren't coming"], after: "by car because it's a long journey." },
              { id: "EY_A_4_2", label: "2", before: "And guess what! While we", options: ["waited", "were waiting"], after: "for a taxi at the airport, we saw Jason Bird, the actor!" },
              { id: "EY_A_4_3", label: "3", before: "We", options: ["'re", "'ve been"], after: "here for four days." },
              { id: "EY_A_4_4", label: "4", before: "Aunt Gabriella", options: ["hasn't taken", "didn't take"], after: "us to Milan yet." },
              { id: "EY_A_4_5", label: "5", before: "She", options: ["takes", "'s going to take"], after: "us there tomorrow. Mum wants to go shopping, but Dad and I want to go sightseeing." }
            ],
            answers: {
              "EY_A_4_1": { expected: ["didn't come"], explanation: "Past Simple completed past event: didn't come." },
              "EY_A_4_2": { expected: ["were waiting"], explanation: "Past Continuous ongoing action after While: were waiting." },
              "EY_A_4_3": { expected: ["'ve been", "have been"], explanation: "Present Perfect with for four days: 've been." },
              "EY_A_4_4": { expected: ["hasn't taken", "has not taken"], explanation: "Present Perfect with yet: hasn't taken." },
              "EY_A_4_5": { expected: ["'s going to take", "is going to take"], explanation: "Future plan for tomorrow: 's going to take." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Choose the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Why (b do I have) to be home early tonight?",
            items: [
              { id: "EY_A_5_1", label: "1", before: "When I was eleven, I", options: ["can", "have to", "could"], after: "speak three languages." },
              { id: "EY_A_5_2", label: "2", before: "I'm sure he", options: ["will", "going to", "is"], after: "do his best in the match." },
              { id: "EY_A_5_3", label: "3", before: "If I", options: ["don't win", "won't win", "'m not winning"], after: "the competition, I'll be unhappy." },
              { id: "EY_A_5_4", label: "4", before: "We have decided", options: ["learn", "to learn", "learning"], after: "Spanish next term." },
              { id: "EY_A_5_5", label: "5", before: "Did you visit the village", options: ["who", "which", "where"], after: "your granny was born?" }
            ],
            answers: {
              "EY_A_5_1": { expected: ["could"], explanation: "Past ability: could speak three languages." },
              "EY_A_5_2": { expected: ["will"], explanation: "Prediction after 'I'm sure': will do his best." },
              "EY_A_5_3": { expected: ["don't win", "do not win"], explanation: "First Conditional if-clause present simple: don't win." },
              "EY_A_5_4": { expected: ["to learn"], explanation: "Verb + infinitive: decided to learn." },
              "EY_A_5_5": { expected: ["where"], explanation: "Relative pronoun for places: where your granny was born." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the sentences with the correct passive forms.",
            points: 5,
            type: "grammar-gap",
            example: "0 The bowl is made (make) of Italian glass.",
            items: [
              { id: "EY_A_6_1", label: "1", before: "This picture", verb: "paint", options: ["was painted", "is painted", "painted"], after: "by Picasso in 1907." },
              { id: "EY_A_6_2", label: "2", before: "", verb: "cocoa / grow", options: ["Is cocoa grown", "Was cocoa grown", "Does cocoa grow"], after: "in this country?" },
              { id: "EY_A_6_3", label: "3", before: "I", verb: "not allow", options: ["am not allowed", "was not allowed", "don't allow"], after: "to stay out late. I must come home early." },
              { id: "EY_A_6_4", label: "4", before: "The buildings", verb: "damage", options: ["were damaged", "are damaged", "damaged"], after: "in the fire two years ago." },
              { id: "EY_A_6_5", label: "5", before: "Anna", verb: "not invite", options: ["was not invited", "is not invited", "didn't invite"], after: "to the party last month." }
            ],
            answers: {
              "EY_A_6_1": { expected: ["was painted"], explanation: "Past Simple passive: was painted." },
              "EY_A_6_2": { expected: ["is cocoa grown", "Is cocoa grown"], explanation: "Present Simple passive question: Is cocoa grown...?" },
              "EY_A_6_3": { expected: ["am not allowed", "'m not allowed", "am not allow"], explanation: "Present Simple passive negative: am not allowed." },
              "EY_A_6_4": { expected: ["were damaged"], explanation: "Past Simple passive plural: were damaged." },
              "EY_A_6_5": { expected: ["was not invited", "wasn't invited"], explanation: "Past Simple passive negative: was not invited." }
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
            title: "Listen to a radio interview with Andy. Circle T (true) or F (false).",
            points: 6,
            type: "circle-choice",
            audioTrack: "assets/audio/track_11_end_of_year.mp3",
            audioTitle: "Audio 11 • End-of-Year Test (Units 1–8) • Exercise 7",
            audioDesc: "Listen to a radio interview with Andy talking about his musical family and his dad's violin.",
            example: "0 Andy and his dad play the violin. -> T",
            items: [
              { id: "EY_A_7_1", label: "1", before: "Andy thinks his dad has to practise more.", options: ["T", "F"], after: "" },
              { id: "EY_A_7_2", label: "2", before: "Andy's dad was very angry when someone stole his violin.", options: ["T", "F"], after: "" },
              { id: "EY_A_7_3", label: "3", before: "The violin that was stolen cost £17,500.", options: ["T", "F"], after: "" },
              { id: "EY_A_7_4", label: "4", before: "The thief damaged the violin.", options: ["T", "F"], after: "" },
              { id: "EY_A_7_5", label: "5", before: "Andy's mum has a silver flute.", options: ["T", "F"], after: "" },
              { id: "EY_A_7_6", label: "6", before: "Andy's mum has never recorded an album.", options: ["T", "F"], after: "" }
            ],
            answers: {
              "EY_A_7_1": { expected: ["F"], explanation: "False: Dad tells Andy to practise more, not the other way around." },
              "EY_A_7_2": { expected: ["T"], explanation: "True: 'Dad was furious.'" },
              "EY_A_7_3": { expected: ["F"], explanation: "False: It cost £175,000, not £17,500." },
              "EY_A_7_4": { expected: ["F"], explanation: "False: 'Luckily, the violin wasn't damaged.'" },
              "EY_A_7_5": { expected: ["T"], explanation: "True: 'because it's made of silver.'" },
              "EY_A_7_6": { expected: ["F"], explanation: "False: 'She's just recorded another album.'" }
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
            title: "Read the article and answer the questions.",
            points: 6,
            type: "reading-qa",
            passageTitle: "Jane Austen: England's Beloved Novelist",
            passage: `Jane Austen is one of the most famous novelists in the English language. She was born in Hampshire, England, in 1775. She spent her early life in the village where she was born. At that time, most women got married, had children and stayed at home. Austen was different. She didn't get married – she wrote novels. But 200 years ago, women didn't write books. When Sense and Sensibility was printed in 1811, Austen's name wasn't on it. The cover of the book said: 'Sense and Sensibility, A Novel By a Lady'. In fact, her name wasn't printed on any of her other six books.

Austen also wrote about 3,000 letters. In them, she talked about her daily life and the people that she met. Unfortunately, the letters were burned by her sister when Austen died. As a result, we don't know a lot about her personal life. Austen became ill in 1816 and died in 1817 at the age of 41.

Today people all over the world love her books. 318,000 copies of Pride and Prejudice were sold in 2007. This is a little strange. People don't have exciting adventures in her books. They don't find magic rings and they don't commit crimes. Her stories are about relationships. So why are her books so popular? The answer is simple. Her characters are fantastic. Some are funny; others are silly; all of them are interesting. Her women heroines are intelligent, and the stories end happily. If you get the chance, read one of her books. You will love it!`,
            example: "0 When was Jane Austen born? — She was born in 1775.",
            items: [
              { id: "EY_A_9_1", label: "1", question: "Where did she live when she was young?", placeholder: "place..." },
              { id: "EY_A_9_2", label: "2", question: "Did she get married?", placeholder: "Yes/No..." },
              { id: "EY_A_9_3", label: "3", question: "When was Sense and Sensibility printed?", placeholder: "year..." },
              { id: "EY_A_9_4", label: "4", question: "Who burned Austen's letters?", placeholder: "person..." },
              { id: "EY_A_9_5", label: "5", question: "How many copies of Pride and Prejudice did people buy in 2007?", placeholder: "number..." },
              { id: "EY_A_9_6", label: "6", question: "Why do people like her books?", placeholder: "reason..." }
            ],
            answers: {
              "EY_A_9_1": { expected: ["in hampshire", "hampshire", "in the village where she was born", "in a village in hampshire"], explanation: "In Hampshire / in the village where she was born." },
              "EY_A_9_2": { expected: ["no", "no she didn't", "she didn't", "no, she didn't"], explanation: "No, she didn't get married." },
              "EY_A_9_3": { expected: ["1811", "in 1811"], explanation: "Printed in 1811." },
              "EY_A_9_4": { expected: ["her sister", "sister", "austen's sister"], explanation: "Her sister burned them." },
              "EY_A_9_5": { expected: ["318,000", "318000", "318 000"], explanation: "318,000 copies." },
              "EY_A_9_6": { expected: ["her characters are fantastic", "characters are fantastic", "fantastic characters", "interesting", "intelligent", "fantastic"], explanation: "Her characters are fantastic / intelligent heroines." }
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
            title: "Match 1–8 to answers a–i.",
            points: 8,
            type: "matching-dialogue",
            optionsList: [
              { key: "a", text: "First, you click on this icon. Then you..." },
              { key: "b", text: "How embarrassing!" },
              { key: "c", text: "I can't. Tell me about it." },
              { key: "d", text: "I'm not sure. It sounds boring." },
              { key: "e", text: "We're going to London. I can't wait to see the sights." },
              { key: "f", text: "Don't worry. It wasn't your fault." },
              { key: "g", text: "Lucky you!" },
              { key: "h", text: "Why don't you put on a suit?" },
              { key: "i", text: "Yes, of course. It's b.andy@mail.com" }
            ],
            example: "0 A: How do I download this song? -> B: a",
            items: [
              { id: "EY_A_8_1", label: "1", prompt: "A: I'm so happy! My parents are going to let me have a pet dog." },
              { id: "EY_A_8_2", label: "2", prompt: "A: Can you repeat your email address, please?" },
              { id: "EY_A_8_3", label: "3", prompt: "A: Have you got any plans for the weekend?" },
              { id: "EY_A_8_4", label: "4", prompt: "A: Can I ask your advice? What should I wear?" },
              { id: "EY_A_8_5", label: "5", prompt: "A: There's a folk music festival this weekend. We really should go." },
              { id: "EY_A_8_6", label: "6", prompt: "A: Guess what happened yesterday!" },
              { id: "EY_A_8_7", label: "7", prompt: "A: I didn't have enough money to pay for my drink at the café." },
              { id: "EY_A_8_8", label: "8", prompt: "A: I'm sorry, I didn't mean to break that." }
            ],
            answers: {
              "EY_A_8_1": { expected: ["g", "Lucky you!"], explanation: "Reaction: Lucky you!" },
              "EY_A_8_2": { expected: ["i", "Yes, of course. It's b.andy@mail.com"], explanation: "Yes, of course. It's b.andy@mail.com" },
              "EY_A_8_3": { expected: ["e", "We're going to London. I can't wait to see the sights."], explanation: "We're going to London. I can't wait to see the sights." },
              "EY_A_8_4": { expected: ["h", "Why don't you put on a suit?"], explanation: "Why don't you put on a suit?" },
              "EY_A_8_5": { expected: ["d", "I'm not sure. It sounds boring."], explanation: "I'm not sure. It sounds boring." },
              "EY_A_8_6": { expected: ["c", "I can't. Tell me about it."], explanation: "I can't. Tell me about it." },
              "EY_A_8_7": { expected: ["b", "How embarrassing!"], explanation: "How embarrassing!" },
              "EY_A_8_8": { expected: ["f", "Don't worry. It wasn't your fault."], explanation: "Don't worry. It wasn't your fault." }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "End-of-Year Test B — Units 1–8",
    totalPoints: 50,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Circle the one out.",
            points: 5,
            type: "circle-choice",
            example: "0 belt / bracelet / tights / (striped)",
            items: [
              { id: "EY_B_1_1", label: "1", before: "", options: ["architect", "witness", "secretary", "dentist"], after: "" },
              { id: "EY_B_1_2", label: "2", before: "", options: ["organised", "patient", "selfish", "generous"], after: "" },
              { id: "EY_B_1_3", label: "3", before: "", options: ["ice skates", "swimming pool", "skis", "goggles"], after: "" },
              { id: "EY_B_1_4", label: "4", before: "", options: ["earthquake", "thunderstorm", "drought", "eagle"], after: "" },
              { id: "EY_B_1_5", label: "5", before: "", options: ["cardigan", "checked", "smart", "plain"], after: "" }
            ],
            answers: {
              "EY_B_1_1": { expected: ["witness"], explanation: "witness is not a profession." },
              "EY_B_1_2": { expected: ["selfish"], explanation: "selfish is negative, others positive." },
              "EY_B_1_3": { expected: ["swimming pool"], explanation: "swimming pool is a venue, others equipment." },
              "EY_B_1_4": { expected: ["eagle"], explanation: "eagle is an animal/bird, others are disasters." },
              "EY_B_1_5": { expected: ["cardigan"], explanation: "cardigan is a noun, others are adjectives." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Complete the note.",
            points: 5,
            type: "letter-hint",
            context: "Note from Mum",
            example: "⁰Do the dishes when you come home. I didn't have time to wash them this morning.",
            items: [
              {
                id: "EY_B_2_1",
                label: "1",
                before: "Help your sister with her homework. Don't",
                displayHint: "S _ _ _ T",
                after: "at her when she makes mistakes."
              },
              {
                id: "EY_B_2_2",
                label: "2",
                before: "Finish your Geography project. You must",
                displayHint: "H _ _ _",
                after: "it in tomorrow."
              },
              {
                id: "EY_B_2_3",
                label: "3",
                before: "",
                displayHint: "C _ _ _ _ E",
                after: "my mobile phone, please. The battery is dead."
              },
              {
                id: "EY_B_2_4",
                label: "4",
                before: "",
                displayHint: "T _ _ E",
                after: "your medicine at five o'clock. It's important."
              },
              {
                id: "EY_B_2_5",
                label: "5",
                before: "Oh, and",
                displayHint: "D _ _ _ _ _ _ D",
                after: "a film so we can see it tonight! Love, Mum"
              }
            ],
            answers: {
              "EY_B_2_1": { expected: ["shout", "Shout"], explanation: "Don't shout at her." },
              "EY_B_2_2": { expected: ["hand", "Hand"], explanation: "hand it in tomorrow." },
              "EY_B_2_3": { expected: ["charge", "Charge"], explanation: "Charge my mobile phone." },
              "EY_B_2_4": { expected: ["take", "Take"], explanation: "Take your medicine." },
              "EY_B_2_5": { expected: ["download", "Download"], explanation: "download a film." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the dialogue with the words in the box.",
            points: 5,
            type: "dialogue-box",
            wordBank: ["fall", "forgive", "horror", "jealous", "novel", "romance"],
            example: "Megan: Oh, you're reading The Witch Queen. Is it a good ⁰novel?",
            usedInExample: ["novel"],
            dialogue: [
              { speaker: "Megan", text: "Oh, you're reading The Witch Queen. Is it a good ⁰novel?" },
              {
                speaker: "Della",
                parts: [
                  { before: "It's OK. When I borrowed the book, I thought it was a scary", gapId: "EY_B_3_1", label: "1", after: "story, but it isn't. It's a" },
                  { before: "", gapId: "EY_B_3_2", label: "2", after: ", a love story." }
                ]
              },
              { speaker: "Megan", text: "What's it about?" },
              {
                speaker: "Della",
                parts: [
                  { before: "A king and a poor woman", gapId: "EY_B_3_3", label: "3", after: "in love. He wants to marry her, but she doesn't want to be a queen. The king is angry and he can't" },
                  { before: "", gapId: "EY_B_3_4", label: "4", after: "her." }
                ]
              },
              { speaker: "Megan", text: "Then what?" },
              {
                speaker: "Della",
                parts: [
                  { before: "She meets someone else and the king is", gapId: "EY_B_3_5", label: "5", after: ". It's a sad story." }
                ]
              }
            ],
            answers: {
              "EY_B_3_1": { expected: ["horror"], explanation: "scary horror story." },
              "EY_B_3_2": { expected: ["romance"], explanation: "romance, a love story." },
              "EY_B_3_3": { expected: ["fall"], explanation: "fall in love." },
              "EY_B_3_4": { expected: ["forgive"], explanation: "can't forgive her." },
              "EY_B_3_5": { expected: ["jealous"], explanation: "the king is jealous." }
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
            title: "Circle the correct answer.",
            points: 5,
            type: "circle-choice",
            context: "Letter from Marie-Claire in France to Nigel",
            example: "We ⁰(travelled) / were travelling here by plane last week.",
            items: [
              { id: "EY_B_4_1", label: "1", before: "We", options: ["didn't take", "weren't taking"], after: "the train because it's a long journey." },
              { id: "EY_B_4_2", label: "2", before: "And guess what! While I", options: ["sat", "was sitting"], after: "in a café last night, I saw Arianna Sanchez, the singer!" },
              { id: "EY_B_4_3", label: "3", before: "We", options: ["'re", "'ve been"], after: "here for four days." },
              { id: "EY_B_4_4", label: "4", before: "Uncle Gerard", options: ["has already taken", "already took"], after: "us to the Eiffel Tower." },
              { id: "EY_B_4_5", label: "5", before: "Tomorrow we", options: ["visit", "'re going to visit"], after: "Versailles. Write and tell me your news." }
            ],
            answers: {
              "EY_B_4_1": { expected: ["didn't take"], explanation: "Past Simple completed action: didn't take." },
              "EY_B_4_2": { expected: ["was sitting"], explanation: "Past Continuous ongoing action after While: was sitting." },
              "EY_B_4_3": { expected: ["'ve been", "have been"], explanation: "Present Perfect with for four days: 've been." },
              "EY_B_4_4": { expected: ["has already taken", "already took"], explanation: "Present Perfect with already: has already taken." },
              "EY_B_4_5": { expected: ["'re going to visit", "are going to visit"], explanation: "Future plan for tomorrow: 're going to visit." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Choose the correct answer.",
            points: 5,
            type: "circle-choice",
            example: "0 Why (b do I have) to be home early tonight?",
            items: [
              { id: "EY_B_5_1", label: "1", before: "If you", options: ["won't apply", "don't apply", "aren't applying"], after: "for the job, you'll be sorry." },
              { id: "EY_B_5_2", label: "2", before: "What's the name of the thing", options: ["that", "who", "where"], after: "you use to open cans?" },
              { id: "EY_B_5_3", label: "3", before: "When Dad was young, he", options: ["must", "can", "had to"], after: "help on the farm." },
              { id: "EY_B_5_4", label: "4", before: "He's looking forward", options: ["learn", "to learn", "to learning"], after: "another foreign language." },
              { id: "EY_B_5_5", label: "5", before: "I think they", options: ["are", "will", "going to"], after: "pass all their exams. They study hard." }
            ],
            answers: {
              "EY_B_5_1": { expected: ["don't apply", "do not apply"], explanation: "First Conditional present simple: don't apply." },
              "EY_B_5_2": { expected: ["that"], explanation: "Relative pronoun for objects: that." },
              "EY_B_5_3": { expected: ["had to"], explanation: "Past obligation: had to help." },
              "EY_B_5_4": { expected: ["to learning"], explanation: "look forward to + -ing: to learning." },
              "EY_B_5_5": { expected: ["will"], explanation: "Prediction: will pass." }
            }
          },
          {
            id: "task_6",
            number: 6,
            title: "Complete the sentences with the correct passive forms.",
            points: 5,
            type: "grammar-gap",
            example: "0 The bowl is made (make) of Italian glass.",
            items: [
              { id: "EY_B_6_1", label: "1", before: "These songs", verb: "compose", options: ["were composed", "are composed", "composed"], after: "by Mozart in 1770." },
              { id: "EY_B_6_2", label: "2", before: "How many", verb: "cars / produce", options: ["cars are produced", "cars were produced", "cars produce"], after: "in this factory in a day?" },
              { id: "EY_B_6_3", label: "3", before: "We", verb: "not allow", options: ["are not allowed", "were not allowed", "don't allow"], after: "to eat in the classroom." },
              { id: "EY_B_6_4", label: "4", before: "The treasure", verb: "discover", options: ["was discovered", "is discovered", "discovered"], after: "in Egypt more than a hundred years ago." },
              { id: "EY_B_6_5", label: "5", before: "The animals", verb: "not feed", options: ["were not fed", "are not fed", "didn't feed"], after: "yesterday, so they were hungry." }
            ],
            answers: {
              "EY_B_6_1": { expected: ["were composed"], explanation: "Past Simple passive plural: were composed." },
              "EY_B_6_2": { expected: ["cars are produced", "cars produced"], explanation: "Present Simple passive plural question: cars are produced." },
              "EY_B_6_3": { expected: ["are not allowed", "aren't allowed"], explanation: "Present Simple passive negative: are not allowed." },
              "EY_B_6_4": { expected: ["was discovered"], explanation: "Past Simple passive: was discovered." },
              "EY_B_6_5": { expected: ["were not fed", "weren't fed"], explanation: "Past Simple passive negative plural: were not fed." }
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
            title: "Listen to a radio interview with Andy. Circle T (true) or F (false).",
            points: 6,
            type: "circle-choice",
            audioTrack: "assets/audio/track_11_end_of_year.mp3",
            audioTitle: "Audio 11 • End-of-Year Test (Units 1–8) • Exercise 7",
            audioDesc: "Listen to a radio interview with Andy talking about his musical family and his dad's violin.",
            example: "0 Andy and his dad play the violin. -> T",
            items: [
              { id: "EY_B_7_1", label: "1", before: "Andy's dad thinks Andy has become a good violin player.", options: ["T", "F"], after: "" },
              { id: "EY_B_7_2", label: "2", before: "Andy's dad's violin was stolen last year.", options: ["T", "F"], after: "" },
              { id: "EY_B_7_3", label: "3", before: "Andy's dad paid £175,000 for the violin.", options: ["T", "F"], after: "" },
              { id: "EY_B_7_4", label: "4", before: "The thief didn't damage the violin.", options: ["T", "F"], after: "" },
              { id: "EY_B_7_5", label: "5", before: "Andy's mum's flute is made of wood.", options: ["T", "F"], after: "" },
              { id: "EY_B_7_6", label: "6", before: "Andy would like to compose music.", options: ["T", "F"], after: "" }
            ],
            answers: {
              "EY_B_7_1": { expected: ["F"], explanation: "False: Dad says Andy will be good one day if he practises more." },
              "EY_B_7_2": { expected: ["T"], explanation: "True: The violin was stolen last year." },
              "EY_B_7_3": { expected: ["T"], explanation: "True: It cost £175,000." },
              "EY_B_7_4": { expected: ["T"], explanation: "True: The violin wasn't damaged." },
              "EY_B_7_5": { expected: ["F"], explanation: "False: It is made of silver." },
              "EY_B_7_6": { expected: ["T"], explanation: "True: Andy wants to compose music too." }
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
            title: "Read the article and answer the questions.",
            points: 6,
            type: "reading-qa",
            passageTitle: "Jane Austen: England's Beloved Novelist",
            passage: `Jane Austen is one of the most famous novelists in the English language. She was born in Hampshire, England, in 1775. She spent her early life in the village where she was born. At that time, most women got married, had children and stayed at home. Austen was different. She didn't get married – she wrote novels. But 200 years ago, women didn't write books. When Sense and Sensibility was printed in 1811, Austen's name wasn't on it. The cover of the book said: 'Sense and Sensibility, A Novel By a Lady'. In fact, her name wasn't printed on any of her other six books.

Austen also wrote about 3,000 letters. In them, she talked about her daily life and the people that she met. Unfortunately, the letters were burned by her sister when Austen died. As a result, we don't know a lot about her personal life. Austen became ill in 1816 and died in 1817 at the age of 41.

Today people all over the world love her books. 318,000 copies of Pride and Prejudice were sold in 2007. This is a little strange. People don't have exciting adventures in her books. They don't find magic rings and they don't commit crimes. Her stories are about relationships. So why are her books so popular? The answer is simple. Her characters are fantastic. Some are funny; others are silly; all of them are interesting. Her women heroines are intelligent, and the stories end happily. If you get the chance, read one of her books. You will love it!`,
            example: "0 When was Jane Austen born? — She was born in 1775.",
            items: [
              { id: "EY_B_9_1", label: "1", question: "Where did Austen grow up?", placeholder: "place..." },
              { id: "EY_B_9_2", label: "2", question: "Did she get married?", placeholder: "Yes/No..." },
              { id: "EY_B_9_3", label: "3", question: "When was Sense and Sensibility printed?", placeholder: "year..." },
              { id: "EY_B_9_4", label: "4", question: "Why don't we know a lot about Austen's personal life?", placeholder: "reason..." },
              { id: "EY_B_9_5", label: "5", question: "How old was Austen when she died?", placeholder: "age..." },
              { id: "EY_B_9_6", label: "6", question: "What kind of people are her woman characters?", placeholder: "adjectives/description..." }
            ],
            answers: {
              "EY_B_9_1": { expected: ["in hampshire", "hampshire", "in the village where she was born", "in a village in hampshire"], explanation: "In Hampshire / village where she was born." },
              "EY_B_9_2": { expected: ["no", "no she didn't", "she didn't", "no, she didn't"], explanation: "No, she didn't." },
              "EY_B_9_3": { expected: ["1811", "in 1811"], explanation: "In 1811." },
              "EY_B_9_4": { expected: ["her letters were burned", "her sister burned her letters", "letters were burned", "sister burned her letters", "letters were burned by her sister"], explanation: "Her letters were burned by her sister." },
              "EY_B_9_5": { expected: ["41", "41 years old", "she was 41"], explanation: "She died at 41." },
              "EY_B_9_6": { expected: ["intelligent", "fantastic", "interesting", "intelligent heroines", "fantastic and intelligent"], explanation: "They are intelligent / fantastic." }
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
            title: "Match 1–8 to answers a–i.",
            points: 8,
            type: "matching-dialogue",
            optionsList: [
              { key: "a", text: "First, you click on this icon. Then you..." },
              { key: "b", text: "Don't worry. It wasn't your fault." },
              { key: "c", text: "I can't. Tell me about it." },
              { key: "d", text: "I'm not sure. It sounds boring." },
              { key: "e", text: "We're going to London. I can't wait to see the sights." },
              { key: "f", text: "How embarrassing!" },
              { key: "g", text: "Lucky you!" },
              { key: "h", text: "Why don't you put on a suit?" },
              { key: "i", text: "Yes, of course. It's 0756..." }
            ],
            example: "0 A: How do I download this song? -> B: a",
            items: [
              { id: "EY_B_8_1", label: "1", prompt: "A: I didn't have enough money to pay for my drink at the café." },
              { id: "EY_B_8_2", label: "2", prompt: "A: We're having a beach clean-up this weekend. You really should come." },
              { id: "EY_B_8_3", label: "3", prompt: "A: I need your advice. What should I wear?" },
              { id: "EY_B_8_4", label: "4", prompt: "A: What are you up to over the holidays?" },
              { id: "EY_B_8_5", label: "5", prompt: "A: Oh dear, I'm really sorry." },
              { id: "EY_B_8_6", label: "6", prompt: "A: Mum and Dad gave me a new smartphone for my birthday." },
              { id: "EY_B_8_7", label: "7", prompt: "A: Sorry, can you say your telephone number again?" },
              { id: "EY_B_8_8", label: "8", prompt: "A: Guess what happened on Saturday!" }
            ],
            answers: {
              "EY_B_8_1": { expected: ["f", "How embarrassing!"], explanation: "How embarrassing!" },
              "EY_B_8_2": { expected: ["d", "I'm not sure. It sounds boring."], explanation: "I'm not sure. It sounds boring." },
              "EY_B_8_3": { expected: ["h", "Why don't you put on a suit?"], explanation: "Why don't you put on a suit?" },
              "EY_B_8_4": { expected: ["e", "We're going to London. I can't wait to see the sights."], explanation: "We're going to London. I can't wait to see the sights." },
              "EY_B_8_5": { expected: ["b", "Don't worry. It wasn't your fault."], explanation: "Don't worry. It wasn't your fault." },
              "EY_B_8_6": { expected: ["g", "Lucky you!"], explanation: "Lucky you!" },
              "EY_B_8_7": { expected: ["i", "Yes, of course. It's 0756..."], explanation: "Yes, of course. It's 0756..." },
              "EY_B_8_8": { expected: ["c", "I can't. Tell me about it."], explanation: "I can't. Tell me about it." }
            }
          }
        ]
      }
    }
  }
};
