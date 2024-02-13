import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// create variable db to save data
var db = [];

// get request
app.get("/", (req, res) => {
    // render index.ejs
    res.render("index.ejs");
});

// post request
app.post("/submit", (req, res) => {
    // create local variable user to get data from req.body
    const user = {
        name: req.body.name,
        email: req.body.email
    }
    // push user in db to save it
    db.push(user);
    // render index.ejs with user's data
    res.render("index.ejs", user);
});

// running server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});