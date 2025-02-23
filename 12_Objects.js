// Creating an object using object literal syntax
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = 'Sammy';
tinderUser.isLoggedIn = false;

// Displaying the tinderUser object
console.log(tinderUser);
/*
Output:
{
  id: '123abc',
  name: 'Sammy',
  isLoggedIn: false
}
*/

// Creating an object with nested structure
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitendra",
            lastname: "Singh"
        }
    }
};

// Accessing nested properties
console.log(regularUser.fullname.userfullname.firstname);
// Output: Hitendra

// Combining two objects using the spread operator
const obj1 = { 1: "a", 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
// Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

console.log(obj1);
// Output: { 1: 'a', 2: 'b' }

// Using Object.keys, Object.values, and Object.entries
console.log(Object.keys(tinderUser),'jkgkj');
// Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
// Output: [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
/*
Output:
[
  [ 'id', '123abc' ],
  [ 'name', 'Sammy' ],
  [ 'isLoggedIn', false ]
]
*/

// Checking if an object has a specific property
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Output: true


const course = {
    couresename: "js course",
    price:'999',
    courseInstructor:"Hitesh choudhary"
}

//cousre.courseInstructor
const {courseInstructor:instructor} = course
console.log(instructor)
const {courseInstructor} = course
console.log(courseInstructor)