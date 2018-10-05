const Sequelize = require('sequelize')
        
// new Sequelize (config.databasename, config.username, config.password)
const connection = new Sequelize('yelp0', 'dannylu8', 'operation8' , {
  host:'yelp1.cszfpoljp8kc.us-west-1.rds.amazonaws.com',
  port:5432,
  dialect: 'postgres',
  logging:false
});

//for docker use, comment out these when running locally
// const connection = new Sequelize('yelp', 'postgres', 'example' , {
//   host:'db',
//   dialect: 'postgres'
// });

//testing connection....
connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;