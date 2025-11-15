const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple homepage route
app.get('/', (req, res) => {
  res.send('Hello from Node.js on CloudByGalaxy! 🚀');
});

// Health check route (optional, but recommended)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
