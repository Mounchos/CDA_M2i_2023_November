import http from "http";

const config = {
  host: "127.0.0.1",
  port: 8080,
};

const server = http.createServer((req, res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    })
    req.on('end', () => {
        let result = Buffer.concat(body).toString();
        res.write("Voici le résultat de la requête POST sur le serveur:");
        res.end(result);
    })
});

server.listen(config, () => {
  console.log(`listening on: http://${config.host}:${config.port}`);
});
