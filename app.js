

var index = require('./routes/index');
var users = require('./routes/users');
var error = require('./routes/error')
var gmail = require('./routes/gmail')
var login_in = require('./routes/login_in')

var app = require('./seting')
app.use('/', index);
app.use('/users', users);
app.use('/users', users);
app.use('/gmail', gmail);
app.use('/login:in', login_in);


app.use('*',error);

module.exports = app;
