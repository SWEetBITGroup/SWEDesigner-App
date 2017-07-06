/**
 * @module moongoseConnection
 * @description
 * This module manage the connection to MongoDB
 */

var mongoose = require('mongoose');	

/* PER HANDLING 
mongoose.connect('mongodb://localhost/dbname', function(err) {
    if (err) throw err;
}); */

module.exports ={
    /**
     * @function conn
     * @description
     * This function create, if not exist, a database called "my_database" or connect it.
     * If the connection is failed, throw an error.
     * @return {void}
     */
    conn : function(){
        //Connect to my_databse or create it, if is the first time.
        var mongoDB = 'mongodb://localhost/my_database';
        mongoose.connect(mongoDB);
        mongoose.connection.on('connected', function(){
            console.log('Connected succesfully!')
        })
        mongoose.connection.on('disconnected', function () {  
            console.log('Mongoose default connection disconnected'); 
        })
        mongoose.connection.on('error',function (err) {  
            console.log('Mongoose default connection error: ' + err);
        })
        process.on('SIGINT', function() {  
            mongoose.connection.close(function () { 
              console.log('Mongoose default connection disconnected through app termination'); 
              process.exit(0); 
            });
        })
    }
}

/* CONNECTION EVENTS
 When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); */
