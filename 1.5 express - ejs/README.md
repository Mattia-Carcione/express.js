# EJS tag

## 1- ejs output tag
```
<%= variable %>  
```

* Outputs the value into the template (HTML escaped)

* Variable should be passed from index.js.

* Type of variable accepted: String, number, array and oject.

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

## 2- ejs execute tag
````
<% // write your code here %>
````

* 'Scriptlet' tag, for control-flow, no output
* Runs the code between <% %>

For example:

### index.ejs
```
<% console.log("hello world") %>
```

### output on console:
```
hello world
```

## 3- ejs render tag HTML
````
<%- <h1>Hello World</h1> %>
````

* Outputs the unescaped value into the template

## 4- ejs comment tag
````
<%# your comment here %>
````

* Comment tag, no execution, no output

## 5- ejs include tag
````
<%- include("file.ejs") %>
````

* The function include() inserts another ejs file
* It would be used when you want include a html component from other file