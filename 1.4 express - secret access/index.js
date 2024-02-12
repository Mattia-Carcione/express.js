//  import dependencies
import express from "express";
import bodyParser from "body-parser";

// create path
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// create express app
const app = express();
const port = 3000;

// set express app
app.use(bodyParser.urlencoded({ extended: true }));

// create middleware function
var isAuthenticated = false;
function passwordCheck(req, res, next) {
    if (req.body.password === "ILoveProgramming") {
        isAuthenticated = true;
    }
    next();
}

// mount middleware
app.use(passwordCheck);

// Routing
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (isAuthenticated) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // res.sendStatus(401); // 401 Unauthorized
        res.redirect("/"); //  to redirect to home
    }
})

// server listen on :3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
