const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/"
);

const User = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
  });

  const user = new User ({ 
    name: "Mohammed Zaid", 
    email: "mzee98@gmail.com", 
    password: '123456' 
  });

 user.save();