require("dotenv").config();
const express = require("express");
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const { errorHandlerMiddleware } = require("./middleware/errorMiddleware");
const { connectToDatabase } = require("./config/db");
const port = process.env.PORT || 3055;
app.use(express.json());

// connect to the Database
connectToDatabase();

app.use("/api/tasks", taskRoutes);

// Error handling middleware
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log("Server running on port ", port);
});
