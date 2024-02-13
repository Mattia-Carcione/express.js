# EJS tag

## ejs tag output
```
<%= variable %>  
```

* Outputs the value into the template (HTML escaped)

* Variable should be passed from index.js like an object's key.

For example: 

### index.js
```
app.get("/", (req, res) => {
    let message = "Hello World";
    res.render(`index.ejs`, {
        key: message
    });
});
```

### index.ejs
```
<h1> <%= key %> </h1>
```

### output on browser:
```
Hello World
```

## ejs tag execute
````
<% // write your code here %>
````

* 'Scriptlet' tag, for control-flow, no output
* Executes the code between <% %>

For example:

### index.ejs
```
<% console.log("hello world") %>
```

### output on console:
```
hello world
```