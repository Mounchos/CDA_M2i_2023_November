const fs = require("fs");

let count;

let file = process.argv[2];
try {
    count = fs.readFileSync(file).toString().split('\n').length -1;
} catch(e) {
    console.log(e.message);
}


console.log(count);