const models = require('../models');
const User = models.User;

const users2 = [
  {id: 1, name: 'David'},
  {id: 2, name: 'Pierre'},
  {id: 3, name: 'Jean'},
]

module.exports = {
  index: async (req, res, next) => {
    const users = await User.findAll({ include: 'address' });
    res.json({users});

  },
  show: async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id, { include: 'address' });
    if(user){
      res.json({ user })
    } else {
      res.status(404).json({ message: `User was not found with id ${id}` })
    }
  },
  create: async (req, res, next) => {
    const { firstname, lastname, email, password, username, phone, city } = req.body;
    try{
      const user = await User.create({ firstname,lastname, email, password, username, phone, address: { city } }, { include: 'address' });
      res.status(201).json({ user })
    } catch(err){
      const { errors } = err;
      res.status(422).json({ errors })
    }
  },
  update: async (req, res, next) => {
    const { id } = req.params;
    let user = await User.findByPk(id);
    if(user){
      try {
        const { firstname, lastname, email, password, username, phone } = req.body;
        user = await user.update({ firstname, lastname, email, password, username, phone });
        res.json({ user })
      } catch (err) {
        const { errors } = err;
        res.status(422).json({ errors });
      }
    } else {
      res.status(404).json({ message: `User was not found with id ${id}` })
    }
  },
  destroy: async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if(user){
      try {
        await user.destroy();
        res.status(204).send('deleted')
      } catch (err) {
        const { errors } = err;
        res.status(422).json({ errors })
      }
    } else {
      res.status(404).json({ message: `User was not found with id ${id}` })
    }
  },
}