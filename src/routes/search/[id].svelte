<script context="module">
	export async function load({ fetch, params }) {
		const searchMovieId = params.id;
		const res = await fetch(
			`${import.meta.env.VITE_TMDB_API_BASE}/search/movie?api_key=${
				import.meta.env.VITE_TMDB_API_KEY
			}&language=en-US&page=1&include_adult=false&query=${searchMovieId}`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					searchMovie: data.results
				}
			};
		}
	}
</script>
