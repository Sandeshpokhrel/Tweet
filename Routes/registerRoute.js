const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
    var payload = {
        pageTitle: "Login"
    }
    res.status(200).render("register", payload);
})

router.post("/", (req, res, next) => {

    var firstname = req.body.firstname.trim();
    var lastname = req.body.lastname.trim();
    var email = req.body.email.trim();
    var newusername = req.body.newusername.trim();
    var password = req.body.password;
    var payload = req.body; 

    if (firstname && lastname && email && newusername && password) {

    }
    else {
        payload.errorMessage= "Make sure that every field has valid value.";
        res.status(200).render("register", payload);
    }
    
})
module.exports = router;
