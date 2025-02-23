const https = require('https')

https.get('https://jsonplaceholder.typicode.com/posts',(res)=>{
    let data=""
    res.on('data',(chunk)=>{
        data+=chunk;
    })
    res.on('end',()=>{
        data = JSON.parse(data);
        console.log(data);
    })
}).on('error',(error)=>{
    console.log(`Error:${error.message}`)
})

