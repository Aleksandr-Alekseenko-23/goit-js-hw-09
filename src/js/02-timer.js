import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonStartRef = document.querySelector('[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

buttonStartRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0] < date) {
      return Notify.failure('Please choose a date in the future');
    }
    buttonStartRef.disabled = false;

    console.log(selectedDates[0]);
  },
};

buttonStartRef.addEventListener('click', onClick);

const flatPickrInput = flatpickr(inputRef, options);

function onClick() {
  setInterval(() => {
    convertTime();
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function convertTime() {
  const timeNow =
    flatPickrInput.selectedDates[0].getTime() - new Date().getTime();
  daysRef.textContent = addLeadingZero(convertMs(timeNow).days);
  hoursRef.textContent = addLeadingZero(convertMs(timeNow).hours);
  minutesRef.textContent = addLeadingZero(convertMs(timeNow).minutes);
  secondsRef.textContent = addLeadingZero(convertMs(timeNow).seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
