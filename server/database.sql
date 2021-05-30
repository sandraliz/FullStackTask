CREATE DATABASE customerdb;

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    age VARCHAR(7),
    gender VARCHAR(10),
    email VARCHAR(50),
    phone VARCHAR(20),
    address VARCHAR(90)
);
