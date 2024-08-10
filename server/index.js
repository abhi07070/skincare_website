import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import env from "dotenv";
import bodyParser from "body-parser";
import Appointment from "./model.js";

const app = express();
env.config();

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

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
