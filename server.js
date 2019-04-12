const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./models/task');

//set up express apps
const app = express();

//connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users_todolist', {useNewUrlParser: true});

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todoApi',require('./routes/todoApi'));

//error handling middleware
app.use(function(err,req,res,next){
	console.log(err);
	res.status(400).send({error:err.message});
});

//listen for request
app.listen(port);
console.log("ToDo List RESTful API server started on: " + port);