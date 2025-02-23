function setUsername (username){
    //complex DB calls
    this.username = username+'k'
    console.log(username,this.username)
}
function createUser (username,email,password)
{   setUsername.call(this,username)
    this.email = email;
    this.password = password
}

const chai = new createUser("chai",'chai@email.com','123')
console.log(chai)