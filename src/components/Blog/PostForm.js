import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.scss';
import { useDispatch } from 'react-redux';
import { addPostAction } from '../../features/postSlice';
// import { connect } from 'react-redux';
// import { addPost } from '../../actions/posts_action';

// const PostForm = ({ addPost }) => {
const PostForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const postData = { title, text };
  const dispatch = useDispatch();

  return (
    <div className={styles.postForm}>
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPostAction({ title, text }));
          setTitle('');
          setText('');
        }}
      >
        <input
          name="title"
          cols="30"
          rows="5"
          type="text"
          placeholder="Create a post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

// PostForm.propTypes = {
//   addPost: PropTypes.func.isRequired,
// };

export default PostForm;
// export default connect(null, { addPost })(PostForm);
