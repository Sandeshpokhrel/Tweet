const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../schemas/UserSchema");
const bcrypt = require("bcrypt");
const session = require("express-session");
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
    var payload = {
        pageTitle: "Login"
    }
    res.status(200).render("register", payload);
})

router.post("/", async (req, res, next) => {

    var firstname = req.body.firstname.trim();
    var lastname = req.body.lastname.trim();
    var email = req.body.email.trim();
    var newusername = req.body.newusername.trim();
    var password = req.body.password;
    var payload = req.body; 

    if (firstname && lastname && email && newusername && password) {
        var user = await User.findOne({
            $or: [
                { newusername: newusername },
                {email: email}
            ]
        })
            .catch((error) => {
                console.log(error);
                payload.errorMessage = "Something went wrong.";
                res.status(200).render("register", payload);
            })
        if (user == null) {
            var data = req.body;
            data.password = await bcrypt.hash(password, 10); 
            User.create(data)
            .then((user) => {
                req.session.user = user;
                return res.redirect("/");
            }
            )
            
        }
        else {
            if (email == user.email) {
                payload.errorMessage = "Email already exists.";
            }
            else {
                payload.errorMessage = "Username already exists.";
            }
            res.status(200).render("register", payload);
        }
    }
    else {
        payload.errorMessage= "Make sure that every field has valid value.";
        res.status(200).render("register", payload);
    }
    
})
module.exports = router;
