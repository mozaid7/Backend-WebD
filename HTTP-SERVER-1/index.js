const express = require('express');
//const bodyParser = require("body-parser");

const port = 3000
const app = express();

// app.get('/', function(req, res) {
//     res.send('Hello World!')
// })

// Logic Creation on HTTP server created 
// For providing a parameter during a server request, use ?n=3 or anything else
// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i<=n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }
// app.get("/", function(req, res) {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hi your ans is " + ans);
// })

// Creating multiple functionalities for different requests.
 const user = [{
    name: "Zaid",
    kidneys: [{
        healthy: false
    }]
}]; 

app.get('/', function(req, res) {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i=0; i<johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json ({
        numberOfKidneys, numberOfHealthyKidneys, numberOfUnhealthyKidneys
    })
})
 

// app.post('/', function(req, res) {
//     console.log(req.body)
//     res.send('Hello World!')
// }) 

// app.get("/zaid-handler", function (req, res) {
//     res.json({
//         name: "Zaid",
//         age: 20,
//    });
//  });

// middlewares
//app.use(bodyParser.json());
// app.post('/backend-api/conversation', function(req, res) {
//     const message = req.query.message;
//     console.log(message)
//     res.json({
//         output: "2 + 2 = 4"
//     })
// })

app.listen(port)