import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router.js";
// Set up the Express app
const app = express();
const PORT = process.env.PORT || 5000;

/**
 * Configure global middleware
 */
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// Define routes
app.use(router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});