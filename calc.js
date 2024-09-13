function add(num1, num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

var num1 = 0;
var num2 = 0;
var operator = '';

function operate(operator, firstNum, secondNum){
    switch(operator){
        case "+":
            return firstNum + secondNum;
            break
        case "-":
            return firstNum - secondNum;
            break;
        case "*":
            return firsNum * secondNum;
            break;
        case "/":
            return firstNum / secondNum;
            break;
    }
}