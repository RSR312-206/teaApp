var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
morgan = require('morgan'),
seeder = require('mongoose-seed'),
apiRouter = express.Router(),
db = require("./models")

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

apiRouter.route('/teas')
.get(function(req,res){
  db.Tea.find({},function (error,response){
    console.log(response);
    res.json(response);
  })
})
apiRouter.route('/teas/:teaId')
.get(function(req,res){
  db.Tea.findById(req.params.teaId,function (error,tea){
   console.log(tea);
    if (error)
      console.log(error);
      return res.json({message: "there was an error", error: error});
    res.json(tea);
  })
})
.put(function(req,res){
  db.Tea.findById(req.params.teaId, function (error, tea){
    if (error) return res.json({message: "there was an error", error: error});
    tea.quantity = req.body.quantity;
    tea.save(function(err){
      if (err) res.send(err);
      res.json({message: "product updated"})
    })
  })
})

.delete(function(req,res){
  db.Tea.remove({_id:req.params.teaId}, function (error,tea){
    console.log(tea);
      if (error) return res.send(error);
      res.json({ message: 'product successfully deleted' });
  })
})

app.use('/', apiRouter);

app.get('/', function(req,res){
  res.render('index.ejs');
});

PORT = 3001

app.listen(PORT,function(){
  console.log("this server is running on", PORT)
});