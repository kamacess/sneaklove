const db = require("./dbHelper");

exports.view = async (req, res, next) => {
  try {
    const user = await db.userView(req.params.id);
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.viewAll = async (req, res, next) => {
  try {
    const allUsers = await db.userViewAll();
    console.log(allUsers);
    res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) throw new Error("All fields are required.");
    const user = await db.userView(email);
    if (user) throw new Error("There is already a user with this email.");

    const createdUser = await db.userCreate({
      firstname,
      lastname,
      email,
      password
    });
    console.log(createdUser);
    res.json(createdUser);
  } catch (error) {
    res.json(error);
  }
};

exports.edit = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { firstname, lastname, email, password } = req.body;
    const editedUser = await db.userEdit({
      id,
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
};

exports.delete = async (req, res, next) => {
  try {
    const deletedUser = await db.userDelete(req.params.id);
    console.log(deletedUser);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};
