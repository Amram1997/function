// 4. Given a word and a list of possible anagrams, select the correct sublist.

'use strict'

function anagrams(word,arr){
    let sorted = word.split("").sort().join('')
    return arr.filter(function(item){
        return item.split('').sort().join('') === sorted
    })
}
console.log(anagrams( 'listen', ["enlists", "google", "inlets", "banana"] ))