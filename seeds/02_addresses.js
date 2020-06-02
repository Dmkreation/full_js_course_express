const faker = require('faker');
const models = require('../models');
const User = models.User;
const Address = models.Address;

User.findAll()
.then(users => {
  users.forEach(user => {
    Address.create({
      street: faker.address.streetAddress(),
      suite: faker.address.secondaryAddress(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      userId: user.id
    })
    .then(associated => console.log(associated))
  });
})
.catch(err => console.log(err)) 