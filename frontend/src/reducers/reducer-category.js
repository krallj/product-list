import { SET_CATEGORY } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload; // return our category
    default:
      return state;
  }
}