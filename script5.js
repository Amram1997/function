// 8 Write a function that accepts a string(a sentence) as a parameter and finds the longest word within
// the string. If there are several words which are the longest ones, print the last word(words can be
    // separated by space, comma or hyphen).

"use strict"

    function largeWord(str){
        let largStr = str.toString().split(" ");
        let max = largStr[0].length
        for(let i = 0; i < largStr.length; i++){
            if(max < largStr[i].length){
                max = largStr[i]
                return max
            }
        }
    }
   console.log(largeWord("A revolution without dancing is a revolution not worth having.")) 