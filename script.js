let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = currentInput || '0';
}

function appendNumber(num) {
  if (num === '.' && currentInput.includes('.')) return;
  currentInput += num;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') compute();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
    default: return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function clearAll() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function toggleSign() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

function percentage() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const number = btn.dataset.number;
    const action = btn.dataset.action;
    const value = btn.dataset.value;

    if (number !== undefined) {
      appendNumber(number);
    } else if (action === 'clear') {
      clearAll();
    } else if (action === 'toggle') {
      toggleSign();
    } else if (action === 'percent') {
      percentage();
    } else if (action === 'operator') {
      setOperator(value);
    } else if (action === 'equals') {
      compute();
    }
  });
});

updateDisplay();
