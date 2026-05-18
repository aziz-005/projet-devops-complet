const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: "Success", message: "Chaine DevOps Complete Active !" }));
});
server.listen(3000, () => console.log('Running on port 3000'));