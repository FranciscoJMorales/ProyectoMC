const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
  console.log("Database: Connected");
}

module.exports = { connect };