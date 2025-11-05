const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const output = document.getElementById('output');
const resetBtn = document.getElementById('resetBtn');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const color = e.target.id;
    body.style.backgroundColor = color;
    output.textContent = `Background color changed to: ${color.toUpperCase()}`;
  });
});

resetBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'white';
  output.textContent = 'Background reset to WHITE';
});
