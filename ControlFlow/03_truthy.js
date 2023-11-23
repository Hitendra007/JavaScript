const userEmail = ""
if (userEmail) {
    console.log("got user email")
}
else {
    console.log("Don't have user email")
}
// falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
// "0" , 'false',' ',[],{},function(){}
// Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 4
console.log(val1)
val1 = undefined ?? 15
console.log(val1)

//terniary operator
// condition ? true block : false block
const price = 545
price > 500 ? console.log("greater") : console.log("not greater")

