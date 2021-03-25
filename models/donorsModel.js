const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Extending Schema which is a class and constructing the query Schema for the DB.
const donorsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    curp: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    mCertificate: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        index: true
    },
    bloodType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        index: true
    },
}, {timestamps: true});

// Defining a model based on our Schema.
const Donor = mongoose.model("donors", donorsSchema);


// Exporting to be used away.
module.exports = Donor;