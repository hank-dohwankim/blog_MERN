const express = require('express');
const { getPosts, createPost } = require('../controllers/postController');
const { creatPostValidator } = require('../middlewares/validator');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', creatPostValidator, createPost);

module.exports = router;
