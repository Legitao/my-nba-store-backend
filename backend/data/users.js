const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Michael Jordan',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Harvey Specter',
    email: 'harvey@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Frank Underwood',
    email: 'frank@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = users;
