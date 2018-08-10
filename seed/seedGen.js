const faker = require('faker');
const fs = require('fs');

fs.writeFile('data.csv', 'restaurant, rating, price, category, street, city, state, zip, country, website, email, phone', (err) => {  
  if (err) throw err;
  console.log('Header created!');
  let recurseSeeding = (count = 0) => {
    if(count % 1000000 === 0) console.log('creating:', count + 1)
    if(count  === 10000000) return; 
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
      
    
    
      let entry = '\n' + restaurant + ', ' + rating + ', ' + price + ', ' + category + ', ' + street  + ', ' + city + ', ' + state + ', ' + zip + ', ' + country + ', ' + website + ', ' + email + ', ' + phone; 
      fs.appendFile('data.csv', entry, (err) => {
        if (err) throw err;
        recurseSeeding(count + 1)
      });
  }
  recurseSeeding();
});
