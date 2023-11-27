// Event listener for button clicks
document.querySelector('.buttons').addEventListener('click', function (e) {
    if (e.target.classList.contains('button')) {
        const value = e.target.getAttribute('data-value');
        handleButtonClick(value);
    }
});

// Action functions
function handleButtonClick(value) {
    const display = document.getElementById('display');

    switch (value) {
        case 'C':
            display.value = '';
            break;
        case 'Del':
            display.value = display.value.slice(0, -1);
            break;
        case '=':
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
            break;
        default:
            display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
