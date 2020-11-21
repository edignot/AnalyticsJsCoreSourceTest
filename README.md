# Restaurants Search Engine

[![Netlify Status](https://api.netlify.com/api/v1/badges/20de585e-8e3f-4c91-b6d1-568d785e288a/deploy-status)](https://app.netlify.com/sites/restaurantsearchengine/deploys)

## https://restaurantsearchengine.netlify.app/

![Restaurants Search Engine](/restaurantsmockup.jpg)

## About:

This is a simple one page React Application that pull restaurant data from a single API, displays all the data in the table and allows users to search restaurants by either name, state or genre. All filters and search can be applied separately or combined together.

#### App presentation video:

[![Video App Presentation](/restaurants.jpg)](https://vimeo.com/481528645)

## Completed MVP User Stories:

- [x] A user should be able to see a table with the name, city, state, phone number, and genres for each restaurant.
- [x] A user should see results sorted by name in alphabetical order starting with the beginning of the alphabet
- [x] A user should be able to filter restaurants by state.
- [x] A user should be able to filter by genre.
- [x] State and Genre filters should default to “All” and take effect instantaneously (no additional clicks).
- [x] A user should be able to enter text into a search field. When hitting the enter key or clicking on a search
      button, the table should search results. Search results should match either the name, city, or genre.
- [x] A user should be able to clear the search by clearing the text value in the search input.
- [x] A user should only see 10 results at a time and the table should be paginated.
- [x] A user should be able to combine filters and search. The user should be able to turn filters on and off while a
      search value is present.
- [x] If any of the filters do not return any restaurants, the UI should indicate that no results were found.

## Completed Strech Goals:

<<<<<<< HEAD

=======

> > > > > > > 6da3f94609d661b6778a77bb9ff11dfc9229a9ac

- [x] CI/CD
- [x] Unit Testing ( +some integration testing )
- [x] A user can click table row to see additional information
- [x] A user can also filter by attire and combine attire filter with other filters and search

## Future Goals

- [ ] Add more integration tests, test button click, search, filters...
- [ ] Display mini-map when more information is showed
- [ ] Add filter by tags functionality and combine it with other filters
- [ ] Ability to use filters by clicking on tag or genre directly
- [ ] Add some media queries, make the app fully responsive
- [ ] Utilize PWA
- [ ] Refactor combining filters functionality or move it to separate components

## Kanban Project Board

Used GitHub Projects to track progress of development
https://github.com/edignot/Restaurants/projects/1

## Tech Stack:

#### `Javascript | ES6`

I used multiple array prototypes e.g. reduce, map, forEach... to convert data as needed. Also many other ES6 features like object restructuring or arrow functions.

#### `React | React Hooks | PropTypes`

I always choose React together with React Hooks, that allows me to use only functional components.

#### `Redux | Redux Thunk | Redux Hooks`

I prefer Redux, because it makes application more scalable in the future if needed. Redux setup is relatively easy and low time consuming, especially when utilizing Redux Hooks. I have used Redux Thunk to make it easier to dispatch action that makes a network request.

#### `Axios`

I prefer using Axios rather that Fetch, because Axios transforms JSON data automatically, so syntax is a bit cleaner.

#### `Netlify CI`

Deployed on Netlify https://restaurantssearchengine.netlify.app/ and automatically builds after master updates [![Netlify Status](https://api.netlify.com/api/v1/badges/20de585e-8e3f-4c91-b6d1-568d785e288a/deploy-status)](https://app.netlify.com/sites/restaurantsearchengine/deploys)

#### `Jest | React Testing Library`

I ussually add unit as well as integration tests for each project I'm building. This time I mostly unit tested and only added a few integrations tests, because of short timeframe. I'll keep working on the tests in the future

#### `CSS`

My initial idea was to use SCSS ( I'm a big fan of it ), utilize SCSS mixins and other functionalities. But due to short timeframe given for this code challenge I decided to style my app with plain CSS. I was still able to use CSS variables for colors and plan to add more varianbles for constants or switch to SCSS in the future.

## File Structure:

### Here you can find links fo files and some code snippets from those files.

### Testing

#### Redux Testing

- [Session Action Creators test file](https://github.com/edignot/Restaurants/blob/master/src/actions/session.test.js)

```
...
  it('should have a type FILTER_RESTAURANTS', () => {
    const action = {
      type: 'FILTER_RESTAURANTS',
      filteredRestaurants,
    }
    const result = actions.filterRestaurants(filteredRestaurants)
    expect(result).toEqual(action)
  })
...
  it('should have a type SET_STATE_FILTER', () => {
    const action = {
      type: 'SET_STATE_FILTER',
      stateFilter,
    }
    const result = actions.setStateFilter(stateFilter)
    expect(result).toEqual(action)
  })
...
```

- [Reducers test file](https://github.com/edignot/Restaurants/blob/master/src/reducers/reducers.test.js)

```
...
  it('should return session state with updated genre filter', () => {
    const action = {
      type: 'SET_GENRE_FILTER',
      genreFilter: sessionTestData.genreFilter,
    }
    const result = session(sessionState, action)
    expect(result).toEqual({
      ...sessionState,
      genreFilter: sessionTestData.genreFilter,
    })
  })
...
```

#### React Components

- [Restaurant test file](https://github.com/edignot/Restaurants/blob/master/src/components/Restaurant/Restaurant.test.js)

```
...
describe('Restaurant', () => {
  let RestaurantComponent, store, mockStore, initialState, restaurant

  beforeEach(() => {
    initialState = initialStateTestData
    restaurant = initialStateTestData.restaurants[0]

    mockStore = configureStore()
    store = mockStore(initialState)

    RestaurantComponent = render(
      <Provider store={store}>
        <Restaurant restaurant={restaurant} />
      </Provider>,
    )
  })

  it('Restaurant Component should successfully render', () => {
    const { getByText } = RestaurantComponent
    expect(getByText(restaurant.name)).toBeInTheDocument()

    expect(
      getByText(`${restaurant.city} , ${restaurant.state}`),
    ).toBeInTheDocument()

    expect(getByText(`+1 ${restaurant.telephone}`)).toBeInTheDocument()

    for (const genre of restaurant.genreArray) {
      expect(getByText(genre)).toBeInTheDocument()
    }

    expect(
      getByText(
        `${restaurant.address1} ${restaurant.city} ${restaurant.state} ${restaurant.zip}`,
      ),
    ).toBeInTheDocument()

    expect(getByText(restaurant.hours)).toBeInTheDocument()

    expect(getByText(restaurant.website)).toBeInTheDocument()

    for (const tag of restaurant.tagsArray) {
      expect(getByText(`# ${tag}`)).toBeInTheDocument()
    }

    expect(getByText(restaurant.attire)).toBeInTheDocument()
  })
})
```

- [Layout test file](https://github.com/edignot/Restaurants/blob/master/src/components/Layout/Layout.test.js)
- [App test file](https://github.com/edignot/Restaurants/blob/master/src/components/App/App.test.js)
- [Dropdown test file](https://github.com/edignot/Restaurants/blob/master/src/containers/Dropdown/Dropdown.test.js)
- []()
- []()
- []()
- []()
- []()

### React Components

#### Pages ( Right now this app had only one page, so no React Router is used )

- [Restaurants Page component file](https://github.com/edignot/Restaurants/blob/master/src/pages/RestaurantsPage/RestaurantsPage.js)

```
import React from 'react'
import Restaurants from '../../containers/Restaurants/Restaurants'
import Form from '../../containers/Form/Form'
import './RestaurantsPage.css'

const RestaurantsPage = () => {
  return (
    <section className='restaurants-page-container'>
      <Form />
      <Restaurants />
    </section>
  )
}

export default RestaurantsPage
```

#### Containers ( uses global Redux store )

- [Seacrch and Filters Form component file](https://github.com/edignot/Restaurants/blob/master/src/containers/Form/Form.js)

```
...
  const searchHandler = () => {
    const filteredRestaurants = restaurants.reduce((filtered, restaurant) => {
      if (
        restaurant.name.toUpperCase().includes(searchValue.toUpperCase()) ||
        restaurant.city.toUpperCase().includes(searchValue.toUpperCase()) ||
        restaurant.genre.toUpperCase().includes(searchValue.toUpperCase())
      ) {
        filtered.push(restaurant.id)
      }
      return filtered
    }, [])
    dispatch(filterRestaurants(filteredRestaurants))
  }
...
```

- [Pagination component file](https://github.com/edignot/Restaurants/blob/master/src/containers/Pagination/Pagination.js)

```
...
const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul className='pages-wrapper'>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className='page-item'
          onClick={() => {
            paginate(number)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <p>{number}</p>
        </li>
      ))}
    </ul>
  )
}
...
```

- [Restaurants component file](https://github.com/edignot/Restaurants/blob/master/src/containers/Restaurants/Restaurants.js)

```
...
const Restaurants = () => {
  const dispatch = useDispatch()

  const restaurants = useSelector((store) => store.restaurants)

  const session = useSelector((store) => store.session)

  const [loading, setLoading] = useState(false)
  const [restaurantsPerPage] = useState(10)

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true)
      await dispatch(getRestaurants())
      setLoading(false)
    }
    fetchRestaurants()
  }, [dispatch])
...
```

- [Dropdown Filter component file](https://github.com/edignot/Restaurants/blob/master/src/containers/Dropdown/Dropdown.js)

```
...
const Dropdown = ({ possibleOptions, title, type }) => {
  const dispatch = useDispatch()

  const handleSelectorChange = (e) => {
    e.target.value === '' &&
      type === 'genre' &&
      dispatch(setGenreFilter(e.target.value))

    e.target.value === '' &&
      type === 'state' &&
      dispatch(setStateFilter(e.target.value))

    e.target.value === '' &&
      type === 'attire' &&
      dispatch(setAttireFilter(e.target.value))

    type === 'genre' && dispatch(setGenreFilter(e.target.value))
    type === 'attire' && dispatch(setAttireFilter(e.target.value))
    type === 'state' && dispatch(setStateFilter(e.target.value))

    dispatch(setCurrentPageNumber(1))
    e.target.value = ''
  }
...
```

#### Components ( don't use global Redux store )

- [ALL COMPONENTS](https://github.com/edignot/Restaurants/tree/master/src/components)
  - e.g. [Layout (Includes Header and Footer and renders children any components) component file](https://github.com/edignot/Restaurants/blob/master/src/components/Layout/Layout.js)

```
import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
```

- e.g. [Restaurant Card component file](https://github.com/edignot/Restaurants/blob/master/src/components/Restaurant/Restaurant.js)

```
  const genres = genreArray.map((genre) => (
    <li key={uid()} className='genres-item'>
      {genre}
    </li>
  ))
```

### Api Calls

- [Api calls file](https://github.com/edignot/Restaurants/blob/master/src/api/index.js)

```
import axios from 'axios'

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

const API_KEY = `Api-Key ${process.env.REACT_APP_API_KEY}`

export const fetchRestaurants = () =>
  axios.get(URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
```

### Redux

### Reducers

- [Session Reducer file](https://github.com/edignot/Restaurants/blob/master/src/reducers/session.js)
- [Restaurants Data Reducer file](https://github.com/edignot/Restaurants/blob/master/src/reducers/restaurants.js)

```
export default (restaurants = [], action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS':
      return action.payload
    default:
      return restaurants
  }
}
```

### Action Creators

-[Restaurants Actions with Redux Thunk file](https://github.com/edignot/Restaurants/blob/master/src/reducers/restaurants.js)

```
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
```

-[Session Actions file](https://github.com/edignot/Restaurants/blob/master/src/actions/session.js)

```
...
export const clearAll = () => ({
  type: 'CLEAR_ALL',
})

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: 'SET_CURRENT_PAGE_NUMBER',
  currentPageNumber,
})

export const setGenreFilter = (genreFilter) => ({
  type: 'SET_GENRE_FILTER',
  genreFilter,
})
...
```

---

## Development Instructions:

- clone repo
- run `npm i`
- create .env file and add `REACT_APP_API_KEY=<change this to valid API key>`
- run `npm start`
- open `http://localhost:3000`

## Contributors:

- [Edita Ignot](https://github.com/edignot)
