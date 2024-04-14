import { Router } from "express";
import userController from "../controllers/user.controller.js";
import authController from "../controllers/auth.controller.js";

const auth = Router()

auth.post('/register', userController.usersRegister)


auth.get('/authenticated', authController.authentication)
auth.get('/logout', authController.logout)
auth.post('/login', authController.login)

export default auth