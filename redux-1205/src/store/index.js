import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST_DATA':
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;