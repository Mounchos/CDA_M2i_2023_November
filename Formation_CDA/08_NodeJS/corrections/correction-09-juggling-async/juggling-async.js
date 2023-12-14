const http = require("http");

// On récupère les urls depuis les arguments passés au script
let urls = process.argv.slice(2);

// On promisify la méthode get du module http pour pouvoir utiliser async/await
function asyncGet(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let result = "";
        res.setEncoding("utf-8");
        res.on("data", (chunk) => {
          result += chunk;
        });
        res.on("end", () => {
          resolve(result);
        });
        res.on("error", (err) => {
          reject(err);
        });
      })
      .on("error", reject);
  });
}

// On résout toutes les promesses à l'aide de Promise.all()
Promise.all(urls.map(async (url) => await asyncGet(url)))
  // Une fois les promesses résolues, on les affiche une par une
  .then((values) => {
    values.forEach((value) => {
      console.log(value);
    });
  })
  .catch((error) => {
    console.error(error);
  });
