const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const lapButton = document.getElementById('lap');
const resetButton = document.getElementById('reset');
const lapsList = document.getElementById('laps');

let startTime;
let stopwatchInterval;
let laps = [];

function startStopwatch() {
  startTime = Date.now();
  stopwatchInterval = setInterval(updateStopwatch, 10);
  toggleButtons(false, true, true, false);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  toggleButtons(true, false, false, true);
}

function lapStopwatch() {
  const lapTime = Date.now() - startTime;
  laps.push(formatTime(lapTime));
  displayLaps();
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  display.textContent = '00:00:00';
  laps = [];
  lapsList.innerHTML = '';
  toggleButtons(true, false, false, false);
}

function updateStopwatch() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, '0');
}

function displayLaps() {
  lapsList.innerHTML = '';
  laps.forEach((lap, index) => {
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${index + 1}: ${lap}`;
    lapsList.appendChild(lapItem);
  });
}

function toggleButtons(start, stop, lap, reset) {
  startButton.disabled = !start;
  stopButton.disabled = !stop;
  lapButton.disabled = !lap;
  resetButton.disabled = !reset;
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
lapButton.addEventListener('click', lapStopwatch);
resetButton.addEventListener('click', resetStopwatch);
