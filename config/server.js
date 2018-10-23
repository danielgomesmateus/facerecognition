const express          = require('express');
const helmet           = require('helmet');
const consign          = require('consign');
const bodyParser       = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.static('src/public/'));

app.use(expressValidator());
app.use(bodyParser.urlencoded({extended: true}));

consign({})
  .include('src/controllers')
  .then('src/models')
  .then('src/routes')
  .into(app);

module.exports = function() {
  return app;
};
