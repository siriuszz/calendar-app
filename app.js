const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'kishanpatel.auth0.com',
    clientID: 'wFzAgdYyUP8ndKct9jPdvnduGz0i6YSf',
    clientSecret: '7GwFfX03mfkUvD2eVMUMfXyEd5qkgmxgsQuoz9Kv6Kk8xmd3fG3ABPhbQgUxmVy8',
    callbackURL: 'http://localhost:3000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());
