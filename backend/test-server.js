const express = require('express');
const app = express();

// Add some debugging
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});

// Import and use our middleware
const authMiddleware = require('./dist/middleware/auth');
app.use(authMiddleware.authMiddleware);

app.get('/health', (_req, res) => {
  console.log('/health endpoint hit');
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 3000;
console.log('Attempting to listen on port', port);
const server = app.listen(port, () => {
  console.log('Server is listening on port', port);
}).on('error', (err) => {
  console.error('Server error:', err);
});
