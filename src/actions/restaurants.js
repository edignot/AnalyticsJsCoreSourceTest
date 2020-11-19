import * as api from '../api'

export const getRestaurants = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRestaurants()
    dispatch({
      type: 'FETCH_RESTAURANTS',
      payload: data,
    })
  } catch (error) {
    console.log(error)
  }
}
