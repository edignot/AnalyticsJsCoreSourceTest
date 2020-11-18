export default (restaurants = [], action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return restaurants
    default:
      return restaurants
  }
}
