
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerOptions'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();

// MongoDB Connection
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dfhrs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`, {
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware to parse JSON
app.use(express.json());

// Serve Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Import routes
const invoiceRoutes = require('./routes/invoices');

// Import Contact routes
const contactRoutes = require('./routes/contacts');

// Use routes
app.use('/api/invoices', invoiceRoutes);
app.use('/api/contacts', contactRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
