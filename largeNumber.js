// 9.Write a function which receives an array and a number as arguments and returns a new array from
//the elements of the given array which are larger than the given number.

function largeNumber(arr,num){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            newArr.push(arr[i])
        } 
        
    }
        if(newArr.length === 0){
            return "Such values do not exist."
        }



    return newArr
}
console.log(largeNumber([10,25,16,-5,30,15,24],16));
console.log(largeNumber([1, 1, 2, -3, 0, 8, 4, 0], 9))