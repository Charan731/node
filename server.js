const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS to allow frontend requests
app.use(cors());

// API route to send data to frontend
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Node.js Backend!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
