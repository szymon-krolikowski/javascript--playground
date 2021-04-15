const startButton = document.querySelector(".buttonStart");
const stopButton = document.querySelector(".buttonStop");
const resetButton = document.querySelector(".buttonReset");
const lapButton = document.querySelector(".buttonLap");
const currentTime = document.querySelector(".time");
const measurementList = document.querySelector(".measurementList");
const secoundMarks = document.querySelectorAll(".secound-mark");

let countTime;
let colorFull;
let minutesDecimal = 0;
let minutesUnity = 0;
let secoundsDecimal = 0;
let secoundsUnity = 0;
let millisecondsDecimal = 0;
let millisecondsUnity = 0;
let numberMeasurement = 0;
let timesArr = [];
let currentMark = 0;

const paintMark = () => {
    colorFull = setInterval(() => {
      secoundMarks[currentMark].classList.toggle("colorToggle")
      currentMark++
      if(currentMark === 59) {
        currentMark = 0
      }     
    }, 1000);
}

const startCountDown = () => {
    clearInterval(countTime);
    countTime = setInterval(() => {
      if(millisecondsUnity < 9) {
          millisecondsUnity++;
          currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } else if(millisecondsUnity === 9) {
        millisecondsUnity = 0;
        millisecondsDecimal++;
        currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(millisecondsDecimal === 10) {
        millisecondsUnity = 0;
        millisecondsDecimal = 0;
        secoundsUnity++;
        currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } else if(millisecondsDecimal === 10 && secoundsUnity < 9) {
        secoundsUnity++;
        currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(secoundsUnity === 10) {
        secoundsUnity = 0;
        secoundsDecimal++;
        currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(secoundsDecimal === 6 && secoundsUnity < 10) {
          minutesUnity++;
          secoundsUnity = 0;
          secoundsDecimal = 0;
          currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(minutesUnity > 1 && minutesUnity === 10) {
          minutesUnity = 0;
          minutesDecimal++;
          currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      };
    }, 10);
    paintMark()
};

const stopCountDown = () => {
  clearInterval(countTime);
  clearInterval(colorFull)
};

const resetCountDown = () => {
  clearInterval(countTime);
  secoundMarks.forEach(mark => {
    mark.classList.remove("colorToggle")
  })
  currentMark = 0
  timesArr = [];
  minutesDecimal = 0;
  minutesUnity = 0;
  secoundsDecimal = 0;
  secoundsUnity = 0;
  millisecondsDecimal = 0;
  millisecondsUnity = 0;
  numberMeasurement = 0;
  currentTime.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
  measurementList.textContent = "";
};

const measurementCountDown = () => {
  timesArr.push(currentTime.textContent);
  numberMeasurement++;
  timesArr.forEach(time => {
    const newMeasurement = document.createElement("li");
    newMeasurement.innerHTML = `<span>${numberMeasurement} lap</span><span>${time}</span>`;
    newMeasurement.classList.add("measurement");
    measurementList.appendChild(newMeasurement);
  });
  timesArr.pop(currentTime.textContent);
};

startButton.addEventListener("click", startCountDown);
stopButton.addEventListener("click", stopCountDown);
resetButton.addEventListener("click", resetCountDown);
lapButton.addEventListener("click", measurementCountDown);
