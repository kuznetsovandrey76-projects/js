// 1.
var start = "Hello, World";
var first_str = "<h2>My name is Andrey</h2>";
var second_str = "<p>I live in Rostov</p>";
document.write(first_str);
document.write(second_str + "Yahoo!");
// 2.
var name = prompt("What is your name?", "Andrey"); 
document.write("<p>Hello " + name + "</p>");
var yes = confirm("Sure?");
document.write(yes);
// 3.
var x = prompt("input X?", 1); 
var y = prompt("Input Y?", 2); 
var IntegerX = parseInt(x);
var IntegerY = parseInt(y);
var result = IntegerX + IntegerY;
alert(result);