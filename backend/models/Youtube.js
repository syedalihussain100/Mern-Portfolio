const mongoose = require("mongoose");
const { Schema } = mongoose;

const YoutubeSchema = new Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    public_id: String,
    url: String,
  },
});

const Youtube = mongoose.model("Youtube", YoutubeSchema);

module.exports = { Youtube };
