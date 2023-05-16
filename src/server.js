import server from "./app.js";
import { Server } from "socket.io";
import fs from "fs";

const PORT = process.env.PORT || 8080;
const ready = () => { console.log("Server ready on port " + PORT) };
const chats = [];
const http_server = server.listen(PORT, ready);
const socket_server = new Server(http_server);
socket_server.on('connection', (socket) => {
    socket.on('auth', () => {
        return null;
    });
    socket.on('new-message', data => {
        chats.push(data);
        socket_server.emit('all-messages', chats);
    });
})
