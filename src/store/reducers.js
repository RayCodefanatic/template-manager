// src/store/reducers.js
import { combineReducers } from 'redux';
import { FETCH_TEMPLATES_SUCCESS, FETCH_TEMPLATES_FAILURE } from './actions';

const templatesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEMPLATES_SUCCESS:
      return action.payload;
    case FETCH_TEMPLATES_FAILURE:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  templates: templatesReducer,
});

export default rootReducer;
