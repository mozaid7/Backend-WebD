const express = require('express');
const port = 3000
const app = express();


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

app.listen(port)