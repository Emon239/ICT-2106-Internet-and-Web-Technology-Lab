// ===== Array Example =====
let fruits = ["Apple", "Banana", "Mango"];
document.getElementById("arrayOutput").innerHTML =
  "<h2>Array</h2>" + fruits.join(", ");

// ===== for loop =====
let loopText = "<h2>for Loop (Numbers 1 to 5)</h2>";
for (let i = 1; i <= 5; i++) {
  loopText += "Number: " + i + "<br>";
}
document.getElementById("loopOutput").innerHTML = loopText;

// ===== forEach loop =====
let foreachText = "<h2>forEach Loop (Fruits)</h2>";
fruits.forEach((fruit, index) => {
  foreachText += `${index + 1}. ${fruit}<br>`;
});
document.getElementById("foreachOutput").innerHTML = foreachText;

// ===== Object Example =====
let person = {
  name: "Emon",
  age: 21,
  university: "Jahangirnagar University",
  department: "IIT"
};

let objectText = "<h2>Object</h2>";
for (let key in person) {
  objectText += `${key}: ${person[key]}<br>`;
}
document.getElementById("objectOutput").innerHTML = objectText;

// ===== Array of Objects + forEach =====
let students = [
  { name: "Emon", age: 21 },
  { name: "Asha", age: 20 },
  { name: "Rahim", age: 22 }
];

let studentsText = "<h2>Array of Objects (Students)</h2>";
students.forEach((student, i) => {
  studentsText += `${i + 1}. Name: ${student.name}, Age: ${student.age}<br>`;
});
document.getElementById("studentsOutput").innerHTML = studentsText;
