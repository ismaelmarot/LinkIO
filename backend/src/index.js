const express = require('express');
const cors = require('cors');
const path = require('path');
const linksRouter = require('./routes/links');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api/links', linksRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Linkio API running on http://localhost:${PORT}`);
});