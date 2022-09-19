import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// const url = 'http://localhost:5000/';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

//Posts
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // GET_POSTS,
    getPosts: (state, { payload }) => {
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    },
    // GET_POST,
    getPost: (state, { payload }) => {
      return {
        ...state,
        post: payload,
        loading: false,
      };
    },
    // ADD_POST
    addPost: (state, { payload }) => {
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    },
    // POST_ERROR,
    // UPDATE_LIKES,
    // DELETE_POST,
    // ADD_POST
    // ADD_COMMENT,
    // REMOVE_COMMENT,
  },
});

// Get posts

export const getPostsAction = createAsyncThunk(
  'post/getposts',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/api/posts');
      console.log(res.data);
      thunkApi.dispatch(getPosts(res.data));
    } catch (error) {
      console.log('this is er');
      console.log(error.message);
    }
  }
);

export const addPostAction = createAsyncThunk(
  'post/addPost',
  async (payload, { dispatch }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/posts/', payload, config);
      dispatch(addPost(res.data));
      console.log(res);
    } catch (error) {
      console.log(payload);
      console.log(error.message);
    }
  }
);

export const getPostAction = createAsyncThunk(
  'post/getpost',
  async ({ id }, thunkApi) => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
      // console.log(res.data);
      thunkApi.dispatch(getPost(res.data));
    } catch (error) {
      console.log('this is er');
      console.log(error.message);
    }
  }
);

export const { getPosts, getPost, addPost } = postSlice.actions;

export default postSlice.reducer;
