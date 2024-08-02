const express = require("express");
const port = 3000
const app = express();
app.use(express.json());

const kidneyId = req.query.kidneyId;
const username = req.headers.username;
const password = req.headers.password;

// Correct way of doing Pre-checks 
function userMiddleware(req, res, next) {
    if (username != "harkirat" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    if (kidneyId != 1 && password != 2) {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    } else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    // do something with kidney here

    res.send("Your kidney is Healthy");
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    // do something with kidney here

    res.send("Your kidney is Healthy");
});

app.put("/heart-checkup", userMiddleware, function(req, res){
    // do something with kidney here

    res.send("Your heart is Healthy");
});

// Global catches --> if any error occurs
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something is up with your inputs!"
    })
})

// UGLY WAY of writing routes and doing pre-checks.
// app.get("/health-checkup", function(req, res) {
//   if (username != "harkirat" || password != "pass") {
//      res.status(400).json({"msg": "something up with your inputs"})
//      return
//     } 
//    if (kidneyId != 1 || kidneyId != 2) {
//      res.status(400).json({"msg": "something up with your inputs"})
//      return
//     }
//    // do something with kidney
//    res.json({
//     msg: "your kidney is fine!"
//    })
// });

app.listen(3000);
