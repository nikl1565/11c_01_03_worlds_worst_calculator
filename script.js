"use strict";

// Checkboxes
const checkboxDoRound = document.querySelector("#doround");

// Select inputs
const selectDecimals = document.querySelector("#decimals");
const selectOperator = document.querySelector("#operator");

// Inputs
const inputFirstNumber = document.querySelector("#firstnumber");
const inputSecondNumber = document.querySelector("#secondnumber");

// Buttons
const buttonClearResults = document.querySelector("#clear");
const buttonCalculate = document.querySelector("#calculate");

const resultList = document.querySelector("#results");

let firstNumber = 0;
let secondNumber;

document.addEventListener("DOMContentLoaded", startCalculator);

function startCalculator() {
    console.log("setupCalculator");

    buttonCalculate.addEventListener("click", calculate);
    buttonClearResults.addEventListener("click", clearResults);
}

function calculate() {
    console.log("calculate");

    const oldResult = firstNumber;
    firstNumber = Number(inputFirstNumber.value);
    secondNumber = Number(inputSecondNumber.value);
    const operator = selectOperator.value;

    switch (operator) {
        case "add":
            console.log("Plus");
            calculateWithAddition();
            break;

        case "sub":
            console.log("Minus");
            calculateWithSubtraction();
            break;

        case "mul":
            console.log("Multi");
            calculateWithMultiplication();
            break;

        case "div":
            console.log("Division");
            calculateWithDivision();
            break;

        default:
            console.log("I don't know the operator used.");
    }

    if (checkboxDoRound.checked === true) {
        roundTo();
    } else {
        showResult();
    }
}

function calculateWithAddition() {
    console.log("calculateWithAddition");

    firstNumber = firstNumber + secondNumber;
}

function calculateWithSubtraction() {
    console.log("calculateWithSubtraction");

    firstNumber = firstNumber - secondNumber;
}

function calculateWithMultiplication() {
    console.log("calculateWithMultiplication");

    firstNumber = firstNumber * secondNumber;
}

function calculateWithDivision() {
    console.log("calculateWithDivision");

    firstNumber = firstNumber / secondNumber;
}

function clearResults() {
    console.log("clearResults");

    resultList.innerHTML = "";
    firstNumber = 0;
    inputFirstNumber.value = "";
    inputSecondNumber.value = "";
}

function roundTo() {
    console.log("roundTo");

    firstNumber = firstNumber.toFixed(Number(selectDecimals.value));

    showResult();
}

function showResult() {
    console.log("showResult");

    inputFirstNumber.value = firstNumber;

    resultList.innerHTML += `<li>${firstNumber}</li>`;
    resultList.lastChild.scrollIntoView(false);
}
