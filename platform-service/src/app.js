import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from './app/routes/user.routes.js';
import errorHandler from './core/middleware/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use('/users', userRoutes);

app.get("/", (req, res) => {
  res.send(" Platform Service is running successfully!");
});

app.use(errorHandler);
export default app;