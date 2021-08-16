const inputs = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#btn-check");
const output = document.querySelector("#output");

checkButton.addEventListener("click", () => isTriangle());

function isTriangle() {
    let sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (sumOfAngles === 180) {
        output.innerText = "This is a Triangle";
    }
    else {
        output.innerText = "This is not a Triangle";
    }
};

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}