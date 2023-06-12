
const fs = require('fs');
const pug = require('pug');
const path = require('path');

const toCompileFile = "settings/to-compile.json";
const dataFile = "settings/data.json";
const srcDir = "src";

// read JSON file containing the list of files to compile
const toCompile = JSON.parse(fs.readFileSync(toCompileFile, "utf8"));

// read data to insert in the templates
const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));

for(const record of toCompile) {
    try {
        const compiled = pug.compileFile(path.join(srcDir, record.from), {
            pretty: true,
            basedir: srcDir
        });
    
        const html = compiled(data);
    
        fs.writeFile(record.to, html, (err) => {
            if(err) console.log(record.from + " -> " + record.to + " : failed to write")   
            else console.log(record.from + " -> " + record.to + " : OK")
        });
    }
    catch (e) {
        console.log(record.from + " -> " + record.to + " : " + (e.msg || e))
    }
}
