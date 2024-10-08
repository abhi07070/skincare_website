const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Appointment = require("./model.js");

const app = express();
env.config();

// Use CORS middleware
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/appointment", async (req, res) => {
  try {
    const { name, email, phone, concerns } = req.body;

    if (!name || !email || !phone || !concerns) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (phone.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Please enter a 10 digit phone number",
      });
    }

    const existingAppointment = await Appointment.findOne({
      email,
    });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: "Appointment already exists",
      });
    }

    const newAppointment = await Appointment.create({
      name,
      email,
      phone,
      concerns,
    });

    res.status(200).json({
      success: true,
      data: newAppointment,
      message: "Appointment scheduled successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
