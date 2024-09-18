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
let num1 = null;
let num2 = null;
let operator = null;
let result = null;
let isClearDisplay = true;
let isFirstOperation = true;

//On equals press
function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            result = addition(firstNum, secondNum);
            return result;
            break;
        case "-":
            result = subtraction(firstNum, secondNum);
            return result;
            break;
        case "*":
            result =  multiplication(firstNum, secondNum);
            return result;
            break;
        case "/":
            result = division(firstNum, secondNum);
            return result;
            break;
    }
};



const display = document.getElementById("display-area");
display.textContent = 0;
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
        };
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

/* When another operator is pressed
Display initial result
Clear screen then listen for input
If next press is not number
Show result */

add.addEventListener("click", () => {
    if(!isFirstOperation){
        num2 = display.value;
        result = operate(operator, num1, num2);
        operator = "+";
        display.textContent = result;
        num1 = result;
    }else{
        num1 = display.value;
        operator = "+";
    };
    isClearDisplay = true;
    isFirstOperation = false;
});
subtract.addEventListener("click", () => {
    if(!isFirstOperation){
        num2 = display.value;
        result = operate(operator, num1, num2);
        operator = "-";
        display.textContent = result;
        num1 = result;
    }else{
        num1 = display.value;
        operator = "-";
    };
    isClearDisplay = true;
    isFirstOperation = false;
});
multiply.addEventListener("click", () => {
    if(!isFirstOperation){
        num2 = display.value;
        result = operate(operator, num1, num2);
        operator = "*"
        display.textContent = result;
        num1 = result;
    }else{
        num1 = display.value;
        operator = "*"
    };
    isClearDisplay = true;
    isFirstOperation = false;
});
divide.addEventListener("click", () => {
    if(!isFirstOperation){
        num2 = display.value;
        result = operate(operator, num1, num2);
        operator = "/";
        display.textContent = result;
        num1 = result;
    }else{
        num1 = display.value;
        operator = "/";
    };
    isClearDisplay = true;
    isFirstOperation = false;
})

//Add event listener for other buttons
const equalsBtn = document.getElementById("equals");
const delBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");

/* When num1 and operator are not null and an operator is pressed
Result becomes num1
Operator value is replaced with new input
Listen for new num2 */
equalsBtn.addEventListener("click", () => {
    if(isFirstOperation){
        display.textContent = 0;
    }else{
        num2 = display.value;
        result = operate(operator, num1, num2);
        display.textContent = result;
        isClearDisplay = true;
    }
});
delBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length-1);
});
clearBtn.addEventListener("click", () => {
    clearDisplay();
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    display.value = null;
    isFirstOperation = true;
});
