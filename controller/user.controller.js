import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

async function Register(req, res) {
  try {
    const { fullname, email, password, role } = req.body

    // Check if the user already exists
    // const existingUser = await User.findOne({ where: { email } })
    // if (existingUser) {
    //   return res.status(409).json({ message: "User already exists" })
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
    })

    // Generate token
    const token = jwt.sign({ userId: newUser.id }, "legendsneverdie", {
      expiresIn: "24h",
    })

    res.status(201).json({ message: "User created successfully", token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

async function Login(req, res) {
  try {
    const { email, password } = req.body

    // Check if the user exists
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ message: "User not found" })
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Wrong password" })
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, "legendsneverdie", {
      expiresIn: "24h",
    })

    res.status(200).json({ message: "Logged in successfully", token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const UserHandler = { Register, Login }
export default UserHandler
