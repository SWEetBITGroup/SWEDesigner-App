//Init Services, Database & logic var

  //ErrorHandler
  //var error = require('./controller/middleware/errorHandler');

  //moustache
  const mu = require('./controller/middleware/parse');

  //forge
  var encr = require('./controller/middleware/encrypt');

  //db
  var db = require('./model/mongooseConnection');
  var mongooseRequest = require('./model/mongooseRequest');

  //express
  const express = require('express');
  var bodyParser = require('body-parser');
  const app = express();

  //BodyParser init
  app.use(bodyParser.json());

  //Handling degli errori
  //definire app.use(error.nomefunzione()) 
  //vengono chiamate da sè per ogni errore grazie ai next

  //port
  const port = 3000;

  //global var
  var keyCrypt;
  var ivCrypt;
  var encripted;
  var errRead = "error loading request parameters";

//Init Server
const server = require('./serverLoader'); // function loading server

app.listen(port, ()=>{
  console.log("SERVER WORKS!!!" + port);

  /**
   * This callback function instantiate the keyCrypt and ivCrypt with keys array.
   * @callback keysReturned
   * @param {Array} keys An array of <tt>string</tt> that contains crypt values.
   */

  /**
   * This callback function instantiate a rendered template to sent to client.
   * @callback ParseCB
   * @param {Object} parsed A text object that contains the Java source code.
   */

  /**
   * @function server/load
   * @see module:serverLoader
   * @description
   * Loading server's components.
   * @param {string} db Connection to database.
   * @param {string} mongooseRequest Query module.
   * @param {string} mu Parsing module.
   * @param {keysReturned} Callback that set crypt param
   * @return {void}
   */
  server.load(db, mongooseRequest, mu, encr, function(keys){
    keyCrypt = keys[0];
    ivCrypt = keys[1];
  });
});


/**
 * @global
 */
//Express routing
  //Encrypt/Decrypt
  /**
    * @function app/post/encrypt
    * @description
    * This an express routing that call the encrypt service and send to client the encrypted Object
    * @param {string} URI Server Uri that contains the encrypt functions
    * @see module:encrypt
   */
  app.post("/encrypt", function(req,res){
    var myBytes = JSON.stringify(req.body);
    //console.log(myBytes);
    encripted = encr.encrypt(myBytes, keyCrypt, ivCrypt);
    console.log("File cripted correctly");
    res.send(encripted.data);
  })
  /**
    * @function app/post/decrypt
    * @description
    * This an express routing that call the decrypt service and send to client the decrypted Object
    * @param {string} URI Server Uri that contains the decrypt functions
    * @see module:encrypt
   */
  app.post("/decrypt", function(req,res){
    //console.log(encripted);
    var decripted = encr.decrypt(encripted, keyCrypt, ivCrypt);
    console.log("File decripted correctly");
    res.send(decripted);
  })
  //Parsing/Generate
  /**
    *@function app/post/parsing
    * @description
    * This is an express routing function that call the parsing service and send to client the parsed Object
    * @param {string} URI Server Uri that contains the parsing functions
    * @see module:parse
   */
  app.post("/parsing", function(req,res) { 
    var myMu = req.body;
    var template = mu.getTemplate();
    mu.parse(template, myMu, function(parsed){
      res.send(parsed);
    });
  })

  //DatabaseQuery
    //DROP
      app.post("/dropDB", function(req, res){
        mongooseRequest.drop_schema(function(err, x){
          if(err){
            console.log("errore nel drop del db");
            res.send("errore nella cancellazione del database");
          }
          else{
            console.log("DB DROPPED");
            res.send(x);
          }
        })
      })
    //Users' Query
      app.post("/insUsr", function(req, res){
        var usr = req.body.username;
        var pwd = req.body.pass;
        var mail = req.body.email;
        mongooseRequest.ins_usr(usr, pwd, mail, function(err, x){
          if(err){
            console.log("inserimento non riuscito");
            res.send("inserimento non riuscito");
          }
          else{
            console.log(x);
            res.send(x);
          }
        })
      })
      app.post("/loadUsers", function(req, res){
        mongooseRequest.load_all_usr(function(err, utenti){
          if(err){
            console.log("errore caricamento utenti");
            res.send("errore caricamento utenti");
          }
          else{
            console.log("caricamento effettuato: "+utenti);
            res.send("caricamento effettuato: "+utenti);
          }
        })
      })
      app.post("/login", function(req, res){
        var mail = req.body.mail;
        var pwd = req.body.pass;
        mongooseRequest.login(mail, pwd, function(err, x){
          if(err){
            console.log("Problema di login");
            res.send("Problema di login");
          }
          else{
            if(x){
              console.log("loged");
              res.send("logged");
            }
            else{
              console.log("mannaggia a dio non esiste");
              res.send("malick negro di merda");
            }
          }
        })
      })
    //Projects' Query
    app.post("/insProject", function(req, res){
      var name = req.body.nome_progetto;
      var usr = req.body.username;
      var proj = req.body.project;
      mongooseRequest.ins_proj(name, usr, proj, function(err, x){
        if(err){
          console.log("problema con l'inserimento di un progetto");
          res.send("problema con l'inserimento di un progetto");
        }
        else{
          console.log("progetto inserito correttamente: "+x);
          res.send("progetto inserito correttamente: "+x);
        }
      })
    })
    app.post("/loadProjects", function(req, res){
      var usr = req.body.username;
      mongooseRequest.load_allProj(usr, function(err, projects){
        if(err){
          console.log("problema il caricamento dei progetti");
          res.send("problema il caricamento dei progetti");
        }
        else{
          console.log("Progetti caricati: "+projects);
          res.send("Progetti caricati: "+projects);
        }
      })
    })
    app.post("/loadProj", function(req, res){
      var name = req.body.nome_progetto;
      var usr = req.body.username;
      mongooseRequest.load_proj(name, usr, function(err, x){
        if(err){
          console.log("problemi con il caricamento del progetto");
          res.send("problemi con il caricamento del progetto");
        }
        else{
          console.log("progetto caricato: "+x);
          res.send("progetto caricato: "+x);
        }
      })
    })
    
