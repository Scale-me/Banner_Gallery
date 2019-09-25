const newrelic = require('newrelic');
const express = require('express');
const compression = require('compression')
// const db = require('../db/index.js');
const db = require('../db_psql/index.js');
const morgan = require('morgan');
const redis = require('redis');

const app = express();
const port = 3001;

const REDIS_PORT = process.env.PORT || 6379;

const redisOptions = {
  host: '52.53.189.53',
  port: 6379
}

const redisClient = redis.createClient(redisOptions);

app.locals.newrelic = newrelic;
// app.use(morgan('tiny'));
app.use(compression());
app.use(express.static('public'));
app.use('/:id', express.static('public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

function cache(req, res, next) {
  const listingId = req.params.id;
  redisClient.get(listingId, (err, data) => {
    if(err) throw err;
    if(data !== null) {
      // console.log('getting from redis cache');
      res.send(data);
    } else {
      // console.log('NOT GETTING FROM CACHE');
      next();
    }
  })
}

app.get('/api/listing/:id', cache, (req, res) => {
  db.getImagesFromListing(req.params.id, (error, images) => {
    if (error) { return error };
    redisClient.setex(req.params.id, 3600, JSON.stringify(images.rows));
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