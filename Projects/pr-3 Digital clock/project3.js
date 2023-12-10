const clock = document.getElementById('clock')
// console.log(date.toLocaleTimeString())

setInterval(function (){
let date  = new Date()
// console.log(date.toLocaleTimeString());
clock.innerText=date.toLocaleTimeString()
},1000)