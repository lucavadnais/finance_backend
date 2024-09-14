const express = require('express');
const userRoutes = require('./routes/_user');
const loginRoutes = require('./routes/_auth');
const accountRoutes = require('./routes/_account');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const corsOptions = {
  origin: [
    "http://localhost:4200",
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));

// Routes
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/account', accountRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

