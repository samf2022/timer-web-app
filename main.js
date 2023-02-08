let seconds = 0;
let minutes = 0;
let hours = 0;
let buttonClicked = false;
let result = null;
const timerScreen = document.querySelector(".screen");
const button = document.querySelector(".class-1");
const time = `${hours}:${minutes}:${seconds}`;

timerScreen.innerHTML = time;

button.addEventListener("click", () => {
  if (!buttonClicked) {
    testFunction();
    result = setInterval(testFunction, 100);
    buttonClicked = true;
    button.textContent = "Pause";
  } else {
    clearInterval(result);
    buttonClicked = false;
    button.textContent = "Play";
  }
});

const testFunction = () => {
  timerScreen.innerHTML = `${hours}:${minutes}:${seconds++}`;
  if (seconds == 59) {
    minutes++;
    seconds = 0;
  } else if (minutes == 59) {
    hours++;
    minutes = 0;
  } else if (hours == 24) {
    hours = 0;
  }
};
