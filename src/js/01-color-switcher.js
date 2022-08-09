const buttonStartRef = document.querySelector('[data-start]');
const buttonStopRef = document.querySelector('[data-stop');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setRandomColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}

buttonStartRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    setRandomColor();
  }, 1000);
  buttonStartRef.disabled = true;
});

buttonStopRef.addEventListener('click', e => {
  clearInterval(timerId);
  buttonStartRef.disabled = false;
});
