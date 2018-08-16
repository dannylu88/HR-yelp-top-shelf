const faker = require('faker');
const fs = require('fs');
const write = fs.createWriteStream('./data-faster.csv');

function seedData(writer, encoding, callback) {
  let i = 0;
  let max = 10000000;
  let startingTime = Date.now() / 1000 / 60;

  function write() {
    let ok = true;
    while (i < max && ok) {
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



// const faker = require('faker');
// const fs = require('fs');

// fs.writeFile('data.csv', 'restaurant, rating, price, category, street, city, state, zip, country, website, email, phone', (err) => {  
//   if (err) throw err;
//   console.log('Header created!');
//   let startTime = Date.now()
//   let recurseSeeding = (count = 0) => {
    
//     if(count % 1000000 === 0) {
//       let timePast = (Date.now() - startTime) / 1000 / 60  //timepast in minutes
//       console.log(`creating from: ${count + 1} to ${count + 1000000} `);
//       if(count !== 0) console.log('time to create the above million in mins', timePast);
//       startTime = Date.now();
//     }
//     if(count  === 10000000) return; 
//       let restaurant = faker.lorem.words(3);
//       let rating = faker.random.number(5);
//       let price = faker.random.number(4);
//       let category = faker.lorem.words(1);
//       let street = faker.address.streetAddress();
//       let city = faker.address.city();
//       let state = faker.address.state();
//       let zip = faker.address.zipCode();
//       let country = faker.lorem.words(1);
//       let website = faker.internet.url();
//       let email = faker.internet.email();
//       let phone = faker.phone.phoneNumber();
      
    
    
//       let entry = '\n' + restaurant + ', ' + rating + ', ' + price + ', ' + category + ', ' + street  + ', ' + city + ', ' + state + ', ' + zip + ', ' + country + ', ' + website + ', ' + email + ', ' + phone; 
//       fs.appendFile('data.csv', entry, (err) => {
//         if (err) throw err;
//         recurseSeeding(count + 1)
//       });
//   }
//   recurseSeeding();
// });
