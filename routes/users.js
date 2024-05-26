const usersRouter = require('express').Router();

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  hashPassword,
} = require('../middlewares/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
  '/users',
  findAllUsers,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated,
);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.put(
  '/users/:id',
  findUserById,
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated,
);
usersRouter.delete('/users/:id', checkAuth, deleteUser, sendUserDeleted);
usersRouter.get('/me', checkAuth, sendMe);

module.exports = usersRouter;
