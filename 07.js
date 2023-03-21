function points(games) {
   let count = 0
   for (let i = 0; i < games.length; i++) {
     if (`${games[i][0]}` > `${games[i][2]}`) {
       count += 3
     } if (`${games[i][0]}` === `${games[i][2]}`) {
       count += 1
     } if (`${games[i][0]}` < `${games[i][2]}`) {
       count += 0
     }
   }
   return count
 }