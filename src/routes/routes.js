import express from "express";
import usersController from "../controllers/users/usersController.js";

const routes = express.Router();

routes.get('/users', usersController.findAll);
routes.post('/users', usersController.addUser);
routes.get('/users/:id', usersController.findUser);
routes.put('/users/:id', usersController.updateUser);
routes.delete('/users/:id', usersController.deleteUser);

export default routes;