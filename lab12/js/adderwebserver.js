/**
 * adderwebserver.js
 * 
 * This is an HTTPServer for performing Calculator Add operations
 * A demonstration of server-side HttpRequest data processing
 */

const http = require("http");
const url = require("url");
const fs = require("fs");
const addmod = require("./addmod.js");

console.log(`Starting server...`)

http.createServer(function(req, res) {
    const endPointURL = url.parse(req.url, true);
    const endpointURLFileName = "." + endPointURL.pathname;
    if(endPointURL.pathname == "/add.js") {
        addmod.add(req, res, endPointURL.query);
    } else {
        fs.readFile(endpointURLFileName, function(err, data) {
            if(err) {
                res.writeHead(404, {"Content-Type": "text/html"});
                return res.end("<h2 style='color:red;'>404 Not Found</h2>");
            }
            res.writeHead(200); // Because the simpleAdder is a.html file, no need to give the content-type here
            res.write(data); // data contains the markup in simpleAdder.html
            return res.end();
        });
    }
}).listen(8080);
console.log(`Server started. Listening on port 8080`);
