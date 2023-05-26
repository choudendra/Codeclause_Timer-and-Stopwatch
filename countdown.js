const birthdayForm = document.getElementById('birthday-form');
const birthdayInput = document.getElementById('birthday-input');
const birthdayDisplay = document.getElementById('birthday-display');

birthdayForm.addEventListener('submit', function(event) {
  event.preventDefault();
  startBirthdayCountdown();
});

function startBirthdayCountdown() {
  const birthdayDate = new Date(birthdayInput.value);
  const currentTime = new Date().getTime();
  const timeDifference = birthdayDate.getTime() - currentTime;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownText = `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    birthdayDisplay.textContent = countdownText;
  } else {
    birthdayDisplay.textContent = 'Birthday has arrived!';
  }
}

function pad(value) {
  return value.toString().padStart(2, '0');
}
