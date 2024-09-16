//Addition
function addition(num1, num2){
    return Number(num1) + Number(num2);
};

//Subtraction
function subtraction(num1, num2){
    return num1 - num2;
};

//Multiplication
function multiplication(num1, num2){
    return num1 * num2;
}

//Division
function division(num1, num2){
    return num1/num2;
}

//Variables to use in executing operations
let num1 = 0;
let num2 = 0;
let operator = '';
let isClearDisplay = false;

//On equals press
function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            return addition(firstNum, secondNum);
            break;
        case "-":
            return subtraction(firstNum, secondNum);
            break;
        case "*":
            return multiplication(firstNum, secondNum);
            break;
        case "/":
            return division(firstNum, secondNum);
            break;
    }
};



const display = document.getElementById("display-area");
const numKeys = document.querySelectorAll(".num");

function clearDisplay(){
    display.textContent = "";
};

//Add event listener to all number buttons
numKeys.forEach(function(btn){
    btn.addEventListener("click", function(event){
        if(isClearDisplay){
            clearDisplay();
            isClearDisplay = false;
        }
        display.textContent += this.value;
        display.value = display.textContent;
    })
        
});

/* ON NUMBER AND OPERATOR PRESS
Assign value of num1 and operator based on input
ON NUMBER PRESS AFTER OPERATOR
Clear display and listen for num2
ON EQUALS PRESS
Assign value to num2 and execute operate function
Display result */

//Add event listener for operators
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

add.addEventListener("click", () => {
    num1 = display.value;
    operator = "+";
    isClearDisplay = true;
});
subtract.addEventListener("click", () => {
    num1 = display.value;
    operator = "-";
    isClearDisplay = true;
});
multiply.addEventListener("click", () => {
    num1 = display.value;
    operator = "*";
    isClearDisplay = true;
});
divide.addEventListener("click", () => {
    num1 = display.value;
    operator = "/";
    isClearDisplay = true;
})

//Add event listener for other buttons
const equalsBtn = document.getElementById("equals");
const delBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");

equalsBtn.addEventListener("click", () => {
    num2 = display.value;
    let result = operate(operator, num1, num2);
    display.textContent = Number(result);
    isClearDisplay = true;
    /* num1 = 0;
    num2 = 0;
    operator = ""; */
});
delBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length-1);
});
clearBtn.addEventListener("click", () => {
    clearDisplay();
    num1 = 0;
    num2 = 0;
    operator = "";
});
