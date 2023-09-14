// let data = "55.6+45+999-3899/567*6454";
// let data1 = "4+4+4-4*4/2*4-4=5*2/2.5/0";



// function evalutate(data){
// let tokens = data.split(/([+\-*/])/);
// let result = parseFloat(tokens[0]);
// for(let i = 1; i < tokens.length;i+=2){
//     let operator = tokens[i];
//     let number = parseFloat(tokens[i+1]);
//     switch(operator){
//         case "+":
//             result += number;
//             break;
//         case "-":
//             result -= number;
//             break;
//         case "*":
//             result *= number;
//             break;
//         case "/":
//             result /= number;
//             break;
//         };
//     }
//     return result;
// }
// console.log(evalutate(data));
// console.log(evalutate(data1));

console.log(isNaN(Number("/")) == 1);