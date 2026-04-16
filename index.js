require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const morgan = require('morgan');
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Detailed request logging for debugging

// Debug Route Registry
console.log("Registering Blog route at /api/blogs");
app.use('/api/blogs', require('./routes/blogs'));
console.log("Registering About route at /api/about");
app.use('/api/about', require('./routes/about'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/services', require('./routes/services'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/messages', require('./routes/messages'));

app.get('/', (req, res) => {
  res.send('Nodezet API Backend is running...');
});

// JSON 404 Handler
app.use((req, res) => {
  console.log(`404: ${req.url}`);
  res.status(404).json({ success: false, error: `Route ${req.url} not found` });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
