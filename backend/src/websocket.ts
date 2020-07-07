import socketio from 'socket.io';
import { HttpBase } from 'http';

let io;

const webSocketConfig = (server: HttpBase) => {
    io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
    })
};

export { webSocketConfig };