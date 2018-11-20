import sequelize from "sequelize";
import { Strategy as LocalStrategy } from "passport-local";

const db = require("../models")

const LocalSignup = new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
}, (email, password, done) => {
    console.log(res)
    const userData = {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username.trim(),
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim()
    };
    console.log("blah - local-signup");
    console.log(userData)
    db.User.findOrCreate({
        where: {
        email: email
        },
        defaults: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        Password: userData.password
        }
    })
    .then(function (result) {
        console.log("user created")
        let newUser = result[0].dataValues
        return res.json(newUser)
    })
        
        // console.log(newUser)
    // }).catch(function (err) {
    //     console.log(err);
        // res.send(err);
    // });
});

export default LocalSignup;