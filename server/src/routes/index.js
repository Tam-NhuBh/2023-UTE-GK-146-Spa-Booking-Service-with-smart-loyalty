const homeRouter = require('./homeRouter');
const cartRouter = require('./cartRouter');
const adminRouter = require('./adminRouter');
const productRouter = require('./productRouter');

function route(app) {
    app.use('/api/products', productRouter);
    app.use('/admin', adminRouter);
    app.use('/cart', cartRouter);
    app.use('/', homeRouter);

}
module.exports = route;