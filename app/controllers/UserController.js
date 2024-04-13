import Users from "../models/Users.js"

class UserController {
  async usersRegister(req, res, next) {
    const { username, password, email } = req.body

    const existingUser = await Users.findOne({
      $or: [{ username }, { email }]
    })

    if (existingUser) {
      const errors = {}
      if (existingUser.username === username)
        errors.username = "Username already exists"
      if (existingUser.email === email) errors.email = "Email already exists"
      return res.status(400).json({ errors })
    }

    await Users.create_user({ username, password, email })
    res.status(201).json({ message: "Registration successful" })
  }
}

export default new UserController()
