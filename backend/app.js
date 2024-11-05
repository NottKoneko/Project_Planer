const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const teamRoutes = require('./routes/teamRoutes');
const projectRoutes = require('./routes/projectRoutes');
const permissionRoutes = require('./routes/permissionRoutes');

const app = express();
app.use(express.json());

// Use routes
app.use('/teams', teamRoutes);
app.use('/projects', projectRoutes);
app.use('/permissions', permissionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
