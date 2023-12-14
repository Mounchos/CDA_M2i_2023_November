const fs = require("fs");
const path = require("path");

let filePath = process.argv[2];
let extensionFilter = process.argv[3];

function filterByExtension(pathFile, extension) {
    fs.readdir(pathFile, (err, files) => {
        if(err) {
            console.log(err.message);
            return;
        }

        let filteredList = files.filter(file => path.extname(file) === `.${extension}`);
        filteredList.forEach(f => console.log(f));
    });
}

filterByExtension(filePath, extensionFilter);