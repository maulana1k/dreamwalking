// import sequelize from '../utils/db.js';
import User from "../models/User.js"
// Import other model files

async function migrateModels() {
  try {
    // Sync all models with the database
    await User.sync({ alter: true })

    console.log("All models migrated successfully")
  } catch (error) {
    console.error("Failed to migrate models:", error)
  }
}

export default migrateModels
