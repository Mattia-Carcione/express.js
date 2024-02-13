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
* For string or number:
```
app.get("/", (req, res) => {
    let msg = "Hello World";
    res.render(`index.ejs`, {
        message: msg
    });
});
```
* for array or object:
```
app.get("/", (req, res) => {
    let data = {
        message: "Hello World"
    };
    res.render(`index.ejs`, data);
});
```

### index.ejs
```
<h1> <%= message %> </h1>
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
<%- include("file") %>
````

* The function include() inserts another ejs file
* It would be used when you want include a html component from other file
* You must write the file's relative path without the extension