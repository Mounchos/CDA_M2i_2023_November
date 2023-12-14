import http from "http";

const config = {
  host: "127.0.0.1",
  port: 8080,
};

const server = http.createServer((req, res) => {
    if(req.method !== "GET") {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({code: 404, message: "Requête invalide"}));
    }

    res.end("<h1>Welcome to my server</h1>");
});

server.listen(config, () => {
  console.log(`listening on: http://${config.host}:${config.port}`);
});
