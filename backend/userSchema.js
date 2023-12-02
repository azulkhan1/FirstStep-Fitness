const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true }, // Ensure usernames are unique and required
  passwordHash: { type: String, required: true }, // Ensure passwordHash is required
  fullName: String,
  age: String,
  gender: String,
  height: String,
  weight: String,
  plan: String
  // ... any other fields ...
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel; // This exports the model

