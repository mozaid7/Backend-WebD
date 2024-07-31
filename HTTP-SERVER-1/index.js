const express = require('express');
const bodyParser = require("body-parser");

const port = 3000
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!')
})

// middlewares
app.use(bodyParser.json());

// app.post('/', function(req, res) {
//     console.log(req.body)
//     res.send('Hello World!')
// })

// app.post('/backend-api/conversation', function(req, res) {
//     const message = req.query.message;
//     console.log(message)
//     res.json({
//         output: "2 + 2 = 4"
//     })
// })

// app.get("/zaid-handler", function (req, res) {
//     res.json({
//         name: "Zaid",
//         age: 20,
//    });
//  });

app.listen(port)