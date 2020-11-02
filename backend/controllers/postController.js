const postModel = require('../models/postModel');

exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: 'post1' }, { title: 'post2' }],
  });
};

exports.createPost = (req, res) => {
  const post = new postModel(req.body);
  post.save().then((result) => {
    res.status(200).json({ post: result });
  });
};
