let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");

button.addEventListener("click", () => {
    output.innerHTML = input.value;
});