import express from "express"
import bodyParser from "body-parser"
import multer from "multer"
import cookieSession from "cookie-session"
import morgan from "morgan"
import { connect } from "mongoose"

import appConfig from "./app.config.js"

import auth from "./app/routes/Auth.js"

const app = express()
const upload = multer()

// request logs
app.use(
  morgan(":method :url  :status :response-time ms - :res[content-length]")
)

// body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cookie
app.use(
  cookieSession({
    // session
    // name: "session",
    keys: appConfig.secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true for https
  })
)

// upload
app.use(upload.array())

// index route
app.get("/", (req, res) => {
  res.send("OK")
})
app.use("/auth", auth)

// database
connect(appConfig.db_url())
  .then(() => {
    console.log("mongodb connected!")
  })
  .catch(err => console.log(err))

// server listening
app.listen(appConfig.port, () => {
  console.log(`Server listen on http://127.0.0.1:${appConfig.port}/`)
})
