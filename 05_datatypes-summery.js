// primitive

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt

//java script is a dynamically typed language ,because data type of variable decided by the type of content it holds


const score = 100
const score_v = 0.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
console.log(id,anotherId)


// Refrence type (Non premitive Datatype)

// Array, objects, Functions

// const heros = ["Shaktimaan","naagraj","doga"]
// let myobj = {
//     name : "Hitendra singh",
//     age : 22,
// }
// const myFunc = function(){
//     console.log("Hello Hitendra")
// }

// console.table([typeof(heros),typeof(myobj),typeof(myFunc)])
// console.log(myFunc())



let myYoutubeName = "Science catcher"
let anotherName = "stoic outcast"

console.log(anotherName, myYoutubeName)

let user={
    email:"hitendra369432@gmail.com",
    upi:"454@ybl"
}
let user2=user
console.log(user)
user2["email"]="sklfjsdll"
console.log(user2,user)