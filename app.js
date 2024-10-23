const express = require("express");
const mongoose = require("mongoose");
const transactionRoutes = require("./routes/transaction");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/expense-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

// Routes
app.use("/api", transactionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
