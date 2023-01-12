const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-Middleware');
const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController();

router.get('/', postsController.getPosts);
router.post('/', authMiddleware, postsController.createPost);
router.get('/:postId', postsController.getPostById);
router.put('/:postId', postsController.updatePost);
router.delete('/:postId', postsController.deletePost);

module.exports = router;