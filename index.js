const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const apiRouter = require('./routes/api');
const pagesRouter = require('./routes/pages');
const connectToDatabase = require('./database/connect');

const PORT = 3000;

const app = express();
connectToDatabase();

app.use(
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
