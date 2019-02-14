const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000/content/';
const User = require('../../src/db/models').User;
const Topic = require('../../src/db/models').Topic;
const sequelize = require('../../src/db/models/index').sequelize;

describe('routes : content', () => {
  beforeEach((done) => {
    sequelize
      .sync({ force: true })
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
  describe('GET /content/main', () => {
    it('should render a view with main on the page', (done) => {
      request.get(`${base}main`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain('Main');
        done();
      });
    });
    // it('should render a view with youtube videos', (done) => {
    //   request.get(`${base}main`, (err, res, body) => {
    //     expect(err).toBeNull();
    //     // expect(res).toContain('Youtube player');
    //     done();
    //   });
    // });
  });
});
