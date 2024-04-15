import passwordHelper from "../helpers/password.helper.js";
import usersModel from "../models/users.model.js"

export default {
  async login(req, res) {
    
    try {
      
      const { username, password } = req.body
      const user = await usersModel.findOne({ username })

      if (!user) {
        return res.status(404).json({ message: "User not found" })
      }

      const isValidPassword = passwordHelper.Hashed(password, user.password)

      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid password" })
      }

      // Set user session
      req.session.user = user

      res.status(200).json({ message: "Login successful" })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  async logout(req, res) {
    // Check if the user is logged in
    if (req.session.user) {
      // Clear session and destroy cookie
      req.session = null
      res.clearCookie("session") // Replace 'session' with your cookie name
      res.status(200).json({ message: "Logout successful" })
    } else {
      // If the user is not logged in, return an error
      res.status(401).json({ error: "User is not logged in" })
    }
  },

  async authentication(req, res) {
    if (req.session.user) {
      res.status(200).json({ message: "Authenticated", user: req.session.user })
    } else {
      res.status(401).json({ message: "Unauthenticated" })
    }
  }
}
