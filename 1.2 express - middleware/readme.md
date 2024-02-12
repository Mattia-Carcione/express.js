# Middleware:

## install body-parser

```sh
npm i body-parser
```
## import module in index.js

```sh
import bodyParser from 'body-parser';
```

## mount middleware to include the body in the request
```sh
app.use(bodyParser.urlencoded( {  extended : true  } ));
```

## handler http post
```sh
app.post('/submit', (req, res) => {
    console.log(req.body); // print request body
 });
```

# create path

## import dependencies in index.js
```sh
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
```

## add body to request
```sh
app.post('/submit', (req, res) => {
   console.log(req.body); // print body request
});
```