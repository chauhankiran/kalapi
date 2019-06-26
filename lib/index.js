const fs = require("fs");
const path = require("path");

const copy_template = require("./template");

module.exports = function(name, template="") {
    var curr_path = ".";
    if (template === "b") {
        var template_path = path.join(__dirname, "..", "bootstrap");
    } else {
        var template_path = path.join(__dirname, "..", "template");
    }

    // Convert the application name into something that npm does not complain.
    var name = path.basename(name).replace(/[^A-Za-z0-9.-]+/g, '-').replace(/^[-_.]+|-+$/g, '').toLowerCase();

    // Create a project only if folder with name is not exist.
    var is_project_exist = fs.existsSync(path.join(curr_path, name));
    if (is_project_exist) {
        console.log(name + " is already exist.");
        process.exit(1);
    } else {
        fs.mkdirSync(path.join(curr_path, name));
        var app = path.join(curr_path, name);
        copy_template(template_path, app);

        // package.json
        let pkg = {
            name: name,
            version: '0.0.0',
            private: true,
            scripts: {
                start: 'node app'
            },
            dependencies: {
                "ejs": "~2.6.1",
                "express": "~4.16.1"
            }
        }
        fs.writeFileSync(path.join(app, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
        console.log("   \x1b[36mcreate\x1b[0m : package.json");

        console.log();
        console.log("   change directory:");
        console.log("     $ cd " + app);
        console.log();
        console.log("   install dependencies:");
        console.log("     $ npm install");
        console.log();
        console.log("   run the app:");
        console.log("     $ npm start");
        console.log();
    }
}
