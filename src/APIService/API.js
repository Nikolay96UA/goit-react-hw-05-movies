const API_KEY = 'api_key=769fcbb48918d83fb14b0a6771770fda';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND_DAY = 'trending/movie/day';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

export async function getMovies() {
  return await fetch(`${BASE_URL}${TREND_DAY}?${API_KEY}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function searchMovies(query) {
  return await fetch(`${BASE_URL}search/movie?${API_KEY}&query=${query}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function getMovieDetails(movieId) {
  return await fetch(`${BASE_URL}movie/${movieId}?${API_KEY}&language=en-US`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function getMoviesCredits(movieId) {
  return await fetch(
    `${BASE_URL}movie/${movieId}/credits?${API_KEY}&language=en-US`
  )
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function getMoviesReviews(movieId) {
  return await fetch(
    `${BASE_URL}movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1}`
  )
    .then(response => response.json())
    .catch(error => console.log(error));
}
