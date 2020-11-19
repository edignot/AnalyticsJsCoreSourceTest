import * as api from '../api'

export const getRestaurants = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRestaurants()
    const restaurants = data.map((restaurant) => {
      const genreArray = restaurant.genre.split(',')
      const tagsArray = restaurant.tags.split(',')
      return {
        ...restaurant,
        genreArray,
        tagsArray,
      }
    })
    dispatch({
      type: 'FETCH_RESTAURANTS',
      payload: restaurants,
    })
  } catch (error) {
    console.log(error)
  }
}
