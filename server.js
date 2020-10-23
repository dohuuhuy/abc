let express = require('express');
let app = express();
let port = process.env.PORT || 80;

app.listen(port);

console.log('RESTful API server started on: ' + port);