const fs = require("fs");

let file = process.argv[2];

fs.readFile(file, (err, data) => {

    if(err) {
        console.log(err.message)
        return;
    }

    console.log(data.toString().split('\n').length -1);
});