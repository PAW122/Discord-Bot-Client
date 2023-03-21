const path = require('path');
const express = require('express');

function main(port, client) {
  const app = express();

  app.use(express.static(path.join(__dirname, 'src/main')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './src/main/index.html'));
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`http://localhost:${port}`)
  });
}

module.exports = main;