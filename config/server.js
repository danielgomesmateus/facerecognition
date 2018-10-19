const express = require('express');
const fs      = require('fs');
const path    = require('path');
const helmet  = require('helmet');
const consign = require('consign');

const app = express();

app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.static('src/public/'))

consign({})
  .include('src/controllers')
  .then('src/models')
  .then('src/routes')
  .into(app);

module.exports = function() {
  return app;
};
