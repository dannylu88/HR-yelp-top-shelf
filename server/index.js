const newrelic = require('newrelic');

const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');
const cors = require('cors');

const server = express();
const port = 3006;

const models = require('../database');

server.use(cors());
server.use(express.static(path.join(__dirname, '../client/dist')));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use('/main', router);

// models.sequelize.sync().then( () => {
  server.listen(port, () => {
    console.log('Successfully connected to port: ', port);
  });
// });

