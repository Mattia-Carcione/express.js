import express from "express";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date(); // get current date
    const day = d.getDay(); // get current day number from current date

    let type = "it's a weekday";
    let adv = "let's work";

    if (day === 6 || day === 0) {
        type = "it's a weekend";
        adv = "have a nice weekend";
    }

    res.render(`index.ejs`, {
        type: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});