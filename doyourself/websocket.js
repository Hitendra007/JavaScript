import { WebSocketServer } from 'ws';  // notice { WebSocketServer }

const server = new WebSocketServer({ port: 3000 });

server.on('connection', (socket) => {
    console.log('Client connected !!');
    
    socket.send('Hello world');

    socket.on('message', (message) => {
        console.log('Received from client:', message.toString());
        socket.send('Hello from server');
    });
});

console.log("WebSocket server is running at ws://localhost:3000");
