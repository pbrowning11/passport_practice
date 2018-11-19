import sequelize from "sequelize";
import { Strategy as LocalStrategy } from "passport-local";

const db = require("../models")

const LocalSignup = new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim(),
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim()
    };
    let newUser = req.body.data;
    console.log("blah");
    db.User.findOrCreate({
        where: {
        email: newUser.email
        },
        defaults: {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        Password: newUser.password
        }
    }).then(function (newUser) {
        res.json(newUser)
    }).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});

export default LocalSignup;