class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(this.username)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}
const ramesh = new Teacher('mhanti','jarsugdabihar@gmail.com',324)

ramesh.addCourse()

console.log(ramesh instanceof Teacher && ramesh instanceof User)
