'use strict'

var Auth = require('./auth');
var Info = require('./info');

module.exports = function(app) {
    // SITE ROOT
    app.get('/', (req, res) => { // replace this route with a landing or home page, or break this out into another controller if needed!
        res.render('home');
    });
    app.get('/login', Auth.render); // route for the login page
    app.get('/logout', Auth.logout); // route for logging out

    app.post('/login', Auth.login); // form request emdpoint for loggin in
    app.post('/register', Auth.register); // form request endpoint for user registration

    // DAHSBOARD
    app.all('/dashboard*', Auth.session); // protect all dashboard routes from unauthorized users
    app.get('/dashboard', (req, res) => { // renders the dashboard
        res.render('dashboard', req.session)
    });

    //STACKSHEET
    app.get('/stacksheet', (req, res) => {
      res.render('stacksheet', req.session)
    });
    // INFO
    app.post('/projects/routes/info', Info.save);
    // GET
    app.get('/projects/elements', Info.get);
}
