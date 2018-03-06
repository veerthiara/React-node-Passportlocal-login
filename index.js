const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const flash    = require('connect-flash');
const keys = require('./config/keys');

require('./services/passport')(passport);

mongoose.connect(keys.mongoURI);
const app=express();
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 9000;
app.listen(PORT)
