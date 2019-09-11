const fs = require('fs');
const request = require('request');

for (let i = 800; i < 900; i += 1) {
  paddedNum = (i.toString()).padStart(3, '0');
  request(`http://loremflickr.com/526/526/sandwiches?num=${paddedNum}`)
    .pipe(fs.createWriteStream(`food${paddedNum}.jpg`))
    .on('error', (err) => {
      console.log(err);
    });
}