let display = document.getElementById('display');
let outputScreen = document.getElementById('output-screen');

function appendToDisplay(value) {
    display.value += value;
}
function clearNumber(value){
    display.value -=value;
    outputScreen.innerText=appendToDisplay;
}

function clearDisplay() {
    display.value = '';
    outputScreen.innerText = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value=result;
      // Display the result in the output screen
         
    } catch (error) {
        outputScreen.innerText = 'Error: Invalid expression';
    }
}
