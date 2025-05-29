import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url == '/pool') {
        setTimeout(() => {
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify(
                {message:`Hello at ${new Date().toISOString()}`}
            ))
        }, 1000);
    }
    else{
        res.writeHead(200)
        res.end("server is up and runnning")
    }
})


server.listen(3000,()=>{
  console.log('server is up and running !!')
},)