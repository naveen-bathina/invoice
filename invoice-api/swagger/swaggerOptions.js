// swaggerOptions.js
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0', // Specify the OpenAPI version
        info: {
            title: 'Invoice API', // Your API title
            version: '1.0.0', // Your API version
            description: 'API documentation for my Invoice project',
        },
    },
    apis: ['./routes/*.js'], // Path to your API docs (adjust as needed)
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
