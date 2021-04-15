const startButton = document.querySelector(".buttonStart");
const stopButton = document.querySelector(".buttonStop");
const clearButton = document.querySelector(".buttonClear");
const time = document.querySelector(".time");

let countTime;
let minutesDecimal = 0;
let minutesUnity = 0;
let secoundsDecimal = 0;
let secoundsUnity = 0;
let millisecondsDecimal = 0;
let millisecondsUnity = 0;


const startCountDown = () => {
    clearInterval(countTime)
    countTime = setInterval(() => {
      if(millisecondsUnity < 9) {
          millisecondsUnity++;
          time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } else if(millisecondsUnity === 9) {
        millisecondsUnity = 0;
        millisecondsDecimal++;
        time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(millisecondsDecimal === 10) {
        millisecondsUnity = 0;
        millisecondsDecimal = 0;
        secoundsUnity++;
        time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } else if(millisecondsDecimal === 10 && secoundsUnity < 9) {
        secoundsUnity++;
        time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(secoundsUnity === 10) {
        secoundsUnity = 0;
        secoundsDecimal++;
        time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(secoundsDecimal === 6 && secoundsUnity < 10) {
          minutesUnity++;
          secoundsUnity = 0;
          secoundsDecimal = 0;
          time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      } if(minutesUnity > 1 && minutesUnity === 10) {
          minutesUnity = 0;
          minutesDecimal++;
          time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
      };
    }, 10);
};

const stopCountDown = () => {
  clearInterval(countTime);
};

const clearCountDown = () => {
  clearInterval(countTime);
  minutesDecimal = 0;
  minutesUnity = 0;
  secoundsDecimal = 0;
  secoundsUnity = 0;
  millisecondsDecimal = 0;
  millisecondsUnity = 0;
  time.textContent = `${minutesDecimal}${minutesUnity}:${secoundsDecimal}${secoundsUnity}:${millisecondsDecimal}${millisecondsUnity}`;
};

startButton.addEventListener("click", startCountDown);
stopButton.addEventListener("click", stopCountDown);
clearButton.addEventListener("click", clearCountDown);