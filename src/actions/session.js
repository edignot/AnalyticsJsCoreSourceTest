export const filterRestaurants = (filteredRestaurants) => ({
  type: 'FILTER_RESTAURANTS',
  filteredRestaurants,
})

export const clearFilter = () => ({
  type: 'CLEAR_FILTER',
})
