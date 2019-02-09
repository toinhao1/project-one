module.exports = {
  init(app) {
    const staticRoutes = require('../routes/static');
    const userRoutes = require('../routes/users');
    const topicRoutes = require('../routes/topics');

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(topicRoutes);
  }
};
