const express = require('express');
const path = require('path');
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(5000);
