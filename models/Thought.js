const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

thoughtSchema.virtual('formattedDate').get(function () {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return this.createdAt.toLocaleDateString('en-US', options);
});

thoughtSchema.virtual('reactionCount').get(function () {
  return `${this.reactions.length}`;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
