CREATE DATABASE restaurant_images;

\connect restaurant_images;

DROP TABLE IF EXISTS restaurants, images;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name varchar(20)
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  restaurantid INTEGER,
  imageurl INTEGER,
  date TEXT,
  description TEXT,
  usersubmit INTEGER
);

--psql restaurant_images < ./db_psql/schema.pgsql
