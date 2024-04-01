const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Servir index.html si la ruta es '/'
  if (req.url === '/' || req.url === '/index.html') {
    const indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // Rutas de archivos estáticos
  const assetsPath = path.join(__dirname, req.url);

  // Servir archivos estáticos
  fs.readFile(assetsPath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 - Not Found');
      return;
    }

    // Determinar el tipo MIME basado en la extensión del archivo
    const ext = path.extname(assetsPath).toLowerCase();
    let contentType = 'text/html';
    if (ext === '.css') {
      contentType = 'text/css';
    } else if (ext === '.js') {
      contentType = 'text/javascript';
    } else if (ext === '.png') {
      contentType = 'image/png';
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
