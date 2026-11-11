/** @file services/socketService.js - Service Socket.IO facultatif. */
const { Server } = require('socket.io');
let io = null;
function init(server) {
    io = new Server(server);
    io.on('connection', function (socket) {
        console.log('Client connecté : ' + socket.id);
        socket.on('disconnect', function () {
            console.log('Client déconnecté : ' + socket.id);
        });
    });
    return io;
}
function getIO() {
    if (!io) throw new Error('Socket.IO non initialisé');
    return io;
}
module.exports = { init, getIO };
