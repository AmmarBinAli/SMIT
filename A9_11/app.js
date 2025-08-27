// const city =  prompt("Enter Your City Name")

// if (city === "karachi") {
//     alert("Welcome to city of light")
// }else{
//     alert("Hello!")
// }

// ----------------------------------------------

// const gender = prompt("Enter your Gender")

// if (gender.toLowerCase().trim() === "male") {
//     alert("Good Morning Sir!")
// }else if (gender.toLowerCase().trim() === "female") {
//     alert("Good Morning Ma'am!")
// }

// ---------------------------------------------

// const color = prompt("Enter Traffic Signal Color")

// if (color.toLowerCase().trim() === "red") {
//     alert("Must Stop!")
// }else if(color.toLowerCase().trim() === "yellow"){
//     alert("Ready to Move")
// }else if (color.toLowerCase().trim() === "green") {
//     alert("Move now")
// }

// -----------------------------------------------

// const fuel = prompt("How much fuel remaining in Litres")

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car")
// }else{
//     alert("Enjoy your journey!")
// }

// -------------------------------------------------

// const h1 = document.createElement("h1");
// h1.innerHTML = "MarkSheet";
// document.body.appendChild(h1);
// document.body.style.textAlign = "center";
// document.body.style.border = "2px solid black";

// const csMarks = +prompt("Enter Computer Science Marks");
// const mathMarks = +prompt("Enter Math Marks");
// const engMarks = +prompt("Enter English Marks");

// const obtMarks = csMarks + mathMarks + engMarks;
// const totalMarks = 300;
// const percentage = ((obtMarks * 100) / totalMarks).toFixed(2);

// function marksheet() {
//     document.writeln(`Total Marks : ${totalMarks}<br />`);
//     document.writeln(`Marks Obtained : ${obtMarks}<br />`);
//     document.writeln(`Percentage : ${percentage}%<br />`);
// }

// marksheet();

// if (percentage >= 80) {
//     document.writeln("Grade : A-One<br />");
//     document.writeln("Remarks : Excellent<br />");
// } else if (percentage >= 70) {
//     document.writeln("Grade : A<br />");
//     document.writeln("Remarks : Good<br />");
// } else if (percentage >= 60) {
//     document.writeln("Grade : B<br />");
//     document.writeln("Remarks : You need to improve<br />");
// } else {
//     document.writeln("Grade : Fail<br />");
//     document.writeln("Remarks : Sorry<br />");
// }

//-----------------------------------------------

// const secretNum = Math.floor(Math.random() * 10) + 1; 
// const guessNum = +prompt("Guess the secret number (between 1 and 10)");

// if (guessNum === secretNum) {
//     alert("Bingo! Correct Answer");
// } else if (Math.abs(guessNum - secretNum) === 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Please try again!");
// }

// --------------------------------------------------

// const userNum = +prompt("Enter Your Number");

// if(userNum%3 === 0){
//     alert("Your Number is Divisible by 3")
// }else{
//     alert("Your Number is Not Divisible by 3")
// }

// --------------------------------------------------

// const userNum = +prompt("Enter Your Number")

// if(userNum%2 === 0){
//     alert("The given Number is Even")
// }else{
//     alert("The given number is Odd")
// }

// ------------------------------------------------

// const num1 = +prompt("Enter first number:");
// const num2 = +prompt("Enter second number:");
// const operation = prompt("Enter operation (+, -, *, /, %):");

// let result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error! Division by zero not allowed.";
//     }
// } else if (operation === "%") {
//     if (num2 !== 0) {
//         result = num1 % num2;
//     } else {
//         result = "Error! Modulus by zero not allowed.";
//     }
// } else {
//     result = "Invalid operation!";
// }

// alert(`Result: ${result}`);
