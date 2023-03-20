const main_web = require("./src/main/index.html")

module.exports = (port,client) => {
    const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    
    app.listen(3000, () => {
      console.log(`Server listening on port ${port}`);
      console.log(`http://localhost:${port}`)
    });
    
}