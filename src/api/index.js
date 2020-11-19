import axios from 'axios'

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

const API_KEY = 'Api-Key q3MNxtfep8Gt'

export const fetchRestaurants = () =>
  axios.get(URL, {
    headers: {
      Authorization: API_KEY,
    },
  })
