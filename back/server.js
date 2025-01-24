const app = require('./app');
const PORT = process.env.PORT || 3000;

/**
 * Server entry point
 * - Starts Express server on PORT 3000 (default) or environment PORT
 */

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });