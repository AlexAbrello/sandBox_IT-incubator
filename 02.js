// Convert a linked list to a string


function stringify(list) {
   let newList = []
   if (list === null) {
     return newList = 'null'
   }
   list = Object.values(list)
   while (list.length != 0) {
     list.forEach((item, index) => {
       if (typeof item != 'object' || item === null) {
         if (item === null) {
           item = 'null'
           list = []
         }  
         newList.push(item)
       } else {
         list = Object.values(item)
       }
     })          
   }
   return newList.join(' -> ')
 }