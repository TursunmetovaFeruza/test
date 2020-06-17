
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/test'));


// app.all("/*", function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/test/index.html'));
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/test/index.html'));
});

app.listen(process.env.PORT || 8080);
