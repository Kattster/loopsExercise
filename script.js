// 1. Use a For Loop to count from 1 to 7 and have each number display in the console/terminal (You will need a console log for this)
for (i = 1; i < 8; i++){
    console.log(i);
  }

// 2. Use a For Loop to count from 5 to 25 by 4 (Ex: 5, 9, 13, etc.) and have each number display in the console/terminal (You will need a console log for this)
for (i = 5; i < 26; i+=4){
    console.log(i);
  }

// 3a. Create a const variable named wizards and set the value of the variable to the following array items "Harry Potter", "Hermione Granger", and "Ron Weasley"
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

// 3b. Use a For Of Loop to have each name display in the console/terminal (You will need a console log for this)
for (names of wizards){
    console.log(names);
};

// 4a. Create a let variable called harryPotterMovies and set the value to 0 (That's a zero not O).
let harryPotterMovies = 0

// 4b. Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until the harryPotterMovies variable has a value of 8.
while (harryPotterMovies <= 7){
    harryPotterMovies++;
    console.log(harryPotterMovies);
}

// 4c. After the while loop in your file create a console log to display the value of the harryPotterMovies variable in the terminal (The value should be 8)
console.log(harryPotterMovies);

// BONUS //

// 5a. Create a const variable named hogwartsHouses and set the value of the variable to the following array items "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin".
const hogwartsHouses = [
    "Gryffindor", 
    "Hufflepuff", 
    "Ravenclaw", 
    "Slytherin"
];

// 5b. Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time (You will need a console log for this).

console.log(`===========`);

for (list of hogwartsHouses){ 
    for (letters of list){ 
        console.log(letters);      
    }; 
    console.log(`===========`);    
        }

// 6a. Create a const variable named quote and set the value of the variable to the following array items "Yer", "A", "Wizard", "Harry".
const quote = [
    "Yer", 
    "A", 
    "Wizard", 
    "Harry"
];

// 6b. Using a loop (You can decide which one you want to use) and the QUOTE array have the message "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words when it is displayed. Also, You will need a console log for this)(HINT: You will need to create another variable)
// let hagrid = quote.join(" ");

// for (hagrid of quote) {
// console.log(hagrid.join(''));
// };

let hagrid = ' ';
for (i = 0; i < quote.length; i++) {
    hagrid += `${quote [i]} `
}

console.log(hagrid);

// 7. Create a For Loop that displays numbers 1 to 25 (AKA Counts from 1 to 25) in the terminal/console when the file is run. However, for numbers that are multiples of 3 (3, 6, 9, etc.) have the string value of "Expecto" display instead of the number. Also, for numbers that are multiples of 5 (5, 10, 15, etc.) have the string value of "Patronum" display instead of the number. Finally, for numbers that are multiples of 3 & 5 have the string value of "Expecto Patronum" display instead of the number.         Inspired by FizzBuzz

// for (i = 1; i <= 25; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(`Expecto Patronum`);
//         else if (i % 3 === 0) {
//             console.log(`Expecto`);
//             else if (i % 3 === 0) {
//                 console.log(`Patronum`);
//                 else {
//                     console.log(`Expecto Patronum`);
//                 }
//             }
//         }
//     }
// }