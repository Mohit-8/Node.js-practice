const express = require('express');

const path = require('path');

const app = express();

//setting up static and middleware
app.use(express.static('./public')); //on its own express setup the path for css and js file and in http we have to do it on our own

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './myApp/index.html'));
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.all('*', (req, res) => {
  res.status(404).send(' page not found');
});

app.listen(5000, () => {
  console.log('server is running');
});
