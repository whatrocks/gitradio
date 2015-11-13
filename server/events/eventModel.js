var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  type: String,
  time: String,
  user: String,
  user_url: String,
  user_avatar_url: String,
  repo: String
});

module.exports = mongoose.model('Event', EventSchema);
