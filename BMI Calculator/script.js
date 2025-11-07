// Navigation between Home and About
const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const homeSection = document.getElementById('homeSection');
const aboutSection = document.getElementById('aboutSection');

homeBtn.addEventListener('click', () => {
  homeSection.style.display = 'block';
  aboutSection.style.display = 'none';
});

aboutBtn.addEventListener('click', () => {
  homeSection.style.display = 'none';
  aboutSection.style.display = 'block';
});

// BMI Calculation Logic
const form = document.getElementById('bmiForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const weightInput = document.querySelector('#weight');
  const heightInput = document.querySelector('#height');
  const result = document.querySelector('#result');

  // ✅ Always check if inputs exist
  if (!weightInput || !heightInput || !result) {
    console.error("Form elements not found. Check your HTML IDs.");
    return;
  }

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || weight <= 0) {
    result.textContent = 'Please provide a valid weight!';
    result.className = '';
    return;
  }

  if (isNaN(height) || height <= 0) {
    result.textContent = 'Please provide a valid height!';
    result.className = '';
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let status = '';

  if (bmi < 18.5) {
    status = 'Underweight';
    result.className = 'under';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = 'Normal weight';
    result.className = 'normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    status = 'Overweight';
    result.className = 'over';
  } else {
    status = 'Obese';
    result.className = 'obese';
  }

  result.innerHTML = `Your BMI is <strong>${bmi}</strong>, which is considered <strong>${status}</strong>.`;
});
