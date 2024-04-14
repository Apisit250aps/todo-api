import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)

export default {
  Hashed(password) {
    return bcrypt.hashSync(password, salt)
  },
  Verify(enter, store) {
    return bcrypt.compareSync(enter, store)
  }
}
