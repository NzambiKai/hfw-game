// Array of 35 random words
const words = [
  "Apple", "Boy", "Cat", "Dog", "Elephant", "Fish", "Goat", "Hat", "Ink", "Jelly",
  "Kite", "Lion", "Mouse", "Nose", "Ocean", "Pine", "Queen", "Rat", "Sun", "Tiger",
  "Umbrella", "Violin", "Water", "X-ray", "Yacht", "Zebra", "Cloud", "Dance", 
  "Flute", "Game", "Honey", "Ivory", "Jacket", "Kangaroo", "Lemon"
];

let currentIndex = 0;

const wordDisplay = document.getElementById('word-display');
const progressDisplay = document.getElementById('progress-display');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
  if (currentIndex < words.length) {
    wordDisplay.innerText = words[currentIndex];
    progressDisplay.innerText = `Word ${currentIndex + 1} of ${words.length}`;
    startButton.innerText = 'Next';
    currentIndex++;
  } 
  if (currentIndex === words.length) {
    wordDisplay.style.color = 'green';
    wordDisplay.innerText = 'Complete!';
    progressDisplay.innerText = '';
    startButton.innerText = 'Start Again';
    currentIndex = 0;
  }
  if (startButton.innerText === 'Start Again') {
    wordDisplay.style.color = 'black';
    startButton.innerText = 'Start';
  }
});
