import * as api from '../api'

export const getRestaurants = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRestaurants()

    const restaurants = data.map((restaurant) => {
      const genreArray = restaurant.genre.split(',')
      const tagsArray = restaurant.tags.split(',')
      return {
        ...restaurant,
        attire: restaurant.attire.toLowerCase(),
        genreArray,
        tagsArray,
      }
    })

    const restaurantsSortedByName = restaurants.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
    )

    dispatch({
      type: 'FETCH_RESTAURANTS',
      payload: restaurantsSortedByName,
    })
  } catch (error) {
    console.log(error)
  }
}
