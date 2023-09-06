const clear_btn = document.getElementById("clear");
const delete_btn = document.getElementById("delete");
const division_btn = document.getElementById("÷");
const multiplication_btn = document.getElementById("*");
const subtraction_btn = document.getElementById("-");
const addition_btn = document.getElementById("+");
const equal_btn = document.getElementById("=");
const dot_btn = document.getElementById(".");
const number_btn_array = [];
const current_operation = document.getElementById("current_operation");
const previous_result = document.getElementById("previous_result");


//const symbols = ["-", "+", "=","/", "*"];

console.log(number_btn_array);


for (let i = 0; i <= 9; i++) {
    const button_number =  document.getElementById(`${i}`);
    number_btn_array.push(button_number);
}


number_btn_array.forEach((element) => {
    element.addEventListener("click", () => addNumber(element));
});

    
clear_btn.addEventListener("click", ()=>{
    current_operation.innerText = null;
    previous_result.innerText = null;
});



delete_btn.addEventListener("click", ()=> {
    current_operation.innerText = current_operation.innerText.slice(0, -1); // remove the last character in the curent text
    ;});


division_btn.addEventListener("click", () => symbol_checker("/"));
multiplication_btn.addEventListener("click", () => symbol_checker("*"));
subtraction_btn.addEventListener("click", () => symbol_checker("-"));
addition_btn.addEventListener("click", () => symbol_checker("+"));
equal_btn.addEventListener("click", () => evalutate(current_operation.innerText));
dot_btn.addEventListener("click", () => symbol_checker("."));

function symbol_checker(input){
    if(current_operation.innerText === ""){
        return;
    }
    else if (input === ".") {
        console.log(current_operation.innerText.indexOf("."));
        if(current_operation.innerText.indexOf(".") == -1){ 
            current_operation.innerText = current_operation.innerText += input;
        }
    }
    else if(!isNaN(Number(current_operation.innerText.charAt(current_operation.innerText.length-1))) ||
    current_operation.innerText.charAt(current_operation.innerText.length-1) === "."){
        current_operation.innerText = current_operation.innerText += input;
    }
}

function addNumber(element){
    current_operation.innerText = current_operation.innerText += element.innerText;
}

function evalutate(data){
console.log("Hello World");
const tokens = data.split(/([+\-*/])/);
let result = parseFloat(tokens[0]);
for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = parseFloat(tokens[i + 1]);

    switch (operator) {
        case "+":
            result += nextNumber;
            break;
        case "-":
            result -= nextNumber;
            break;
        case "*":
            result *= nextNumber;
            break;
        case "/":
            if (nextNumber === 0) {
                result = "Cannot divide by zero";
                break;
                // Handle division by zero error as needed
            } else {
                result /= nextNumber;
            }
            break;
    }
}

previous_result.innerText = result;
current_operation.innerText = null;
}