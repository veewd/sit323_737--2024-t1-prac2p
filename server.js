const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set content type
    res.setHeader('Content-Type', 'text/html');

    // Read the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            // Handle error
            res.writeHead(500);
            res.end('Error loading index.html');
        } else {
            // Send the HTML content
            res.writeHead(200);
            res.end(data);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

