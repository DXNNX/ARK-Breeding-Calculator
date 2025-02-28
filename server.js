const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();

// Load SSL certificate and key

// Create HTTPS server
const server = http.createServer(app);

// Define routes
app.use(express.static(path.join(__dirname, 'static')));

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});