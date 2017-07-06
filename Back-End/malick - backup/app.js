var database= require('./database'); 			//Importazione database
var mongoose = require('mongoose'); 	//Importazione modulo mongoose
var express= require('express');		//Importazione modulo express
var app= express();
var bodyParser= require("body-parser");		//Importazione body-parser
var user= mongoose.model('Utente', user);		//Istanziazione schema utente
var proget= mongoose.model('Progetto', proget);		//Istanziazione schema progetto
var chiave= mongoose.model('key', chiave);		//Istanziazione schema chiave
var mongodb= require('mongoDB');
app.use(bodyParser.urlencoded({ extended: false })); //Istanziazione body-parser
app.use(bodyParser.json());
var db = mongoose.connection;			//Connessione database


//		INSERIMENTI


app.post('/ins_utente',function(req,res){	//Funzione di inserimento utente, ritorna true se l'inserimento è andato a buon fine, false altrimenti
	var ins= new user({
	  username: req.body.username,
	  pass: req.body.pass,
	  email: req.body.email
	});
	ins.save(function(err) {
	  if (err) {
		  console.log(err);
		  res.send(false);
	  }
	  else{
		  console.log("Salvataggio utente riuscito: "+ins);
		res.send(true);
	  }
	});
});

app.post('/ins_key', function(req, res){
	var chiave_cript= new chiave({
	key_code: req.body.key_code
	});
	chiave_cript.save(function(err){
	if(err){
		console.log(err);
		res.send(false);
	}
	else {
		console.log("Salvataggio chiave riuscito: "+chiave_cript);
		res.send(true);
	}
	});
});



app.post('/ins_progetto',function(req,res){	//Funzione di inserimento progetto, ritorna true se l'inserimento è andato a buon fine, false altrimenti
		console.log("Si funziono o forse no");
	var ins= new proget({
		nome_progetto: req.body.nome_progetto,
		username: req.body.username,
		progetto: req.body.progetto
	});
	console.log(ins);
	ins.save(function(err) {
	  if (err){
		  console.log(err);
		  res.send(false);
	  }
	  else{
		console.log("Salvataggio progetto riuscito: "+ins);
		res.send(true);
	  }
	});

});


// 		FUNZIONI CON RITORNO DATI SALVATI NEL DATABASE

app.post('/all_progetti', function(req, res){	//Funzione che ritorna i nomi dei progetti dato un utente
proget.find({'username': req.body.username},' -_id nome_progetto', function(err, progetti){
		if(err) console.log(err);
		console.log(progetti);
		res.send(progetti);
	});

});

app.post('/return_key', function(req, res){
	chiave.find( 'key_code', function(err, chiav){
		if(err) console.log(err);
		else{
			res.send(chiav);
			console.log(chiav);
		}
	});
});

app.post('/ritorna_progetto', function(req, res){	//Funzione che ritorna un progetto dato un nome progetto e un utente
	proget.findOne({'nome_progetto': req.body.nome_progetto, 'username': req.body.username}, '-_id progetto', function(err, ut){
		if(err) console.log(err);
		console.log(ut);
		res.send(ut);
	});
});

app.post('/conferma_utente', function(req, res){	//Funzione che ritorna true se un utente esistente nel database ha inserito la password corretta e false altrimenti
user.find({'username': req.body.username, 'pass': req.body.pass}, '-_id username pass', function(err, ut){
		if(err) console.log(err);
		if(ut!=""){
			res.send(true);
			console.log(ut);
		}
		else res.send(false);
	});

});

app.post('/ritorna_email', function(req, res){
	user.find({'username': req.body.username}, '-_id email', function(err, em){
		if(err) console.log(err);
		res.send(em);
		console.log(em);
	});
});


//		FUNZIONI DI AGGIORNAMENTO
app.post('/aggiorna_progetto', function(req, res){		//Funzione che aggiorna un progetto dato il nome progetto e l'utente, ritorna true se l'aggiornamento è andato a buon fine, false altrimenti
	proget.update({ 'nome_progetto': req.body.nome_progetto, 'username': req.body.username}, { 'progetto': req.body.new_progetto }, function (err, nuovo) {
	  if (err) return handleError(err);
	  console.log(nuovo);
	  if(nuovo.n!=0)res.send(true);
	  else res.send(false);
	});
});

app.post('/aggiorna_username', function(req, res){		//Funzione che aggiorna un username dato un vecchio username utente, ritorna true se l'aggiornamento è andato a buon fine, false altrimenti (Modifica anche tutti gli username nei progetti con l'utente in questione)
	var usern= req.body.username;
	var nusern= req.body.new_username;
	user.update({ 'username': usern}, { 'username': nusern}, function (err, nuovo) {
	  if (err) return handleError(err);
	  console.log(nuovo);
  	  if(nuovo.n!=0){
		  proget.update({'username': usern},{ 'username': nusern},{multi: true}, function(err, controllo){
			if(err) console.log(err);
		  });
		res.send(true);
		}
	  else res.send(false);
	});
});

app.post('/aggiorna_password', function(req, res){		//Funzione che aggiorna una password utente dato un username, ritorna true se l'aggiornamento è andato a buon fine, false altrimenti
	user.update({ 'username': req.body.username}, { 'pass': req.body.new_password }, function (err, nuovo) {
	  if (err) return handleError(err);
	  console.log(nuovo);
  	  if(nuovo.n!=0)res.send(true);
	  else res.send(false);
	});

});

app.post('/aggiorna_email', function(req, res){			//Funzione che aggiorna un indirizzo email dato un username utente, ritorna true se l'aggiornamento è andato a buon fine, false altrimenti
	user.update({ 'username': req.body.username}, { 'email': req.body.new_email }, function (err, nuovo) {
	  if (err) return handleError(err);
	  console.log(nuovo);
	 if(nuovo.n!=0)res.send(true);
	 else res.send(false);
	});
});

app.post('/aggiorna_nome_progetto', function(req, res){		//Funzione che aggiorna il nome di un progetto dato il vecchio nome progetto e l'username utente, ritorna true se l'aggiornamento è andato a buon fine, false altrimenti
	proget.update({ 'nome_progetto': req.body.nome_progetto, 'username': req.body.username}, { 'nome_progetto': req.body.new_nome }, function (err, nuovo) {
	  if (err) return handleError(err);
	  console.log(nuovo);
	  if(nuovo.n!=0) res.send(true);
	  else res.send(false);
	});
});


//		FUNZIONI DI ELIMINAZIONE DATI

app.post('/elimina_progetto', function(req, res){		//Funzione che elimina un progetto dato il nome del progetto e il nome dell'utente, ritorna true se l'eliminazione è andato a buon fine, false altrimenti
	proget.findOneAndRemove({'nome_progetto': req.body.nome_progetto, 'username': req.body.username}, function(err, progetti){
		if(err){
			console.log(err);
			res.send(false);
		}
		else{
			console.log("Eliminazione eseguita");
			res.send(true);
		}
	});
});

app.post('/elimina_utente', function(req, res){		//Funzione che elimina un utente e i suoi progetti dato un username utente, ritorna true se l'eliminazione è andato a buon fine, false altrimenti
	user.findOneAndRemove({'username': req.body.username}, function(err, progetti){
		proget.find({'username': req.body.username}).remove( function(err, progetti){
		if(err){
			console.log(err);
			res.send(false);
		}
		else {
			console.log("Eliminazione eseguita");
			res.send("<h1><p>Eliminazione progetto riuscita! B)</p>");
		}
		});
});
});





app.listen(3000,function(){		//Attesa chiamata alla porta 3000
  console.log("Started on PORT 3000");
});
