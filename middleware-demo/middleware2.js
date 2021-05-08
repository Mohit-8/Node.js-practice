const middleware2 = (req, res, next) => {
  const { user } = req.query;
  if (user === 'john') {
    req.user = { name: 'john', id: 3 };
    next();
  } else {
    res.status(401).send('unauthorized');
  }
};

module.exports = middleware2;
