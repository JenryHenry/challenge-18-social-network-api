const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addNewFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .post(addNewFriend)
  .delete(removeFriend);

module.exports = router;
