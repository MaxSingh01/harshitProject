const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/upclTest'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/upclTest/index.html'));
})

app.listen(port, () => {
  console.log(`Server listen on port number ${port}`)
})
