export const restaurants = (restaurants = [], action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return action.restaurantsSortedByName
    default:
      return restaurants
  }
}
