/**
 * @module serverLoader
 * @description
 * This module requires the middleware loader
 * @see module:midLoader
 */

//middleware istance
var middleware = require('./controller/middleware/midLoader');

/**
 * This callback instantiate the crypt values.
 * @callback cryptLoad
 * @param {Array} data An array that contains crypt values.
 */

 /**
  * This callback load keys from database
  * @callback cryptQuery
  * @param {Array} keys Array that contains the keys fetched from database
  */

//Loading var istance
/**
 * @function loadCryptParam
 * @description
 * A simple function that require to database keyCrypt and ivCrypt.
 * @param {string} db Connection to database.
 * @param {cryptLoad} cb The callback that handles the response. 
 * @return {void}
 * */
function loadCryptParam(db, cb){
    db.load_keyCrypt(function(err, res){
        if(err){
            console.log(err);
        }
        else{
            var keyCrypt = res[0].key_code;
            var ivCrypt = res[0].iv_code;
            console.log("parameters loaded correctly");
            var data = [keyCrypt, ivCrypt];
            cb(data);
        }
    })
}


module.exports = {
    /**
     * @function load
     * @description
     * This function initialize the server and his modules.
     * First try to connect to database, so create or load the crypt param with 
     * @param {string} db Connection to database.
     * @param {string} mR Query module.
     * @param {string} mu Parsing module.
     * @param {string} encr Encrypt module
     * @param {keysReturned} cb The callback that handles the response.
     * @return {void}
     * 
     * @see module:mongooseConnection
     */
    load : function(db, mR, mu, encr, cb){ 

        //Connect to Database
        db.conn();

        //Loading crypt Key
        mR.load_keyCrypt(function (err,res) {
            if(!err && res == ""){ //first time -> create param, insert them in db and retry to load them
              var key = encr.getKey();
              var iv = encr.getIv();
              mR.ins_crypt_param(key, iv, function(){
                console.log("parameters created correctly");
                loadCryptParam(mR, function(keys){
                    //console.log(keys);
                    cb(keys);
                });
              });
            }
            else if(!err){ // param already exist -> simply load them
                loadCryptParam(mR, function(keys){
                    //console.log(keys);
                    cb(keys);
                });
            }
            else if(err){ // trouble with loading
              console.log(errRead);
            }
        });

        middleware.load();
    }
}