

let port = 5000;

const express = require('express');
const uniqeMobileUser = require('./controller');
app = express();

app.get('/futworkapi',uniqeMobileUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});