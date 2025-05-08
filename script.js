function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

function convertNumber() {
    const inputNumber = parseInt(document.getElementById('numberInput').value, 10);
    const resultElement = document.getElementById('result');

    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 100000) {
        resultElement.textContent = 'Please enter a number between 0 and 100000.';
        return;
    }

    if (inputNumber === 0) {
        resultElement.textContent = 'N/A (Romans did not have a numeral for 0)';
        return;
    }

    const result = convertToRoman(inputNumber);
    resultElement.textContent = result;
}
