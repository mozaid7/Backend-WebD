const express = require('express');
const port = 3000
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!')
})

// app.get("/zaid-handler", function (req, res) {
//     res.json({
//         name: "Zaid",
//         age: 20,
//    });
//  });

app.listen(port)