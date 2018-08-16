module.exports = {
  fields:{
    id:{
      type: 'uuid', 
      default: {'$db_function':'uuid()'}
    },
    restaurant:{type:'varchar'},
    rating:'int',
    price:'varchar',
    category:'varchar',
    street:'varchar',
    city:'varchar',
    state:'varchar',
    zip:'varchar',
    country:'varchar',
    website:'varchar',
    email:'varchar',
    phone:'varchar'
  },
  key: [['id']]
}