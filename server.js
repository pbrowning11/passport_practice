import express from "express";
import path from "path";
import bodyParser from "body-parser";
import passport from "./server/passport/passport";
import session from "express-session";
import morgan from "morgan"
import db from "./server/models";

const app = express();
const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/Login", function (req, res) {
//   res.sendFile(path.join(__dirname, "./public/login.html"));
// });
app.use(morgan("dev"))
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//load passport 'local' strategy
import localSignupStrategy from "./server/passport/local-signup";
import localLoginStrategy from "./server/passport/local-login";
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

//adding authentication middleware and wrap api routes in authentication
import isAuth from "./server/middleware/auth-check";
app.use("/api", isAuth);

//Adding routes
import authRoutes from "./server/routes/api/auth";
import apiRoutes from "./server/routes/api/index";
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
  //app.use(routes);
  db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}`);
    });
  });
