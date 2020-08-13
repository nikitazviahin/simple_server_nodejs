const http = require('http');
const pid = process.pid;
const port = 8800;
const chunk = 'Hello from Node.js!';

const requestListener = (req,res) => {
  for (let i = 0; i < 1e7; i++);
  res.end(chunk);
}

const listeningListener = () => {
  console.log('Server started. Pid: ',pid);
}

http.createServer(requestListener).listen( port, listeningListener );
