const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to our Home page")
    }
    else if(req.url === '/about'){
        res.end('We are actually beignner at node js')
    }else{
    res.end(`<h1> Oops! </h1>
        <p>we can not find the page that you are looking for</p>
        <a href="/">reload page</a>`)
}})
server.listen(6100)