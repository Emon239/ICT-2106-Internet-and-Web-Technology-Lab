var a = 10;
var a = 12; // Re-declared with var — allowed
document.writeln(a + "<br>"); // Output: 12

let b = 100;
document.writeln(b + "<br>"); // Output: 100

let c = "Emon";
let d = 23.5567;

// Check types
document.writeln(typeof a + "<br>"); // number
document.writeln(typeof b + "<br>"); // number
document.writeln(typeof c + "<br>"); // string
document.writeln(typeof d + "<br>"); // number

// Type casting 
// Number to string 
let num = 456;
let str = num.toString();
document.writeln(typeof str + "<br>"); // string

// String to number 
let x = "100";
x = parseInt(x);
document.writeln(typeof x + "<br>"); // number

// Using toFixed and toPrecision
let y = "3.1416";
document.writeln("Original string: " + y + "<br>");
y = parseFloat(y); // Convert to number

let v1 = y.toFixed(2);       // "3.14"
let v2 = y.toPrecision(3);   // "3.14"

document.writeln("Using toFixed(2): " + v1 + "<br>");
document.writeln("Using toPrecision(3): " + v2 + "<br>");

// User Input
let StuFirstName = prompt("Enter your first name:");
let StuAge = prompt("Enter your age:");

// Type casting age from string to number
StuAge = parseInt(StuAge);

document.writeln("<span style='color: green;'>Student Name: " + StuFirstName + "</span><br>");
document.writeln("<span style='color: blue;'>Student Age: " + StuAge + "</span><br>");
document.writeln("Type of Age: " + typeof StuAge + "<br>");

// Now assign values to e and m (example: use StuAge and d for demo)
let e = parseFloat(prompt("Enter the first number (e):"));
  let m = parseFloat(prompt("Enter the second number (m):"));

let sum = e + m;
let subtraction = e - m;
let multiplication = e * m;
let division = e / m;

document.writeln(`<b style="color: red;">${e} + ${m} =</b> <span style="color: green;">${sum.toFixed(2)}</span><br>`);
document.writeln(`<b style="color: red;">${e} - ${m} =</b> <span style="color: green;">${subtraction.toFixed(2)}</span><br>`);
document.writeln(`<b style="color: red;">${e} * ${m} =</b> <span style="color: green;">${multiplication.toFixed(2)}</span><br>`);
document.writeln(`<b style="color: red;">${e} / ${m} =</b> <span style="color: green;">${division.toFixed(2)}</span><br>`);
