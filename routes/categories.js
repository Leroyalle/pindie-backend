const categoriesRouter = require('express').Router();

const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require('../controllers/categories');
const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
} = require('../middlewares/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.put('/categories/:id', findCategoryById, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
