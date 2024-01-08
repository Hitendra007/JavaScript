// const user = {
//     username : 'hitendra',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails:function (){
//        console.log(`username:${this.username}`)
//        console.log(this)
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails())

function user(username,loginCount,isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn
    return this;
}
const userOne = new user('hitendra',3,true)
const userTwo = new user('hit',7,false)

console.log(userOne,userTwo)