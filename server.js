const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const {Server} = require('socket.io')

app.use(cors());
// const socketIO = require("socket.io")(http, {
  //   cors: {
    //     origin: "http://localhost:5173",
    //     methods: ["GET", "POST"]
    //   },
    // });
    
    // socketIO.on("connection", (socket) => {
    //   console.log(`⚡️: ${socket.id} user connected!`);
      
    //   socket.on('message', (msg)=> {
    //     console.log(msg);
    //   })
      
    //   socket.on("disconnect", () => {
    //     console.log("🔥: A user disconnected");
    //   });
    // });

const data = require("./data.json"); // Assuming data.json is in the same directory as server.js

app.get("/api", (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// socket.io server

const server = http.createServer(app)
server.listen(5000, ()=>{
  console.log(`socket server started at 5000`);
})

const io = new Server(server)
 io.on('connection', (socket) => {
  console.log(`a new user has connected`, socket.id);
 })