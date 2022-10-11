let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

function sum() {
    const sum = parseInt(num1.value) + parseInt(num2.value);
    result.innerHTML = "<p>Sum of numbers is : </p>" + sum;
}