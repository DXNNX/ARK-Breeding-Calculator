const express = require('express');
const path = require('path');

const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH),
  };

const server = https.createServer(options, app);


// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, 'static')));

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});