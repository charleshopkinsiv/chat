import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let users = [];

wss.on('connection', function connection(ws) {
    
    // Add user to array and broadcast
    users.push(ws);
    broadcastMessage({
        type: 'newUser',
        username: ws.username
    });

    ws.on('message', function incoming(message) {
        const type = message.type;
        const to = message.to;
        message = message.toString();

        // Send message to a single user
        if(type === 'direct') {
            users.forEach(function each(client) {
                if (client.username === to) {
                && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        }

        // Broadcast message to all users
        elseif(type === 'chat') {
            broadcastMessage(message);
        }

        // Remove user from array and broadcast
        elseif(type === 'logout') {
            users.splice(users.indexOf(ws), 1);
            broadcastMessage({
                type: 'logout',
                username: ws.username
            });
        }
    });
});

function broadcastMessage(message) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
}