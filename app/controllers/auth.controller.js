import Users from "../models/Users.js"
import { hashPassword, verifyPassword } from "../helpers/password.js"

class AuthController {
  async login(username, password) {}

  authentication(username = "", password = "") {
    const storedHashedPassword = Users.findOne({ username: username }).password
    const isVerify = verifyPassword(password, storedHashedPassword)
    return isVerify
  }
}
