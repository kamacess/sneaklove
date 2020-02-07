const db = require("./dbHelper");

exports.view = async (req, res, next) => {
  try {
    const sneaker = await db.sneakerView(req.params.id);
    console.log(sneaker);
    res.json(sneaker);
  } catch (error) {
    res.json(error);
  }
};

exports.viewAll = async (req, res, next) => {
  try {
    const allSneakers = await db.sneakerViewAll();
    console.log(allSneakers);
    res.json(allSneakers);
  } catch (error) {
    res.json(error);
  }
};

exports.findAllByTag = async (req, res, next) => {
  try {
    const sneakers = await db.sneakerFindAllByTag(req.params.id);
    console.log(sneakers);
    res.json(sneakers);
  } catch (error) {
    res.json(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { name, ref, sizes, description, price, category, tags } = req.body;
    if (!name || !ref || !sizes || !description || !price || !req.file.url || !category || !tags) throw new Error("A field is missing.");
    const checkRef = await db.sneakerFindByRef(ref);
    if (checkRef) throw new Error("There is already a sneaker with this ref.");
    const createdSneaker = await db.sneakerCreate({ name, ref, sizes, description, image: req.file.url, price, category, tags });
    console.log(createdSneaker);
    res.render("prod_management/products_add");
  } catch (error) {
    next(error);
  }
};

exports.edit = async (req, res, next) => {
  try {
    const id = req.params.id;
    const sneaker = req.body;
    const editedSneaker = await db.sneakerEdit(id, { ...sneaker });
    console.log(editedSneaker);
    res.json(editedSneaker);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteSneaker = async (req, res, next) => {
  try {
    const deletedSneaker = await db.sneakerDelete(req.params.id);
    console.log(deletedSneaker);
    res.json(deletedSneaker);
  } catch (error) {
    console.log(error);
  }
};
