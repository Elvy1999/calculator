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
  const button_number = document.getElementById(`${i}`);
  number_btn_array.push(button_number);
}

number_btn_array.forEach((element) => {
  element.addEventListener("click", () => addNumber(element));
});

clear_btn.addEventListener("click", () => {
  current_operation.innerText = null;
  previous_result.innerText = null;
});

delete_btn.addEventListener("click", () => {
  current_operation.innerText = current_operation.innerText.slice(0, -1); // remove the last character in the curent text
});

division_btn.addEventListener("click", () => symbol_checker("/"));
multiplication_btn.addEventListener("click", () => symbol_checker("*"));
subtraction_btn.addEventListener("click", () => symbol_checker("-"));
addition_btn.addEventListener("click", () => symbol_checker("+"));
equal_btn.addEventListener("click", () =>
  evalutate(current_operation.innerText)
);
dot_btn.addEventListener("click", () => symbol_checker("."));

function addNumber(element) {
  current_operation.innerText = current_operation.innerText +=
    element.innerText;
}


function symbol_checker(operation){
  let curent_last_chr = current_operation.innerText.charAt(current_operation.innerText.length - 1);
  if(previous_result.innerText == "" && current_operation.innerText == ""){
    return;
  }
  else if (previous_result.innerText != "" && !isNaN(Number(curent_last_chr))){
    current_operation.innerText = current_operation.innerText + operation;
  }
  else if (current_operation.innerText != "" && !isNaN(Number(curent_last_chr))){
    current_operation.innerText = current_operation.innerText + operation;
  }
   
}











function evalutate(data) {
  console.log(data);
  const tokens = data.split(/([+\-*/])/);
  if(tokens[0] == ""){tokens.shift();}
  let result;
  let i;
  let length;
  console.log(tokens);
  console.log(`previous result = ${previous_result.innerText}`);
  if(previous_result.innerText != "" && isNaN(Number(tokens[0])) == 1){
      console.log("Hello");
      result = parseFloat(previous_result.innerText);
      i = 0;
      length = tokens.length + 1;
      console.log(tokens);
  }
  else{
      result = parseFloat(tokens[0]);
      i = 1;
      length = tokens.length
  }
  for (; i < length; i += 2) {
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

// function symbol_checker(input) {
//   if (current_operation.innerText === "") {
//     return;
//   } else if (input === ".") {
//     console.log(current_operation.innerText.indexOf("."));
//     if (current_operation.innerText.indexOf(".") == -1) {
//       current_operation.innerText = current_operation.innerText += input;
//     }
//   } else if (
//     !isNaN(
//       Number(
//         current_operation.innerText.charAt(
//           current_operation.innerText.length - 1
//         )
//       )
//     ) ||
//     current_operation.innerText.charAt(
//       current_operation.innerText.length - 1
//     ) === "."
//   ) {
//     current_operation.innerText = current_operation.innerText += input;
//   }
// }
