import express from "express";
import todoListController from '../controllers/todoListController.js'

const router = express.Router();

// todo list
router.route('/')
.get(todoListController.fetchTodo)
.post(todoListController.addTodoItem)
.put(todoListController.updateTodoItem);

// update/delete an item
router.route('/item/:id')
.get(todoListController.fetchTodoItem)
.delete(todoListController.deleteTodoItem);


export default router;


