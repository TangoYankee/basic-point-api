const http = require('http');

const host = `127.0.0.1`;
const port = 8000;

const point = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.51429143703932,
          42.46254403506475
        ],
        "type": "Point"
      }
    }
  ]
}

const requestListener = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end(JSON.stringify({ message: "Okay" }));
            break
        case "/point":
            res.writeHead(200);
            res.end(JSON.stringify(point));
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
