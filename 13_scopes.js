// let a = 3000
// if(true)
// {
//     a = 10
//     const b = 20
//     var c = 30
//     console.log(a)
// }
//  console.log(a)
// console.log(b)
// console.log(c)
function one(){
    const username = "Hitendra"
    function two()
    {
        const website = "yoututbe"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()
if(true){
    const username = "Hitendra"
    if(username === "Hitendra")
    {
        const website = "Youtube"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

// +++++++++++++++++++ interesting ++++++++++++++
console.log(addone(5))
function addone(num){
       return num+1
}
// console.log(addtwo(5)) Cannot access 'addtwo' before initialization

const addtwo = function(num){
    return num+2
}
console.log(addtwo(4))