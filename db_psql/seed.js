const { Client } = require('pg')
const client = new Client()
await client.connect()

client.query('COPY images(restaurantid, imageurl, date, description, usersubmit)', (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end()
})


/*
COPY images(restaurantid, imageurl, date, description, usersubmit)
FROM '/Users/Jason/restaurantimages.csv' DELIMITER ',';
*/
 /Users/Jason/restaurantimages.csv