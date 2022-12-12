let numbers = [];

let button = document.querySelector('#generateButton');
button.onclick = generateNumbers;

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

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sum);