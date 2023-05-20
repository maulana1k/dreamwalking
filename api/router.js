import { Router } from "express"

import UserHandler from "../controller/user.controller.js"

const router = Router()
const authRoutes = Router()

authRoutes.post("/register", UserHandler.Register)
authRoutes.post("/login", UserHandler.Login)

router.use("/api/v1", [authRoutes])
router.get("/", (req, res) => {
  res.send("Hello, World!")
})

export default router
