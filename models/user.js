const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
  rol: { type: String, required: true },
  first_name: { type: String, required: true, max: 50 },
  last_name: { type: String, required: true, max: 50 },
  email: { type: String, required: true, max: 50 },
  birthdate: { type: Date, required: true },
  password: { type: String, required: true, max: 50 },
  document_type: { type: String, required: true, max: 50 },
  document_number: { type: String, required: true, max: 50 },
  phone_number: { type: String, max: 20 },
  description: { type: String },
  professional_card_number: { type: String },
  health_area: { type: String },
  conversations_ids: { type: [] },
  supports_ids: { type: [] },
});

module.exports = mongoose.model("User", UserSchema);
