<script context="module">
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
				props: {
					popular: data.results
				}
			};
		}
	}
</script>

<script>
	import PopularMovies from '../component/PopularMovies.svelte';

	export let popular;
</script>

<main>
	<h1>Home</h1>
	<PopularMovies {popular} />
</main>
