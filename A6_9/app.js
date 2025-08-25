// let a = 10

// document.writeln("Result:" + "<br/>")
// document.writeln(`the value of  a is ${a}`+"<br />")
// document.writeln("..........................................."+"<br />"+"<br />")

// document.writeln(`The value of ++a is ${++a}`+"<br />")
// document.writeln(`Now the value of a is ${a}`+"<br />"+"<br />")

// document.writeln(`The value of a++ is ${a++}`+"<br />")
// document.writeln(`Now the value of a is ${a}`+"<br />"+"<br />")

// document.writeln(`The value of --a is ${--a}`+"<br />")
// document.writeln(`Now the value of a is ${a}`+"<br />"+"<br />")

// document.writeln(`The value of a-- is ${a--}` + "<br />")
// document.writeln(`Now the value of a is ${a}` + "<br />" + "<br />")


// let a = 2, b = 1
// let result = --a - --b + ++b + b--;

// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// document.writeln(`a is ${a}` + "<br/ >")
// document.writeln(`b is ${b}` + "<br/ >")
// document.writeln(`result is ${result}` + "<br/ >")


// let name =  prompt("Enter your name")
// alert(`Good Morning ${name}`)


// let number = prompt("Enter a number to show its multiplication table", "5");
// for (let i = 1; i <= 10; i++) {
//     document.writeln(`${number} x ${i} = ${number * i}` + "<br />")
// }


// let sub1 = prompt("Enter first subject name")
// let sub2 = prompt("Enter second subject name")
// let sub3 = prompt("Enter third subject name")

// let totalMarks = 100;

// let mark1 = prompt(`Enter ${sub1} marks`, "0");
// let mark2 = prompt(`Enter ${sub2} marks`, "0");
// let mark3 = prompt(`Enter ${sub3} marks`, "0");

// let fullMarks = totalMarks * 3;
// let obtainedMarks = parseInt(mark1) + parseInt(mark2) + parseInt(mark3);
// let percentage = (obtainedMarks / fullMarks) * 100;

// document.writeln("<table>");
// document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.writeln(`<tr><td>${sub1}</td><td>${totalMarks}</td><td>${mark1}</td><td>${(mark1 / totalMarks) * 100}%</td></tr>`);
// document.writeln(`<tr><td>${sub2}</td><td>${totalMarks}</td><td>${mark2}</td><td>${(mark2 / totalMarks) * 100}%</td></tr>`);
// document.writeln(`<tr><td>${sub3}</td><td>${totalMarks}</td><td>${mark3}</td><td>${(mark3 / totalMarks) * 100}%</td></tr>`);
// document.writeln("<tr><td> </td><td> </td><td> </td><td> </td></tr>");
// document.writeln(`<tr><td>Total</td><td>${fullMarks}</td><td>${obtainedMarks}</td><td>${percentage}%</td></tr>`);
// document.writeln("</table>");