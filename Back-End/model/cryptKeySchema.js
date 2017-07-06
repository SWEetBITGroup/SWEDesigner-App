//istanzazione mongoose
var mongoose = require('mongoose');	
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//Creazione schema per chiave criptografica
/**
* @constructor 
* @description 
* Create a new schema for a crypt key
*/
var keyschema= new Schema(
	{
		key_code: String,
		iv_code: String
	}, 
	{
			toObject:{
				transform: function(doc, ret){
					delete ret._id;
				}
		}	
	},
	{
		toJSON:{
			transform: function(doc, ret){
				delete ret._id;
			}
		}
	}

);

//Esportazione schema
var chiave= mongoose.model ('chiave', keyschema);
module.exports = mongoose.model('key', keyschema);