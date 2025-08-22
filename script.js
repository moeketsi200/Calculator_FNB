let currentInput = '';

function press(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  document.getElementById('display').value = currentInput;
}

function half() {
  try {
    currentInput = (eval(currentInput) / 2).toString();
  } catch {
    currentInput = 'Error';
  }
  document.getElementById('display').value = currentInput;
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('display').value = currentInput;
}

function switchMode(mode) {
  document.getElementById('standard').classList.add('hidden');
  document.getElementById('scientific').classList.add('hidden');
  document.getElementById('measurement').classList.add('hidden');

  document.getElementById(mode).classList.remove('hidden');

  const tabs = document.querySelectorAll('.mode-tabs button');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
}

function convert() {
  const value = parseFloat(document.getElementById('convertInput').value);
  const from = document.getElementById('unitFrom').value;
  const to = document.getElementById('unitTo').value;
  let result = 0;

  if (from === to) {
    result = value;
  } else if (from === 'kg' && to === 'lb') {
    result = value * 2.20462;
  } else if (from === 'lb' && to === 'kg') {
    result = value / 2.20462;
  } else if (from === 'm' && to === 'ft') {
    result = value * 3.28084;
  } else if (from === 'ft' && to === 'm') {
    result = value / 3.28084;
  } else {
    result = 'Invalid';
  }

  document.getElementById('convertResult').value = result;
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}