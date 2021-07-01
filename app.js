var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//MySQL
const pool = require('./middleware/PoolMySQL');

//Middleware
const connectionMiddleware = require('./middleware/ConnectionMiddleware');
const authHeaderMiddleware = require('./middleware/AuthHeaderMiddleware');
const sessionExpirateMiddleware = require('./middleware/SessionExpirateMiddleware');

//Session
const session = require('express-session');

//Extensions
require('./extensions/StringExtension');
require('./extensions/DateExtensions');
require('./extensions/ObjectExtension');
require('./extensions/UndefinedExtension');

//Utils
require('./utils/VerifyUtils');
require('./utils/MysqlUtils');
require('./utils/AutenticationUtils');

var app = express();

//Parser
app.use(authHeaderMiddleware());
app.use(sessionExpirateMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Conexao
//Conexões
app.use(connectionMiddleware(pool));
app.use(cookieParser());
app.use(session({
  secret: '123456789abc',
  name: "auth",
  proxy: true,
  resave: false,
  saveUninitialized: false,
}));

//Router
require('./feature/mobile/auth/AuthInit')(app,'/api/mobile/auth');
require('./feature/mobile/timeline/TimeLineInit')(app,'/api/mobile/timeline');


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var json = {}
  json.status = "NOT"
  json.msg = "NOT FOUND"
  res.status(404).send(json)
});

//Handler Error
app.use((errsystem, req, res, next) => {
  if(errsystem){
    if(req.isTransaction){
      req.connection.query("ROLLBACK",[],function (err, rs) {
        req.isTransaction = false;
        console.log("rollback")
        console.log(errsystem);
        var json = {};
        json.status = "NOK";
        json.code = 0;
        json.msg = "Não foi possível completar sua solicitação!"
        res.status(200).send(json);
      });
    }else{
      console.log("onError")
      console.log(errsystem)
      var json = {};
      json.status = "NOK";
      json.code = 0;
      json.msg = "Não foi possível completar sua solicitação!"
      res.status(200).send(json);
    }
  }else{
    next();
  }
});

module.exports = app;
