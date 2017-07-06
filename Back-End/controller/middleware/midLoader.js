/**
 * @module midLoader
 * @description
 * This module require the parse module 
 * @see module:parse
 */

var parse = require('./parse');

module.exports = {
    /**
    * @function parse/load
    * @description
    * This function load the parsing service
    * @return {void}
    */
    load: function(){
        parse.load();
    }
}