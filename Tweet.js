const express = require("express");
const port =3003;
const app = new express();
const middleware = require('./middleware');
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("./database");
const session = require("express-session");

// can also define the arrow function outside and call it
const server = app.listen(port, () => console.log("Server is listening to port: " + port));
app.set("view engine","pug");
app.set("views", "views");
//using app.use 
app.use(express.static(path.join(__dirname, "Public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "I'm Batman",
    resave: true,
    saveUninitialized: false
}))

//Routes(PAGES)
const loginRoute = require('./Routes/loginRoute');
const registerRoute = require('./Routes/registerRoute');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.get("/", middleware.requireLogin, (req, res, next) => {
    var payload = {
        pageTitle:"Home",
    }
    res.status(200).render('home',payload);
})
