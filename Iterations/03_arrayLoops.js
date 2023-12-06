//for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for(let elem of elements){
// }
for( const item of arr)
{
    console.log(item)
}

const greeting = "Hellow world"
for( let greet of greeting){
    console.log(greet)
}

//Maps
const map = new Map()
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('d',4)

console.log(map)
for(const [key,val] of map){
    console.log(key,":->",val)
}
const myObject = {
    'Game1':'NFS',
    'Game2':'Spiderman'
}
// for(const [key,value] of myObject)
// {
//      console.log(key,value)
// it will give error TypeError: myObject is not iterable }

//objects - for in 
//arrays - for of,in