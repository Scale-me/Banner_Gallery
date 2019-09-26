const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  password: 'sandwhich',
  // host: '13.57.25.128', //OG
  host: '13.57.223.119', //master
  // host: '54.193.15.140', //slave but doesn't work
  database: 'restaurantimages',
  port: 5432
})

client.connect();

const getImagesFromListing = (listingId, cb) => {
  listingId = Number(listingId);
  client.query(`SELECT * FROM images WHERE images.restaurantid = ${listingId}`, (error, results) => {
    if (error) { console.log(error); }
    cb(null, results);
  });
};

const addImageToListing = (body, cb) => {
  client.query(`INSERT into images(restaurantid, imagesid, date, description, usersubmit) values (${body.restaurantid}, ${body.imagesid}, ${body.date}, ${body.description}, ${body.usersubmit})`, (error, results) => {
    if (error) { console.log(error); }
    cb(null, results);
  });
};

const editImageFromListing = (body, imageId, cb) => {
  client.query(`update images set imageid = ${imageId} where restaurantid = ${body.restaurantid} AND imageid = ${body.imageid};`, (error, results) => {
    if (error) { console.log(error); }
    cb(null, results);
  });
};

const deleteImageFromListing = (imageId, cb) => {
  client.query(`DELETE from images where images.id = ${imageId};`, (error, results) => {
    if (error) { console.log(error); }
    cb(null, results);
  });
};


module.exports = {
  getImagesFromListing,
  addImageToListing,
  editImageFromListing,
  deleteImageFromListing
};