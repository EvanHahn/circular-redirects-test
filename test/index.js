const supertest = require('supertest')
const app = require('../app')

describe('app', function () {
  beforeEach(function () {
    this.request = supertest(app)
  })

  it('redirects /a to /b', function () {
    return this.request
      .get('/a')
      .redirects(0)
      .expect(302)
      .expect('Location', '/b')
  })

  it('redirects /b to /c', function () {
    return this.request
      .get('/b')
      .redirects(0)
      .expect(302)
      .expect('Location', '/c')
  })

  it('redirects /c to /a', function () {
    return this.request
      .get('/c')
      .redirects(0)
      .expect(302)
      .expect('Location', '/a')
  })
})
