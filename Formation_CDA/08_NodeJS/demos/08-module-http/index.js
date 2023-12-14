import http from "http";

const config = {
  host: "127.0.0.1",
  port: 8080,
};

const server = http.createServer((req, res) => {
  console.log(req.method);
  const { headers } = req;
  console.log(headers);
  res.end("hello world!");
});

server.listen(config, () => {
  console.log(`listening on: http://${config.host}:${config.port}`);
});
