const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
const axios = require('axios')

const server =  express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');// update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.get('/:page', async (req, res) => {
    const {page} = req.params
    try {
        let { data } =  await axios.get(`https://api.stagingeb.com/v1/properties?page=${page}&limit=15&search%5Bstatuses%5D%5B%5D=published`, {
                headers: {
                    "accept": "application/json",
                    "X-Authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9"
                } 
            });
        res.send(data)
    } catch (err) {
        res.send({err: err.message})
    }
})

server.get('/detail/:pid', async (req, res) => {
    const {pid} = req.params
    try {
        let { data } =  await axios.get(`https://api.stagingeb.com/v1/properties/${pid}`, {
                headers: {
                    "accept": "application/json",
                    "X-Authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9"
                } 
            });
        res.send(data)
    } catch (err) {
        res.send({err: err.message})
    }
})

server.post('/contact', async (req, res) => {
    const data = req.body
    try {
        let response =  await axios.post(`https://api.stagingeb.com/v1/contact_requests`, data , {
                headers: {
                    "accept": "application/json",
                    "X-Authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9"
                } 
            });
        res.send('successful')
    } catch (err) {
        console.log(err.message)
        res.send('Bad request')
    }
})

  // Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
  
  module.exports = server;