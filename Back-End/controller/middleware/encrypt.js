/**
 * @module encrypt
 * @description 
 * This module require the encrypt servie.
 * @see module:encryptService
 */

var encr = require('../services/encryptService');

module.exports = {
    /**
     * @function encrpyt
     * @description
     * This function encrypt a JSON with a particular key
     * @param {Object} myFile File to crypt
     * @param {string} key Key used for encrypting file
     * @param {string} iv iv used for encrypting file
     * @return {Object}
     */
    encrypt : function(myFile, key, iv){ 
        return encr.encrypt(myFile, key, iv);
    },
    /**
    * @function decrypt
    * @description
    * This function decrypt and encripted file with a particular key
    * @param {Object} myFile File to decrypt
    * @param {string} key Key used for decrypting file
    * @param {string} iv iv used for decrypting file
    * @return {Object}
    */
    decrypt : function(myFile, key, iv){  
        return encr.decrypt(myFile, key, iv);
    },
    /**
     * @function getKey
     * @description
     * This function get the key for encrypt files
     * @return {string}
     */
    getKey : function(){
        return encr.get_key();
    },
    /**
    * @function getIv
    * @description
    * This function get the iv for encrypt files
    * @return {string}
    */
    getIv : function(){
        return encr.get_iv();
    }
}