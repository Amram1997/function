//5.Write a function, which receives a string, finds possible largest numbers in the string and returns their
//sum.

function number(sentence){
    let arr = [];
    let result = 0;
    let str = '';
    arr = sentence.split("");
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(+arr[i]) || arr[i] === '-'){
            str += arr[i]
        }else{
            
                result += +str
            
            str = ''
        }
        
    }
   
    return result
}
console.log(number('FwrtY45KHL120mn10P'))