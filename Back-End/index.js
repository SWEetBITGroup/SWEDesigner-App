//Init Services, Database & logic var

  //ErrorHandler
  //var error = require('./controller/middleware/errorHandler');

  //ToCompile
  const {spawn} = require('child_process');

  //ToZip
  var archiver = require('archiver');
  var archive = archiver('zip');

  //FilseSystem init
  var fs = require('fs');

  //moustache
  const mu = require('./controller/middleware/parse');

  //forge
  var encr = require('./controller/middleware/encrypt');

  //db
  var db = require('./model/mongooseConnection');
  var mongooseRequest = require('./model/mongooseRequest');

  //express
  var path = require('path');
  const express = require('express');
  var bodyParser = require('body-parser');
  const app = express();

  //BodyParser init
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //Handling degli errori
  //definire app.use(error.nomefunzione()) 
  //vengono chiamate da sè per ogni errore grazie ai next

  //port
  const port = 3000;

  //global var
  var keyCrypt;
  var ivCrypt;
  var errRead = "error loading request parameters";

  //globalFun
  function clearDir(dirPath, removeSelf) {
    if (removeSelf === undefined)
      removeSelf = true;
    try { var files = fs.readdirSync(dirPath); }
    catch(e) { return; }
    if (files.length > 0)
      for (var i = 0; i < files.length; i++) {
        var filePath = dirPath + '/' + files[i];
        if (fs.statSync(filePath).isFile())
          fs.unlinkSync(filePath);
        else
          rmDir(filePath);
      }
    if (removeSelf)
      fs.rmdirSync(dirPath);
  };

  function clear(cb){
    let removeSelf = false;
    clearDir("./code", removeSelf);
    clearDir("./zip", removeSelf);
    cb(false);
  }

  function writeJson(json, cb){
    fs.writeFile("./files/encr.json", json);
    cb(false);
  }


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
  //Conn to Client
    // Set static folder to public
    // manage client routing
    app.use(express.static(path.join(__dirname, 'dist')));
    app.use('/home', function(req, res){
      res.sendFile(__dirname + '/dist/index.html');
    });
    app.use('/registrazione', function(req, res){
      res.sendFile(__dirname + '/dist/index.html');
    });
    app.use('/editor', function(req, res){
      res.sendFile(__dirname + '/dist/index.html');
    });
    app.use('/passwordDimenticata', function(req, res){
      res.sendFile(__dirname + '/dist/index.html');
    });
    app.use('/modificaMail', function(req, res){
      res.sendFile(__dirname + '/dist/index.html');
    });
    app.use('/modificaPassword', function(req, res){
      res.sendFile(__dirname + '/dist/index.html');
    });
  //Encrypt/Decrypt
  /**
    * @function app/post/encrypt
    * @description
    * This an express routing that call the encrypt service and send to client the encrypted Object
    * @param {string} URI Server Uri that contains the encrypt functions
    * @see module:encrypt
   */
  app.post("/encrypt", function(req,res){
    //console.log('bueo-bueo');
    var myBytes = JSON.stringify(req.body);
    //console.log(myBytes);
    encripted = encr.encrypt(myBytes, keyCrypt, ivCrypt);
    console.log("File cripted correctly");
    //console.log(encripted);
    encrLenghtFile = encripted._constructedStringLength;
    encrRead = encripted.read;
    //console.log("param: " + encrLenghtFile + ' ' + encrRead);
    res.json(encripted);    
    
  })
  /**
    * @function app/post/decrypt
    * @description
    * This an express routing that call the decrypt service and send to client the decrypted Object
    * @param {string} URI Server Uri that contains the decrypt functions
    * @see module:encrypt
   */
  app.post("/decrypt", function(req,res){
    //console.log(req.body.data);
    var ByteStringBuffer = {
      data: req.body.data,
      read: req.body.read,
      _constructedStringLength: req.body._constructedStringLength
    }
    console.log(ByteStringBuffer);
    var decripted = encr.decrypt(ByteStringBuffer , keyCrypt, ivCrypt);
    console.log("File decripted correctly");
    res.json(JSON.stringify(decripted)); 
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
    clear((err)=>{
      if(!err){
        console.log("refreshed directory");
      }
    })
    let nomeClasse = req.body.nomeMain;
    var proj = req.body.progetto;
    //var metodo = req.body.m;
    //console.log(metodo);
    //myMU.methodsPU[0].corpoM = metodo;
    var myMU ={
      "progetto": proj
    };
    console.log(myMU);
    var template = mu.getTemplate();
    mu.parse(template, myMU, function(parsed){
      console.log(parsed);
      //res.json(parsed);
      //res.attachment("./templates/template.html");
      fs.writeFile("./code/"+nomeClasse+".java", parsed, function(err){
        if(err){
          console.log("errore scrittura file");
        }
        else{
          const compiled = spawn("javac", ["./code/"+nomeClasse+".java"]);
          compiled.on('close', (err)=>{
            var zipOutput = fs.createWriteStream("./zip/"+nomeClasse+".zip");
            zipOutput.on('close', function () {
                console.log(archive.pointer() + ' total bytes');
                console.log('archiver has been finalized and the output file descriptor has closed.');
                res.download("./zip/"+nomeClasse+".zip");
            });
            archive.pipe(zipOutput);
            /*var fileJava = "./code/Main.java";
            var fileClass = "./code/Main.class";
            archive.append(fs.createReadStream(fileJava), { name: 'Main.java' });
            archive.append(fs.createReadStream(fileClass), { name: 'Main.class' });*/
            archive.directory("./code", true, {date: new Date()});
            archive.finalize();
            archive = archiver('zip');
          })
        }
      })
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
            res.send(false);
          }
          else{
            console.log(x);
            res.send(true);
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
              console.log("logged");
              var isLogged = {
                "logged" : true,
                "username": x[0].username
              }
              //console.log(isLogged);
              res.json(isLogged);
              //res.send("logged");
            }
            else{
              console.log("utente non esistente");
              res.send("utente non esistente");
            }
          }
        })
      })
      app.post("/forgotPwd", function(req, res){
        var usr = req.body.mail;
        mongooseRequest.forgot_password(usr, function(err, x){
          if(err){
            console.log("problema con il recupero password");
            res.send("problema con il recupero password");
          }
          else{
            console.log("password recuperata: "+x[0].pass);
            res.send(x[0].pass);
          }
        })
      })
      app.post("/updateUsername", function(req, res){
        var username = req.body.username;
        var newUsername = req.body.new_username;
        mongooseRequest.update_username(username, newUsername, function(err, x){
          if(err){
            console.log("problema con l'aggiornamento dell'username");
            res.send(false);
          }
          else{
            console.log("username aggiornato");
            res.send(true);
          }
        })
      })
      app.post("/updatePwd", function(req, res){
        var username = req.body.username;
        var pwd = req.body.new_password;
        mongooseRequest.update_pwd(username, pwd, function(err, x){
          if(err){
            console.log("prolema aggiornamento password");
            res.send(false);
          }
          else{
            console.log("password aggiornata con successo");
            res.send(true);
          }
        })
      })
      app.post("/updateMail", function(req, res){
        var username = req.body.username;
        var mail = req.body.new_mail;
        mongooseRequest.update_mail(username, mail, function(err, x){
          if(err){
            console.log("problema aggiornamento mail");
            res.send(false);
          }
          else{
            console.log("mail aggiornata correttamente");
            res.send(true);
          }
        })
      })
      app.post("/deleteUsr", function(req, res){
        var username = req.body.username;
        mongooseRequest.delete_usr(username, function(err, x){
          if(err){
            console.log("utente non eliminato");
            res.send(false);
          }
          else{
            console.log("utente eliminato");
            res.send(true);
          }
        })
      })
    //Projects' Query
    app.post("/insProject", function(req, res){
      var name = req.body.nome_progetto
      var usr = req.body.username;
      var proj = req.body.project;
      console.log(proj);
      mongooseRequest.ins_proj(name, usr, proj, function(err, x){
        if(err){
          console.log("problema con l'inserimento di un progetto");
          res.send(false);
        }
        else{
          console.log("progetto inserito correttamente: "+x);
          res.send(true);
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
          res.send(projects);
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
          console.log(x);
          res.json(x);
        }
      })
    })
    app.post("/updateProj", function(req, res){
      var name = req.body.nome_progetto;
      var usr = req.body.username;
      var proj = req.body.project;
      mongooseRequest.update_proj(name, usr, proj, function(err, x){
        if(err){
          console.log("problemi con l'update di un progetto");
          res.send(false);
        }
        else{
          console.log("progetto aggiornato");
          res.send(true);
        }
      })
    })
    app.post("/updateNameProj", function(req, res){
      var name = req.body.nome_progetto;
      var usr = req.body.username;
      var newName = req.body.new_name;
      mongooseRequest.update_nameProj(name, usr, newName, function(err, x){
        if(err){
          console.log("problema aggiornamento nome del progetto");
          res.send(false);
        }
        else{
          console.log("nome aggiornato");
          res.send(true);
        }
      })
    })
    app.post("/deleteProj", function(req, res){
        var username = req.body.username;
        var name = req.body.nome_progetto;
        mongooseRequest.delete_proj(username, name, function(err, x){
          if(err){
            console.log("progetto non eliminato");
            res.send(false);
          }
          else{
            console.log("progetto eliminato");
            res.send(true);
          }
        })
      })