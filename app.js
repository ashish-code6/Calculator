// Initialize result and display
let res = '';
let display = document.querySelector('#display');
display.value = res;

// Function to update the display
function updateDisplay() {
    display.value = res;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonText = event.target.textContent;

    if (buttonText === 'AC') {
        res = '0'; // Reset to '0' for a cleaner start
    } else if (buttonText === 'DE') {
        res = res.slice(0, -1);
        if (res === '') {
            res = '0'; // Reset to '0' if empty
        }
    } else if (buttonText === '=') {
        try {
            res = String(eval(res));
        } catch {
            res = 'Error';
        }
    } else {
        res+=buttonText;
    }
    updateDisplay();
}

// Select all buttons and add event listeners
const buttons = document.querySelectorAll('.num-button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
