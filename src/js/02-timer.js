import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix'

const body = document.querySelector("body");
const timer = document.querySelector('.timer')
const datePicker = document.querySelector('#datetime-picker')
const daysCount = document.querySelector('[data-days]')
const hoursCount = document.querySelector('[data-hours]')
const minutesCount = document.querySelector('[data-minutes]')
const secondsCount = document.querySelector('[data-seconds]')
const startBtn = document.querySelector('[data-start]')
let selectedDates

body.style.backgroundColor = "lightskyblue"
timer.style.display = "flex"
timer.style.margin = "30px 0 0 50px"
timer.style.fontSize = "40px"

daysCount.style.marginLeft = "10px"
hoursCount.style.marginLeft = "10px"
minutesCount.style.marginLeft = "10px"
secondsCount.style.marginLeft = "10px"

datePicker.style.marginLeft = "100px"
datePicker.style.height = "40px"
datePicker.style.width = "200px"
datePicker.style.textAlign = "center"

startBtn.style.height = "40px"
startBtn.style.width = "75px"
startBtn.style.height = "40px"

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
        startBtn.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future', {
          width: '50vw',
        });
      }
      if (selectedDates[0].getTime() > options.defaultDate.getTime()) {
        startBtn.disabled = false;
        localStorage.setItem('selectedDate', `${selectedDates[0].getTime()}`);
      }
    },
    
  };

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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


flatpickr(datePicker, options);

// const setTime = () => {
//   const currentTime = new Date();
//   const result = selectedDates - currentTime;
//   console.log(result);

// }

// const appUpdate = () => {
//   const objDate = convertMs(ms);
//   // const usersTime = new Date(`${days.value} ${hours.value} ${minutes.value} ${seconds.value}`)
//   // days.textContent = `${addLeadingZero(objDate.days)}`;
//   // hours.textContent = `${addLeadingZero(objDate.hours)}`;
//   // minutes.textContent = `${addLeadingZero(objDate.minutes)}`;
//   // seconds.textContent = `${addLeadingZero(objDate.seconds)}`;
//   setTime()
// }

// setTime()

// const setTime = () => {
//   datePicker.textContent = eventName.value
//   usersTime = new Date(`${eventMonth.value} ${eventDat.value} ${eventYear.value}`)
//   convertMs()


// }


function addLeadingZero(e) {
  if (`${e}`.length === 1) {
    return (e = `${e}`.padStart(2, '0'));
  } else {
    return `${e}`;
  }
}

startBtn.addEventListener('click', () => {
  const intFunction = () => {
    const selectDate = localStorage.getItem('selectedDate');
    const dateToday = new Date();
    const getDate = dateToday.getTime();
    const ms = selectDate - getDate;
    const objDate = convertMs(ms);
     if (ms < 1000) {
      clearInterval(timerId);
     }
    const getSpan = () => {
      daysCount.textContent = `${addLeadingZero(objDate.days)}`;
      hoursCount.textContent = `${addLeadingZero(objDate.hours)}`;
      minutesCount.textContent = `${addLeadingZero(objDate.minutes)}`;
      secondsCount.textContent = `${addLeadingZero(objDate.seconds)}`;
    };
    getSpan();
  };
  const timerId = setInterval(intFunction, 1000);
});


