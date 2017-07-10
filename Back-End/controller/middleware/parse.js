/**
 * @module parse
 * @description
 * This module require the parsing service 
 * @see module:parseService
 */

//initialize template
/**
 * @file Moustache template for generating Java code
 */
var template = "../Back-End/templates/template.html";

//inizialize parser
const mu = require('mu2');
var moustache = require('../services/parseService');

module.exports = {
    /**
     * @function load
     * @description
     * This function clear the cache, so compile the template for rendering
     * @return {void}
     */
    load: function(){
        var compiled;
        mu.clearCache();
        mu.compile(template, function(err, cached){
            if(err){
                console.log(err);
            }
        });
    },
    /**
     * @function parse
     * @description
     * This function call the parse service
     * @param {string} template Path for template
     * @param {Object} myMu Json to parsing
     * @param {ParseCB} cb Callback that handle the response
     * @return {void}
     */
    parse: function(template, myMu, cb){
        moustache.parsing(template, myMu, cb);
    },
    /**
     * @function getTemplate
     * @description
     * This function return the path of template
     * @return {string}
     */
    getTemplate: function(){
        return template;
    }
}