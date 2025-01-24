const express = require('express');
const cors = require('cors');
const podcastRoutes = require('./routes/podcastRoutes');
const app = express();

/**
 * Express application setup
 * - Configures CORS
 * - Sets up JSON parsing
 * - Mounts podcast routes under /api prefix
 */

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my Express server!' });
});

// All podcast routes will be prefixed with /api/
app.use('/api', podcastRoutes);

module.exports = app;