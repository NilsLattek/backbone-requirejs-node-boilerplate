var application_root = __dirname
  , express = require("express")
  , path = require("path")

  , port = 8000
  , app = express.createServer()

  , entriesController = require('./controllers/entries');

app.configure(function(){
  app.use(express.bodyParser());
  app.set('views', path.join(application_root, "views"));
  app.set('view engine', 'eco');
  app.set('view options', { layout: false });
});

app.configure('development', function(){
  app.use(express.static(path.join(application_root, '../client')));
  // used to load shared modules on the fly during development
  app.use(express.static(path.join(application_root, '../')));

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(path.join(application_root, '../client-build', { maxAge: oneYear })));
  app.use(express.errorHandler());
});

/*app.get('/', function(req, res){
  res.render('index');
});*/

app.get('/entries', entriesController.index);
app.post('/entries', entriesController.create);


app.listen(port);