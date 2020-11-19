export default (filteredRestaurants = [], action) => {
  switch (action.type) {
    case 'FILTER_RESTAURANTS':
      return action.filteredRestaurants
    default:
      return filteredRestaurants
  }
}
