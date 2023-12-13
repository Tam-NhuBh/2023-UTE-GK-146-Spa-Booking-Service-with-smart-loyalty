const homeRouter = require('./homeRouter');
const cartRouter = require('./cartRouter');
const adminRouter = require('./adminRouter');
const productRouter = require('./productRouter');
const bookingRouter = require('./bookingRouter')

function route(app) {
    app.use('/api', productRouter);
    app.use('/booking', bookingRouter);
    app.use('/admin', adminRouter);
    app.use('/cart', cartRouter);
    app.use('/', homeRouter);

}
module.exports = route;