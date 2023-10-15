
const userSchema = new mongoose.Schema({
    fullName: String,
    age: String,
    gender: String,
    height: String,
    weight: String,
    plan: String
});


export default userSchema; 

