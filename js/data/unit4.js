/**
 * Language Test Unit 4 - Books and Films
 * Pearson Education Limited 2019 Photocopiable Test Sheets
 */

window.UNIT_4_DATA = {
  id: "unit4",
  number: 4,
  title: "Books and Films",
  description: "Vocabulary: Book & Film genres, Life stages, Film crew. Grammar: For and Since, Present Perfect vs Past Simple. Communication: Apologising and accepting apologies.",

  variantA: {
    id: "variantA",
    title: "Language Test A — Unit 4",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Read the extracts from film and book reviews. Write what kind of film or book they are about.",
            points: 5,
            type: "letter-hint",
            example: "0 The heroes arrive at the island before the pirates, find the treasure, and hide it in a cave. adventure film",
            items: [
              { id: "A_1_1", label: "1", textBefore: "You won't see any aliens, but life on this planet is very strange.", displayHint: "s _ _ _ _ _ e  f _ _ _ _ _ n", placeholder: "science fiction", prefix: "s", textAfter: "film" },
              { id: "A_1_2", label: "2", textBefore: "Girl and boy meet and the ending is happy. The songs and dance music are fantastic.", displayHint: "m _ _ _ _ _ l", placeholder: "musical", prefix: "m", textAfter: "" },
              { id: "A_1_3", label: "3", textBefore: "The hero is the witch, People think she's terrible, but the monsters are much more terrible.", displayHint: "f _ _ _ _ _ y", placeholder: "fantasy", prefix: "f", textAfter: "" },
              { id: "A_1_4", label: "4", textBefore: "He writes about his early life in India, his school days in England and his experiences as an explorer in Africa.", displayHint: "a _ _ _ _ _ _ _ _ _ _ y", placeholder: "autobiography", prefix: "a", textAfter: "" },
              { id: "A_1_5", label: "5", textBefore: "The recipes are perfect for young people who want to make cheap, healthy meals.", displayHint: "c _ _ _ _ _ _ k", placeholder: "cookbook", prefix: "c", textAfter: "" }
            ],
            answers: {
              "A_1_1": { expected: ["science fiction", "science fiction film"], explanation: "Genre dealing with imaginative science, futuristic technology or life on other planets: 'science fiction'." },
              "A_1_2": { expected: ["musical"], explanation: "A film or play where songs and dancing tell the story is a 'musical'." },
              "A_1_3": { expected: ["fantasy"], explanation: "A genre featuring magic, mythological creatures and witches is 'fantasy'." },
              "A_1_4": { expected: ["autobiography"], explanation: "An account of a person's life written by that person is an 'autobiography'." },
              "A_1_5": { expected: ["cookbook", "cook book"], explanation: "A book containing recipes for cooking meals is a 'cookbook'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 6,
            type: "circle-choice",
            example: "Reggie Holmes was ⁰born / retired in 1945.",
            items: [
              { id: "A_2_1", label: "1", before: "He", options: ["made", "grew"], after: "up in London." },
              { id: "A_2_2", label: "2", before: "After he finished school, he", options: ["got", "gave"], after: "a job in a baker's." },
              { id: "A_2_3", label: "3", before: "One day, a young woman called Mary came into the shop and Reggie", options: ["felt", "fell"], after: "in love with her." },
              { id: "A_2_4", label: "4", before: "They", options: ["got", "had"], after: "married and lived together happily for many years." },
              { id: "A_2_5", label: "5", before: "They", options: ["did", "had"], after: "two children." },
              { id: "A_2_6", label: "6", before: "Reggie finally", options: ["graduated", "retired"], after: "in 2015." }
            ],
            answers: {
              "A_2_1": { expected: ["grew"], explanation: "Life stage collocation: 'grow up' (past 'grew up')." },
              "A_2_2": { expected: ["got"], explanation: "Collocation: 'get a job' (past 'got a job')." },
              "A_2_3": { expected: ["fell"], explanation: "Idiom: 'fall in love' (past 'fell in love')." },
              "A_2_4": { expected: ["got"], explanation: "Collocation: 'get married' (past 'got married')." },
              "A_2_5": { expected: ["had"], explanation: "Collocation: 'have children' (past 'had two children')." },
              "A_2_6": { expected: ["retired"], explanation: "To stop working at old age: 'retired in 2015'." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["actors", "costume", "director", "extras", "make-up"],
            example: "0 The actors learned their words and prepared for each scene carefully.",
            usedInExample: ["actors"],
            sentences: [
              { textBefore: "1 The", gapId: "A_3_1", label: "1", textAfter: "artists changed people's appearance; in some scenes they looked young and in other scenes they looked old." },
              { textBefore: "2 Many", gapId: "A_3_2", label: "2", textAfter: "in the film were children from the local school. Some of them dream about playing a big part in a film one day." },
              { textBefore: "3 The", gapId: "A_3_3", label: "3", textAfter: "designer worked hard to design the clothes for this film." },
              { textBefore: "4 The film", gapId: "A_3_4", label: "4", textAfter: "told the actors what to do." }
            ],
            answers: {
              "A_3_1": { expected: ["make-up", "makeup"], explanation: "Cosmetics used to alter appearance: 'make-up artists'." },
              "A_3_2": { expected: ["extras"], explanation: "Actors with non-speaking background roles in films: 'extras'." },
              "A_3_3": { expected: ["costume"], explanation: "The person who designs theatrical clothes: 'costume designer'." },
              "A_3_4": { expected: ["director"], explanation: "The person who supervises the film actors and crew: 'film director'." }
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
            points: 6,
            type: "circle-choice",
            example: "0 I have been a doctor for / since ten years.",
            items: [
              { id: "A_4_1", label: "1", before: "She hasn't seen a good film", options: ["for", "since"], after: "last December." },
              { id: "A_4_2", label: "2", before: "We have known them", options: ["for", "since"], after: "a long time." },
              { id: "A_4_3", label: "3", before: "He has worked there", options: ["for", "since"], after: "he was twenty years old." },
              { id: "A_4_4", label: "4", before: "They haven't played tennis", options: ["for", "since"], after: "ages." },
              { id: "A_4_5", label: "5", before: "We have lived here", options: ["for", "since"], after: "2016." },
              { id: "A_4_6", label: "6", before: "He hasn't read a book", options: ["for", "since"], after: "January." }
            ],
            answers: {
              "A_4_1": { expected: ["since"], explanation: "'Since' is used with a starting point in time (last December)." },
              "A_4_2": { expected: ["for"], explanation: "'For' is used with a duration of time (a long time)." },
              "A_4_3": { expected: ["since"], explanation: "'Since' introduces a past starting clause (since he was twenty)." },
              "A_4_4": { expected: ["for"], explanation: "'For' is used with time periods like 'for ages'." },
              "A_4_5": { expected: ["since"], explanation: "'Since' marks a specific year: 'since 2016'." },
              "A_4_6": { expected: ["since"], explanation: "'Since' marks a specific month: 'since January'." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogues with the correct form of the Present Perfect or the Past Simple.",
            points: 9,
            type: "grammar-gap",
            example: "0 A: Is Oliver at home? B: Yes, he is. He's just arrived (just / arrive).",
            items: [
              { id: "A_5_1", label: "1", before: "A: How long", verb: "you / have", after: "your laptop? B: For six months." },
              { id: "A_5_2", label: "2", before: "A:", verb: "Debbie / ever / visit", after: "the USA? B: Yes." },
              { id: "A_5_3", label: "3", before: "A: When", verb: "she / go", after: "to China? B: Last year." },
              { id: "A_5_4", label: "4", before: "A: We", verb: "never / do", after: "a bungee jump in our lives." },
              { id: "A_5_5", label: "5", before: "B: I", verb: "do", after: "one three years ago." },
              { id: "A_5_6", label: "6", before: "A:", verb: "they / send", after: "the emails yet? B: No, not yet." },
              { id: "A_5_7", label: "7", before: "A: Lee", verb: "write", after: "his first novel when he was twenty years old. B: Oh! I didn't know that." },
              { id: "A_5_8", label: "8", before: "A: You must read this book. It's fantastic. B: I", verb: "already / read", after: "it." },
              { id: "A_5_9", label: "9", before: "A: What film", verb: "they watch", after: "last night? B: I'm not sure." }
            ],
            answers: {
              "A_5_1": { expected: ["have you had"], explanation: "Present Perfect question for state continuing up to now: 'have you had'." },
              "A_5_2": { expected: ["Has Debbie ever visited", "has Debbie ever visited"], explanation: "Present Perfect with ever: Has Debbie ever visited." },
              "A_5_3": { expected: ["did she go"], explanation: "Past Simple question with 'When' referring to a specific finished past time: 'did she go'." },
              "A_5_4": { expected: ["have never done", "'ve never done"], explanation: "Present Perfect with never: have never done." },
              "A_5_5": { expected: ["did"], explanation: "Past Simple for action with specific time 'three years ago': 'did'." },
              "A_5_6": { expected: ["Have they sent", "have they sent"], explanation: "Present Perfect question with yet: 'Have they sent'." },
              "A_5_7": { expected: ["wrote"], explanation: "Past Simple for finished event at age twenty: 'wrote'." },
              "A_5_8": { expected: ["have already read", "'ve already read"], explanation: "Present Perfect with already: 'have already read'." },
              "A_5_9": { expected: ["did they watch"], explanation: "Past Simple question for finished past time 'last night': 'did they watch'." }
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
            title: "Complete the dialogues. Use the words in brackets.",
            points: 5,
            type: "dialogue-gap",
            example: "0 A: I broke your glasses. I'm really sorry. (sorry) B: Forget about it. (forget / it)",
            items: [
              { id: "A_6_1", label: "1", before: "A: I dropped your phone.", verb: "not / mad / me", after: "." },
              { id: "A_6_2", label: "2", before: "B: It's OK.", verb: "not / fault", after: "." },
              { id: "A_6_3", label: "3", before: "A: Sorry.", verb: "make / mistake", after: "." },
              { id: "A_6_4", label: "4", before: "B:", verb: "mind", after: "." },
              { id: "A_6_5", label: "5", before: "A: I lost your book.", verb: "not mean to", after: ". B: It's all right." }
            ],
            answers: {
              "A_6_1": { expected: ["Don't be mad at me", "don't be mad at me"], explanation: "Apology expression: 'Don't be mad at me.'" },
              "A_6_2": { expected: ["It wasn't your fault", "It isn't your fault", "it wasn't your fault", "it isn't your fault"], explanation: "Reassuring someone: 'It wasn't your fault.'" },
              "A_6_3": { expected: ["I made a mistake", "I've made a mistake", "I have made a mistake", "i made a mistake"], explanation: "Admitting error: 'I made a mistake.'" },
              "A_6_4": { expected: ["Never mind", "never mind"], explanation: "Dismissing an apology politely: 'Never mind.'" },
              "A_6_5": { expected: ["I didn't mean to", "i didn't mean to"], explanation: "Explaining it was unintentional: 'I didn't mean to.'" }
            }
          }
        ]
      }
    }
  },

  variantB: {
    id: "variantB",
    title: "Language Test B — Unit 4",
    totalPoints: 35,
    sections: {
      vocabulary: {
        id: "vocabulary",
        title: "Vocabulary",
        maxScore: 15,
        tasks: [
          {
            id: "task_1",
            number: 1,
            title: "Read the extracts from film and book reviews. Write what kind of film or book they are about.",
            points: 5,
            type: "letter-hint",
            example: "0 The heroes arrive at the island before the pirates, find the treasure, and hide it in a cave. adventure film",
            items: [
              { id: "B_1_1", label: "1", textBefore: "In this sad story, two young women meet two young men, but their love doesn't end happily.", displayHint: "r _ _ _ _ _ e", placeholder: "romance", prefix: "r", textAfter: "" },
              { id: "B_1_2", label: "2", textBefore: "She describes her exciting life in Paris before the war and the events that made her famous.", displayHint: "a _ _ _ _ _ _ _ _ _ _ y", placeholder: "autobiography", prefix: "a", textAfter: "" },
              { id: "B_1_3", label: "3", textBefore: "It's October 1929 and a rich man has just lost his money, his business and his home...", displayHint: "h _ _ _ _ _ _ _ _ l", placeholder: "historical", prefix: "h", textAfter: "film" },
              { id: "B_1_4", label: "4", textBefore: "The talking dinosaurs are very funny and the artists who created them are very talented!", displayHint: "a _ _ _ _ _ _ _ n", placeholder: "animation", prefix: "a", textAfter: "" },
              { id: "B_1_5", label: "5", textBefore: "People laughed so much that I couldn't hear what anyone was saying.", displayHint: "c _ _ _ _ y", placeholder: "comedy", prefix: "c", textAfter: "" }
            ],
            answers: {
              "B_1_1": { expected: ["romance"], explanation: "A story about love and relationships: 'romance'." },
              "B_1_2": { expected: ["autobiography"], explanation: "Life story written by oneself: 'autobiography'." },
              "B_1_3": { expected: ["historical", "historical film"], explanation: "A film set in a past historical period: 'historical film'." },
              "B_1_4": { expected: ["animation"], explanation: "Animated drawings or CGI characters: 'animation'." },
              "B_1_5": { expected: ["comedy"], explanation: "A funny, humorous book or film: 'comedy'." }
            }
          },
          {
            id: "task_2",
            number: 2,
            title: "Circle the correct word.",
            points: 6,
            type: "circle-choice",
            example: "Caroline Masters was ⁰born / retired in 1945 in Yorkshire.",
            items: [
              { id: "B_2_1", label: "1", before: "She was a good student and she", options: ["went", "took"], after: "to college." },
              { id: "B_2_2", label: "2", before: "When she", options: ["retired", "graduated"], after: ", she wanted to work as a secretary." },
              { id: "B_2_3", label: "3", before: "She", options: ["got", "grew"], after: "a job in an office as a secretary." },
              { id: "B_2_4", label: "4", before: "There, she met and", options: ["felt", "fell"], after: "in love with James Parsons." },
              { id: "B_2_5", label: "5", before: "Three years later, they", options: ["had", "got"], after: "married." },
              { id: "B_2_6", label: "6", before: "They", options: ["made", "had"], after: "two children. They lived together happily for 45 years." }
            ],
            answers: {
              "B_2_1": { expected: ["went"], explanation: "Collocation: 'go to college' (past 'went to college')." },
              "B_2_2": { expected: ["graduated"], explanation: "To finish university or college with a degree: 'graduated'." },
              "B_2_3": { expected: ["got"], explanation: "Collocation: 'get a job' (past 'got a job')." },
              "B_2_4": { expected: ["fell"], explanation: "Idiom: 'fall in love' (past 'fell in love')." },
              "B_2_5": { expected: ["got"], explanation: "Collocation: 'get married' (past 'got married')." },
              "B_2_6": { expected: ["had"], explanation: "Collocation: 'have children' (past 'had two children')." }
            }
          },
          {
            id: "task_3",
            number: 3,
            title: "Complete the sentences with the words in the box.",
            points: 4,
            type: "word-bank",
            wordBank: ["actors", "costume", "director", "make-up", "scriptwriter"],
            example: "0 The actors learned their words and prepared for each scene carefully.",
            usedInExample: ["actors"],
            sentences: [
              { textBefore: "1 The", gapId: "B_3_1", label: "1", textAfter: "designer created some fantastic clothes for this film." },
              { textBefore: "2 The", gapId: "B_3_2", label: "2", textAfter: "had to make changes to the story and the actors' words. He wasn't happy about that!" },
              { textBefore: "3 The film", gapId: "B_3_3", label: "3", textAfter: "told the actors what to do." },
              { textBefore: "4 The", gapId: "B_3_4", label: "4", textAfter: "artist changed the woman's appearance; in some scenes she looked old and in other scenes she looked very young." }
            ],
            answers: {
              "B_3_1": { expected: ["costume"], explanation: "Specialist who creates clothes: 'costume designer'." },
              "B_3_2": { expected: ["scriptwriter"], explanation: "Writer who writes the screenplay and dialogue: 'scriptwriter'." },
              "B_3_3": { expected: ["director"], explanation: "Person in charge of directing the film: 'director'." },
              "B_3_4": { expected: ["make-up", "makeup"], explanation: "Artist applying cosmetics and styling: 'make-up artist'." }
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
            points: 6,
            type: "circle-choice",
            example: "0 I have been a doctor for / since ten years.",
            items: [
              { id: "B_4_1", label: "1", before: "They have had their car", options: ["for", "since"], after: "2015." },
              { id: "B_4_2", label: "2", before: "We haven't seen a good film at the cinema", options: ["for", "since"], after: "last summer." },
              { id: "B_4_3", label: "3", before: "I have known my best friend", options: ["for", "since"], after: "we were six years old." },
              { id: "B_4_4", label: "4", before: "She has lived in London", options: ["for", "since"], after: "a long time." },
              { id: "B_4_5", label: "5", before: "I have had this computer", options: ["for", "since"], after: "three months." },
              { id: "B_4_6", label: "6", before: "We have been here", options: ["for", "since"], after: "this morning." }
            ],
            answers: {
              "B_4_1": { expected: ["since"], explanation: "'Since' indicates specific starting year (2015)." },
              "B_4_2": { expected: ["since"], explanation: "'Since' indicates starting time (last summer)." },
              "B_4_3": { expected: ["since"], explanation: "'Since' indicates past point (when we were six)." },
              "B_4_4": { expected: ["for"], explanation: "'For' indicates duration (a long time)." },
              "B_4_5": { expected: ["for"], explanation: "'For' indicates duration (three months)." },
              "B_4_6": { expected: ["since"], explanation: "'Since' indicates starting point today (this morning)." }
            }
          },
          {
            id: "task_5",
            number: 5,
            title: "Complete the dialogues with the correct form of the Present Perfect or the Past Simple.",
            points: 9,
            type: "grammar-gap",
            example: "0 A: Is Oliver at home? B: Yes, he is. He's just arrived (just / arrive).",
            items: [
              { id: "B_5_1", label: "1", before: "A: I", verb: "never / ride", after: "a horse in my life." },
              { id: "B_5_2", label: "2", before: "B: Really? I", verb: "ride", after: "a camel last year!" },
              { id: "B_5_3", label: "3", before: "A: Suzie", verb: "win", after: "her first chess competition last month. B: She's only seven! What a clever girl!" },
              { id: "B_5_4", label: "4", before: "A: How long", verb: "they / work", after: "there? B: Since 2002." },
              { id: "B_5_5", label: "5", before: "A:", verb: "Harold / ever / visit", after: "France? B: Yes, he has." },
              { id: "B_5_6", label: "6", before: "A: When", verb: "he / go", after: "to Japan? B: Last spring." },
              { id: "B_5_7", label: "7", before: "A:", verb: "they / do", after: "their homework yet? B: No, not yet." },
              { id: "B_5_8", label: "8", before: "A: I", verb: "not sleep", after: "well last night. B: Do you want to go to bed early tonight?" },
              { id: "B_5_9", label: "9", before: "A: He", verb: "already / read", after: "the book. B: So can I borrow it, please?" }
            ],
            answers: {
              "B_5_1": { expected: ["have never ridden", "'ve never ridden"], explanation: "Present Perfect experience with never: have never ridden." },
              "B_5_2": { expected: ["rode"], explanation: "Past Simple finished time 'last year': rode (ride - rode - ridden)." },
              "B_5_3": { expected: ["won"], explanation: "Past Simple finished time 'last month': won (win - won - won)." },
              "B_5_4": { expected: ["have they worked"], explanation: "Present Perfect duration up to now: have they worked." },
              "B_5_5": { expected: ["Has Harold ever visited", "has Harold ever visited"], explanation: "Present Perfect question with ever: Has Harold ever visited." },
              "B_5_6": { expected: ["did he go"], explanation: "Past Simple question with when: did he go." },
              "B_5_7": { expected: ["Have they done", "have they done"], explanation: "Present Perfect question with yet: Have they done." },
              "B_5_8": { expected: ["didn't sleep", "did not sleep"], explanation: "Past Simple negative for last night: didn't sleep." },
              "B_5_9": { expected: ["has already read", "'s already read"], explanation: "Present Perfect with already: has already read." }
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
            title: "Complete the dialogues. Use the words in brackets.",
            points: 5,
            type: "dialogue-gap",
            example: "0 A: I broke your glasses. I'm really sorry. (sorry) B: Forget about it. (forget / it)",
            items: [
              { id: "B_6_1", label: "1", before: "A: Oh dear!", verb: "all / my fault", after: "." },
              { id: "B_6_2", label: "2", before: "B:", verb: "not matter", after: "." },
              { id: "B_6_3", label: "3", before: "A: Sorry! I forgot to tell you about it. B:", verb: "not worry / it", after: "." },
              { id: "B_6_4", label: "4", before: "A: I sat on your bag.", verb: "not / mean", after: "." },
              { id: "B_6_5", label: "5", before: "B: It's OK.", verb: "accident", after: "." }
            ],
            answers: {
              "B_6_1": { expected: ["It's all my fault", "It is all my fault", "it's all my fault"], explanation: "Accepting full blame: 'It's all my fault.'" },
              "B_6_2": { expected: ["It doesn't matter", "It does not matter", "it doesn't matter"], explanation: "Reassuring: 'It doesn't matter.'" },
              "B_6_3": { expected: ["Don't worry about it", "Do not worry about it", "don't worry about it"], explanation: "Comforting: 'Don't worry about it.'" },
              "B_6_4": { expected: ["I didn't mean to", "I did not mean to", "i didn't mean to"], explanation: "Stating lack of intent: 'I didn't mean to.'" },
              "B_6_5": { expected: ["It was an accident", "it was an accident"], explanation: "Reassuring that it was accidental: 'It was an accident.'" }
            }
          }
        ]
      }
    }
  }
};
