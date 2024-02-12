// import dependencies
import express from 'express';
import bodyParser from 'body-parser'; // middleware
// create path
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// create server
const app = express();
const port = 3000;

// mount middleware
app.use(bodyParser.urlencoded( {  extended : true  } ));

// server listen on :3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// http
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // render file .html
});

app.post('/submit', (req, res) => {
    console.log(req.body); // print del body della richiesta
    res.sendStatus(200);
});