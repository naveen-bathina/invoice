// models/Invoice.js
const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    invoiceNumber: { type: String, required: true },
    workOrderNumber: { type: String, required: true },
    ratePerHour: { type: Number, required: true },
    currency: { type: String, required: true },
    totalHours: {type: Number, required: true},
    totalAmount: {type: Number, required: true},
    subContractor: {
        name: { type: String, required: true },
        address: {
            line1: { type: String, required: true },
            line2: { type: String },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            pincode: { type: String, required: true }
        }
    },
    billTo: {
        name: { type: String, required: true },
        address: {
            line1: { type: String, required: true },
            line2: { type: String },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            pincode: { type: String, required: true }
        }
    },
    timesheets: [
        {
            weekNumber: { type: String, required: true },
            weekDuration: { type: String, required: true },
            workHours: [
                {
                    date: { type: Date, required: true },
                    hours: { type: Number, required: true },
                    totalAmount: { type: Number, required: true },
                    comments: { type: String }
                }
            ]
        }
    ]
},{ versionKey: false });

module.exports = mongoose.model('Invoice', InvoiceSchema);
