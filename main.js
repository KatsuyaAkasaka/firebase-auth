const express = require('express');
const fs = require('fs');
const app = new express();

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    fs.readFile('./public/index.html', 'utf-8' , (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

app.get('/success', (req, res) => {
    fs.readFile('./public/success.html', 'utf-8' , (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

app.get('/login', (req, res) => {
    fs.readFile('./public/login.html', 'utf-8' , (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

app.get('/logout', (req, res) => {
    fs.readFile('./public/logout.html', 'utf-8' , (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

app.listen(process.env.PORT, () => {
    console.log("listening on port 3000");
});
