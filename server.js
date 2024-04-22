import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.resolve(__dirname)));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import signupRoutes from "./routes/signupRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
app.use(signupRoutes);
app.use(contactRoutes);

const uri = "mongodb+srv://admin:admin@cluster0.tsgqtix.mongodb.net/tester123";
mongoose
    .connect(uri)
    .then(() => {
        app.listen(3000, () => console.log("Server is running on port 3000"));
    })
    .catch((err) => console.error(err));
