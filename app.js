const http = require('http');

const hostname = 'localhost';
const port = '3000';


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
    let data = '';
    req.on('data', chunk=> {
        data += chunk;
    })
    req.on('end', ()=>{
        console.log(JSON.parse(data));
    })
});


server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
});

console.log(process.argv.slice(2));

