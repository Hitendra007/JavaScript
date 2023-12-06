const myObj = {
    js:"javaScript",
    cpp:'C++',
    rb:"ruby",
    swift:'swift by apple'
}

for(const key in myObj)
{
    console.log(key,":",myObj[key])
}
const coding = ['js','rb','py','java','cpp']
// for(const elem in coding)
// {
//     console.log(coding[elem])
// }

// coding.forEach(( elem )=>{
//     console.log(elem)
// })
function printme(elem){
    console.log(elem)
}

coding.forEach(printme)
// array.forEach(elem,index,fullarray)