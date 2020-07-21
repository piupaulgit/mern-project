const mongoose = require("mongoose");
const { schema } = require("./user");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
