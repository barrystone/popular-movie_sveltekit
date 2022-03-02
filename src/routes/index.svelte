<script context="module">
	export async function load({ fetch }) {
		const base = 'https://api.themoviedb.org/3';

		const res = await fetch(
			`${base}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
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

<h1>Home</h1>

<PopularMovies {popular} />

<a href="/about">about page</a>
