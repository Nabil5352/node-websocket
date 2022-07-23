const http = require("http");
const WebSocketServer = require('ws').Server;

const httpServer = http.createServer((request, response) => {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
})

let connection = null;

httpServer.listen(8080, () => console.log((new Date()) + ' Server is listening on port 8080'))

const wsServer = new WebSocketServer({
    server:httpServer
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

wsServer.on('connection', function(ws) {
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

    ws.send("You said: something");
    // connection.on('close', function(reasonCode, description) {
    //     console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    // });
});

function sendEvery5seconds(connection) {
    connection.send(`Message ${Math.random()}`);
}

