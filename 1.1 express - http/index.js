import express from 'express';

const app = express();
const port = 3000;

// print delle info sulla richiesta:
// app.get('/', (req, res) => {
//     res.send(req.rawHeaders);
// })

// richieste http
app.get('/', (req, res) => {
    res.send(`<a href="/" style="color: red;">Hello World</a> <a href="/about" style="color: blue;">About</a> <h1>Home</h1>`);
})
app.get('/about', (req, res) => {
    res.send(`<a href="/" style="color: blue;">Hello World</a> <a href="/about" style="color: red;">About</a> <h1>About</h1>`);
})
app.post('/register', (req, res) => {
    res.sendStatus(201);
})
app.delete('/delete', (req, res) => {
    res.sendStatus(200);
})

// listen del server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})