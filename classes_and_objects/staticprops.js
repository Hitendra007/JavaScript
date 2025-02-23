class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`username is ${this.username}`)
    }
    static createId() {
        return `123`
    }
}
const hit = new User("jason")
// console.log(hit.createId())

class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher('realPhone','iphone@fmail.com')
iphone.logMe()
console.log(iphone.createId())