/* 3 . Given a phone number. Write a function to clean it up,
 so it is valid. The rules are as follows:
If the phone number is less than 10 digits assume that it is a bad number
If the phone number is longer than 10, then it is a bad number
If the phone number is 10 digits assume that it is good
If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
and return remaining 10 digits.
If the phone number contains + symbol more than one, consider it as a bad number.
If the phone number contains + symbol not as the first character, consider it as a badnumber.

*/  
'use strict'
function phoneNumberCleanUp(array) {
   
        if ((array.length < 10) && (array.length > 11)) {
            return `bad number: ${array}` 

        } else if (array.length === 10) {
             return `good number ${array}`

        } else if ((array.length === 11) && (array.charAt(0) === "+")) {
            console.log("This is a good number: " + array.slice(array.length, -1));
            return "good number" +array.slice(array.length,-1)

        } else if ((array.length === 11) && (array.charAt(0) !== "+")) {
            return " bad number also: " + array;

        } else {
            console.log("This is a bad number too: " + array);
            return `bad number ${array}`
        }
    
  }

console.log(phoneNumberCleanUp("+1133956568"));