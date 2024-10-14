// Array of 35 random words
const words = [
  "Apple", "Boy", "Cat", "Dog", "Elephant", "Fish", "Goat", "Hat", "Ink", "Jelly",
  "Kite", "Lion", "Mouse", "Nose", "Ocean", "Pine", "Queen", "Rat", "Sun", "Tiger",
  "Umbrella", "Violin", "Water", "X-ray", "Yacht", "Zebra", "Cloud", "Dance", 
  "Flute", "Game", "Honey", "Ivory", "Jacket", "Kangaroo", "Lemon", "Mirror"
];

let currentIndex = 0;

const wordDisplay = document.getElementById('word-display');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
  if (currentIndex < words.length) {
    wordDisplay.innerText = words[currentIndex];
    startButton.innerText = 'Next';
    currentIndex++;
  } 
  if (currentIndex === words.length) {
    wordDisplay.style.color = 'green';
    wordDisplay.innerText = 'Complete!';
    startButton.innerText = 'Start Again';
    currentIndex = 0;
  }
  if (startButton.innerText === 'Start Again') {
    wordDisplay.style.color = 'black';
    startButton.innerText = 'Start';
  }
});
