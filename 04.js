function feast(beast, dish) {
 let beastName = beast.split(' ').join('')
 let dishName = dish.split(' ').join('')
 return ((beastName[0] === dishName[0]) && (beastName[beastName.length -1] === dishName[dishName.length - 1]))
        ? true
        : false
}