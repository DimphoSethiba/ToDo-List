const express = require('express');
const router = express.Router();
const Task = require('../models/task');
	
//add a new task to the database
router.post('/tasks', function(req,res,next){
	Task.create(req.body).then(function(task){
		res.send(task);
		
		console.log('A new task has been added');
	}).catch(next);
});
//get a list of tasks from the database
router.get('/tasks', function(req,res,next){
	Task.find({}).then(function(task){
		res.send(task);
		console.log('All tasks are displayed');
	}).catch(next);
});

//update a task in the database
router.put('/tasks/:id', function(req,res,next){
	Task.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
		Task.findOne({_id:req.params.id}).then(function(task){
			res.send(task);
			console.log(req.params.id + ' task has been updated');
		});
	}).catch(next);
	
});

//delete a task from the database
router.delete('/tasks/:id', function(req,res,next){
	Task.findOneAndDelete({_id:req.params.id}).then(function(task){
		res.send(task);
		console.log(req.params.id + ' task has been deleted');
	}).catch(next);
});

//delete a task from the database
router.delete('/tasks', function(req,res,next){
	Task.deleteMany().then(function(task){
		res.send(task);
		console.log( 'All tasks have been deleted');
	}).catch(next);
});

module.exports = router;