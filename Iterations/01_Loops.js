// Original for loop, counting from 0 to 9 with a message when i is 5
// for(let i=0;i<10;i++)
// {
//     console.log(i);
//    if(i == 5) console.log("5 is best number")
// }

// Nested for loop, multiplication table from 0 to 9
for(let i= 0; i<10;i++)
{
    // Inner loop for multiplication table up to 5
    for(let j=0;j<=5;j++){
        console.log(i + '*' + j + '=' + i*j)
    }
    console.log(" ") // Adding a space between each multiplication table
}

// Iterating through an array of superheroes
let myarray = ['flash','batman','superman','ironman']
for (let i=0;i<myarray.length;i++)
{
    console.log(myarray[i])
}

// For loop with break and continue
for(let i=1;i<=20;i++)
{
    if(i==5){//break0;
        console.log("continued") // Displaying a message when i is 5 and using continue to skip the rest of the loop body
        continue;
    }
    console.log(`value of i is ${i}`) // Displaying the value of i for each iteration
}
