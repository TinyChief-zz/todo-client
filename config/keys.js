export default {
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : 'https://fast-woodland-26936.herokuapp.com/'
    // : 'https://desolate-anchorage-48724.herokuapp.com/api'
}
