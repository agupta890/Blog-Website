require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const app = express();

// DB
const connectDB = require('./utils/connection');

// Routes
const authRoutes = require('./routes/auth-routes');
const blogRoutes = require('./routes/blog-routes');
const adminRoutes = require('./routes/admin-routes');
const contactRoutes = require('./routes/contact-routes');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173",
  "https://gainknowledge-blog-frontend.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {

    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }

  },
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', blogRoutes);
app.use('/api/auth', adminRoutes);
app.use('/api', contactRoutes);

// Server Start
const port = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server running on port", port);
  });
});
