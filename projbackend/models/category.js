const mongoose = require("mongoose");
const { schema } = require("./user");
const Schema = mongoose.Schema;

const CategorySchema = new schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
