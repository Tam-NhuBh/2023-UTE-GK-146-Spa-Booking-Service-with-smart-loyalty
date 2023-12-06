const homeRouter = require('./homeRouter');
const adminRouter = require('./adminRouter');

function route(app) {
    app.use('/admin', adminRouter);
    app.use('/', homeRouter);
}
module.exports = route;