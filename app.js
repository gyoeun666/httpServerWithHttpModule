const http = require("http");
const express = require("express");
const { createUser, createPost } = require("./user");

const app = express();
app.use(express.json());

app.post("/signup", createUser);
app.post("/post", createPost);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
