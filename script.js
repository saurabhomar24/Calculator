function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard input support
document.addEventListener('keydown', function (event) {
  const key = event.key;
  const validKeys = '0123456789+-*/.=';
  
  if (validKeys.includes(key)) {
    if (key === '=') {
      calculate();
    } else {
      appendValue(key);
    }
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
