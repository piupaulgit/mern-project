const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      minlength: 3
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
