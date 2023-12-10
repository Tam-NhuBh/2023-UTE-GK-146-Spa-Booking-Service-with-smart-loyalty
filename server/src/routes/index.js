const homeRouter = require('./homeRouter');
const cartRouter = require('./cartRouter');
const adminRouter = require('./adminRouter');


function route(app) {
    app.use('/admin', adminRouter);
    app.use('/cart', cartRouter);
    app.use('/', homeRouter);

}
module.exports = route;