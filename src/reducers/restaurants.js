export default (restaurants = [], action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return action.payload
    default:
      return restaurants
  }
}
