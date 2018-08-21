const Sequelize = require('sequelize')
        
// new Sequelize (config.databasename, config.username, config.password)
const connection = new Sequelize('yelp', 'postgres', 'example' , {
  host:'db',
  dialect: 'postgres'
});

//testing connection
connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = connection;