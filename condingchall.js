/* c
onsole.log("Coding challenge");
// test data 1
console.log("First data");
let marksWeight = 78;
let marksHeight = 1.69;

let johnsWeight = 92;
let johnHeight = 1.95;

let marksBMI = marksWeight / marksHeight **2
let johnsBMI = johnsWeight / johnHeight **2
console.log(marksBMI)
console.log(johnsBMI)
let markHigherBMI = marksBMI > johnsBMI
console.log(markHigherBMI)

/* test data 2
console.log("Second data");

let marksWeight2 = 95;
let marksHeight2 = 1.88;

let johnsWeight2 = 85;
let johnHeight2 = 1.76;

let marksBMI2 = marksWeight2 / marksHeight2 **2
let johnsBMI2 = johnsWeight2 / johnHeight2 **2
console.log(marksBMI2)
console.log(johnsBMI2)
let markHigherBMI2 = marksBMI2 > johnsBMI2
console.log(markHigherBMI2)

const firstName = "Jacques"
const job = "programmer"
const birthYear = 2002
const year = 2023

const Jacques = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job

console.log(Jacques)

const JacquesNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`

console.log(JacquesNew) 

let age = 19;

if (age >= 18) {
  console.log(`You can drive 😁 🚗`);
} else {
  let yearsLeft = 18 - age;
  console.log(`You can't drive 😕 🚗 \n${yearsLeft} years left`);
}

let birthYear = 1999;

let century;
let end;

if (birthYear <= 2000) {
  century = 20;
  end = "th";
} else {
  century = 21;
  end = "st";
}

console.log(`Person was born in the ${century}${end} century`);


// challenge 2

console.log("challenge 2");
let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnHeight = 1.95;

let marksBMI = marksWeight / marksHeight **2
let johnsBMI = johnsWeight / johnHeight **2



let marksWeight2 = 95;
let marksHeight2 = 1.88;
let johnsWeight2 = 85;
let johnHeight2 = 1.76;

let marksBMI2 = marksWeight2 / marksHeight2 **2
let johnsBMI2 = johnsWeight2 / johnHeight2 **2




if (marksBMI > johnsBMI){
    console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})!`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI})!`)
}

let inputYear = "2002";
console.log(typeof inputYear);

inputYear = Number(inputYear);

console.log(inputYear + 18);

console.log(typeof inputYear);


let inputNumber = "2002";

inputNumber = Number(inputNumber);

console.log(20223 - inputNumber);


console.log(Boolean(0));
console.log(Boolean(9));
console.log(Boolean("jacques"));
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(false));
console.log(Boolean({}));
console.log(Boolean(undefined));


const money = 500;

if (money) {
  console.log(`The person has ${money} moneys`);
} else {
  console.log(`The person has no money`);
}


const age = 11;

if (age === 18) {
  console.log("you just became an adult");
} else if (age < 18) {
  console.log('you are not an adult')
} 



let favoriteNumber = Number(prompt("What is your favorite number"));

if (favoriteNumber === 23) {
  console.log(`Indeed ${favoriteNumber} is a cool number`);
} else if (favoriteNumber !== 23) {
  console.log(`Indeed ${favoriteNumber} is a cool number too`);
} else {
  console.log(`${favoriteNumber} is not 23 or 7`);
}


let age = prompt('How old are you?')

if (age !== 18){
  console.log('Age is less than 18')
}

const hasDriversLicense = true;

const hasGoodVision = true;

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('You can drive')
}*/

// Two gymnastics teams that compete against each other 3 times,
// the winner with the highest average score wins the trophy

// 1 - Calculate the average score for each team using the data below
// 2 - Compare the teams average scores to determine the winner of the competition and print it to the console.
// dont forget that there can be a draw so test for that as well

// DATA: Dolphins score 96, 108 and 89
// Koalas score 88, 91 and 110
let dolphinsAverage = (96 + 108 + 90) / 3;
let koalasAverage = (88 + 91 + 110) / 3;

console.log(dolphinsAverage);
console.log(koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins wins!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas wins!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("Draw!");
} else {
  console.log("No team wins the trophy");
}


// DATA 2:
let dolphinsAverage2 = (97 + 112 + 101) / 3;
let koalasAverage2 = (109 + 95 + 123) / 3;

console.log(dolphinsAverage2);
console.log(koalasAverage2);

if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
  console.log("Dolphins wins!");
} else if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100) {
  console.log("Koalas wins!");
} else if (dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 >= 100 && dolphinsAverage2 >= 100) {
  console.log("Draw!");
} else {
  console.log("No team wins the trophy");
}


// DATA 3:
let dolphinsAverage3 = (97 + 112 + 101) / 3;
let koalasAverage3 = (109 + 95 + 106) / 3;

console.log(dolphinsAverage3);
console.log(koalasAverage3);

if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
  console.log("Dolphins wins!");
} else if (koalasAverage3 > dolphinsAverage3 && koalasAverage3 >= 100) {
  console.log("Koalas wins!");
} else if (dolphinsAverage3 === koalasAverage3 && dolphinsAverage3 >= 100 && koalasAverage3 >= 100) {
  console.log("Draw!");
} else {
  console.log("No team wins the trophy");
}



