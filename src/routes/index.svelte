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
	import { fly } from 'svelte/transition';
	import PopularMovies from '../components/PopularMovies.svelte';

	export let popular;
</script>

<main in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<PopularMovies {popular} />
</main>
