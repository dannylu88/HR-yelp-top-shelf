// const connection = require('./index');
const Sequelize = require('sequelize');
const connection = require('./');

const Business = connection.define('business', {
    restaurant: {type: Sequelize.DataTypes.STRING},
    rating:{type: Sequelize.DataTypes.INTEGER},
    price: {type: Sequelize.DataTypes.STRING},
    category:{type: Sequelize.DataTypes.STRING},
    street:{type: Sequelize.DataTypes.STRING},
    city:{type: Sequelize.DataTypes.STRING},
    state:{type: Sequelize.DataTypes.STRING},
    zip:{type: Sequelize.DataTypes.STRING},
    country:{type: Sequelize.DataTypes.STRING},
    website:{type: Sequelize.DataTypes.STRING},
    email:{type: Sequelize.DataTypes.STRING},
    phone:{type: Sequelize.DataTypes.STRING}
  }, {timestamps:false});

  connection.sync({force: false}).then(() => {
    console.log('Postgres tables created!');
  })
  .catch( error=> {
    console.error('Error creating postgres tables', error);
  });

  module.exports = { Business };