const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const io = require('socket.io');
const server = http.createServer(socketio);
const io = app(server,{
    cors: {
        origin: "*",
        methods: ['PUT', 'GET', 'POST']
    }
});
app.use(cors());
app.get('/'), (req, res)=>{
    res.send('success');
}

io.on('connection', socket=>{
    socket.emit('message, "hello');
    socket.on('inbox', message=>{
        console.log(message);
    })
})


server.listen("6000", ()=>{
    console.log("connected");
})