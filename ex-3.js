//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
let message = lightBulbStatus === "On" 
? "Light bulb is On."
: lightBulbStatus === "Off"
? "Light bulb is Off."
: lightBulbStatus === "Broken"
? "Light bulb is Broken."
: "Please choose the correct input (On/Off)"


console.log(message)