var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  { name: { type: String, require: true, maxLength: 100, minlength: 4 } }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);
