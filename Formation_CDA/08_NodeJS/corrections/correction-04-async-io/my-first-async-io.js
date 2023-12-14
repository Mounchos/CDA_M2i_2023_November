const fs = require("fs/promises");

let filePath = process.argv[2];

async function countLines(file) {
    let count;

    try {
        count = (await fs.readFile(file)).toString().split('\n').length -1;
    } catch(e) {
        console.log(e.message);
    }

    console.log(count);
}

countLines(filePath);