const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Load SSL certificate and key
const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'fullchain.pem')),
};

// Create HTTPS server
const server = https.createServer(options, app);

// Define routes
app.use(express.static(path.join(__dirname, 'static')));

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});