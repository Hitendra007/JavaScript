const name = "Hitendra singh"
const repoCount = 50 

// console.log(name +" "+repoCount)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('Hitendra-Game')
console.log(gameName)
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(10,-1 )
console.log(anotherString)
const newStringOne = "    Hitendra    "
console.log(newStringOne.trim())
const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))
console.log(gameName.split('-'))