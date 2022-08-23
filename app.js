/* 

ASSIGNMENT # 1

*/

// Problem # 1
alert("Welcome to my Website");

// Problem # 2
alert("Error! Please Enter a Valid Password");

// Problem # 3
alert("Welcome to JS Land\nHappy Coding!");

// Problem # 4
alert("Welcome to JS Land...");
alert("Happy Coding!");


// Problem # 5
alert("Hello... I can run JS through my browser's console");



/* 

ASSIGNMENT # 2

*/

// Problem # 1
let username;

// Problem # 2
let myName = "Ibrahim Rehman";

// Problem # 3
let message = "Hello World";
alert(message);

// Problem # 4
let fullName = "Ibrahim Rehman";
let age = 18;
let universityName = "NED University of Information and Technology";
alert(fullName);
alert(age);
alert(universityName);

// Problem # 5
let patterns = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(patterns);

// Problem # 6
let email = "ibrahimrehman0346@gmail.com";
alert(`My email address is ${email}`);

// Problem # 7
let book = "A Smarter way to Learn Javascript";
alert(`I am trying to learn from the Book: ${book}`);

// Problem # 8
document.write("Yah! I can write HTML Content through Javascript");

// Problem # 9
let pattern = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(pattern);



/* 

ASSIGNMENT # 3

*/

// Problem # 1
alert(`I am ${age} years old!`);

// Problem # 2
let timesVisited = 18;
alert(`You have visited this site ${timesVisited} times`);

// Problem # 3
let birthYear = 2001;
document.write(`My Birth Year is ${birthYear}<br>Data Type of my declared letiable is number`);

// Problem # 4
let visitorName = "John Doe";
let productTitle = "T-shirt(s)";
let quantity = 5;
document.write(`<br> ${visitorName} ordered ${quantity} ${productTitle} on XYZ clothing store`);


/* 

ASSIGNMENT # 4

*/

// Problem # 1
let x, y, z;

// Problem # 2
let x_1;
// let 1;
let %alert;
let ^alert;
let (alert);
let names;
let counter;
// let {[naming]};
let pokemon;
let games;

// Problem # 3
document.write(`<h1>Rules for Naming JS variables: </h1>variable names can only contain , numbers, $ and _. 
For example $my_1stletiable<br>variables must begin with a letter, $, or _   
For example $name, _name or name<br>variables names are case-sensitive.<br>letiable names should not be JS Keywords.`)



/* 

ASSIGNMENT # 5

*/

let operand1 = 10;
let operand2 = 20;

// Problem # 1
document.write(`Sum of ${operand1} and ${operand2} is ${operand1 + operand2}`);

// Problem # 2
document.write(`<br>Subtraction of ${operand1} and ${operand2} is ${operand1 - operand2}`);
document.write(`<br>Multiplication of ${operand1} and ${operand2} is ${operand1 * operand2}`);
document.write(`<br>Division of ${operand1} and ${operand2} is ${operand1 / operand2}`);

// Problem # 3
let value;
document.write(`<br>Value after variable declaration is ${value}`);
value = 10;
document.write(`<br>Initial Value: ${value}`);
document.write(`<br>Value after Increment is: ${++value}`);
value += 7;
document.write(`<br>Value after Addition is: ${value}`);
document.write(`<br>Value after decrement is: ${--value}`);
let remainder = value % 3;
document.write(`<br>The remainder is: ${remainder}`);


// Problem # 4
let ticketPrice = 600;
let overallCost = ticketPrice * 5;
document.write("<br>Total cost to buy 5 Tickets to a movie is " + overallCost + " PKR");

// Problem # 5
let num = 10;
document.write(`<br>${num} * 1 = ${num * 1}<br>${num} * 2 = ${num * 2}<br>${num} * 3 = ${num * 3}<br>${num} * 4 = ${num * 4}<br>${num} * 5 = ${num * 5}<br>${num} * 6 = ${num * 6}<br>${num} * 7 = ${num * 7}<br>${num} * 8 = ${num * 8}<br>${num} * 9 = ${num * 9}<br>${num} * 10 = ${num * 10}<br>`)

// Problem # 6
let celsius = 45;
let fahrenheit = 100;
let celsiusToFahrenheit = (celsius * (9/5)) + 32;
let fahrenheitToCelsium = (fahrenheit - 32) * (5/9);
document.write(`<br>${celsius}<sup>o</sup>C is ${celsiusToFahrenheit}<sup>o</sup>F<br>${fahrenheit}<sup>o</sup>F is ${Math.round(fahrenheitToCelsium)}<sup>o</sup>C`);

// Problem # 7
let item_1 = 5000;
let item_2 = 50000;
let quan_1 = 5;
let quan_2 = 1;
let shipping = 200;
let totalCost = (item_1 * quan_1) + (item_2 * quan_2) + shipping;
document.write(`<br>Price of Item 1 is ${item_1}<br>Price of Item 2 is ${item_2}<br>Quantity of Item 1 is ${quan_1}<br>Quantity of Item 2 is ${quan_2}<br>Shipping Charges are ${shipping}<br><br>Total cost of your order is ${totalCost}`);

// Problem # 8
let total = 850;
let obtained = 750;
var percent = (750 * 100) / 850;
document.write(`<br>Total Marks: ${total}<br>Marks Obtained: ${obtained}<br>Percentage: ${Math.round(percent)}`);

// Problem # 9
const US = 10;
const RIYAL = 25;
let conversion = (US * 104.80) + (RIYAL * 28);
document.write(`<br>Total Currency in PKR: ${conversion}`);

// Problem # 10
let calculation = 10;
let result_5 = ((calculation + 5) * 10) / 2;
console.log(result_5);

// Problem # 11
let current_year = 2020;
let birth_year = 2001;
age = current_year - birth_year;
document.write(`<br>Current Year: ${current_year}<br>Birth Year: ${birth_year}<br>Your Age is either ${age - 1} or ${age}`);

// Problem # 12
let radii = 50;
let circum = 2 * 3.142 * radii;
let area = 3.142 * radii ** 2;
document.write(`<br>Radius of Circle is ${radii}<br>The Circumference is ${circum}<br>The Area is ${area}`);

// Problem # 13
let snack = "Chips";
let current_age = 18;
let max_age = 80;
let amount = 5;
let snacksNeeded = (max_age - current_age) * 365.25 * 5;
document.write(`<br>Favourite Snack: ${snack}<br>Current Age: ${current_age}<br>Estimated Maximum Age: ${max_age}<br>Amount of Snacks Per Day: ${amount}<br>You will need ${Math.round(snacksNeeded)} ${snack} to last you until the ripe old age of ${max_age}`);



/* 

ASSIGNMENT # 6-8

*/

// Problem # 1
let a = 20;
document.write(`<br>Result: <br>The value of a is ${a}<br>-----------------------<br><br>The value of ++a is ${++a}<br>Now the value of a is ${a}<br><br>The value of a++ is ${a++}<br>Now the value of a is ${a}<br><br>The value of --a is ${--a}<br>Now the value of a is ${a}<br><br>The value of a-- is ${a--}<br>Now the value of a is ${a}`);

// Problem # 2
var c = 2;
var d = 1;
var result_8 = --c - --d + ++d + d--;
document.write(`<br>c is 2<br>d is 1<br>Result is ${result_8}`)
//--c:  decrements c by one and then returns 1
//--c - --d: --d decrement d by one and return 0, thus 1 - 0 and result is 1
//--c - --d + ++d: ++d increments  d by one and returns one thus 1 - 0 + 1 and result is 2
//--c - --d + ++b-1 + d--: d-- return d i.e. 1 and then decrements d by one, thus 1 - 0 + 1 + 1 and result is 3

// Problem # 3
let name = prompt("What is Your Name? ");
if (name){
    alert(`Welcome! ${name}`);
}
else{
    alert("Welcome! Unknown Visitor")
}

// Problem # 5
let table = +prompt("Input a number to print its table: (Default is 5) ");
if (table){
    document.write(`<br>${table} * 1 = ${table * 1}<br>${table} * 2 = ${table * 2}<br>${table} * 3 = ${table * 3}<br>${table} * 4 = ${table * 4}<br>${table} * 5 = ${table * 5}<br>${table} * 6 = ${table * 6}<br>${table} * 7 = ${table * 7}<br>${table} * 8 = ${table * 8}<br>${table} * 9 = ${table * 9}<br>${table} * 10 = ${table * 10}<br>`);
}
else{
    document.write(`<br>${5} * 1 = ${5 * 1}<br>${5} * 2 = ${5 * 2}<br>${5} * 3 = ${5 * 3}<br>${5} * 4 = ${5 * 4}<br>${5} * 5 = ${5 * 5}<br>${5} * 6 = ${5 * 6}<br>${5} * 7 = ${5 * 7}<br>${5} * 8 = ${5 * 8}<br>${5} * 9 = ${5 * 9}<br>${5} * 10 = ${5 * 10}<br>`);
}

// Problem # 6
let subject_1 = prompt("Enter First Subject: ") || "Physics";
let subject_2 = prompt("Enter Second Subject: ") || "Mathematics";
let subject_3 = prompt("Enter Third Subject: ") || "English";

//For Capitalizing:
let alt_1 = subject_1[0];
capitalize_1 = alt_1.toUpperCase();
subject_1 = subject_1.replace(alt_1, capitalize_1);
let alt_2 = subject_2[0];
capitalize_2 = alt_2.toUpperCase();
subject_2 = subject_2.replace(alt_2, capitalize_2);
let alt_3 = subject_3[0];
capitalize_3 = alt_3.toUpperCase();
subject_3 = subject_3.replace(alt_3, capitalize_3);


let total_marks = 100;
let mark_1 = +prompt(`Enter ${subject_1} Marks: `);
let mark_2 = +prompt(`Enter ${subject_2} Marks: `);
let mark_3 = +prompt(`Enter ${subject_3} Marks: `);
let percent_1 = Math.round((mark_1 * 100) / total_marks);
let percent_2 = Math.round((mark_2 * 100) / total_marks);
let percent_3 = Math.round((mark_3 * 100) / total_marks);
document.write(`<table style="text-align: center;" border="3">
<thead>
    <tr>
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage(%)</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>${subject_1}</td>
        <td>${total_marks}</td>
        <td>${mark_1}</td>
        <td>${percent_1}%</td>
    </tr>
    <tr>
        <td>${subject_2}</td>
        <td>${total_marks}</td>
        <td>${mark_2}</td>
        <td>${percent_2}%</td>
    </tr>
    <tr>
        <td>${subject_3}</td>
        <td>${total_marks}</td>
        <td>${mark_3}</td>
        <td>${percent_3}%</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Overall</td>
        <td>${total_marks * 3}</td>
        <td>${mark_1 + mark_2 + mark_3}</td>
        <td>${(percent_1 + percent_2 + percent_3) / 3}%</td>
    </tr>
</tbody></table>`);



/* 

ASSIGNMENT # 9-10

*/

// Problem # 1
let city = prompt("Enter a city name: ");
if (city === "Karachi" || city === "karachi"){
    alert("Welcome to the city of lights!");
}
else{
    alert("Welcome to " + city);
}

// Problem # 2
let gender = prompt("Enter your Gender: ");
if (gender === "male" || gender === "Male"){
    alert("Good Morning Sir!");
}
else if (gender === "female" || gender === "Female"){
    alert("Good Morning Maam!");
}

// Problem # 3
let trafficSignal = prompt("Enter color of road traffic signal: ");
if (trafficSignal === "red" || trafficSignal === "Red"){
    alert("Must Stop");
}
else if (trafficSignal === "green" || trafficSignal === "Green"){
    alert("Move Now");
}

else if (trafficSignal === "yellow" || trafficSignal === "Yellow"){
    alert("Ready to Move");
}

// Problem # 4
let fuel = +prompt("Enter Current fuel in car (Litres): ");
if (fuel < 0.25){
    alert("Please Refill the fuel in your car!");
}

// Problem # 6
let marks_1 = +prompt("Enter marks of First Subject: ");
let marks_2 = +prompt("Enter marks of Second Subject: ");
let marks_3 = +prompt("Enter marks of Third Subject: ");
let total_marks_1 = +prompt("Enter Total Marks: ");
let totals = Math.round(((marks_1 + marks_2 + marks_3) * 100 )/ total_marks_1);
let grades;
let remarks;
if (totals >= 80){
    grades = "A-One";
    remarks = "Excellent";
}

else if (totals >= 70){
    grades = "A";
    remarks = "Good";
}

else if (totals >= 60){
    grades = "B";
    remarks = "You need to improve";
}

else{
    grades = "Fail";
    remarks = 'Sorry';
}

document.write(`<br><h1>Marksheet</h1>Total Marks: ${total_marks_1}<br>Marks Obtained: ${marks_1 + marks_2 + marks_3}<br>Percentage: ${totals}%<br>Grade: ${grades}<br>Remarks: ${remarks}`);


// Problem # 7
let secret = 8;
while (true){
    let guess = +prompt("Guess the Secret No: ");
    if (guess === secret){
        alert("Bingo! Correct Answer");
        break;
    }
    else if (guess === secret + 1){
        alert("Close enough to the correct answer!");
    }
}

// Problem # 8
let divisible = +prompt("Enter a number which is divisible by 3: ");
if (divisible % 3 === 0){
    alert(`${divisible} is divisible by 3`);
}
else{
    alert(`${divisible} is not divisible by 3`);
}

// Problem # 9
let evenOrOdd = +prompt("Enter an Even number or an Odd number: ");
if (evenOrOdd % 2 === 0){
    alert(`${evenOrOdd} is an even number!`);
}
else{
    alert(`${evenOrOdd} is an odd number`);
}

// Problem # 10
let temp = +prompt("Enter Current Temperature: ");
if (temp > 40){
    alert("It is too hot outside.");
}

else if (temp > 30){
    alert("The Weather today is Normal.");
}

else if (temp > 20){
    alert("Today’s Weather is cool.");
}

else if (temp > 10){
    alert("“OMG! Today’s weather is so Cool.");
}


// Problem # 11
let nums_1 = +prompt("Enter first number: ");
let nums_2 = +prompt("Enter second number: ");
let operation = prompt("Enter Operation(+, -, *, / or %): ");
if (operation === "+"){
    alert(`Result: ${nums_1 + nums_2}`);
}
else if (operation === "-"){
    alert(`Result: ${nums_1 - nums_2}`);
}
else if (operation === "*"){
    alert(`Result: ${nums_1 * nums_2}`);
}
else if (operation === "/"){
    alert(`Result: ${nums_1 / nums_2}`);
}
else if (operation === "%"){
    alert(`Result: ${nums_1 % nums_2}`);
}


//ASSIGNMENT 12-13

// //Problem # 1
// let type = prompt("Enter a Character: ");
// let code = type.charCodeAt(0);
// if (code >= 65 && code <= 90){
//     alert(`${type} is an Uppercase Letter!`);
// }
// else if (code >= 97 && code <= 122){
//     alert(`${type} is a Lowercase Letter!`);
// }

// else if(code >= 48 && code <= 57){
//     alert(`${type} is a number!`)
// }

// //Problem # 2
// let int_1 = +prompt("Enter the First Integer: ");
// let int_2 = +prompt("Enter the Second Integer: ");
// if (int_1 > int_2){
//     alert(`${int_1} is greater than ${int_2}`);
// }
// else if (int_2 > int_1){
//     alert(`${int_2} is greater than ${int_1}`);
// }
// else{
//     alert(`${int_1} and ${int_2} are equal!`);
// }


// //Problem # 3
// let char = +prompt("Enter a Number: ");
// if (char < 0){
//     alert(`${char} is -ve`);
// }
// else if(char > 0){
//     alert(`${char} is +ve`);
// }
// else{
//     alert(`${char} is zero`)
// }

// //Problem # 4
// let vowel = prompt("Enter a Character: ");
// let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// let length = arr.length;
// let count = 0;
// for (var i of arr){
//     count++;
//     if (vowel === i){
//         alert("True");
//         break;
//     }
//     else if(count === length){
//         alert("False");
//     }
// }

// //Problem # 5
// let password = "ibrahim123456";
// let pass = prompt("Enter Your Password: ");
// if (pass === password){
//     alert("Correct! The Password you entered matches the original password");
// }
// else if(pass.length === 0){
//     alert("Please Enter a Password!");
// }

// else if(pass !== password){
//     alert("Incorrect Password!");
// }

// //Problem # 6
// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good Day";
// }
// else{
//     greeting = "Good Evening";
// }

// //Problem # 7
// let time = +prompt("Enter Time in 24 Hours Format (1900 = 7pm): ");
// if (time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening!");
// }
// else if(time >= 2100 && time <=2359){
//     alert("Good Night!");
// }


// //ASSIGNMENT # 13-15

// //Problem # 1
// let arr_1 = [];

// //Problem # 2
// let arr_2 = new Array();

// //Problem # 3
// let arr_3 = ["Ibrahim", "Usman", "Naveed"];

// //Problem # 4
// let arr_4 = [1, 2, 3, 4, 5];

// //Problem # 5
// let arr_5 = [true, false, true, false];

// //Problem # 6
// let arr_6 = [1, 2, "Ibrahim", "Naveed", true, false];

// //Problem # 7
// let arr_7 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// function interate(array){
//     for (var j of array){
//         document.write(j + "<br>");
//     }
// }

// interate(arr_7);

// //Problem # 8
// let arr_8 = ["Ibrahim", "Usman", "Naveed"];
// let arr_9 = [380, 490, 485];
// document.write(`Score of ${arr_8[0]} is ${arr_9[0]}. Percentage is ${(arr_9[0] * 100) / 500}%<br>Score of ${arr_8[1]} is ${arr_9[1]}. Percentage is ${(arr_9[1] * 100) / 500}%<br>Score of ${arr_8[2]} is ${arr_9[2]}. Percentage is ${(arr_9[2] * 100) / 500}%`);


// // //Problem # 9
// let arr_color = ["red", "blue"];
// for (var i of arr_color){
//     document.write(i + "<br>");
// }

// let add_1 = prompt("Which color you want to add to the beginning: ");
// arr_color.unshift(add_1);
// document.write("----------------------------------<br>")
// for (var j of arr_color){
//     document.write(j + "<br>");
// }

// let add_2 = prompt("Which color you want to add to the end: ");
// arr_color.push(add_2);
// document.write("----------------------------------<br>")
// for (var k of arr_color){
//     document.write(k + "<br>");
// }


// let add_3 = prompt("Which color you want to add to the beginning: ");
// let add_4 = prompt("Which color you want to add to the beginning: ");
// arr_color.unshift(add_3, add_4);
// document.write("----------------------------------<br>")
// for (var l of arr_color){
//     document.write(l + "<br>");
// }

// arr_color.shift();
// document.write("----------------------------------<br>")
// for (var m of arr_color){
//     document.write(m + "<br>");
// }

// arr_color.pop();
// document.write("----------------------------------<br>")
// for (var n of arr_color){
//     document.write(n + "<br>");
// }

// let add_5 = prompt("Which color you want to add: ");
// let add_6 = +prompt(`Also tell the index no (0-${arr_color.length-1}): `);
// arr_color.splice(add_6, 0, add_5);
// document.write("----------------------------------<br>")
// for (var o of arr_color){
//     document.write(o + "<br>");
// }

// let add_7 = +prompt(`How many colors you want to delete (${arr_color.length}): `);
// let add_8 = +prompt(`Also tell the index no (0-${arr_color.length-1}): `);
// arr_color.splice(add_8, add_7);
// document.write("----------------------------------<br>")
// for (var p of arr_color){
//     document.write(p + "<br>");
// }


// //Problem # 10
// let arr_score = [90, 80, 70, 99, 100];
// arr_score.sort(function(a, b){return a-b});
// console.log(arr_score);

// //Problem # 11
// let arr_city = ["Karachi", "Lahore", "Quetta"];
// let arr_copy = arr_city.slice(1, 3);
// console.log(arr_copy);

// //Problem # 12
// let arr_join = ["This", "is", "my", "cat"];
// console.log(arr_join.join(" "));

// //Problem # 13
// let arr_app = [];
// arr_app.push("keyboard");
// arr_app.push("mouse");
// arr_app.push("printer");
// arr_app.push("monitor");
// console.log(arr_app);

// //Problem # 14
// let arr_rev = [];
// arr_rev.unshift("keyboard");
// arr_rev.unshift("mouse");
// arr_rev.unshift("printer");
// arr_rev.unshift("monitor");
// console.log(arr_rev);

// //Problem # 15
// let arr_comp = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(`<select><option>Phone Manufacturers</option><option value="Apple">${arr_comp[0]}</option><option value="Samsung">${arr_comp[1]}</option><option value="Motorola">${arr_comp[2]}</option><option value="Nokia">${arr_comp[3]}</option><option value="Sony">${arr_comp[4]}</option><option value="Haier">${arr_comp[5]}</option></select>`);


// //ASSIGNMENT # 17-20

// //Problem # 1
// let arr_multi = [[], [], []];

// //Problem # 2
// let arr_dimension = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// //Problem # 3
// let arr_count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var h of arr_count){
//     document.write(h + "<br>");
// }

// //Problem # 4
// let num_table = +prompt("Enter a number to show its table: ");
// let length_table = +prompt("Enter Lenght of Table (e.g. 10): ");
// for (var i = 1 ;i < length_table + 1; i++){
//     document.write(`${num_table} * ${i} = ${num_table * i}<br>`);
// }

// //Problem # 5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i in fruits){
//     document.write(`Element at index ${i} is ${fruits[i]}<br>`);
// }

// //Problem # 6
// document.write("Counting: <br>")
// for (var i=1; i<16; i++){
//     if (i < 15){
//         document.write(i + ", ")
//     }
//     else{
//         document.write(i)
//     }
// }

// document.write("<br><br>Reverse Counting: <br>")
// for (var i=16; i>0; i--){
//     if (i > 1){
//         document.write(i + ", ")
//     }
//     else{
//         document.write(i)
//     }
// }

// document.write("<br><br>Even: <br>")
// for (var i=0; i<21; i++){
//     if (i % 2 === 0){
//         if (i < 20){
//             document.write(i + ", ")
//         }
//         else{
//             document.write(i)
//         }
//     }
// }


// document.write("<br><br>Odd: <br>")
// for (var i=0; i<21; i++){
//     if (i % 2 !== 0){
//         if (i < 19){
//             document.write(i + ", ")
//         }
//         else{
//             document.write(i)
//         }
//     }
// }


// document.write("<br><br>Series: <br>")
// for (var i=2; i<21; i++){
//     if (i % 2 === 0){
//         if (i < 20){
//             document.write(i + "K, ")
//         }
//         else{
//             document.write(i + "K")
//         }
//     }
// }



// //Problem # 7
// let a = ["cake", "apple pie", "cookie", "chips", "patties"];
// let counts = 0;
// let search = prompt("Welcome to my Bake Shop! What do you want to order? ");
// for (var i in a){
//     counts++;
//     if (search === a[i]){
//         document.write(`${search} is available at index ${i} in my Bake Shop.`)
//         break;
//     }
//     else if(counts === a.length){
//         alert(`We are sorry ${search} is not available!`)
//     }
// }


// //Problem # 8
// let arr_large = [24, 53, 78, 91, 120];
// let min = arr_large[0]
// for (var i of arr_large){
//     if (min < i){
//         min = i;
//     }
// }

// alert("Largest No is " + min);


// //Problem # 9
// let arr_large = [24, 53, 78, 91, 120];
// let min = arr_large[0]
// for (var i of arr_large){
//     if (min > i){
//         min = i;
//     }
// }

// alert("Smallest No is " + min);


// //Problem # 10
// for (var u=1; u<101;u++){
//     if (u % 5 === 0){
//         if (u < 100){
//             document.write(u + " ,");
//         }
//         else{
//             document.write(u);
//         }
//     }
// }