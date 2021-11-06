// // const user = require('./user');
// // console.log("Hello " + user.firstName + " " + user.lastName);

// const math = require("./math");
// // console.log("Sum " + math.add(2 ,5));
// // console.log("Sub " + math.sub(3, 1));
// // console.log("Mul " + math.multi(9, 8));
// // console.log("Div " + math.div(900, 102));
// // console.log("Pi = " + math.pi);

// const fs = require('fs');
// fs.writeFileSync('wynik.txt', "Sum " + math.add(2 ,5) + " Sub " + math.sub(3, 1) + " Mul " + math.multi(9, 8) + 
//             " Div " + math.div(900, 102) + " Pi = " + math.pi); 


const fs = require('fs');
const os = require('os');

let user = os.userInfo().username;
let home = os.userInfo().homedir;
fs.writeFileSync('user.txt', user);