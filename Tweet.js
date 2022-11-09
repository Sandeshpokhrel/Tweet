const express = require("express");
const port =3003;
const app = new express();
const middleware = require('./middleware');
const path = require("path");
// can also define the arrow function outside and call it
const server = app.listen(port, () => console.log("Server is listening to port: " + port));
app.set("view engine","pug");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "Public")));

//Routes(PAGES)
const loginRoute = require('./Routes/loginRoute');
const registerRoute = require('./Routes/registerRoute');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.get("/", middleware.requireLogin, (req, res, next) => {
    var payload = {
        pageTitle:"Home",
        pageBlock:"This is me!"
    }
    res.status(200).render('home',payload);
})
