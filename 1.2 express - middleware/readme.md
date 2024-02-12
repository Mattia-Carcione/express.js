# Middleware:

## install body-parser
### npm i body-parser

## import module
### import bodyParser from 'body-parser';

## mount middleware
### app.use(bodyParser.urlencoded( {  extended : true  } ));

## handler http post
### app.post('/submit', (req, res) => {
###    console.log(req.body); // print del body della richiesta
### });

# create path

## import dependencies
### import { dirname } from 'path';
### import { fileURLToPath } from 'url';
### const __dirname = dirname(fileURLToPath(import.meta.url));

## add body to request
### app.post('/submit', (req, res) => {
###    console.log(req.body); // print del body della richiesta
### });