const questions = [
    {
        question: "What's your favorite color?",
        options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
    },
    {
        question: "What's your favorite season?",
        options: ["Spring 🌸", "Summer ☀️", "Autumn 🍂", "Winter ❄️"],
    },
    {
        question: "Which animal resonates with you the most?",
        options: ["Lion 🦁", "Dolphin 🐬", "Eagle 🦅", "Panda 🐼"],
    },
    {
        question: "How do you like to spend your weekends?",
        options: [
          "Exploring nature 🌳",
          "Relaxing at home 🏡",
          "Socializing with friends 🎉",
          "Trying new hobbies 🎨",
        ],
    },
    {
        question: "What type of movies do you enjoy?",
        options: ["Action 🎬", "Comedy 😂", "Drama 🎭", "Sci-Fi 🚀"],
    }
];

const keywords = {
    Fire: "fire",
    Water: "water",
    Earth: "earth",
    Air: "air",
};

const mapToElements = (questions, keywords) => {
    const mapped = {};
    questions.forEach(question => {
      question.options.forEach(option => {
        mapped[option] = keywords[option];
      })
    })
    return mapped;
}

const format = url => {
    const regex = /breeds\/([^\/]*)\//;
    const match = url.match(regex);  
    const breed = match[1].replace(/([a-zA-Z]+)-([a-zA-Z]+)/g, (match, p1, p2) => `${p1} ${p2}`);
    console.log(breed);
    return breed.replace(/\b\w/g, (char) => char.toUpperCase());
}

export { questions, keywords, mapToElements, format };