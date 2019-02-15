const Topic = require('./models').Topic;

module.exports = {
  addTopic(newTopic, callback) {
    return Topic.create({
      description: newTopic.description,
      userId: newTopic.userId
    })
      .then((topic) => {
        callback(null, topic);
      })
      .catch((err) => {
        callback(err);
      });
  },

  getTopicForUser(userId) {
    return Topic.findOne({ where: { userId } });
  }
};
