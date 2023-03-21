function validatePIN (pin) {
   let reg = /\D/g
   if (reg.test(pin) === true) return false
   if (pin.length === 4 || pin.length === 6)  {
     let pinCode = Number(pin)
     if (pinCode >= 0 && Number.isInteger(pinCode)) {
       return true
     } else return false
   } else return false
 }