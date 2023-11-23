//singleton
//objects literals
const mysym =  Symbol("key1")
const mysum1 =  Symbol()
const JsUser =  {
    name:"Hitendra",
    "full name":"Hitendra Singh",
    [mysym]:"mykey1",
    age:18,
    location:"Uttar Pradesh",
    email:"hitman@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.age)
console.log(JsUser['name'])
console.log(JsUser[mysym])
JsUser.email = "noname@gmail.com"
console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email="dslfk@gmail.com"
console.log(JsUser)
JsUser.greeting = ()=>{
    console.log("Hello jsUser")
    return 0;
}
JsUser.greetings2 = ()=>{
    console.log(`hello ,${JsUser.name},${this.email}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetings2())