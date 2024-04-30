// Load the file system module
const fs = require("fs");

// ---- READING A FILE ----
// Reading a file asynchronously
fs.readFile("example.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log("File content:", data);
});

// Practice: Try reading a different file
// fs.readFile('YOUR_FILE_HERE', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log('File content:', data);
// });

// ---- WRITING TO A FILE ----
// Writing to a file asynchronously
fs.writeFile("output.txt", "Hello world!", (err) => {
  if (err) throw err;
  console.log("Write operation complete!");
});

// Practice: Write your own message to a new file
// fs.writeFile('NEW_FILE_NAME.txt', 'YOUR_MESSAGE_HERE', err => {
//     if (err) throw err;
//     console.log('Write operation complete!');
// });

// ---- APPENDING TO A FILE ----
// Appending text to an existing file
fs.appendFile("output.txt", " More text added.", function () {
  console.log("Append operation complete!");
});

// Practice: Append different text to the same file or a new one
// fs.appendFile('output.txt', ' ANOTHER_TEXT_TO_ADD', function() {
//     console.log('Append operation complete!');
// });

// ---- LISTING ALL FILES IN A DIRECTORY ----
// Listing all files in a directory
fs.readdir(".", (err, files) => {
  if (err) throw err;
  console.log("List of files:", files);
});

// Practice: Try listing files from a different directory
// fs.readdir('PATH_TO_DIRECTORY', (err, files) => {
//     if (err) throw err;
//     console.log('List of files:', files);
// });

// ---- COPYING A FILE ----
// Copying a file
fs.copyFile("example.txt", "copy_of_example.txt", (err) => {
  if (err) throw err;
  console.log("File copied successfully.");
});

// Practice: Copy a different file
// fs.copyFile('SOURCE_FILE.txt', 'NEW_DESTINATION_FILE.txt', (err) => {
//     if (err) throw err;
//     console.log('File copied successfully.');
// });

// ---- USING THE SPREAD OPERATOR ----
// Using the spread operator to pass multiple arguments
function printFileSizes(...files) {
  files.forEach((file) => {
    fs.stat(file, (err, stats) => {
      if (err) return console.log(err);
      console.log(`${file}: ${stats.size} bytes`);
    });
  });
}
printFileSizes("example.txt", "output.txt");

// Practice: Use the function with different files or more files
// printFileSizes('file1.txt', 'file2.txt', 'file3.txt');




/**
 * 
 * * Spread Operator and Anonymous Functions
 *
 */
// ---- USING THE SPREAD OPERATOR WITH ARRAYS ----
// Combining two arrays into one
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log('Combined array:', combinedArray);

// Practice: Try combining three arrays
// const array3 = [7, 8, 9];
// const newArray = [...array1, ...array2, ...array3];
// console.log('Newly combined array:', newArray);

// ---- USING THE SPREAD OPERATOR WITH OBJECTS ----
// Combining two objects
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { job: 'Developer', country: 'Canada' };
const combinedObject = {...obj1, ...obj2};
console.log('Combined object:', combinedObject);

// Practice: Try adding another object with additional properties
// const obj3 = { hobby: 'Photography', language: 'French' };
// const newObject = {...obj1, ...obj2, ...obj3};
// console.log('Extended object:', newObject);

// ---- USING ANONYMOUS FUNCTIONS WITH ARRAY METHODS ----
// Using map with an anonymous function to square numbers
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log('Squared numbers:', squaredNumbers);

// Practice: Use an anonymous function with filter to find even numbers
// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });
// console.log('Even numbers:', evenNumbers);

// ---- ANONYMOUS FUNCTIONS IN SETTIMEOUT ----
// Using setTimeout with an anonymous function
setTimeout(function() {
    console.log('This message is printed after 3 seconds');
}, 3000);

// Practice: Set a different timeout and print a custom message
// setTimeout(function() {
//     console.log('Custom timeout message');
// }, 5000);