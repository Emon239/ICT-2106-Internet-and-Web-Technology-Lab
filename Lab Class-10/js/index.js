let a = prompt("Enter a number:");
a = Number(a);

if (a > 10) {
  document.writeln("A is greater than 10<br>");
  if (a == 12) {
    document.writeln("A is equal to 12");
  } else {
    document.writeln("A is not equal to 12");
  }
} else {
  document.writeln("A is less than or equal to 10");
}

//Function 

function Square(a)
{
    document.writeln("<br><span style='color:green;'>" + (a*a) + "</span>");

}
Square(a);
function squareMany(a, b, c) {
  return [a * a, b * b, c * c];
}

let results = squareMany(2, 4, 6);

document.writeln("<br><span style='color:green;'>Square of 2: " + results[0] + "</span>");
document.writeln("<br><span style='color:green;'>Square of 4: " + results[1] + "</span>");
document.writeln("<br><span style='color:green;'>Square of 6: " + results[2] + "</span>");

//immidiately invokeable function
(function (a, b) {
  document.writeln("<br><span style='color:green;'>Sum: " + (a + b) + "</span>");
})(5, 7);


//array

let names = ['aaa', 'bbb', 'ddd'];
document.writeln("<br><span style='color:green;'>Name at index 0: " + names[0] + "</span>");
//object array

var Firstarray = [];
var Secondaryarray = [];

Firstarray.push(10);
Firstarray.push(20);
Firstarray.push(30);

Secondaryarray.push("apple");
Secondaryarray.push("banana");
Secondaryarray.push("cherry");

function printArray(arr, label) {
  document.writeln("<br><strong>" + label + ":</strong>");
  for (let i = 0; i < arr.length; i++) {
    document.writeln("<br>Index " + i + ": " + arr[i]);
  }
}

printArray(Firstarray, "Firstarray (Numbers)");
printArray(Secondaryarray, "Secondaryarray (Fruits)");


//Array shifting
let arr = [];
arr.push(10);
arr.push(10);

// Original array
let arr2 = [1, 2, 3, 4];
document.writeln("<b>Original array: " + arr2 + "</b><br>");

// Shift: removes the first element
let shifted = arr2.shift();
document.writeln("<b>After shift, array: " + arr2 + "</b><br>");
document.writeln("<b>Shifted value: " + shifted + "</b><br>");


arr.pop();  // removes 4
console.log(arr); // [1, 2, 3]


// Unshift: adds elements at the beginning
let newLength = arr.unshift(5);
document.writeln("<b>After unshift, array: " + arr + "</b><br>");
document.writeln("<b>New length after unshift: " + newLength + "</b>");


let arr3 = [1, 2, 3, 4];
arr.splice(1, 1);  // removes 2 (index 1)
console.log(arr); // [1, 3, 4]

//numbers sorting 

let array4=[123,3456,78,90];
array4.sort(function(c,d)
{
    return c-d;
})
console.log(array4);



//2D array 
let array5 = [[1, 2], [3, 4], [5, 6]];

for (let i = 0; i < array5.length; i++) {
    for (let j = 0; j < array5[i].length; j++) {
        document.writeln(array5[i][j]);
    }
}
