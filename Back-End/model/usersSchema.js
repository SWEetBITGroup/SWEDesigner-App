//istanzazione mongoose
var mongoose = require('mongoose');	
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//Creazione schema utente
var user= new Schema({
	username: { 
		type: String,
		required: true
	},
	pass: { 
		type: String,
		required: true
	},
	email: { 
		type: String,
		required: true
	}
});

//Esportazione schema
var Utente= mongoose.model('Utente', user);
module.exports = mongoose.model('utente', user);