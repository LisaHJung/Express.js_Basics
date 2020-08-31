// Create a npm sproject and install Express.js
// Create an express.js app which funnels requests through 2 middleware functions that log something to the console and return one resposne
// Handle requests to / and users that each request only has one handler/middleware that does something with it(send dummy response. 

const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     console.log("Middleware 1")
//     next()
// })

// app.use((req, res, next) => {
//     console.log("Middleware 2")
//     res.send('<h1>This is the user profile page</h1>')
// })

app.use("/users", (req, res, next) => {
  console.log("/users middleware");
  res.send("<p> The middleware in charge of /users </p>");
});

app.use("/", (req, res, next) => {
  console.log("/middleware");
  res.send("<p> The middleware in charge of / </p>");
});

app.listen(3000);
