const mongoose = require("mongoose");

class database {
    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect("mongodb+srv://dbUser:dbUserPassword@twittercluster.foythr9.mongodb.net/?retryWrites=true&w=majority")
            .then(() => {
                console.log("connection success!");
            })
            .catch((err) => {
                console.log("connection failes with error " + err);
            })
    }
}
module.exports = new database();