import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Comment from '../components/Comment';
import posts from '../Data/post';

const PostScreen = ({ match }) => {
  const post = posts.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        {/* <Col md={6}>
          <Image src={post.image} alt={post.name} fluid />
        </Col> */}
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{post.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{post.content}</ListGroup.Item>
            <ListGroup.Item>
              <Rating value={post.rating} />
            </ListGroup.Item>
            <ListGroup.Item>
              {post.comments.map((comment) => (
                <Comment
                  key={comment._id}
                  comment={comment}
                  postId={post._id}
                />
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${post.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {post.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={post.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col> */}
      </Row>
    </>
  );
};

export default PostScreen;
