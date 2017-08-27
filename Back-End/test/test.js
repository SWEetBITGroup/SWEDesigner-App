var assert = require('assert');


process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require('chai').expect;
let should = chai.should();
let supertest = require('supertest');
let server = supertest.agent("http://localhost:3000");
let forge = require('node-forge');


let mongooseRequest = require('../model/mongooseRequest');
let mongooseConnection = require('../model/mongooseConnection');
let cryptSchema = require('../model/cryptKeySchema');
let projectSchema = require('../model/projectsSchema');
let usersSchema = require('../model/usersSchema');
let encryptService = require('../controller/services/encryptService');

chai.use(chaiHttp);


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Test Service User', function() {
    it('insUsr', function() {
      mongooseRequest.ins_usr('usr','psw','mail@f.c');
      expect(mongooseRequest.login('usr','psw'));

    });

    it('loadUsr', function() {
      mongooseRequest.ins_usr('usr','psw','mail@f.c');
      expect(mongooseRequest.load_all_usr());

    });

    it('forgotPassword', function() {
      expect(mongooseRequest.forgot_password('mail@f.c'));

    });
});

describe('Test Service Project', function() {
    it('loadProject', function() {
      expect(mongooseRequest.load_proj('name','usr'));

    });

    it('deleteProject', function() {
      expect(mongooseRequest.delete_proj('usr','name'));

    });

});

describe('Test Connection', function() {
    it('connessione db', function() {
      expect(mongooseConnection.conn());
    });
});
