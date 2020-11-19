export default (filteredRestaurants = [], action) => {
  switch (action.type) {
    case 'FILTER_RESTAURANTS':
      return action.payload
    default:
      return filteredRestaurants
  }
}
