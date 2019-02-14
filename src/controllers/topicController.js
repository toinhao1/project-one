const topicQueries = require('../db/queries.topics.js');

module.exports = {
  topicsForm(req, res, next) {
    res.render('topics/selection');
  },
  create(req, res, next) {
    let newTopic = {
      description: req.body.description.join(),
      userId: req.user.id
    };
    topicQueries.addTopic(newTopic, (err, topic) => {
      if (err) {
        console.log(err);
        res.redirect(500, 'topics/selection');
      } else {
        req.flash('notice', "You've successfully selected your topics!");
        res.redirect('/content/main');
      }
    });
  }
};
