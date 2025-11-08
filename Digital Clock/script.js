const clock = document.querySelector('clock')

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');


function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 => 12

  const hStr = String(hours).padStart(2, '0');
  const mStr = String(minutes).padStart(2, '0');
  const sStr = String(seconds).padStart(2, '0');

  hoursEl.textContent = hStr;
  minutesEl.textContent = mStr;
  secondsEl.textContent = sStr;
  ampmEl.textContent = ampm;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

updateClock();
setInterval(updateClock, 1000);

// const clock = document.querySelector('.clock');
// const date1 = document.querySelector('.date');


// setInterval(function(){
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
//     date1.innerHTML = date.toLocaleDateString();

// }, 1000);