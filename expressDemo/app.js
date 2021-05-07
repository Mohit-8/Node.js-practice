const express = require('express');
const app = express();

const { products } = require('./products');

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/productsinfo', (req, res) => {
  const newInfo = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(newInfo);
});

app.get('/', (req, res) => {
  res.json([{ name: 'mohit' }, { name: 'rohit' }]);
});

app.listen(5000, () => {
  console.log('server is running');
});
