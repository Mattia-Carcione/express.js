# Passing data from/to server

### install 'body-parser'
````
npm i body-parser
````

### import body parser in index.js
````
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));
````
## get data from client

### create a form in index.ejs
````
<form action="/submit" method="post">
    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Enter your name">
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Enter your email">
    <button type="submit" value="submit">Submit</button>
</form>
````

### save data from the form
````
app.post("/submit", (req, res) => {
    // create local variable to get data from req.body
    const data = {
        name: req.body.name,
        email: req.body.email
    }
    res.redirect("/");
});
````
req.body is an object. The req.body's properties are called as the input name value.
for example:

<input name="value"/>

req.body.value or req.body["value"]

so the req.body.value now has the value of that input

## get data from server

* get data from index.js through http request

### create http request passing data with res.render() method

### For string or number:
```
app.get("/", (req, res) => {
    let msg = "Hello World";
    res.render(`index.ejs`, {
        message: msg
    });
});
```
### for array or object:
```
app.get("/", (req, res) => {
    let data = {
        message: "Hello World"
    };
    res.render(`index.ejs`, data);
});
```
render accepts 2 params:
res.render('file.ejs', object)


### call data in index.ejs with ejs tag
```
<h1> <%= message %> </h1>
```

### output on browser:
```
Hello World
```

### my ejs tag doc here
https://github.com/Mattia-Carcione/express.js/blob/main/1.5%20express%20-%20ejs/README.md
### official ejs tag doc here
https://ejs.co/#docs