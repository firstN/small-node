

var index = require('./routes/index');
var users = require('./routes/users');
var error = require('./routes/error')

var app = require('./seting')
app.use('/', index);
app.use('/users', users);

app.use('*',error);

module.exports = app;
