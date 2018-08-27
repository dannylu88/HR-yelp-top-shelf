const newrelic = require('newrelic');

const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');
const cors = require('cors');
const morgan = require('morgan');

const server = express();
const port = 3006;

const models = require('../database');

//server.use(morgan('dev')); 
//server.use(cors());
server.use('/', express.static(path.join(__dirname, '../client/dist')));
server.use('/main/biz/post',parser.json());
server.use('/main/biz/post',parser.urlencoded({ extended: true }));
server.use('/main', router);

// models.sequelize.sync().then( () => {
   server.listen(port, () => {
     console.log('Successfully connected to port: ', port);
  });
// });

