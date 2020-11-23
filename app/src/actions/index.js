import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA })
  axios.get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/.')
    .then(res => {
      console.log(res)
      dispatch({ type: UPDATE_DATA, payload: res.data.results })
    })
    .catch(err => console.log(err))
}