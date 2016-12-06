var passport = require('passport');


module.exports = function(app) {




app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback',
passport.authenticate('github', {
successRedirect: '/'
}));


app.get('/logout', function(req, res) {
 req.logOut();
 res.redirect('/');
});


//nao faz parte do projeto////////////////////////////////////////////////////////////////////////////////////
app.get('/', function(req, res, next) {
if(req.isAuthenticated()) {
// permite que outras rotas sejam processadas
return next();
} else {
	res.render("auth");// renderiza auth.ejs
}

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////



};
