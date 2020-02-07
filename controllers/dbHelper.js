const userModel = require("./../models/User");
const tagModel = require("./../models/Tag");
const sneakerModel = require("./../models/Sneaker");

// User CRUD Handlers
function userCreate(userData) {
  return userModel.create(userData);
}

function userView(id) {
  return userModel.findById(id);
}

function userFindByEmail(email) {
  return userModel.findOne({ email: email });
}

function userViewAll() {
  return userModel.find();
}

function userDelete(id) {
  return userModel.findByIdAndDelete(id);
}

function userEdit(id, userData) {
  return userModel.findByIdAndUpdate(id, userData);
}

// Tag CRUD Handlers
function tagCreate(tagData) {
  return tagModel.create(tagData);
}

function tagView(id) {
  return tagModel.findById(id);
}

function tagViewAll() {
  return tagModel.find();
}

function tagFindByName(name) {
  return tagModel.findOne({ name: name });
}

function tagDelete(id) {
  return tagModel.findByIdAndDelete(id);
}

function tagEdit(id, tagData) {
  return tagModel.findByIdAndUpdate(id, tagData);
}

// Sneaker CRUD Handlers
function sneakerCreate(sneakerData) {
  return sneakerModel.create(sneakerData);
}

function sneakerView(id) {
  return sneakerModel.findById(id);
}

function sneakerViewAll() {
  return sneakerModel.find();
}

function sneakerViewCategory(category = null) {
  if (!category) return sneakerModel.find();
  return sneakerModel.find({ category: category });
}

function sneakerFindByRef(ref) {
  return sneakerModel.findOne({ ref: ref });
}

function sneakerDelete(id) {
  return sneakerModel.findByIdAndDelete(id);
}

function sneakerEdit(id, sneakerData) {
  return sneakerModel.findByIdAndUpdate(id, sneakerData);
}

module.exports = {
  userCreate,
  userView,
  userViewAll,
  userFindByEmail,
  userDelete,
  userEdit,
  tagCreate,
  tagView,
  tagViewAll,
  tagFindByName,
  tagDelete,
  tagEdit,
  sneakerCreate,
  sneakerView,
  sneakerViewAll,
  sneakerViewCategory,
  sneakerFindByRef,
  sneakerDelete,
  sneakerEdit
};
