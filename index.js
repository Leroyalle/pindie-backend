const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const gamesRouter = require('./routes/games');
const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const connectToDatabase = require('./database/connect');

const PORT = 3000;

const app = express();
connectToDatabase();

app.use(bodyParser.json(), apiRouter, express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
