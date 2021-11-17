const expect = require('chai').expect;

const authMiddleware = require('../middleware/is-auth');

describe('Auth middleware', function () {
  it('should throw an error if no authorization header is presernt', function () {
    const req = {
      get: function (headerName) {
        return null;
      },
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw('not authenticated');
  });

  it('should throw an error if the auth header is only one string', function () {
    const req = {
      get: function (headerName) {
        return 'xyz';
      },
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });
});
