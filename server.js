
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
  console.log('Request received!');
});

app.get('/console', (req, res) => {
  res.send('Send console error');
  console.error(new Error('What the huh?'));
});

app.get('/throw', (req, res) => {
  res.send('Throwing error');
  throw new Error('Trowed super duper error.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
