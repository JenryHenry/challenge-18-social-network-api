const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

reactionSchema.virtual('formattedDate').get(function () {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return this.createdAt.toLocaleDateString('en-US', options);
});
module.exports = reactionSchema;
