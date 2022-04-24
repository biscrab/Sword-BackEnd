const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});

io.on('connection', socket => {
    socket.on("connect", (name) => {
        socket.emit("winning", name)
    })
})