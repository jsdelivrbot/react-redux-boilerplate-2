import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = {}) => state // replace with photos: PhotoReducer, or so on
});

export default rootReducer;