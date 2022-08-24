/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    searchedMovie: null,
    searchedMovieCount: null,
    searchMovieText: null
  };
}
