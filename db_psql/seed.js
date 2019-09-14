const { Client } = require('pg')
const client = new Client({
  // user: 'dbuser',
  host: 'localhost',
  database: 'restaurantimages',
  // password: 'secretpassword',
  port: 5432
})
client.connect()

const loop = (i) => {
  if (i > 10000000) {
    console.log('COMPLETE!!');
    return;
  }
  if ((i-1) % 10000 === 0) {
    console.log(i);
  }
  const text = `INSERT INTO restaurants(restaurantname) VALUES('r${i}')`;
  client.query(text, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      i++;
      loop(i);
    }
  })
}

loop(1);

/*
COPY images(restaurantid, imageid, date, description, usersubmit)
FROM '/Users/Jason/hrsf/data.csv' DELIMITER ',';
*/