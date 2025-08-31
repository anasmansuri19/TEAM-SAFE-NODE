const marks = [79, 98, 82, 76, 88];

let highest = marks[0]; // assume first element is highest

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
}

console.log("Highest Marks:", highest);
// for running the code write "node script.js" and press enter in the terminal
// Output: Highest Marks: 92