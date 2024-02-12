# Create a express server

## create index.js

## install npm

```sh 
npm init
```

## install express 

```sh
 npm i express --save 
```

## import dependencies in index.js

```sh
import express from 'express';
```
## create express app in index.js

```sh
const app = express();
```

## set the server port in index.js

```sh
const port = 3000; // or other port
```

## set app in index.js

```sh
app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
})
```