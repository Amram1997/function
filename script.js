// 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.


'use strict'

function oddEven(arr){
    let arrAll = [];
    for(let i = 0; i <arr.length;i++){
        if(arr[i] % 2 === 0){
            arrAll.push(arr[i])
        }else {
            arrAll.unshift(arr[i])
        }
       
    }
     return arrAll
}

console.log(oddEven([45, 12, 3, 6, 17, 0]))