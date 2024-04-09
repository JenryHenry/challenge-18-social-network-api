const { Thought } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();

      if (!thoughts) {
        res.json({ message: 'no thoughts found!' });
      }
      res.json(thoughts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that Id!' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateThought(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that Id!' });
      }

      res.json({ message: 'thought deleted!' });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        {
          _id: req.params.thoughtId,
        },
        { $push: { reactions: [req.body] } },
        { new: true }
      );
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // TODO: deleteReaction
  async deleteReaction(req, res) {
    try {
      // const thought = await Thought.findOneAndDelete(
      //   {
      //     _id: req.params.thoughtId,
      //   },
      //   {
      //     $pull: { _id: }
      //   }
      // )
      console.log('stinky');
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
