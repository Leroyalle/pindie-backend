const games = require('../models/game');

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({}).populate('categories').populate({
    path: 'users',
    select: '-password',
  });
  next();
};

const createGame = async (req, res, next) => {
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (e) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Ошибка создания игры' }));
  }
};

const findGameById = async (req, res, next) => {
  console.log(req.params.id);
  try {
    req.game = await games.findById(req.params.id).populate('categories').populate('users');
    next();
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(JSON.stringify({ message: 'Игра не найдена' }));
  }
};
const updateGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Ошибка обновления игры' }));
  }
};

const deleteGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (e) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).send(JSON.stringify({ message: 'Ошибка удаления игры' }));
  }
};

module.exports = { findAllGames, createGame, findGameById, updateGame, deleteGame };
