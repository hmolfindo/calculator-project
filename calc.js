//Addition
function add(num1, num2){
    return num1 + num2;
};

//Subtraction
function subtract(num1, num2){
    return num1 - num2;
};

//Multiplication
function multiply(num1, num2){
    return num1 * num2;
}

//Division
function divide(num1, num2){
    return num1/num2;
}

//Variables to use in executing operations
var num1 = 0;
var num2 = 0;
var operator = '';

//Operation to execute upon pressing equals button
function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            return firstNum + secondNum;
            break;
        case "-":
            return firstNum - secondNum;
            break;
        case "*":
            return firstNum * secondNum;
            break;
        case "/":
            return firstNum / secondNum;
            break;
    }
};

const display = document.getElementById("display-area");
const numKeys = document.querySelectorAll(".num");

//Add event listener to all number buttons
numKeys.forEach(function(btn){
    btn.addEventListener("click", function(event){
    display.textContent += this.value;
    display.value = display.textContent;
    })
})

function popDisplay(){
    var input = "";
    const display = document.getElementById("display-area");

};