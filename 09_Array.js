const myarray = [0,1,2,3,4,5]
const myheroes = ['shaktiman','nagraj']
const myarr2 =new Array(2,4,54,35,3,3,3)
// console.log(myarr2)
// myarray.push(24378)
// myarray.pop()
myarray.unshift(8)
myarray.shift()
const newarr = myarray.join("-")
console.log(myarray)
console.log(newarr)

console.log("A ",myarray)

const new1 = myarray.slice(1,3) // it return elems in range [1,3) means 1,2 from original array

console.log(new1)
console.log("B ",myarray)

const new2 = myarray.splice(1,3)//splice change original array ,it removes range of elems from original array in range [1,3]
console.log(new2)
console.log("c ",myarray)