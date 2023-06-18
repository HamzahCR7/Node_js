const http = require('http');//import the core http module ;

const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  console.log(`your url is ${url} and method is ${method}`);
  res.writeHead(200, { "content-type": "text/html" });
  if (url == "/") {
    res.write("Home");
  } else if (url == "/about") {
    res.write("About");
  } else {
    res.writeHead('404');
    res.write("Page not found");
  }
  res.end(); //creating a server
});

const port='3000';//assigning a port number
server.listen(port,(()=>{
    console.log('listening on http ',port)   //making the serve up and running
}))