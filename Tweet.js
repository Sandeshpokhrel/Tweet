const express = require("express");
const port =3003;
const app = express();
const server = app.listen(port,() =>console.log("server listening to port:"+ port));
app.set("view engine","pug");
app.set("views","views");
app.get("/", (req, res, next) => {
    res.status(200).render('home.pug');
})