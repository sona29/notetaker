// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const path = require('path');


// Tells node that we are creating an "express" server
const app = express();

app.use(express.static(__dirname + '/public'));

// Sets an initial port. We"ll use this later in our listener
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 8080;

// ROUTES
require('./routing/api-routes')(app);
require('./routing/html-routes')(app);





app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });