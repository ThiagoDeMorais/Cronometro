const stopwatchContainer = document.querySelector(".stopwatch-container");
const buttons = Array.from(document.querySelectorAll("button"))
const [startButton, stopButton, resetButton] = buttons
console.log(stopButton)
console.log(buttons)
let clock = 0;
const stopwatchValues = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const formatTime = ({ hours, minutes, seconds }) => {
    return {
      hours: String(hours).length === 1 ? `0${hours}` : hours,
      minutes: String(minutes).length === 1 ? `0${minutes}` : minutes,
      seconds: String(seconds).length === 1 ? `0${seconds}` : seconds,
    };
  };

const insertClockValuesInDom = ({ hours, minutes, seconds }) => {
  stopwatchContainer.innerHTML = `<span class="digit-container">${hours}</span>
      <span class="digit-container">${minutes}</span>
      <span class="digit-container">${seconds}</span>`;
};

const applyStopwatchLogic = () => {
  stopwatchValues.seconds++;
  if (stopwatchValues.seconds === 60) {
    stopwatchValues.minutes++;
    stopwatchValues.seconds = 0;

    if (stopwatchValues.minutes === 60) {
      stopwatchValues.hours++;
      stopwatchValues.minutes = 0;

      if (stopwatchValues.hours === 25) {
        stopwatchValues.hours = 0;
      }
    }
  }

  insertClockValuesInDom(formatTime(stopwatchValues));
};

const enableButton = (button) => {
  button.removeAttribute("disabled");
  button.textContent === "Start"
    ? button.classList.add("start-button")
    : button.classList.add("stop-button");
  button.classList.remove("disabled-button");
};

const disableButton = (button) => {
  button.setAttribute("disabled", true);
  button.textContent === "Start"
    ? button.classList.remove("start-button")
    : stopButton.classList.remove("stop-button");
  button.classList.add("disabled-button");
};



startButton.addEventListener("click", event => {
  clock = setInterval(applyStopwatchLogic, 1000);
  disableButton(startButton)
  enableButton(stopButton)
});

stopButton.addEventListener("click", () => {
  clearInterval(clock);
  disableButton(stopButton)
  enableButton(startButton)
});

resetButton.addEventListener("click", () => {
  stopwatchValues.hours = 0;
  stopwatchValues.minutes = 0;
  stopwatchValues.seconds = 0;
  insertClockValuesInDom(formatTime(stopwatchValues));
});
