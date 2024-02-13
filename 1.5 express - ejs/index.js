import express from "express";

import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let data = {
        title: "EJS Tag",
        list: ["Item 1", "Item 2", "Item 3"],
        HTMLcontent: "<p><strong>This is a paragraph</strong></p>",
    }
    res.render(`index.ejs`, data);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});