const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 30,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: 30,
      unique: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      maxLength: 10,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Categoty",
      required: TextTrackCue,
    },
    stock: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
