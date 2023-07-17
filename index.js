const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://todo-app.onrender.com"],
  })
);
app.use("/task", taskRoutes);
app.use("/auth", userRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`DB Connected and Server Running on ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("Problem in connecting Db");
  });
