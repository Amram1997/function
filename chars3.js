/*7.. Write a function to compute a new string from the given one by moving the first char to come after
the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
Ignore any group of fewer than 3 chars at the end.
*/


   function chars3(str){
       let str1 = "";
        if(str.length > 2){
         for(let i = 0;i < str.length-2; i+=3){
            str1 +=str.substring(i + 1, i + 3) + str.charAt(i);
            }  
         }
        return str1;  
 }       
        


console.log(chars3("dfgjkloyp"))