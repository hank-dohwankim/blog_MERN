exports.getPosts = (req, res) => {
  res.json({
    posts: [{ title: 'post1' }, { title: 'post2' }],
  });
};
