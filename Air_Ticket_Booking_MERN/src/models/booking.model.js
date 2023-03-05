const mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },

    // alternate way
    // user: { type: "ObjectId", ref: "User" },
    // flight: { type: "ObjectId", ref: "Flight" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
