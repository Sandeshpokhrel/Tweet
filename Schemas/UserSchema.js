const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: false },
    newusername: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    profilepic: { type: String, default: "images/profilePic.png" }
}, { timestamps: true});
var User = mongoose.model("User", UserSchema);
module.exports = User;