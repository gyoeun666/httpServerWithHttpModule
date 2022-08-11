const http = require("http");
const express = require("express");
const {
  createUser,
  createPost,
  postDataSearch,
  retouchPost,
  deletePost,
  userPostSearch,
} = require("./user");

const app = express();
app.use(express.json());

app.post("/signup", createUser);
app.post("/addpost", createPost);
app.get("/postsearch", postDataSearch);
app.patch("/retouchPost", retouchPost);
app.delete("/delete", deletePost);
app.get("/user-post", userPostSearch);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
