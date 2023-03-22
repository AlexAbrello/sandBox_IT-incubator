function sumArray(array) {
   if (array == null || array.length < 2) return 0
   let result = 0
   let newArray = array.sort((a, b) => a - b) 
   console.log(newArray)
   for (let i = 1; i < newArray.length - 1; i++) {
     result += newArray[i]
   }
   return result
 }