// /** @type {import('./$types').PageLoad} */
// export async function load({ fetch }) {
//   const res = await fetch(
//     `${import.meta.env.VITE_TMDB_API_BASE}/movie/popular?api_key=${
//       import.meta.env.VITE_TMDB_API_KEY
//     }&language=en-US&page=1`
//   );
//   const data = await res.json();
//   console.log('API', data);
//   if (res.ok) {
//     return {
//       popular: data.results
//     };
//   }
// }

let defaultSearchValue = 'Marvel';

export async function load({ fetch }) {
  const resAPI_1 = await fetch(
    `${import.meta.env.VITE_TMDB_API_BASE}/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&page=1`
  );
  const dataAPI_1 = await resAPI_1.json();

  const searchMovieText = defaultSearchValue;
  const resAPI_2 = await fetch(
    `${import.meta.env.VITE_TMDB_API_BASE}/search/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US&page=1&include_adult=false&query=${searchMovieText}`
  );
  const dataAPI_2 = await resAPI_2.json();

  return {
    popular: resAPI_1.ok && dataAPI_1.results,
    searchedMovie: resAPI_2.ok && dataAPI_2.results,
    searchedMovieCount: resAPI_2.ok && dataAPI_2.total_results,
    searchMovieText
  };
}
