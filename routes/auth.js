const express = require("express");
const router = new express.Router();
const db = require("./../controllers/dbHelper");
const bcrypt = require("bcryptjs");
const userController = require("./../controllers/user");

// Signup
router.get("/signup", (req, res) => {
  res.render("prod_management/signup");
});

router.post("/signup", userController.create);

// Signin
router.get("/signin", (req, res) => {
  res.render("prod_management/signin");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.redirect("/signin");
  const user = await db.userFindByEmail(email);
  if (!user) return res.redirect("/signin");
  if (!bcrypt.compareSync(password, user.password)) return res.redirect("/signin");
  // User credentials match: set user session and redirect to admin page
  req.session.currentUser = userController.setSession(user);
  req.session.msg = `Welcome ${user.firstname}`;
  res.redirect("/prod-manage");
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.locals.user = null;
    res.locals.isLoggedIn = null;
  });
  res.redirect("/");
});

module.exports = router;
