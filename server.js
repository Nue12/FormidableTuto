const formidable = require("formidable");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const isRootUrl = req.url === "/";
  if (isRootUrl) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/script.js") {
    fs.readFile("script.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/upload") {
    let form = new formidable.IncomingForm();
    form.parse(req);
    form.on("fileBegin", (name, file) => {
      console.log(file);
      file.filepath = __dirname + "/uploadFile/" + file.originalFilename;
    });
    form.on("file", () => {
      res.write(JSON.stringify("file uploaded"));
      console.log("uploaded");
      res.end();
    });
  } else {
    let html = fs.readFileSync("index.html");
    res.write(html);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server listen at port 3000");
});
