//define active function
function active(elementID) {
  let element = document.querySelector(toString(elementID));
  element.classList.toggle("active");
}

//define time function
function dayActive() {
  //active the day
  const date = new Date();
  var day = date.getDay();
  const daysList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  var preDay = daysList[day - 1 > 0 ? day - 1 : 6];
  var day = daysList[day];

  if (document.getElementById(preDay).classList.contains("active")) {
    document.getElementById(preDay).classList.toggle("active");
    document.getElementById(day).classList.toggle("active");
  } else if (
    document.getElementById(day).classList.contains("active") == !true
  ) {
    document.getElementById(day).classList.toggle("active");
  }
}

function time() {
  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const clock = document.querySelector(".clock");

  clock.textContent = hours + ":" + minutes + ":" + seconds;
}

function time12() {
  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const ampm = hours > 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  const clock = document.querySelector(".clock");
  clock.textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
}

//activate the day
dayActive();
window.setInterval(dayActive, 1000);

//activate the clock
time();
var interval = window.setInterval(time, 1000);

//choosing the format
const h12 = document.querySelector("#h12");
const h24 = document.querySelector("#h24");

h12.addEventListener("click", () => {
  if (h12.classList.contains("active")) {
  } else {
    h12.classList.toggle("active");
    h24.classList.toggle("active");
    time12();
    clearInterval(interval);
    interval = window.setInterval(time12, 1000);
  }
});
h24.addEventListener("click", () => {
  if (h24.classList.contains("active")) {
  } else {
    h24.classList.toggle("active");
    h12.classList.toggle("active");
    time();
    clearInterval(interval);
    interval = window.setInterval(time, 1000);
  }
});
