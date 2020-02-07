require("dotenv").config();
require("./config/mongodb"); // database initial setup
require("./helpers/helpers-hbs"); // utils for hbs templates

// base dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cookieParser = require("cookie-parser");
const path = require("path");


// initial config
// app.set("view engine", "hbs");
// app.set("views", __dirname + "/view");
// app.use(express.static("public"));
// hbs.registerPartials(__dirname + "/views/partials");
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cookieParser());

//config BW
app.use(express.urlencoded({ extended: true })); // parse posted data
app.use(express.json()); // ajax ready

app.use(express.static(path.join(__dirname, "public"))); // static files (public for browsers)
app.set("views", path.join(__dirname, "views")); // wahre are the pages ?
app.set("view engine", "hbs"); // which template engine
hbs.registerPartials(path.join(__dirname, "views/partials")); // where are the tiny chunks of views ?

//session login middleware
// app.use(require("./middlewares/exposeLoginStatus"));

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    }),
    saveUninitialized: true,
    resave: true
  })
);

app.locals.site_url = process.env.SITE_URL;
// used in front end to perform ajax request (var instead of hardcoded)

// CUSTOM MIDDLEWARE
// check if user is logged in...
// usecases : conditional display in hbs templates
// WARNING: this function must be declared AFTER the session setup
// WARNING: this function must be declared BEFORE app.use(router(s))
function checkloginStatus(req, res, next) {
  res.locals.user = req.session.currentUser ? req.session.currentUser : null;
  // access this value @ {{user}} or {{user.prop}} in .hbs
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  // access this value @ {{isLoggedIn}} in .hbs
  // if (req.session.currentUser) console.log(`Connected as ${res.locals.user.firstname} ${res.locals.user.lastname}`);

  next(); // continue to the requested route
}

function eraseSessionMessage() {
  var count = 0; // initialize counter in parent scope and use it in inner function
  return function(req, res, next) {
    if (req.session.msg) {
      // only increment if session contains msg
      if (count) {
        // if count greater than 0
        count = 0; // reset counter
        req.session.msg = null; // reset message
      }
      ++count; // increment counter
    }
    next(); // continue to the requested route
  };
}

app.use(checkloginStatus);
app.use(eraseSessionMessage());

// Routing
app.use("/", require("./routes/index"));

// Authentication
app.use(require("./routes/auth"));

// Protected routes
app.use(require("./routes/admin"));

app.use("/products", require("./routes/products"));

// For testing API
app.use("/sneakers", require("./routes/sneakers"));
app.use("/users", require("./routes/users"));
app.use("/tags", require("./routes/tags"));

// Export app
module.exports = app;
