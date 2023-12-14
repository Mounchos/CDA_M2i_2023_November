const http = require("http");

http.get(process.argv[2], (res) => {
  let body = "";
  res.setEncoding("utf8");
  res.on("data", (data) => {
    body += data;
  });
  res.on("end", () => {
    console.log(body.length);
    console.log(body);
  });
});
