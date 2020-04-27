const users = [
  {id: 1, name: 'David'},
  {id: 2, name: 'Pierre'},
  {id: 3, name: 'Jean'},
]

module.exports = {
  index: (req, res, next) => {
    res.json({ users })
  },
  show: (req, res, next) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id)
    res.json({ user })
  },
  create: (req, res, next) => {
    res.json({ user: req.body, test: req.query.test })
  },
  update: (req, res, next) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id)
    res.json({ user: {...user, ...req.body }})
  },
  destroy: (req, res, next) => {
    const { id } = req.params;
    res.json({ message: `user with ${id} was deleted !` })
  },
}