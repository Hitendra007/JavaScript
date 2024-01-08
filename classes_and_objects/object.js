function mulitplyBy5(num){
    this.num=num
    return (num*5);
}
console.log(mulitplyBy5)
mulitplyBy5.power= 2

console.log(mulitplyBy5.power)
console.log(mulitplyBy5.prototype)
console.log(mulitplyBy5)
function createUser(username,score){
    this.username = username
    this.score=score

}
createUser.prototype.increment= function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log("score is",this.score)
}
const hite = new createUser('hit',80)
const gite = new createUser('git',50)
console.log(createUser.prototype)
gite.printMe()