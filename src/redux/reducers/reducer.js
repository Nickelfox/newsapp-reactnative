import { ACTION_TYPES } from '../actions/types';

const initialState = {
  user: {},
  config: {},
  defaults: {},
  headlines:[],
  sources:[]
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.setDefaults:
      return {
        ...state,
        defaults: action.payload
      };
    case ACTION_TYPES.setUser:
      return {
        ...state,
        user: action.payload
      };
    case ACTION_TYPES.setConfiguration:
        return{
            ...state,
            config:action.payload
        }
    case ACTION_TYPES.setHeadlines:
        return{
            ...state,
            headlines:action.payload
        }
    case ACTION_TYPES.setSources:
        return{
            ...state,
            sources:action.payload
        }
    default:
      return state;
  }
}

export default appReducer;