<script context="module">
	export async function load({ fetch, params }) {
		const movieId = params.id;
		console.log('params', params.id);

		const res = await fetch(
			`${import.meta.env.VITE_TMDB_API_BASE}/movie/${movieId}?api_key=${
				import.meta.env.VITE_TMDB_API_KEY
			}&language=en-US`
		);

		const data = await res.json();

		console.log(data);

		return {
			props: {
				movieId: params.id,
				movieDetail: data
			}
		};
	}
</script>

<script>
	export let movieId;
	export let movieDetail;
</script>

<h1>{movieId}</h1>
<h2>{movieDetail.overview}</h2>
<a href="/">back to home</a>
