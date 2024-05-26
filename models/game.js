const mongoose = require('mongoose');
const user = require('./user');
const category = require('./category');
const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: user,
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: category,
    },
  ],
});

gameSchema.static.findGameByCategory = function (category) {
  return this.find({})
    .populate({ path: 'categories', match: { name: category } })
    .populate({ path: 'users', select: '-password' })
    .then((games) => {
      return games.filter((game) => game.category.length > 0);
    });
};

const game = mongoose.model('game', gameSchema);

module.exports = game;
