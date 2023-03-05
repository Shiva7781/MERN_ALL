const router = require("express").Router();
const Flight = require("../models/flight.model");

router.post("/", async (req, res) => {
  const {
    airline,
    flightNo,
    departure,
    arrival,
    departureTime,
    arrivalTime,
    seats,
    price,
  } = req.body;
  try {
    if (
      !airline ||
      !flightNo ||
      !departure ||
      !arrival ||
      !departureTime ||
      !arrivalTime ||
      !seats ||
      !price
    ) {
      return res.status(400).json("All fields requried");
    }

    const newFlight = new Flight(req.body);

    const savedFlight = await newFlight.save();

    res.status(201).json(savedFlight);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const flightData = await Flight.find();

    res.status(200).json(flightData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id", async (req, res) => {
  // console.log(req.params)
  try {
    const singleFlightData = await Flight.findById(req.params.id);

    res.status(200).json(singleFlightData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await Flight.findByIdAndUpdate(req.params.id, req.body);

    res.status(204);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);

    res.status(202).json("deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
