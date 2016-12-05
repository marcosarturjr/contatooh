var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	var Usuario = mongoose.model('Usuario');	
	// código anterior omitido
	passport.use(new GitHubStrategy({
		clientID: '57768866c2b8479faf85',
		clientSecret: '07898867e7f4eca353e6e330b77e6b8db6086410',
		callbackURL: 'http://localhost:3000/auth/github/callback'
		}, function(accessToken, refreshToken, profile, done) {
			Usuario.findOrCreate(
			{ "login" : profile.username},
			{ "nome" : profile.username},
			function(erro, usuario) {
				if(erro){
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
		);	
}));


passport.serializeUser(function(usuario, done) {
done(null, usuario._id);
});

passport.deserializeUser(function(id, done) {
Usuario.findById(id).exec()
.then(function(usuario) {
done(null, usuario);
});
});

};
