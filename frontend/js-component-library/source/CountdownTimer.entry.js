// time calculation for days, hours, minutes and seconds
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

// set the date we are counting down to
let countDown = new Date("Aug 05, 2023 23:59:59").getTime();

// update the countdown every 1 second
let interval = setInterval(function () {
  // get today's date and time
  let now = new Date().getTime();
  // find the distance between now and the countdown date
  let distance = countDown - now;
  // display the result for every element with the designated id selector
  (document.getElementById("days").innerText = Math.floor(distance / day)),
    (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
    (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
    (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));
}, second);
