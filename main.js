const http = require( id = 'http');
const pid = process.pid;
http
    .createServer( requestListener = (req,res) => {
      res.end(chunk = 'Hello from Node.js!');
    }).listen( port = 8800, listeningListener = () => {
      console.log('Server started.',pid);
});
