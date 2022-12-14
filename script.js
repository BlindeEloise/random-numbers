let numbers = [];

let button = document.querySelector('#generateButton');
button.onclick = generateNumbers();

function generateNumbers(min = -10, max = 10) {
    for (let i = 0; i < 10; i++) {
        let difference = max - min;
        let random = Math.random();
        random = Math.round(random * difference);
        random = random + min;
        numbers.push(random);
    }
    document.querySelector('#arrayInput').value = numbers;
}

// let numbers = [-10, 9, 4, -7, 2, 1, 7, 10, 4, 3];
// document.querySelector('#arrayInput').value = numbers;

let minNumber = Math.min.apply(null, numbers);
document.querySelector('#minimalNumber').value = minNumber;

let maxNumber = Math.max.apply(null, numbers);
document.querySelector('#maximalNumber').value = maxNumber;

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
}
document.querySelector('#sumNumber').value = sum;
averageNumber(sum);
}
sumNumbers(numbers);

function averageNumber(sum) {
    let average = sum / numbers.length;
document.querySelector('#averageNumber').value = average;
}

function multiplyNumbers(numbers) {
    let multiply = 1;
    for (let i = 0; i < numbers.length; i++) {
        multiply = multiply * numbers[i];
    }
    document.querySelector('#multiplication').value = multiply;
}
multiplyNumbers(numbers);



