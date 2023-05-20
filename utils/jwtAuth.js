import jwt from "jsonwebtoken"

export function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Missing or invalid authorization header" })
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, "legendsneverdie")

    // Add the decoded user information to the request object
    req.user = decoded

    next()
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" })
  }
}
