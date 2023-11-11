import express, { Application, NextFunction, Request, Response } from "express";
import { router as categoryRoutes } from "./routes/category.routes";
import { router as productRoutes } from "./routes/product.routes";
import { logs } from "./middlewares/logs";
import cors from "cors";
import { CLIENT_URL } from "./config";
import { generateError } from "./utils/errors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app: Application = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 100,
  message: generateError(
    "Too many requests from this IP, please try again later."
  ),
});

// Middleware
app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use("*", limiter);
app.use(logs);
app.use(helmet());
app.use(express.json());
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Server is running..." });
});

export default app;
