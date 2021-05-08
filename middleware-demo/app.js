const express = require('express');
const app = express();
const logger = require('./logger');
const middleware2 = require('./middleware2');

// req => Middleware => res (middleware sits in between)

app.use([logger, middleware2]); //will apply middleware to every route

//app.use('/api', logger); //apply to any route after /api

app.get('/', (req, res) => {
  res.send('Home');
}); //we provide reference to our Middleware function

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/some', (req, res) => {
  res.send('some');
});

app.get('/api/thing', (req, res) => {
  console.log(req.user);
  res.send('thing');
});

app.listen(5000, () => {
  console.log('server is running');
});
