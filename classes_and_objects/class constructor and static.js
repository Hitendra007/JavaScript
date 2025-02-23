// //ES6 
// class User{
//     constructor(username,email,password)
//     {
//      this.username=username;
//      this.email=email;
//      this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const usr = new User('jason','jason@gmail.com','1234')
// console.log(usr.encryptPassword())
// console.log(usr.changeUserName())

//behind the scene
function User(username,email,password)
{
     this.username=username;
     this.email=email;
     this.password=password

}

User.prototype.encryptPassword= function(){
    return `${this.password}abc`
}
const ream = new User('jigsaw','jason#ksdf.gmail.com','343')

console.log(ream.encryptPassword())












