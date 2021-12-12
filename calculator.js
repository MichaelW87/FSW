var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter first number:");
var secondNum = readlineSync.questionInt("Please enter second number:");
var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div):");

function myAddFunction(a, b){
    return a + b;
}

function mySubtractionFunction(a, b){
    return a - b;
}

function myMultiplicationFunction(a, b){
    return a * b;
}

function myDivisionFunction(a, b){
    return a / b;
}
//Function Defintion
function myCustomCalculator(num1, num2, operation){
    if (operation == "add"){
        //Call Addition Function
        console.log("Addition of two numbers:" + myAddFunction(num1, num2));
    } else if (operation == "sub"){
        //Call Subtraction Function
        console.log("Subtraction of two numbers:" + mySubtractionFunction(num1, num2));
    } else if (operation == "mul"){
        //Call Multiplication Function
        console.log("Multiplication of two numbers:" + myMultiplicationFunction(num1, num2));
    } else if (operation == "div"){
        //Call Devision Function
        console.log("Division of two numbers:" + myDivisionFunction(num1, num2));
    } else{
        console.log("Invalid operation, please try again")
    }
}

//Call the function
myCustomCalculator(firstNum, secondNum, userOperation);