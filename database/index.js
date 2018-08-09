const Sequelize = require('sequelize')
        
// new Sequelize (config.databasename, config.username, config.password)
const sequelize = new Sequelize('yelp', 'dannylu8', '12345' , {
  dialect: 'postgres'
});

const models = {
  business: sequelize.import('./business')
};

//testing connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.export = models;