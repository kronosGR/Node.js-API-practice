const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller - Login', function () {
  it('Should throw an error if db access fails', function (done) {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    const req = {
      body: {
        email: 'test@11.com',
        password: '11111',
      },
    };
    AuthController.login(req, {}, () => {}).then((result) => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    User.findOne.restore();
  });

  it('Should send a response with a valid user status for an existing user', function (done) {
    connect(
      'mongodb+srv://kronos:yxhI2XOMH63PzHrm@cluster0.hrnez.mongodb.net/test-messages'
    )
      .then((result) => {
        const user = new User({
          email: 'test@11.com',
          password: 'test',
          name: 'test',
          posts: [],
        });
        return user.save();
      })
      .then((result) => {
        
      })
      .catch((err) => console.log(err));
  });
});
