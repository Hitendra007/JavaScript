function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("N")
    console.log("D")
    console.log("R")
    console.log("A")
}
// sayMyName()
// function addTwoNumbers(a,b){
//     console.log(a+b)
// }
function addTwoNumbers(a,b){
    // let result = a+b
    // return result
      return a+b
}
const result = addTwoNumbers(4,5)
console.log("result:",result)

function loginUserMessage(username="test"){
    if(!username)
    console.log("PLease enter a username")
    else     return `${username} just logged in`
}

// console.log(loginUserMessage('hit'))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
          return num1
}
console.log(calculateCartPrice(200,300,400))
const user = {
    username:'Hitendra',
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
const myarr = [200,400,100,600,700]
function returnSecondValue(getarray)
{
    return getarray[1]
}
console.log(returnSecondValue(myarr))