import express from "express";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;
import dotenv from "dotenv";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

// connects to the db
connectDB();

// middleware
const app = express();

// routes
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

// server listen
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} on port: http://localhost:${PORT}`
            .yellow.bold
    )
);
