const marvel_heroes = ['thor','Ironman','Spiderman']
const dc_heroes = ['superman','flash','batman']

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3])
console.log(marvel_heroes.concat(dc_heroes))
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)
const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_Array.flat(2)
console.log(real_another_array)
console.log(Array.isArray('Hitesh'))
console.log(Array.from("Hitendra singh"))
console.log(Array.from(Object.keys({name:"Hitendra"})))//interesting case for interviews
let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))