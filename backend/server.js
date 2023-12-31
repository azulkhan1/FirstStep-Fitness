const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserModel = require("./userSchema");
const hashPassword = require("./passwordHasher");
const { getPushWorkout } = require("./ppl/push");
const { getPullWorkout } = require("./ppl/pull");
const { getLegWorkout } = require("./ppl/legs");
const { getFullBodyWorkout } = require("./fullbody/fullBodyWorkout");
const { getUpperWorkout } = require("./UppLower/upper");
const { getLowerWorkout } = require("./UppLower/lower");
const { getBMI } = require("./bmiAPI");
const cors = require("cors");

app.use(cors());

app.use(express.json()); // Make sure it comes back as json
// app.use(express.urlencoded()); // Make sure it comes back as json

// import UserSchema from './userSchema.js';

// mongoose.connect(
//   "mongodb+srv://firststepfitness:KyOuGp90Gr4GmluW@cluster0.atn6plz.mongodb.net/firststepdb"
// );

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://firststepfitness:KyOuGp90Gr4GmluW@cluster0.atn6plz.mongodb.net/firststepdb",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.send("Welcome to the FirstStep Fitness API!");
// });

// const UserSchema = new mongoose.Schema({
//   fullName: String,
//   age: String,
//   gender: String,
//   height: String,
//   weight: String,
//   plan: String,
// });

// const UserModel = mongoose.model("users", UserSchema);

// app.get("/getUsers", (req, res) => {
//   UserModel.find({})
//     .then((users) => {
//       res.json(users); // Send the users as JSON response
//     })
//     .catch((error) => {
//       console.error("Error retrieving users:", error);
//       res.status(500).json({ error: "Error retrieving users" }); // Send an error response to the client
//     });
// });

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

app.use(cors()); // Add this line before your routes to enable CORS

// Add the login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await UserModel.findOne({ username });

    // If user exists and passwords match
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      // You might want to create a session or a token here
      res.json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Invalid username or password." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error occurred." });
  }
});

app.post("/signup", async (req, res) => {
  const { username, password, fullName, age } = req.body;

  try {
    // Hash the password before saving to the database
    const passwordHash = await hashPassword(password);

    // Create a new user instance and save it to the database
    const newUser = new UserModel({ username, passwordHash, fullName, age });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

app.get("/workout/ppl/push", async (req, res) => {
  const pushWorkout = await getPushWorkout();
  res.json(pushWorkout);
});

app.get("/workout/ppl/pull", async (req, res) => {
  const pullWorkout = await getPullWorkout();
  res.json(pullWorkout);
});

app.get("/workout/ppl/legs", async (req, res) => {
  const legWorkout = await getLegWorkout();
  res.json(legWorkout);
});

app.get("/workout/fullbody", async (req, res) => {
  const fWorkout = await getFullBodyWorkout();
  res.json(fWorkout);
});

app.get("/workout/upper", async (req, res) => {
  const upWorkout = await getUpperWorkout();
  res.json(upWorkout);
});

app.get("/workout/lower", async (req, res) => {
  const lowerWorkout = await getLowerWorkout();
  res.json(lowerWorkout);
});

app.post("/bmi", async (req, res) => {
  const { height, weight } = req.body;
  const getBmi = await getBMI(weight, height);
  res.json({ getBmi });
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));

// to do: seutp database
// have dummy data
// read the dummy data
// write it to the database
