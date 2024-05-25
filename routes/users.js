const usersRouter = require('express').Router();

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
} = require('../controllers/users');
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
} = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, createUser, sendUserCreated);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.put('/users/:id', findUserById, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

module.exports = usersRouter;
