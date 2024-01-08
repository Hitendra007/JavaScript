// let myName = "Hitendra"

// console.log(myName.trueLength())

let myHeroes = ["thor", 'spiderman']
let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitendra = function () {
    console.log("Hitendra is present in all objects")
}
Array.prototype.hiHitendra = function () {
    console.log("hi hitendra ")
}
console.log(heroPower.hitendra())
console.log(myHeroes.hitendra())
console.log(myHeroes.hiHitendra())
console.log(heroPower.hiHitendra())