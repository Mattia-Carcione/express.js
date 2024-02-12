// import dependencies
import express from 'express';

// create express app
const app = express();
const port = 3000;

// set express app
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
