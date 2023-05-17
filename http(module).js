const http = require('http');

const server = http.createServer((request, response)=>{
   if (request.url === "/") {
    response.end("Welcome to our home page")
    return;
   }
   if (request.url === '/about') {
    response.end("Here is our about section")
    return;
   }
   response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000, ()=>{
    console.log("server is listening on port 5000...")
});