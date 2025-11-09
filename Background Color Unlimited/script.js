function randomColor() {
  const hex = "0123456789ABCDEF";
  let colors = "#";

  for (let i = 0; i < 6; i++) {
    colors += hex[Math.floor(Math.random() * 16)];
  }
  return colors;
}

let intervalId;

function startChangingColor() {
  // Prevent multiple intervals
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
}

function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null; // reset
}

document.querySelector("#startBtn").addEventListener("click", startChangingColor);
document.querySelector("#stopBtn").addEventListener("click", stopChangingColor);
