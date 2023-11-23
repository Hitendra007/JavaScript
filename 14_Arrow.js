const user = {
    username :"hitendra",
    price:999,
    welcomeMessage:function(){
         console.log(`${this.username} , welcome to website`)
         console.log(this)
    }
}
user.welcomeMessage()
console.log(this)

function chai(){
    let username = "Hitendra"
    console.log(this)
}
chai()

const chai1 = ()=>{
    let username="Hitendra"
    console.log(this)
}
chai1()
const addTwo = (num1,num2)=>{
    return num1+num2
}
const addTwo1 = (num1,num2) => num1+num2
//if wrapped in curly braces then we have to return explicitly
const test =()=> {username:"hitendra"} //cannot return object like this
const test1=()=> ({username:"hitendra"})
console.log(test())
console.log(test1())
console.log(addTwo1(4,5))
