import express from "express"
import bodyParser from "body-parser"
import multer from "multer"
import cookieSession from "cookie-session"
import morgan from "morgan"
import { connect } from "mongoose"
import cors from 'cors'
import appConfig from "./app.config.js"
import cookieParser from "cookie-parser"
import auth from "./app/routes/auth.route.js"

const app = express()
const upload = multer()
app.set('trust proxy', 1) // trust first proxy
// request logs
app.use(
  morgan(":method :url  :status :response-time ms - :res[content-length]")
)

// body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cookie
app.use(
  cookieSession(appConfig.cookieSession)
)
app.use(cookieParser())
// cors
app.use(cors(appConfig.corsOptions))
// upload
app.use(upload.array())

// index route
app.get("/", (req, res) => {
  res.send("OK")
})
app.use("/auth", auth)

// database
await connect(appConfig.mongo)
  .then(() => {
    console.log("mongodb connected!")
  })
  .catch(err => console.log(err))

// server listening
app.listen(appConfig.port, () => {
  console.log(`Server listen on http://127.0.0.1:${appConfig.port}/`)
})
