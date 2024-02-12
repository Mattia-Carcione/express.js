# HTTP Request

## Una volta creato il server, si creano le richieste http

## get request
```sh
app.get('/', (req, res) => {
    res.send(`Hello World!`);
}); //res.send() è il metodo per inviare (send) la risposta (res)
//l'argomento di send può essere parti di testo html es: <h1>Hello World!</h1>
```

## post request

```sh
 app.post('/register', (req, res) => {
    //write your code here
    res.sendStatus(201);
 });
```

## put request 
```sh
 app.put('/edit', (req, res) => {
    //write your code here
    res.sendStatus(200);
 });
```

## patch request
```sh
app.patch('/patch/edit', (req, res) => {
   //write your code here
   res.sendStatus(200);
});
```

## delete request
```sh
app.delete('/delete', (req, res) => {
   //write your code here
   res.sendStatus(200);
});
```

## print delle info della request
```sh
app.get('/', (req, res) => {
   console.log(req.rawHeaders); // printa le info 
});
```