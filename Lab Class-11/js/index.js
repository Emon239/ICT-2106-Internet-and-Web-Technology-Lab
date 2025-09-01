var Student1 = {
    name: "Emon Shah",
    roll: 12345,
    year: "1st",
    courses: ["Operating system", "Data Structure", "Algorithm"]
};
document.writeln("Name: " + Student1.name + "<br>");
document.writeln("Roll: " + Student1.roll + "<br>");
document.writeln("Year: " + Student1.year + "<br>");
document.writeln("Courses: " + Student1.courses+"<br>");


//Practice Constructor
var CostList = {
    rice: 10000,
    oil: 500
};

document.writeln("<br>"+"Rice price: " + CostList.rice + " Taka<br>");
document.writeln("Oil price: " + CostList["oil"] + " Taka"+"<br>");


//using constructor
function Student(name,roll,year,courses){
    this.name=name;
    this.roll=roll;
    this.year=year;
    this.courses=courses;

    this.display=function(){
        document.writeln("<br>"+this.name+" ",this.roll+" "+this.year+" "+this.courses);
    }
}
var Student2 = new Student("Emon", 123, 2025, ["Operating system", "Data Structure", "Algorithm"]);
Student2.display();

document.writeln("<br>" + Student2.courses[1]);


//MAth Function

//getEelement by id

document.writeln("<br>")
document.writeln("<br>"+document.getElementById("header1").innerText)

var text = document.getElementById("header1");
document.writeln("<br>")
document.writeln(text);

text.innerHTML="Hello";

document.writeln("<br>" + text.innerText);


//practice 
var text2 = document.getElementById("header2");

    document.writeln("<br>");
    document.writeln("<br>Original Element Object: " + text2);

    text2.innerHTML = "<span style='color: green;'>This is Emon</span>";
    document.writeln("<br>" + text2.innerText);



var text3=document.getElementsByTagName("h3");
document.writeln(text3[0].innerText);



// Practice 
var students = [
    {
        name: "Emon Shah",
        roll: 1961,
        year: "1st",
        courses: ["Operating System", "Data Structure", "Algorithm"]
    },
    {
        name: "Selim Ahmed",
        roll: 1962,
        year: "1st",
        courses: ["Networking", "Web Development", "Database"]
    },
    {
        name: "Ayesha Khan",
        roll: 1963,
        year: "1st",
        courses: ["C Programming", "Data Structure", "Math"]
    }
];

for (var i = 0; i < students.length; i++) {
    document.writeln("<br><b>Student " + (i + 1) + "</b><br>");
    document.writeln("Name: " + students[i].name + "<br>");
    document.writeln("Roll: " + students[i].roll + "<br>");
    document.writeln("Year: " + students[i].year + "<br>");

    document.writeln("Courses:<br>");
    for (var j = 0; j < students[i].courses.length; j++) {
        document.writeln("- " + students[i].courses[j] + "<br>");
    }
}




 
    var text4 = document.getElementsByTagName("h3");

    for (var i = 0; i < text4.length; i++) {
        document.writeln("<br><span style='color: red'>" + text4[i].innerText + "</span>");

    }
var text3 = document.querySelectorAll('.header3')[0];
text3.innerText = "This is the updated Header 3!";
text3.style.color = "blue";
document.querySelector(".my-div a").innerHTML="newContact";




