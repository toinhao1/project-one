const topicQueries = require('../db/queries.topics.js');

module.exports = {
  topicsForm(req, res, next) {
    res.render('topics/selection');
  },
  create(req, res, next) {
    console.log('hello');
    let newTopic = {
      description: req.body.description
    };
    console.log(newTopic);
    topicQueries.addTopic(newTopic, (err, topic) => {
      if (err) {
        console.log(err);
        res.redirect(500, 'topics/selection');
      } else {
        res.redirect(303, '/');
      }
    });
  }
};
