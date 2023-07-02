const http = require('http');

const host = `127.0.0.1`;
const port = 8000;

const requestListener = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end(JSON.stringify({ message: "Okay" }));
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ message: "Resource not found" }));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.info(`Server is running on http://${host}:${port}`);
});
