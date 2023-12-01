const express = require('express');
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const hashPassword = require("./passwordHasher");
const { getExercisesForBodyPart } = require("./excersiceDBApi");


// app.use(express.json()); // Make sure it comes back as json
// app.use(express.urlencoded()); // Make sure it comes back as json 

// import UserSchema from './userSchema.js';

mongoose.connect("mongodb+srv://firststepfitness:KyOuGp90Gr4GmluW@cluster0.atn6plz.mongodb.net/firststepdb")


const UserSchema = new mongoose.Schema({
    fullName: String,
    age: String,
    gender: String,
    height: String,
    weight: String,
    plan: String
});

const UserModel = mongoose.model('users', UserSchema);

app.get('/getUsers', (req, res) => {
    UserModel.find({})
      .then((users) => {
        res.json(users); // Send the users as JSON response
      })
      .catch((error) => {
        console.error("Error retrieving users:", error);
        res.status(500).json({ error: "Error retrieving users" }); // Send an error response to the client
      });
});


// BMI calculation endpoint
app.post('/bmi', (req, res) => {
  const { height, weight } = req.body;

  // Validate the input
  if (!height || !weight) {
    return res.status(400).json({ error: "Please provide both height and weight" });
  }

  // Convert height from centimeters to meters
  const heightInMeters = height / 100;

  // Calculate the BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  // Decide the fitness pathway based on BMI
  let pathway = '';
  if (bmi < 18.5) {
    pathway = 'Underweight - Eat more calories.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    pathway = 'Normal weight - Maintain your current diet and exercise.';
  } else if (bmi >= 25 && bmi <= 29.9) {
    pathway = 'Overweight - Cut down on calories and start exercising.';
  } else {
    pathway = 'Obesity - Consult a doctor for a suitable fitness plan.';
  }

  // Send the BMI and pathway as a response
  res.json({ bmi: bmi.toFixed(2), pathway });
});



app.get("/", (req, res) => {
  getExercisesForBodyPart("back");
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));








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






// to do: seutp database
// have dummy data 
// read the dummy data 
// write it to the database 