//istanzazione mongoose
var mongoose = require('mongoose');	
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//Creazione schema progetti
/**
* @constructor 
* @description 
* Create a new schema for a project
*/
var proget= new Schema({
	nome_progetto: {
		$type: String,
		required: true
	},
	username: {
		$type: String,
		required: true
	},
	project:{
        $type: Schema.Types.Mixed,
        require: true
	}
}, {typeKey: '$type'});

//Esportazione schema
var Progetto= mongoose.model('Progetto', proget);
module.exports = mongoose.model('progetto', proget);