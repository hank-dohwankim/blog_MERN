import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Post = ({ post }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/post/${post._id}`}>
        <Card.Title as="div">
          <strong>{post.title}</strong>
        </Card.Title>
      </Link>

      <Card.Body>
        <Link to={`/post/${post._id}`}>
          <Card.Title as="div">
            <strong>{post.content}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="p">Likes : {post.rating.like}</Card.Text>

        <Card.Text as="p">Comments : {post.numComments}</Card.Text>
        <Card.Text as="p">View : {post.views}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
