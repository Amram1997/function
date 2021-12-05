/*
2. . Write a function that calculates sum, difference, multiplication and division between given array
elements depending on passed operation symbol. Write appropriate function for each operation.

*/
"use strict"

// Sum
function sumItem(arr){
    let sumIt = 0;
    for(let i = 0; i < arr.length; i++){
        sumIt += arr[i] 
    }
    return sumIt

}
console.log(sumItem([4,5,1,2]))

// difference
function differItem(arr){
    let diffIt = 0;
    for(let i = 0; i < arr.length; i++){
        diffIt -= arr[i] 
    }
    return diffIt
}
console.log( differItem([4,5,1,2]))

// multiplication
function multItem(arr){
    let mulItem = 1;
    for(let i = 0; i < arr.length; i++){
        mulItem *= arr[i] 
    }
    return mulItem
}
console.log( multItem([4,5,1,2]))

// division
function diverItem(arr){
    let divItem = 1;
    for(let i = 0; i < arr.length; i++){
        divItem /= arr[i] 
    }
    return divItem
}
console.log( diverItem([4,5,1,2]))
// Calculate
function getCalculate(arr,operator="+"){
    switch(operator){
        case "+":
          return  sumItem(arr)
             break
          case "-":
              return differItem(arr)
                 break
              case "*":
              return multItem(arr)
                break
            case "/":
            return diverItem(arr)
            break
            default:
    }
}
console.log(getCalculate([4,5,1,2],"*"));
