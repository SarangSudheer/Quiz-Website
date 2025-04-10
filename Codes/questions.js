console.log("questions.js loaded");

const quizThemes = {
    "general": [
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
  { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"], answer: "Blue Whale" },
  { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], answer: "Da Vinci" },
  { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Thailand", "Japan", "South Korea"], answer: "Japan" },
  { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
  { question: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
  { question: "Which language has the most native speakers?", options: ["English", "Mandarin", "Spanish", "Hindi"], answer: "Mandarin" },
  { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Quartz"], answer: "Diamond" }
],
    "computers": [
  { question: "What does CPU stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Core Processing Unit"], answer: "Central Processing Unit" },
  { question: "Which of these is an input device?", options: ["Monitor", "Keyboard", "Printer", "Speaker"], answer: "Keyboard" },
  { question: "Which company developed the Windows OS?", options: ["Apple", "IBM", "Microsoft", "Google"], answer: "Microsoft" },
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "High Text Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "Which of these is NOT an operating system?", options: ["Linux", "Windows", "Oracle", "macOS"], answer: "Oracle" },
  { question: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Real Access Memory"], answer: "Random Access Memory" },
  { question: "What does GPU stand for?", options: ["General Processing Unit", "Graphics Processing Unit", "Graphics Performance Unit", "Gaming Processing Unit"], answer: "Graphics Processing Unit" },
  { question: "Who is the founder of Microsoft?", options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"], answer: "Bill Gates" },
  { question: "What is the brain of the computer?", options: ["RAM", "CPU", "Hard Drive", "GPU"], answer: "CPU" },
  { question: "Which key is used to refresh a webpage?", options: ["F5", "F1", "F11", "Esc"], answer: "F5" }
],
    "sports": [
  { question: "How many players are there in a football (soccer) team?", options: ["9", "10", "11", "12"], answer: "11" },
  { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: "Brazil" },
  { question: "Which sport uses a bat and ball and is played between two teams?", options: ["Tennis", "Cricket", "Hockey", "Golf"], answer: "Cricket" },
  { question: "What is the national sport of Japan?", options: ["Karate", "Judo", "Sumo Wrestling", "Baseball"], answer: "Sumo Wrestling" },
  { question: "Who is known as the fastest man alive?", options: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Justin Gatlin"], answer: "Usain Bolt" },
  { question: "Which sport is known as the 'king of sports'?", options: ["Basketball", "Football", "Cricket", "Tennis"], answer: "Football" },
  { question: "In which sport is the term 'love' used?", options: ["Cricket", "Golf", "Tennis", "Badminton"], answer: "Tennis" },
  { question: "Which game is associated with Wimbledon?", options: ["Cricket", "Golf", "Tennis", "Football"], answer: "Tennis" },
  { question: "How many rings are there in the Olympic symbol?", options: ["4", "5", "6", "7"], answer: "5" },
  { question: "Which country hosts the Tour de France?", options: ["Italy", "Spain", "France", "Germany"], answer: "France" }
],
    "geography": [
  { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
  { question: "Mount Everest is located in which mountain range?", options: ["Andes", "Alps", "Himalayas", "Rockies"], answer: "Himalayas" },
  { question: "Which is the smallest continent?", options: ["Europe", "Australia", "Antarctica", "South America"], answer: "Australia" },
  { question: "Which desert is the largest in the world?", options: ["Gobi", "Sahara", "Kalahari", "Arctic"], answer: "Sahara" },
  { question: "Which country has the most population?", options: ["India", "USA", "China", "Brazil"], answer: "China" },
  { question: "Which country is shaped like a boot?", options: ["France", "Italy", "Spain", "Portugal"], answer: "Italy" },
  { question: "What is the currency of Japan?", options: ["Won", "Yen", "Peso", "Rupee"], answer: "Yen" },
  { question: "Which river flows through Egypt?", options: ["Amazon", "Yangtze", "Ganges", "Nile"], answer: "Nile" },
  { question: "Which U.S. state is famous for Hollywood?", options: ["Nevada", "New York", "Texas", "California"], answer: "California" },
  { question: "What is the largest island in the world?", options: ["Greenland", "Australia", "Borneo", "Madagascar"], answer: "Greenland" }
],
    "movies": [
  { question: "Who directed Titanic?", options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"], answer: "James Cameron" },
  { question: "Which movie has the quote 'I'll be back'?", options: ["Predator", "The Terminator", "Rambo", "Die Hard"], answer: "The Terminator" },
  { question: "Which actor plays Iron Man?", options: ["Chris Evans", "Mark Ruffalo", "Robert Downey Jr.", "Tom Holland"], answer: "Robert Downey Jr." },
  { question: "What is the highest-grossing film of all time?", options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"], answer: "Avatar" },
  { question: "Who voiced Simba in 2019's *The Lion King*?", options: ["Donald Glover", "Beyoncé", "James Earl Jones", "Seth Rogen"], answer: "Donald Glover" },
  { question: "Which film won Best Picture in 2020 Oscars?", options: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"], answer: "Parasite" },
  { question: "Who played Jack in Titanic?", options: ["Tom Cruise", "Leonardo DiCaprio", "Matt Damon", "Brad Pitt"], answer: "Leonardo DiCaprio" },
  { question: "Which movie series features a talking tree named Groot?", options: ["Transformers", "X-Men", "Guardians of the Galaxy", "Avengers"], answer: "Guardians of the Galaxy" },
  { question: "What is the name of the wizarding school in Harry Potter?", options: ["Durmstrang", "Beauxbatons", "Hogwarts", "Ilvermorny"], answer: "Hogwarts" },
  { question: "Which film is about dreams within dreams?", options: ["Interstellar", "Inception", "Memento", "The Matrix"], answer: "Inception" }
],
    "science": [
  { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
  { question: "What planet is closest to the sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury" },
  { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], answer: "Carbon Dioxide" },
  { question: "What part of the cell contains DNA?", options: ["Cytoplasm", "Nucleus", "Ribosome", "Mitochondria"], answer: "Nucleus" },
  { question: "How many bones are in the adult human body?", options: ["206", "201", "196", "212"], answer: "206" },
  { question: "What force pulls objects towards Earth?", options: ["Magnetism", "Gravity", "Friction", "Electricity"], answer: "Gravity" },
  { question: "Which is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: "Jupiter" },
  { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], answer: "Mitochondria" },
  { question: "Which vitamin is produced by sunlight?", options: ["A", "C", "D", "B12"], answer: "D" },
  { question: "Which element has the atomic number 1?", options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], answer: "Hydrogen" }
]
};