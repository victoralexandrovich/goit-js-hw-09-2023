function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

let intervalId = null;

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

function onStart() {
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}
