const router = require("express").Router();
const Booking = require("../models/booking.model");

router.post("/booking", async (req, res) => {
  const { user, flight } = req.body;

  if (!user || !flight) {
    return res.status(400).json("All fields requried");
  }

  try {
    const newBooking = new Booking(req.body);

    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("flight") // (specify only model key to get all the data)
      .populate("user", "name email"); // (model key, "parameters which you want")

    res.status(200).json(bookings);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
