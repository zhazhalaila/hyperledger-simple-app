var path = require('path')
var express = require('express')
var layout = require('express-layout')
var routes = require('./routes')
var app = express()
var bodyParser = require('body-parser')
var flash = require('express-flash')
var cookieParser = require('cookie-parser')
var session = require('express-session')

const middlewares = [
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded({ extended: true }),
  cookieParser(),
  session({
    secret: 'super-secret-key',
    key: 'super-secret-cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000}
  }),
  flash()
]
app.use(middlewares)
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
require('./routes.js')(app);

app.use((req, res, next) => {
  res.status(404).send("Sorry can not find that!")
})

app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send('Something broke!')
})

var port = process.env.PORT || 8000;

app.listen(port,function(){
  console.log("Live on port: " + port);
});
