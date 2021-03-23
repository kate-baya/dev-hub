import {SET_FAVORITES} from '../actions'

const initialState = []

const favorites = (state = initialState, action) => {
  switch(action.type){
    case SET_FAVORITES:
      return action.favorites

    default:
      return state  
  }
}

export default favorites