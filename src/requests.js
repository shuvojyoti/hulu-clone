/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "f7b5de4cead73248cda6038258344fe5";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // eslint-disable-next-line no-dupe-keys
  fetchTopRated: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
