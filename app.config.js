export default {
  port: 3000,
  cookieSession: {
    name: "session",
    keys: ["a97DZWmYwIfLOVVSboPRnjVXHEzVRbSh"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  },
  mongo: "mongodb://localhost:27017/todo",
  
}
