// function sumNumbers (ferstNumber, secondNumber) {
//     return ferstNumber + secondNumber
// }

// const result = sumNumbers (3, 10)
// console.log(result)

// ==============================================================================

// function greet (name) {
//     return (`Hello, ${name}`)

// }
// console.log(greet ('Pavel'))


// const numbers = [1, 21, 3, 43, 5, 6, 27]
// function numberPrint(array) {
//     for(let i = 0; i < array.length; i++) {
//         if (array[i] > 10) {
//             console.log(array[i])
//         }
//     }
// }
// console.log(numberPrint(numbers))


function calculator(num1, num2, operator) {
    let result;
    if (operator === 'plus') {
        result = num1 + num2;
    } else if (operator === 'minus') {
        result = num1 - num2;
    } else if (operator === 'multiply') {
        result = num1 * num2;
    } else if (operator === 'divide') {
        result = num1 / num2;
    }
    
    return result
}













