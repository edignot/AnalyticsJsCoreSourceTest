const sessionTemplate = {
  filterApplied: false,
  filteredRestaurants: [],
}

export default (session = sessionTemplate, action) => {
  switch (action.type) {
    case 'FILTER_RESTAURANTS':
      return {
        filterApplied: true,
        filteredRestaurants: action.filteredRestaurants,
      }
    case 'CLEAR_FILTER':
      return {
        filterApplied: false,
        filteredRestaurants: [],
      }
    default:
      return session
  }
}
