const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const hashPassword = require("./passwordHasher");

// app.use(express.json()); // Make sure it comes back as json
// app.use(express.urlencoded()); // Make sure it comes back as json

// import UserSchema from './userSchema.js';

mongoose.connect(
  "mongodb+srv://firststepfitness:KyOuGp90Gr4GmluW@cluster0.atn6plz.mongodb.net/firststepdb"
);

const UserSchema = new mongoose.Schema({
  fullName: String,
  age: String,
  gender: String,
  height: String,
  weight: String,
  plan: String,
});

const UserModel = mongoose.model("users", UserSchema);

app.get("/getUsers", (req, res) => {
  UserModel.find({})
    .then((users) => {
      res.json(users); // Send the users as JSON response
    })
    .catch((error) => {
      console.error("Error retrieving users:", error);
      res.status(500).json({ error: "Error retrieving users" }); // Send an error response to the client
    });
});

// const testuser =  {
//         fullName: "Haidar Almousawi",
//         age: "21",
//         gender: "Male",
//         height: "5'5",
//         weight: "150",
//         plan: "cut"
//  }

// app.post('/create', (req, res) => {
//     console.log("before ", req.body);
//      UserModel.create(testuser)
//     .then((users) => {
//         res.json(users); // Send the users as JSON response
//       })
//       .catch((error) => {
//         console.error("Error retrieving users:", error);
//         res.status(500).json({ error: "Error retrieving users" }); // Send an error response to the client
//       });

//       console.log("after ", req.body);

// });

app.listen(port, () => console.log(`Express app running on port ${port}!`));

// to do: seutp database
// have dummy data
// read the dummy data
// write it to the database
