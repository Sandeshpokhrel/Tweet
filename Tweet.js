const express = require("express");
const port =3003;
const app = express();
const requireLogin = require('./middleware');
const server = app.listen(port,() =>console.log("server listening to port:"+ port));
app.set("view engine","pug");
app.set("views","views");

//Routes(PAGES)
const loginRoute = require('./Routes/loginRoute');
app.use("/login", loginRoute);
app.get("/",middleware.requireLogin, (req, res, next) => {
    var payload = {
        pageTitle:"Home",
        pageBlock:"This is me!"

    }

    res.status(200).render('home.pug',payload);
})