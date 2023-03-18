function sumTwoSmallestNumbers(numbers) {  
   let newArr = []
  while (newArr.length < 2) {
    let min = Math.min(...numbers)
    newArr.push(min)
    numbers = numbers.filter( elem => elem != min)
  }
   return newArr.reduce( (acum, item) => acum + item, 0)
}

function sum(arr) {
  arr.sort((a, b) => a - b)
  return arr[0] + arr[1]
}