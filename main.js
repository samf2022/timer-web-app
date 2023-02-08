let seconds = 0;
let minutes = 0;
let hours = 0;
const time = `${hours}:${minutes}:${seconds}`;
const timerScreen = document.querySelector(".screen");
const button = document.querySelector(".class-1");
const btn = document.querySelector(".add");
let buttonClicked = false;

timerScreen.innerHTML = time;

button.addEventListener("click", () => {
  let limit = 1000;
  timerId(limit);
});

const timerId = (limit) => {
  setInterval(() => {
    timerScreen.innerHTML = `${hours}:${minutes}:${seconds++}`;
  }, limit);
};

btn.addEventListener("click", () => {
  seconds += 1;
});

// button.addEventListener("click", () => {
//   if (!buttonClicked) {
//     timerId = setInterval(() => {
//       timerScreen.innerHTML = `${hours}:${minutes}:${seconds++}`;

//       if (seconds == 5) {
//         minutes++;
//         seconds = 0;
//       } else if (minutes == 2) {
//         hours++;
//         minutes = 0;
//       }
//     }, 1000);

//     button.textContent = "Pause";
//     buttonClicked = true;
//   } else {
//     clearInterval(timerId);
//     button.textContent = "Play";
//     buttonClicked = false;
//   }
// });

// btn.addEventListener("click", () => {
//   seconds += 2;
// });
