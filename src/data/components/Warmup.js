// import { useState } from "react"
// //  Javascript Warmup:

// // Write a function that takes in two dates in the following format: "01/01/1901". The first date is someone's birthday, and the second is today's date. Your function should return how old (in years) that person is.


// function Warmup() {
//     // function daysbetween( dob, today){}
//     // const [dob, setDob] = useState(null)

//     const Date01 = event.target.value
//     const Date02 = e.target.value

//     new Date(year, monthIndex, day)


//   return (
//     <>
//         <form>
//             <label>
//                 Your Date of Birth:
//                 <input type="date" name="dob" />
//             </label>
//             <input type="submit" value="Submit" />

//             <label>
//                 Today's date:
//                 <input type="date" name="today" />
//             </label>
//             <input type="submit" value="Submit" />

//         </form>
//     </>

//   )
// }

// export default Warmup


import React from 'react'

function Warmup() {

let guestList = [{"names":{"first":"Ron","last":"Copermane"},"age":51,"allergies":[]},{"names":{"first":"Maya","last":"Chavez"},"age":40,"allergies":["coconut"]},{"names":{"first":"Dana","last":"Copermane"},"age":53,"allergies":[]},{"names":{"first":"Luke","last":"Copermane"},"age":26,"allergies":["shellfish"]},{"names":{"first":"Leo","last":"Malay"},"age":33,"allergies":[]},{"names":{"first":"Janelle","last":"Copermane"},"age":24,"allergies":[]}]

let correctedGuestList = guestList.map(person => {
    return person * 2
})
console.log (correctedGuestList)

  return (
    <div>Warmup</div>
  )
}

export default Warmup



// ===============================================

// A mistake has been made in this list of the guests who are invited to an important event. All the guests with the last name "Cooperman" have had their name misspelled as "Copermane". To avoid embarrassment, write a function that takes in the following array as an argument, and returns an array where the error is corrected. ALSO: your solution MUST use both the map method and a ternary operator.

// let guestList = [{"names":{"first":"Ron","last":"Copermane"},"age":51,"allergies":[]},{"names":{"first":"Maya","last":"Chavez"},"age":40,"allergies":["coconut"]},{"names":{"first":"Dana","last":"Copermane"},"age":53,"allergies":[]},{"names":{"first":"Luke","last":"Copermane"},"age":26,"allergies":["shellfish"]},{"names":{"first":"Leo","last":"Malay"},"age":33,"allergies":[]},{"names":{"first":"Janelle","last":"Copermane"},"age":24,"allergies":[]}]

// ============================================