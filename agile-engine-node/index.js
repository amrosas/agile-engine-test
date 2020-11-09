'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const server = express();

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use(cors({
  origin: 'http://localhost:3000'
}));


const transactions = [];
let currentBalance = 0;

//GET balance
server.get('/', function (req, res) {
  callCounter += 1;
    return res.json(currentBalance);
});

//GET all transactions
server.get('/transaction', function (req, res) {
  return res.json(transactions);
});

//GET the transaction with specified id
server.get('/transaction/:id', function (req, res) {
  const transaction = transactions.find(it => it.id === req.params.id);
  if (!transaction) {
    return res.status(404).send('Resource not found');
  }
  res.json(transaction);
});

//POST new transaction
server.post('/transaction', function (req, res) {
  if ((currentBalance + req.body.amount) < 0) {
    return res.status(400).send('Cannot process transaction that leads to negative balance');
  };

  const newTrx = Object.assign({
    id: uuidv4(),
    effectiveDate: new Date()
  }, req.body);

  transactions.push(newTrx);

  currentBalance += req.body.amount;

  return res.status(200).send('Success!');
});


server.listen(4000, function () {
  console.log("Server running");
});
