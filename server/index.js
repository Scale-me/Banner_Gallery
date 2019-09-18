const express = require('express');
const compression = require('compression')
// const db = require('../db/index.js');
const db = require('../db_psql/index.js');
const morgan = require('morgan');

const app = express();
const port = 3001;

app.use(morgan('tiny'));
app.use(compression());
app.use(express.static('../public'));
app.use('/:id', express.static('../public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/listing/:id', (req, res) => {
  db.getImagesFromListing(req.params.id, (error, images) => {
    console.log('this is working??')
    if (error) { return error; }
    console.log(images.rows);
    res.send(images.rows);
  });
});

app.post('/api/:id', (req, res) => {
  console.log('posting');
});

app.put('/api/:id', (req, res) => {
  console.log('putting');
});

app.delete('/api/:id', (req, res) => {
  console.log('deleting');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));