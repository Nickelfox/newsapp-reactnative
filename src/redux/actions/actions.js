import { ACTION_TYPES } from "./types";


export const setDefaultValue = param => {
  return {
    type: ACTION_TYPES.setDefaults,
    payload: param
  }
}

export const setUserValues =param=>{
    return{
        type:ACTION_TYPES.setUser,
        payload:param
    }
}

export const setAppConfiguration =param=>{
    return{
        type:ACTION_TYPES.setConfiguration,
        payload:param
    }
}

export const setHeadlines =param=>{
    return{
        type:ACTION_TYPES.setHeadlines,
        payload:param
    }
}

export const setSources =param=>{
    return{
        type:ACTION_TYPES.setSources,
        payload:param
    }
}

export const updateReduxState=param=>{
    return{
        type:ACTION_TYPES.updateUser,
        payload:param
    }
}