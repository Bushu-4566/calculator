 const sumRequestHandler=require('./sum');
const querystring = require('querystring');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    // Home Page
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>practice set</title></head>
                <body>
                    <h1>welcome to calculators</h1>
                    <a href="/calculator">go to calculator</a>
                </body>
            </html>
        `);
        return res.end();
    }

    // Calculator Page
    else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head><title>practice set</title></head>
                <body>
                    <h1>here is the calculator</h1>
                    <form action="/calculate-result" method="POST">
                        <input type="text" placeholder="first num" name="first"/>
                        <input type="text" placeholder="second num" name="second"/>
                        <input type="submit" value="submit"/>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    // Handle POST Request
else if(req.url.toLowerCase()==='/calculate-result' && req.method === 'POST'){
     return sumRequestHandler(req,res);
    
}
        
     

    // 404 Page
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>practice set</title></head>
            <body>
                <h1>404 page not exists</h1>
                <a href="/">go to home</a>
            </body>
        </html>
    `);
    return res.end();
};

module.exports = requestHandler;
