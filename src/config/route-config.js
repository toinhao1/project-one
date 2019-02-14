module.exports = {
  init(app) {
    const staticRoutes = require('../routes/static');
    const userRoutes = require('../routes/users');
    const topicRoutes = require('../routes/topics');
    const contentRoutes = require('../routes/content');

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(topicRoutes);
    app.use(contentRoutes);
  }
};
