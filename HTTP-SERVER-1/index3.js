const express = require("express");
const port = 3000
const app = express();
app.use(express.json());

app.get("/health-checkup", function(req, res) {
   const kidneyId = req.query.kidneyId;
   const username = req.headers.username;
   const password = req.headers.password;

  if (username != "harkirat" || password != "pass") {
     res.status(400).json({"msg": "something up with your inputs"})
     return
    } 
   if (kidneyId != 1 || kidneyId != 2) {
     res.status(400).json({"msg": "something up with your inputs"})
     return
    }
   // do something with kidney
   res.json({
    msg: "your kidney is fine!"
   })
});

app.listen(3000);
