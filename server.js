const express = require('express');
const path = require('path');

const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const options = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'fullchain.pem')),
};

const server = https.createServer(options, app);


// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, 'static')));

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});