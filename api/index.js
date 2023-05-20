import express from "express"
import cors from "cors"
import morgan from "morgan"
import path from "path"

// import mongoose from "mongoose"
import router from "./router.js"
import sequelize from "../utils/db.js"
// Set up the Express app
const app = express()
const PORT = process.env.PORT || 5000
const BUILD_PATH = path.join(path.resolve(), "dist")

/**
 * Configure global middleware
 */
app.use(cors()) // cors manager
app.use(express.json()) // json body-parser
app.use(morgan("dev")) // api logger
app.use(express.static(BUILD_PATH)) // load static assets

/**
 * Connect to database
 */
// mongoose
//   .connect(
//     "mongodb://mongo:s22AfdQZGt25oSFl711q@containers-us-west-198.railway.app:7662",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("Connected to the database"))
//   .catch((error) => console.error("Failed to connect to the database:", error))
sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Cannot connect to db ", err))
/**
 * Serve frontend build file
 */
app.get("*", (req, res) => res.sendFile(path.join(BUILD_PATH, "index.html")))

/**
 * Define api routes
 */
app.use(router)

/**
 * Start the server
 */
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
