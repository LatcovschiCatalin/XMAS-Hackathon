const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
  name: String,
  userid: String,
  username: String,
  email: String,
  status: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = ImageModel = mongoose.model("Image", imgSchema);