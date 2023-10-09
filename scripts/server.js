var http = require('http');

http.createServer(function(req, res) {
    res.end("Hello world! Welcome to my website")
}).listen(8081);

console.log("Server criado");

//Criando servidor com node 

