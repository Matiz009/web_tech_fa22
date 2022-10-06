// Variable ‘a’ is declared globally. 
//So, the scope of the variable ‘a’ is global, and it can be accessible everywhere in the program.
// The output shown is in the console.
var a=23;
function printVar(){
    console.log("value of var: "+a);
    a=45;
    console.log("new value of var: "+a);//user can redefine and access the new value
}

function printLet() {
    let d = 9;
    console.log("value of let: "+d);
    //let d =34;
    console.log("new value of let: "+c);//there will be an error as we can not reassign the value
    //that is why I comment it
}





let c=26;
//The let keyword is an improved version of the var keyword. 

//The scope of a let variable is only block scoped.
// It can’t be accessible outside the particular block ({block}).


let varBtn=document.getElementById('btn-1');
let letBtn=document.getElementById('btn-2');
let constBtn=document.getElementById('btn-3');

varBtn.addEventListener("click",()=>{
    printVar();
    console.log(c);//value of var can be accessed even in this function
})


letBtn.addEventListener("click",()=>{
    printLet();
    console.log(c);//value of var can be accessed even in this function
   
})
//console.log(d);//value of d can not be Accessed here as it is out of the scope

//The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.
const f=34;

function printConst(){
    console.log(f);
}

constBtn.addEventListener("click",()=>{
    const g=34;
    printConst();
    console.log(f);//value of const can not be accessed even in this function
    //const f=56;
    console.log(g);
 
   //there will be an error as we can not reassign the value, that is why i comment that line
})

let invoke=document.getElementById('js_fun');
invoke.addEventListener('click',()=>{
    document.write("JS Function invoked");
    const myTimeout = setTimeout(myGreeting, 20);
    clearTimeout(myTimeout);
    location.reload();
})


//Task 3

const str = "Hello World";

// using length property
const len = str.length; 
console.log("length of string = " + len);

const empty = "";
console.log(empty.length);

const string = "Hello World";
            
// using charAt() method
console.log(string.charAt(1));
console.log(string.charAt(6));

const string2 = "Hello World";

// using charCodeAt() method
console.log(string2.charCodeAt(0));
console.log(string2.charCodeAt(1));

const firstName = "Hello";
const lastname = "World";

// using concat method
let result1 = firstName.concat(" ", lastname);
console.log(result1);
// multiple arguments
let result2 = "Learning".concat(" ", "to", " ", "code.");
console.log(result2);

const question = "DOM?";

// using endsWith method
// checks whether the string ends with "?"
console.log(question.endsWith("?"));

const sentence = "Carbon emission is increasing Day by day.";

// check if the string contains words
console.log(sentence.includes("day")); // true
console.log(sentence.includes("Day")); // true
console.log(sentence.includes("DAY")); // false


// get 1st index of 'day'
console.log(sentence.indexOf("day"));
console.log(sentence.indexOf("Carbon"));
// case-sensitive, returns -1
console.log(sentence.indexOf("carbon"));


// finding index of last "to"
console.log(sentence.lastIndexOf("is"));

const series = "bdWg2AdjgH4du5jUgT";

// match all capital letters and numbers
console.log(series.match(/[A-Z0-9]/g));

const array = [...series.matchAll(/d(o)/g)];
console.log(array);
console.log(array[0])


console.log(str.repeat(2));
// converts the decimal value to integer
console.log(str.repeat(3.5));
// repeat 0 times
console.log(str.repeat(0));


// using string to match
console.log(sentence.replace("day", "year"));
// using regular expression to match
console.log(sentence.replace(/day/g, "year"));


// select all match using both string or regular expression
console.log(sentence.replaceAll("day", "year"));
console.log(sentence.replaceAll(/day/g, "month"));

const string3 = "kjhBfdbAjdbj";
console.log(string3.search(/[A-Z]/g));

console.log(sentence.slice(5, 15));
console.log(sentence.slice(5));
console.log(sentence.slice(-15, -5));

// no pattern -> return whole string in array
console.log(sentence.split());
// split at each space
console.log(sentence.split(''));
// split at each space
console.log(sentence.split(' '));
// split at each 'is'
console.log(sentence.split('is'));


// start at index 10, cut 6 characters
console.log(sentence.substr(10, 6));
// start at index 10, cut all characters
console.log(sentence.substr(10));

// negative index
console.log(sentence.substr(-4, 3));

// extracting string
// start at index 10, cut all characters
console.log(sentence.substring(10));
// start at index 10, and end at index 20
console.log(sentence.substring(10, 20));

// startIndex > endIndex
console.log(sentence.substring(20, 10));

console.log(sentence.toLowerCase());//convert the string into lowercase

console.log(sentence.toUpperCase());//convert the string into uppercase
//convert the number into string
const num = 20;
console.log(num.toString(2));

const string6 = "    TutorialsTonight    ";
console.log(string6.trim());

console.log(str.valueOf(str));//The valueOf() string method in javascript returns the primitive value of a String object.


//TASK 4

let paragraph = document.getElementById('paragraph');
paragraph.innerHTML="CUI Lahore Campus";

//TASK 5

let h5=document.getElementById('h-5');
let last_btn = document.getElementById('last_btn');

last_btn.addEventListener('click',()=>{
    h5.innerHTML="Pakistan Zindabad!";
})

last_btn.addEventListener('mouseover',()=>{
    h5.style.color='blue';
})

last_btn.addEventListener('mouseout',()=>{
    h5.style.color='red';
})

last_btn.addEventListener('load',()=>{
    alert("Loading completed");
})


last_btn.addEventListener('change',()=>{
    h5.style.color='green';
})


last_btn.addEventListener('dblclick',()=>{
    h5.innerHTML="Pakistan is our homeland!";
})

//there are others events too which we can apply



//written by MATI UL REHMAN

