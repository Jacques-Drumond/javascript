// operators
const currentYear = 2037;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;

console.log(ageJonas, ageSarah);

const firstName = "jacques";
const lastName = "drumond";

console.log(firstName + " " + lastName);

let x = 10 + 5; // 15

x += 10; // 25
x *= 10;
x++;
x--;

console.log(ageJonas < ageSarah);

if (currentYear - 2002 >= 18) {
  console.log("Adult");
} else {
  console.log("Not adult");
}


let averageAge = (ageJonas + ageSarah) / 2

console.log(averageAge)