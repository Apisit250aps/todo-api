import { Router } from "express";
import userController from "../controllers/user.controller.js";


const auth = Router()

auth.post('/register', userController.usersRegister)


export default auth