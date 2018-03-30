"use strict"

const fs = require('fs');
const path = require('path');
const process = require("process");
const execSync = require('child_process').execSync;

let version = null;
["./givemetheservice/package.json",
"./givemetheservice-auth-jwt/package.json",
"./givemetheservice-https/package.json",
"./givemetheservice-mongo/package.json",
"./givemetheservice-nodemailer/package.json"
].forEach(file => {
    let p = JSON.parse(fs.readFileSync(file, "utf8"));
    if (!version) {
        let tokens = p.version.split(".");
        let subversion = parseInt(tokens[2]) + 1;
        tokens.splice(2, 1, subversion);
        version = tokens.join(".");
    }
    p.version = version
    console.log(p.version)
    if (p.dependencies.giveme) {
        p.dependencies.giveme = "^" + p.version
    }
    fs.writeFileSync(file, JSON.stringify(p, null, 4), "utf8");
});

[
"givemetheservice",
"giveme-auth-jwt",
"giveme-https",
"giveme-mongo",
"giveme-nodemailer"
].forEach(dir => {
    
    process.chdir(dir);
    console.log('process.cwd(): ', process.cwd());
    execSync("git add -A");
    let message = "\"Version " + version + "\"";
    execSync("git commit -am " + message);
    execSync("git push");
    execSync("npm publish")
    process.chdir("..");
    console.log("complete")
});

