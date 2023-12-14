const sortFile = require("./mymodule.js");

sortFile(process.argv[2], process.argv[3], (err, data) => {
    if(err) {
        console.log(err.message);
        return;
    }

    data.forEach(file => console.log(file));
});