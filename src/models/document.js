const mongoose = require("mongoose");

const DocumentSchema = mongoose.Schema(
    {
        //Add attributes
    },
    {
        strict: false,
        timestamps: true
    }
);

module.exports = mongoose.model("document", DocumentSchema);
