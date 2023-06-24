// console.log("I am Aayush Dangol")
//  //window.alert("ayush")


// // variables   (var,let,const)
// let firstname;
// let age;
// let student;
// firstname="Aayush Dangol" //string
// age=21; //integer
// student=true; //boolen
// console.log(student,firstname,age)
// document.getElementById("p1").innerHTML="Hello " + firstname;
// document.getElementById("p2").innerHTML="You are " + age + "years old";
// document.getElementById("p3").innerHTML="You are student: " + student;


//taking value from user
// let username=window.prompt("Enter Username");
// console.log(username);
// let username;
// document.getElementById("mybutton").onclick=function()
// {
//     username=document.getElementById("text").value;
//     console.log(username);
//     document.getElementById("label").innerHTML="Welcome "+username;
// }

//tye conversion
// let age;
// age="21";
// console.log(age,typeof(age));
// a=Number(age);
// a=a+1;
// console.log(a,typeof(a));
// b=Boolean("");
// console.log(b,typeof(b));
// c=Boolean("c");
// console.log(c,typeof(c));

// const variable that cant be changed
// const pi=3.14;
// console.log(pi);
// pi=2;
// console.log(pi); // error

// Math function
// let x=3.14;
// x=Math.round(x);
// x=Math.floor(x);
// x=Math.ceil(x); 
// x=Math.pow(x,2);
// x=Math.sqrt(x);
// x=Math.abs(x);
// console.log(x);
// let x=10;
// let y=20;
// let z=30;
// let max;
// let min;
// max=Math.max(x,y,z);
// console.log(max);
// min=Math.min(x,y,z);
// console.log(min);
// let x=Math.random()*6;
// console.log(Math.round(x));

// string properties and methods
//let username="Aayush Dangol"
// console.log(username.length);
// console.log(username.charAt(0));
// console.log(username.indexOf("D")); 
// console.log(username.trim());
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());
// console.log(username.replace(" ","-"));

//slice
// let username="Aayush Dangol"
// let first;
// let last;
// first=username.slice(0,username.indexOf(" "));
// console.log(first);
// last=username.slice(username.indexOf(" ")+1);
// console.log(last);


// method channing
// let username="          Aayush Dangol            ";
// console.log(username.trim().toLowerCase());

// let = varaiables are limited to block scope{}
// var = variables are limited to a function(){}
//while declaring global variable using var it will change browser window properties

//template literals 
// let user="Aayush Dangol"
// let message=`hlw ${user}`;
// console.log(message);

//ratio button checked 
//document.getElementById("button").checked==true

//array 
// let fruits=["apple","orange","banana"];
// console.log(fruits);
// fruits[0]="mango";
// console.log(fruits);
// fruits.push("apple"); //add element on last
// console.log(fruits);
// fruits.pop();// remove last element
// console.log(fruits);
// fruits.unshift("lemon");//add element on beginning
// fruits.shift();//remove first element
// console.log(fruits);
// a=fruits.length;
// console.log(a);
// b=fruits.indexOf("banana");
// console.log(b);
// let fruits=["apple","orange","banana"];
// for(let fruit of fruits){
//     console.log(fruit);
// }
// console.log(fruits.sort());
// console.log(fruits.sort().reverse());

//2d array
// let fruits=["apples","oranges","bananas"];
// let veg=["carrots","sag","alu"];
// let nonveg=["masu","anda","macha"];
// let grocery=[fruits,veg,nonveg];
// for(let list of grocery){
//     for(let food of list){
//         console.log(food);
//     }
// }
// grocery[0][0]="dharai apples";
// console.log(grocery);

// spread operator(...)
// let number=[1,2,3,4,5,6,7,8];
// console.log(...number); // 1 2 3 4 5 6 7 8
// console.log(Math.max(...number));
// let number=[1,2,3,4,5,6,7,8];
// let another=[9,10,11,12,13,14];
// number.push(...another);
// console.log(...number);

//rest parameter
// let a=1;
// let b=2;
// let c=3;
// let d=4; 
// console.log(sum(a,b,c));
// function sum(...numbers){
//     let total=0;
//     for(let num of numbers){
//         total=total+num;
//     }
//     return total;
// }

//call back => a function passed as an argument to another function
// sum(2,3,display);
// function sum(x,y,callBack){
//     callBack(x+y);
// }
// function display(a){
//     console.log(a);
// }


//array.forEach() => executes a provided callback function once for each array element
// let student=["aayush","dangol"];
// student.forEach(capitalize);
// student.forEach(print);
// function capitalize(element,index,array){
//     array[index]=element[0].toUpperCase()+element.substring(1);
// }
// function print(element){
//     console.log(element);
// }

//array.map() => executes a provided callback function once for each array element and creates a new array
// let numbers =[1,2,3,4,5];
// let squares=numbers.map(square);
// squares.forEach(print);
// function square(element){
//     return Math.pow(element,2);
// }
// function print(element)
// {
//     console.log(element);
// }

//array.filter() => creates a new array with all elements that pass the test provided by a function
// let ages=[18,16,21,17,19,90];
// let adults=ages.filter(checkage);
// adults.forEach(print);
// function checkage(element){
//     return element >=18;
// }
// function print(element)
// {
//     console.log(element);
// }

//array.reduce() => reduces an array to a single value
// let prices=[5,10,15,20,25,30];
// let total=prices.reduce(checkout);
// console.log(total);
// function checkout(total,element){
//     return total+element;
// }

//sort an array of number
// let grade = [100, 50, 90, 60, 80, 70];
// let grades = grade.sort(ascending);
// grades.forEach(print);

// function ascending(x, y) {
//   return x - y;
// }

// function print(element) {
//   console.log(element);
// }


//anonymous function
// const greeting=function(username)
// {
//     console.log("hlw ",username);
// }
// greeting("Aayush");


//arrow function
// const greeting=(username) => {
//     console.log("hlw ",username);
// }
// greeting("Aayush");
