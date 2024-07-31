const express = require('express');
const bodyParser = require("body-parser");

const port = 3000
const app = express();

// middlewares
app.use(bodyParser.json());
app.post('/', function(req, res) {
    console.log(req.body)
    res.send('Hello World!')
})

// app.get("/zaid-handler", function (req, res) {
//     res.json({
//         name: "Zaid",
//         age: 20,
//    });
//  });

app.listen(port)