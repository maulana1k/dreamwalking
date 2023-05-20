import { Sequelize } from "sequelize"

const sequelize = new Sequelize("railway", "postgres", "c6YXolW0hOnJegHoam2V", {
  host: "containers-us-west-149.railway.app",
  dialect: "postgres",
  port: 6120,
})
export default sequelize
