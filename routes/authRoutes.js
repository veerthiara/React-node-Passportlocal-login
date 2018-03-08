const passport = require('passport');

module.exports = app => {

  app.post('/api/login', passport.authenticate('local-login', {
            //successRedirect : '/profile', // redirect to the secure profile section
            //failureRedirect : '/Login', // redirect back to the signup page if there is an error
            //failureFlash : true // allow flash messages
		}),(req, res)=> {
            console.log("hello");
            res.send(req.user);
            //if (req.body.remember) {
              //req.session.cookie.maxAge = 1000 * 60 * 3;
            //} else {
              //req.session.cookie.expires = false;
          //  }
    });

    app.post('/api/signup', passport.authenticate('local-signup', {
          //successRedirect : '/profile', // redirect to the secure profile section
          //failureRedirect : '/Login', // redirect back to the signup page if there is an error
          failureFlash : true // allow flash messages
        }),(req, res) => {
            console.log("singuppart");
            res.send(req.user);
            //if (req.body.remember) {
              //req.session.cookie.maxAge = 1000 * 60 * 3;
            //} else {
              //req.session.cookie.expires = false;
            //}
        });

    app.get('/api/logout',(req, res)=>{
    		req.logout();
    		res.redirect('/');
    	});

    app.get('/api/current_user', (req, res)=>{
    		res.send(req.user);
    	});
};
