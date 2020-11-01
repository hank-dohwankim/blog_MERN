import express from 'express';
const router = express.Router();
import {
  getPosts,
  getPostById,
  deletePost,
  createPost,
  updatePost,
  createPostComment,
  deletePostComment,
  likePost,
  unlikePost,
} from '../controllers/postController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getPosts).post(protect, createPost);
router.route('/:id/comments').post(protect, createPostComment);
router.route('/comment/:id/:comment_id').delete(protect, deletePostComment);
router.route('/unlike/:id').put(unlikePost);
router.route('/like/:id').put(likePost);
router
  .route('/:id')
  .get(getPostById)
  .delete(protect, deletePost)
  .put(protect, updatePost);

export default router;
