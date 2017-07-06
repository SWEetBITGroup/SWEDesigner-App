/**
 * @module parseService
 */

const mu = require('mu2');

module.exports = {
  /**
   * @function parsing
   * @description
   * This function rendering the template against the JSON sent by client
   * @param {string} template Compiledtemplate path
   * @param {Object} myMu JSON to render
   * @param {ParseCB} cb Callback that handle the response
   * @return {void}
   */
  parsing: function(template, myMu, cb){
    const chunks = [];
    mu.render(template, myMu).on('data', function(data){
      chunks.push(data.toString());
    });
    mu.render(template, myMu).on('end', function(){
      var parsed = chunks.join('');
      cb(parsed);
    })
  }
};