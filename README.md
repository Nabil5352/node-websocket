## Websocket implementation with Node.js

##### Prerequisite
1. Node version used: 14.15.3
2. NPM version used: 6.14.9
3. NPM package for websocket: [WebScoket](https://www.npmjs.com/package/websocket)
4. NPM package for ws: [WebScoket](https://www.npmjs.com/package/ws)

##### Client Implementation
From browser open an webscoket connection

    let ws = new WebSocket("ws://localhost:8080", 'echo-protocol')

Add an event listener which prints if any message is received

    ws.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });
    ws.onclose = function(event) {console.log(event);};

##### Server Implementation
Run any implementation using node

    node ws

Or

    node websocket