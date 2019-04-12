'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	task_name: {
		type:String,
		required: true
	},

	task_date: {
		type:Date,
		default:Date.now
	},

	task_status: {
		type: [{
			type:String,
			enum:['pending','ongoing','complete']
		}],
		default: ['pending']
	}
});

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;