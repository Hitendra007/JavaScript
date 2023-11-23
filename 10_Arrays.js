const marvel_heroes = ['thor','Ironman','Spiderman']
const dc_heroes = ['superman','flash','batman']

// Using concat method
console.log(marvel_heroes.concat(dc_heroes)); // Output: ['thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman']

// Using spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); // Output: ['thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman']

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// Using flat method to flatten nested arrays
const real_another_array = another_Array.flat(2);
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a string is an array
console.log(Array.isArray('Hitesh')); // Output: false

// Converting a string to an array of characters
console.log(Array.from("Hitendra singh")); // Output: ['H', 'i', 't', 'e', 'n', 'd', 'r', 'a', ' ', 's', 'i', 'n', 'g', 'h']

// Converting object keys to an array
console.log(Array.from(Object.keys({ name: "Hitendra" }))); // Output: ['name']

// Creating an array using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]
