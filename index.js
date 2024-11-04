// ==============================
//        Arrays
// ==============================

const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];

const numbers = [5, 8, 12, 20, 3];

const mixedNumbers = [3, -5, 12, -1, 8, -6];

const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

const temperatures = [15, 22, 19, 30, 28, 18, 25];

// ==============================
//        Exercises  1-10
// ==============================

// ----- Exercise 1 -----
console.log(names[3]); // Maradona is logged because the index of an array always starts at 0

// ----- Exercise 2 -----
const pushLength = names.push("Drogba");
console.log(pushLength); // The return value is the arrays updated length.

// ----- Exercise 3 -----
const unshiftLength = names.unshift("Figo");
console.log(unshiftLength); // The return value is the arrays updated length again.

// ----- Exercise 4 -----
const popReturn = names.pop();
console.log(popReturn); // Return value är elementet (namnet) som togs bort.

// ----- Exercise 5 -----
const nameToBeMoved = names.pop(); // Pops returnvalue is the removed entry, i save this value in the variable "nameToBeMoved".
names.unshift(nameToBeMoved); // I unshift "nameToBeMoved" wich now is the name i just removed.
console.log(names); // I log the new value to confirm that everything went well. (I chose this method because we had yet to expand upon splice, and it felt simple and clean.)

// ----- Exercise 6 -----
// We are "allowed" to modify a constant array because the variable only refers the adress of the registry, not the entries.

// ----- Exercise 7 -----
const includesReturn = players.includes("Messi");
console.log(includesReturn); // We receive the boolean value of "false" because the name "Messi" isn't in this array.

// ----- Exercise 8 -----
const checkForZlatan = players.includes("Zlatan"); // I do a "players.includes" for the entry "Zlatan" and save the boolean return value in the variable "checkForZlatan"
if (checkForZlatan == true) {
  // If the result is positive, log alternative 1.
  console.log("Zlatan är med i listan!");
} else {
  // Else log alt. 2.
  console.log("Zlatan är inte med i listan.");
}

// ----- Exercise 9 -----
const indexOfReturn = players.indexOf("Maradona");
console.log(indexOfReturn); // The console logs 5 because "Maradona" is element #5 in the array, starting from index 0.

// ----- Exercise 10 -----
const checkForMessi = players.indexOf("Messi");
console.log(checkForMessi); // the returnvalue is negative,"-1", that's just how the method works. you can use it in if checks if you word it e.g. "if(checkForMessi == -1)"

// ==============================
//        Exercises  11-20
// ==============================

// ----- Exercise 11 -----
const playersJoin = players.join(", ");
console.log(playersJoin);

// ----- Exercise 12 -----
const playersJoinDash = players.join(" - ");
console.log(playersJoinDash); // Same as excercise #12 but with a different separator.

// ----- Exercise 13 -----
const spliceReturn = players.splice(1, 2); // Creates a variable "spliceReturn", use splice starting at 1 (second value in the array), remove 2 elements.
console.log(spliceReturn); // Loggar return.

// ----- Exercise 14 -----
const spliceAddReturn = players.splice(2, 0, "Ronaldinho");
console.log(spliceAddReturn + players); // splice returns nothing because nothing was removed, "Ronaldinho" was added, Romario and Maradona was moved 1 index each.

// ----- Exercise 15 -----
const indexOfRonaldo = players.indexOf("Ronaldo"); // Returns Ronaldos index in the variable "indexOfRonaldo"
players.splice(indexOfRonaldo, 1); // Removes 1 element on the index where Ronaldo is registered.
console.log(players); // Logs remaining players to show that "Ronaldo" is gone.

// ----- Exercise 16 -----
const newArray = players.slice(0, 3); // Creates a "shallow" copy of the first three entries in the "players"-array and stores them in the "newArray" variable as an array.
console.log(newArray); // Console logs the newArray to double check. (Making shallow copies the resulting copy will follow the original copy, but not the other way around.)

// ----- Exercise 17 -----
const newArray2 = players.slice(2, players.length); // Creates a new array called "newArray2", slicing from index 2 to the max index of the array.
console.log(newArray2); // Logs the new array. The new array contains the two players at the end, the original array remains untouched.

// ----- Exercise 18 -----
const updatedPlayers = players.with(1, "Mbappé"); // Creates a new array called "updatedPlayers" by copying the "players"-array and replacing the player indexed 1 with "Mbappé".
console.log(updatedPlayers); // Logs the "updatedPlayers"-array. The old array remains unchanged.

// ----- Exercise 19 -----
for (let i = 0; i < numbers.length; i++) {
  // ^ Declares the "i" variable to keep track of our index count. We start at 0 and as long as we are under the lenght value of "numbers" we want to keep incrementing index of "i" by 1 to keep printing the next index value of "numbers".
  console.log(numbers[i]); // log the "numbers"- entry with every update of the "i"-value.
}

// ----- Exercise 20 -----
let sum = 0; // create a variable to hold our sum.
for (let i = 0; i < numbers.length; i++) {
  // Use the same loop as earlier to count our index.
  sum += numbers[i]; // for each increase of index("i") add the corresponding numbers entry to the sum.
}
console.log(sum); // Log our sum.

// ==============================
//        Exercises  21-30
// ==============================

// ----- Exercise 21 -----
let largest = numbers[0]; // Start with the first element as the largest
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]; // Update if a larger number is found.
  }
}
console.log(largest + " is the largest number"); // Log the largest number after the loop is done.

// ----- Exercise 22 -----
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  // Standard for loop to increment index by 1 until we reach numbers.length.
  doubledNumbers.push(numbers[i] * 2); // Push to new array and multiply by 2 for each number in the first array.
}
console.log(doubledNumbers); // Log the new array.

// ----- Exercise 23 -----
let s = 0; // create a variable to hold our sum.
for (let i = 0; i < numbers.length; i++) {
  s += numbers[i]; // for each increase of index("i") add the corresponding numbers entry to the sum.
}
let average = s / numbers.length;
console.log(average); // Log our sum.

// ----- Exercise 24 -----
let smallest = numbers[0]; // Start with the first element as the smallest.
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i]; // Update if a smaller number is found.
  }
}
console.log(smallest + " is the smallest number"); // Log the smallest number after the loop is done.

// ----- Exercise 25 -----
const positiveNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (mixedNumbers[i] > 0) {
    // if number is positive.
    positiveNumbers.push(mixedNumbers[i]); // push the number to "mixedNumbers"-array
  }
}
console.log(positiveNumbers);

// ----- Exercise 26 -----
for (const number of mixedNumbers) {
  // Goes through every element in "mixedNumbers" and assigns it to the numbers variable each iteration.
  if (number > 0) {
    // Check if the number is positive.
    console.log(number); // Log the number if positive.
  }
}

// ----- Exercise 27 -----
let i = 0;
while (i < numbers.length) {
  // while index is below length of numbers.
  if (numbers[i] > 10) {
    break; // If the loop number exceeds 10, break loop.
  }
  console.log(numbers[i]);
  i++; // Move on to the next element.
}

// ----- Exercise 28 -----
let count = 0;
let x = 0;
while (x < mixedNumbers.length) {
  if (mixedNumbers[x] < 0) {
    count++; // Increase "count" if the number is a negative.
  }
  x++; // Step up to the next element.
}
console.log(count); //log "count"

// ----- Exercise 29 -----
for (let i = 0; i < words.length; i++) {
  console.log(`Words: ${words[i]}, Length: ${words[i].length} Letters`);
}

// ----- Exercise 30 -----
let firstLetter = "";
for (let i = 0; i < words.length; i++) {
  firstLetter += words[i][0]; // Add the first letter of each word. ([i] is for the index of the word we want to target, [0] is the index of the first letter in the word.)
}
console.log(firstLetter);

// ==============================
//        Exercises  31-35
// ==============================

// ----- Exercise 31 -----
let sum2 = 0;
let ind = 0;
while (ind < numbers.length && sum2 < 25) {
  sum2 += numbers[ind]; // Add current number to sum.
  console.log(numbers[ind]); // Log current number.
  ind++; // Move on to next number.
}

// ----- Exercise 32 -----
let sum3 = 0;
for (const number of mixedNumbers) {
  sum3 += number; // Add each number to sum3.
}
console.log(sum3); // Log sum3.

// ----- Exercise 33 -----
let maxTemp = temperatures[0]; // Start with the first temperature as the current "highscore"
let maxTempIndex = 0; // Add another variable to keep track of the index.
for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > maxTemp) {
    // If the temperature is higher than the current highscore.
    maxTemp = temperatures[i]; // Update the value of MaxTemp
    maxTempIndex = i; // Update the index.
  }
}
console.log("MaxTemp:", maxTemp); //log our results.
console.log("Index for MaxTemp:", maxTempIndex);

// ----- Exercise 34 -----
let countLetters = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    countLetters++; // Increase counter if more than five letters exist in the word.
  }
}
console.log("Words with more than five letters:", countLetters);

// ----- Exercise 35 -----
let index = 0;
while (index < numbers.length) {
  if (numbers[index] % 2 !== 0) {
    // Check for an odd number.
    console.log("First odd number:", numbers[index]); // Log the odd number.
    break; // Break loop.
  }
  index++; // Move on to next index.
}
