module.exports = function (initApp, router) {
    initApp.use(router, require('./TimeLineRouter'));
};