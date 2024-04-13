import { mongo } from "mongoose"

const port = 3000
const secret = "a97DZWmYwIfLOVVSboPRnjVXHEzVRbSh"

const db_host = "127.0.0.1"
const db_port = "27017"
const db_name = "todo"
const db_url = `mongodb://${db_host}:${db_port}/${db_name}`

export default {
  port: port,
  secret: secret,
  db_url() {
    const db_host = "127.0.0.1"
    const db_port = "27017"
    const db_name = "todo"

    return `mongodb://${db_host}:${db_port}/${db_name}`
  }
}
