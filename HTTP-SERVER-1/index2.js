const express = require('express');
const port = 3000
const app = express();
app.use(express.json());


// Creating multiple functionalities for different requests.
const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]; 

app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys;
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

// for sending the data in POST request, you send the data in the BODY
app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json ({
        msg: "Done!"
    }) 
})

app.put("/", function(req, res){
    for (let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function (req, res) {
    if (isThereAtleastOneUnhealthyKidney()) {
      const newKidneys = [];
      for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
          newKidneys.push({
            healthy: true,
          });
        }
      }
      users[0].kidneys = newKidneys;
      res.json({ msg: "done!" });
    } else {
      res.status(411).json({
        msg: "you have no bad kidneys",
      });
    }
  });

// to check if there is any unhealthy kidney
function isThereAtleastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false;
    for (let i=0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy) {
          atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}

app.get("/files/:fileName", function (req, res) {
    const name = req.params.fileName; //any parameter after localhost:3000/files/ x y z will be redirected here
    // and we can get that filename using this
  });

app.listen(port)

// Map function takes input from the user array and maps the input through a transformation function and provides the results.
// Map Synatx => const ans = arr.map(evenNumbers) >> this will take values from the "arr" array and process them with the "evenNumbers" function.

// Filter function is same as Map function but it just returns the values which are True. 
// Filter Syntax => const ans = arr.filter(oddNumbers) >> filter func will print only the true values i.e. the odd values only.