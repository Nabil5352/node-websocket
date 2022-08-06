## Websocket implementation with Node.js

##### Prerequisite
1. Node version used: 14.15.3
2. NPM version used: 6.14.9
3. NPM package for websocket: [WebScoket](https://www.npmjs.com/package/websocket)
4. NPM package for ws [**Recommended**]: [WS](https://www.npmjs.com/package/ws)


##### Server Implementation
1. First create a folder `cert` and insider the folder generate certificate and key file for secure https server. [Node Tutorial](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/)
2. Run any implementation using following command. HTTPS only enabled for `ws` implementation.

    node ws

##### Find WAN IP
Find WAN IPN using following command (Ubuntu)

    ip addr show

This will show an IP like 192.*.*.* 

##### Client Implementation
Open `Client.html` in browser or

From browser console open an webscoket connection

    let wss = new WebSocket("wss://<Your-Wan-IP>:8080")

Add an event listener which prints if any message is received

    wss.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });
    wss.onclose = function(event) {console.log(event);};

