const db = require("./dbHelper");

exports.view = async (req, res, next) => {
  try {
    const tag = await db.tagView(req.params.id);
    console.log(tag);
    res.json(tag);
  } catch (error) {
    console.log(error);
  }
};

exports.viewAll = async (req, res, next) => {
  try {
    const allTags = await db.tagViewAll();
    console.log(allTags);
    res.json(allTags);
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const name = req.body.name;
    const tag = await db.tagFindByName(name);
    if (tag) throw new Error("There is already a tag with this name.");
    const createdTag = await db.tagCreate({ name });
    console.log(createdTag);
    res.json(createdTag);
  } catch (error) {
    res.json(error);
  }
};

exports.edit = async (req, res, next) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const editedTag = await db.tagEdit(id, { name });
    console.log(editedTag);
    res.json(editedTag);
  } catch (error) {
    console.log(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deletedTag = await db.tagDelete(req.params.id);
    console.log(deletedTag);
    res.json(deletedTag);
  } catch (error) {
    console.log(error);
  }
};
