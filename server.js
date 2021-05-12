
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const path = require('path');


// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });