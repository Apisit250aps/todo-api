import { Schema, model } from "mongoose"
import { hashPassword } from "../helpers/password.js"

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  date_joined: {
    type: Date,
    default: Date.now()
  },
  last_login: {
    type: Date
  },
  is_staff: {
    type: Boolean,
    default: false
  },
  is_superuser: {
    type: Boolean,
    default: false
  }
})

const User = model("users", UserSchema)

export default {
  create_user(data = {}) {
    const { username , email, password } = data
    
    const passwordHashed = hashPassword(password)
    return new User({
      email: email,
      username: username,
      password: passwordHashed
    }).save()
  },
  create_staff(username, password, email) {
    const passwordHashed = hashPassword(password)
    return new User({
      email: email,
      username: username,
      password: passwordHashed,
      is_staff: true
    }).save()
  },
  create_superuser(username, password, email) {
    const passwordHashed = hashPassword(password)
    return new User({
      email: email,
      username: username,
      password: passwordHashed,
      is_staff: true,
      is_superuser: true
    }).save()
  },
  findOne(filters) {
    return User.findOne(filters)
  },
  find(filters = {}) {
    return User.find(filters)
  },
  findById(id) {
    return User.findById(id)
  }
}
