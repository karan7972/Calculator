const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      handleInput(value);
    }
  });
});

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equals').addEventListener('click', calculateResult);

function handleInput(value) {
  if (['+', '-', '*', '/'].includes(value)) {
    operator = value;
    previousInput = currentInput;
    currentInput = '';
  } else {
    currentInput += value;
  }
  updateDisplay(currentInput || operator || '0');
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('0');
}

function calculateResult() {
  if (operator && previousInput && currentInput) {
    const result = eval(`${previousInput} ${operator} ${currentInput}`);
    updateDisplay(result);
    currentInput = result;
    previousInput = '';
    operator = null;
  }
}

function updateDisplay(value) {
  display.textContent = value;
}
