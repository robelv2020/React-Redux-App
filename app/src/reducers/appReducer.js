import { GET_DATA, UPDATE_DATA } from '../actions/index'

export const initalState = {
  recipes: [],
  isGettingData: false
}

export const appReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isGettingData: true
      }
    case UPDATE_DATA:
      console.log(state.recipes)
      return {
        ...state,
        recipes: action.payload,
        isGettingData: false
      }
    default:
      return state
  }
}