const gamesRouter = require('express').Router();

const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
} = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth');
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvailable,
  checkIfUsersAreSafe,
  checkIsGameExits,
} = require('../middlewares/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post(
  '/games',
  findAllGames,
  checkIsGameExits,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated,
);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.put(
  '/games/:id',
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated,
);
gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
