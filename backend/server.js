// import the required package
const server = http.createServer((req, res) => {
    if  (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, Stella, nice coding with you!');
        return;
      }
      else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is our About page');
        return;
      }

      
      else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not found');
        return;
      }
    })
    // dedclare a port variable
const port = 3000;

// starting the server

server.listern(port, () => {
    console.log(`server running at at http://localhost:${port}/`);
});

