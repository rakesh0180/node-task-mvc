// Error handling middleware
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
};

module.exports = { errorHandlerMiddleware };
