# FullStackTask
A basic web-application using Reactjs, Nodejs, Express and Postgresql.
For backend-
Navigate to the folder

   cd server/
Run the commands

   npm install
   npm start
Now the api is running at http://127.0.0.1:5000/

Set up a postgresql database locally.


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


For front-end

Navigate to the client folder

cd webapp/
Run the commands

  npm install
  npm start
  
Now, front-end is running at http://127.0.0.1:3000/

Available features
Customer List
Add a new customer
Search a customer by name
Edit customer details
Search a customer by name
