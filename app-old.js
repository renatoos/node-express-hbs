const http = require('http');

http.createServer((req, res) => {

    const header = {'content-type': 'application/json' }

    const message = {
        message:'Hello World',
        url : req.url
    }

    res.writeHead(200, {'content-type': 'application/json' })

    res.write(JSON.stringify(message));
    res.end();
})
.listen(8080);

console.log('Listening on port 8080');