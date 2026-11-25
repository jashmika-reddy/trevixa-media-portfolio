const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 4173);
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".PNG": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const safeRel = path.normalize(urlPath === "/" ? "/index.html" : urlPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, safeRel);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404);
      return res.end("Not Found");
    }

    const ext = path.extname(filePath);
    const contentType = MIME[ext] || MIME[ext.toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      if (Number.isNaN(start) || start >= stat.size || end >= stat.size) {
        res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
        return res.end();
      }
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": contentType
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
    } else {
      res.writeHead(200, {
        "Content-Length": stat.size,
        "Content-Type": contentType,
        "Accept-Ranges": "bytes"
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Trevixa Media Portfolio serving at http://localhost:${PORT}`);
});
