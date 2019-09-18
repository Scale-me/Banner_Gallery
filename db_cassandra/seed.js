var ExpressCassandra = require('express-cassandra');
const faker = require('faker');

var models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: { port: 9042 },
    keyspace: 'imagesdata',
    queryOptions: { consistency: ExpressCassandra.consistencies.one }
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe',
  }
});

var Restaurants = models.loadSchema("restaurantimages", {
  fields: {
    restaurantid: "int",
    imageid: "smallint",
    restaurantname: "varchar",
    description: "varchar",
    usersubmit: "smallint",
    date: "varchar"
  },
  key: ["restaurantid", "imageid"]
});

const wordScript = () => {
    let words = faker.lorem.words();
    words = words.split(' ');
    words = words.map(word => word[0].toUpperCase() + word.substr(1));
    words = words.join(' ');
    return words;
}

// Restaurants or models.instance.Person can now be used as the model instance
console.log(models.instance.RestaurantsImages === Restaurants);

// batch 1000 into an array
// then batch all together 

Restaurants.syncDB(function (err, result) {
  if (err) throw err;
  const loopScript = (i) => {
    if (i > 10000000) {
      console.log('COMPLETE!!');
      return;
    }
    if ((i -1)% 100 === 0) {
      console.log(i);
    }
    var queries = [];
    for (let n = i; n < i + 10; n++) {
      for (let j = 0; j < 13; j++) {
        var fakeWords = wordScript();
        var image = new models.instance.restaurantimages({
          restaurantid: n,
          restaurantname: faker.lorem.word() + ' ' + faker.lorem.word(),
          imageid: Math.ceil((Math.random() * 900)),
          description: fakeWords,
          usersubmit: Math.round(Math.random()),
          date: faker.date.past().toISOString()
        });
        queries.push(image.save({ return_query: true }));
      }
    }
    var prom = new Promise((res, rej) => {
      models.doBatch(queries, function (err) {
        if (err) rej();
        res();
      }) 
    });
    prom.then(()=> {
      loopScript(i + 10);
    })
    .catch((err) => console.log(err))
  }

  loopScript(3774311);

    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
});