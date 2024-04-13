import crypto from "crypto"

const salt = crypto.randomBytes(16).toString("hex")

export function hashPassword(password, salt) {
  // ใช้ฟังก์ชัน hash ที่เหมาะสม เช่น SHA-256
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex")
  return hashedPassword
}

export function verifyPassword(enteredPassword, storedHashedPassword) {
  const enteredHashedPassword = hashPassword(enteredPassword, salt)
  return enteredHashedPassword === storedHashedPassword
}
