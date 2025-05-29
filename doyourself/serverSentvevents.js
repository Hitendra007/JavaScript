import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url == '/events') {
        res.writeHead(200, {
            "content-type": 'text/event-stream',
            "cache-control": 'no-cache',
            "Connection": 'keep-alive'
        })
        const interval = setInterval(() => {
            res.write(`data : ${new Date().toISOString()}`)
        }, 2000)
        req.on("close",()=>{
            clearInterval(interval);
            res.end();
        })
    }
    else{
        res.writeHead(200,
           {
            "content-type":"Application/json"
           } 
        )
        res.end("Server is up and running !!")
    }
})

server.listen(3000,()=>{
    console.log(`Server is listening on port 3000`)
})