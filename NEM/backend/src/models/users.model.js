const mongoose = require("mongoose");

// DeprecationWarning
mongoose.set("strictQuery", false);

//step1 = creating the schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
  },

  { timestamps: true, versionKey: false }
);

//step2 = creating model
module.exports = mongoose.model("UserModel", userSchema);
