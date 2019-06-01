const fs = require("fs");
const path = require("path");

function template(from, to) {
    if ( !fs.existsSync( to ) ) {
        fs.mkdirSync(to);
        console.log("   \x1b[36mcreate\x1b[0m : " + to);
    }
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
            console.log("   \x1b[36mcreate\x1b[0m : " + path.join(to, element));
        } else {
            template(path.join(from, element), path.join(to, element));
        }
    });
}

module.exports = function(from, to) {
    template(from, to);
}
