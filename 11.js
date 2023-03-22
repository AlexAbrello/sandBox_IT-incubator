const f = (words) => {
  let result = []
  let arr = words.split(' ')
  let reg = /\d/
  for (let i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      let numEl = parseInt(arr[i].match(/\d+/))
      result.splice((numEl-1), 0, arr[i])
    } else {
      result.push('')
    }
  }
  return result.join(' ')
}