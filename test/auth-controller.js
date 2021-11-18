const expect = require('chai').expect;
const sinon = require('sinon');

const User = require('../models/user')
const AuthController = require('../controllers/auth');

describe('Auth Controller - Login', function() {
  it('Shoud throw an error if db access fails', function() {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    

    User.findOne.restore();

  })
})