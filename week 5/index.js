// your code goes here
let display = document.getElementById("display");
let currentInput = "";
let resetDisplay = false;

function appendValue(value) {
  if (value === "+/-") {
    if (currentInput) {
      if (currentInput.startsWith("-")) {
        currentInput = currentInput.substring(1);
      } else {
        currentInput = "-" + currentInput;
      }
    }
  } else {
    if (resetDisplay) {
      currentInput = "";
      resetDisplay = false;
    }
    currentInput += value;
  }
  display.innerText = currentInput || "0";
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
    resetDisplay = true;
  } catch {
    display.innerText = "Error";
    currentInput = "";
  }
}
