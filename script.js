// script.js

function convertToRoman(num) {
    // Define Roman numeral symbols and their corresponding values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    // Initialize the result string
    let result = '';

    // Iterate over the romanSymbols array
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];

        // Determine the number of times the symbol should be used
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

function convertNumber() {
    // Get the user input
    const inputNumber = parseInt(document.getElementById('numberInput').value, 10);
    const resultElement = document.getElementById('result');

    // Check for valid input
    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 100000) {
        resultElement.textContent = 'Please enter a number between 0 and 100000.';
        return;
    }

    // Compute the Roman numeral
    const result = convertToRoman(inputNumber);

    // Display the result
    resultElement.textContent = result;
}
