
'use strict';
const AppError = require('./error');
const express = require('express');

// Constants
let PORT = 8080;
const HOST = '0.0.0.0';

process.argv.forEach(function (val) {
  if (val.startsWith('port=')) PORT = parseInt(val.replace('port=', '')) || 8080;
});

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
  console.log('Request received!');
});

app.get('/console', (req, res) => {
  res.send('Send console error');
  console.error(new AppError('What the huh?', 422, 'Console error'));
});

app.get('/throw', (req, res) => {
  res.send('Throwing error');
  throw new Error('Oh no!');
  //throw new AppError('Trowed super duper error.', 503, 'Title');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(process.argv);
