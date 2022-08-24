// /** @type {import('./$types').PageLoad} */
let defaultSearchValue = 'Marvel';

export async function load({ fetch }) {
  const res = await fetch(
    `${import.meta.env.VITE_TMDB_API_BASE}/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&page=1`
  );
  const data = await res.json();
  // console.log('API', data);
  if (res.ok) {
    return {
      popular: data.results,
      searchMovieText: defaultSearchValue
    };
  }
}
