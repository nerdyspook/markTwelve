const inputs = document.querySelectorAll(".input");
const calculate = document.querySelector(".calculate");
const output = document.querySelector(".output");

calculate.addEventListener("click", calculateHypotenuse);

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));
    const Hypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The length of Hypotenuse is : " + Hypotenuse;
}