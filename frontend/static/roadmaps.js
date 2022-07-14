import React from "react";

export const roadmaps = [
  {
    stage: "Beginner",
    todos: ["Learn Hiragana and Katakana", "Vocab!", "Kanji"],
    descriptions: {
      "Learn Hiragana and Katakana": ["Learn the writing system."],
      "Vocab!": [
        "The best way to reinforce your memory is to see each character in real words",
      ],
      Kanji: [
        "Kanji is easily the most time consuming part of Japanese, so it is good to start early. While daunting at first, it is one of the most interesting aspects of the language",
      ],
    },
  },
  {
    stage: "Intermediate",
    todos: ["Grammar", "Listening Practice"],
    descriptions: {
      Grammar: [
        "Genki I-II Textbooks",
        "Learning Grammar isn't as straightforward as memorizing characters and vocab, so make sure to take your time!",
      ],
      "Listening Practice": [
        "The important thing here is that you enjoy what you're listening to (e.g. music, movies, shows). Finding a good medium is great for motivation and enjoyment, not just studying!",
      ],
    },
  },
  {
    stage: "Advanced",
    todos: ["Speaking Practice"],
    descriptions: {
      "Speaking Practice": [
        "While you should be at least attempting to speak from the begining, it is very hard to have beneficial conversations without a basis of knowledge.",
        "You don't need to go to Japan for practice, there are plenty of online apps that all you to virtual connect with natives and other language learners!",
      ],
    },
  },
  {
    stage: "Fluency",
    todos: ["Todo1"],
    descriptions: {
      Todo1: ["Description1", "Description2"],
    },
  },
];
