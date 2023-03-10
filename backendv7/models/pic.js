const mongoose = require("mongoose");
const { Schema } = mongoose;

const PicSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  path: {
    type: String,
    required: true,
  },
});

const profilepic = mongoose.model("profilepic", PicSchema);

module.exports = profilepic;
