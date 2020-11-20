# Restaurants Search Engine

## https://edignot.com/

![Restaurants Search Engine](/restaurantsmockup.jpg)

## About:
This is a simple one page React Application that pull restaurant data from a single API, displays all the data in the table and allows users to search restaurants by either name, state or genre. All filters and search can be applied separately or combined together. 

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
- [ ] CI/CD
- [ ] Unit Testing
- [ ] Integration Testing
- [x] A user can click table row to see additional information
- [x] A user can also filter by attire and combine attire filter with other filters and search

## Tech Stack:

#### `Javascript | ES6`

I used multiple array prototypes e.g. reduce, map, forEach... to convert data as needed. Also many other ES6 features like object restructuring or arrow functions.

#### `React | React Hooks`

I always choose React together with React Hooks, that allows me to use only functional components.

#### `Redux | Redux Thunk | Redux Hooks`

I prefer Redux, because it makes application more scalable in the future if needed. Redux setup is relatively easy and low time consuming, especially when utilizing Redux Hooks. I have used Redux Thunk to make it easier to dispatch action that makes a network request.

#### `Axios`

I prefer using Axios rather that Fetch, because Axios transforms JSON data automatically, so syntax is a bit cleaner.

#### `Jest | React Testing Library`

I ussually add unit as well as integration tests for each project I'm building. This time I mostly unit tested and only added a few integrations tests, because of short timeframe. I'll keep working on the tests in the future

#### `CSS`

My initial idea was to use SCSS ( I'm a big fan of it ), utilize SCSS mixins and other functionalities. But due to short timeframe given for this code challenge I decided to style my app with plain CSS. I was still able to use CSS variables for colors and plan to add more varianbles for constants or switch to SCSS in the future.

#### `Travis CI`

---

## Development Instructions:
- clone repo 
- run `npm i`
- run `npm start`
- open `http://localhost:3000`

## Contributors:
- [Edita Ignot](https://github.com/edignot)


