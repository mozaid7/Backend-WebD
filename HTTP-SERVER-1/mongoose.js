const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/"
);


// app.post("/signup", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   const name = req.body.name;

//   const existingUser = await User.findOne({ email: username });
//   if (existingUser) {
//     return res.status(400).send("Username already exists!!!");
//   }
//   else{
//     return res.send("No user found sss")
//   }
// });

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({ name: "b", email: "bcd@123", password: "bcd" });
user.save();
app.listen(3000);