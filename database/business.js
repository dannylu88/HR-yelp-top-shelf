
module.exports = (sequelize, DataTypes) =>{
  const Business = sequelize.define('business', {
    restaurant: {type:DataTypes.STRING},
    rating:{type: DataTypes.INTEGER},
    price: {type: DataTypes.STRING},
    category:{type:DataTypes.STRING},
      street:{type:DataTypes.STRING},
      city:{type:DataTypes.STRING},
      state:{type:DataTypes.STRING},
      zip:{type:DataTypes.STRING},
      country:{type:DataTypes.STRING},
  
    website:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING}
  }, {timestamps:false});
  return Business;
};

