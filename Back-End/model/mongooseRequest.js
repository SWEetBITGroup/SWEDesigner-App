/**
 * @module mongooseRequest
 * @description
 * This module manage the query to MongoDB
 * @see module:moongoseConnection
 */

//Istanziazione schemi
var cryptSchema = require('./cryptKeySchema');
var projectSchema = require('./projectsSchema');
var userSchema = require('./usersSchema');

var mongoose = require('mongoose');	
var proget= mongoose.model('Progetto', proget);
var chiave= mongoose.model('key', chiave);	
var user = mongoose.model('utente', user);

//connessione database
var db = mongoose.connection;

module.exports ={
//INSERIMENTI
/**
 * @function ins_usr
 * @description
 * This function create and insert a new user into Database.
 * @param {string} usr Username of new user.
 * @param {string} pwd Password of new user.
 * @param {string} mail Email of new user.
 * @param {function} cb Callback 
 * @return {void}
 */
ins_usr: function(usr, pwd, mail, cb){  //giusta
    var ins= new user({
        username: usr,
        pass: pwd,
        email: mail
    });
    ins.save(function(err) {
        if (err) {
            console.log(err);
            cb(true, "");
        }
        else{
            console.log("Salvataggio utente riuscito: "+ins);
            cb(false, "inserted: "+ins);
        }
    });
},
/**
* @function ins_proj
* @description
* This function create and insert a new project into Database.
* @param {string} name Name of new user.
* @param {Object} proj JSON of project.
* @param {function} cb Callback 
* @return {void}
*/
ins_proj: function(name, usr, proj, cb){ //giusta
    var ins= new proget({
    nome_progetto: name,
    username: usr,
    project: proj
  });
  ins.save(function(err) {
        if (err){
            console.log(err);
            cb(true, "");
        }
        else{
            console.log("Salvataggio progetto riuscito: "+ins);
            cb(false, "Salvataggio progetto riuscito: "+ins);
        }
    });
},
/**
 * @function ins_crypt_param
 * @description
 * This query insert into database the crypt values
 * @param {string} k Crypt key
 * @param {string} i iv key
 * @param {cryptQuery} cb The callback that handles the response. 
 * @see keyschema
 */
ins_crypt_param: function(k, i, cb){
      var chiave_cript= new chiave({
          "key_code":k,
          "iv_code":i
          });
          chiave_cript.save(function(err){
          if(err){
              console.log(err);
              //res.send(false);
          }
          else {
              console.log("Salvataggio chiave riuscito: "+chiave_cript);
              //res.send(true);
              cb();
          }
      });
},
// 		FUNZIONI CON RITORNO DATI SALVATI NEL DATABASE
/**
 * @function load_allProj
 * @description
 * This function fetch all projects of a specific user
 * @param {string} username Username of user
 * @param {function} cb Callback
 * @return {void}
 */
load_allProj: function(username, cb){
      proget.find({'username': username},' -_id nome_progetto', function(err, progetti){ //giusta
      if(err){
          console.log("errore nel carimento dei progetti");
          cb(true, "");
        }
        else{
            console.log("progetti caricati correttamente");
            cb(false, progetti);
        }
  });
},
/**
* @function load_keyCrypt
* @description
* This query request to database the crypt values
* @param {cryptQuery} cb The callback that handles the response. 
*/
load_keyCrypt: function(cb){
      chiave.find('key_code id_code', function(err, keys){
          if(err){
              console.log(err);
              cb(true, keys);
          }
          else{
              var json = keys.map(function(p){
                      return p.toJSON()
                  })
                  //console.log(json);
                  cb(false, json);
          }
      })        
    },
    /**
     * @function load_all_usr
     * @description 
     * This function fetch all user from Database
     * @param {function} cb Callback
     * @return {void}
     */
load_all_usr : function(cb){ //giusta
    user.find({}, function(err, utenti){
        if(err){
            console.log("errore caricamento utenti");
            cb(true, "");
        }
        else{
            cb(false, utenti);
        }
    })
},
/**
 * @function load_proj
 * @description
 * This function fetch from Database a single project of an specific user
 * @param {string} name Name of project
 * @param {string} usr Username of user
 * @param {function} cb Callback
 */
load_proj: function(name, usr, cb){ //giusta
    proget.findOne({'nome_progetto': name, 'username': usr}, 'project', function(err, proj){
      if(err){
        console.log(err);
        cb(true, "");
    }
    else{
        cb(false, proj);
    } 
  });
},
/**
 * @function login
 * @description
 * This Function control if a speciic user is in Database and send to client True or False for the login function
 * @param {string} mail Email of user
 * @param {string} pwd Password of user
 * @param {function} cb Callback
 */
login: function(mail, pwd, cb){ //giusta
      user.find({'email': mail, 'pass': pwd}, '-_id email pass', function(err, logged){
      if(err){
        console.log(err);
        cb(true, "errore nel login");
    }
    else{
        if(logged!=""){
            console.log("utente: "+logged+" loggato perfettamente");
            cb(false, logged)
        }
        else{
            console.log("problema con i dati di login");
            cb(false, false)
        }
    }
  });
},
/**
 * @function forgot_mail
 * @description
 * This function fetch a particular mail from Database
 * @param {string} usr Username of user
 * @param {function} cb Callback
 * @return {void}
 */
forgot_password: function(mail, cb){
    user.find({'email': mail}, '-_id pass', function(err, pass){
        if(err){
            console.log("errore nel recupero della password");
            cb(true, "");
        }
        else{
            console.log("Password recuperata");
            cb(false, pass);
        }
    })
},
update_proj: function(projName, usr, proj, cb){
    proget.update({ 'nome_progetto': projName, 'username': usr }, { 'progetto':proj}, function(err, nuovo){
        if(err){
            console.log("errore nell'aggiornamento di un progetto");
            cb(true, "");
        }
        else{
            if(nuovo.n != 0){
                console.log("progetto aggiornato correttamente");
                cb(false, nuovo);
            }
            else{
                console.log("errore nell'aggiornamento di un progetto");
                cb(true, "");
            }
        }
    })
},
update_nameProj: function(projName, usr, newName, cb){
    proget.update({'nome_progetto': projName, 'username': usr}, {'nome_progetto': newName}, function(err, nuovo){
        if(err){
            console.log("errore aggiornamnto nome progetto");
            cb(true, "");
        }
        else{
            if(nuovo.n != 0 ){
                console.log("nome progetto aggiornato con successo");
                cb(false, nuovo);
            }
            else{
                console.log("errore aggiornamnto nome progetto");
                cb(true, "");
            }
        }
    })
},
//DA MODIFICARE TUTTE LE FUNZIONI DI SEGUITO
/*
//		FUNZIONI DI AGGIORNAMENTO
update_username: function(){
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
},
update_pwd: function(){
      app.post('/aggiorna_password', function(req, res){		//Funzione che aggiorna una password utente dato un username, ritorna true se l'aggiornamento è andato a buon fine, false altrimenti
      user.update({ 'username': req.body.username}, { 'pass': req.body.new_password }, function (err, nuovo) {
      if (err) return handleError(err);
      console.log(nuovo);
      if(nuovo.n!=0)res.send(true);
      else res.send(false);
      });

});
},
update_mail: function(){
      app.post('/aggiorna_email', function(req, res){			//Funzione che aggiorna un indirizzo email dato un username utente, ritorna true se l'aggiornamento è andato a buon fine, false altrimenti
      user.update({ 'username': req.body.username}, { 'email': req.body.new_email }, function (err, nuovo) {
      if (err) return handleError(err);
      console.log(nuovo);
      if(nuovo.n!=0)res.send(true);
      else res.send(false);
      });
});
},
//		FUNZIONI DI ELIMINAZIONE DATI
delete_proj: function(){
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
},
delete_usr: function(){
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
},*/
/**
 * @function drop_schema
 * @description
 * This function delete database
 * @return {void}
 */
drop_schema: function(cb){
  mongoose.connection.db.dropDatabase(function(err){
  if(err){
      console.log(err);
      console.log("no droppato");
      cb(true, "");
  }
  else{
      console.log("db droppato");
      cb(false, "db droppato");
  }
  });
}
}