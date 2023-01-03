/**
 * main.js
 * Foundation Fundamentals Part 1
 */

console.log('--------------------------------');
console.log('Foundation Fundamentals Part 1');
console.log('--------------------------------');
console.log(23+97);

let sumTotal = 0;
let myValues = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < myValues.length; i++) {
    sumTotal += myValues[i];
}
console.log(sumTotal);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;
console.log(percentage);

const button = document.querySelector("button");

let greeting = () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to meet you!`);
}

button.addEventListener("click", greeting);

console.log('--------------------------------');
console.log('Foundation Fundamentals Part 2');
console.log('--------------------------------');
// String Methods
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let message = 'I\'m joining Google!';
console.log(alphabet.length);
console.log(alphabet.slice(2,alphabet.length));
console.log(message.replace("Google", "Microsoft"));
console.log(message.toUpperCase());
let userAge = 31;
let checkAge = (userAge) => {
    let ageLimit = 35;
    let ageResponse = '';
    if (userAge > ageLimit) {
        ageResponse = "You are too old!";
    } else if (userAge === ageLimit) {
        ageResponse = "Let's purchase that condo!";
    }
    else {
        ageResponse = "You are not too old!";
    }
    return ageResponse;
};

console.log(checkAge(userAge));
console.log(checkAge(35));
// Case Practice
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    switch (choice) {
        case 'sunny':
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
        break;
        case 'rainy':
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
        break;
        case 'snowing':
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
        break;
        case 'overcast':
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
        break;
        default:
        para.textContent = '';
    }
}
//arrow function practice
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);