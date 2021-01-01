// dependencies
const express = require('express');
const app     = express();

// port
const port = 3000;

// middleware
// ?

// data
const dates = [
  { name: "Bangor", created_at: Date.now() },
  { name: "San Jose", created_at: Date.now() },
  { name: "Bozeman", created_at: Date.now() }
];

// get route

// post route


app.listen(port, () => console.log('Running on port: ', port));
