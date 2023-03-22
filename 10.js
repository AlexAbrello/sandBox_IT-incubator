function squareSum(numbers){
   let result = 0
   numbers.forEach(e => result += Math.pow(e, 2))
   return result
 }