import '@testing-library/jest-dom'
import { restaurants } from './restaurants'
import { session } from './session'

describe('Reducers', () => {
  let restaurantsTestData,
    sessionTestData,
    initialRestaurantsState,
    initialSessionState

  beforeEach(() => {
    initialRestaurantsState = []
    initialSessionState = {
      searchApplied: false,
      filteredRestaurants: [],
      currentPageNumber: 1,
      genreFilter: '',
      stateFilter: '',
      attireFilter: '',
    }

    restaurantsTestData = [
      {
        address1: 'address1',
        attire: 'attire1',
        city: 'city1',
        genre: 'genre1',
        genreArray: ['genre A', 'genre B'],
        hours: 'hours',
        id: '1',
        lat: '1',
        long: '1',
        name: 'name1',
        state: 'state',
        tags: 'tagA,tagB',
        tagsArray: ['tagA', 'tagB'],
        telephone: '1',
        website: 'website1',
        zip: '1',
      },
      {
        address1: 'address2',
        attire: 'attire2',
        city: 'city2',
        genre: 'genre2',
        genreArray: ['genre A', 'genre B'],
        hours: 'hours',
        id: '2',
        lat: '2',
        long: '2',
        name: 'name2',
        state: 'state',
        tags: 'tagA,tagB',
        tagsArray: ['tagA', 'tagB'],
        telephone: '2',
        website: 'website2',
        zip: '2',
      },
    ]
  })

  it('should return restaurants state with updated restaurants info', () => {
    const action = {
      type: 'FETCH_RESTAURANTS',
      restaurantsSortedByName: restaurantsTestData,
    }
    const result = restaurants(initialRestaurantsState, action)
    expect(result).toEqual(restaurantsTestData)
  })
})
