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
            return parseFloat(result.toFixed(2));
            break;
        case "-":
            result = subtraction(firstNum, secondNum);
            return parseFloat(result.toFixed(2));
            break;
        case "*":
            result =  multiplication(firstNum, secondNum);
            return parseFloat(result.toFixed(2));
            break;
        case "/":
            result = division(firstNum, secondNum);
            return parseFloat(result.toFixed(2));
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
        if(display.textContent.length > 13){
            display.textContent = display.textContent.substring(0, 13);
        }
        display.value = display.textContent;
    })
        
});

//Add event listener for operators
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

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
//const delBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
const percentBtn = document.getElementById("percent");
const posnegBtn = document.getElementById("posneg");

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

/* delBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, display.textContent.length-1);
}); */

clearBtn.addEventListener("click", () => {
    clearDisplay();
    num1 = null;
    num2 = null;
    operator = null;
    result = null;
    display.value = 0;
    display.textContent = 0;
    isClearDisplay = true;
    isFirstOperation = true;
});

percentBtn.addEventListener("click", () => {
    result = display.value / 100;
    display.textContent = result;
    isClearDisplay = true;
    isFirstOperation = false;
});

posnegBtn.addEventListener("click", () => {
    result = display.value * -1;
    display.value = result;
    display.textContent = result;
    isClearDisplay = true;
    isFirstOperation = false;
});
