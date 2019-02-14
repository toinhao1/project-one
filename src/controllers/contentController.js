const { getHeadlinesForTerm } = require('../services/NewsApi');
const Topic = require('../db/queries.topics');

module.exports = {
  async showNews(req, res, next) {
    const topic = await Topic.getTopicForUser(req.user.id)
    getHeadlinesForTerm(topic.description.split(',')).then((articles) => {
      res.render('content/main', { articles });
    }).catch(err => {
      console.log('err', err)

      res.render('content/newsError');
    })
  }
};
