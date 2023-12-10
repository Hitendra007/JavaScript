const submitButton = document.getElementById('submit')
console.log(submitButton)  // Corrected variable name
submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const h = document.getElementById('Height')
    const w = document.getElementById('weight')
    let weight = Number(w.value)
    let height = Number(h.value)
    if(Number(h.value)==0 && Number(w.value)==0 )
    {
        let error = document.getElementById('error')
        error.innerHTML=`<h3 id="errormsg">Height and weight should be greater than 0</h3>`
    }
    else{
        let bmi = weight/Math.pow((height/100),2);
        bmi = bmi.toFixed(2)
        const res = document.getElementById('result')
        res.innerHTML=`<h3>BMI: ${bmi}</h3>`
        res.style.display='block'
    }
})
