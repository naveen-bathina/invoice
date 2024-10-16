// routes/invoices.js
const express = require('express');
const Invoice = require('../models/Invoice');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Invoices
 *   description: API for managing invoices
 */


/**
 * @swagger
 * /api/invoices:
 *   post:
 *     summary: Create a new invoice
 *     tags: [Invoices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Invoice'
 *     responses:
 *       201:
 *         description: Invoice created successfully
 */
router.post('/', async (req, res) => {
    const invoice = new Invoice(req.body);
    try {
        const savedInvoice = await invoice.save();
        res.status(201).json(savedInvoice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/invoices:
 *   get:
 *     summary: Get all invoices
 *     tags: [Invoices]
 *     responses:
 *       200:
 *         description: A list of invoices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Invoice' 
 */
router.get('/', async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/invoices/{id}:
 *   get:
 *     summary: Retrieve an invoice by ID
 *     tags: [Invoices]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the invoice to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Invoice retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Invoice'
 *       404:
 *         description: Invoice not found
 *       500:
 *         description: Server error
 */
router.get('/:id', async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
        res.json(invoice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/invoices/{id}:
 *   put:
 *     summary: Update an invoice by ID
 *     tags: [Invoices]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the invoice to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Invoice'
 *     responses:
 *       200:
 *         description: Invoice updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Invoice'
 *       404:
 *         description: Invoice not found
 *       500:
 *         description: Server error
 */
router.put('/:id', async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInvoice) return res.status(404).json({ message: 'Invoice not found' });
        res.json(updatedInvoice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /api/invoices/{id}:
 *   delete:
 *     summary: Delete an invoice by ID
 *     tags: [Invoices]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the invoice to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Invoice deleted successfully
 *       404:
 *         description: Invoice not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', async (req, res) => {
    try {
        const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!deletedInvoice) return res.status(404).json({ message: 'Invoice not found' });
        res.json({ message: 'Invoice deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Invoice:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *           format: date-time
 *           description: The date of the invoice
 *         invoiceNumber:
 *           type: string
 *           description: The unique invoice number
 *         workOrderNumber:
 *           type: string
 *           description: The work order number associated with the invoice
 *         ratePerHour:
 *           type: number
 *           format: float
 *           description: The rate charged per hour
 *         currency:
 *           type: string
 *           description: The currency of the invoice (e.g., USD, EUR)
 *         totalHours:
 *           type: number
 *           format: float
 *           description: The total hours worked
 *         totalAmount:
 *           type: number
 *           format: float
 *           description: The total amount due for the invoice
 *         subContractor:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the subcontractor
 *             address:
 *               type: object
 *               properties:
 *                 line1:
 *                   type: string
 *                   description: The first line of the subcontractor's address
 *                 line2:
 *                   type: string
 *                   description: The second line of the subcontractor's address (optional)
 *                 city:
 *                   type: string
 *                   description: The city of the subcontractor
 *                 state:
 *                   type: string
 *                   description: The state of the subcontractor
 *                 country:
 *                   type: string
 *                   description: The country of the subcontractor
 *                 pincode:
 *                   type: string
 *                   description: The postal code of the subcontractor's address
 *         billTo:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the billing recipient
 *             address:
 *               type: object
 *               properties:
 *                 line1:
 *                   type: string
 *                   description: The first line of the billing address
 *                 line2:
 *                   type: string
 *                   description: The second line of the billing address (optional)
 *                 city:
 *                   type: string
 *                   description: The city of the billing address
 *                 state:
 *                   type: string
 *                   description: The state of the billing address
 *                 country:
 *                   type: string
 *                   description: The country of the billing address
 *                 pincode:
 *                   type: string
 *                   description: The postal code of the billing address
 *         timesheets:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               weekNumber:
 *                 type: string
 *                 description: The week number of the timesheet
 *               weekDuration:
 *                 type: string
 *                 description: The duration of the week (e.g., "7 days")
 *               workHours:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     date:
 *                       type: string
 *                       format: date-time
 *                       description: The date of the work hours
 *                     hours:
 *                       type: number
 *                       format: float
 *                       description: The number of hours worked on that date
 *                     totalAmount:
 *                       type: number
 *                       format: float
 *                       description: The total amount for the hours worked on that date
 *                     comments:
 *                       type: string
 *                       description: Any comments related to the work hours
 */

module.exports = router;
