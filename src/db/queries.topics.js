const Topic = require('./models').Topic;

module.exports = {
  addTopic(newTopic, callback) {
    console.log(newTopic);
    return Topic.create({
      description: newTopic.description
    })
      .then((topic) => {
        callback(null, topic);
      })
      .catch((err) => {
        callback(err);
      });
  }
};
