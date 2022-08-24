export async function load({ fetch, params }) {
  const movieId = params.id;
  const res = await fetch(
    `${import.meta.env.VITE_TMDB_API_BASE}/movie/${movieId}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US`
  );

  const data = await res.json();

  return {
    movieDetail: data
  };
}
