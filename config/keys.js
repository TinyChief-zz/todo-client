export default {
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : 'https://desolate-anchorage-48724.herokuapp.com/api'
}
