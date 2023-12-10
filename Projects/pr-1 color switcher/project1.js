const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
console.log(buttons)
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
         const color = e.target.id;
         body.style.backgroundColor=color;
    })
})