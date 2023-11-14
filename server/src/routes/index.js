const homeRouter = require('./homeRouter');
const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
function route(app) {
    app.use('/register', registerRouter);
    app.use('/login', loginRouter);
    app.use('/', homeRouter);
}
module.exports = route;