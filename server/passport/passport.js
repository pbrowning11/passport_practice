import passport from "passport";
import  {Strategy as LocalStrategy } from "passport-local";

const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
      console.log(email, password)
    // When a user tries to sign in this code runs
    console.log("finding users")
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
        console.log("found user")
      // If there's no user with the given email
      if (!dbUser) {
          console.log("wrong email")
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
          console.log("wrong password")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
export default passport;
