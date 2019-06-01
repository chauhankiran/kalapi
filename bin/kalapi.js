#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const usage = require("../lib/help.js");
const version = require("../lib/version.js");
const application = require("../lib/index.js");

// The starting points.
function main() {
    var args = process.argv;
    
    if ( args.length > 3 ) {
        usage();
    } else {
        switch (args[2]) {
            case "--help":
            case "-h":
                usage();
                break;
            case "--version":
            case "-v":
                version();
                break;
            default:
                application(args[2]);
                break;           
        }
    }
}

main();
