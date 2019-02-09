const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000/topics/';
const Topic = require('../../src/db/models').Topic;
const sequelize = require('../../src/db/models/index').sequelize;

describe('routes : topics', () => {
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
  describe('GET /topics/selection', () => {
    it('should render a view with a topic selection form', (done) => {
      request.get(`${base}selection`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain('Topics');
        done();
      });
    });
  });
  describe('POST /topics', () => {
    it('should create the topics selected', (done) => {
      const options = {
        url: base,
        form: {
          description: 'technology'
        }
      };

      request.post(options, (err, res, body) => {
        Topic.findOne({ where: { description: 'technology' } })
          .then((topic) => {
            expect(topic).not.toBeNull();
            expect(topic.description).toBe('technology');
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
      });
    });
  });
});
