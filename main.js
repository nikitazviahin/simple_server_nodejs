const http = require('http');
const pid = process.pid;
const port = 8800;
const chunk = 'Hello from Node.js!';

const requestListener = (req,res) => {
  for (let i = 0; i < 1e7; i++);
  res.end(chunk);
}

const listeningListener = () => {
  console.log('Worker started. Pid: ',pid);
}

const server = http.createServer(requestListener).listen( port, listeningListener );

process.on('SIGINT', () => {
  console.log('SIGINT recieved');
  server.close( () => {
    process.exit(0);
  })
});

process.on('SIGTERM', () => {
  console.log('SIGTERM recieved');
  server.close( () => {
    process.exit(0);
  })
});

process.on('SIGUSR2', () => {
  console.log('SIGUSR2 recieved');
  server.close( () => {
    process.exit(1);
  })
});
