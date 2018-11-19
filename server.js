const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const db = require("./server/models");
// Sets up the Express app to handle data parsing

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// require("./routes/api-routes.js")(app);
// app.get("/Login", function (req, res) {
//   res.sendFile(path.join(__dirname, "./public/login.html"));
// });

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
