import userModel from "../models/users.model.js"

export default {
  async usersRegister(req, res) {
    try {
      const { username, password, email } = req.body

      const existingUser = await userModel.findOne({
        $or: [{ username }, { email }]
      })

      if (existingUser) {
        const errors = {}
        if (existingUser.username === username)
          errors.username = "Username already exists"
        if (existingUser.email === email) errors.email = "Email already exists"
        return res.status(400).json({ errors })
      }

      await userModel.create_user({ username, password, email })

      res.status(201).json({ message: "Registration successful" })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
