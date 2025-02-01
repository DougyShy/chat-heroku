import mongoose from "mongoose"; // ES Module syntax

const workshopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  speaker: {
    type: String,
    required: true,
    unique: true,
  },
});

mongoose.model("Workshop", workshopSchema);
