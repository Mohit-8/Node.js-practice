const EventEmitter = require("events");

const customEmitter = new EventEmitter();

const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

//Another way
// Using Event Emitter API
const server = http.createServer();
// emits request event
server.on("request", (req, res) => {
  res.end("Welcome to the page");
});

server.listen(5000);

customEmitter.on("response", () => {
  console.log(`data received`);
});

customEmitter.on("response", (name, age) => {
  console.log(`data received 2nd time ${name} and age is ${age}`);
});

customEmitter.emit("response", "mohit", 12);
