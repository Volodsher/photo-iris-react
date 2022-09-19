import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction } from '../../features/postSlice';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import Moment from 'react-moment';

const Post = (props) => {
  const { post, loading } = useSelector((store) => store.post);
  const { id } = useParams();
  const payload = { id };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction(payload));
  }, [getPostAction]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/photo-iris-react/blog" className="btn">
        Back to Posts
      </Link>
      <h1>{post.title}</h1>
      <h4>
        <Moment format="YYYY/MM/DD">{post.date}</Moment>
      </h4>
      <p>{post.text}</p>
      {/* <PostItem post={post} showActions={false} /> */}
    </Fragment>
  );
};

Post.propTypes = {};

export default Post;
