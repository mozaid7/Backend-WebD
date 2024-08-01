// How to create a simple HTTP server and how to create different requests like GET, POST, PUT, DELETE, etc.

const express = require('express');
//const bodyParser = require("body-parser");

const port = 3000
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!')
})

// app.post('/', function(req, res) {
//     console.log(req.body)
//     res.send('Hello World!')
// }) 

// middlewares
//app.use(bodyParser.json());
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


// Logic Creation on HTTP server created 
// middlewares
// app.use(bodyParser.json());
// app.post('/backend-api/conversation', function(req, res) {
//     const message = req.query.message;
//     console.log(message)
//     res.json({
//         output: "2 + 2 = 4"
//     })
// })


//used for adding input to the function that we are calling syntax => localhost:{portnumber}/?n=value
// For providing a parameter during a server request, use ?n=3   or ?n=4, etc.
function sum(n) {
    let ans = 0;
    for (let i = 1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}
app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi youri ans s " + ans);
})

app.listen(port)