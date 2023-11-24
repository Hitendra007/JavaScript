// Falsy values in JavaScript: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values: "0", 'false', ' ', [], {}, function(){}
// The Nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.

const userEmail = "";

// Check if userEmail is truthy or falsy and log the result
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Nullish coalescing operator examples
let val1;

// If val1 is null, it will be assigned the value 4
val1 = null ?? 4;
console.log(val1); // Output: 4

// If val1 is undefined, it will be assigned the value 15
val1 = undefined ?? 15;
console.log(val1); // Output: 15

// Ternary operator example
const price = 545;

// If price is greater than 500, log "greater"; otherwise, log "not greater"
price > 500 ? console.log("Greater") : console.log("Not greater");
