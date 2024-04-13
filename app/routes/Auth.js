import { Router } from "express";
import UserController from "../controllers/UserController.js";

const auth = Router()

auth.post('/register', UserController.usersRegister)

export default auth