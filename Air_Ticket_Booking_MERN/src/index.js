const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user.routes");
const flightRoute = require("./routes/flight.routes");
const bookingRoute = require("./routes/booking.routes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

app.use("/api", userRoute);
app.use("/api/flights", flightRoute);
app.use("/api", bookingRoute);

app.get("/", async (req, res) => {
  return res.send("<h1> You are on home route </h1>");
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
