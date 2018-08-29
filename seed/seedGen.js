const faker = require('faker');
const fs = require('fs');
const write = fs.createWriteStream('./data-psql.csv');

function seedData(writer, encoding, callback) {
  let i = 0;
  let max = 10000000;
  let startingTime = Date.now() / 1000 / 60;

  function write() {
    let ok = true;
    while (i < max && ok) {
      //let id = generateUUID();
      let restaurant = faker.lorem.words(3);
      let rating = faker.random.number(5);
      let price = faker.random.number(4);
      let category = faker.lorem.words(1);
      let street = faker.address.streetAddress();
      let city = faker.address.city();
      let state = faker.address.state();
      let zip = faker.address.zipCode();
      let country = faker.lorem.words(1);
      let website = faker.internet.url();
      let email = faker.internet.email();
      let phone = faker.phone.phoneNumber();
      const model = [restaurant, rating, price, category, street, city, state, zip, country, website, email, phone];
      i += 1;
      
      if (i % 1000000 === 0) { 
        let timeCollasped = (Date.now() / 1000 / 60) - startingTime;
        console.log(`starting from ${i} to ${i+1000000}`)
        console.log(`total time used in minutes: ${timeCollasped}`)
      }
      if (i === max) {
        writer.write(`${model.join(',')}`, encoding, callback);
      } else {
        if(i === 1) {
          console.log('writting header')
          const header = ['restaurant', 'rating', 'price', 'category', 'street', 'city', 'state', 'zip','country','website','email','phone'];
          ok = writer.write(`${header.join(',')}\n`, encoding);
        }
        ok = writer.write(`${model.join(',')}\n`, encoding);
      }
    }
    if (i < max) {
      writer.once('drain', write);
    }
  }
  write();
}
seedData(write, 'utf8', () => { console.log('done'); });


// function generateUUID() {
//   var d = new Date().getTime();
//   if(Date.now){
//       d = Date.now(); //high-precision timer
//   }
//   var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//       var r = (d + Math.random()*16)%16 | 0;
//       d = Math.floor(d/16);
//       return (c=='x' ? r : (r&0x3|0x8)).toString(16);
//   });
//   return uuid;
// };
