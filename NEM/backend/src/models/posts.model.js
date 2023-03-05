const mongoose = require("mongoose");

// DeprecationWarning
mongoose.set("strictQuery", false);

//step1 = creating the schema
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    device: { type: String, required: true },
    loginId: { type: String },
    loginEmail: { type: String },
  },

  { timestamps: true, versionKey: false }
);
// ==> Where device is the one from which the post has been made, it can be "PC", "TABLET", "MOBILE"

//step2 = creating model
module.exports = mongoose.model("PostModel", postSchema);
