const path = require("path");
const fs = require("fs");

module.exports = function sortFile(directory, extension, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }

    let filteredList = files.filter(
      (file) => path.extname(file) === `.${extension}`
    );
    return callback(err, filteredList);
  });
};
