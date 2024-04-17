export default {
  port: 3000,
  cookieSession: {
    name: "session",
    keys: [
      "a97DZWmYwIfLOVVSboPRnjVXHEzVRbSh",
      "AwMDAsImV4cGlyZXMiOjE3MTM2NTYwODQ1MzJ9"
    ],
    // Cookie Options
    maxAge: 1000 * 60 * 60 * 72 //24 * 60 * 60 * 1000 // 24 hours
  },
  corsOptions: {
    origin: "http://localhost:5173",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
  },
  mongo: "mongodb://localhost:27017/todo"
}
