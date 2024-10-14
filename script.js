// Array of 35 random words
const words = [
  `must`, `computer`, `brother`, `mustn't`, `light`, `didn't`,  `about`, `can't`, `won't`, `cousin`, `allowed`, `remove`,
  `fetch`, `world`, `while`, `week`, `strange`, `beautiful`, `leave`, `station`, `someone`, `won`, `straight`, `watch`, `wanted`,
  `early`, `voice`, `across`, `finally`, `sudden`, `hour`, `second`, `minute`, `clothes`, `different`
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
