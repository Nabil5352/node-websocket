const fs = require('fs');
const https = require("https");
const WebSocketServer = require('ws').Server;

var options = {
    key: fs.readFileSync('cert/key.pem'),
    cert: fs.readFileSync('cert/cert.pem')
};  

const httpsServer = https.createServer(options, (request, response) => {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
}).listen(8080, () => console.log((new Date()) + ' Server is listening on port 8080'))

let connection = null;

const wssServer = new WebSocketServer({
    server: httpsServer
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

wssServer.on('connection', function(ws) {
    // if (!originIsAllowed(request.origin)) {
    //   // Make sure we only accept requests from an allowed origin
    //   request.reject();
    //   console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    //   return;
    // }
    
    // connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    setInterval(sendEvery5seconds, 5000, ws);
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });

    ws.send("Hello world!");
    // connection.on('close', function(reasonCode, description) {
    //     console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    // });
});

function sendEvery5seconds(connection) {
    connection.send(`Message ${Math.random()}`);
}

