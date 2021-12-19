// 6. . Write a function which receives two strings and removes appearances of the second string from the
//first one.

"use strict"

function removeSecond(sentense,str){
  let newArr = sentense.split("").filter(el => {
      return !str.includes(el)
  })
  return newArr.join("")
}
console.log(removeSecond("Yes, London. You know: fish, chips, cup o tea, bad food, worse weather", "o"))



