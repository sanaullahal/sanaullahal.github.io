/**
 * addmod.js
 */

exports.add = function(req, res, vals) {
    const sum = parseFloat(vals.first) + parseFloat(vals.second);
    res.writeHead(200, {"Content-Type":"text/html"});
    const content = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Calculator webapp</title>
            </head>
            <body>
                <h1 style='color:blue;'>The sum is: ${String(sum)}</h1>
            </body>
        </html>
    `;
    res.write(content);
    return res.end();
};
