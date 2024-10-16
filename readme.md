# Invoice Management API

This project is a RESTful API built with Node.js and Express, designed to manage invoices, including CRUD operations for invoice records. It utilizes MongoDB for data storage, enabling efficient handling of complex invoice structures and associated timesheet information.

## Features

- Create, read, update, and delete invoices
- Manage subcontractor and billing information
- Handle timesheets with detailed work hours and comments
- Swagger documentation for easy API exploration

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Swagger (for API documentation)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/naveen-bathina/invoice-api.git
   cd invoice-api
   ```

2. **Switch directory:**
   ```bash
    cd invoice-api
3. **Install dependencies:**
   ```bash
    npm install
4. **Create a .env file in the root directory and add your MongoDB connection details:**
   ```bash
    DB_USERNAME=<place db user name>
    DB_PASSWORD=<place db password>
    DB_NAME=invoice_db
5. **Start the application**
   ```bash
    npm start
The server will run on http://localhost:5000

## API Documentation
API documentation is available through Swagger. Once the server is running, you can access it at
   ```bash
    http://localhost:5000/api-docs
```
## Endpoints
**Invoices**
- GET /api/invoices: Retrieve all invoices
- GET /api/invoices/
: Retrieve a specific invoice by ID
- POST /api/invoices: Create a new invoice
- PUT /api/invoices/
: Update an existing invoice by ID
- DELETE /api/invoices/
: Delete an invoice by ID

**Contacts**
- GET /api/contacts: Retrieve all contacts
- GET /api/contacts/
: Retrieve a specific contacts by ID
- POST /api/contactss: Create a new contact
- PUT /api/contacts/
: Update an existing contact by ID
- DELETE /api/contacts/
: Delete an contact by ID

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for any changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.