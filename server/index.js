import express from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
const mongoURI = "mongodb://0.0.0.0:27017/VenuTechFinance";
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Failed to connected to MongoDB"));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => console.log("Server running on port 3001"));
