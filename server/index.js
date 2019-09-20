const newrelic = require('newrelic');
const express = require('express');
const compression = require('compression')
// const db = require('../db/index.js');
const db = require('../db_psql/index.js');
const morgan = require('morgan');

const app = express();
const port = 3001;

app.locals.newrelic = newrelic;
// app.use(morgan('tiny'));
app.use(compression());
app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/listing/:id', (req, res) => {
  db.getImagesFromListing(req.params.id, (error, images) => {
    if (error) { return error; }
    res.send(images.rows);
  });
});

app.post('/api/:id', (req, res) => {
  db.editImagesFromListing(req.params.id, (error, images) => {
    if (error) { return error; }
    res.send(images.rows);
  });
});

app.put('/api/:id', (req, res) => {
  db.addImageToListing(req.params, (error, images) => {
    if (error) { return error; }
    res.send();
  });
});

app.delete('/api/:id', (req, res) => {
  db.deleteImagesFromListing(req.params.id, (error, images) => {
    if (error) { return error; }
    res.send(images.rows);
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));