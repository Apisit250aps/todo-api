import { Schema, model } from "mongoose"
import passwordHelper from "../helpers/password.helper.js"

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
    const { username, email, password } = data
    const passwordHashed = passwordHelper.Hashed(password)
    console.log(passwordHashed)
    return new User({
      email: email,
      username: username,
      password: passwordHashed
    }).save()
  },
  create_staff(data = {}) {
    const { email, username, password } = data
    const passwordHashed = passwordHelper.Hashed(password)

    return new User({
      email: email,
      username: username,
      password: passwordHashed,
      is_staff: true
    }).save()
  },
  create_superuser(data = {}) {
    const { email, username, password } = data
    const passwordHashed = passwordHelper.Hashed(password)

    return new User({
      email: email,
      username: username,
      password: passwordHashed,
      is_staff: true,
      is_superuser: true
    }).save()
  },
  findOne(filters = {}) {
    return User.findOne(filters)
  },
  find(filters = {}) {
    return User.find(filters)
  },
  findById(id) {
    id
    return User.findById(id)
  }
}
