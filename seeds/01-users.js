const faker = require('faker');
const models = require('../models');
const User = models.User;

const users = [
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() },
  { firstname: faker.name.firstName(), lastname: faker.name.lastName(), email: faker.internet.email(), password: '123456', username: faker.internet.userName(), phone: faker.phone.phoneNumber() }
];

User.bulkCreate(users)
.then(users => console.log(users))
.catch(err => console.log(err)) 