const calculate = document.querySelector(".calculate");
const output = document.querySelector(".output");
const inputs = document.querySelectorAll("input");

calculate.addEventListener("click", calculateArea);

function calculateArea() {
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);
    const area = (base * height) * 0.5;
    output.innerText = "Area of given triangle is: " + area;
}