import axios from 'axios'

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

const API_KEY = `Api-Key ${process.env.REACT_APP_API_KEY}`

export const fetchRestaurants = () =>
  axios.get(URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
