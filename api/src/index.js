const http = require('http');

const host = `127.0.0.1`;
const port = 8000;

const points = [{
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
}];

const PATHS = {
    index: /^\/$/,
    points: /^(\/points\/?)$/i,
    point: /^(\/points\/)\d+\/?$/i,
}

const requestListener = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    switch (true) {
        case PATHS.index.test(req.url):
            res.writeHead(200);
            res.end(JSON.stringify({ message: "Okay" }));
            break
        case PATHS.points.test(req.url):
            res.writeHead(200);
            res.end(JSON.stringify(points));
            break
        case PATHS.point.test(req.url):
            res.writeHead(200);
            const point = (req.url).split('/')[2];
            res.end(JSON.stringify(points[point]));
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
