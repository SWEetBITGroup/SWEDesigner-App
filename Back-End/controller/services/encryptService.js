/**
 * @module encryptService
 * @description
 * This module use Forge to encrypt a JSON with an AES key
 */

var forge = require('node-forge');

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
    encrypt: function(myFile, key, iv){
        //console.log("key crypt");
        //console.log(key.toString());
        var cipher = forge.cipher.createCipher('AES-CBC', key);
        cipher.start({iv: iv});
        cipher.update(forge.util.createBuffer(myFile));
        cipher.finish();
        var encrypted = cipher.output;
        // outputs encrypted hex
        //console.log(encrypted.toHex());
        return encrypted;
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
    decrypt: function(myEncr, key, iv){
        //console.log("key decript");
        //console.log(key.toString());
        //console.log("file" + " " + myEncr.toHex());
        var decipher = forge.cipher.createDecipher('AES-CBC', key);
        decipher.start({iv: iv});
        decipher.update(myEncr);
        decipher.finish();
        // outputs decrypted string
        var decrypted = decipher.output;
        //console.log(decrypted);
        var jsonDecr = JSON.stringify(decrypted.toString());
        var str = jsonDecr.split('\\').join('\r');
        //console.log("file decrittato" + " " + jsonDecr);
        return str;
    },
    /**
    * @function getKey
    * @description
    * This function generate the key for encrypt files
    * @return {string}
    */
    get_key: function(){
        var key = forge.random.getBytesSync(16);
        return key;
    },
    /**
    * @function getIv
    * @description
    * This function generate the iv for encrypt files
    * @return {string}
    */
    get_iv: function(){
        var iv = forge.random.getBytesSync(16);
        return iv;
    }
};