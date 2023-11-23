// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23, 10, 4)
console.log(myCreatedDate)
console.log(myCreatedDate.toLocaleString())
let mytimestamp = Date.now()
console.log((((((mytimestamp) / 1000) / 3600) / 24) / 30) / 12)
// In JavaScript, when you print a Date object, it typically outputs a long integer value.
// This integer value represents the number of milliseconds that have elapsed since 
// January 1, 1970, at 00:00:00 UTC.This point in time is known as the "Unix epoch.
// " This timekeeping system is often referred to as Unix time or Unix timestamp.