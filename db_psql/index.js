const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  database: 'restaurantimages',
  port: 5432
})

client.connect();

const getImagesFromListing = (listingId, cb) => {
  listingId = Number(listingId);
  client.query(`SELECT * FROM images INNER JOIN restaurants ON images.restaurantid = restaurants.id AND restaurants.id = ${listingId}`,  (error, results) => {
    if (error) { console.log(error); }
    cb(null, results);
  });
};

module.exports = {
  getImagesFromListing
};