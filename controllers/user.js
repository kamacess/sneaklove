const db = require("./dbHelper");
const bcrypt = require("bcryptjs");

async function userView(req, res, next) {
  try {
    const user = await db.userView(req.params.id);
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

async function userViewAll(req, res, next) {
  try {
    const allUsers = await db.userViewAll();
    console.log(allUsers);
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
}

function setSession(user) {
  return { id: user._id, firstname: user.firstname, lastname: user.lastname };
}

async function userCreate(req, res, next) {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) throw new Error("All fields are required.");
    const user = await db.userFindByEmail(email);
    if (user) throw new Error("There is already a user with this email.");
    const hashedPassword = bcrypt.hashSync(password, 10);
    const createdUser = await db.userCreate({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });
    req.session.currentUser = setSession(createdUser);
    res.redirect("/prod-manage");
  } catch (error) {
    next(error);
  }
}

async function userEdit(req, res, next) {
  try {
    const id = req.params.id;
    const { firstname, lastname, email, password } = req.body;
    const editedUser = await db.userEdit(id, {
      firstname,
      lastname,
      email,
      password
    });
    console.log(editedUser);
    res.json(editedUser);
  } catch (error) {
    console.log(error);
  }
}

async function userDelete(req, res, next) {
  try {
    const deletedUser = await db.userDelete(req.params.id);
    console.log(deletedUser);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  view: userView,
  viewAll: userViewAll,
  create: userCreate,
  edit: userEdit,
  delete: userDelete,
  setSession: setSession
};
