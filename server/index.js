const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const {pool} = require("./db");


//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
// app.use(express.json()); //req.body


//ROUTES//

//Add a new customer

app.post("/customer", async (req, res) => { 
  
  try {
    const { name } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { address } = req.body;

    const newCustomer = await pool.query(
      'INSERT INTO customer (name,age,gender,email,phone,address) VALUES ($1,$2,$3,$4,$5,$6) ',
      [name, age, gender, email, phone, address]
    );
    res.status(200).json(newCustomer.rows[0]);
  } 
    catch (e) {
    res.status(500);
    res.send({data:'Something went wrong'});
  }
});

//get all customer

app.get("/customer", async (req, res) => {

  try {
    const customerList = await pool.query("SELECT * FROM customer");
    res.status(200).json(customerList.rows);  
  
  } catch (e) {
    res.status(500);
	res.send({data:'Something went wrong'});
  }
});

//get search match
app.get("/customers/search/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const customer = await pool.query(
      "SELECT * FROM customer WHERE name = $1",
      [name]
    );

    res.status(200).json(customer.rows);
  } 
    catch (e) {
    res.status(500);
	res.send({data:'Something went wrong'});
  }
});

//get a customer

app.get("/customer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await pool.query(
      "SELECT * FROM customer WHERE name = $1",
      [id]
    );

    res.status(200).json(customer.rows);
  } 
    catch (e) {
    res.status(500);
	res.send({data:'Something went wrong'});

  }
});

//update customer details

app.put("/customer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { address } = req.body;

    const customer = await pool.query(
        "UPDATE customer SET  name = $1, age = $2, gender=$3, email=$4, phone=$5, address=$6,  WHERE customer_id = $7",
        [name, age, gender, email, phone, address,id]
      );

    res.status(200).json(" Successfully updated!");
  } 
    catch (e) {
    res.status(500);
	res.send({data:'Something went wrong'});
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server has started on port 5000");
  
});