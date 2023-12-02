
const userSchema = new mongoose.Schema({
    username: String, // A new field for the user's unique username
    passwordHash: String, 
    fullName: String,
    age: String,
    gender: String,
    height: String,
    weight: String,
    plan: String
});


export default userSchema; 

