import sequelize from "sequelize";
import { Strategy as LocalStrategy } from "passport-local";

const db = require("../models")

const LocalSignup = new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, email, password, res) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        username: req.body.username.trim(),
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim()
    };
    console.log("blah - local-signup");
    console.log(userData)
    db.User.findOrCreate({
        where: {
        email: userData.email
        },
        defaults: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        Password: userData.password
        }
    })
    // .then(function (newUser) {
    //     res.json(newUser)
    // }).catch(function (err) {
    //     console.log(err);
    //     res.json(err);
    // });
});

export default LocalSignup;