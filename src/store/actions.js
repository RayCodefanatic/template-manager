// src/store/actions.js
import axios from 'axios';

export const FETCH_TEMPLATES_SUCCESS = 'FETCH_TEMPLATES_SUCCESS';
export const FETCH_TEMPLATES_FAILURE = 'FETCH_TEMPLATES_FAILURE';

export const fetchTemplates = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/templates');
      const res = [
        {
          displayName: 'Template 1',
          description: 'Description for Tempalate 1 ',
          cacheKey: 'WS_CACHE_KEY_1',
        },
        {
          displayName: 'Template 2',
          description: 'Description for Tempalate 2 ',
          cacheKey: 'WS_CACHE_KEY_2',
        },
        {
          displayName: 'Template 3',
          description: 'Description for Tempalate 3',
          cacheKey: 'WS_CACHE_KEY_3',
        },
        {
          displayName: 'Template 1',
          description: 'Description for Tempalate 1 ',
          cacheKey: 'WS_CACHE_KEY_4',
        },
      ];
      dispatch({
        type: FETCH_TEMPLATES_SUCCESS,
        // payload: response.data,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: FETCH_TEMPLATES_FAILURE,
        payload: error.message,
      });
    }
  };
};
