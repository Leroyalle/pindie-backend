const categoriesRouter = require('express').Router();

const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require('../controllers/categories');
const checkAuth = require('../middlewares/auth');
const {
  findAllCategories,
  createCategory,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkIsCategoryExits,
  checkEmptyName,
} = require('../middlewares/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
  '/categories',
  findAllCategories,
  checkIsCategoryExits,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated,
);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.put(
  '/categories/:id',
  findCategoryById,
  updateCategory,
  checkAuth,
  sendCategoryUpdated,
);
categoriesRouter.delete('/categories/:id', checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
