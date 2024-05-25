const users = require('../models/user');

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
};

const createUser = async (req, res, next) => {
  try {
    req.user = await users.create(req.body);
    next();
  } catch (e) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Error creating user' }));
  }
};

const findUserById = async (req, res, next) => {
  try {
    req.user = await users.findById(req.params.id);
    next();
  } catch (e) {
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(JSON.stringify({ message: 'User not found' }));
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (e) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Error updating user' }));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (e) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Error deleting user' }));
  }
};

module.exports = { findAllUsers, createUser, findUserById, updateUser, deleteUser };
