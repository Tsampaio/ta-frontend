const express = require('express');
const app = express();

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(5000);
