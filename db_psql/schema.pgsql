CREATE DATABASE restaurantimages;

\connect restaurantimages;

DROP TABLE IF EXISTS restaurants, images;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurantname varchar(20)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  restaurantid INTEGER,
  imageid INTEGER,
  date TEXT,
  description TEXT,
  usersubmit INTEGER
);

--psql restaurant_images < ./db_psql/schema.pgsql
