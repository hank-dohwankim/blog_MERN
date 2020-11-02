import React from 'react';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';

const Comment = ({
  postId,
  comment: { _id, content, date, avatar, user },
  auth,
  deleteComment,
}) => (
  <div className="post bg-white p-1 my-1">
    {/* <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div> */}
    <div>
      <p className="my-1">{content}</p>
      <p className="my-1">{date}</p>
      <p className="post-date">
        {/* Posted on <Moment format="YYYY/MM/DD">{date}</Moment> */}
      </p>
      {/* {!auth.loading && user === auth.user._id && ( */}
      <button
        onClick={() => deleteComment(postId, _id)}
        type="button"
        className="btn btn-danger"
      >
        <i className="fas fa-times" />
      </button>
      {/* )} */}
    </div>
  </div>
);

export default Comment;
