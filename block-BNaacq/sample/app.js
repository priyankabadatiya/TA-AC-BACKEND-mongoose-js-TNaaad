var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample',{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    console.log(err ? err : 'Connected to database');
  }
);
var app = express();
app.use(express.json());
app.use(logger('dev'));
app.listen(3000, () => {
    console.log('server is running at 3k');
  });
