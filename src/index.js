const express = require("express");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/userRoutes");

dbConnect();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
//start the server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running ant port ${PORT}`);
});
