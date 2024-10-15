// Array of words and sentences
let wordData = [
  { word: "must", sentence: "You must study hard to pass the exam." },
  { word: "computer", sentence: "She spent hours working on her computer." },
  { word: "brother", sentence: "My younger brother loves playing soccer." },
  { word: "mustn't", sentence: "You mustn't touch the hot stove." },
  { word: "light", sentence: "Turn on the light, it's getting dark." },
  { word: "didn't", sentence: "I didn't finish my homework last night." },
  { word: "about", sentence: "Can you tell me about your trip?" },
  { word: "can't", sentence: "I can't attend the party tonight." },
  { word: "won't", sentence: "She won't forgive him easily." },
  { word: "cousin", sentence: "My cousin is visiting from abroad." },
  { word: "allowed", sentence: "Children aren't allowed in this area." },
  { word: "remove", sentence: "Please remove your shoes before entering." },
  { word: "fetch", sentence: "Can you fetch me a glass of water?" },
  { word: "world", sentence: "Traveling the world is my dream." },
  { word: "while", sentence: "I'll finish this task while you're out." },
  { word: "week", sentence: "I'm going on vacation next week." },
  { word: "strange", sentence: "This is a strange and unusual gift." },
  { word: "beautiful", sentence: "The sunset was truly beautiful." },
  { word: "leave", sentence: "Don't leave me behind." },
  { word: "station", sentence: "The train station is nearby." },
  { word: "someone", sentence: "Someone is knocking on the door." },
  { word: "won", sentence: "She won the first prize in the contest." },
  { word: "straight", sentence: "Drive straight and turn left." },
  { word: "watch", sentence: "Watch out for the steps." },
  { word: "wanted", sentence: "The police wanted suspect was caught." },
  { word: "early", sentence: "Let's arrive early for the concert." },
  { word: "voice", sentence: "Her voice is amazing." },
  { word: "across", sentence: "The park is across the street." },
  { word: "finally", sentence: "I've finally finished my project." },
  { word: "sudden", sentence: "There was a sudden power outage." },
  { word: "hour", sentence: "I'll be back in an hour." },
  { word: "second", sentence: "Wait just a second." },
  { word: "minute", sentence: "We have just a minute left." },
  { word: "clothes", sentence: "I need to wash my clothes." },
  { word: "different", sentence: "Everyone has different opinions." },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the wordData array
wordData = shuffleArray(wordData);

let currentIndex = 0;

const wordDisplay = document.getElementById('word-display');
const sentenceDisplay = document.getElementById('sentence-display');
const progressDisplay = document.getElementById('progress-display');
const startButton = document.getElementById('start-button');

wordDisplay.innerText = wordData[wordData.length - 1];

startButton.addEventListener('click', () => {
  if (currentIndex < wordData.length) {
    wordDisplay.innerText = wordData[currentIndex].word;
    sentenceDisplay.innerText = wordData[currentIndex].sentence;
    progressDisplay.innerText = `Word ${currentIndex + 1} of ${wordData.length}`;
    startButton.innerText = 'Next';
    currentIndex++;
  }
  if (startButton.innerText === 'Start Again') {
    startButton.innerText = 'Start';
  }
  if (currentIndex === wordData.length) {
    wordDisplay.innerText = 'Finished!';
    sentenceDisplay.innerText = '';
    progressDisplay.innerText = '';
    startButton.innerText = 'Start Again';
    currentIndex = 0;
    wordData = shuffleArray(wordData);
  }
});
